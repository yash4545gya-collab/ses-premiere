import type { FicheMethode } from '../types';

export const dissertation: FicheMethode = {
  id: 'dissertation',
  titre: 'La dissertation',
  sousTitre: 'Épreuve de Terminale (4 heures) · entraînement en Première sur des sujets plus courts (environ 2 heures)',
  intro:
    'La dissertation demande de répondre à une question à partir d’un dossier documentaire et de ses connaissances, en construisant une problématique et un plan organisé. Le programme fixe la construction d’une problématique et d’une dissertation comme compétences de fin de Terminale : en Première, on s’y entraîne progressivement.',
  attendus: [
    'Une introduction complète : accroche, définition des termes, problématique, annonce du plan.',
    'Un plan en deux ou trois parties, équilibré, qui répond à la problématique (souvent : « oui… mais » ou deux facteurs complémentaires).',
    'Des paragraphes argumentés AEI, reliés par des transitions.',
    'L’exploitation des documents et des connaissances personnelles.',
    'Une conclusion qui répond à la question et ouvre éventuellement sur une question proche.',
  ],
  etapes: [
    {
      titre: 'Analyser le sujet',
      texte:
        'Souligne chaque mot important. Définis précisément les notions. Repère le type de sujet : « Dans quelle mesure… ? », « Peut-on dire que… ? » appellent une discussion (oui / mais) ; « Comment… ? », « Pourquoi… ? » appellent une explication (plusieurs causes ou mécanismes).',
    },
    {
      titre: 'Construire la problématique',
      texte:
        'Reformule le sujet sous la forme d’une ou deux questions qui font apparaître l’enjeu ou la tension (deux réponses possibles, un paradoxe). Elle guide tout le devoir.',
    },
    {
      titre: 'Exploiter le dossier et le cours',
      texte:
        'Au brouillon, liste les idées, les mécanismes, les auteurs, les données ; range-les en deux ou trois grands ensembles.',
    },
    {
      titre: 'Bâtir le plan',
      texte:
        'Deux ou trois parties, chacune divisée en deux ou trois sous-parties. Chaque partie répond à la problématique par une affirmation claire (le titre de partie est une phrase, même s’il n’apparaît pas dans la copie).',
    },
    {
      titre: 'Rédiger l’introduction',
      texte:
        'Accroche (fait d’actualité, donnée, citation brève) → définition des termes du sujet → problématique → annonce du plan.',
    },
    {
      titre: 'Rédiger le développement',
      texte:
        'Une phrase d’introduction de partie ; des paragraphes AEI (Affirmation, Explication, Illustration) ; une transition qui fait le bilan de la partie et annonce la suivante.',
    },
    {
      titre: 'Conclure',
      texte:
        'Bilan qui répond nettement à la problématique, puis ouverture facultative (une question proche, pas un nouveau sujet).',
    },
  ],
  modele: {
    sujet: 'Le vote est-il une affaire individuelle ?',
    copie: [
      {
        titre: 'Introduction',
        texte:
          'Le dimanche d’élection, chaque électeur entre seul dans l’isoloir, et le secret du vote garantit qu’il choisit librement. Pourtant, les résultats électoraux varient fortement selon l’âge, le diplôme ou la profession. Le vote désigne l’acte par lequel un citoyen exprime une préférence lors d’une élection ; on parle d’affaire individuelle s’il résulte d’un choix personnel, fondé sur les préférences et les intérêts de chacun. Dès lors, le vote est-il le choix d’un individu libre, ou l’expression d’appartenances collectives ? Nous verrons que le vote est en partie un acte individuel qui dépend des préférences, du contexte et de l’offre électorale (I), mais qu’il reste profondément marqué par les appartenances sociales (II).',
      },
      {
        titre: 'I. Le vote, un acte individuel',
        texte:
          'A. Le modèle de l’électeur rationnel : l’électeur compare les programmes et vote selon les enjeux qui le concernent (vote sur enjeux, vote sanction) ; A. Downs. B. Le rôle du contexte et de l’offre électorale : personnalité des candidats, événements de campagne, vote utile ; la montée de la volatilité électorale (intermittence, changement de préférences) et le déclin de l’identification partisane renforcent cette dimension individuelle.',
      },
      {
        titre: 'Transition',
        texte:
          'Si l’électeur paraît de plus en plus libre de ses choix, ses préférences ne naissent pas de nulle part : elles sont elles-mêmes socialement construites.',
      },
      {
        titre: 'II. Un acte qui reste collectif',
        texte:
          'A. Les appartenances sociales orientent le vote : P. Lazarsfeld (« une personne pense politiquement comme elle est socialement ») ; variables lourdes (religion, patrimoine, catégorie sociale) ; l’identification partisane héritée de la famille (école de Michigan). B. La participation elle-même dépend de facteurs collectifs : degré d’intégration sociale, sentiment de compétence politique et « cens caché » (D. Gaxie) ; l’abstention touche davantage les jeunes, les moins diplômés et les plus précaires.',
      },
      {
        titre: 'Conclusion',
        texte:
          'Le vote est à la fois un acte individuel, qui exprime des préférences en fonction d’un contexte et d’une offre électorale, et un acte collectif, qui traduit des appartenances sociales. La montée de la volatilité ne signifie pas la disparition des déterminants sociaux, mais leur recomposition. On peut alors se demander si l’abstention croissante, elle aussi socialement située, ne fragilise pas la représentativité des élus.',
      },
    ],
    commentaire:
      'L’introduction suit les quatre étapes (accroche, définitions, problématique, annonce). Le plan « oui… mais » répond directement à la question. Le développement est présenté ici sous forme de plan détaillé : dans la copie, chaque sous-partie devient un ou deux paragraphes AEI.',
  },
  grille: [
    'Mon accroche est en lien direct avec le sujet.',
    'J’ai défini tous les termes du sujet.',
    'Ma problématique fait apparaître une tension ou un enjeu.',
    'Mon plan est annoncé et respecté.',
    'Chaque paragraphe suit la logique AEI.',
    'Des transitions relient les parties.',
    'J’ai utilisé les documents et des connaissances personnelles (auteurs, notions).',
    'Ma conclusion répond à la problématique.',
  ],
  parties: [
    {
      titre: 'Le paragraphe AEI',
      blocs: [
        {
          type: 'liste',
          items: [
            '**A — Affirmation** : une phrase qui énonce l’idée du paragraphe et répond à la problématique.',
            '**E — Explication** : le mécanisme qui justifie l’affirmation, en enchaînant les causes et les conséquences, avec les notions du cours.',
            '**I — Illustration** : une donnée précise du dossier (citée), un exemple, une référence à un auteur.',
          ],
        },
        {
          type: 'encadre',
          titre: 'Exemple de paragraphe AEI',
          texte:
            'La participation électorale dépend du degré d’intégration sociale (A). En effet, les individus insérés dans des groupes (emploi stable, couple, associations) sont davantage sollicités et encouragés à voter, et se sentent concernés par les affaires collectives ; à l’inverse, l’isolement et la précarité éloignent du vote (E). Ainsi, dans le document 2 d’un dossier (donnée fictive), la participation des chômeurs est inférieure de 15 points à celle des actifs occupés (I).',
        },
      ],
    },
  ],
};

