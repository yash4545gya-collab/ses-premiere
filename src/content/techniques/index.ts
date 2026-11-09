import type { Technique } from '../types';
import { correlation } from './correlation';
import { graphiques } from './graphiques';
import { indices } from './indices';
import { moyennes } from './moyennes';
import { pointsPourcentage } from './points-pourcentage';
import { proportions } from './proportions';
import { tauxVariation } from './taux-variation';
import { valeurReelle } from './valeur-reelle';

/** Ordre d'affichage des techniques */
export const TECHNIQUES: Technique[] = [
  proportions,
  tauxVariation,
  indices,
  moyennes,
  pointsPourcentage,
  valeurReelle,
  graphiques,
  correlation,
];

export const techniqueParId = (id: string) => TECHNIQUES.find((t) => t.id === id);
