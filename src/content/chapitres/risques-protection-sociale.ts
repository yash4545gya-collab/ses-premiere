import type { Chapitre } from '../types';

/** Exemple de mutualisation fictif, vérifié dans scripts/verifier-calculs.mjs */
export const risquesProtectionSociale: Chapitre = {
  id: 'risques-protection-sociale',
  titre: 'Comment l’assurance et la protection sociale contribuent-elles à la gestion des risques dans les sociétés développées ?',
  titreCourt: 'Risques et protection sociale',
  domaine: 'Regards croisés',
  objectifs: [
    'Connaître les principaux risques économiques et sociaux (maladie, accident, perte d’emploi, vieillesse).',
    'Comprendre que l’exposition et l’attitude face au risque (perception, aversion, conduites à risque) diffèrent selon les individus, les groupes et les sociétés.',
    'Comprendre les effets positifs (bien-être, incitation à l’innovation) et négatifs (aléa moral) du partage des risques.',
    'Connaître les principes de gestion collective des risques (prévention, mutualisation, diversification).',
    'Connaître le rôle des institutions de gestion des risques (famille, sociétés et mutuelles d’assurance, pouvoirs publics).',
    'Comprendre que la protection sociale, par ses logiques d’assurance et d’assistance, repose sur la solidarité collective.',
  ],

  essentiel: {
    problematique:
      'Tomber malade, avoir un accident, perdre son emploi, vieillir : ces événements peuvent faire basculer une vie. Comment les sociétés développées organisent-elles la prise en charge collective de ces risques, et à quelles conditions ce partage est-il efficace et juste ?',
    parties: [
      {
        titre: 'Des risques inégalement répartis et inégalement perçus',
        blocs: [
          {
            type: 'texte',
            texte:
              'Un **risque** est un événement incertain, dont on peut estimer la probabilité, et qui peut entraîner un dommage. Les principaux **risques économiques et sociaux** sont la **maladie**, l’**accident** (du travail, de la route, domestique), la **perte d’emploi** et la **vieillesse** (perte de revenus d’activité, dépendance). Ils ont deux types de conséquences : une **perte de revenu** et/ou une **hausse des dépenses**.',
          },
          {
            type: 'texte',
            texte:
              'L’**exposition au risque** est inégale selon les individus et les groupes sociaux : les ouvriers sont plus exposés aux accidents du travail et aux maladies professionnelles que les cadres, les salariés peu qualifiés et en contrat court sont plus exposés au chômage, l’espérance de vie diffère selon la catégorie sociale. Elle varie aussi selon les sociétés (risques climatiques, sanitaires, conflits).',
          },
          {
            type: 'texte',
            texte:
              'L’**attitude face au risque** diffère également. La **perception du risque** dépend de l’information, de l’expérience et de la culture (on surestime souvent les risques spectaculaires et sous-estime les risques familiers). L’**aversion au risque** désigne la préférence pour une situation certaine plutôt qu’une situation incertaine de même valeur moyenne : c’est elle qui pousse à s’assurer. Certains individus adoptent des **conduites à risque** (vitesse au volant, consommation d’alcool, sports extrêmes), plus fréquentes chez les jeunes hommes, ce qui s’explique en partie par la socialisation (valorisation de la prise de risque dans la socialisation masculine).',
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi l’aversion au risque pousse à s’assurer',
            etapes: [
              'Un individu risque une perte importante, mais peu probable',
              'Il préfère une perte certaine et faible (la prime) à une perte incertaine et lourde',
              'Il accepte de payer une prime légèrement supérieure à la perte moyenne attendue',
              'L’assureur prend le risque en charge : l’individu gagne en sécurité',
            ],
          },
        ],
      },
      {
        titre: 'Partager les risques : principes, effets et institutions',
        blocs: [
          {
            type: 'texte',
            texte: 'La gestion collective des risques repose sur trois **principes** :',
          },
          {
            type: 'liste',
            items: [
              '**La prévention** : réduire la probabilité ou la gravité du dommage (vaccination, ceinture de sécurité, normes de sécurité au travail, dépistage).',
              '**La mutualisation** : regrouper un grand nombre d’individus exposés au même risque, qui versent chacun une cotisation (ou prime) ; les sommes collectées indemnisent ceux qui subissent le dommage. Le coût d’un risque lourd et rare pour un individu devient une charge faible et certaine pour chacun.',
              '**La diversification** : répartir les risques sur des domaines, des territoires ou des actifs différents, qui ne surviennent pas en même temps, pour éviter des pertes simultanées (un assureur couvre des risques variés et se réassure ; un épargnant ne place pas tout sur une seule entreprise).',
            ],
          },
          {
            type: 'texte',
            texte:
              'Exemple de mutualisation (données fictives) : 1 000 propriétaires ont chacun une probabilité de 1 % de subir un dommage de 20 000 €. On s’attend à 10 sinistres, soit 200 000 € à indemniser. Si chacun verse 200 € (la **prime pure**), la caisse commune couvre exactement les sinistres. L’assureur ajoute un chargement pour ses frais et sa marge (par exemple 25 %, soit une prime de 250 €).',
          },
          { type: 'schema', id: 'mutualisation' },
          {
            type: 'texte',
            texte:
              'Le partage des risques a des **effets positifs** : il améliore le **bien-être** (sécurité, accès aux soins, maintien du niveau de vie) et favorise la **prise de risque productive** : un entrepreneur assuré ou protégé par la responsabilité limitée ose davantage **innover**. Il a aussi des **effets négatifs** : l’**aléa moral** (l’assuré, moins exposé aux conséquences, peut devenir moins prudent) et la **sélection adverse** (les assurés les plus risqués sont les plus intéressés par l’assurance). Les assureurs y répondent par la **franchise**, le **bonus-malus**, les questionnaires ou l’assurance obligatoire.',
          },
          {
            type: 'tableau',
            titre: 'Les institutions qui contribuent à la gestion des risques',
            entetes: ['Institution', 'Fonctionnement', 'Exemple'],
            lignes: [
              ['Famille', 'Solidarité privée, informelle, entre générations et au sein du ménage', 'Aide financière aux jeunes adultes, hébergement d’un parent âgé'],
              ['Sociétés d’assurance', 'Entreprises à but lucratif ; prime fixée selon le niveau de risque de l’assuré', 'Assurance automobile, assurance habitation'],
              ['Mutuelles', 'Organismes à but non lucratif, gérés par leurs adhérents ; cotisations souvent indépendantes du risque individuel', 'Complémentaire santé'],
              ['Pouvoirs publics', 'Protection sociale obligatoire, prévention, réglementation (assurances obligatoires)', 'Sécurité sociale, assurance chômage, RSA'],
            ],
          },
        ],
      },
      {
        titre: 'La protection sociale : assurance, assistance et solidarité collective',
        blocs: [
          {
            type: 'texte',
            texte:
              'La **protection sociale** est l’ensemble des mécanismes de prévoyance collective qui permettent aux individus de faire face aux conséquences financières des risques sociaux. En France, la **Sécurité sociale** a été créée en 1945 ; elle comprend des branches maladie, accidents du travail et maladies professionnelles, vieillesse, famille et, depuis 2021, autonomie. L’assurance chômage est gérée à part (par l’Unédic). La protection sociale combine deux **logiques** :',
          },
          {
            type: 'tableau',
            entetes: ['', 'Logique d’assurance (bismarckienne)', 'Logique d’assistance (beveridgienne)'],
            lignes: [
              ['Qui est couvert ?', 'Ceux qui ont cotisé (les travailleurs et leurs ayants droit)', 'Ceux qui sont dans le besoin, sous conditions de ressources ; ou tous les résidents (logique universelle)'],
              ['Financement', 'Cotisations sociales assises sur les salaires', 'Impôts (dont la CSG)'],
              ['Prestations', 'Contributives : liées aux cotisations versées (retraites, indemnités chômage)', 'Non contributives : minima sociaux (RSA, minimum vieillesse), prestations universelles'],
              ['Objectif', 'Maintenir le niveau de vie face au risque', 'Lutter contre la pauvreté, garantir un minimum'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Les deux logiques reposent sur la **solidarité collective**. La logique d’assurance organise une **solidarité horizontale** (des bien-portants vers les malades, des actifs vers les chômeurs, des actifs vers les retraités). La logique d’assistance organise une **solidarité verticale** (des plus aisés vers les plus modestes), car les prestations sont financées par l’impôt et réservées à ceux qui en ont besoin. À la différence d’une assurance privée, la Sécurité sociale ne fixe pas les cotisations selon le risque de chacun : un malade chronique cotise comme un bien-portant au même salaire.',
          },
          {
            type: 'mecanisme',
            titre: 'Du risque individuel à la solidarité collective',
            etapes: [
              'Un risque social menace le revenu (maladie, chômage, vieillesse)',
              'Les cotisations et les impôts de tous alimentent des caisses communes',
              'Les prestations sont versées à ceux qui subissent le risque ou sont dans le besoin',
              'Le risque individuel est pris en charge collectivement : solidarité horizontale et verticale',
            ],
          },
          {
            type: 'encadre',
            titre: 'Débats',
            texte:
              'La protection sociale est critiquée pour son coût et ses effets désincitatifs possibles (aléa moral, « trappes à inactivité » discutées), mais défendue pour son rôle d’amortisseur des crises et de réduction de la pauvreté. Le vieillissement de la population pose la question de son financement (réformes des retraites). Présente les deux points de vue.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Risque',
      definition: 'Événement incertain, dont on peut estimer la probabilité de survenue, susceptible d’entraîner un dommage (perte de revenu, hausse des dépenses).',
      exemple: 'Le risque d’accident de la route.',
    },
    {
      terme: 'Risques sociaux',
      definition: 'Événements qui menacent la capacité des individus à subvenir à leurs besoins : maladie, accident, perte d’emploi, vieillesse (et charges de famille).',
      exemple: 'Une longue maladie qui empêche de travailler.',
    },
    {
      terme: 'Incertitude',
      definition: 'Situation dans laquelle on ne peut pas estimer la probabilité d’un événement, à la différence du risque (distinction de F. Knight).',
      exemple: 'Les conséquences d’une technologie radicalement nouvelle.',
    },
    {
      terme: 'Exposition au risque',
      definition: 'Probabilité plus ou moins forte, pour un individu ou un groupe, de subir un risque, selon ses conditions de vie et de travail.',
      exemple: 'Les ouvriers du bâtiment sont plus exposés aux accidents du travail que les employés de bureau.',
    },
    {
      terme: 'Perception du risque',
      definition: 'Représentation subjective qu’un individu se fait de la probabilité et de la gravité d’un risque, qui peut s’écarter du risque réel.',
      exemple: 'Avoir plus peur de l’avion que de la voiture, pourtant plus dangereuse.',
    },
    {
      terme: 'Aversion au risque',
      definition: 'Préférence pour une situation certaine plutôt qu’une situation incertaine de même valeur moyenne ; elle explique la demande d’assurance.',
      exemple: 'Préférer payer 250 € par an plutôt que risquer de perdre 20 000 € avec une probabilité de 1 %.',
    },
    {
      terme: 'Conduite à risque',
      definition: 'Comportement qui expose volontairement son auteur (ou autrui) à un danger.',
      exemple: 'Rouler à grande vitesse, consommer de l’alcool avant de conduire.',
    },
    {
      terme: 'Prévention',
      definition: 'Ensemble des actions visant à réduire la probabilité ou la gravité d’un risque.',
      exemple: 'Les campagnes de vaccination, le port du casque obligatoire.',
    },
    {
      terme: 'Mutualisation',
      definition: 'Principe de l’assurance qui consiste à regrouper de nombreux individus exposés à un même risque et à répartir entre eux le coût des dommages subis par quelques-uns.',
      exemple: '1 000 assurés versent 200 € chacun pour indemniser les 10 sinistrés de l’année.',
    },
    {
      terme: 'Diversification',
      definition: 'Répartition des risques sur des domaines, des territoires ou des placements différents, pour éviter que tous les dommages surviennent en même temps.',
      exemple: 'Un assureur couvre des habitations dans plusieurs régions pour ne pas être ruiné par une seule inondation.',
    },
    {
      terme: 'Assurance',
      definition: 'Contrat par lequel un assureur s’engage, en échange d’une prime, à indemniser l’assuré si un risque défini se réalise.',
      exemple: 'Une assurance habitation qui rembourse les dégâts d’un incendie.',
    },
    {
      terme: 'Prime (ou cotisation) d’assurance',
      definition: 'Somme versée par l’assuré à l’assureur en échange de la couverture d’un risque ; la prime pure correspond au coût moyen attendu du risque.',
      exemple: 'Probabilité 1 %, dommage 20 000 € : prime pure de 200 €.',
    },
    {
      terme: 'Mutuelle',
      definition: 'Organisme d’assurance à but non lucratif, géré par ses adhérents, qui pratique une solidarité entre eux (cotisations souvent indépendantes du risque individuel).',
      exemple: 'Une mutuelle qui rembourse les frais de santé non couverts par la Sécurité sociale.',
    },
    {
      terme: 'Société d’assurance',
      definition: 'Entreprise à but lucratif qui vend des contrats d’assurance et fixe en général ses primes en fonction du niveau de risque de chaque assuré.',
      exemple: 'Un jeune conducteur paie une prime plus élevée.',
    },
    {
      terme: 'Aléa moral (en assurance)',
      definition: 'Modification du comportement de l’assuré après la signature du contrat, qui devient moins prudent parce qu’il est couvert.',
      exemple: 'Un assuré tous risques moins attentif à ses objets.',
    },
    {
      terme: 'Protection sociale',
      definition: 'Ensemble des mécanismes de prévoyance collective qui permettent aux individus de faire face financièrement aux conséquences des risques sociaux.',
      exemple: 'Les remboursements de soins, les pensions de retraite, les allocations chômage.',
    },
    {
      terme: 'Logique d’assurance',
      definition: 'Logique de protection sociale dans laquelle les prestations sont réservées à ceux qui ont cotisé et sont liées aux cotisations versées ; elle est financée par des cotisations sociales (modèle bismarckien).',
      exemple: 'La pension de retraite dépend des salaires et des trimestres cotisés.',
    },
    {
      terme: 'Logique d’assistance',
      definition: 'Logique de protection sociale dans laquelle des prestations, financées par l’impôt, sont versées aux personnes dans le besoin, sous conditions de ressources, sans contrepartie de cotisation.',
      exemple: 'Le revenu de solidarité active (RSA).',
    },
    {
      terme: 'Cotisations sociales',
      definition: 'Prélèvements obligatoires assis sur les salaires, versés par les employeurs et les salariés, qui ouvrent des droits aux prestations d’assurance sociale.',
      exemple: 'Les cotisations vieillesse prélevées sur la fiche de paie.',
    },
    {
      terme: 'Minima sociaux',
      definition: 'Prestations d’assistance qui garantissent un revenu minimal aux personnes aux ressources insuffisantes.',
      exemple: 'Le RSA, l’allocation de solidarité aux personnes âgées (minimum vieillesse).',
    },
    {
      terme: 'Solidarité horizontale',
      definition: 'Solidarité entre personnes exposées et non exposées à un risque, quel que soit leur revenu.',
      exemple: 'Les cotisations des bien-portants financent les soins des malades.',
    },
    {
      terme: 'Solidarité verticale',
      definition: 'Solidarité des ménages aisés vers les ménages modestes, réalisée par des prestations sous conditions de ressources financées par l’impôt.',
      exemple: 'Les aides au logement, plus élevées pour les ménages aux revenus faibles.',
    },
  ],

  auteurs: [
    {
      nom: 'Otto von Bismarck',
      dates: '1815-1898',
      idee: 'Chancelier allemand qui crée dans les années 1880 les premières assurances sociales obligatoires, financées par des cotisations sur les salaires (logique d’assurance).',
    },
    {
      nom: 'William Beveridge',
      dates: '1879-1963',
      idee: 'Son rapport de 1942 propose une protection sociale universelle, unifiée et uniforme, financée par l’impôt, pour libérer l’homme du besoin.',
      oeuvre: 'Rapport Beveridge (1942)',
    },
    {
      nom: 'Frank Knight',
      dates: '1885-1972',
      idee: 'Distingue le risque (probabilisable, donc assurable) de l’incertitude (non probabilisable).',
      oeuvre: 'Risk, Uncertainty and Profit (1921)',
    },
    {
      nom: 'Ulrich Beck',
      dates: '1944-2015',
      idee: 'Les sociétés modernes deviennent des « sociétés du risque » : elles produisent elles-mêmes des risques majeurs (technologiques, environnementaux).',
      oeuvre: 'La Société du risque (1986)',
    },
    {
      nom: 'Robert Castel',
      dates: '1933-2013',
      idee: 'La protection sociale a créé une « propriété sociale » qui protège les salariés ; sa fragilisation fait renaître l’insécurité sociale.',
      oeuvre: 'L’Insécurité sociale (2003)',
    },
  ],

  schemas: [
    {
      id: 'mutualisation',
      titre: 'Le principe de mutualisation',
      legende: 'Données fictives. 1 000 assurés exposés à un risque de 1 % versent chacun une prime pure de 200 € dans une caisse commune de 200 000 €, qui indemnise les 10 sinistrés à hauteur de 20 000 € chacun. Un risque rare et lourd devient une charge faible et certaine.',
    },
  ],

  pieges: [
    {
      erreur: 'Confondre risque et incertitude.',
      correction: 'Un **risque** est probabilisable (donc assurable) ; l’**incertitude** ne l’est pas.',
    },
    {
      erreur: 'Confondre mutualisation et diversification.',
      correction: '**Mutualisation** : beaucoup de personnes face au **même** risque se partagent les coûts. **Diversification** : répartir sur des risques **différents** qui ne surviennent pas en même temps.',
    },
    {
      erreur: '« La Sécurité sociale fonctionne comme une assurance privée. »',
      correction: 'Elle est **obligatoire** et ses cotisations ne dépendent pas du risque individuel (mais du revenu) : elle organise une **solidarité**.',
    },
    {
      erreur: 'Inverser logique d’assurance et logique d’assistance.',
      correction: 'Assurance = **cotisations**, prestations réservées aux **cotisants**. Assistance = **impôt**, prestations **sous conditions de ressources**.',
    },
    {
      erreur: 'Ne présenter que les effets positifs du partage des risques.',
      correction: 'Le programme demande aussi les **effets négatifs** : **aléa moral** (moindre prudence), et les réponses (franchise, bonus-malus).',
    },
    {
      erreur: 'Oublier la famille parmi les institutions de gestion des risques.',
      correction: 'La **solidarité familiale** reste importante (aide aux jeunes, aux parents âgés), et elle est inégale selon les milieux.',
    },
  ],

  synthese: {
    idees: [
      'Risques sociaux : maladie, accident, perte d’emploi, vieillesse ; perte de revenu ou hausse des dépenses.',
      'Exposition au risque inégale (catégorie sociale, emploi) ; attitude différente : perception, aversion, conduites à risque.',
      'Trois principes de gestion collective : prévention, mutualisation, diversification.',
      'Effets positifs du partage : bien-être, sécurité, incitation à innover ; effets négatifs : aléa moral (et sélection adverse).',
      'Institutions : famille, sociétés d’assurance (lucratives), mutuelles (non lucratives), pouvoirs publics.',
      'Protection sociale : logique d’assurance (cotisations, prestations contributives, Bismarck) et logique d’assistance (impôt, conditions de ressources, Beveridge).',
      'Solidarité collective : horizontale (bien-portants → malades) et verticale (aisés → modestes).',
    ],
    formules: [{ tex: '\\text{Prime pure} = \\text{probabilité} \\times \\text{montant du dommage}', legende: 'Exemple : 0,01 × 20 000 = 200 €' }],
    mecanismes: [
      ['Nombreux assurés', 'primes faibles et certaines', 'caisse commune', 'indemnisation des sinistrés'],
      ['Assurance complète', 'moins de prudence', 'aléa moral', 'franchise, bonus-malus'],
    ],
  },

  quiz: [
    {
      question: 'Lequel de ces événements n’est pas un risque social au sens du programme ?',
      choix: ['La maladie', 'La perte d’emploi', 'La vieillesse', 'Une hausse du prix des actions'],
      bonne: 3,
      explication: 'Les risques sociaux étudiés sont la maladie, l’accident, la perte d’emploi et la vieillesse.',
    },
    {
      question: 'La différence entre risque et incertitude (F. Knight) tient au fait que :',
      choix: [
        'Le risque est probabilisable, l’incertitude non',
        'L’incertitude est toujours plus grave',
        'Le risque ne concerne que les entreprises',
        'Il n’y a aucune différence',
      ],
      bonne: 0,
      explication: 'On peut assurer un risque car on peut estimer sa probabilité.',
    },
    {
      question: 'Les ouvriers sont davantage victimes d’accidents du travail que les cadres. Cela illustre :',
      choix: ['L’aversion au risque', 'Une exposition au risque inégale', 'La diversification', 'L’aléa moral'],
      bonne: 1,
      explication: 'Les conditions de travail exposent inégalement aux risques.',
    },
    {
      question: 'L’aversion au risque explique :',
      choix: ['Les conduites à risque', 'La demande d’assurance', 'Le chômage', 'L’inflation'],
      bonne: 1,
      explication: 'On préfère payer une prime certaine plutôt que risquer une perte lourde.',
    },
    {
      question: 'La vaccination relève du principe de :',
      choix: ['Mutualisation', 'Diversification', 'Prévention', 'Assistance'],
      bonne: 2,
      explication: 'Elle réduit la probabilité de tomber malade.',
    },
    {
      question: 'La mutualisation consiste à :',
      choix: [
        'Placer son épargne dans plusieurs entreprises',
        'Répartir entre de nombreux assurés le coût des dommages subis par quelques-uns',
        'Réduire la probabilité d’un risque',
        'Faire payer chacun selon son risque',
      ],
      bonne: 1,
      explication: 'Un risque lourd et rare devient une charge faible pour chacun.',
    },
    {
      question: '1 000 assurés, probabilité de sinistre 1 %, dommage 20 000 €. La prime pure est de :',
      choix: ['20 €', '200 €', '2 000 €', '20 000 €'],
      bonne: 1,
      explication: '0,01 × 20 000 = 200 € ; 1 000 × 200 = 200 000 € couvrent les 10 sinistres attendus.',
    },
    {
      question: 'Un assureur qui couvre des habitations dans plusieurs régions applique le principe de :',
      choix: ['Prévention', 'Diversification', 'Assistance', 'Aléa moral'],
      bonne: 1,
      explication: 'Les sinistres ne surviennent pas partout en même temps.',
    },
    {
      question: 'Quel est un effet positif du partage des risques ?',
      choix: ['L’aléa moral', 'L’incitation à innover et à entreprendre', 'La sélection adverse', 'La hausse des sinistres'],
      bonne: 1,
      explication: 'Protégé contre les conséquences d’un échec, on ose davantage prendre des risques productifs.',
    },
    {
      question: 'Le bonus-malus en assurance automobile vise à limiter :',
      choix: ['La mutualisation', 'L’aléa moral', 'La solidarité', 'La prévention'],
      bonne: 1,
      explication: 'L’assuré qui a des accidents paie plus : il reste incité à la prudence.',
    },
    {
      question: 'Une mutuelle se distingue d’une société d’assurance parce qu’elle :',
      choix: ['Est à but lucratif', 'Est à but non lucratif et gérée par ses adhérents', 'Est un service de l’État', 'Ne rembourse rien'],
      bonne: 1,
      explication: 'Ses cotisations sont souvent indépendantes du risque individuel.',
    },
    {
      question: 'Dans la logique d’assurance de la protection sociale :',
      choix: [
        'Les prestations sont financées par l’impôt et versées sous conditions de ressources',
        'Les prestations sont réservées aux cotisants et liées aux cotisations',
        'Tout le monde reçoit la même somme',
        'Les primes dépendent de l’état de santé',
      ],
      bonne: 1,
      explication: 'Exemple : la retraite de base dépend des salaires et des trimestres cotisés.',
    },
    {
      question: 'Le RSA relève de :',
      choix: ['La logique d’assurance', 'La logique d’assistance', 'L’assurance privée', 'La mutualisation familiale'],
      bonne: 1,
      explication: 'C’est un minimum social financé par l’impôt, versé sous conditions de ressources.',
    },
    {
      question: 'Les cotisations des bien-portants qui financent les soins des malades illustrent :',
      choix: ['La solidarité verticale', 'La solidarité horizontale', 'L’aléa moral', 'La diversification'],
      bonne: 1,
      explication: 'Elle va des non-exposés vers les exposés, quel que soit le revenu.',
    },
    {
      question: 'Le rapport Beveridge (1942) propose une protection sociale :',
      choix: [
        'Réservée aux salariés cotisants',
        'Universelle et financée par l’impôt',
        'Entièrement privée',
        'Gérée par les familles',
      ],
      bonne: 1,
      explication: 'Universalité, unité, uniformité : les « trois U ».',
    },
    {
      question: 'La Sécurité sociale française a été créée en :',
      choix: ['1880', '1945', '1968', '1991'],
      bonne: 1,
      explication: 'Par les ordonnances d’octobre 1945.',
    },
  ],
};
