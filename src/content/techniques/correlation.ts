import type { Technique } from '../types';

export const correlation: Technique = {
  id: 'correlation',
  titre: 'Corrélation, causalité et « toutes choses égales par ailleurs »',
  intro:
    'Deux variables sont corrélées lorsqu’elles varient ensemble (dans le même sens ou en sens inverse). Une corrélation n’est pas une causalité : il faut établir un mécanisme qui explique pourquoi l’une agit sur l’autre, et écarter les autres explications (variable cachée, causalité inverse, simple coïncidence). Le raisonnement « toutes choses égales par ailleurs » isole l’effet d’une variable en neutralisant les autres.',
  formules: [
    { tex: '-1 \\le r \\le 1', legende: 'Coefficient de corrélation linéaire (complément, hors programme) : proche de 1 ou −1, liaison forte ; proche de 0, pas de liaison linéaire' },
  ],
  phraseType: [
    'Corrélation : « Les données montrent une relation [positive / négative] entre [X] et [Y] : les [individus / pays] où [X] est élevé ont en moyenne un [Y] plus [élevé / faible]. »',
    'Causalité : « On peut faire l’hypothèse que [X] entraîne [Y], car [mécanisme]. Mais d’autres facteurs, comme [variable], peuvent aussi jouer. »',
    'Toutes choses égales par ailleurs : « À diplôme égal, les femmes ont un salaire inférieur de [x] % à celui des hommes » (on neutralise l’effet du diplôme).',
  ],
  exemple: {
    enonce: 'Dans une ville, les mois où l’on vend le plus de glaces sont aussi ceux où il y a le plus de noyades (données fictives). Les glaces causent-elles les noyades ?',
    resolution: [
      'Les deux variables sont corrélées positivement : elles augmentent ensemble.',
      'Il n’y a pas de mécanisme plausible par lequel manger une glace provoquerait une noyade.',
      'Une variable cachée explique les deux : la chaleur, qui augmente à la fois la consommation de glaces et la baignade. La corrélation n’est pas une causalité.',
    ],
  },
  erreurFrequente: [
    'Conclure à une causalité à partir d’une simple corrélation.',
    'Oublier la causalité inverse (c’est peut-être Y qui agit sur X).',
    'Comparer deux groupes qui diffèrent sur plusieurs variables à la fois sans raisonner « toutes choses égales par ailleurs ».',
  ],
  complements: [
    {
      type: 'tableau',
      titre: 'Trois pièges à repérer',
      entetes: ['Piège', 'Exemple'],
      lignes: [
        ['Variable cachée (tierce)', 'Glaces et noyades, toutes deux liées à la chaleur'],
        ['Causalité inverse', 'Les villes qui ont beaucoup de policiers ont plus de délits : la police crée-t-elle la délinquance, ou envoie-t-on plus de policiers là où il y a plus de délits ?'],
        ['Coïncidence', 'Deux courbes qui montent en même temps sur une période courte, sans aucun lien'],
      ],
    },
  ],
  calculateur: 'correlation',
  exercices: [
    {
      type: 'qcm',
      enonce: 'Les élèves qui ont beaucoup de livres chez eux réussissent mieux à l’école. Quelle conclusion est la plus rigoureuse ?',
      choix: [
        'Acheter des livres suffit à faire réussir un enfant.',
        'Il y a une corrélation ; le capital culturel des parents peut expliquer à la fois les livres et la réussite.',
        'Les livres n’ont aucun rapport avec la réussite.',
        'C’est la réussite scolaire qui fait acheter des livres, donc il n’y a pas de lien.',
      ],
      bonne: 1,
      correction: 'Corrélation ne signifie pas causalité : une variable tierce (diplôme et capital culturel des parents) peut expliquer les deux.',
    },
    {
      type: 'qcm',
      enonce: 'Dire « à diplôme égal, les femmes gagnent moins que les hommes » consiste à :',
      choix: [
        'Raisonner toutes choses égales par ailleurs pour le diplôme',
        'Montrer une causalité inverse',
        'Calculer une moyenne pondérée',
        'Ignorer l’effet du diplôme',
      ],
      bonne: 0,
      correction: 'On neutralise l’effet du diplôme pour isoler l’écart lié au sexe.',
    },
    {
      type: 'qcm',
      enonce: 'Les pays où l’on compte le plus de médecins par habitant ont aussi le plus de malades déclarés. Quelle explication est la plus vraisemblable ?',
      choix: [
        'Les médecins rendent les gens malades.',
        'Plus de médecins permet de diagnostiquer et de déclarer plus de maladies (et les pays riches vivent plus vieux).',
        'Il n’y a aucun lien.',
        'Les malades fabriquent des médecins.',
      ],
      bonne: 1,
      correction: 'Il faut chercher le mécanisme : la mesure (diagnostic) et une variable tierce (richesse, vieillissement) expliquent la corrélation.',
    },
    {
      type: 'qcm',
      enonce: 'On observe que les quartiers avec plus de policiers ont plus de délits enregistrés. Quel piège faut-il envisager ?',
      choix: ['Une causalité inverse', 'Une moyenne pondérée', 'Une coïncidence certaine', 'Aucun piège'],
      bonne: 0,
      correction: 'On envoie peut-être plus de policiers là où la délinquance est forte (et plus de policiers enregistrent plus de faits).',
    },
    {
      type: 'qcm',
      enonce: 'Pour établir qu’une variable X est une cause de Y, il faut au minimum :',
      choix: [
        'Observer que X et Y augmentent ensemble',
        'Proposer un mécanisme explicatif et écarter les autres explications possibles',
        'Avoir un coefficient de corrélation égal à 1',
        'Que X précède Y de un an exactement',
      ],
      bonne: 1,
      correction: 'Une corrélation est un indice ; la causalité exige un mécanisme et l’élimination des explications concurrentes.',
    },
  ],
};
