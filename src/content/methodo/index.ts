import type { FicheMethode } from '../types';
import { dissertation, connecteurs } from './dissertation';
import { ec1, ec2, ec3 } from './ec';
import { epreuveComposee } from './epreuve-composee';

/** Ordre d'affichage des fiches de méthode */
export const METHODES: FicheMethode[] = [epreuveComposee, ec1, ec2, ec3, dissertation, connecteurs];

export const methodeParId = (id: string) => METHODES.find((m) => m.id === id);
