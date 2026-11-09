/** Schémas des chapitres d'économie II à V. Coordonnées calculées. */
import { Flux, type Noeud } from './Flux';
import { Graphique, intersection, type Droite } from './Graphique';

const D: Droite = { a: 10, b: -0.5, etiquette: 'Demande', style: 'demande' };

export function Monopole() {
  const Rm: Droite = { a: 10, b: -1, etiquette: 'Rm', style: 'demande2' };
  const Cm: Droite = { a: 2, b: 0, etiquette: 'Cm', style: 'cout', qMax: 20.5 };
  const M = { q: intersection(Rm, Cm).q, p: 0 };
  M.p = D.a + D.b * M.q; // prix lu sur la demande : 6
  const C = intersection(D, Cm); // (16 ; 2)
  return (
    <Graphique
      qMax={22}
      pMax={12}
      titreAccessible="Monopole : quantité 8 au prix 6, contre 16 au prix 2 en concurrence ; profit, surplus du consommateur et perte sèche"
      droites={[D, Rm, Cm]}
      zones={[
        { points: [[0, D.a], [0, M.p], [M.q, M.p]], motif: 'pale', etiquette: 'SC', at: [M.q / 3, (D.a + 2 * M.p) / 3 - 0.15] },
        { points: [[0, Cm.a], [M.q, Cm.a], [M.q, M.p], [0, M.p]], motif: 'orange', etiquette: 'Profit = 32', at: [M.q / 2, (M.p + Cm.a) / 2 - 0.15] },
        { points: [[M.q, M.p], [M.q, Cm.a], [C.q, C.p]], motif: 'brun' },
      ]}
      points={[
        { q: M.q, p: M.p, etiquette: 'M', projections: true, libQ: 'Qm = 8', libP: 'Pm = 6' },
        { q: C.q, p: C.p, etiquette: 'C', projections: true, libQ: '16', libP: '2' },
        { q: M.q, p: Cm.a },
      ]}
      textes={[{ q: 9.2, p: 2.75, texte: 'Perte sèche', ancre: 'start' }]}
    />
  );
}

export function Externalite() {
  const Op: Droite = { a: 2, b: 0.5, etiquette: 'Coût privé', style: 'offre' };
  const Cs: Droite = { a: 4, b: 0.5, etiquette: 'Coût social', style: 'cout' };
  const M = intersection(D, Op); // (8 ; 6)
  const S = intersection(D, Cs); // (6 ; 7)
  return (
    <Graphique
      qMax={22}
      pMax={12}
      titreAccessible="Externalité négative : le marché échange 8 unités alors que l'optimum social est de 6"
      droites={[D, Op, Cs]}
      zones={[{ points: [[S.q, S.p], [M.q, Cs.a + Cs.b * M.q], [M.q, M.p]], motif: 'brun' }]}
      points={[
        { q: M.q, p: M.p, etiquette: 'M', projections: true, libQ: '8', libP: '6' },
        { q: S.q, p: S.p, etiquette: 'S', projections: true, libQ: '6', libP: '7' },
      ]}
      textes={[{ q: 8.6, p: 7.35, texte: 'Perte de bien-être', ancre: 'start' }]}
    />
  );
}

export function FondsPretables() {
  const O: Droite = { a: 1, b: 0.1, etiquette: 'Offre de fonds', style: 'offre', qMax: 70 };
  const D1: Droite = { a: 7, b: -0.1, etiquette: 'D1', style: 'demande' };
  const D2: Droite = { a: 9, b: -0.1, etiquette: 'D2', style: 'demande2' };
  const E1 = intersection(O, D1); // (30 ; 4)
  const E2 = intersection(O, D2); // (40 ; 5)
  const qPrive = (E2.p - D1.a) / D1.b; // 20
  return (
    <Graphique
      qMax={85}
      pMax={9}
      libQ="Fonds (Md€)"
      libP="Taux (%)"
      titreAccessible="Marché des fonds prêtables : l'emprunt public déplace la demande de D1 à D2 ; le taux passe de 4 à 5 % et l'investissement privé recule de 30 à 20"
      droites={[O, D1, D2]}
      points={[
        { q: E1.q, p: E1.p, etiquette: 'E1', projections: true, libQ: '30', libP: '4' },
        { q: E2.q, p: E2.p, etiquette: 'E2', projections: true, libQ: '40', libP: '5' },
        { q: qPrive, p: E2.p, projections: true, libQ: '20', libP: '5' },
      ]}
      fleches={[{ de: [(D1.a - 1.6) / -D1.b + 1, 1.6], a: [(D2.a - 1.6) / -D2.b - 1, 1.6] }]}
      textes={[
        { q: ((D1.a - 1.6) / -D1.b + (D2.a - 1.6) / -D2.b) / 2, p: 2.0, texte: 'Emprunt public' },
        { q: qPrive - 1, p: 5.55, texte: 'Demande privée : 20', ancre: 'end' },
      ]}
    />
  );
}

