import { Download, Plus, RotateCcw, Save, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { FilAriane } from '../components/Layout';
import { Texte } from '../components/Texte';
import { fr, lireNombre } from '../lib/calculs';
import { useStocke } from '../lib/stockage';
import { Graphique, type Droite, type Point, type Segment, type Zone } from '../schemas/Graphique';
import { BandeauSection } from './Techniques';

/* =====================================================================
   Atelier de courbes : chaque courbe est une droite P = a + b·Q.
   Tous les points et toutes les aires sont calculés (aucune valeur à l'œil).
   ===================================================================== */

type TypeCourbe = 'demande' | 'offre' | 'cout' | 'autre';

export interface CourbePerso {
  id: string;
  nom: string;
  type: TypeCourbe;
  /** ordonnée à l'origine : prix quand Q = 0 */
  a: number;
  /** pente : variation du prix quand Q augmente de 1 */
  b: number;
  pointille: boolean;
  visible: boolean;
}

export interface ConfigCourbes {
  titre: string;
  libQ: string;
  libP: string;
  qMax: number | null;
  pMax: number | null;
  courbes: CourbePerso[];
  equilibres: boolean;
  surplus: boolean;
  /** taxe forfaitaire unitaire sur la première offre (0 = aucune) */
  taxe: number;
  /** prix imposé (plafond ou plancher), null = aucun */
  prixImpose: number | null;
}

const nouvelId = () => `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

const C = (nom: string, type: TypeCourbe, a: number, b: number, pointille = false): CourbePerso => ({
  id: nouvelId(),
  nom,
  type,
  a,
  b,
  pointille,
  visible: true,
});

const BASE: Omit<ConfigCourbes, 'titre' | 'courbes'> = {
  libQ: 'Quantité',
  libP: 'Prix',
  qMax: null,
  pMax: null,
  equilibres: true,
  surplus: false,
  taxe: 0,
  prixImpose: null,
};

export const MODELES: { nom: string; config: () => ConfigCourbes }[] = [
  {
    nom: 'Marché du cours',
    config: () => ({ ...BASE, titre: 'Équilibre du marché', courbes: [C('Demande', 'demande', 10, -0.5), C('Offre', 'offre', 2, 0.5)] }),
  },
  {
    nom: 'Surplus',
    config: () => ({ ...BASE, titre: 'Surplus du consommateur et du producteur', surplus: true, courbes: [C('Demande', 'demande', 10, -0.5), C('Offre', 'offre', 2, 0.5)] }),
  },
  {
    nom: 'Hausse de la demande',
    config: () => ({
      ...BASE,
      titre: 'Déplacement de la demande',
      courbes: [C('D1', 'demande', 10, -0.5), C('D2', 'demande', 12, -0.5, true), C('Offre', 'offre', 2, 0.5)],
    }),
  },
  {
    nom: 'Taxe de 2',
    config: () => ({ ...BASE, titre: 'Taxe forfaitaire unitaire', taxe: 2, courbes: [C('Demande', 'demande', 10, -0.5), C('Offre', 'offre', 2, 0.5)] }),
  },
  {
    nom: 'Prix plafond',
    config: () => ({ ...BASE, titre: 'Prix plafond et pénurie', prixImpose: 4, courbes: [C('Demande', 'demande', 10, -0.5), C('Offre', 'offre', 2, 0.5)] }),
  },
  {
    nom: 'Monopole',
    config: () => ({
      ...BASE,
      titre: 'Monopole : Rm = Cm',
      equilibres: false,
      courbes: [C('Demande', 'demande', 10, -0.5), C('Rm', 'autre', 10, -1, true), C('Cm', 'cout', 2, 0)],
    }),
  },
];

const STYLE: Record<TypeCourbe, [Droite['style'], Droite['style']]> = {
  demande: ['demande', 'demande2'],
  offre: ['offre', 'offre2'],
  cout: ['cout', 'cout'],
  autre: ['demande', 'demande2'],
};

const intersecter = (d1: { a: number; b: number }, d2: { a: number; b: number }) => {
  if (Math.abs(d1.b - d2.b) < 1e-12) return null;
  const q = (d2.a - d1.a) / (d1.b - d2.b);
  return { q, p: d1.a + d1.b * q };
};
const qPour = (d: { a: number; b: number }, p: number) => (d.b === 0 ? NaN : (p - d.a) / d.b);
const dansLeCadre = (pt: { q: number; p: number } | null): pt is { q: number; p: number } => !!pt && pt.q >= 0 && pt.p >= 0;
const arr = (x: number) => Math.round(x * 100) / 100;

/** Tous les calculs du graphique, à partir de la configuration */
export function calculerGraphique(cfg: ConfigCourbes) {
  const vis = cfg.courbes.filter((c) => c.visible);
  const D = vis.find((c) => c.type === 'demande');
  const O = vis.find((c) => c.type === 'offre');
  const demandes = vis.filter((c) => c.type === 'demande');
  const offres = vis.filter((c) => c.type === 'offre');

  const equilibres = cfg.equilibres
    ? demandes.flatMap((d) =>
        offres.map((o) => ({ d, o, pt: intersecter(d, o) })).filter((e): e is { d: CourbePerso; o: CourbePerso; pt: { q: number; p: number } } => dansLeCadre(e.pt)),
      )
    : [];
  // intersections des autres courbes (ex. Rm et Cm)
  const autres = vis.filter((c) => c.type === 'autre' || c.type === 'cout');
  const croisements = autres.flatMap((x, i) =>
    autres.slice(i + 1).map((y) => ({ x, y, pt: intersecter(x, y) })).filter((e): e is { x: CourbePerso; y: CourbePerso; pt: { q: number; p: number } } => dansLeCadre(e.pt)),
  );

  const E = D && O ? intersecter(D, O) : null;
  const marcheValide = !!(D && O && dansLeCadre(E) && D.b < 0 && O.b > 0);

  // Taxe
  let taxe: null | { O2: { a: number; b: number }; Et: { q: number; p: number }; pRecu: number; recettes: number; perte: number } = null;
  if (marcheValide && cfg.taxe > 0) {
    const O2 = { a: O!.a + cfg.taxe, b: O!.b };
    const Et = intersecter(D!, O2);
    if (dansLeCadre(Et)) {
      const pRecu = Et.p - cfg.taxe;
      taxe = { O2, Et, pRecu, recettes: cfg.taxe * Et.q, perte: (cfg.taxe * (E!.q - Et.q)) / 2 };
    }
  }

  // Surplus (sur l'équilibre, ou sur l'équilibre avec taxe)
  let surplus: null | { sc: number; sp: number; zones: Zone[] } = null;
  if (marcheValide && cfg.surplus) {
    const q = taxe ? taxe.Et.q : E!.q;
    const pc = taxe ? taxe.Et.p : E!.p;
    const pp = taxe ? taxe.pRecu : E!.p;
    const sc = ((D!.a - pc) * q) / 2;
    // surplus du producteur : aire entre pp et l'offre, de 0 à q (l'offre peut couper l'axe des quantités)
    let spZone: [number, number][];
    let sp: number;
    if (O!.a >= 0) {
      spZone = [[0, pp], [0, O!.a], [q, pp]];
      sp = ((pp - O!.a) * q) / 2;
    } else {
      const q0 = -O!.a / O!.b;
      spZone = [[0, pp], [0, 0], [q0, 0], [q, pp]];
      sp = ((q + q0) * pp) / 2; // trapèze : côtés horizontaux q (en haut) et q0 (sur l'axe)
    }
    surplus = {
      sc,
      sp,
      zones: [
        { points: [[0, D!.a], [0, pc], [q, pc]], motif: 'pale', etiquette: 'SC', at: [q / 3, (D!.a + 2 * pc) / 3 - 0.1] },
        { points: spZone, motif: 'hachures', etiquette: 'SP', at: [q / 3, (Math.max(O!.a, 0) + 2 * pp) / 3 - 0.1] },
      ],
    };
  }

  // Prix imposé
  let impose: null | { p: number; qd: number; qo: number } = null;
  if (marcheValide && cfg.prixImpose !== null && cfg.prixImpose >= 0) {
    impose = { p: cfg.prixImpose, qd: qPour(D!, cfg.prixImpose), qo: qPour(O!, cfg.prixImpose) };
  }

  // Échelle automatique
  const qs: number[] = [1];
  const ps: number[] = [1];
  for (const c of vis) {
    if (c.a > 0) ps.push(c.a);
    if (c.b < 0 && c.a > 0) qs.push(-c.a / c.b);
  }
  for (const e of equilibres) {
    qs.push(e.pt.q * 1.6);
    ps.push(e.pt.p * 1.6);
  }
  for (const e of croisements) {
    qs.push(e.pt.q * 1.6);
    ps.push(e.pt.p * 1.6);
  }
  if (impose) ps.push(impose.p * 1.2);
  if (taxe) ps.push(taxe.Et.p * 1.3);
  const qMax = cfg.qMax ?? Math.ceil(Math.max(...qs) * 1.1);
  const pMax = cfg.pMax ?? Math.ceil(Math.max(...ps) * 1.15);

  return { vis, D, O, E, marcheValide, equilibres, croisements, taxe, surplus, impose, qMax, pMax };
}

/* ---------- Petits champs ---------- */

function ChampNombre({ label, valeur, onChange, min, max, pas }: { label: string; valeur: number; onChange: (v: number) => void; min: number; max: number; pas: number }) {
  const [texte, setTexte] = useState(String(valeur).replace('.', ','));
  const [focus, setFocus] = useState(false);
  const affiche = focus ? texte : String(arr(valeur)).replace('.', ',');
  return (
    <label className="atelier-champ">
      <span className="ui ui-gris">{label}</span>
      <span className="atelier-saisie">
        <input
          type="range"
          min={min}
          max={max}
          step={pas}
          value={Math.min(max, Math.max(min, valeur))}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={`${label} (curseur)`}
        />
        <input
          className="atelier-nombre"
          inputMode="decimal"
          value={affiche}
          onFocus={() => {
            setFocus(true);
            setTexte(String(arr(valeur)).replace('.', ','));
          }}
          onBlur={() => setFocus(false)}
          onChange={(e) => {
            setTexte(e.target.value);
            const n = lireNombre(e.target.value);
            if (n !== null) onChange(n);
          }}
          aria-label={label}
        />
      </span>
    </label>
  );
}

/* ---------- Export ---------- */

const COULEURS: Record<string, string> = {
  '--encre': '#1A1A1A',
  '--orange': '#F37021',
  '--orange-pale': '#FDE9DC',
  '--brun': '#4A2C1D',
  '--gris': '#6F6961',
  '--carte': '#FFFFFF',
  '--fond': '#FBF8F3',
};

function svgAutonome(svg: SVGSVGElement) {
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', '1000');
  clone.setAttribute('height', String(Math.round((1000 * svg.viewBox.baseVal.height) / svg.viewBox.baseVal.width)));
  clone.querySelectorAll('[pathLength]').forEach((el) => el.removeAttribute('pathLength'));
  let s = new XMLSerializer().serializeToString(clone);
  s = s.replace(/var\((--[a-z-]+)\)/g, (_, v: string) => COULEURS[v] ?? '#1A1A1A');
  const style = `<style>
    .g-axe{font:600 12.5px Inter,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;fill:#1A1A1A}
    .g-grad{font:13.5px Inter,Arial,sans-serif;fill:#6F6961}
    .g-courbe{font:italic 18px Georgia,serif;fill:#1A1A1A;paint-order:stroke;stroke:#fff;stroke-width:5px;stroke-linejoin:round}
    .g-point{font:600 20px Georgia,serif;fill:#1A1A1A}
    .g-etiq,.g-zone{font:600 13px Inter,Arial,sans-serif;fill:#1A1A1A;paint-order:stroke;stroke:#fff;stroke-width:4px;stroke-linejoin:round}
  </style><rect width="100%" height="100%" fill="#FFFFFF"/>`;
  return s.replace(/(<svg[^>]*>)/, `$1${style}`);
}

function telecharger(nom: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nom;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const nomFichier = (t: string) =>
  (t || 'courbes')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'courbes';

/* ---------- Page ---------- */

export function Courbes() {
  const [cfg, setCfg] = useStocke<ConfigCourbes>('courbes:courant', MODELES[0].config());
  const [sauvegardes, setSauvegardes] = useStocke<{ nom: string; cfg: ConfigCourbes }[]>('courbes:sauvegardes', []);
  const [message, setMessage] = useState('');
  const zone = useRef<HTMLDivElement>(null);

  const maj = (p: Partial<ConfigCourbes>) => setCfg((c) => ({ ...c, ...p }));
  const majCourbe = (id: string, p: Partial<CourbePerso>) => setCfg((c) => ({ ...c, courbes: c.courbes.map((x) => (x.id === id ? { ...x, ...p } : x)) }));
  const ajouter = () =>
    setCfg((c) => {
      const nbD = c.courbes.filter((x) => x.type === 'demande').length;
      const nbO = c.courbes.filter((x) => x.type === 'offre').length;
      const nouvelle = nbD <= nbO ? C(`D${nbD + 1}`, 'demande', 12, -0.5, true) : C(`O${nbO + 1}`, 'offre', 1, 0.5, true);
      return { ...c, courbes: [...c.courbes, nouvelle] };
    });
  const flash = (m: string) => {
    setMessage(m);
    window.setTimeout(() => setMessage(''), 2200);
  };

  const r = calculerGraphique(cfg);

  // Construction du graphique
  const droites: Droite[] = r.vis.map((c) => ({ a: c.a, b: c.b, etiquette: c.nom, style: STYLE[c.type][c.pointille ? 1 : 0] }));
  const points: Point[] = [];
  const zones: Zone[] = [];
  const segments: Segment[] = [];
  const textes: { q: number; p: number; texte: string; ancre?: 'start' | 'middle' | 'end' }[] = [];

  if (r.surplus) zones.push(...r.surplus.zones);
  if (r.taxe) {
    droites.push({ a: r.taxe.O2.a, b: r.taxe.O2.b, etiquette: `${r.O!.nom} + taxe`, style: 'offre2' });
    zones.push(
      { points: [[0, r.taxe.pRecu], [r.taxe.Et.q, r.taxe.pRecu], [r.taxe.Et.q, r.taxe.Et.p], [0, r.taxe.Et.p]], motif: 'orange' },
      { points: [[r.taxe.Et.q, r.taxe.Et.p], [r.taxe.Et.q, r.taxe.pRecu], [r.E!.q, r.E!.p]], motif: 'brun' },
    );
    points.push({ q: r.taxe.Et.q, p: r.taxe.Et.p, etiquette: "E'", projections: true, libQ: fr(r.taxe.Et.q, 2), libP: fr(r.taxe.Et.p, 2) });
    points.push({ q: r.taxe.Et.q, p: r.taxe.pRecu, projections: false });
  }
  r.equilibres.forEach((e, i) =>
    points.push({
      q: e.pt.q,
      p: e.pt.p,
      etiquette: r.equilibres.length > 1 ? `E${i + 1}` : 'E',
      projections: true,
      libQ: fr(e.pt.q, 2),
      libP: fr(e.pt.p, 2),
    }),
  );
  r.croisements.forEach((e) => points.push({ q: e.pt.q, p: e.pt.p, projections: true, libQ: fr(e.pt.q, 2), libP: fr(e.pt.p, 2) }));
  if (r.impose) {
    droites.push({ a: r.impose.p, b: 0, etiquette: 'Prix imposé', style: 'cout' });
    const { qd, qo } = r.impose;
    if (qd >= 0 && qo >= 0 && Math.abs(qd - qo) > 1e-9) {
      segments.push({ de: [Math.min(qd, qo), r.impose.p], a: [Math.max(qd, qo), r.impose.p] });
      textes.push({ q: (qd + qo) / 2, p: r.impose.p + r.pMax * 0.04, texte: qd > qo ? 'Pénurie' : 'Excès d’offre' });
    }
  }

  const exporter = (format: 'svg' | 'png') => {
    const svg = zone.current?.querySelector('svg');
    if (!svg) return;
    const texte = svgAutonome(svg);
    const nom = nomFichier(cfg.titre);
    if (format === 'svg') return telecharger(`${nom}.svg`, new Blob([texte], { type: 'image/svg+xml' }));
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(2, 2);
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((b) => b && telecharger(`${nom}.png`, b), 'image/png');
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(texte);
  };

  return (
    <>
      <BandeauSection
        sur="Atelier"
        titre="Courbes"
        chapo="Construis tes propres graphiques : courbes d’offre, de demande, de coût… L’équilibre, les surplus, la taxe et le prix imposé sont calculés automatiquement."
      />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Courbes' }]} />

        <div className="atelier-modeles" role="group" aria-label="Modèles">
          <span className="ui ui-gris">Partir d’un modèle</span>
          <div className="atelier-modeles-liste">
            {MODELES.map((m) => (
              <button key={m.nom} className="btn btn-petit" onClick={() => setCfg(m.config())}>
                {m.nom}
              </button>
            ))}
          </div>
        </div>

        <div className="atelier">
          <section className="atelier-graphe" aria-label="Graphique">
            <input className="atelier-titre" value={cfg.titre} onChange={(e) => maj({ titre: e.target.value })} aria-label="Titre du graphique" placeholder="Titre du graphique" />
            <div className="schema-cadre" ref={zone}>
              <Graphique
                qMax={r.qMax}
                pMax={r.pMax}
                libQ={cfg.libQ}
                libP={cfg.libP}
                titreAccessible={cfg.titre || 'Graphique personnalisé'}
                droites={droites}
                points={points}
                zones={zones}
                segments={segments}
                textes={textes}
              />
            </div>
            <div className="atelier-export">
              <button className="btn btn-petit" onClick={() => exporter('png')}>
                <Download size={15} strokeWidth={1.5} /> PNG
              </button>
              <button className="btn btn-petit" onClick={() => exporter('svg')}>
                <Download size={15} strokeWidth={1.5} /> SVG
              </button>
            </div>

            <div className="atelier-resultats" aria-live="polite">
              {r.equilibres.map((e, i) => (
                <div key={i} className="resultat">
                  <span className="ui ui-gris">
                    Équilibre {r.equilibres.length > 1 ? `E${i + 1}` : 'E'} ({e.d.nom} × {e.o.nom})
                  </span>
                  <span className="resultat-valeur">
                    Q* = {fr(e.pt.q, 2)} · P* = {fr(e.pt.p, 2)}
                  </span>
                </div>
              ))}
              {r.croisements.map((e, i) => (
                <div key={`x${i}`} className="resultat">
                  <span className="ui ui-gris">
                    {e.x.nom} = {e.y.nom}
                  </span>
                  <span className="resultat-valeur">
                    Q = {fr(e.pt.q, 2)} · P = {fr(e.pt.p, 2)}
                  </span>
                </div>
              ))}
              {r.surplus && (
                <div className="resultat">
                  <span className="ui ui-gris">Surplus{r.taxe ? ' (avec taxe)' : ''}</span>
                  <span className="resultat-valeur">
                    SC = {fr(r.surplus.sc, 2)} · SP = {fr(r.surplus.sp, 2)}
                  </span>
                  <span className="resultat-detail">Total : {fr(r.surplus.sc + r.surplus.sp + (r.taxe?.recettes ?? 0), 2)}{r.taxe ? ' (recettes fiscales comprises)' : ''}</span>
                </div>
              )}
              {r.taxe && (
                <div className="resultat">
                  <span className="ui ui-gris">Taxe de {fr(cfg.taxe, 2)} par unité</span>
                  <span className="resultat-valeur">Q = {fr(r.taxe.Et.q, 2)}</span>
                  <span className="resultat-detail">
                    Prix payé {fr(r.taxe.Et.p, 2)} · prix reçu {fr(r.taxe.pRecu, 2)} · recettes {fr(r.taxe.recettes, 2)} (rectangle orange) · perte sèche {fr(r.taxe.perte, 2)} (triangle foncé)
                  </span>
                </div>
              )}
              {r.impose && (
                <div className="resultat">
                  <span className="ui ui-gris">Prix imposé à {fr(r.impose.p, 2)}</span>
                  <span className="resultat-valeur">
                    {r.impose.qd > r.impose.qo ? 'Pénurie' : r.impose.qd < r.impose.qo ? 'Excès d’offre' : 'Équilibre'} de {fr(Math.abs(r.impose.qd - r.impose.qo), 2)}
                  </span>
                  <span className="resultat-detail">
                    Quantité demandée {fr(r.impose.qd, 2)} · quantité offerte {fr(r.impose.qo, 2)}
                  </span>
                </div>
              )}
              {!r.equilibres.length && !r.croisements.length && (
                <p className="calc-note">Aucun point d’intersection dans le cadre (quantité et prix positifs). Ajuste les pentes ou les ordonnées à l’origine.</p>
              )}
            </div>
          </section>

          <section className="atelier-reglages" aria-label="Réglages">
            <h2 className="atelier-h2">Courbes</h2>
            <p className="calc-note">
              Chaque courbe est une droite <Texte>{'$P = a + b \\times Q$'}</Texte> : <strong>a</strong> est le prix quand la quantité est nulle,{' '}
              <strong>b</strong> la pente (négative pour une demande, positive pour une offre).
            </p>
            <ol className="atelier-courbes">
              {cfg.courbes.map((c) => (
                <li key={c.id} className={`atelier-courbe atelier-${c.type} ${c.visible ? '' : 'est-masquee'}`}>
                  <div className="atelier-courbe-tete">
                    <input className="atelier-nom" value={c.nom} onChange={(e) => majCourbe(c.id, { nom: e.target.value })} aria-label="Nom de la courbe" />
                    <select value={c.type} onChange={(e) => majCourbe(c.id, { type: e.target.value as TypeCourbe })} aria-label="Type de courbe">
                      <option value="demande">Demande</option>
                      <option value="offre">Offre</option>
                      <option value="cout">Coût</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <ChampNombre label="a (ordonnée à l’origine)" valeur={c.a} min={-20} max={60} pas={0.5} onChange={(v) => majCourbe(c.id, { a: v })} />
                  <ChampNombre label="b (pente)" valeur={c.b} min={-5} max={5} pas={0.05} onChange={(v) => majCourbe(c.id, { b: v })} />
                  <p className="atelier-equation">
                    <Texte>{`$P = ${fr(c.a, 2).replace(',', '{,}')} ${c.b < 0 ? '-' : '+'} ${fr(Math.abs(c.b), 2).replace(',', '{,}')}\\,Q$`}</Texte>
                  </p>
                  <div className="atelier-options">
                    <label className="case">
                      <input type="checkbox" checked={c.pointille} onChange={(e) => majCourbe(c.id, { pointille: e.target.checked })} />
                      <span className="ui">Pointillés</span>
                    </label>
                    <label className="case">
                      <input type="checkbox" checked={c.visible} onChange={(e) => majCourbe(c.id, { visible: e.target.checked })} />
                      <span className="ui">Visible</span>
                    </label>
                    <button className="icone-bouton" onClick={() => setCfg((x) => ({ ...x, courbes: x.courbes.filter((y) => y.id !== c.id) }))} aria-label={`Supprimer ${c.nom}`}>
                      <Trash2 size={17} strokeWidth={1.4} />
                    </button>
                  </div>
                </li>
              ))}
            </ol>
            <button className="btn btn-plein" onClick={ajouter}>
              <Plus size={16} strokeWidth={1.75} /> Ajouter une courbe
            </button>

            <h2 className="atelier-h2">Options</h2>
            <div className="atelier-options-globales">
              <label className="case">
                <input type="checkbox" checked={cfg.equilibres} onChange={(e) => maj({ equilibres: e.target.checked })} />
                <span className="ui">Points d’équilibre</span>
              </label>
              <label className="case">
                <input type="checkbox" checked={cfg.surplus} onChange={(e) => maj({ surplus: e.target.checked })} />
                <span className="ui">Surplus</span>
              </label>
              <ChampNombre label="Taxe par unité (sur la 1re offre)" valeur={cfg.taxe} min={0} max={10} pas={0.5} onChange={(v) => maj({ taxe: Math.max(0, v) })} />
              <label className="case">
                <input type="checkbox" checked={cfg.prixImpose !== null} onChange={(e) => maj({ prixImpose: e.target.checked ? Math.round((r.E?.p ?? 5) * 0.7 * 2) / 2 : null })} />
                <span className="ui">Prix imposé (plafond ou plancher)</span>
              </label>
              {cfg.prixImpose !== null && (
                <ChampNombre label="Prix imposé" valeur={cfg.prixImpose} min={0} max={Math.max(20, r.pMax)} pas={0.5} onChange={(v) => maj({ prixImpose: v })} />
              )}
              {!r.marcheValide && (cfg.surplus || cfg.taxe > 0 || cfg.prixImpose !== null) && (
                <p className="calc-note">Surplus, taxe et prix imposé demandent une demande décroissante et une offre croissante qui se coupent avec un prix et une quantité positifs.</p>
              )}
            </div>

            <h2 className="atelier-h2">Axes</h2>
            <div className="champs">
              <label className="champ">
                <span className="ui ui-gris">Axe horizontal</span>
                <input className="champ-texte" value={cfg.libQ} onChange={(e) => maj({ libQ: e.target.value })} />
              </label>
              <label className="champ">
                <span className="ui ui-gris">Axe vertical</span>
                <input className="champ-texte" value={cfg.libP} onChange={(e) => maj({ libP: e.target.value })} />
              </label>
              <label className="champ">
                <span className="ui ui-gris">Quantité max (vide = auto)</span>
                <input className="champ-texte" inputMode="decimal" value={cfg.qMax ?? ''} onChange={(e) => maj({ qMax: lireNombre(e.target.value) && lireNombre(e.target.value)! > 0 ? lireNombre(e.target.value) : null })} placeholder={String(r.qMax)} />
              </label>
              <label className="champ">
                <span className="ui ui-gris">Prix max (vide = auto)</span>
                <input className="champ-texte" inputMode="decimal" value={cfg.pMax ?? ''} onChange={(e) => maj({ pMax: lireNombre(e.target.value) && lireNombre(e.target.value)! > 0 ? lireNombre(e.target.value) : null })} placeholder={String(r.pMax)} />
              </label>
            </div>

            <h2 className="atelier-h2">Mes graphiques</h2>
            <div className="atelier-sauver">
              <button
                className="btn btn-petit btn-plein"
                onClick={() => {
                  const nom = cfg.titre.trim() || `Graphique ${sauvegardes.length + 1}`;
                  setSauvegardes((s) => [{ nom, cfg }, ...s.filter((x) => x.nom !== nom)].slice(0, 30));
                  flash(`« ${nom} » enregistré`);
                }}
              >
                <Save size={15} strokeWidth={1.5} /> Enregistrer
              </button>
              <button className="btn btn-petit" onClick={() => setCfg(MODELES[0].config())}>
                <RotateCcw size={15} strokeWidth={1.5} /> Repartir de zéro
              </button>
              {message && (
                <span className="ui atelier-message" role="status">
                  {message}
                </span>
              )}
            </div>
            {sauvegardes.length > 0 ? (
              <ul className="atelier-liste">
                {sauvegardes.map((s) => (
                  <li key={s.nom}>
                    <button className="lien-bouton" onClick={() => setCfg(s.cfg)}>
                      {s.nom}
                    </button>
                    <button className="icone-bouton" onClick={() => setSauvegardes((x) => x.filter((y) => y.nom !== s.nom))} aria-label={`Supprimer ${s.nom}`}>
                      <Trash2 size={16} strokeWidth={1.4} />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="ui ui-gris">Aucun graphique enregistré. Ils restent sur cet appareil.</p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
