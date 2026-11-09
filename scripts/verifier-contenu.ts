// Vérifie la cohérence du contenu (lancé par scripts/verifier-contenu.mjs).
import { CHAPITRES } from '../src/content/chapitres';
import { SCHEMAS } from '../src/schemas';
import { TECHNIQUES } from '../src/content/techniques';
import { CALCULATEURS } from '../src/components/Calculateurs';
import * as C from '../src/lib/calculs';
import { DUREES, SUJETS } from '../src/content/sujets';
import { GLOSSAIRE, INDEX_RECHERCHE, ajouterJours, estDue, repondreLeitner } from '../src/lib/donnees';
import { MODELES, calculerGraphique } from '../src/pages/Courbes';

let erreurs = 0;
const err = (m: string) => {
  erreurs++;
  console.log('ERR ' + m);
};
const termes = new Map<string, string>();

for (const c of CHAPITRES) {
  const ch = c.contenu;
  if (!ch) {
    err(`${c.meta.id} : pas de contenu`);
    continue;
  }
  if (ch.quiz.length < 15) err(`${ch.id} : seulement ${ch.quiz.length} questions`);
  ch.quiz.forEach((q, i) => {
    if (q.bonne < 0 || q.bonne >= q.choix.length) err(`${ch.id} quiz ${i + 1} : index de bonne réponse invalide`);
    if (new Set(q.choix).size !== q.choix.length) err(`${ch.id} quiz ${i + 1} : choix en double`);
    if (!q.explication) err(`${ch.id} quiz ${i + 1} : pas d'explication`);
  });
  if (ch.schemas.length < 1) err(`${ch.id} : aucun schéma`);
  for (const s of ch.schemas) if (!SCHEMAS[s.id]) err(`${ch.id} : schéma ${s.id} absent du registre`);
  const ids = new Set(ch.schemas.map((s) => s.id));
  const utilises = new Set<string>();
  for (const p of ch.essentiel.parties)
    for (const b of p.blocs)
      if (b.type === 'schema') {
        utilises.add(b.id);
        if (!ids.has(b.id)) err(`${ch.id} : bloc schéma ${b.id} non déclaré`);
      }
  for (const id of ids) if (!utilises.has(id)) err(`${ch.id} : schéma ${id} déclaré mais jamais affiché dans le cours`);
  if (ch.definitions.length < 15) err(`${ch.id} : seulement ${ch.definitions.length} définitions`);
  for (const d of ch.definitions) {
    if (!d.exemple || !d.definition) err(`${ch.id} : définition incomplète ${d.terme}`);
    const k = d.terme.toLowerCase();
    if (termes.has(k) && termes.get(k) === ch.id) err(`${ch.id} : terme en double ${d.terme}`);
    termes.set(k, ch.id);
  }
  console.log(
    `OK  ${String(c.numero).padStart(2)} ${ch.id.padEnd(28)} ${String(ch.definitions.length).padStart(2)} déf. · ${ch.quiz.length} QCM · ${ch.schemas.length} schéma(s) · ${ch.auteurs.length} auteurs · ${ch.pieges.length} pièges`,
  );
}
// ---------- Techniques : recalcul indépendant de chaque réponse ----------
type Arg = number | number[];
type Fn = (...a: any[]) => number;
const S = (a: number[]) => a.reduce((x, y) => x + y, 0);
/* Implémentations écrites séparément de src/lib/calculs.ts */
const IND: Record<string, Fn> = {
  proportion: (p: number, t: number) => (100 * p) / t,
  tauxVariation: (d: number, a: number) => (100 * a) / d - 100,
  coefficientMultiplicateur: (d: number, a: number) => a / d,
  tauxDepuisCm: (c: number) => 100 * c - 100,
  cmDepuisTaux: (t: number) => (100 + t) / 100,
  tauxCumule: (ts: number[]) => 100 * ts.map((t) => (100 + t) / 100).reduce((x, y) => x * y, 1) - 100,
  tauxMoyen: (T: number, n: number) => 100 * Math.exp(Math.log((100 + T) / 100) / n) - 100,
  indice: (v: number, b: number) => (100 * v) / b,
  tauxEntreIndices: (i1: number, i2: number) => (100 * i2) / i1 - 100,
  moyenne: (v: number[]) => S(v) / v.length,
  moyennePonderee: (v: number[], p: number[]) => S(v.map((x, i) => x * p[i])) / S(p),
  mediane: (v: number[]) => {
    const t = v.slice().sort((a, b) => a - b);
    return t.length % 2 ? t[(t.length - 1) / 2] : (t[t.length / 2 - 1] + t[t.length / 2]) / 2;
  },
  ecartPoints: (a: number, b: number) => b - a,
  tauxReel: (n: number, i: number) => (100 * (100 + n)) / (100 + i) - 100,
  valeurReelle: (v: number, ip: number) => (100 * v) / ip,
  elasticite: (p1: number, q1: number, p2: number, q2: number) => (q2 - q1) / q1 / ((p2 - p1) / p1),
  pente: (x1: number, y1: number, x2: number, y2: number) => (y2 - y1) / (x2 - x1),
  valeurFinale: (v: number, t: number) => v + (v * t) / 100,
};
const LIB = C as unknown as Record<string, Fn>;
let nbEx = 0;
for (const t of TECHNIQUES) {
  if (t.exercices.length < 5) err(`technique ${t.id} : moins de 5 exercices`);
  if (!CALCULATEURS[t.calculateur]) err(`technique ${t.id} : calculateur ${t.calculateur} absent`);
  t.exercices.forEach((ex, i) => {
    nbEx++;
    if (ex.type === 'qcm') {
      if (ex.bonne < 0 || ex.bonne >= ex.choix.length) err(`${t.id} ex ${i + 1} : index invalide`);
      return;
    }
    const f = IND[ex.verif.f];
    if (!f) return err(`${t.id} ex ${i + 1} : formule ${ex.verif.f} inconnue`);
    const v = f(...(ex.verif.args as Arg[]));
    if (Math.abs(v - ex.reponse) > ex.tolerance) err(`${t.id} ex ${i + 1} : réponse ${ex.reponse}, recalcul ${v}`);
    const lib = LIB[ex.verif.f];
    if (lib && Math.abs(lib(...(ex.verif.args as Arg[])) - v) > 1e-9) err(`${t.id} ex ${i + 1} : calculs.ts diverge`);
  });
}
const tests: [string, Arg[]][] = [
  ['proportion', [3, 7]],
  ['tauxVariation', [37, 21]],
  ['coefficientMultiplicateur', [12, 30]],
  ['tauxDepuisCm', [0.85]],
  ['cmDepuisTaux', [-12.5]],
  ['tauxCumule', [[3, -2, 7.5]]],
  ['tauxMoyen', [48, 5]],
  ['indice', [7, 9]],
  ['tauxEntreIndices', [87, 112]],
  ['moyenne', [[1, 2, 3, 10]]],
  ['moyennePonderee', [[2, 4], [1, 3]]],
  ['mediane', [[9, 1, 5, 3]]],
  ['mediane', [[9, 1, 5]]],
  ['ecartPoints', [12.3, 9.8]],
  ['tauxReel', [1, 4]],
  ['valeurReelle', [500, 80]],
  ['elasticite', [5, 100, 4, 130]],
  ['pente', [1, 2, 4, 11]],
];
for (const [f, a] of tests) {
  if (Math.abs(LIB[f](...a) - IND[f](...a)) > 1e-9) err(`calculs.ts : ${f}(${JSON.stringify(a)}) = ${LIB[f](...a)} au lieu de ${IND[f](...a)}`);
}
if (Math.abs(C.correlation([1, 2, 3], [2, 4, 6]) - 1) > 1e-9) err('calculs.ts : corrélation parfaite différente de 1');
if (Math.abs(C.correlation([1, 2, 3], [6, 4, 2]) + 1) > 1e-9) err('calculs.ts : corrélation négative différente de −1');
if (C.lireNombre('1 200,5') !== 1200.5) err('lireNombre("1 200,5")');
if (C.lireNombre('abc') !== null) err('lireNombre("abc")');
console.log(`OK  techniques : ${TECHNIQUES.length} pages, ${nbEx} exercices, ${tests.length} tests de la bibliothèque`);

