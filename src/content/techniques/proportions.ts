import type { Technique } from '../types';

/** Tableau fictif utilisé par l'exemple, le calculateur et les exercices */
export const TABLEAU_SPECIALITES = {
  lignes: ['Filles', 'Garçons'],
  colonnes: ['SES', 'Maths', 'Autres'],
  valeurs: [
    [45, 30, 45],
    [25, 40, 15],
  ],
};

export const proportions: Technique = {
  id: 'proportions',
  titre: 'Proportions et pourcentages de répartition',
  intro:
    'Une proportion (ou part) mesure le poids d’une partie dans un ensemble. Exprimée en pourcentage, elle répond à la question : « sur 100 éléments de l’ensemble, combien appartiennent à la partie ? ». Un pourcentage de répartition décrit la structure d’un ensemble : la somme des parts vaut 100 %.',
  formules: [
    { tex: '\\text{Part de A dans B} = \\frac{\\text{effectif de A}}{\\text{effectif de B}} \\times 100', legende: 'A est inclus dans B (la partie dans le tout)' },
    { tex: '\\sum \\text{parts} = 100\\,\\%', legende: 'Dans une répartition, les parts s’additionnent pour donner 100 %' },
  ],
  phraseType: [
    'En [année], selon [source], [x] % des [ensemble B] sont des [partie A].',
    'Exemple (données fictives) : dans ce lycée, en 2026, 37,5 % des filles de Première ont choisi la spécialité SES.',
    'Dans un tableau à double entrée, nomme toujours l’ensemble de référence : « parmi les filles… » (lecture en ligne) ou « parmi les élèves de SES… » (lecture en colonne).',
  ],
  exemple: {
    enonce:
      'Répartition des 200 élèves de Première d’un lycée selon le sexe et une de leurs spécialités (données fictives). Quelle est la part des filles parmi les élèves de SES ? Quelle est la part des élèves de SES parmi les filles ?',
    tableau: {
      entetes: ['', 'SES', 'Maths', 'Autres', 'Total'],
      lignes: [
        ['Filles', '45', '30', '45', '120'],
        ['Garçons', '25', '40', '15', '80'],
        ['Total', '70', '70', '60', '200'],
      ],
      source: 'Données fictives',
    },
    resolution: [
      'Part des filles parmi les élèves de SES : l’ensemble de référence est la colonne SES (70 élèves). 45 / 70 × 100 ≈ 64,3 %.',
      'Part des élèves de SES parmi les filles : l’ensemble de référence est la ligne Filles (120 élèves). 45 / 120 × 100 = 37,5 %.',
      'Les deux résultats sont différents parce que l’ensemble de référence n’est pas le même. Phrase : « Dans ce lycée, 64,3 % des élèves de SES sont des filles, et 37,5 % des filles ont choisi SES. »',
    ],
  },
  erreurFrequente: [
    'Se tromper d’ensemble de référence dans un tableau à double entrée : « 37,5 % des élèves de SES sont des filles » est faux (c’est 37,5 % des filles qui font SES).',
    'Additionner des pourcentages qui ne portent pas sur le même ensemble.',
    'Confondre une part (en %) et un effectif (en nombre de personnes).',
  ],
  complements: [
    {
      type: 'encadre',
      titre: 'Lecture en ligne ou en colonne ?',
      texte:
        'Repère la case « Total » qui vaut 100 % : si les totaux à 100 % sont en bout de ligne, on lit en ligne (« parmi les filles… ») ; s’ils sont en bas de colonne, on lit en colonne (« parmi les élèves de SES… »). Si seul le total général vaut 100 %, chaque case est une part de l’ensemble (« parmi l’ensemble des élèves… »).',
    },
  ],
  calculateur: 'proportions',
  exercices: [
    {
      type: 'nombre',
      enonce: 'Dans une classe de 32 élèves, 12 ont choisi la spécialité SES. Quelle part de la classe (en %) a choisi SES ?',
      reponse: 37.5,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'proportion', args: [12, 32] },
      correction: '12 / 32 × 100 = 37,5 %. Dans cette classe, 37,5 % des élèves ont choisi SES.',
    },
    {
      type: 'nombre',
      enonce: 'Une entreprise de 250 salariés compte 85 cadres. Quelle est la part des cadres dans l’effectif (en %) ?',
      reponse: 34,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'proportion', args: [85, 250] },
      correction: '85 / 250 × 100 = 34 %. Les cadres représentent 34 % des salariés de cette entreprise.',
    },
    {
      type: 'nombre',
      enonce: 'Avec le tableau de l’exemple (données fictives) : parmi les filles, quelle part a choisi SES ? (arrondir au dixième)',
      reponse: 37.5,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'proportion', args: [45, 120] },
      correction: 'Lecture en ligne : 45 / 120 × 100 = 37,5 %. 37,5 % des filles ont choisi SES.',
    },
    {
      type: 'nombre',
      enonce: 'Avec le même tableau : parmi les élèves ayant choisi Maths, quelle part sont des garçons ? (arrondir au dixième)',
      reponse: 57.1,
      tolerance: 0.1,
      unite: '%',
      verif: { f: 'proportion', args: [40, 70] },
      correction: 'Lecture en colonne : 40 / 70 × 100 ≈ 57,1 %. 57,1 % des élèves de Maths sont des garçons.',
    },
    {
      type: 'qcm',
      enonce: 'Dans le tableau de l’exemple, quelle phrase est correcte ?',
      choix: [
        '37,5 % des élèves de SES sont des filles.',
        '64,3 % des élèves de SES sont des filles.',
        '64,3 % des filles ont choisi SES.',
        '45 % des filles ont choisi SES.',
      ],
      bonne: 1,
      correction: '45 filles sur 70 élèves de SES : 64,3 %. Les 37,5 % portent sur l’ensemble des filles, pas sur les élèves de SES.',
    },
  ],
};
