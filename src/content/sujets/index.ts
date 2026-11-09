import type { Sujet } from '../types';
import { SUJETS_OFFICIELS } from './officiels';
import { SUJETS_TYPE } from './types';

export const SUJETS: Sujet[] = [...SUJETS_OFFICIELS, ...SUJETS_TYPE];

export const sujetParId = (id: string) => SUJETS.find((s) => s.id === id);

export const sujetsDuChapitre = (idChapitre: string) => SUJETS.filter((s) => s.chapitres.includes(idChapitre));

/** Durées indicatives pour un devoir de Première */
export const DUREES: Record<Sujet['type'], number> = { EC1: 15, EC2: 20, EC3: 60, Dissertation: 120 };