// ---------- Sujets ----------
const idsSujets = new Set<string>();
for (const s of SUJETS) {
  if (idsSujets.has(s.id)) err(`sujet ${s.id} en double`);
  idsSujets.add(s.id);
  for (const c of s.chapitres) if (!CHAPITRES.some((x) => x.meta.id === c)) err(`sujet ${s.id} : chapitre inconnu ${c}`);
  if (s.origine === 'officiel') {
    if (!s.sourceOfficielle) err(`sujet officiel ${s.id} sans source`);
    if (!s.lienOfficiel || !s.lienOfficiel.startsWith('https://eduscol.education.gouv.fr/')) err(`sujet officiel ${s.id} sans lien eduscol`);
  }
  if (s.origine === 'type' && (s.sourceOfficielle || s.lienOfficiel)) err(`sujet type ${s.id} avec une source officielle`);
  if (s.dureeMinutes !== DUREES[s.type]) err(`sujet ${s.id} : durée ${s.dureeMinutes} au lieu de ${DUREES[s.type]}`);
  if (!s.corrige.erreursAEviter.length || !s.corrige.notions.length) err(`sujet ${s.id} : corrigé incomplet`);
  if (s.type === 'EC2' && !s.corrige.reponseModele) err(`sujet ${s.id} : EC2 sans réponse modèle`);
  if ((s.type === 'EC3' || s.type === 'Dissertation') && !s.corrige.plan) err(`sujet ${s.id} : pas de plan`);
  for (const d of s.documents ?? []) if (!d.source) err(`sujet ${s.id} : document sans source`);
}
for (const c of CHAPITRES) {
  const n = SUJETS.filter((s) => s.chapitres.includes(c.meta.id)).length;
  if (n < 2) err(`chapitre ${c.meta.id} : seulement ${n} sujet(s)`);
}
// ---------- Leitner et glossaire ----------
const eq = (nom: string, a: unknown, b: unknown) => {
  if (JSON.stringify(a) !== JSON.stringify(b)) err(`${nom} : ${JSON.stringify(a)} au lieu de ${JSON.stringify(b)}`);
};
eq('ajouterJours fin de mois', ajouterJours('2026-10-30', 3), '2026-11-02');
eq('ajouterJours fin d’année', ajouterJours('2026-12-31', 1), '2027-01-01');
eq('Leitner nouvelle carte sue', repondreLeitner(undefined, true, '2026-11-06'), { boite: 2, prochaine: '2026-11-08' });
eq('Leitner nouvelle carte ratée', repondreLeitner(undefined, false, '2026-11-06'), { boite: 1, prochaine: '2026-11-06' });
eq('Leitner boîte 4 sue', repondreLeitner({ boite: 4, prochaine: '2026-11-06' }, true, '2026-11-06'), { boite: 5, prochaine: '2026-11-20' });
eq('Leitner boîte 5 sue reste 5', repondreLeitner({ boite: 5, prochaine: '2026-11-06' }, true, '2026-11-06').boite, 5);
eq('Leitner boîte 3 ratée', repondreLeitner({ boite: 3, prochaine: '2026-11-06' }, false, '2026-11-06').boite, 1);
eq('Leitner due', estDue({ boite: 2, prochaine: '2026-11-07' }, '2026-11-06'), false);
eq('Leitner due le jour même', estDue({ boite: 2, prochaine: '2026-11-06' }, '2026-11-06'), true);
const nbDefs = CHAPITRES.reduce((s, c) => s + (c.contenu?.definitions.length ?? 0), 0);
eq('glossaire complet', GLOSSAIRE.length, nbDefs);
eq('clés de glossaire uniques', new Set(GLOSSAIRE.map((g) => g.cle)).size, GLOSSAIRE.length);
if (GLOSSAIRE.some((g) => !/^[A-Z]$/.test(g.lettre))) err('glossaire : lettre initiale invalide');
console.log(`OK  glossaire : ${GLOSSAIRE.length} notions · index de recherche : ${INDEX_RECHERCHE.length} entrées · Leitner testé`);

