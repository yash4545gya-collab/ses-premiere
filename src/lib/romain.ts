const TABLE: [number, string][] = [
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];

/** 1 → I, 12 → XII (suffisant pour les numéros de chapitre) */
export function romain(n: number): string {
  let reste = n;
  let s = '';
  for (const [v, r] of TABLE) {
    while (reste >= v) {
      s += r;
      reste -= v;
    }
  }
  return s;
}
