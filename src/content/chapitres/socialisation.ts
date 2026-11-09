import type { Chapitre } from '../types';

export const socialisation: Chapitre = {
  id: 'socialisation',
  titre: 'Comment la socialisation contribue-t-elle à expliquer les différences de comportement des individus ?',
  titreCourt: 'Socialisation',
  domaine: 'Sociologie et science politique',
  objectifs: [
    'Comprendre comment les individus intériorisent des façons d’agir, de penser et d’anticiper l’avenir socialement situées, à l’origine de différences de comportements, de préférences et d’aspirations.',
    'Comprendre comment la diversité des configurations familiales modifie les conditions de la socialisation des enfants et des adolescents.',
    'Comprendre qu’il existe des socialisations secondaires (professionnelle, conjugale, politique) à la suite de la socialisation primaire.',
    'Comprendre que la pluralité des influences socialisatrices peut être à l’origine de trajectoires individuelles improbables.',
  ],

  essentiel: {
    problematique:
      'Pourquoi les filles et les garçons, les enfants de cadres et d’ouvriers n’ont-ils pas, en moyenne, les mêmes goûts, les mêmes pratiques ni les mêmes ambitions ? Et pourquoi certains individus échappent-ils pourtant au destin le plus probable de leur milieu ?',
    parties: [
      {
        titre: 'La socialisation : intérioriser des façons d’agir et de penser socialement situées',
        blocs: [
          {
            type: 'texte',
            texte:
              'La **socialisation** est le processus par lequel les individus apprennent et **intériorisent** les **normes** (règles de conduite) et les **valeurs** (idéaux) de la société ou des groupes auxquels ils appartiennent, ainsi que des rôles sociaux. Elle construit leur identité et rend possible la vie en société. Elle se fait de façon **explicite** (interdictions, conseils, cours) mais surtout **implicite** : par imitation, par l’observation des autres et par l’expérience répétée de situations.',
          },
          {
            type: 'texte',
            texte:
              'Les **instances de socialisation** sont les groupes et les institutions qui transmettent ces normes : la famille, l’école, le groupe de pairs, les médias et les réseaux sociaux numériques, puis le monde du travail, le couple, les associations, les partis ou les syndicats.',
          },
          { type: 'schema', id: 'instances-socialisation' },
          {
            type: 'texte',
            texte:
              'Ces apprentissages sont **socialement situés** : ils varient selon le milieu social et le sexe de l’enfant. Ils expliquent des différences de **comportements**, de **préférences** et d’**aspirations**, y compris la manière d’**anticiper l’avenir** (se projeter dans des études longues, dans un métier donné).',
          },
          {
            type: 'mecanisme',
            titre: 'Socialisation différenciée selon le milieu social',
            etapes: [
              'Les familles disposent de ressources inégales (diplômes, revenus, culture)',
              'Elles transmettent des pratiques différentes (lecture, rapport à l’école, loisirs, langage)',
              'Les enfants intériorisent des goûts et des manières d’être différents (habitus)',
              'Leurs aspirations scolaires et professionnelles diffèrent, ce qui contribue à reproduire les positions sociales',
            ],
          },
          {
            type: 'texte',
            texte:
              'P. Bourdieu appelle **habitus** cet ensemble de dispositions durables (manières de penser, de sentir, d’agir) acquises au cours de la socialisation et qui orientent les pratiques sans qu’on en ait conscience. Les familles dotées en **capital culturel** transmettent un rapport à la culture et au langage proche de celui qu’attend l’école, ce qui favorise la réussite scolaire de leurs enfants.',
          },
          {
            type: 'texte',
            texte:
              'La socialisation est aussi **différenciée selon le genre**. Dès la petite enfance, jouets, vêtements, encouragements et attentes diffèrent : on valorise davantage l’autonomie, la compétition et l’activité physique chez les garçons, l’apparence, le soin des autres et le calme chez les filles. Ces apprentissages contribuent à expliquer des écarts dans les choix d’orientation (filières scientifiques et techniques, filières sanitaires et sociales), les pratiques sportives ou la répartition des tâches domestiques.',
          },
          {
            type: 'mecanisme',
            titre: 'Socialisation différenciée selon le genre',
            etapes: [
              'Attentes et stéréotypes de genre des parents, de l’école, des médias',
              'Jouets, activités et encouragements différents',
              'Intériorisation de goûts et de compétences « féminins » ou « masculins »',
              'Choix d’orientation et de métiers différenciés',
            ],
          },
          {
            type: 'texte',
            texte:
              'La **diversité des configurations familiales** modifie aussi les conditions de la socialisation. Les familles monoparentales, recomposées, homoparentales, ou les familles où les deux parents travaillent à temps plein, n’offrent pas les mêmes contextes : temps passé avec chaque parent, circulation entre deux foyers aux règles différentes, rôle accru des grands-parents ou des modes de garde, place des frères et sœurs. L’enfant peut ainsi être exposé à des modèles plus variés.',
          },
        ],
      },
      {
        titre: 'De la socialisation primaire aux socialisations secondaires',
        blocs: [
          {
            type: 'texte',
            texte:
              'P. Berger et T. Luckmann distinguent la **socialisation primaire**, qui se déroule pendant l’enfance (surtout dans la famille et à l’école) et forme la base de la personnalité, et la **socialisation secondaire**, qui se poursuit tout au long de la vie adulte et permet d’intégrer de nouveaux groupes. La socialisation primaire est la plus durable, mais elle n’est pas définitive.',
          },
          {
            type: 'tableau',
            titre: 'Trois socialisations secondaires étudiées au programme',
            entetes: ['Socialisation', 'Ce qu’on apprend', 'Exemple'],
            lignes: [
              ['Professionnelle', 'Normes, savoir-faire, langage et identité d’un métier', 'Un interne en médecine apprend la distance émotionnelle face à la maladie'],
              ['Conjugale', 'Ajustement des habitudes et des goûts au sein du couple ; répartition des rôles', 'Un couple se construit des habitudes alimentaires et de loisirs communes'],
              ['Politique', 'Intérêt pour la politique, opinions, appartenance partisane, pratiques militantes', 'L’engagement dans un syndicat transforme le rapport à la politique'],
            ],
          },
          {
            type: 'texte',
            texte:
              'La socialisation secondaire peut **prolonger** la socialisation primaire (une fille d’enseignants devient enseignante), la **compléter** ou entrer en **tension** avec elle (un enfant d’ouvriers qui devient cadre doit apprendre de nouveaux codes). On parle de **resocialisation** lorsque les normes acquises sont profondément transformées (entrée dans une institution « totale » comme l’armée, une conversion religieuse).',
          },
          {
            type: 'texte',
            texte:
              'La **socialisation politique** commence dans la famille (transmission de préférences, de l’intérêt ou du désintérêt pour la politique) mais se poursuit à l’âge adulte au gré des expériences professionnelles, conjugales, associatives et des événements historiques vécus (effets de génération).',
          },
        ],
      },
      {
        titre: 'La pluralité des influences et les trajectoires improbables',
        blocs: [
          {
            type: 'texte',
            texte:
              'Les individus ne sont pas socialisés par une seule instance cohérente : dans les sociétés contemporaines, ils sont exposés à des **influences multiples**, parfois **contradictoires** (une famille et des pairs aux valeurs opposées, des parents de milieux différents, un enseignant marquant). B. Lahire parle d’« homme pluriel » : chaque individu porte des dispositions variées, qui s’activent selon les contextes.',
          },
          {
            type: 'texte',
            texte:
              'Cette **pluralité des influences socialisatrices** permet de comprendre des **trajectoires improbables**, c’est-à-dire des parcours statistiquement rares compte tenu de l’origine sociale : réussite scolaire en milieu populaire, choix d’une filière ou d’un métier atypique pour son sexe. Ces trajectoires ne relèvent pas du hasard ou du seul « mérite » : elles s’expliquent par des socialisations particulières (une mère très investie dans la scolarité, un grand frère étudiant, une rencontre, un club sportif).',
          },
          {
            type: 'mecanisme',
            titre: 'Comment naît une trajectoire improbable',
            etapes: [
              'Un individu est exposé à plusieurs instances de socialisation',
              'L’une d’elles transmet des dispositions inhabituelles dans son milieu (goût de la lecture, ambition scolaire)',
              'Ces dispositions sont activées dans un contexte favorable (école, rencontre)',
              'Il suit un parcours statistiquement rare pour son origine sociale ou son sexe',
            ],
          },
          {
            type: 'encadre',
            titre: 'Déterminisme ou liberté ?',
            texte:
              'La socialisation explique des **régularités statistiques**, pas des destins individuels. Pour É. Durkheim et P. Bourdieu, elle exerce une forte contrainte sur les individus ; d’autres sociologues insistent sur la capacité des individus à réinterpréter ce qu’ils reçoivent (socialisation comme processus interactif). Les deux approches se complètent.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Socialisation',
      definition: 'Processus par lequel les individus apprennent et intériorisent les normes, les valeurs et les rôles de la société et des groupes auxquels ils appartiennent, ce qui construit leur identité.',
      exemple: 'Un enfant apprend à dire bonjour, à attendre son tour, à se tenir à table.',
    },
    {
      terme: 'Norme sociale',
      definition: 'Règle de conduite, explicite ou implicite, qui indique comment se comporter dans une situation donnée ; son non-respect expose à une sanction.',
      exemple: 'Ne pas couper la parole, être à l’heure à un rendez-vous.',
    },
    {
      terme: 'Valeur',
      definition: 'Idéal collectif, manière d’être ou d’agir jugée souhaitable par une société ou un groupe, qui oriente les normes.',
      exemple: 'La politesse est une norme qui traduit la valeur de respect d’autrui.',
    },
    {
      terme: 'Intériorisation',
      definition: 'Processus par lequel les normes et les valeurs transmises deviennent propres à l’individu, qui les applique sans y penser et les considère comme naturelles.',
      exemple: 'Un adulte qui trie ses déchets sans y réfléchir a intériorisé cette norme.',
    },
    {
      terme: 'Instance de socialisation',
      definition: 'Groupe ou institution qui participe à la socialisation des individus.',
      exemple: 'La famille, l’école, le groupe de pairs, les médias, l’entreprise.',
    },
    {
      terme: 'Socialisation primaire',
      definition: 'Socialisation qui se déroule pendant l’enfance, principalement dans la famille et à l’école ; elle forme les bases durables de la personnalité.',
      exemple: 'Apprendre à parler, à lire, à se comporter avec les adultes.',
    },
    {
      terme: 'Socialisation secondaire',
      definition: 'Socialisation qui se poursuit à l’âge adulte et permet à l’individu de s’intégrer dans de nouveaux groupes (professionnel, conjugal, politique) ; elle prolonge, complète ou transforme la socialisation primaire.',
      exemple: 'Un jeune pompier apprend les règles, le vocabulaire et l’esprit de corps de sa caserne.',
    },
    {
      terme: 'Socialisation professionnelle',
      definition: 'Socialisation secondaire par laquelle un individu acquiert les savoir-faire, les normes et l’identité propres à un métier.',
      exemple: 'Un apprenti cuisinier apprend la hiérarchie et le rythme d’une brigade.',
    },
    {
      terme: 'Socialisation conjugale',
      definition: 'Socialisation secondaire qui résulte de la vie en couple : les partenaires ajustent leurs habitudes, leurs goûts et leurs rôles.',
      exemple: 'Un conjoint adopte les pratiques culturelles ou alimentaires de l’autre.',
    },
    {
      terme: 'Socialisation politique',
      definition: 'Processus par lequel l’individu acquiert des opinions, des valeurs, un intérêt et des pratiques politiques, d’abord dans la famille puis tout au long de la vie.',
      exemple: 'Un étudiant qui milite dans une association écologiste affirme ses opinions politiques.',
    },
    {
      terme: 'Socialisation différenciée',
      definition: 'Socialisation qui varie selon les caractéristiques de l’individu (sexe, milieu social) et produit des différences de comportements, de goûts et d’aspirations.',
      exemple: 'On offre plus souvent des jeux de construction aux garçons et des poupées aux filles.',
    },
    {
      terme: 'Stéréotype de genre',
      definition: 'Représentation simplifiée et figée des caractéristiques supposées des hommes et des femmes, qui influence les attentes et les comportements.',
      exemple: '« Les filles sont moins douées en mathématiques » : idée fausse qui peut décourager certaines élèves.',
    },
    {
      terme: 'Genre',
      definition: 'Construction sociale des différences entre les sexes : ensemble des rôles, des comportements et des attributs considérés comme masculins ou féminins dans une société.',
      exemple: 'Le fait que les soins aux enfants soient associés aux femmes relève du genre, pas de la biologie.',
    },
    {
      terme: 'Habitus',
      definition: 'Selon P. Bourdieu, système de dispositions durables (manières de penser, de sentir et d’agir) acquises lors de la socialisation, propres à un milieu social, qui orientent les pratiques de façon largement inconsciente.',
      exemple: 'Le goût pour certains loisirs ou une certaine manière de parler, qui « vont de soi ».',
    },
    {
      terme: 'Capital culturel',
      definition: 'Ensemble des ressources culturelles d’un individu ou d’une famille : diplômes, connaissances, biens culturels, aisance avec la culture légitime.',
      exemple: 'Des parents diplômés qui aident aux devoirs et emmènent leurs enfants au musée.',
    },
    {
      terme: 'Configuration familiale',
      definition: 'Forme prise par la famille selon sa composition et son organisation (couple avec enfants, famille monoparentale, recomposée, homoparentale…).',
      exemple: 'Un enfant de famille recomposée partage son temps entre deux foyers aux règles différentes.',
    },
    {
      terme: 'Groupe de pairs',
      definition: 'Groupe d’individus de même âge et de même statut, qui partagent des activités et s’influencent mutuellement.',
      exemple: 'Les amis du lycée influencent les goûts musicaux et la manière de s’habiller.',
    },
    {
      terme: 'Resocialisation',
      definition: 'Transformation profonde des normes et des valeurs acquises, qui rompt avec la socialisation antérieure.',
      exemple: 'Un individu qui entre au monastère adopte un mode de vie radicalement nouveau.',
    },
    {
      terme: 'Pluralité des influences socialisatrices',
      definition: 'Fait que les individus sont socialisés par des instances multiples, dont les messages peuvent être différents, voire contradictoires.',
      exemple: 'Un adolescent reçoit des messages différents de sa famille, de ses amis et des réseaux sociaux.',
    },
    {
      terme: 'Trajectoire improbable',
      definition: 'Parcours scolaire, professionnel ou social statistiquement rare au regard des caractéristiques d’origine de l’individu (milieu social, sexe).',
      exemple: 'Une fille d’ouvriers qui devient ingénieure aéronautique.',
    },
  ],

  auteurs: [
    {
      nom: 'Émile Durkheim',
      dates: '1858-1917',
      idee: 'L’éducation est une « socialisation méthodique de la jeune génération » : la société s’impose aux individus et leur transmet ses manières d’être.',
      oeuvre: 'Éducation et sociologie (1922)',
    },
    {
      nom: 'Peter Berger et Thomas Luckmann',
      dates: '1929-2017 ; 1927-2016',
      idee: 'Distinguent socialisation primaire (enfance) et socialisation secondaire (intégration ultérieure à des « sous-mondes » institutionnels).',
      oeuvre: 'La Construction sociale de la réalité (1966)',
    },
    {
      nom: 'Pierre Bourdieu',
      dates: '1930-2002',
      idee: 'La socialisation produit un habitus de classe ; le capital culturel hérité contribue à la reproduction des inégalités par l’école.',
      oeuvre: 'La Distinction (1979)',
    },
    {
      nom: 'Bernard Lahire',
      dates: 'né en 1963',
      idee: 'L’« homme pluriel » porte des dispositions variées issues de socialisations multiples ; elles expliquent des réussites scolaires « improbables » en milieu populaire.',
      oeuvre: 'Tableaux de familles (1995) ; L’Homme pluriel (1998)',
    },
    {
      nom: 'Elena Gianini Belotti',
      dates: '1929-2022',
      idee: 'Montre que les différences entre filles et garçons sont largement produites par une éducation différenciée dès la naissance.',
      oeuvre: 'Du côté des petites filles (1973)',
    },
    {
      nom: 'Muriel Darmon',
      idee: 'La socialisation est un processus continu tout au long de la vie, marqué par des socialisations secondaires qui peuvent entrer en tension avec la socialisation primaire.',
      oeuvre: 'La Socialisation (2006)',
    },
  ],

  schemas: [
    {
      id: 'instances-socialisation',
      titre: 'Les instances de socialisation',
      legende: 'Pendant l’enfance, la famille, l’école, les pairs et les médias forment la socialisation primaire. À l’âge adulte, le travail, le couple et l’engagement (associatif, syndical, politique) prolongent ou transforment ces apprentissages : ce sont les socialisations secondaires.',
    },
  ],

  pieges: [
    {
      erreur: 'Confondre norme et valeur.',
      correction: 'La **valeur** est un idéal (le respect) ; la **norme** est une règle de conduite concrète qui en découle (dire bonjour, ne pas insulter).',
    },
    {
      erreur: '« La socialisation s’arrête à la fin de l’enfance. »',
      correction: 'Elle se poursuit **toute la vie** : socialisations secondaires professionnelle, conjugale, politique.',
    },
    {
      erreur: 'Présenter la socialisation comme un conditionnement mécanique qui détermine tout.',
      correction: 'Elle explique des **tendances statistiques**. L’individu reçoit des influences plurielles et peut les réinterpréter (trajectoires improbables).',
    },
    {
      erreur: 'Expliquer les différences filles/garçons par la nature.',
      correction: 'En SES, on montre comment ces différences sont **construites socialement** (genre, socialisation différenciée).',
    },
    {
      erreur: 'Expliquer une trajectoire improbable par le seul mérite ou le hasard.',
      correction: 'La sociologie cherche les **socialisations particulières** qui l’ont rendue possible (un parent investi, un enseignant, des pairs).',
    },
    {
      erreur: 'Citer « l’école » comme seule instance de socialisation primaire.',
      correction: 'La **famille** est l’instance principale de la socialisation primaire ; l’école, les pairs et les médias y contribuent aussi.',
    },
  ],

  synthese: {
    idees: [
      'Socialisation : apprentissage et intériorisation des normes, des valeurs et des rôles ; explicite ou implicite.',
      'Instances : famille, école, pairs, médias, puis travail, couple, associations, partis.',
      'La socialisation est socialement située : elle diffère selon le milieu social (habitus, capital culturel) et le genre.',
      'Elle produit des différences de comportements, de préférences et d’aspirations (y compris dans la manière d’anticiper l’avenir).',
      'La diversité des configurations familiales modifie les conditions de la socialisation des enfants.',
      'Socialisation primaire (enfance) et socialisations secondaires (professionnelle, conjugale, politique).',
      'La pluralité des influences, parfois contradictoires, explique des trajectoires improbables (Lahire).',
    ],
    mecanismes: [
      ['Ressources familiales inégales', 'pratiques transmises différentes', 'habitus', 'aspirations différentes'],
      ['Stéréotypes de genre', 'encouragements différents', 'goûts intériorisés', 'orientations différenciées'],
      ['Influences plurielles', 'dispositions inhabituelles', 'contexte favorable', 'trajectoire improbable'],
    ],
  },

  quiz: [
    {
      question: 'La socialisation est :',
      choix: [
        'Le fait d’avoir beaucoup d’amis',
        'Le processus d’apprentissage et d’intériorisation des normes et des valeurs',
        'L’ensemble des lois d’un pays',
        'La participation aux réseaux sociaux numériques',
      ],
      bonne: 1,
      explication: 'Elle construit l’identité de l’individu et rend possible la vie en société.',
    },
    {
      question: '« Ne pas couper la parole » est :',
      choix: ['Une valeur', 'Une norme sociale', 'Une norme juridique', 'Un statut'],
      bonne: 1,
      explication: 'C’est une règle de conduite concrète, qui traduit la valeur de respect d’autrui.',
    },
    {
      question: 'L’instance principale de la socialisation primaire est :',
      choix: ['L’entreprise', 'La famille', 'Le parti politique', 'Le couple'],
      bonne: 1,
      explication: 'La famille transmet les premiers apprentissages, les plus durables.',
    },
    {
      question: 'Quelle socialisation n’est pas une socialisation secondaire ?',
      choix: ['Professionnelle', 'Conjugale', 'Politique à l’âge adulte', 'L’apprentissage du langage dans la famille'],
      bonne: 3,
      explication: 'L’apprentissage du langage dans l’enfance relève de la socialisation primaire.',
    },
    {
      question: 'Qui a distingué socialisation primaire et socialisation secondaire ?',
      choix: ['P. Berger et T. Luckmann', 'A. Smith', 'H. Becker', 'J. M. Keynes'],
      bonne: 0,
      explication: 'Dans La Construction sociale de la réalité (1966).',
    },
    {
      question: 'Chez P. Bourdieu, l’habitus désigne :',
      choix: [
        'Le logement d’une famille',
        'Un système de dispositions durables acquises lors de la socialisation',
        'Le diplôme le plus élevé obtenu',
        'Une norme juridique',
      ],
      bonne: 1,
      explication: 'Ces dispositions, propres à un milieu, orientent les pratiques de façon largement inconsciente.',
    },
    {
      question: 'Le capital culturel favorise la réussite scolaire parce que :',
      choix: [
        'Il permet de payer des cours particuliers',
        'Il transmet un rapport à la culture et au langage proche de celui attendu par l’école',
        'Il garantit un réseau de relations',
        'Il est distribué également entre les familles',
      ],
      bonne: 1,
      explication: 'Les enfants de familles diplômées trouvent à l’école des attentes familières.',
    },
    {
      question: 'Offrir plus souvent des jeux de construction aux garçons et des poupées aux filles illustre :',
      choix: ['Une socialisation conjugale', 'Une socialisation différenciée selon le genre', 'Une resocialisation', 'Une trajectoire improbable'],
      bonne: 1,
      explication: 'Les attentes liées au sexe de l’enfant orientent ses goûts et ses compétences.',
    },
    {
      question: 'Le genre désigne :',
      choix: [
        'Les différences biologiques entre les sexes',
        'La construction sociale des rôles masculins et féminins',
        'Le style musical préféré',
        'L’orientation sexuelle',
      ],
      bonne: 1,
      explication: 'Il renvoie à ce qui, dans les différences hommes/femmes, est appris et non naturel.',
    },
    {
      question: 'Un enfant qui partage son temps entre deux foyers aux règles différentes illustre :',
      choix: [
        'L’effet de la configuration familiale sur la socialisation',
        'La socialisation professionnelle',
        'La disparition de la socialisation',
        'Une norme juridique',
      ],
      bonne: 0,
      explication: 'Les familles recomposées exposent l’enfant à des modèles et des règles variés.',
    },
    {
      question: 'Un jeune infirmier qui apprend à gérer ses émotions face à la maladie vit :',
      choix: ['Une socialisation primaire', 'Une socialisation professionnelle', 'Une socialisation conjugale', 'Une déviance'],
      bonne: 1,
      explication: 'Il intériorise les normes et l’identité de son métier.',
    },
    {
      question: 'La socialisation secondaire :',
      choix: [
        'Efface toujours la socialisation primaire',
        'Peut prolonger, compléter ou entrer en tension avec la socialisation primaire',
        'Ne concerne que les enfants',
        'Est sans effet sur les comportements',
      ],
      bonne: 1,
      explication: 'Elle s’appuie sur la socialisation primaire, qui reste la plus durable.',
    },
    {
      question: 'Une trajectoire improbable est :',
      choix: [
        'Un parcours impossible',
        'Un parcours statistiquement rare compte tenu des caractéristiques d’origine',
        'Un parcours déviant',
        'Un parcours identique à celui des parents',
      ],
      bonne: 1,
      explication: 'Exemple : réussir des études longues en étant issu d’un milieu populaire.',
    },
    {
      question: 'Selon B. Lahire, les trajectoires improbables s’expliquent notamment par :',
      choix: [
        'Le hasard pur',
        'La pluralité des influences socialisatrices',
        'Les seules qualités innées de l’individu',
        'L’absence de socialisation',
      ],
      bonne: 1,
      explication: 'Une instance particulière (un parent, un enseignant, des pairs) peut transmettre des dispositions inhabituelles dans le milieu d’origine.',
    },
    {
      question: 'La socialisation politique :',
      choix: [
        'Commence à 18 ans avec le droit de vote',
        'Commence dans la famille et se poursuit tout au long de la vie',
        'Ne concerne que les militants',
        'Est uniquement assurée par l’école',
      ],
      bonne: 1,
      explication: 'La famille transmet souvent intérêt et préférences ; le travail, le couple et les événements les font évoluer.',
    },
    {
      question: 'La socialisation explique :',
      choix: [
        'Les destins individuels de manière certaine',
        'Des régularités statistiques de comportement entre groupes',
        'Uniquement les comportements déviants',
        'Les différences biologiques',
      ],
      bonne: 1,
      explication: 'Elle rend compte de tendances, pas de destins : d’où l’existence de trajectoires improbables.',
    },
  ],
};
