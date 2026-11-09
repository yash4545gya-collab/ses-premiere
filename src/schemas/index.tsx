/**
 * Registre des schémas. Le contenu d'un chapitre y fait référence par son id
 * (champ `schemas` et blocs { type: 'schema', id }).
 * Les coordonnées sont calculées à partir des fonctions d'offre et de demande.
 */
import type { ReactElement } from 'react';
import { Graphique, intersection, type Droite } from './Graphique';
import { CircuitFinancement, CreationMonetaire, Externalite, FondsPretables, Monopole, SelectionAdverse, Transmission } from './eco';
import { CarriereDeviante, ChiffreNoir, InstancesSocialisation, LiensFortsFaibles, Participation, Sondage } from './socio';
import { CycleVie, Mutualisation, PartiesPrenantes } from './regards';

// Chapitre I — données fictives : demande P = 10 − 0,5Q ; offre P = 2 + 0,5Q
const D: Droite = { a: 10, b: -0.5, etiquette: 'Demande', style: 'demande' };
const O: Droite = { a: 2, b: 0.5, etiquette: 'Offre', style: 'offre' };
const E = intersection(D, O); // (8 ; 6)

function Equilibre() {
  const qd8 = (D.a - 8) / -D.b; // 4
  const qo8 = (8 - O.a) / O.b; // 12
  const qd4 = (D.a - 4) / -D.b; // 12
  const qo4 = (4 - O.a) / O.b; // 4
  return (
    <Graphique
      qMax={22}
      pMax={12}
      titreAccessible="Courbes d'offre et de demande se coupant au point d'équilibre E, prix 6, quantité 8"
      droites={[D, O]}
      points={[{ q: E.q, p: E.p, etiquette: 'E', projections: true, libQ: 'Q* = 8', libP: 'P* = 6' }]}
      segments={[
        { de: [0, 8], a: [qd8, 8], pointille: true },
        { de: [qd8, 8], a: [qo8, 8] },
        { de: [0, 4], a: [qo4, 4], pointille: true },
        { de: [qo4, 4], a: [qd4, 4] },
      ]}
      marquesP={[
        { p: 8, lib: '8' },
        { p: 4, lib: '4' },
      ]}
      textes={[
        { q: (qd8 + qo8) / 2, p: 8.45, texte: 'Excès d’offre' },
        { q: (qo4 + qd4) / 2, p: 3.35, texte: 'Excès de demande' },
      ]}
    />
  );
}

function Surplus() {
  return (
    <Graphique
      qMax={22}
      pMax={12}
      titreAccessible="Surplus du consommateur au-dessus du prix d'équilibre et surplus du producteur en dessous"
      droites={[D, O]}
      zones={[
        { points: [[0, D.a], [0, E.p], [E.q, E.p]], motif: 'pale', etiquette: 'SC = 16', at: [E.q / 3, (D.a + 2 * E.p) / 3 - 0.15] },
        { points: [[0, E.p], [0, O.a], [E.q, E.p]], motif: 'hachures', etiquette: 'SP = 16', at: [E.q / 3, (O.a + 2 * E.p) / 3 - 0.15] },
      ]}
      points={[{ q: E.q, p: E.p, etiquette: 'E', projections: true, libQ: 'Q* = 8', libP: 'P* = 6' }]}
      marquesP={[
        { p: 10, lib: '10' },
        { p: 2, lib: '2' },
      ]}
    />
  );
}

function DeplacementMouvement() {
  const D2: Droite = { a: 12, b: -0.5, etiquette: 'D2', style: 'demande2' };
  const D1: Droite = { ...D, etiquette: 'D1' };
  const E2 = intersection(D2, O); // (10 ; 7)
  const qD1 = (D1.a - 3) / -D1.b; // 14
  const qD2 = (D2.a - 3) / -D2.b; // 18
  return (
    <Graphique
      qMax={26}
      pMax={13}
      titreAccessible="La demande se déplace de D1 à D2 ; on passe de E1 à E2 le long de la courbe d'offre"
      droites={[D1, D2, O]}
      points={[
        { q: E.q, p: E.p, etiquette: 'E1', projections: true },
        { q: E2.q, p: E2.p, etiquette: 'E2', projections: true },
      ]}
      fleches={[
        { de: [qD1 + 0.3, 3], a: [qD2 - 0.3, 3] },
        { de: [E.q + 0.9, E.p - 1.1 + 0.45], a: [E2.q + 0.9, E2.p - 1.1 + 0.45] },
      ]}
      textes={[
        { q: (qD1 + qD2) / 2, p: 3.45, texte: 'Déplacement' },
        { q: 12.2, p: 7.4, texte: "Mouvement le long de l’offre", ancre: "start" },
      ]}
    />
  );
}

