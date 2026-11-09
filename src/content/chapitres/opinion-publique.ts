import type { Chapitre } from '../types';

/** Marges d'erreur vérifiées dans scripts/verifier-calculs.mjs */
export const opinionPublique: Chapitre = {
  id: 'opinion-publique',
  titre: 'Comment se forme et s’exprime l’opinion publique ?',
  titreCourt: 'Opinion publique',
  domaine: 'Sociologie et science politique',
  objectifs: [
    'Comprendre que l’émergence de l’opinion publique est indissociable de l’avènement de la démocratie : d’abord celle des catégories « éclairées », puis celle du plus grand nombre.',
    'Comprendre les principes et les techniques des sondages, et les débats sur leur interprétation de l’opinion publique.',
    'Comprendre comment le recours fréquent aux sondages contribue à forger l’opinion et modifie la démocratie (démocratie d’opinion) et la vie politique.',
  ],

  essentiel: {
    problematique:
      'On entend chaque jour que « les Français pensent que… ». Mais qu’est-ce que l’opinion publique, comment la mesure-t-on, et les sondages se contentent-ils de la refléter ou contribuent-ils à la fabriquer ?',
    parties: [
      {
        titre: 'L’opinion publique, une notion liée à la démocratie',
        blocs: [
          {
            type: 'texte',
            texte:
              'L’**opinion publique** désigne l’ensemble des jugements, des idées et des attitudes partagés par une partie importante de la population sur des questions d’intérêt général, et qui s’expriment publiquement. Elle n’existe pas « naturellement » : son émergence est **indissociable de l’avènement de la démocratie**, car elle suppose que les gouvernés aient le droit de juger les gouvernants et que leur avis compte.',
          },
          {
            type: 'texte',
            texte:
              'Au **XVIIIe siècle**, l’opinion publique est d’abord celle d’une **élite éclairée** (philosophes, bourgeois instruits, membres des salons, des cafés, des académies) qui discute de la chose publique grâce à l’imprimé (journaux, pamphlets). J. Habermas parle de la naissance d’un **espace public** où des particuliers font un usage public de leur raison face au pouvoir royal. Cette opinion se veut **raisonnée** et se distingue de l’avis de la foule.',
          },
          {
            type: 'texte',
            texte:
              'Avec l’extension du **suffrage universel** (masculin en 1848 en France, puis élargi aux femmes en 1944), la scolarisation et la presse de masse, l’opinion publique devient **celle du plus grand nombre**. Elle s’exprime par le vote, mais aussi par les pétitions, les manifestations, les grèves, les médias et, depuis le XXe siècle, par les **sondages**, qui prétendent la mesurer en continu.',
          },
          {
            type: 'mecanisme',
            titre: 'De l’opinion « éclairée » à l’opinion du plus grand nombre',
            etapes: [
              'XVIIIe siècle : une élite instruite débat dans les salons, les cafés, les journaux',
              'XIXe-XXe siècles : suffrage universel, école, presse de masse',
              'Chaque citoyen est censé avoir une opinion qui compte',
              'L’opinion publique devient celle de la majorité, mesurée par les sondages',
            ],
          },
        ],
      },
      {
        titre: 'Les sondages : principes, techniques et limites',
        blocs: [
          {
            type: 'texte',
            texte:
              'Un **sondage** consiste à interroger une partie de la population, un **échantillon**, pour connaître les opinions ou les comportements de l’ensemble de la population étudiée. Pour que les résultats soient extrapolables, l’échantillon doit être **représentatif**, c’est-à-dire constituer une image réduite de la population. Deux méthodes existent :',
          },
          {
            type: 'tableau',
            entetes: ['Méthode', 'Principe', 'Usage'],
            lignes: [
              [
                'Méthode aléatoire (probabiliste)',
                'Les personnes sont tirées au sort dans une liste de toute la population ; chacun a la même chance d’être interrogé',
                'Grandes enquêtes publiques (INSEE) : coûteuse mais permet de calculer une marge d’erreur',
              ],
              [
                'Méthode des quotas',
                'L’échantillon reproduit la structure de la population selon quelques critères (sexe, âge, PCS, région, taille d’agglomération) ; l’enquêteur choisit les personnes dans chaque case',
                'Instituts de sondage privés : rapide et moins coûteuse',
              ],
            ],
          },
          { type: 'schema', id: 'sondage' },
          {
            type: 'texte',
            texte:
              'Les résultats sont ensuite **redressés** : on pondère les réponses pour corriger les écarts entre l’échantillon et la population (par exemple en tenant compte des votes passés déclarés). Tout sondage comporte une **marge d’erreur** : le résultat est une estimation, comprise dans un intervalle de confiance. Pour un échantillon aléatoire de 1 000 personnes et une proportion proche de 50 %, la marge d’erreur est d’environ **± 3,1 points** (à 95 %). Elle diminue quand la taille de l’échantillon augmente, mais lentement : il faut 4 000 personnes pour la diviser par deux (± 1,5 point).',
          },
          {
            type: 'formule',
            tex: '\\text{marge} \\approx 1{,}96 \\times \\sqrt{\\frac{p(1-p)}{n}}',
            legende: 'p : proportion observée ; n : taille de l’échantillon (sondage aléatoire, niveau de confiance 95 %)',
          },
          {
            type: 'encadre',
            titre: 'Exemple',
            texte:
              'Un sondage auprès de 1 000 personnes donne 52 % d’intentions de vote pour A et 48 % pour B. Avec une marge de ± 3,1 points, A est estimé entre 48,9 et 55,1 % : on ne peut pas affirmer que A est en tête. Pour la méthode des quotas, la marge ne se calcule pas rigoureusement, mais les instituts utilisent ces ordres de grandeur.',
          },
          {
            type: 'texte',
            texte:
              'Les sondages font l’objet de **débats**. P. Bourdieu, dans un article célèbre intitulé « L’opinion publique n’existe pas » (1973), critique trois postulats implicites : que tout le monde a une opinion (alors que les non-réponses sont plus fréquentes chez les moins diplômés), que toutes les opinions se valent (alors qu’une opinion réfléchie et un avis improvisé n’ont pas le même poids), et qu’il existe un accord sur les questions qui méritent d’être posées (alors que ce sont les commanditaires qui imposent les problèmes). D’autres limites tiennent à la **formulation des questions** (une question orientée oriente les réponses), à l’ordre des questions, au mode d’administration (en ligne, par téléphone) et aux **refus de répondre**.',
          },
        ],
      },
      {
        titre: 'Sondages, opinion et vie démocratique',
        blocs: [
          {
            type: 'texte',
            texte:
              'Le recours fréquent aux sondages ne fait pas que **mesurer** l’opinion : il contribue à la **forger**. En publiant ce que « pensent les Français », les sondages imposent des thèmes au débat, donnent une existence à une majorité, et peuvent influencer ceux qui les lisent. On évoque l’**effet de ralliement** (bandwagon : on rejoint le candidat donné gagnant) et l’**effet de sympathie** pour l’outsider (underdog), ainsi que le **vote stratégique** (voter « utile » pour un candidat bien placé). Ces effets sont discutés et difficiles à mesurer.',
          },
          {
            type: 'mecanisme',
            titre: 'Comment les sondages contribuent à forger l’opinion',
            etapes: [
              'Un institut pose une question choisie par un commanditaire (média, parti)',
              'Les résultats sont publiés et commentés comme « l’opinion des Français »',
              'Le thème devient un enjeu ; certains citoyens ajustent leur opinion ou leur vote',
              'Les responsables politiques réagissent aux sondages : l’opinion mesurée devient une force politique',
            ],
          },
          {
            type: 'texte',
            texte:
              'B. Manin parle de **démocratie du public** (ou démocratie d’opinion) : les gouvernants sont jugés en permanence, entre deux élections, par une opinion publique mesurée et mise en scène par les médias. Cela modifie l’exercice de la démocratie :',
          },
          {
            type: 'liste',
            items: [
              '**Contrôle des gouvernants** : les cotes de popularité et les sondages sur les réformes exercent une pression continue sur les décisions.',
              '**Participation électorale** : les sondages peuvent mobiliser ou démobiliser les électeurs (« c’est joué d’avance »), orienter le vote utile.',
              '**Communication politique** : les responsables ajustent leurs discours et leurs propositions aux attentes mesurées ; la politique devient plus attentive à l’image et au court terme.',
            ],
          },
          {
            type: 'texte',
            texte:
              'Pour limiter les dérives, la loi du 19 juillet 1977 encadre les sondages électoraux : une **Commission des sondages** contrôle leur qualité, les publications doivent mentionner la méthode, la taille de l’échantillon et la marge d’erreur, et la publication de sondages électoraux est **interdite la veille et le jour du scrutin**.',
          },
          {
            type: 'encadre',
            titre: 'Un débat à présenter',
            texte:
              'Pour leurs défenseurs, les sondages rapprochent gouvernants et gouvernés en donnant la parole à tous, entre les élections. Pour leurs critiques, ils réduisent l’opinion à une somme d’avis individuels non débattus, et favorisent une politique de l’instant. Une copie de bac doit présenter les deux points de vue.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Opinion publique',
      definition: 'Ensemble des jugements, idées et attitudes partagés par une partie importante de la population sur des questions d’intérêt général, et exprimés publiquement.',
      exemple: 'Le rejet ou le soutien majoritaire à une réforme des retraites.',
    },
    {
      terme: 'Espace public',
      definition: 'Selon J. Habermas, espace de discussion où des citoyens font un usage public de leur raison pour débattre des affaires communes, apparu au XVIIIe siècle avec les salons, les cafés et la presse.',
      exemple: 'Les débats des philosophes des Lumières dans les salons parisiens.',
    },
    {
      terme: 'Démocratie',
      definition: 'Régime politique dans lequel le pouvoir appartient au peuple, qui l’exerce directement ou par l’intermédiaire de représentants élus, et qui garantit les libertés d’expression et d’opinion.',
      exemple: 'La France est une démocratie représentative.',
    },
    {
      terme: 'Sondage',
      definition: 'Enquête qui interroge un échantillon d’individus pour estimer les opinions ou les comportements de l’ensemble d’une population.',
      exemple: 'Un sondage sur les intentions de vote réalisé auprès de 1 000 personnes.',
    },
    {
      terme: 'Population mère',
      definition: 'Ensemble de la population que l’on cherche à étudier par un sondage.',
      exemple: 'Les personnes inscrites sur les listes électorales en France.',
    },
    {
      terme: 'Échantillon représentatif',
      definition: 'Partie de la population interrogée dont la structure reproduit celle de la population étudiée, ce qui permet d’extrapoler les résultats.',
      exemple: 'Un échantillon qui compte la même proportion de femmes, de jeunes et d’ouvriers que la population.',
    },
    {
      terme: 'Méthode aléatoire',
      definition: 'Méthode de constitution d’un échantillon par tirage au sort, chaque individu ayant la même probabilité d’être interrogé.',
      exemple: 'L’INSEE tire au sort des logements pour ses enquêtes.',
    },
    {
      terme: 'Méthode des quotas',
      definition: 'Méthode de constitution d’un échantillon qui reproduit la structure de la population selon quelques critères (sexe, âge, PCS, région, taille d’agglomération), l’enquêteur choisissant les personnes interrogées.',
      exemple: 'Si 51 % de la population est féminine, l’échantillon compte 51 % de femmes.',
    },
    {
      terme: 'Redressement',
      definition: 'Correction statistique qui pondère les réponses de l’échantillon pour qu’il corresponde mieux à la population (structure sociodémographique, votes passés).',
      exemple: 'Si les électeurs d’un parti déclarent moins leur vote, l’institut augmente le poids de leurs réponses.',
    },
    {
      terme: 'Marge d’erreur',
      definition: 'Écart possible entre le résultat d’un sondage et la valeur réelle dans la population, lié au fait qu’on n’interroge qu’un échantillon ; elle diminue quand la taille de l’échantillon augmente.',
      exemple: '52 % ± 3,1 points : la valeur réelle est probablement comprise entre 48,9 % et 55,1 %.',
    },
    {
      terme: 'Intervalle de confiance',
      definition: 'Intervalle dans lequel la valeur réelle a une forte probabilité (en général 95 %) de se trouver.',
      exemple: '[48,9 % ; 55,1 %] pour un résultat de 52 % avec 1 000 personnes interrogées.',
    },
    {
      terme: 'Effet de ralliement (bandwagon)',
      definition: 'Tendance supposée de certains électeurs à rejoindre le candidat ou l’opinion donnés majoritaires par les sondages.',
      exemple: 'Voter pour le favori « pour être du côté du gagnant ».',
    },
    {
      terme: 'Vote stratégique (vote utile)',
      definition: 'Vote pour un candidat qui n’est pas le préféré, mais qui a davantage de chances de l’emporter ou d’empêcher la victoire d’un adversaire, souvent en fonction des sondages.',
      exemple: 'Voter dès le premier tour pour le candidat le mieux placé de son camp.',
    },
    {
      terme: 'Démocratie d’opinion (démocratie du public)',
      definition: 'Forme de démocratie dans laquelle l’opinion publique, mesurée en continu par les sondages et mise en scène par les médias, pèse en permanence sur les gouvernants entre les élections.',
      exemple: 'Un gouvernement qui retire un projet après des sondages défavorables.',
    },
    {
      terme: 'Commission des sondages',
      definition: 'Autorité créée par la loi du 19 juillet 1977, chargée de contrôler la qualité et la publication des sondages électoraux en France.',
      exemple: 'Elle peut demander la publication d’une mise au point lorsqu’un sondage ne respecte pas les règles.',
    },
    {
      terme: 'Cote de popularité',
      definition: 'Indicateur, issu de sondages réguliers, de la part de la population qui fait confiance à un responsable politique ou approuve son action.',
      exemple: 'Un baromètre mensuel de confiance dans le président et le gouvernement.',
    },
  ],

  auteurs: [
    {
      nom: 'Jürgen Habermas',
      dates: 'né en 1929',
      idee: 'Au XVIIIe siècle naît un « espace public » bourgeois où l’on discute rationnellement des affaires publiques : c’est l’origine de l’opinion publique.',
      oeuvre: 'L’Espace public (1962)',
    },
    {
      nom: 'George Gallup',
      dates: '1901-1984',
      idee: 'Pionnier des sondages par échantillon ; en 1936, il prévoit l’élection de Roosevelt avec un petit échantillon représentatif, alors qu’un magazine, avec des millions de réponses non représentatives, s’était trompé.',
    },
    {
      nom: 'Pierre Bourdieu',
      dates: '1930-2002',
      idee: '« L’opinion publique n’existe pas » : les sondages supposent à tort que tout le monde a une opinion, que toutes se valent et que les questions posées vont de soi.',
      oeuvre: 'Article paru dans Les Temps modernes (1973)',
    },
    {
      nom: 'Patrick Champagne',
      idee: 'Les sondages et les médias « font l’opinion » : ils contribuent à produire ce qu’ils prétendent mesurer.',
      oeuvre: 'Faire l’opinion (1990)',
    },
    {
      nom: 'Loïc Blondiaux',
      idee: 'Retrace l’histoire de la « fabrique de l’opinion » : les sondages ont imposé une définition de l’opinion publique comme somme d’opinions individuelles.',
      oeuvre: 'La Fabrique de l’opinion (1998)',
    },
    {
      nom: 'Bernard Manin',
      dates: 'né en 1951',
      idee: 'Le gouvernement représentatif est entré dans l’âge de la « démocratie du public », dominée par les médias et l’image.',
      oeuvre: 'Principes du gouvernement représentatif (1995)',
    },
  ],

  schemas: [
    {
      id: 'sondage',
      titre: 'Les étapes d’un sondage par quotas',
      legende: 'L’institut définit la population étudiée, construit un échantillon qui en reproduit la structure (quotas), administre un questionnaire, redresse les résultats puis publie une estimation accompagnée de sa marge d’erreur.',
    },
  ],

  pieges: [
    {
      erreur: '« L’opinion publique, c’est ce que disent les sondages. »',
      correction: 'Les sondages en donnent une **mesure** (discutée) ; l’opinion s’exprime aussi par le vote, les manifestations, les pétitions, les médias.',
    },
    {
      erreur: '« Plus l’échantillon est grand, plus le sondage est fiable, quelle que soit la méthode. »',
      correction: 'La **représentativité** compte plus que la taille : en 1936, des millions de réponses non représentatives ont donné un résultat faux, alors qu’un petit échantillon représentatif a vu juste.',
    },
    {
      erreur: 'Lire un écart de 2 points comme une avance certaine.',
      correction: 'Il faut tenir compte de la **marge d’erreur** (environ ± 3 points pour 1 000 personnes).',
    },
    {
      erreur: 'Dire que la méthode des quotas tire les personnes au sort.',
      correction: 'C’est la méthode **aléatoire** qui tire au sort. Avec les **quotas**, l’enquêteur choisit les personnes dans le respect de la structure de la population.',
    },
    {
      erreur: 'Présenter la critique de Bourdieu comme un rejet de toute statistique.',
      correction: 'Il critique trois **postulats** des sondages d’opinion (tout le monde a une opinion, toutes se valent, les questions vont de soi), pas la statistique en général.',
    },
    {
      erreur: 'Affirmer que les sondages déterminent le vote.',
      correction: 'Leurs effets (ralliement, sympathie pour l’outsider, vote utile) sont **discutés** et difficiles à mesurer : ils jouent à la marge.',
    },
  ],

  synthese: {
    idees: [
      'L’opinion publique naît avec la démocratie : d’abord opinion d’une élite éclairée (espace public, Habermas), puis du plus grand nombre (suffrage universel, presse, sondages).',
      'Sondage : interroger un échantillon représentatif ; méthode aléatoire ou méthode des quotas ; redressement.',
      'Marge d’erreur ≈ ± 3 points pour 1 000 personnes ; elle diminue avec la taille de l’échantillon.',
      'Débats : Bourdieu (« L’opinion publique n’existe pas »), formulation des questions, non-réponses.',
      'Les sondages contribuent à forger l’opinion (Champagne) : effets de ralliement, vote utile, mise sur agenda.',
      'Démocratie d’opinion (Manin) : contrôle continu des gouvernants, effets sur la participation et la communication politique.',
      'Encadrement : loi de 1977, Commission des sondages, interdiction de publication la veille et le jour du scrutin.',
    ],
    formules: [{ tex: '\\text{marge} \\approx 1{,}96 \\sqrt{\\dfrac{p(1-p)}{n}}', legende: 'Sondage aléatoire, confiance 95 %' }],
    mecanismes: [
      ['Suffrage universel et presse de masse', 'chacun a une opinion qui compte', 'opinion du plus grand nombre'],
      ['Publication des sondages', 'mise sur agenda, ralliement', 'ajustement des responsables politiques'],
    ],
  },

  quiz: [
    {
      question: 'Au XVIIIe siècle, l’opinion publique est d’abord :',
      choix: [
        'Celle de toute la population',
        'Celle d’une élite éclairée qui débat dans les salons et la presse',
        'Mesurée par les sondages',
        'Exprimée par le suffrage universel',
      ],
      bonne: 1,
      explication: 'Habermas décrit la naissance d’un espace public bourgeois.',
    },
    {
      question: 'Pourquoi l’émergence de l’opinion publique est-elle liée à la démocratie ?',
      choix: [
        'Parce que les rois l’avaient inventée',
        'Parce qu’elle suppose que l’avis des gouvernés compte et puisse s’exprimer librement',
        'Parce que la démocratie interdit les sondages',
        'Parce qu’elle remplace les élections',
      ],
      bonne: 1,
      explication: 'Libertés d’expression, de la presse, suffrage universel : l’opinion devient une force politique légitime.',
    },
    {
      question: 'Un échantillon représentatif est :',
      choix: [
        'Un échantillon très grand',
        'Une image réduite de la population étudiée',
        'Un groupe d’experts',
        'Composé de volontaires',
      ],
      bonne: 1,
      explication: 'Sa structure doit reproduire celle de la population pour que les résultats soient extrapolables.',
    },
    {
      question: 'Dans la méthode des quotas :',
      choix: [
        'Les personnes sont tirées au sort',
        'L’échantillon reproduit la structure de la population selon quelques critères',
        'On interroge toute la population',
        'On interroge seulement les volontaires',
      ],
      bonne: 1,
      explication: 'Sexe, âge, PCS, région, taille d’agglomération ; l’enquêteur choisit les personnes dans chaque case.',
    },
    {
      question: 'Le redressement consiste à :',
      choix: [
        'Corriger les fautes d’orthographe du questionnaire',
        'Pondérer les réponses pour corriger les écarts entre échantillon et population',
        'Supprimer les réponses gênantes',
        'Augmenter la taille de l’échantillon',
      ],
      bonne: 1,
      explication: 'On donne plus ou moins de poids à certaines réponses selon des informations connues (structure, votes passés).',
    },
    {
      question: 'Pour un sondage aléatoire de 1 000 personnes et une proportion proche de 50 %, la marge d’erreur est d’environ :',
      choix: ['± 0,5 point', '± 1 point', '± 3 points', '± 10 points'],
      bonne: 2,
      explication: '1,96 × √(0,25 / 1 000) ≈ 0,031, soit ± 3,1 points.',
    },
    {
      question: 'Combien de personnes faut-il interroger pour diviser par deux la marge d’erreur d’un sondage de 1 000 personnes ?',
      choix: ['2 000', '4 000', '10 000', '1 500'],
      bonne: 1,
      explication: 'La marge varie comme 1/√n : diviser par 2 suppose de multiplier n par 4.',
    },
    {
      question: 'Un sondage donne A à 51 % et B à 49 % (1 000 personnes). On peut dire :',
      choix: [
        'A gagnera certainement',
        'A et B sont dans la marge d’erreur : on ne peut pas les départager',
        'B est en tête',
        'Le sondage est faux',
      ],
      bonne: 1,
      explication: 'L’écart (2 points) est inférieur à la marge d’erreur.',
    },
    {
      question: 'L’article « L’opinion publique n’existe pas » (1973) est de :',
      choix: ['J. Habermas', 'P. Bourdieu', 'G. Gallup', 'B. Manin'],
      bonne: 1,
      explication: 'Il critique les postulats implicites des sondages d’opinion.',
    },
    {
      question: 'Parmi ces postulats, lequel n’est pas critiqué par Bourdieu ?',
      choix: [
        'Tout le monde a une opinion',
        'Toutes les opinions se valent',
        'Il y a un accord sur les questions qui méritent d’être posées',
        'Les sondages doivent mentionner leur marge d’erreur',
      ],
      bonne: 3,
      explication: 'La mention de la marge d’erreur est une obligation légale, pas un postulat critiqué.',
    },
    {
      question: 'En 1936, G. Gallup a montré que :',
      choix: [
        'Un grand nombre de réponses garantit la justesse',
        'Un petit échantillon représentatif peut être plus fiable qu’un grand échantillon biaisé',
        'Les sondages sont inutiles',
        'Le vote est toujours prévisible',
      ],
      bonne: 1,
      explication: 'Il a prévu la victoire de Roosevelt alors qu’un magazine, avec des millions de réponses non représentatives, s’était trompé.',
    },
    {
      question: 'L’effet de ralliement (bandwagon) désigne :',
      choix: [
        'La tendance à soutenir le candidat donné perdant',
        'La tendance à rejoindre le candidat donné gagnant',
        'L’abstention',
        'Le refus de répondre aux sondages',
      ],
      bonne: 1,
      explication: 'L’effet inverse (soutien à l’outsider) est appelé effet underdog.',
    },
    {
      question: 'La « démocratie du public » de B. Manin désigne :',
      choix: [
        'La démocratie directe par référendum',
        'Une démocratie où l’opinion mesurée par les sondages et les médias pèse en continu sur les gouvernants',
        'Le vote obligatoire',
        'La démocratie athénienne',
      ],
      bonne: 1,
      explication: 'Les gouvernants sont jugés en permanence, entre deux élections.',
    },
    {
      question: 'En France, la publication de sondages électoraux est interdite :',
      choix: ['Pendant toute la campagne', 'La veille et le jour du scrutin', 'Le mois précédant le scrutin', 'Jamais'],
      bonne: 1,
      explication: 'Règle fixée par la loi de 1977 modifiée.',
    },
    {
      question: 'Quel est un effet des sondages sur la communication politique ?',
      choix: [
        'Les responsables ajustent leurs discours aux attentes mesurées',
        'Les partis disparaissent',
        'Le vote devient obligatoire',
        'Les médias cessent de commenter la politique',
      ],
      bonne: 0,
      explication: 'La politique devient plus attentive à l’opinion et à l’image, parfois au détriment du long terme.',
    },
  ],
};
