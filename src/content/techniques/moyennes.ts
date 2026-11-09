import type { Technique } from '../types';

export const moyennes: Technique = {
  id: 'moyennes',
  titre: 'Moyenne simple, moyenne pondérée et médiane',
  intro:
    'La moyenne et la médiane résument une série de valeurs par un seul nombre, mais elles ne disent pas la même chose. La moyenne est sensible aux valeurs extrêmes ; la médiane partage la population en deux moitiés égales et résiste aux valeurs extrêmes. C’est pourquoi on utilise souvent la médiane pour les salaires ou les niveaux de vie.',
  formules: [
    { tex: '\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}', legende: 'Moyenne arithmétique simple' },
    { tex: '\\bar{x}_p = \\frac{x_1 p_1 + x_2 p_2 + \\dots + x_n p_n}{p_1 + p_2 + \\dots + p_n}', legende: 'Moyenne pondérée : chaque valeur compte selon son poids (coefficient, effectif)' },
    { tex: '\\text{Médiane} : 50\\,\\% \\text{ des valeurs en dessous, } 50\\,\\% \\text{ au-dessus}', legende: 'On range les valeurs ; avec un nombre pair, on prend la moyenne des deux valeurs centrales' },
  ],
  phraseType: [
    'Moyenne : « En [année], selon [source], le salaire net moyen [des salariés à temps plein] s’élève à [x] € par mois. »',
    'Médiane : « En [année], selon [source], la moitié des [population] perçoivent moins de [x] € par mois, et l’autre moitié davantage. »',
    'Exemple (données fictives) : dans cette entreprise, la moitié des salariés gagnent moins de 1 800 € net par mois, alors que le salaire moyen est de 3 120 €, tiré vers le haut par celui du dirigeant.',
  ],
  exemple: {
    enonce: 'Cinq salariés d’une petite entreprise gagnent 1 200 €, 1 500 €, 1 800 €, 2 100 € et 9 000 € net par mois (données fictives). Calculer le salaire moyen et le salaire médian. Commenter.',
    resolution: [
      'Moyenne = (1 200 + 1 500 + 1 800 + 2 100 + 9 000) / 5 = 15 600 / 5 = 3 120 €.',
      'Médiane : les valeurs sont déjà rangées ; la valeur centrale (3e sur 5) est 1 800 €.',
      'La moyenne est bien supérieure à la médiane, car elle est tirée vers le haut par une valeur extrême (9 000 €). Quatre salariés sur cinq gagnent moins que la moyenne : la médiane décrit mieux la situation « typique ».',
    ],
  },
  erreurFrequente: [
    'Faire la moyenne simple de moyennes ou de taux qui portent sur des effectifs différents (il faut pondérer par les effectifs).',
    'Oublier de ranger les valeurs avant de chercher la médiane.',
    'Confondre la médiane avec le milieu de l’intervalle entre le minimum et le maximum.',
  ],
  calculateur: 'moyennes',
  exercices: [
    {
      type: 'nombre',
      enonce: 'Un élève a obtenu 12, 8, 15, 11 et 14. Quelle est sa moyenne (coefficients égaux) ?',
      reponse: 12,
      tolerance: 0.05,
      verif: { f: 'moyenne', args: [[12, 8, 15, 11, 14]] },
      correction: '(12 + 8 + 15 + 11 + 14) / 5 = 60 / 5 = 12.',
    },
    {
      type: 'nombre',
      enonce: 'Un élève obtient 14 (coefficient 3), 10 (coefficient 2) et 16 (coefficient 1). Quelle est sa moyenne pondérée ?',
      reponse: 13,
      tolerance: 0.05,
      verif: { f: 'moyennePonderee', args: [[14, 10, 16], [3, 2, 1]] },
      correction: '(14 × 3 + 10 × 2 + 16 × 1) / (3 + 2 + 1) = 78 / 6 = 13.',
    },
    {
      type: 'nombre',
      enonce: 'Salaires mensuels (données fictives) : 1 200, 1 500, 1 800, 2 100 et 9 000 €. Quel est le salaire médian (en €) ?',
      reponse: 1800,
      tolerance: 0.5,
      unite: '€',
      verif: { f: 'mediane', args: [[1200, 1500, 1800, 2100, 9000]] },
      correction: 'Valeurs rangées, la 3e sur 5 est 1 800 €.',
    },
    {
      type: 'nombre',
      enonce: 'Quel est le salaire moyen de ces cinq salariés (en €) ?',
      reponse: 3120,
      tolerance: 0.5,
      unite: '€',
      verif: { f: 'moyenne', args: [[1200, 1500, 1800, 2100, 9000]] },
      correction: '15 600 / 5 = 3 120 €. La moyenne est tirée vers le haut par la valeur extrême.',
    },
    {
      type: 'nombre',
      enonce: 'Quelle est la médiane de la série 3 ; 5 ; 7 ; 9 ; 11 ; 20 ?',
      reponse: 8,
      tolerance: 0.05,
      verif: { f: 'mediane', args: [[3, 5, 7, 9, 11, 20]] },
      correction: 'Nombre pair de valeurs : moyenne des deux valeurs centrales, (7 + 9) / 2 = 8.',
    },
  ],
};