function Taxe() {
  const t = 2;
  const O2: Droite = { a: O.a + t, b: O.b, etiquette: 'Offre + t', style: 'offre2' };
  const Et = intersection(D, O2); // (6 ; 7)
  const pRecu = Et.p - t; // 5
  return (
    <Graphique
      qMax={22}
      pMax={12}
      titreAccessible="Une taxe de 2 déplace l'offre vers le haut ; la quantité passe de 8 à 6, recettes fiscales et perte sèche"
      droites={[D, O, O2]}
      zones={[
        { points: [[0, pRecu], [Et.q, pRecu], [Et.q, Et.p], [0, Et.p]], motif: 'orange', etiquette: 'Recettes = 12', at: [Et.q / 2, (Et.p + pRecu) / 2 - 0.15] },
        { points: [[Et.q, Et.p], [Et.q, pRecu], [E.q, E.p]], motif: 'brun' },
      ]}
      points={[
        { q: E.q, p: E.p, etiquette: 'E', projections: true },
        { q: Et.q, p: Et.p, etiquette: "E'", projections: true },
      ]}
      marquesP={[{ p: pRecu, lib: '5' }]}
      fleches={[{ de: [15, O.a + O.b * 15 + 0.2], a: [15, O2.a + O2.b * 15 - 0.2] }]}
      textes={[
        { q: 15.5, p: O.a + O.b * 15 + 1.1, texte: '+ t', ancre: 'start' },
        { q: E.q + 1.2, p: E.p + 1.5, texte: 'Perte sèche', ancre: 'start' },
      ]}
    />
  );
}

function CoutMarginalOffre() {
  const cm = [3, 4, 5, 6, 8, 10];
  return (
    <Graphique
      qMax={7.5}
      pMax={12}
      libQ="Caisses"
      libP="€"
      titreAccessible="Coût marginal de chaque caisse en barres ; au prix de 7, les 4 premières sont produites ; au prix de 9, les 5 premières"
      droites={[
        { a: 7, b: 0, etiquette: 'P = 7', style: 'demande', qMax: 6.6 },
        { a: 9, b: 0, etiquette: 'P = 9', style: 'demande2', qMax: 6.6 },
      ]}
      zones={cm.map((c, i) => ({
        points: [[i + 0.12, 0], [i + 0.88, 0], [i + 0.88, c], [i + 0.12, c]] as [number, number][],
        motif: (c <= 7 ? 'pale' : c <= 9 ? 'hachures' : 'blanc') as 'pale' | 'hachures' | 'blanc',
        contour: true,
      }))}
      marquesQ={cm.map((_, i) => ({ q: i + 0.5, lib: String(i + 1) }))}
      marquesP={cm.map((c) => ({ p: c, lib: String(c) }))}
      textes={[{ q: 2, p: 10.6, texte: 'Barres : coût marginal de chaque caisse' }]}
    />
  );
}

export const SCHEMAS: Record<string, () => ReactElement> = {
  equilibre: Equilibre,
  surplus: Surplus,
  'deplacement-mouvement': DeplacementMouvement,
  taxe: Taxe,
  'cout-marginal-offre': CoutMarginalOffre,
  monopole: Monopole,
  externalite: Externalite,
  'selection-adverse': SelectionAdverse,
  'circuit-financement': CircuitFinancement,
  'fonds-pretables': FondsPretables,
  'creation-monetaire': CreationMonetaire,
  transmission: Transmission,
  'instances-socialisation': InstancesSocialisation,
  'liens-forts-faibles': LiensFortsFaibles,
  'carriere-deviante': CarriereDeviante,
  'chiffre-noir': ChiffreNoir,
  sondage: Sondage,
  participation: Participation,
  mutualisation: Mutualisation,
  'cycle-vie': CycleVie,
  'parties-prenantes': PartiesPrenantes,
};
