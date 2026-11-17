import type { DeveloppementChapitre } from '../../types';

/** Chapitre IX — développement. Marges d'erreur vérifiées dans scripts/verifier-calculs.mjs. */
export const devOpinionPublique: DeveloppementChapitre = {
  id: 'opinion-publique',
  definitions: {
    'Opinion publique': {
      developpement:
        'On parle d’opinion publique quand beaucoup de personnes partagent un avis sur une question qui concerne tout le monde, et que cet avis s’exprime publiquement : dans le vote, les manifestations, les pétitions, les médias ou les sondages. Elle n’existe pas « naturellement » : elle se forme dans le débat public et suppose que les citoyens aient le droit de s’exprimer et que leur avis compte.',
      exemples: [
        'Une majorité de Français favorable à l’interdiction du téléphone portable au collège (formulation d’enquête).',
        'Une forte mobilisation contre une réforme, visible dans la rue et dans les sondages.',
      ],
    },
    'Espace public': {
      developpement:
        'Pour Jürgen Habermas, l’espace public apparaît au XVIIIe siècle : dans les cafés, les salons et la presse, des particuliers discutent des affaires de l’État et forment un jugement collectif face au pouvoir royal. Cette opinion « éclairée » se veut raisonnée, fondée sur l’argumentation. L’espace public s’est ensuite élargi à tous les citoyens et aux médias de masse, puis à Internet.',
      exemples: [
        'Les cafés parisiens du XVIIIe siècle où l’on lisait et commentait les gazettes.',
        'Un débat télévisé entre candidats avant une élection.',
      ],
    },
    Démocratie: {
      developpement:
        'La démocratie est le pouvoir du peuple. Dans une démocratie représentative comme la France, le peuple élit des représentants. Mais la démocratie ne se résume pas au vote : elle suppose des libertés (expression, presse, réunion) qui permettent à l’opinion publique de se former et de peser sur les décisions entre deux élections.',
      exemples: [
        'L’élection des députés tous les cinq ans.',
        'Un référendum, où les citoyens décident directement d’une question.',
      ],
    },
    Sondage: {
      developpement:
        'Un sondage interroge un petit nombre de personnes, choisies avec soin, pour en déduire ce que pense une population entière. C’est comme goûter une cuillère de soupe bien mélangée pour juger toute la marmite : si l’échantillon est représentatif, les réponses donnent une bonne idée de l’ensemble, avec une marge d’erreur.',
      exemples: [
        'Un sondage réalisé auprès de 1 000 personnes sur les intentions de vote.',
        'Un baromètre mensuel de la confiance dans le gouvernement.',
      ],
    },
    'Population mère': {
      developpement:
        'La population mère est l’ensemble des personnes dont on veut connaître l’opinion : tous les Français de 18 ans et plus, les inscrits sur les listes électorales, les lycéens… Elle détermine qui peut faire partie de l’échantillon. Si on se trompe de population mère, le sondage ne répond pas à la bonne question.',
      exemples: [
        'Pour prévoir un résultat électoral, la population mère est celle des inscrits, pas celle de tous les habitants.',
        'Pour connaître l’avis des lycéens sur la réforme du bac, la population mère est celle des lycéens.',
      ],
    },
    'Échantillon représentatif': {
      synonymes: ['échantillon', 'représentatif'],
      developpement:
        'Un échantillon est représentatif s’il ressemble à la population mère « en petit » : même proportion de femmes et d’hommes, de jeunes et d’âgés, de cadres et d’ouvriers, d’habitants des villes et des campagnes. La taille compte moins que la représentativité : un énorme échantillon mal construit donne un résultat faux.',
      exemples: [
        'Si 25 % des électeurs ont plus de 65 ans, l’échantillon doit en compter environ 25 %.',
        'Interroger seulement des volontaires sur un site web donne un échantillon non représentatif.',
      ],
    },
    'Méthode aléatoire': {
      developpement:
        'Avec la méthode aléatoire, on tire au sort les personnes interrogées dans une liste de toute la population : chacune a la même chance d’être choisie. C’est la méthode la plus rigoureuse, car le hasard produit en moyenne un échantillon représentatif et permet de calculer exactement la marge d’erreur. Mais elle coûte cher et prend du temps.',
      exemples: [
        'L’INSEE tire au sort des logements pour son enquête sur l’emploi.',
        'Un tirage au sort de 1 000 numéros dans l’annuaire de tous les abonnés (si tout le monde y figurait).',
      ],
      nePasConfondre: 'Méthode aléatoire (tirage au sort) et méthode des quotas (l’enquêteur choisit les personnes pour respecter la structure de la population).',
    },
    'Méthode des quotas': {
      developpement:
        'Avec les quotas, on reproduit dans l’échantillon la structure de la population selon quelques critères connus (sexe, âge, profession, région, taille de la commune). L’enquêteur doit trouver des personnes qui remplissent chaque « case ». C’est rapide et peu coûteux, donc très utilisé par les instituts privés, mais le choix des personnes n’est pas dû au hasard.',
      exemples: [
        'Si la population compte 52 % de femmes, l’enquêteur doit interroger 520 femmes sur 1 000 personnes.',
        'Un institut qui doit interroger un certain nombre d’ouvriers de 25-34 ans vivant dans le Nord.',
      ],
    },
    Redressement: {
      synonymes: ['redressés', 'redresser'],
      developpement:
        'Même bien construit, un échantillon n’est jamais parfait : certains groupes répondent moins que d’autres. Le redressement consiste à donner plus ou moins de poids à certaines réponses pour corriger ces écarts. Par exemple, si les jeunes sont trop peu nombreux, chaque réponse de jeune compte un peu plus. Les instituts utilisent aussi les votes passés déclarés pour redresser les intentions de vote.',
      exemples: [
        'Un échantillon qui contient 15 % de 18-24 ans alors qu’ils représentent 10 % de la population : on réduit le poids de leurs réponses.',
        'Si les électeurs d’un parti déclarent moins souvent leur vote, l’institut augmente le poids de ceux qui le déclarent.',
      ],
    },
    'Marge d’erreur': {
      developpement:
        'Comme on n’interroge qu’une partie de la population, le résultat peut s’écarter un peu de la réalité. La marge d’erreur indique de combien. Pour 1 000 personnes et un résultat proche de 50 %, elle est d’environ ± 3 points : un candidat à 52 % se situe probablement entre 49 et 55 %. Plus l’échantillon est grand, plus la marge est faible, mais lentement : il faut 4 fois plus de personnes pour la diviser par 2.',
      exemples: [
        'Deux candidats à 51 % et 49 % dans un sondage de 1 000 personnes sont « dans la marge d’erreur » : on ne peut pas dire qui est en tête.',
        'Avec 4 000 personnes, la marge tombe à environ ± 1,5 point.',
      ],
    },
    'Intervalle de confiance': {
      developpement:
        'L’intervalle de confiance est la « fourchette » dans laquelle se trouve probablement la vraie valeur. On le calcule en ajoutant et en retirant la marge d’erreur au résultat du sondage. « Probablement » veut dire, en général, dans 95 cas sur 100.',
      exemples: [
        '52 % ± 3,1 points donne un intervalle de confiance de 48,9 % à 55,1 %.',
        '30 % ± 2,8 points donne un intervalle de 27,2 % à 32,8 %.',
      ],
    },
    'Effet de ralliement (bandwagon)': {
      synonymes: ['effet bandwagon', 'effet de ralliement'],
      developpement:
        'L’effet de ralliement est l’idée que certains électeurs rejoignent le candidat que les sondages donnent gagnant, pour « être du côté du vainqueur ». C’est l’une des raisons pour lesquelles les sondages pourraient influencer le vote. Mais son ampleur est difficile à mesurer et discutée par les chercheurs.',
      exemples: [
        'Un électeur indécis qui vote pour le favori parce que « tout le monde va voter pour lui ».',
        'Un candidat qui progresse dans les sondages et attire de nouveaux soutiens et des dons.',
      ],
      nePasConfondre: 'Effet de ralliement (on rejoint le favori) et effet de sympathie, ou underdog (on soutient l’outsider).',
    },
    'Vote stratégique (vote utile)': {
      synonymes: ['vote utile', 'vote stratégique'],
      developpement:
        'L’électeur qui vote « utile » ne vote pas pour son candidat préféré, mais pour celui qui a le plus de chances de gagner ou d’empêcher la victoire d’un adversaire. Il s’appuie souvent sur les sondages pour savoir qui est bien placé.',
      exemples: [
        'Un électeur qui préfère un petit candidat mais vote dès le premier tour pour le candidat de son camp le mieux placé.',
        'Au second tour, voter pour le candidat le moins éloigné de ses idées pour faire barrage à l’autre.',
      ],
    },
    'Démocratie d’opinion (démocratie du public)': {
      synonymes: ['démocratie d’opinion', 'démocratie du public'],
      developpement:
        'Dans la « démocratie du public » décrite par Bernard Manin, les citoyens ne s’expriment plus seulement le jour du vote : leur opinion est mesurée en permanence par les sondages et commentée par les médias. Les gouvernants sont jugés tous les jours et adaptent leurs discours, voire leurs décisions, à l’opinion mesurée. Cela rapproche gouvernants et gouvernés, mais peut favoriser une politique de court terme.',
      exemples: [
        'Un gouvernement qui retire un projet de loi après une chute de sa cote de popularité.',
        'Des responsables politiques qui commandent des sondages avant de choisir leurs thèmes de campagne.',
      ],
    },
    'Commission des sondages': {
      developpement:
        'Créée par la loi du 19 juillet 1977, la Commission des sondages vérifie que les sondages électoraux publiés respectent les règles : échantillon suffisant, méthode indiquée, marge d’erreur mentionnée. Elle peut obliger un média à publier une mise au point. La loi interdit aussi de publier des sondages électoraux la veille et le jour du scrutin.',
      exemples: [
        'Une mise au point publiée parce qu’un sondage présentait un écart non significatif comme une avance nette.',
        'Le silence imposé aux médias sur les sondages le samedi et le dimanche d’une élection.',
      ],
    },
    'Cote de popularité': {
      developpement:
        'La cote de popularité mesure, à intervalles réguliers, la part des personnes qui font confiance à un responsable politique ou approuvent son action. Elle est très commentée par les médias et peut influencer la stratégie des gouvernants. Elle varie beaucoup selon les événements.',
      exemples: [
        'Un baromètre mensuel publié dans un magazine.',
        'La popularité d’un président qui remonte brièvement après un événement rassembleur.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Suffrage universel',
      definition: 'Droit de vote accordé à tous les citoyens majeurs, sans condition de fortune, d’instruction ou de sexe.',
      exemple: 'En France, il est masculin en 1848 et s’étend aux femmes en 1944.',
      developpement:
        'Avec le suffrage universel, chaque citoyen pèse autant qu’un autre. C’est ce qui transforme l’opinion publique : d’opinion d’une élite instruite, elle devient l’opinion du plus grand nombre.',
      exemples: ['Le droit de vote à 18 ans en France depuis 1974 (il était auparavant à 21 ans).'],
    },
    {
      terme: 'Effet de sympathie (underdog)',
      synonymes: ['effet de sympathie', 'effet underdog'],
      definition: 'Tendance supposée de certains électeurs à soutenir le candidat donné perdant par les sondages.',
      exemple: 'Un électeur qui vote pour l’outsider pour l’empêcher de s’effondrer.',
      developpement: 'C’est l’effet inverse de l’effet de ralliement. Les deux peuvent exister à la fois chez des électeurs différents, ce qui rend leur effet global difficile à mesurer.',
      exemples: ['Un petit candidat qui gagne des voix le jour du vote après avoir été donné très bas dans les sondages.'],
    },
    {
      terme: 'Non-réponse',
      synonymes: ['refus de répondre', 'non-réponses'],
      definition: 'Absence de réponse d’une personne interrogée, soit parce qu’elle refuse l’enquête, soit parce qu’elle ne répond pas à une question (« ne sait pas »).',
      exemple: '15 % des personnes interrogées déclarent « ne pas savoir ».',
      developpement:
        'Les non-réponses ne sont pas réparties au hasard : elles sont plus fréquentes chez les moins diplômés et les moins intéressés par la politique. Pour Bourdieu, c’est la preuve que tout le monde n’a pas une opinion sur tout.',
      exemples: ['Une question sur un sujet technique, comme la politique monétaire, obtient beaucoup de « sans opinion ».'],
    },
    {
      terme: 'Communication politique',
      definition: 'Ensemble des techniques utilisées par les responsables politiques pour diffuser leurs idées et construire leur image auprès des citoyens (discours, médias, réseaux sociaux, sondages).',
      exemple: 'Un candidat qui teste ses slogans auprès d’un panel avant une campagne.',
      developpement: 'Dans une démocratie d’opinion, la communication politique utilise beaucoup les sondages pour ajuster les messages aux attentes mesurées.',
      exemples: ['Des vidéos courtes publiées sur les réseaux sociaux pour toucher les jeunes électeurs.'],
    },
    {
      terme: 'Formulation des questions',
      definition: 'Manière dont une question de sondage est rédigée (choix des mots, ordre des questions, réponses proposées), qui peut influencer les réponses obtenues.',
      exemple: '« Êtes-vous pour la protection de l’environnement ? » obtient plus de « oui » que « Êtes-vous prêt à payer une taxe pour l’environnement ? ».',
      developpement: 'Une question orientée, trop complexe ou qui suggère une réponse fausse le résultat. C’est l’une des principales limites des sondages.',
      exemples: ['Proposer seulement « oui » ou « non » à une question où beaucoup ont un avis nuancé.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'De la Révolution à aujourd’hui : qui a une opinion qui compte ?',
        texte:
          'Avant 1789, l’opinion qui compte est celle des salons et des gazettes : une **élite éclairée**, cultivée et aisée. Avec le **suffrage universel** (masculin en 1848, étendu aux femmes en 1944), l’école obligatoire et la presse de masse, chaque citoyen devient un électeur dont l’avis compte. L’**opinion publique** devient celle du plus grand nombre.',
      },
      {
        titre: 'Les canaux de l’opinion publique',
        texte:
          'Pendant une réforme contestée, l’opinion s’exprime par plusieurs canaux : des manifestations dans la rue, une pétition en ligne qui recueille des milliers de signatures, des éditoriaux dans la presse, des sondages qui mesurent le soutien ou le rejet, et enfin le vote aux élections suivantes.',
      },
    ],
    [
      {
        titre: 'Construire un échantillon par quotas',
        texte:
          'Un institut veut interroger 1 000 personnes représentatives des Français de 18 ans et plus. Supposons que la population compte 52 % de femmes, 21 % de 65 ans et plus et 12 % d’ouvriers. Ses enquêteurs doivent donc interroger environ 520 femmes, 210 personnes de 65 ans et plus et 120 ouvriers : c’est la **méthode des quotas**. Ensuite, les résultats sont **redressés** (données arrondies, fictives).',
      },
      {
        titre: 'Lire un sondage avec sa marge d’erreur',
        texte:
          'Un sondage auprès de 1 000 personnes donne 47 % pour une mesure et 53 % contre. La **marge d’erreur** est d’environ ± 3 points : le « pour » se situe probablement entre 44 et 50 %, le « contre » entre 50 et 56 %. On peut dire que le « contre » est probablement majoritaire, mais de peu.',
      },
      {
        titre: 'Une question orientée',
        texte:
          'Question A : « Faut-il aider les agriculteurs en difficulté ? » Question B : « Faut-il augmenter les impôts pour aider les agriculteurs ? » La question A obtiendra bien plus de « oui » que la B. La **formulation des questions** fabrique en partie le résultat : c’est une critique classique des sondages.',
      },
    ],
    [
      {
        titre: 'Quand un sondage change une campagne',
        texte:
          'Trois semaines avant une élection, un sondage donne un candidat en forte hausse. Les médias en parlent beaucoup, certains électeurs indécis le rejoignent (**effet de ralliement**), d’autres électeurs de son camp votent pour lui pour ne pas « perdre leur voix » (**vote utile**). Ses adversaires changent leur **communication politique** pour l’attaquer.',
      },
    ],
  ],
};