const chaine = (lignes: string[][], w = 300, h = 44, gap = 20, x = 30): Noeud[] =>
  lignes.map((l, i) => ({
    id: `n${i}`,
    x,
    y: 10 + i * (h + gap),
    w,
    h,
    lignes: l,
    style: i === 0 ? 'orange' : i === lignes.length - 1 ? 'pale' : 'blanc',
  }));

const liensChaine = (n: number) => Array.from({ length: n - 1 }, (_, i) => ({ de: `n${i}`, a: `n${i + 1}` }));

/** Petit utilitaire : schéma en chaîne verticale */
export function Chaine({ lignes, titre, h = 44 }: { lignes: string[][]; titre: string; h?: number }) {
  const noeuds = chaine(lignes, 300, h);
  return <Flux hauteur={20 + lignes.length * (h + 20) - 20} noeuds={noeuds} liens={liensChaine(lignes.length)} titreAccessible={titre} />;
}

export function SelectionAdverse() {
  return (
    <Chaine
      titre="Sélection adverse : prix moyen, retrait des bonnes voitures, disparition du marché"
      h={50}
      lignes={[
        ['L’acheteur ne distingue pas', 'les bonnes des mauvaises voitures'],
        ['Il propose un prix moyen', '0,5 × 10 000 + 0,5 × 4 000 = 7 000 €'],
        ['Les vendeurs de bonnes voitures', 'en veulent au moins 8 000 € : ils se retirent'],
        ['Il ne reste que des mauvaises voitures', 'les acheteurs ne paient plus que 4 000 €'],
        ['Pas d’équilibre pour les bonnes voitures', 'le marché disparaît'],
      ]}
    />
  );
}

export function CircuitFinancement() {
  return (
    <Flux
      hauteur={340}
      titreAccessible="Circuits de financement : intermédié par les banques, direct par les marchés financiers"
      noeuds={[
        { id: 'cap', x: 70, y: 10, w: 220, h: 62, sur: 'Prêteurs', lignes: ['Agents à capacité de financement', '(surtout les ménages)'], style: 'pale' },
        { id: 'banque', x: 6, y: 136, w: 160, h: 66, sur: 'Financement intermédié', lignes: ['Banques', '(crédit)'] },
        { id: 'marche', x: 194, y: 136, w: 160, h: 66, sur: 'Financement direct', lignes: ['Marchés financiers', '(actions, obligations)'] },
        { id: 'bes', x: 70, y: 268, w: 220, h: 62, sur: 'Emprunteurs', lignes: ['Agents à besoin de financement', '(entreprises, État)'], style: 'orange' },
      ]}
      liens={[
        { de: 'cap', a: 'banque', etiquette: 'dépôts', dx: -22 },
        { de: 'banque', a: 'bes', etiquette: 'crédits', dx: -22 },
        { de: 'cap', a: 'marche', etiquette: 'achat de titres', dx: 36 },
        { de: 'marche', a: 'bes', etiquette: 'émission de titres', dx: 40 },
      ]}
    />
  );
}

export function CreationMonetaire() {
  return (
    <Flux
      hauteur={330}
      titreAccessible="Bilans de la banque et de l'entreprise après un crédit de 10 000 euros : création de monnaie"
      noeuds={[
        { id: 'bA', x: 8, y: 34, w: 166, h: 58, sur: 'Actif de la banque', lignes: ['Créance sur E', '+ 10 000 €'] },
        { id: 'bP', x: 186, y: 34, w: 166, h: 58, sur: 'Passif de la banque', lignes: ['Dépôt de E', '+ 10 000 €'], style: 'pale' },
        { id: 'eA', x: 186, y: 172, w: 166, h: 58, sur: 'Actif de l’entreprise', lignes: ['Dépôt (monnaie)', '+ 10 000 €'], style: 'pale' },
        { id: 'eP', x: 8, y: 172, w: 166, h: 58, sur: 'Passif de l’entreprise', lignes: ['Dette envers B', '+ 10 000 €'] },
        { id: 'mm', x: 100, y: 270, w: 252, h: 48, lignes: ['Masse monétaire : + 10 000 €'], style: 'orange' },
      ]}
      liens={[
        { de: 'bP', a: 'eA', etiquette: 'même dépôt', pointille: true, double: true, dx: 4, dy: 4 },
        { de: 'bA', a: 'eP', etiquette: 'même crédit', pointille: true, double: true, dx: 4, dy: 4 },
        { de: 'eA', a: 'mm' },
      ]}
      notes={[
        { x: 180, y: 22, texte: 'BANQUE B' },
        { x: 180, y: 160, texte: 'ENTREPRISE E' },
      ]}
    />
  );
}

export function Transmission() {
  return (
    <Chaine
      titre="Transmission d'une hausse des taux directeurs : taux interbancaires, taux des crédits, crédit, demande, inflation"
      h={40}
      lignes={[
        ['Taux directeurs ↑'],
        ['Taux du marché interbancaire ↑'],
        ['Taux des crédits aux ménages et entreprises ↑'],
        ['Crédit et création monétaire ↓'],
        ['Consommation et investissement ↓'],
        ['Inflation ↓ · activité ↓'],
      ]}
    />
  );
}
