/** Données transversales : glossaire, cartes de révision, index de recherche. */
import { CHAPITRES } from '../content/chapitres';
import { METHODES } from '../content/methodo';
import { SUJETS } from '../content/sujets';
import { TECHNIQUES } from '../content/techniques';
import type { Definition } from '../content/types';
import { romain } from './romain';

export interface EntreeGlossaire extends Definition {
  /** clé unique : idChapitre::terme */
  cle: string;
  chapitreId: string;
  numero: number;
  chapitreTitre: string;
  /** première lettre sans accent, en majuscule */
  lettre: string;
}

const sansAccent = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

export const GLOSSAIRE: EntreeGlossaire[] = CHAPITRES.flatMap((c) =>
  (c.contenu?.definitions ?? []).map((d) => ({
    ...d,
    cle: `${c.meta.id}::${d.terme}`,
    chapitreId: c.meta.id,
    numero: c.numero,
    chapitreTitre: c.meta.titreCourt,
    lettre: sansAccent(d.terme).replace(/^[^A-Za-z]+/, '').charAt(0).toUpperCase(),
  })),
).sort((a, b) => sansAccent(a.terme).localeCompare(sansAccent(b.terme), 'fr'));

/** Texte brut (sans balises **…** ni $…$) pour la recherche */
export const texteBrut = (s: string) => s.replace(/\*\*/g, '').replace(/\$/g, '');

export interface ResultatRecherche {
  type: 'Chapitre' | 'Notion' | 'Technique' | 'Sujet' | 'Méthode';
  titre: string;
  sousTitre: string;
  to: string;
  texte: string;
}

export const INDEX_RECHERCHE: ResultatRecherche[] = [
  ...CHAPITRES.map((c) => ({
    type: 'Chapitre' as const,
    titre: `${romain(c.numero)}. ${c.meta.titreCourt}`,
    sousTitre: c.meta.titre,
    to: `/chapitre/${c.meta.id}`,
    texte: c.meta.titre,
  })),
  ...GLOSSAIRE.map((g) => ({
    type: 'Notion' as const,
    titre: g.terme,
    sousTitre: `${romain(g.numero)}. ${g.chapitreTitre}`,
    to: `/glossaire?q=${encodeURIComponent(g.terme)}`,
    texte: texteBrut(g.definition),
  })),
  ...TECHNIQUES.map((t) => ({ type: 'Technique' as const, titre: t.titre, sousTitre: 'Techniques', to: `/techniques/${t.id}`, texte: t.intro })),
  ...METHODES.map((m) => ({ type: 'Méthode' as const, titre: m.titre, sousTitre: 'Méthodologie', to: `/methodologie/${m.id}`, texte: m.intro })),
  ...SUJETS.map((s) => ({
    type: 'Sujet' as const,
    titre: s.titre,
    sousTitre: `${s.type} · ${s.origine === 'officiel' ? 'officiel' : 'sujet type'}`,
    to: `/sujets/${s.id}`,
    texte: texteBrut(s.consigne),
  })),
];

/* ---------- Système de Leitner (5 boîtes) ---------- */

export interface EtatCarte {
  boite: number; // 1 à 5
  prochaine: string; // AAAA-MM-JJ
}

/** Intervalle en jours avant la prochaine révision, selon la boîte */
export const INTERVALLES = [0, 1, 2, 4, 7, 14];

export const aujourdhui = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const ajouterJours = (iso: string, n: number) => {
  const [y, m, j] = iso.split('-').map(Number);
  const d = new Date(y, m - 1, j + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/** Nouvel état d'une carte après une réponse */
export const repondreLeitner = (etat: EtatCarte | undefined, su: boolean, jour = aujourdhui()): EtatCarte => {
  const boite = su ? Math.min(5, (etat?.boite ?? 1) + 1) : 1;
  return { boite, prochaine: ajouterJours(jour, su ? INTERVALLES[boite] : 0) };
};

export const estDue = (etat: EtatCarte | undefined, jour = aujourdhui()) => !etat || etat.prochaine <= jour;
