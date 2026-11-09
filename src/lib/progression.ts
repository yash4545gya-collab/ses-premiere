import { useStocke } from './stockage';

/** Progression par chapitre, stockée dans localStorage. */
export interface ProgressionChapitre {
  leconLue: boolean;
  meilleurQuiz: number | null; // en %
  flashcardsSues: string[]; // termes marqués « je sais »
}

const VIDE: ProgressionChapitre = { leconLue: false, meilleurQuiz: null, flashcardsSues: [] };

export function useProgression(idChapitre: string) {
  const [p, setP] = useStocke<ProgressionChapitre>(`progression:${idChapitre}`, VIDE);
  const prog = { ...VIDE, ...p };
  return {
    prog,
    marquerLue: (lue: boolean) => setP((a) => ({ ...VIDE, ...a, leconLue: lue })),
    enregistrerQuiz: (pct: number) =>
      setP((a) => ({ ...VIDE, ...a, meilleurQuiz: Math.max(pct, a?.meilleurQuiz ?? 0) })),
    basculerCarte: (terme: string, sue: boolean) =>
      setP((a) => {
        const base = { ...VIDE, ...a };
        const set = new Set(base.flashcardsSues);
        if (sue) set.add(terme);
        else set.delete(terme);
        return { ...base, flashcardsSues: [...set] };
      }),
  };
}
