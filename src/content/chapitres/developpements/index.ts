import type { DeveloppementChapitre } from '../../types';
import { devDefaillancesMarche } from './defaillances-marche';
import { devDeviance } from './deviance';
import { devEntreprises } from './entreprises';
import { devFinancement } from './financement';
import { devLiensSociaux } from './liens-sociaux';
import { devMarcheConcurrentiel } from './marche-concurrentiel';
import { devMarchesImparfaits } from './marches-imparfaits';
import { devMonnaie } from './monnaie';
import { devOpinionPublique } from './opinion-publique';
import { devRisquesProtectionSociale } from './risques-protection-sociale';
import { devSocialisation } from './socialisation';
import { devVote } from './vote';

/**
 * Développements des chapitres : définitions approfondies (« pour bien comprendre »,
 * exemples supplémentaires, « ne pas confondre »), notions ajoutées et exemples
 * à la fin de chaque partie du cours. Un fichier par chapitre.
 */
const LISTE: DeveloppementChapitre[] = [
  devMarcheConcurrentiel,
  devMarchesImparfaits,
  devDefaillancesMarche,
  devFinancement,
  devMonnaie,
  devSocialisation,
  devLiensSociaux,
  devDeviance,
  devOpinionPublique,
  devVote,
  devRisquesProtectionSociale,
  devEntreprises,
];

export const DEVELOPPEMENTS: Record<string, DeveloppementChapitre> = Object.fromEntries(LISTE.map((d) => [d.id, d]));
