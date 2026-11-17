import { createContext, useContext } from 'react';
import type { Definition } from '../content/types';

/**
 * Retrouver la définition d'un terme mis en valeur dans le cours (**terme**),
 * même s'il est au pluriel ou abrégé : « biens communs » → « Bien commun »,
 * « CPP » → « Concurrence pure et parfaite (CPP) ».
 */
export const cleTerme = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[«»"]/g, '')
    .trim()
    // article en tête : « La sélection adverse » = « sélection adverse »
    .replace(/^(?:(?:les|le|la|une|un|des|du|de la)\s+|l')/, '')
    .split(/\s+/)
    .map((mot) => (mot.length > 3 && /[sx]$/.test(mot) && !/ss$/.test(mot) ? mot.slice(0, -1) : mot))
    .join(' ');

/** Toutes les formes sous lesquelles un terme peut apparaître (avec ses synonymes) */
export const formesDuTerme = (terme: string, synonymes: string[] = []): string[] => {
  const formes = new Set<string>([terme, ...synonymes]);
  const m = terme.match(/^(.*?)\s*\((.*)\)\s*$/);
  if (m) {
    formes.add(m[1]);
    formes.add(m[2]);
  }
  return [...formes].map(cleTerme).filter(Boolean);
};

export type IndexTermes = Map<string, Definition>;

export const indexerDefinitions = (...listes: Definition[][]): IndexTermes => {
  const index: IndexTermes = new Map();
  // les premières listes ont la priorité (ex. le chapitre en cours avant le glossaire)
  for (const liste of listes)
    for (const d of liste) for (const f of formesDuTerme(d.terme, d.synonymes)) if (!index.has(f)) index.set(f, d);
  return index;
};

export const chercherTerme = (index: IndexTermes | null, texte: string) => (index ? index.get(cleTerme(texte)) ?? null : null);

/** Définitions accessibles depuis le texte affiché (null = pas de bulles, ex. dans une bulle) */
export const ContexteTermes = createContext<IndexTermes | null>(null);
export const useTermes = () => useContext(ContexteTermes);

/** Termes mis en valeur (**…**) dans un texte */
export const termesEnValeur = (texte: string) => [...texte.matchAll(/\*\*([^*]+)\*\*/g)].map((m) => m[1]);
