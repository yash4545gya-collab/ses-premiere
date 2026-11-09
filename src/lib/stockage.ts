import { useCallback, useSyncExternalStore } from 'react';

/**
 * Accès à localStorage, toujours protégé : si le stockage est indisponible
 * (navigation privée, quota, cookies bloqués), le site continue de fonctionner
 * avec les valeurs par défaut.
 */
const PREFIXE = 'ses1:';
const EVENEMENT = 'ses1-stockage';

export function lire<T>(cle: string, defaut: T): T {
  try {
    const brut = window.localStorage.getItem(PREFIXE + cle);
    return brut === null ? defaut : (JSON.parse(brut) as T);
  } catch {
    return defaut;
  }
}

export function ecrire<T>(cle: string, valeur: T): void {
  try {
    window.localStorage.setItem(PREFIXE + cle, JSON.stringify(valeur));
  } catch {
    /* stockage indisponible : on ignore */
  }
  try {
    window.dispatchEvent(new CustomEvent(EVENEMENT, { detail: cle }));
  } catch {
    /* ignore */
  }
}

function abonner(rappel: () => void) {
  window.addEventListener(EVENEMENT, rappel);
  window.addEventListener('storage', rappel);
  return () => {
    window.removeEventListener(EVENEMENT, rappel);
    window.removeEventListener('storage', rappel);
  };
}

function lireBrut(cle: string): string | null {
  try {
    return window.localStorage.getItem(PREFIXE + cle);
  } catch {
    return null;
  }
}

/** État persistant partagé entre composants (synchronisé entre onglets). */
export function useStocke<T>(cle: string, defaut: T): [T, (v: T | ((ancien: T) => T)) => void] {
  const brut = useSyncExternalStore(abonner, () => lireBrut(cle), () => null);
  let valeur = defaut;
  if (brut !== null) {
    try {
      valeur = JSON.parse(brut) as T;
    } catch {
      valeur = defaut;
    }
  }
  const definir = useCallback(
    (v: T | ((ancien: T) => T)) => {
      const actuel = lire(cle, defaut);
      ecrire(cle, typeof v === 'function' ? (v as (a: T) => T)(actuel) : v);
    },
    // defaut est une valeur littérale stable dans nos usages
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cle],
  );
  return [valeur, definir];
}
