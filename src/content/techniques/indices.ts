import type { Technique } from '../types';

export const indices: Technique = {
  id: 'indices',
  titre: 'Indices simples (base 100)',
  intro:
    'Un indice simple compare la valeur d’une grandeur à une date donnée à sa valeur à une date de référence (la base), à laquelle on attribue la valeur 100. Il permet de lire rapidement les évolutions et de comparer des grandeurs d’unités différentes. Un indice synthétique (comme l’indice des prix à la consommation) combine plusieurs indices simples.',
  formules: [
    { tex: 'I_{t/0} = \\frac{V_t}{V_0} \\times 100', legende: 'Vt : valeur à la date t ; V0 : valeur à la date de base' },
    { tex: 'TV_{0 \\to t} = I_{t/0} - 100', legende: 'Taux de variation depuis la base' },
    { tex: 'TV_{t_1 \\to t_2} = \\frac{I_{t_2} - I_{t_1}}{I_{t_1}} \\times 100', legende: 'Taux de variation entre deux dates qui ne sont pas la base' },
  ],
  phraseType: [
    'Entre [année de base] et [année], selon [source], [la grandeur] a augmenté de [indice − 100] %.',
    'Ou : « En [année], [la grandeur] vaut [indice / 100] fois sa valeur de [année de base]. »',
    'Exemple (données fictives) : avec un indice 130 en 2025 (base 100 en 2015), le prix du ticket a augmenté de 30 % entre 2015 et 2025.',
  ],
  exemple: {
    enonce: 'Le prix d’un abonnement de transport vaut 40 € en 2015, 46 € en 2020 et 52 € en 2025 (données fictives). Calculer les indices base 100 en 2015, puis le taux de variation entre 2020 et 2025.',
    resolution: [
      'Indice 2015 = 100 (année de base). Indice 2020 = 46 / 40 × 100 = 115. Indice 2025 = 52 / 40 × 100 = 130.',
      'Entre 2015 et 2025 : +30 % (130 − 100).',
      'Entre 2020 et 2025 : (130 − 115) / 115 × 100 ≈ 13,0 %, et non 15 % : on ne soustrait les indices directement que si l’on part de la base.',
    ],
  },
  erreurFrequente: [
    'Lire un écart d’indices comme un taux de variation quand la date de départ n’est pas la base (115 → 130 n’est pas +15 %).',
    'Oublier de préciser l’année de base.',
    'Croire qu’un indice donne un niveau : un indice 130 ne dit pas que le prix vaut 130 €.',
  ],
  complements: [
    {
      type: 'encadre',
      titre: 'Indice synthétique (lecture)',
      texte:
        'L’indice des prix à la consommation (IPC) de l’INSEE est un indice synthétique : il combine les indices de prix de centaines de produits, pondérés par leur poids dans les dépenses des ménages. Le programme demande de savoir le lire, pas de le calculer. Un IPC de 120 (base 100 en 2015) signifie que les prix ont augmenté de 20 % en moyenne depuis 2015.',
    },
  ],
  calculateur: 'indices',
  exercices: [
    {
      type: 'nombre',
      enonce: 'Un abonnement coûte 40 € en 2015 et 46 € en 2020. Quel est son indice en 2020, base 100 en 2015 ?',
      reponse: 115,
      tolerance: 0.1,
      verif: { f: 'indice', args: [46, 40] },
      correction: '46 / 40 × 100 = 115.',
    },
    {
      type: 'nombre',
      enonce: 'Le même abonnement coûte 52 € en 2025. Quel est son indice en 2025, base 100 en 2015 ?',
      reponse: 130,
      tolerance: 0.1,
      verif: { f: 'indice', args: [52, 40] },
      correction: '52 / 40 × 100 = 130.',
    },
    {
      type: 'nombre',
      enonce: 'Un indice vaut 130 en 2025 (base 100 en 2015). Quel est le taux de variation entre 2015 et 2025 (en %) ?',
      reponse: 30,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxEntreIndices', args: [100, 130] },
      correction: '130 − 100 = 30 : hausse de 30 % depuis l’année de base.',
    },
    {
      type: 'nombre',
      enonce: 'L’indice vaut 115 en 2020 et 130 en 2025 (base 100 en 2015). Quel est le taux de variation entre 2020 et 2025 (en %, au dixième) ?',
      reponse: 13,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxEntreIndices', args: [115, 130] },
      correction: '(130 − 115) / 115 × 100 ≈ 13,0 %. Ce n’est pas 15 %, car 2020 n’est pas l’année de base.',
    },
    {
      type: 'nombre',
      enonce: 'Un loyer valait 1 600 € en 2015. Son indice en 2025 est de 125 (base 100 en 2015). Combien vaut-il en 2025 (en €) ?',
      reponse: 2000,
      tolerance: 0.5,
      unite: '€',
      verif: { f: 'valeurFinale', args: [1600, 25] },
      correction: '1 600 × 125 / 100 = 2 000 €.',
    },
  ],
};
