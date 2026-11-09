import type { Chapitre } from '../types';

/** Taux calculés sur données fictives, vérifiés dans scripts/verifier-calculs.mjs */
export const vote: Chapitre = {
  id: 'vote',
  titre: 'Voter : une affaire individuelle ou collective ?',
  titreCourt: 'Le vote',
  domaine: 'Sociologie et science politique',
  objectifs: [
    'Interpréter des taux d’inscription sur les listes électorales, de participation et d’abstention.',
    'Comprendre que la participation dépend de facteurs inégalement partagés (intégration sociale, intérêt pour la politique, sentiment de compétence politique) et de variables contextuelles (enjeux, type d’élection).',
    'Comprendre que le vote est à la fois un acte individuel (préférences, contexte, offre électorale) et un acte collectif (appartenances sociales).',
    'Comprendre les formes de la volatilité électorale (intermittence, changement de préférences) et ce qu’elle peut refléter (recomposition des variables sociales, déclin de l’identification partisane, poids du contexte).',
  ],

  essentiel: {
    problematique:
      'Le vote est un geste solitaire, dans l’isoloir. Pourtant, qui vote et pour qui l’on vote dépend fortement du milieu social. Le vote est-il le choix d’un individu libre ou l’expression d’appartenances collectives ?',
    parties: [
      {
        titre: 'Mesurer la participation électorale',
        blocs: [
          {
            type: 'texte',
            texte:
              'Pour voter en France, il faut avoir la nationalité française (ou celle d’un pays de l’Union européenne pour les élections municipales et européennes), être majeur, jouir de ses droits civiques et être **inscrit sur les listes électorales**. L’inscription est automatique à 18 ans pour les jeunes recensés, mais elle doit être mise à jour en cas de déménagement : de nombreux électeurs sont **mal inscrits** (inscrits dans une commune où ils ne vivent plus), ce qui les éloigne du vote, et d’autres sont **non inscrits**.',
          },
          { type: 'schema', id: 'participation' },
          {
            type: 'tableau',
            titre: 'Les principaux indicateurs (exemple sur données fictives)',
            entetes: ['Indicateur', 'Calcul', 'Exemple'],
            lignes: [
              ['Taux d’inscription', 'Inscrits / population en âge et en droit de voter × 100', '1 000 / 1 100 × 100 ≈ 90,9 %'],
              ['Taux de participation', 'Votants / inscrits × 100', '720 / 1 000 × 100 = 72 %'],
              ['Taux d’abstention', 'Abstentionnistes / inscrits × 100 (= 100 − participation)', '280 / 1 000 × 100 = 28 %'],
              ['Votes blancs et nuls', 'Blancs et nuls / votants × 100', '30 / 720 × 100 ≈ 4,2 %'],
              ['Suffrages exprimés', 'Votants − blancs et nuls', '720 − 30 = 690'],
            ],
            source: 'Données fictives',
          },
          {
            type: 'texte',
            texte:
              'Attention : le taux d’abstention officiel est calculé **par rapport aux inscrits**. Si l’on rapporte les non-votants à l’ensemble des personnes en âge de voter (non-inscrits compris), la « non-participation » est plus élevée : dans l’exemple, $(1\\,100 - 720) / 1\\,100 \\approx 34{,}5$ % au lieu de 28 %. La participation varie fortement selon le **type d’élection** : elle est en général plus élevée à l’élection présidentielle qu’aux élections européennes ou législatives partielles.',
          },
          {
            type: 'texte',
            texte:
              'Il faut aussi distinguer l’**abstention systématique** (ne jamais voter) de l’**abstention intermittente** (voter à certains scrutins seulement), qui est aujourd’hui la forme la plus fréquente. Une partie de l’abstention est « **hors du jeu** » politique (désintérêt, faible intégration) ; une autre est « **dans le jeu** » : des citoyens intéressés par la politique s’abstiennent pour exprimer un mécontentement ou parce que l’enjeu leur paraît faible (A. Muxel, J. Jaffré).',
          },
        ],
      },
      {
        titre: 'Une participation inégalement répartie',
        blocs: [
          {
            type: 'texte',
            texte:
              'La participation électorale est liée à des **facteurs inégalement partagés** dans la population :',
          },
          {
            type: 'liste',
            items: [
              '**Le degré d’intégration sociale** : être en emploi stable, vivre en couple, être propriétaire, appartenir à des associations, être installé depuis longtemps dans sa commune favorise la participation. Les jeunes, les chômeurs et les personnes isolées votent moins.',
              '**L’intérêt pour la politique** : il augmente avec le niveau de diplôme et dépend de la socialisation politique (familles où l’on parle politique).',
              '**Le sentiment de compétence politique** : se sentir capable de comprendre et de juger les enjeux. D. Gaxie montre que ce sentiment est inégal selon le diplôme et le milieu social, ce qui crée un « **cens caché** » : bien que le suffrage soit universel, une partie de la population s’exclut d’elle-même.',
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Le cens caché',
            etapes: [
              'Faible niveau de diplôme, faible socialisation politique',
              'Faible sentiment de compétence politique (« la politique, ce n’est pas pour moi »)',
              'Désintérêt et auto-exclusion du vote',
              'Les catégories populaires sont sous-représentées parmi les votants',
            ],
          },
          {
            type: 'texte',
            texte:
              'Des **variables contextuelles** jouent aussi : la **perception des enjeux** de l’élection (une présidentielle très disputée mobilise davantage), le **type d’élection** (présidentielle plus mobilisatrice que les européennes), l’offre politique (présence d’un candidat proche de ses idées), le calendrier (vacances, nombre de scrutins). C’est pourquoi un même individu peut voter à une élection et s’abstenir à la suivante.',
          },
        ],
      },
      {
        titre: 'Le vote, acte individuel et acte collectif',
        blocs: [
          {
            type: 'texte',
            texte:
              'Le vote est un **acte collectif** au sens où il exprime des **appartenances sociales**. Dès 1944, P. Lazarsfeld (école de Columbia) montre qu’« une personne pense politiquement comme elle est socialement » : le milieu social, la religion et le lieu de résidence prédisent largement le vote. L’école de Michigan (A. Campbell et al., 1960) insiste sur l’**identification partisane**, attachement durable à un parti transmis par la socialisation familiale. En France, la **pratique religieuse catholique** et l’**appartenance au monde ouvrier** ont longtemps été des « variables lourdes » du vote, la première orientant à droite, la seconde à gauche.',
          },
          {
            type: 'texte',
            texte:
              'Le vote est aussi un **acte individuel** : l’électeur exprime des **préférences** en fonction d’un **contexte** (situation économique, événements de campagne) et de l’**offre électorale** (candidats, programmes, alliances). Le modèle de l’**électeur rationnel** (ou électeur stratège) le présente comme un individu informé, qui compare les programmes et vote selon les **enjeux** qui le concernent (emploi, pouvoir d’achat, sécurité, environnement), ou pour sanctionner le gouvernement sortant (vote sanction). Il peut aussi voter « utile ».',
          },
          {
            type: 'tableau',
            titre: 'Trois modèles explicatifs du vote',
            entetes: ['Modèle', 'Ce qui explique le vote', 'Le vote est…'],
            lignes: [
              ['Écologique et sociologique (Columbia, 1944)', 'Appartenances sociales : milieu, religion, territoire', 'Collectif'],
              ['Psychopolitique (Michigan, 1960)', 'Identification partisane héritée de la famille', 'Collectif (par la socialisation)'],
              ['Électeur rationnel / stratège', 'Enjeux, bilan, programmes, offre électorale', 'Individuel'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Ces approches ne s’excluent pas : les préférences individuelles sont elles-mêmes socialement construites, et l’offre électorale et le contexte modifient la façon dont les appartenances se traduisent en vote.',
          },
          {
            type: 'texte',
            texte:
              'La **volatilité électorale** désigne les changements de comportement électoral d’un scrutin à l’autre. Elle prend plusieurs formes : l’**intermittence du vote** (alterner vote et abstention) et le **changement de préférences** (voter pour un parti ou un camp différent). Elle peut refléter :',
          },
          {
            type: 'liste',
            items: [
              'un **affaiblissement ou une recomposition du poids des variables sociales** : recul de la pratique religieuse, transformation du monde ouvrier, montée de nouvelles divisions (selon le diplôme, entre métropoles et territoires périphériques) ;',
              'un **déclin de l’identification politique** : moins d’électeurs se sentent durablement proches d’un parti, et le **clivage gauche/droite** structure moins les choix ;',
              'un **renforcement du poids des variables contextuelles** : enjeux de la campagne, personnalité des candidats, offre électorale renouvelée.',
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi la volatilité augmente',
            etapes: [
              'Affaiblissement des appartenances (religion, monde ouvrier) et de l’identification partisane',
              'Électeurs moins fidèles à un parti ou à un camp',
              'Poids accru du contexte, des enjeux et de l’offre électorale',
              'Changements de vote et intermittence d’un scrutin à l’autre',
            ],
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Inscription sur les listes électorales',
      definition: 'Formalité nécessaire pour pouvoir voter ; elle est automatique à 18 ans pour les jeunes recensés mais doit être mise à jour en cas de déménagement.',
      exemple: 'Un étudiant qui s’inscrit dans sa ville d’études pour y voter.',
    },
    {
      terme: 'Taux d’inscription',
      definition: 'Part des personnes en âge et en droit de voter qui sont inscrites sur les listes électorales, en pourcentage.',
      exemple: '1 000 inscrits pour 1 100 personnes en droit de voter : environ 90,9 %.',
    },
    {
      terme: 'Mal-inscription',
      definition: 'Situation d’un électeur inscrit dans un bureau de vote qui ne correspond plus à son lieu de résidence, ce qui rend le vote plus difficile et favorise l’abstention.',
      exemple: 'Une jeune salariée encore inscrite dans la commune de ses parents, à 500 km.',
    },
    {
      terme: 'Taux de participation',
      definition: 'Part des inscrits qui ont voté lors d’un scrutin : votants / inscrits × 100.',
      exemple: '720 votants pour 1 000 inscrits : 72 %.',
    },
    {
      terme: 'Abstention',
      definition: 'Fait, pour un électeur inscrit, de ne pas participer à un scrutin ; le taux d’abstention rapporte les abstentionnistes aux inscrits.',
      exemple: '280 abstentionnistes pour 1 000 inscrits : 28 %.',
    },
    {
      terme: 'Abstention intermittente',
      definition: 'Comportement des électeurs qui votent à certains scrutins et s’abstiennent à d’autres ; c’est la forme d’abstention la plus répandue.',
      exemple: 'Voter à la présidentielle mais pas aux européennes.',
    },
    {
      terme: 'Suffrages exprimés',
      definition: 'Bulletins valables pris en compte pour calculer les résultats des candidats : votants moins les votes blancs et nuls.',
      exemple: '720 votants dont 30 blancs et nuls : 690 suffrages exprimés.',
    },
    {
      terme: 'Vote blanc',
      definition: 'Bulletin vide (ou enveloppe vide) exprimant le refus de choisir entre les candidats ; il est décompté séparément depuis 2014 mais n’est pas un suffrage exprimé.',
      exemple: 'Un électeur qui se déplace mais ne se reconnaît dans aucun candidat.',
    },
    {
      terme: 'Intégration sociale',
      definition: 'Degré d’insertion d’un individu dans des groupes sociaux (famille, travail, associations, quartier), qui lui assure des liens et favorise sa participation à la vie collective.',
      exemple: 'Un retraité très investi dans les associations de sa commune vote presque toujours.',
    },
    {
      terme: 'Sentiment de compétence politique',
      definition: 'Sentiment d’être capable de comprendre les enjeux politiques et d’avoir une opinion légitime ; il dépend fortement du niveau de diplôme et du milieu social.',
      exemple: '« Je n’y connais rien, ce n’est pas pour moi » traduit un faible sentiment de compétence.',
    },
    {
      terme: 'Cens caché',
      definition: 'Selon D. Gaxie, mécanisme par lequel, malgré le suffrage universel, les catégories les moins dotées en capital culturel s’excluent d’elles-mêmes de la participation politique.',
      exemple: 'La plus forte abstention des non-diplômés.',
    },
    {
      terme: 'Variables lourdes du vote',
      definition: 'Caractéristiques sociales durables (milieu social, religion, patrimoine) qui orientent fortement et de manière stable le vote.',
      exemple: 'La pratique religieuse catholique a longtemps orienté le vote à droite en France.',
    },
    {
      terme: 'Identification partisane',
      definition: 'Attachement affectif durable d’un électeur à un parti politique, souvent hérité de la famille, qui oriente ses votes.',
      exemple: 'Un électeur qui vote pour le même parti depuis 30 ans, comme ses parents.',
    },
    {
      terme: 'Clivage gauche/droite',
      definition: 'Opposition politique structurante entre deux camps aux valeurs et aux programmes différents (rapport à l’égalité, au rôle de l’État, à l’ordre), qui organise l’offre et les choix électoraux.',
      exemple: 'Se situer sur une échelle de 0 (très à gauche) à 10 (très à droite).',
    },
    {
      terme: 'Offre électorale (offre politique)',
      definition: 'Ensemble des candidats, des partis, des programmes et des alliances proposés aux électeurs lors d’un scrutin.',
      exemple: 'L’apparition d’un nouveau parti modifie l’offre électorale.',
    },
    {
      terme: 'Vote sur enjeux',
      definition: 'Vote déterminé par la position des candidats sur les questions jugées importantes par l’électeur, plutôt que par une fidélité partisane.',
      exemple: 'Voter pour le candidat dont le programme environnemental paraît le plus crédible.',
    },
    {
      terme: 'Électeur rationnel (électeur stratège)',
      definition: 'Modèle qui représente l’électeur comme un individu informé, qui compare l’offre électorale et vote en fonction de ses intérêts et des enjeux.',
      exemple: 'Un électeur qui change de camp pour sanctionner le bilan économique du gouvernement.',
    },
    {
      terme: 'Volatilité électorale',
      definition: 'Changement de comportement électoral d’un scrutin à l’autre, qu’il s’agisse de passer du vote à l’abstention (intermittence) ou de voter pour un autre parti ou camp.',
      exemple: 'Un électeur qui vote à gauche en 2017 et pour un autre camp en 2022.',
    },
  ],

  auteurs: [
    {
      nom: 'Paul Lazarsfeld',
      dates: '1901-1976',
      idee: '« Une personne pense politiquement comme elle est socialement » : les caractéristiques sociales expliquent le vote (école de Columbia).',
      oeuvre: 'The People’s Choice (1944)',
    },
    {
      nom: 'Angus Campbell et ses collègues',
      idee: 'L’identification partisane, transmise par la famille, explique la stabilité du vote (école de Michigan).',
      oeuvre: 'The American Voter (1960)',
    },
    {
      nom: 'Anthony Downs',
      dates: '1930-2021',
      idee: 'L’électeur rationnel compare les coûts et les avantages de son vote et choisit le parti qui sert le mieux ses intérêts.',
      oeuvre: 'An Economic Theory of Democracy (1957)',
    },
    {
      nom: 'Daniel Gaxie',
      idee: 'Le « cens caché » : le sentiment de compétence politique, inégal selon le diplôme, exclut de fait une partie des citoyens.',
      oeuvre: 'Le Cens caché (1978)',
    },
    {
      nom: 'Céline Braconnier et Jean-Yves Dormagen',
      idee: 'L’abstention dans les quartiers populaires est surtout intermittente et liée à la désaffiliation sociale et à la mal-inscription.',
      oeuvre: 'La Démocratie de l’abstention (2007)',
    },
    {
      nom: 'Anne Muxel',
      idee: 'Distingue l’abstention « hors du jeu » (désintérêt) et l’abstention « dans le jeu » (choix politique) ; insiste sur l’intermittence du vote.',
    },
  ],

  schemas: [
    {
      id: 'participation',
      titre: 'De la population en âge de voter aux suffrages exprimés',
      legende: 'Données fictives. Sur 1 100 personnes en droit de voter, 1 000 sont inscrites, 720 votent et 690 expriment un suffrage valable. Taux d’inscription ≈ 90,9 % ; participation = 72 % des inscrits ; abstention = 28 % des inscrits.',
    },
  ],

  pieges: [
    {
      erreur: 'Calculer le taux de participation par rapport à toute la population.',
      correction: 'Il se calcule par rapport aux **inscrits** : votants / inscrits × 100.',
    },
    {
      erreur: 'Confondre votants et suffrages exprimés.',
      correction: 'Les **suffrages exprimés** excluent les votes **blancs et nuls** : exprimés = votants − blancs et nuls.',
    },
    {
      erreur: '« Les abstentionnistes ne s’intéressent pas à la politique. »',
      correction: 'Une partie de l’abstention est « **dans le jeu** » (protestation, enjeu jugé faible). Et l’abstention est surtout **intermittente**.',
    },
    {
      erreur: 'Présenter le vote comme purement individuel ou purement collectif.',
      correction: 'Le programme demande de montrer qu’il est **à la fois** individuel (préférences, contexte, offre) et collectif (appartenances sociales).',
    },
    {
      erreur: '« La volatilité prouve que les variables sociales n’expliquent plus rien. »',
      correction: 'Elle traduit un **affaiblissement ou une recomposition** de ces variables (diplôme, territoire) et un poids accru du contexte, pas leur disparition.',
    },
    {
      erreur: 'Oublier la mal-inscription quand on analyse l’abstention.',
      correction: 'Une part de la non-participation vient de la **non-inscription** ou de la **mal-inscription**, qui ne figurent pas dans le taux d’abstention officiel.',
    },
  ],

  synthese: {
    idees: [
      'Taux d’inscription, de participation (votants / inscrits), d’abstention (abstentionnistes / inscrits) ; suffrages exprimés = votants − blancs et nuls.',
      'Non-inscription et mal-inscription éloignent du vote ; l’abstention est surtout intermittente.',
      'La participation dépend de l’intégration sociale, de l’intérêt pour la politique et du sentiment de compétence politique (cens caché, Gaxie).',
      'Variables contextuelles : enjeux perçus, type d’élection, offre politique.',
      'Vote collectif : appartenances sociales (Lazarsfeld), identification partisane (Michigan), variables lourdes (religion, classe).',
      'Vote individuel : préférences, enjeux, contexte, offre électorale (électeur rationnel, vote sanction, vote utile).',
      'Volatilité : intermittence et changement de préférences ; reflète la recomposition des variables sociales, le déclin de l’identification partisane et du clivage gauche/droite, le poids du contexte.',
    ],
    formules: [
      { tex: '\\text{Participation} = \\frac{\\text{Votants}}{\\text{Inscrits}} \\times 100' },
      { tex: '\\text{Abstention} = \\frac{\\text{Inscrits} - \\text{Votants}}{\\text{Inscrits}} \\times 100' },
      { tex: '\\text{Exprimés} = \\text{Votants} - \\text{Blancs et nuls}' },
    ],
    mecanismes: [
      ['Faible diplôme', 'faible sentiment de compétence', 'auto-exclusion', 'cens caché'],
      ['Déclin de l’identification partisane', 'poids du contexte', 'volatilité électorale'],
    ],
  },

  quiz: [
    {
      question: '1 000 inscrits, 720 votants. Le taux de participation est de :',
      choix: ['72 %', '28 %', '65,5 %', '138,9 %'],
      bonne: 0,
      explication: '720 / 1 000 × 100 = 72 %.',
    },
    {
      question: 'Dans le même scrutin, le taux d’abstention est de :',
      choix: ['72 %', '28 %', '34,5 %', '4,2 %'],
      bonne: 1,
      explication: '(1 000 − 720) / 1 000 × 100 = 28 %.',
    },
    {
      question: '720 votants, dont 30 votes blancs et nuls. Le nombre de suffrages exprimés est de :',
      choix: ['750', '690', '720', '30'],
      bonne: 1,
      explication: 'Exprimés = votants − blancs et nuls = 690.',
    },
    {
      question: '1 100 personnes en droit de voter, 1 000 inscrites. Le taux d’inscription est d’environ :',
      choix: ['110 %', '90,9 %', '72 %', '9,1 %'],
      bonne: 1,
      explication: '1 000 / 1 100 × 100 ≈ 90,9 %.',
    },
    {
      question: 'La mal-inscription désigne :',
      choix: [
        'Le fait de voter deux fois',
        'Le fait d’être inscrit dans un bureau de vote qui ne correspond plus à son domicile',
        'Le vote blanc',
        'Une erreur de l’institut de sondage',
      ],
      bonne: 1,
      explication: 'Elle concerne notamment les jeunes et les personnes qui déménagent, et favorise l’abstention.',
    },
    {
      question: 'Quelle forme d’abstention est la plus fréquente ?',
      choix: ['Systématique', 'Intermittente', 'Obligatoire', 'Aucune'],
      bonne: 1,
      explication: 'La plupart des abstentionnistes votent à certains scrutins et pas à d’autres.',
    },
    {
      question: 'Lequel de ces facteurs favorise la participation électorale ?',
      choix: ['Le chômage', 'L’isolement', 'Une forte intégration sociale', 'La mal-inscription'],
      bonne: 2,
      explication: 'Emploi stable, vie de couple, associations, ancienneté dans la commune vont de pair avec une participation plus élevée.',
    },
    {
      question: 'Le « cens caché » de D. Gaxie désigne :',
      choix: [
        'Un impôt pour voter',
        'L’auto-exclusion des moins diplômés, qui se sentent peu compétents en politique',
        'Le vote secret',
        'La fraude électorale',
      ],
      bonne: 1,
      explication: 'Le suffrage est universel en droit, mais pas tout à fait en fait.',
    },
    {
      question: 'Quelle est une variable contextuelle de la participation ?',
      choix: ['Le niveau de diplôme', 'Le type d’élection', 'L’âge', 'La PCS'],
      bonne: 1,
      explication: 'Une présidentielle mobilise en général plus qu’une élection européenne.',
    },
    {
      question: '« Une personne pense politiquement comme elle est socialement » (1944). Cette analyse :',
      choix: [
        'Présente le vote comme un acte collectif',
        'Présente l’électeur comme un stratège',
        'Nie l’influence du milieu social',
        'Concerne uniquement l’abstention',
      ],
      bonne: 0,
      explication: 'P. Lazarsfeld montre que les appartenances sociales prédisent le vote.',
    },
    {
      question: 'L’identification partisane est :',
      choix: [
        'Un attachement durable à un parti, souvent hérité de la famille',
        'La carte d’adhérent d’un parti',
        'Le vote utile',
        'Le refus de voter',
      ],
      bonne: 0,
      explication: 'Notion centrale de l’école de Michigan (1960).',
    },
    {
      question: 'Un électeur qui choisit le candidat dont le programme sur l’emploi lui paraît le meilleur illustre :',
      choix: ['Le vote de classe', 'Le vote sur enjeux', 'L’identification partisane', 'Le cens caché'],
      bonne: 1,
      explication: 'Il vote en fonction d’un enjeu, comme le suppose le modèle de l’électeur rationnel.',
    },
    {
      question: 'La volatilité électorale comprend :',
      choix: [
        'Seulement les changements de parti',
        'L’intermittence du vote et les changements de préférences',
        'Seulement le vote blanc',
        'La fraude électorale',
      ],
      bonne: 1,
      explication: 'Alterner vote et abstention est aussi une forme de volatilité.',
    },
    {
      question: 'La hausse de la volatilité peut refléter :',
      choix: [
        'Un renforcement de l’identification partisane',
        'Un déclin de l’identification partisane et un poids accru du contexte',
        'Une stabilité des variables sociales',
        'Une baisse du nombre de candidats',
      ],
      bonne: 1,
      explication: 'Moins fidèles à un parti, les électeurs réagissent davantage aux enjeux et à l’offre de chaque scrutin.',
    },
    {
      question: 'Le vote est à la fois individuel et collectif parce que :',
      choix: [
        'On vote parfois en famille dans l’isoloir',
        'Il exprime des préférences personnelles, elles-mêmes marquées par des appartenances sociales',
        'Les résultats sont publiés collectivement',
        'Le vote est obligatoire',
      ],
      bonne: 1,
      explication: 'Choix d’un individu dans un contexte donné, il reste fortement structuré par le milieu social.',
    },
  ],
};
