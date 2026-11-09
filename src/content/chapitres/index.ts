import type { Chapitre, ChapitreMeta } from '../types';
import { ORDRE } from '../ordre';
import { CHAPITRES_A_VENIR } from './a-venir';
import { defaillancesMarche } from './defaillances-marche';
import { deviance } from './deviance';
import { entreprises } from './entreprises';
import { risquesProtectionSociale } from './risques-protection-sociale';
import { liensSociaux } from './liens-sociaux';
import { opinionPublique } from './opinion-publique';
import { socialisation } from './socialisation';
import { vote } from './vote';
import { financement } from './financement';
import { marcheConcurrentiel } from './marche-concurrentiel';
import { marchesImparfaits } from './marches-imparfaits';
import { monnaie } from './monnaie';

/** Chapitres rédigés. Ajouter ici chaque nouveau fichier de chapitre. */
const REDIGES: Chapitre[] = [marcheConcurrentiel, marchesImparfaits, defaillancesMarche, financement, monnaie, socialisation, liensSociaux, deviance, opinionPublique, vote, risquesProtectionSociale, entreprises];

const PAR_ID = new Map<string, ChapitreMeta>();
for (const c of [...CHAPITRES_A_VENIR, ...REDIGES]) PAR_ID.set(c.id, c);

export interface ChapitreOrdonne {
  meta: ChapitreMeta;
  /** null tant que le cours n'est pas rédigé */
  contenu: Chapitre | null;
  /** 1, 2, 3… selon ordre.ts */
  numero: number;
  chapitreManuel?: number;
}

/** Chapitres dans l'ordre défini par ordre.ts */
export const CHAPITRES: ChapitreOrdonne[] = ORDRE.map((entree, i) => {
  const meta = PAR_ID.get(entree.id);
  if (!meta) throw new Error(`ordre.ts : chapitre inconnu « ${entree.id} »`);
  const contenu = REDIGES.find((c) => c.id === entree.id) ?? null;
  return { meta, contenu, numero: i + 1, chapitreManuel: entree.chapitreManuel };
});

export const chapitreParId = (id: string) => CHAPITRES.find((c) => c.meta.id === id);