// ---------- Atelier de courbes : calculs ----------
{
  const proche = (nom: string, a: number | undefined, b: number) => {
    if (a === undefined || Math.abs(a - b) > 1e-9) err(`atelier ${nom} : ${a} au lieu de ${b}`);
  };
  const modele = (i: number) => MODELES[i].config();
  const base = calculerGraphique({ ...modele(0), surplus: true });
  proche('équilibre Q', base.E?.q, 8);
  proche('équilibre P', base.E?.p, 6);
  proche('SC', base.surplus?.sc, 16);
  proche('SP', base.surplus?.sp, 16);
  const tx = calculerGraphique(modele(3));
  proche('taxe Q', tx.taxe?.Et.q, 6);
  proche('taxe prix payé', tx.taxe?.Et.p, 7);
  proche('taxe prix reçu', tx.taxe?.pRecu, 5);
  proche('taxe recettes', tx.taxe?.recettes, 12);
  proche('taxe perte sèche', tx.taxe?.perte, 2);
  const txs = calculerGraphique({ ...modele(3), surplus: true });
  proche('taxe SC', txs.surplus?.sc, 9);
  proche('taxe SP', txs.surplus?.sp, 9);
  const pl = calculerGraphique(modele(4));
  proche('plafond Qd', pl.impose?.qd, 12);
  proche('plafond Qo', pl.impose?.qo, 4);
  const hd = calculerGraphique(modele(2));
  proche('hausse demande : 2 équilibres', hd.equilibres.length, 2);
  proche('hausse demande E2 Q', hd.equilibres[1]?.pt.q, 10);
  proche('hausse demande E2 P', hd.equilibres[1]?.pt.p, 7);
  const mo = calculerGraphique(modele(5));
  proche('monopole Rm = Cm', mo.croisements[0]?.pt.q, 8);
  // offre qui coupe l'axe des quantités : SP = trapèze (vérifié par intégration numérique)
  const neg = calculerGraphique({
    ...modele(0),
    surplus: true,
    courbes: [
      { id: 'd', nom: 'D', type: 'demande', a: 10, b: -0.5, pointille: false, visible: true },
      { id: 'o', nom: 'O', type: 'offre', a: -2, b: 0.5, pointille: false, visible: true },
    ],
  });
  let integrale = 0;
  for (let k = 0; k < 120000; k++) {
    const q = (k + 0.5) / 10000;
    integrale += (4 - Math.max(0, -2 + 0.5 * q)) / 10000;
  }
  proche('offre négative : P*', neg.E?.p, 4);
  if (Math.abs((neg.surplus?.sp ?? 0) - integrale) > 1e-6) err(`atelier SP offre négative : ${neg.surplus?.sp} au lieu de ${integrale}`);
  console.log(`OK  atelier de courbes : ${MODELES.length} modèles, équilibre, surplus, taxe, prix imposé, offre négative vérifiés`);
}

const parType = Object.fromEntries((['EC1', 'EC2', 'EC3', 'Dissertation'] as const).map((t) => [t, SUJETS.filter((s) => s.type === t).length]));
console.log(
  `OK  sujets : ${SUJETS.length} (${SUJETS.filter((s) => s.origine === 'officiel').length} officiels) · ${JSON.stringify(parType)}`,
);

console.log(erreurs ? `\n${erreurs} problème(s)` : '\nContenu cohérent.');
process.exit(erreurs ? 1 : 0);
