import type { Technique } from '../types';

export const graphiques: Technique = {
  id: 'graphiques',
  titre: 'Lire des graphiques : séries, répartitions, offre et demande',
  intro:
    'Lire un graphique, c’est d’abord identifier ce qu’il représente (titre, source, unités, axes, légende), puis dégager l’information principale avant les détails. Le programme demande de savoir lire des séries chronologiques, des diagrammes de répartition et des représentations de fonctions simples (offre, demande, coût), en interprétant leurs pentes et leurs déplacements.',
  formules: [
    { tex: '\\text{Pente} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}', legende: 'Pente d’une droite : variation de l’ordonnée pour une unité d’abscisse' },
    { tex: 'e = \\frac{\\text{variation de la quantité demandée en \\%}}{\\text{variation du prix en \\%}}', legende: 'Élasticité-prix de la demande (notion, en complément)' },
  ],
  phraseType: [
    'Série chronologique : « Selon [source], entre [année 1] et [année 2], [la grandeur] a [augmenté / diminué / stagné], passant de [v1] à [v2]. »',
    'Diagramme de répartition : « En [année], selon [source], [x] % de [l’ensemble] relèvent de [catégorie] » (la somme des parts fait 100 %).',
    'Courbe de demande : « Toutes choses égales par ailleurs, une hausse du prix de [p1] à [p2] s’accompagne d’une baisse de la quantité demandée de [q1] à [q2]. »',
  ],
  exemple: {
    enonce: 'Le prix d’une place de concert passe de 10 € à 12 € et la quantité demandée de 500 à 450 places (données fictives). Calculer l’élasticité-prix de la demande et l’interpréter.',
    resolution: [
      'Variation du prix : (12 − 10) / 10 × 100 = +20 %.',
      'Variation de la quantité : (450 − 500) / 500 × 100 = −10 %.',
      'Élasticité = −10 / 20 = −0,5. Une hausse de 1 % du prix entraîne une baisse d’environ 0,5 % de la quantité demandée : la demande est peu sensible au prix (inélastique, |e| < 1).',
    ],
  },
  erreurFrequente: [
    'Commencer par un détail au lieu de la tendance générale.',
    'Oublier l’unité (milliers, millions, %, euros constants) ou la source.',
    'Confondre un déplacement de courbe (changement d’un autre déterminant) et un mouvement le long de la courbe (changement de prix).',
    'Interpréter une pente sans regarder les unités des axes.',
  ],
  complements: [
    {
      type: 'liste',
      items: [
        '**Série chronologique** : l’abscisse représente le temps ; repère la tendance, les ruptures, les maxima et minima.',
        '**Diagramme de répartition** (secteurs, barres empilées) : chaque élément est une part du total ; compare les parts entre elles.',
        '**Courbe d’offre ou de demande** : quantité en abscisse, prix en ordonnée ; la pente de la demande est négative, celle de l’offre positive.',
        '**Élasticité** : |e| > 1 demande élastique (très sensible au prix) ; |e| < 1 demande inélastique (peu sensible : carburant, tabac, médicaments).',
      ],
    },
  ],
  calculateur: 'elasticite',
  exercices: [
    {
      type: 'nombre',
      enonce: 'Le prix passe de 10 € à 12 € et la quantité demandée de 500 à 450 (données fictives). Quelle est l’élasticité-prix de la demande ?',
      reponse: -0.5,
      tolerance: 0.01,
      verif: { f: 'elasticite', args: [10, 500, 12, 450] },
      correction: 'Quantité : −10 % ; prix : +20 % ; élasticité = −10 / 20 = −0,5.',
    },
    {
      type: 'nombre',
      enonce: 'Une droite de demande passe par les points (Q = 4 ; P = 8) et (Q = 12 ; P = 4). Quelle est sa pente (ΔP / ΔQ) ?',
      reponse: -0.5,
      tolerance: 0.01,
      verif: { f: 'pente', args: [4, 8, 12, 4] },
      correction: '(4 − 8) / (12 − 4) = −4 / 8 = −0,5 : le prix baisse de 0,5 quand la quantité augmente de 1.',
    },
    {
      type: 'nombre',
      enonce: 'Le prix passe de 2 € à 2,20 € et la quantité demandée de 1 000 à 800. Quelle est l’élasticité-prix de la demande ?',
      reponse: -2,
      tolerance: 0.01,
      verif: { f: 'elasticite', args: [2, 1000, 2.2, 800] },
      correction: 'Prix : +10 % ; quantité : −20 % ; élasticité = −20 / 10 = −2.',
    },
    {
      type: 'qcm',
      enonce: 'Une élasticité-prix de la demande de −2 signifie que la demande est :',
      choix: ['Inélastique', 'Élastique : très sensible au prix', 'Indépendante du prix', 'Croissante avec le prix'],
      bonne: 1,
      correction: '|e| = 2 > 1 : une hausse de 1 % du prix réduit la quantité demandée d’environ 2 %.',
    },
    {
      type: 'qcm',
      enonce: 'Sur un diagramme en secteurs représentant la répartition des emplois par secteur d’activité, la somme des parts vaut :',
      choix: ['Le nombre total d’emplois', '100 %', 'Elle dépend de l’année', '360 %'],
      bonne: 1,
      correction: 'Un diagramme de répartition décompose un total : la somme des parts vaut 100 %.',
    },
  ],
};