export const connecteurs: FicheMethode = {
  id: 'connecteurs',
  titre: 'Connecteurs logiques et vocabulaire causal',
  sousTitre: 'Pour enchaîner les idées et rédiger des mécanismes',
  intro:
    'Un mécanisme se rédige comme une chaîne de causes et de conséquences. Les connecteurs logiques montrent au correcteur que tu raisonnes, et pas seulement que tu récites. Varie-les, et choisis-les avec précision : « donc » et « mais » ne sont pas interchangeables.',
  parties: [
    {
      titre: 'Les connecteurs selon leur fonction',
      blocs: [
        {
          type: 'tableau',
          entetes: ['Fonction', 'Connecteurs'],
          lignes: [
            ['Ajouter une idée', 'de plus, en outre, par ailleurs, de même, également'],
            ['Expliquer, justifier', 'en effet, car, puisque, dans la mesure où, c’est pourquoi'],
            ['Exprimer une conséquence', 'donc, par conséquent, ainsi, dès lors, il en résulte que, de sorte que'],
            ['Opposer, nuancer', 'mais, cependant, toutefois, néanmoins, en revanche, pourtant, à l’inverse'],
            ['Concéder', 'certes… mais, bien que, même si'],
            ['Illustrer', 'par exemple, ainsi, comme le montre le document 2, c’est le cas de'],
            ['Conclure', 'en définitive, finalement, en somme, au total'],
          ],
        },
      ],
    },
    {
      titre: 'Le vocabulaire causal',
      blocs: [
        {
          type: 'tableau',
          entetes: ['Pour dire que A cause B', 'Pour dire que B résulte de A'],
          lignes: [
            ['A entraîne B', 'B résulte de A'],
            ['A provoque, engendre, suscite B', 'B découle de A'],
            ['A se traduit par B', 'B s’explique par A'],
            ['A favorise / freine B', 'B est lié à A'],
            ['A conduit à B', 'B est la conséquence de A'],
            ['A contribue à B (cause parmi d’autres)', 'B tient en partie à A'],
          ],
        },
        {
          type: 'encadre',
          titre: 'Exemple de mécanisme rédigé',
          texte:
            'La hausse des taux directeurs se traduit par une hausse des taux des crédits. Les ménages et les entreprises empruntent alors moins, ce qui freine la consommation et l’investissement. Il en résulte un ralentissement de la demande, qui contribue à faire refluer l’inflation.',
        },
        {
          type: 'texte',
          texte:
            'Attention aux verbes trop forts : « provoque » ou « détermine » affirment une causalité totale ; « contribue à », « favorise » ou « s’explique en partie par » conviennent mieux quand plusieurs facteurs jouent.',
        },
      ],
    },
  ],
};
