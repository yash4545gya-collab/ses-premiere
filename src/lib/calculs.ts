/**
 * Formules des savoir-faire quantitatifs, utilisées par les calculateurs.
 * Elles sont testées contre des implémentations indépendantes dans
 * scripts/verifier-contenu.ts.
 */

export const proportion = (partie: number, ensemble: number) => (partie / ensemble) * 100;

export const tauxVariation = (vd: number, va: number) => ((va - vd) / vd) * 100;

export const coefficientMultiplicateur = (vd: number, va: number) => va / vd;

export const cmDepuisTaux = (taux: number) => 1 + taux / 100;

export const tauxDepuisCm = (cm: number) => (cm - 1) * 100;

/** Taux de variation global issu de taux successifs (en %) */
export const tauxCumule = (taux: number[]) => (taux.reduce((p, t) => p * (1 + t / 100), 1) - 1) * 100;

/** Taux de variation annuel moyen sur n périodes, à partir du taux global (en %) */
export const tauxMoyen = (tauxGlobal: number, n: number) => (Math.pow(1 + tauxGlobal / 100, 1 / n) - 1) * 100;

export const indice = (valeur: number, valeurBase: number) => (valeur / valeurBase) * 100;

/** Taux de variation entre deux indices (en %) */
export const tauxEntreIndices = (i1: number, i2: number) => ((i2 - i1) / i1) * 100;

export const moyenne = (valeurs: number[]) => valeurs.reduce((a, b) => a + b, 0) / valeurs.length;

export const moyennePonderee = (valeurs: number[], poids: number[]) =>
  valeurs.reduce((s, v, i) => s + v * poids[i], 0) / poids.reduce((a, b) => a + b, 0);

export const mediane = (valeurs: number[]) => {
  const t = [...valeurs].sort((a, b) => a - b);
  const m = Math.floor(t.length / 2);
  return t.length % 2 ? t[m] : (t[m - 1] + t[m]) / 2;
};

/** Écart en points de pourcentage */
export const ecartPoints = (t1: number, t2: number) => t2 - t1;

/** Taux réel exact à partir d'un taux nominal et d'un taux d'inflation (en %) */
export const tauxReel = (nominal: number, inflation: number) => ((1 + nominal / 100) / (1 + inflation / 100) - 1) * 100;

/** Valeur en euros constants (réelle) à partir d'une valeur nominale et d'un indice des prix (base 100) */
export const valeurReelle = (nominale: number, indicePrix: number) => (nominale / indicePrix) * 100;

/** Élasticité-prix de la demande (variations en %) */
export const elasticite = (p1: number, q1: number, p2: number, q2: number) => tauxVariation(q1, q2) / tauxVariation(p1, p2);

/** Pente d'une droite passant par deux points (variation de y / variation de x) */
export const pente = (x1: number, y1: number, x2: number, y2: number) => (y2 - y1) / (x2 - x1);

/** Coefficient de corrélation linéaire de Pearson */
export const correlation = (x: number[], y: number[]) => {
  const mx = moyenne(x);
  const my = moyenne(y);
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < x.length; i++) {
    num += (x[i] - mx) * (y[i] - my);
    dx += (x[i] - mx) ** 2;
    dy += (y[i] - my) ** 2;
  }
  return num / Math.sqrt(dx * dy);
};

/** Arrondi à n décimales */
export const arrondi = (x: number, n = 1) => {
  const f = 10 ** n;
  return Math.round(x * f) / f;
};

/** Format français : 12,5 ; 1 250 */
export const fr = (x: number, n = 1) => {
  if (!Number.isFinite(x)) return '—';
  return arrondi(x, n).toLocaleString('fr-FR', { maximumFractionDigits: n });
};

/** Lit un nombre saisi à la française (virgule acceptée) */
export const lireNombre = (s: string): number | null => {
  const t = s.replace(/\s/g, '').replace(',', '.').replace('%', '');
  if (t === '' || t === '-' || t === '.') return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
};
