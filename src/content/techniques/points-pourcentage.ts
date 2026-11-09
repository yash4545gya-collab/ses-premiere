import type { Technique } from '../types';

export const pointsPourcentage: Technique = {
  id: 'points-pourcentage',
  titre: 'Points de pourcentage et pourcentages',
  intro:
    'Quand une grandeur est elle-même un pourcentage (taux de chômage, taux de participation, part de marché, taux d’intérêt), son évolution peut s’exprimer de deux façons très différentes : l’écart absolu, en points de pourcentage, ou la variation relative, en pourcentage. Les confondre est une erreur fréquente au bac.',
  formules: [
    { tex: '\\text{Écart en points} = t_2 - t_1', legende: 'Différence entre deux taux (en points de %)' },
    { tex: '\\text{Variation en \\%} = \\frac{t_2 - t_1}{t_1} \\times 100', legende: 'Taux de variation d’un taux' },
  ],
  phraseType: [
    'Écart absolu : « Entre [année 1] et [année 2], selon [source], le taux de [x] a augmenté de [écart] points de pourcentage, passant de [t1] % à [t2] %. »',
    'Variation relative : « … soit une hausse de [variation] %. »',
    'Exemple (données fictives) : le taux de chômage de cette région est passé de 7,5 % à 9 % : il a augmenté de 1,5 point, soit une hausse de 20 %.',
  ],
  exemple: {
    enonce: 'Le taux de chômage d’une région passe de 7,5 % en 2024 à 9 % en 2026 (données fictives). Exprimer cette évolution en points puis en pourcentage.',
    resolution: [
      'Écart en points : 9 − 7,5 = 1,5 point de pourcentage.',
      'Variation relative : (9 − 7,5) / 7,5 × 100 = 20 %. Le nombre relatif de chômeurs dans la population active a augmenté d’un cinquième.',
      'Phrase : « Le taux de chômage a augmenté de 1,5 point (de 7,5 % à 9 %), soit une hausse de 20 %. » Dire « il a augmenté de 1,5 % » serait faux.',
    ],
  },
  erreurFrequente: [
    'Écrire « le taux a augmenté de 1,5 % » alors qu’il a augmenté de 1,5 point.',
    'Croire qu’une petite variation en points est forcément une petite variation en % : passer de 1 % à 2 % = +1 point, mais +100 %.',
  ],
  calculateur: 'points',
  exercices: [
    {
      type: 'nombre',
      enonce: 'Le taux de chômage passe de 7,5 % à 9 %. De combien de points de pourcentage a-t-il augmenté ?',
      reponse: 1.5,
      tolerance: 0.01,
      unite: 'points',
      verif: { f: 'ecartPoints', args: [7.5, 9] },
      correction: '9 − 7,5 = 1,5 point.',
    },
    {
      type: 'nombre',
      enonce: 'Même situation : de combien de % le taux de chômage a-t-il augmenté ?',
      reponse: 20,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxVariation', args: [7.5, 9] },
      correction: '(9 − 7,5) / 7,5 × 100 = 20 %.',
    },
    {
      type: 'nombre',
      enonce: 'Le taux de participation à une élection passe de 80 % à 72 %. Quel est l’écart en points (avec son signe) ?',
      reponse: -8,
      tolerance: 0.01,
      unite: 'points',
      verif: { f: 'ecartPoints', args: [80, 72] },
      correction: '72 − 80 = −8 points.',
    },
    {
      type: 'nombre',
      enonce: 'Même situation : quelle est la variation de la participation en % (avec son signe) ?',
      reponse: -10,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'tauxVariation', args: [80, 72] },
      correction: '(72 − 80) / 80 × 100 = −10 %.',
    },
    {
      type: 'qcm',
      enonce: 'Un taux d’intérêt passe de 2 % à 3 %. Quelle affirmation est exacte ?',
      choix: [
        'Il a augmenté de 1 %.',
        'Il a augmenté de 1 point, soit une hausse de 50 %.',
        'Il a augmenté de 50 points.',
        'Il a augmenté de 3 %.',
      ],
      bonne: 1,
      correction: 'Écart : 3 − 2 = 1 point. Variation relative : (3 − 2) / 2 × 100 = 50 %.',
    },
  ],
};
