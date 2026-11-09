import type { Technique } from '../types';

export const valeurReelle: Technique = {
  id: 'valeur-reelle',
  titre: 'Valeur nominale et valeur réelle',
  intro:
    'Une valeur nominale est exprimée en euros courants, aux prix de l’époque. Une valeur réelle (en euros constants, ou « en volume ») est corrigée de l’inflation : elle mesure ce que l’on peut réellement acheter. Le programme insiste sur le cas du taux d’intérêt : le taux réel est le taux nominal diminué de l’inflation.',
  formules: [
    { tex: '1 + \\frac{t_{\\text{réel}}}{100} = \\frac{1 + t_{\\text{nominal}}/100}{1 + \\pi/100}', legende: 'π : taux d’inflation (calcul exact)' },
    { tex: 't_{\\text{réel}} \\approx t_{\\text{nominal}} - \\pi', legende: 'Approximation, valable pour des taux faibles' },
    { tex: '\\text{Valeur réelle} = \\frac{\\text{Valeur nominale}}{\\text{Indice des prix}} \\times 100', legende: 'Valeur en euros constants de l’année de base de l’indice' },
  ],
  phraseType: [
    'Croissance réelle : « En [année], selon [source], le PIB a augmenté de [x] % en volume (c’est-à-dire hors effet de l’inflation). »',
    'Taux réel : « Avec un taux nominal de [i] % et une inflation de [π] %, le taux d’intérêt réel est d’environ [i − π] %. »',
    'Exemple (données fictives) : le salaire de Léa a augmenté de 3 % en euros courants, mais les prix ont augmenté de 2 % : son pouvoir d’achat n’a progressé que d’environ 1 %.',
  ],
  exemple: {
    enonce: 'Un salaire passe de 2 000 € à 2 060 € entre deux années, pendant que les prix augmentent de 2 % (données fictives). Quelle est l’évolution du salaire réel ?',
    resolution: [
      'Évolution nominale : (2 060 − 2 000) / 2 000 × 100 = 3 %.',
      'Évolution réelle exacte : (1,03 / 1,02 − 1) × 100 ≈ 0,98 %.',
      'Approximation : 3 − 2 = 1 %. Le pouvoir d’achat du salaire a augmenté d’environ 1 %.',
    ],
  },
  erreurFrequente: [
    'Comparer des montants en euros courants sur une longue période sans tenir compte de l’inflation.',
    'Oublier qu’un taux réel peut être négatif : un placement à 2 % avec 3 % d’inflation fait perdre du pouvoir d’achat.',
  ],
  calculateur: 'valeur-reelle',
  exercices: [
    {
      type: 'nombre',
      enonce: 'Un salaire augmente de 3 % en euros courants et les prix de 2 %. Quel est le taux de variation réel exact (en %, au centième) ?',
      reponse: 0.98,
      tolerance: 0.02,
      unite: '%',
      verif: { f: 'tauxReel', args: [3, 2] },
      correction: '(1,03 / 1,02 − 1) × 100 ≈ 0,98 % (environ 1 % par approximation).',
    },
    {
      type: 'nombre',
      enonce: 'Un prêt est accordé au taux nominal de 5 % ; l’inflation est de 1,5 %. Quel est le taux d’intérêt réel (en %, au dixième) ?',
      reponse: 3.45,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxReel', args: [5, 1.5] },
      correction: 'Calcul exact : (1,05 / 1,015 − 1) × 100 ≈ 3,4 %. Approximation : 5 − 1,5 = 3,5 %.',
    },
    {
      type: 'nombre',
      enonce: 'Un loyer vaut 2 400 € en 2025. L’indice des prix vaut 120 en 2025 (base 100 en 2015). Que vaut ce loyer en euros de 2015 ?',
      reponse: 2000,
      tolerance: 0.5,
      unite: '€',
      verif: { f: 'valeurReelle', args: [2400, 120] },
      correction: '2 400 / 120 × 100 = 2 000 € de 2015.',
    },
    {
      type: 'nombre',
      enonce: 'Le PIB en valeur augmente de 6 % et les prix de 4 %. Quelle est la croissance du PIB en volume (en %, au dixième) ?',
      reponse: 1.92,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxReel', args: [6, 4] },
      correction: '(1,06 / 1,04 − 1) × 100 ≈ 1,9 %.',
    },
    {
      type: 'qcm',
      enonce: 'Un livret rapporte 2 % par an alors que l’inflation est de 3 %. Que peut-on dire ?',
      choix: [
        'Le taux réel est positif (+5 %).',
        'Le taux réel est négatif : l’épargnant perd du pouvoir d’achat.',
        'Le taux réel est nul.',
        'L’inflation n’a aucun effet sur l’épargne.',
      ],
      bonne: 1,
      correction: 'Taux réel ≈ 2 − 3 = −1 % : l’épargne placée achète moins de biens au bout d’un an.',
    },
  ],
};
