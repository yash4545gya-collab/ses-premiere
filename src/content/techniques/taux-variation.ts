import type { Technique } from '../types';

export const tauxVariation: Technique = {
  id: 'taux-variation',
  titre: 'Taux de variation et coefficient multiplicateur',
  intro:
    'Le taux de variation mesure l’évolution relative d’une grandeur entre deux dates, en pourcentage de sa valeur de départ. Le coefficient multiplicateur dit par combien la valeur de départ a été multipliée. Les deux se convertissent l’un en l’autre, ce qui permet d’enchaîner des évolutions successives et de calculer un taux moyen.',
  formules: [
    { tex: 'TV = \\frac{V_{A} - V_{D}}{V_{D}} \\times 100', legende: 'VA : valeur d’arrivée ; VD : valeur de départ' },
    { tex: 'CM = \\frac{V_{A}}{V_{D}}', legende: 'Coefficient multiplicateur' },
    { tex: 'CM = 1 + \\frac{TV}{100} \\qquad TV = (CM - 1) \\times 100', legende: 'Conversion' },
    { tex: 'CM_{\\text{global}} = CM_1 \\times CM_2 \\times \\dots \\times CM_n', legende: 'Taux successifs : on multiplie les CM, on n’additionne pas les taux' },
    { tex: 'TV_{\\text{moyen}} = \\left( CM_{\\text{global}}^{1/n} - 1 \\right) \\times 100', legende: 'Taux de variation annuel moyen sur n années' },
  ],
  phraseType: [
    'Entre [année 1] et [année 2], selon [source], [la grandeur] a augmenté (ou diminué) de [x] %.',
    'Avec un coefficient multiplicateur : « Entre [année 1] et [année 2], [la grandeur] a été multipliée par [CM]. » (on réserve plutôt cette formulation aux fortes hausses : « multiplié par 2,5 »).',
    'Exemple (données fictives) : entre 2024 et 2026, le prix du ticket de cinéma de cette ville a augmenté de 15 %, passant de 8 € à 9,20 €.',
  ],
  exemple: {
    enonce: 'Le chiffre d’affaires d’une entreprise passe de 400 000 € en 2024 à 460 000 € en 2025, puis baisse de 10 % en 2026 (données fictives). Calculer le taux de variation 2024-2025, le CM, puis le taux de variation global 2024-2026 et le taux annuel moyen.',
    resolution: [
      'TV 2024-2025 = (460 000 − 400 000) / 400 000 × 100 = 15 %. CM = 460 000 / 400 000 = 1,15.',
      'Baisse de 10 % : CM = 1 − 10/100 = 0,9.',
      'CM global = 1,15 × 0,9 = 1,035, soit un TV global de +3,5 % (et non 15 − 10 = 5 %).',
      'Taux annuel moyen sur 2 ans : (1,035^(1/2) − 1) × 100 ≈ 1,7 % par an.',
    ],
  },
  erreurFrequente: [
    'Additionner des taux successifs : +10 % puis −10 % ne donne pas 0 %, mais −1 % (1,1 × 0,9 = 0,99).',
    'Diviser par la valeur d’arrivée au lieu de la valeur de départ.',
    'Confondre « augmente de 150 % » (CM = 2,5) et « est multiplié par 1,5 » (+50 %).',
    'Calculer le taux moyen en divisant le taux global par le nombre d’années (approximation fausse dès que les taux sont élevés).',
  ],
  calculateur: 'taux-variation',
  exercices: [
    {
      type: 'nombre',
      enonce: 'Le prix d’un produit passe de 80 € à 92 €. Quel est son taux de variation (en %) ?',
      reponse: 15,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxVariation', args: [80, 92] },
      correction: '(92 − 80) / 80 × 100 = 15 %. Le prix a augmenté de 15 %.',
    },
    {
      type: 'nombre',
      enonce: 'Le chiffre d’affaires d’une entreprise passe de 250 000 € à 210 000 €. Quel est son taux de variation (en %) ?',
      reponse: -16,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxVariation', args: [250000, 210000] },
      correction: '(210 000 − 250 000) / 250 000 × 100 = −16 %. Le chiffre d’affaires a baissé de 16 %.',
    },
    {
      type: 'nombre',
      enonce: 'Une grandeur augmente de 25 %. Quel est le coefficient multiplicateur correspondant ?',
      reponse: 1.25,
      tolerance: 0.001,
      verif: { f: 'cmDepuisTaux', args: [25] },
      correction: 'CM = 1 + 25/100 = 1,25.',
    },
    {
      type: 'nombre',
      enonce: 'Un prix augmente de 10 % une année, puis baisse de 10 % l’année suivante. Quel est le taux de variation global (en %) ?',
      reponse: -1,
      tolerance: 0.05,
      unite: '%',
      verif: { f: 'tauxCumule', args: [[10, -10]] },
      correction: 'CM global = 1,10 × 0,90 = 0,99, soit −1 %. Le prix final est inférieur au prix initial.',
    },
    {
      type: 'nombre',
      enonce: 'La population d’une ville augmente de 21 % en 2 ans. Quel est le taux de variation annuel moyen (en %) ?',
      reponse: 10,
      tolerance: 0.05,
      unite: '%',
      verif: { f: 'tauxMoyen', args: [21, 2] },
      correction: 'CM global = 1,21 ; 1,21^(1/2) = 1,10 ; taux annuel moyen = 10 % (et non 21 / 2 = 10,5 %).',
    },
  ],
};
