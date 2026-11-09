import type { Chapitre } from '../types';

/**
 * Chapitre : Qu’est-ce que la monnaie et comment est-elle créée ?
 */
export const monnaie: Chapitre = {
  id: 'monnaie',
  titre: 'Qu’est-ce que la monnaie et comment est-elle créée ?',
  titreCourt: 'Monnaie et création monétaire',
  domaine: 'Science économique',
  objectifs: [
    'Connaître les fonctions et les formes de la monnaie.',
    'Comprendre comment le crédit bancaire contribue à la création monétaire, à partir des bilans simplifiés d’une entreprise et d’une banque.',
    'Comprendre le rôle de la banque centrale, notamment par le pilotage du taux d’intérêt à court terme sur le marché monétaire, et ses effets sur les prix et l’activité.',
  ],

  essentiel: {
    problematique:
      'La monnaie semble aller de soi : on la gagne, on la dépense. Mais à quoi sert-elle exactement, sous quelles formes existe-t-elle, et qui la crée, puisque l’essentiel n’est ni frappé ni imprimé ?',
    parties: [
      {
        titre: 'Les fonctions et les formes de la monnaie',
        blocs: [
          {
            type: 'texte',
            texte:
              'La **monnaie** est un actif accepté par tous comme moyen de paiement, qui permet d’acquérir des biens et des services et de régler des dettes. Depuis Aristote, on lui reconnaît trois **fonctions** :',
          },
          {
            type: 'liste',
            items: [
              '**Intermédiaire des échanges** : elle évite la « double coïncidence des besoins » du troc (trouver quelqu’un qui a ce que je veux et qui veut ce que j’ai).',
              '**Unité de compte** : elle permet d’exprimer la valeur de tous les biens dans une même unité et donc de les comparer (avec 100 biens, on aurait 4 950 rapports d’échange en troc ; avec la monnaie, 100 prix).',
              '**Réserve de valeur** : elle permet de reporter dans le temps l’utilisation de son pouvoir d’achat, à condition que l’inflation ne l’érode pas trop.',
            ],
          },
          {
            type: 'texte',
            texte:
              'La monnaie a pris des **formes** successives, de plus en plus dématérialisées : la **monnaie marchandise** (bétail, sel, coquillages), la **monnaie métallique** (pièces d’or ou d’argent, dont la valeur dépendait du métal), la **monnaie fiduciaire** (billets et pièces actuels, dont la valeur repose sur la confiance, *fiducia* en latin) et la **monnaie scripturale** (les soldes des comptes bancaires, qui circulent par simple jeu d’écritures). Aujourd’hui, la monnaie scripturale représente l’essentiel de la masse monétaire de la zone euro ; billets et pièces n’en sont qu’une petite partie.',
          },
          {
            type: 'encadre',
            titre: 'Monnaie et moyens de paiement',
            texte:
              'Le chèque, la carte bancaire, le virement ou le paiement sans contact ne sont pas de la monnaie : ce sont des **instruments** qui font circuler la monnaie scripturale d’un compte à un autre. La monnaie, c’est le dépôt sur le compte.',
          },
          {
            type: 'texte',
            texte:
              'La **masse monétaire** est la quantité de monnaie en circulation dans une économie. La Banque centrale européenne la mesure par des **agrégats monétaires** emboîtés, du plus liquide au moins liquide : **M1** (billets, pièces et dépôts à vue), **M2** (M1 plus les dépôts à terme jusqu’à 2 ans et les dépôts remboursables avec un préavis jusqu’à 3 mois, comme les livrets d’épargne) et **M3** (M2 plus certains titres de court terme facilement mobilisables).',
          },
          {
            type: 'encadre',
            titre: 'Et les cryptoactifs ?',
            texte:
              'Le bitcoin remplit mal les trois fonctions : son cours très instable en fait une mauvaise réserve de valeur et une mauvaise unité de compte, et il est peu accepté comme moyen de paiement. Il n’a pas cours légal dans la zone euro. Les banques centrales étudient en revanche des monnaies numériques de banque centrale (projet d’euro numérique).',
          },
        ],
      },
      {
        titre: 'La création monétaire par le crédit bancaire',
        blocs: [
          {
            type: 'texte',
            texte:
              'Les **banques commerciales** créent l’essentiel de la monnaie en circulation. Lorsqu’une banque accorde un crédit, elle ne prête pas l’argent d’un autre client : elle **crédite le compte** de l’emprunteur d’un montant nouveau, par une simple écriture. On dit que « **les crédits font les dépôts** ». La monnaie est créée *ex nihilo* (à partir de rien), en contrepartie d’une créance sur l’emprunteur.',
          },
          {
            type: 'texte',
            texte: 'Exemple : la banque B accorde un crédit de 10 000 € à l’entreprise E. Voici les bilans simplifiés juste après l’opération.',
          },
          {
            type: 'tableau',
            titre: 'Bilan simplifié de la banque B (variation)',
            entetes: ['Actif (ce que la banque possède)', 'Passif (ce que la banque doit)'],
            lignes: [['Créance sur l’entreprise E : + 10 000 €', 'Dépôt à vue de l’entreprise E : + 10 000 €']],
          },
          {
            type: 'tableau',
            titre: 'Bilan simplifié de l’entreprise E (variation)',
            entetes: ['Actif', 'Passif'],
            lignes: [['Dépôt à vue à la banque B (monnaie) : + 10 000 €', 'Dette envers la banque B : + 10 000 €']],
          },
          {
            type: 'texte',
            texte:
              'L’entreprise dispose de 10 000 € de monnaie scripturale qui n’existaient pas auparavant : la masse monétaire a augmenté de 10 000 €. Quand l’entreprise **rembourse** son emprunt, l’opération inverse se produit : le dépôt et la créance disparaissent, la monnaie est **détruite**. Si elle rembourse 2 000 €, la masse monétaire diminue de 2 000 €.',
          },
          { type: 'schema', id: 'creation-monetaire' },
          {
            type: 'mecanisme',
            titre: 'Création et destruction de monnaie',
            etapes: [
              'La banque accorde un crédit',
              'Elle inscrit un dépôt nouveau sur le compte de l’emprunteur',
              'La masse monétaire augmente',
              'Au remboursement, le dépôt est annulé : la monnaie est détruite',
            ],
          },
          {
            type: 'texte',
            texte:
              'Les banques créent aussi de la monnaie lorsqu’elles achètent des titres ou des devises, en créditant le compte du vendeur. La création monétaire est cependant **limitée** : la banque doit trouver des emprunteurs solvables et rentables, respecter des règles prudentielles (fonds propres minimaux), et surtout se procurer de la **monnaie centrale**, car ses clients retirent des billets et effectuent des paiements vers d’autres banques.',
          },
        ],
      },
      {
        titre: 'La banque centrale et la politique monétaire',
        blocs: [
          {
            type: 'texte',
            texte:
              'La **banque centrale** (Banque centrale européenne pour la zone euro, avec les banques centrales nationales comme la Banque de France) est la « banque des banques ». Elle seule émet la **monnaie centrale** : les billets et les avoirs que les banques détiennent sur leur compte auprès d’elle (les réserves). Les banques en ont besoin pour trois raisons : fournir des billets à leurs clients, régler les paiements entre banques et constituer des **réserves obligatoires** (1 % de certains dépôts dans la zone euro).',
          },
          {
            type: 'texte',
            texte:
              'Les banques s’échangent de la monnaie centrale sur le **marché interbancaire**, partie du **marché monétaire** (marché des capitaux à court terme). Elles peuvent aussi en obtenir auprès de la banque centrale, qui leur prête contre des titres en garantie (**refinancement**). La banque centrale fixe les **taux directeurs** : le taux auquel elle prête aux banques et celui auquel elle rémunère leurs dépôts. Ces taux guident le taux du marché interbancaire, puis l’ensemble des taux d’intérêt.',
          },
          {
            type: 'texte',
            texte:
              'L’objectif principal de la BCE est la **stabilité des prix**, définie comme une inflation de **2 % à moyen terme**. En pilotant les taux courts, la banque centrale influence le coût du crédit, donc la création monétaire, la demande, l’activité et les prix : c’est la **politique monétaire**.',
          },
          { type: 'schema', id: 'transmission' },
          {
            type: 'mecanisme',
            titre: 'Politique monétaire restrictive (contre l’inflation)',
            etapes: [
              'La banque centrale relève ses taux directeurs',
              'Les taux interbancaires puis les taux des crédits augmentent',
              'Les ménages et les entreprises empruntent moins : moins de monnaie créée',
              'La demande ralentit : l’inflation recule, mais l’activité aussi',
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Politique monétaire expansive (contre la récession)',
            etapes: [
              'La banque centrale baisse ses taux directeurs',
              'Le crédit devient moins cher',
              'La consommation à crédit et l’investissement augmentent',
              'L’activité et l’emploi progressent ; les prix peuvent augmenter',
            ],
          },
          {
            type: 'encadre',
            titre: 'Un exemple récent',
            texte:
              'Face à une inflation supérieure à 10 % sur un an dans la zone euro à l’automne 2022 (Eurostat), la BCE a relevé ses taux à partir de juillet 2022 : son taux de dépôt est passé de −0,5 % à 4 % en septembre 2023. L’inflation a ensuite reflué, et la BCE a commencé à baisser ses taux en juin 2024.',
          },
          {
            type: 'texte',
            texte:
              'La politique monétaire est un **arbitrage** : lutter contre l’inflation freine l’activité, soutenir l’activité peut nourrir l’inflation. Ses effets passent par les comportements d’emprunt, qui ne réagissent pas toujours : quand les taux sont déjà proches de zéro, une baisse supplémentaire a peu d’effet (d’où les politiques « non conventionnelles » de rachats massifs de titres).',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Monnaie',
      definition: 'Actif accepté par tous comme moyen de paiement, qui permet d’acquérir des biens et des services et d’éteindre des dettes ; elle remplit trois fonctions : intermédiaire des échanges, unité de compte, réserve de valeur.',
      exemple: 'Les euros sur un compte courant.',
    },
    {
      terme: 'Intermédiaire des échanges',
      definition: 'Fonction de la monnaie qui consiste à faciliter les échanges en les décomposant en deux opérations (vente puis achat), ce qui supprime la double coïncidence des besoins du troc.',
      exemple: 'Un professeur de guitare n’a pas besoin de trouver un boulanger qui veut apprendre la guitare.',
    },
    {
      terme: 'Unité de compte',
      definition: 'Fonction de la monnaie qui consiste à exprimer la valeur de tous les biens dans une même unité, ce qui permet de les comparer.',
      exemple: 'Un vélo à 300 € vaut autant que 100 places de cinéma à 3 €.',
    },
    {
      terme: 'Réserve de valeur',
      definition: 'Fonction de la monnaie qui permet de conserver un pouvoir d’achat pour l’utiliser plus tard.',
      exemple: 'Garder 200 € pour s’acheter un téléphone dans six mois ; l’inflation réduit cependant ce pouvoir d’achat.',
    },
    {
      terme: 'Troc',
      definition: 'Échange direct d’un bien contre un autre bien, sans recours à la monnaie.',
      exemple: 'Échanger des cours de mathématiques contre des cours d’anglais.',
    },
    {
      terme: 'Monnaie fiduciaire',
      definition: 'Monnaie composée des billets et des pièces, dont la valeur repose sur la confiance des utilisateurs et non sur la valeur de leur support.',
      exemple: 'Un billet de 20 € dont le papier ne vaut presque rien.',
    },
    {
      terme: 'Monnaie scripturale',
      definition: 'Monnaie constituée des soldes des comptes bancaires (dépôts à vue), qui circule par jeu d’écritures grâce aux moyens de paiement (carte, virement, chèque).',
      exemple: 'Le salaire versé par virement sur un compte courant.',
    },
    {
      terme: 'Moyen de paiement',
      definition: 'Instrument qui permet de faire circuler la monnaie scripturale d’un compte à un autre ; ce n’est pas de la monnaie en lui-même.',
      exemple: 'Une carte bancaire, un chèque, un virement.',
    },
    {
      terme: 'Masse monétaire',
      definition: 'Quantité totale de monnaie en circulation dans une économie à un moment donné, mesurée par des agrégats monétaires.',
      exemple: 'La BCE suit l’évolution de M3 dans la zone euro.',
    },
    {
      terme: 'Agrégats monétaires',
      definition: 'Indicateurs emboîtés de la masse monétaire classés selon la liquidité : M1 (billets, pièces, dépôts à vue), M2 (M1 + dépôts à terme ≤ 2 ans et livrets), M3 (M2 + titres de court terme).',
      exemple: 'Un livret A fait partie de M2 mais pas de M1.',
    },
    {
      terme: 'Liquidité',
      definition: 'Capacité d’un actif à être transformé rapidement en moyen de paiement, sans perte de valeur.',
      exemple: 'Un billet est parfaitement liquide ; un appartement l’est très peu.',
    },
    {
      terme: 'Création monétaire',
      definition: 'Opération par laquelle une banque augmente la masse monétaire, principalement en accordant un crédit, ce qui crée un dépôt nouveau sur le compte de l’emprunteur.',
      exemple: 'Un crédit de 10 000 € accordé à une entreprise crée 10 000 € de monnaie scripturale.',
    },
    {
      terme: 'Destruction monétaire',
      definition: 'Diminution de la masse monétaire qui se produit lorsqu’un emprunteur rembourse son crédit : le dépôt et la créance correspondants disparaissent.',
      exemple: 'Le remboursement de 2 000 € détruit 2 000 € de monnaie.',
    },
    {
      terme: 'Bilan',
      definition: 'Document comptable qui présente, à une date donnée, ce que possède un agent (actif) et ce qu’il doit (passif) ; les deux colonnes sont égales.',
      exemple: 'Au passif d’une banque figurent les dépôts de ses clients ; à son actif, les crédits accordés.',
    },
    {
      terme: 'Banque commerciale',
      definition: 'Établissement de crédit qui collecte des dépôts, accorde des crédits et gère les moyens de paiement de ses clients ; c’est elle qui crée l’essentiel de la monnaie.',
      exemple: 'Une banque de réseau qui accorde des crédits immobiliers.',
    },
    {
      terme: 'Banque centrale',
      definition: 'Institution qui émet la monnaie centrale, refinance les banques, conduit la politique monétaire et veille à la stabilité du système financier.',
      exemple: 'La Banque centrale européenne, avec la Banque de France.',
    },
    {
      terme: 'Monnaie centrale',
      definition: 'Monnaie émise par la banque centrale : billets et réserves des banques sur leur compte auprès de la banque centrale.',
      exemple: 'Une banque a besoin de monnaie centrale pour approvisionner ses distributeurs de billets.',
    },
    {
      terme: 'Marché interbancaire',
      definition: 'Compartiment du marché monétaire sur lequel les banques se prêtent et s’empruntent de la monnaie centrale à court terme.',
      exemple: 'Une banque prête pour une nuit ses réserves excédentaires à une autre banque.',
    },
    {
      terme: 'Marché monétaire',
      definition: 'Marché des capitaux à court terme (moins d’un an) sur lequel interviennent les banques, la banque centrale et d’autres grands agents.',
      exemple: 'Le marché où se forme le taux à un jour (€STR) dans la zone euro.',
    },
    {
      terme: 'Refinancement',
      definition: 'Opération par laquelle une banque obtient de la monnaie centrale auprès de la banque centrale, en échange de titres apportés en garantie et moyennant un taux d’intérêt.',
      exemple: 'Une banque emprunte à la BCE pour une semaine au taux de refinancement principal.',
    },
    {
      terme: 'Taux directeurs',
      definition: 'Taux d’intérêt fixés par la banque centrale pour ses opérations avec les banques ; ils orientent les taux du marché monétaire puis l’ensemble des taux d’intérêt.',
      exemple: 'La BCE fixe le taux de dépôt, le taux de refinancement principal et le taux de prêt marginal.',
    },
    {
      terme: 'Politique monétaire',
      definition: 'Action de la banque centrale sur les conditions de financement de l’économie (taux d’intérêt, quantité de monnaie centrale) pour atteindre ses objectifs, d’abord la stabilité des prix.',
      exemple: 'La BCE a relevé ses taux entre 2022 et 2023 pour lutter contre l’inflation.',
    },
    {
      terme: 'Inflation',
      definition: 'Hausse durable et généralisée du niveau général des prix, qui réduit le pouvoir d’achat de la monnaie ; on la mesure par la variation de l’indice des prix à la consommation.',
      exemple: 'Avec 2 % d’inflation par an, un panier de 100 € en coûte 102 un an plus tard.',
    },
    {
      terme: 'Stabilité des prix',
      definition: 'Objectif principal de la BCE, défini comme une inflation de 2 % à moyen terme.',
      exemple: 'Une inflation durablement à 5 % pousse la BCE à relever ses taux.',
    },
  ],

  auteurs: [
    {
      nom: 'Aristote',
      dates: 'IVe siècle av. J.-C.',
      idee: 'Distingue les fonctions de la monnaie : mesure de la valeur des biens, intermédiaire des échanges et réserve pour les échanges futurs.',
    },
    {
      nom: 'Irving Fisher',
      dates: '1867-1947',
      idee: 'Théorie quantitative de la monnaie : si la masse monétaire augmente plus vite que la production, les prix augmentent (MV = PT).',
    },
    {
      nom: 'Milton Friedman',
      dates: '1912-2006',
      idee: '« L’inflation est toujours et partout un phénomène monétaire » : la banque centrale doit contrôler la croissance de la masse monétaire.',
    },
    {
      nom: 'John Maynard Keynes',
      dates: '1883-1946',
      idee: 'La monnaie n’est pas neutre : la baisse des taux d’intérêt peut stimuler l’investissement et l’activité, sauf en « trappe à liquidité ».',
    },
  ],

  schemas: [
    {
      id: 'creation-monetaire',
      titre: 'Les crédits font les dépôts',
      legende: 'Quand la banque accorde un crédit de 10 000 €, elle inscrit à son actif une créance et à son passif un dépôt du même montant : la masse monétaire augmente de 10 000 €. Au remboursement, les deux écritures disparaissent : la monnaie est détruite.',
    },
    {
      id: 'transmission',
      titre: 'Comment une hausse des taux directeurs agit sur l’économie',
      legende: 'La banque centrale agit sur le prix de la monnaie centrale ; la hausse se transmet aux taux interbancaires, puis aux taux des crédits, ce qui freine la création monétaire et la demande. Une baisse des taux produit les effets inverses.',
    },
  ],

  pieges: [
    {
      erreur: '« Les banques prêtent l’argent déposé par les épargnants. »',
      correction: 'Les banques créent la monnaie qu’elles prêtent : **les crédits font les dépôts**. Elles ont en revanche besoin de monnaie centrale pour les retraits et les paiements entre banques.',
    },
    {
      erreur: '« La monnaie est créée par l’État, qui imprime des billets. »',
      correction: 'Les billets sont émis par la **banque centrale**, et ils ne représentent qu’une petite partie de la masse monétaire. L’essentiel est créé par les **banques commerciales** sous forme scripturale.',
    },
    {
      erreur: '« La carte bancaire est une forme de monnaie. »',
      correction: 'C’est un **moyen de paiement** : elle fait circuler la monnaie scripturale (le dépôt).',
    },
    {
      erreur: 'Oublier la destruction monétaire.',
      correction: 'Le remboursement d’un crédit **détruit** de la monnaie. La masse monétaire augmente quand les nouveaux crédits dépassent les remboursements.',
    },
    {
      erreur: 'Inverser actif et passif dans le bilan de la banque.',
      correction: 'Le crédit accordé est une **créance** : il est à l’**actif** de la banque. Le dépôt du client est une **dette** de la banque : il est au **passif**.',
    },
    {
      erreur: '« La BCE fixe directement les taux des crédits immobiliers. »',
      correction: 'Elle fixe ses **taux directeurs** ; les banques répercutent ces variations sur leurs propres taux, avec un délai et une marge.',
    },
  ],

  synthese: {
    idees: [
      'Trois fonctions : intermédiaire des échanges, unité de compte, réserve de valeur.',
      'Formes : marchandise, métallique, fiduciaire (billets, pièces), scripturale (dépôts) ; les moyens de paiement font circuler la monnaie scripturale.',
      'Masse monétaire mesurée par les agrégats M1 ⊂ M2 ⊂ M3, selon la liquidité.',
      'Les banques commerciales créent la monnaie en accordant des crédits : « les crédits font les dépôts » ; le remboursement détruit la monnaie.',
      'Bilan de la banque : créance à l’actif, dépôt au passif. Bilan de l’entreprise : dépôt (monnaie) à l’actif, dette au passif.',
      'Les banques ont besoin de monnaie centrale (billets, paiements interbancaires, réserves obligatoires), qu’elles obtiennent sur le marché interbancaire ou auprès de la banque centrale.',
      'La banque centrale pilote le taux à court terme par ses taux directeurs ; objectif de la BCE : 2 % d’inflation à moyen terme.',
      'Hausse des taux → crédit ↓ → demande ↓ → inflation ↓ et activité ↓ ; baisse des taux → effets inverses.',
    ],
    mecanismes: [
      ['Crédit accordé', 'dépôt nouveau', 'masse monétaire ↑'],
      ['Remboursement', 'dépôt annulé', 'masse monétaire ↓'],
      ['Taux directeurs ↑', 'taux des crédits ↑', 'crédit et demande ↓', 'inflation ↓, activité ↓'],
    ],
  },

  quiz: [
    {
      question: 'Quelle fonction de la monnaie permet de comparer la valeur de biens différents ?',
      choix: ['Intermédiaire des échanges', 'Unité de compte', 'Réserve de valeur', 'Moyen de paiement'],
      bonne: 1,
      explication: 'Exprimer tous les prix dans une même unité permet de les comparer.',
    },
    {
      question: 'Quelle fonction de la monnaie est la plus affectée par une forte inflation ?',
      choix: ['Unité de compte', 'Réserve de valeur', 'Intermédiaire des échanges', 'Aucune'],
      bonne: 1,
      explication: 'Si les prix montent vite, la monnaie conservée perd son pouvoir d’achat.',
    },
    {
      question: 'Les billets et les pièces constituent :',
      choix: ['La monnaie scripturale', 'La monnaie fiduciaire', 'La monnaie marchandise', 'L’agrégat M3 uniquement'],
      bonne: 1,
      explication: 'Leur valeur repose sur la confiance (fiducia) et non sur leur support.',
    },
    {
      question: 'Une carte bancaire est :',
      choix: ['De la monnaie fiduciaire', 'De la monnaie scripturale', 'Un moyen de paiement', 'Un agrégat monétaire'],
      bonne: 2,
      explication: 'Elle permet de transférer la monnaie scripturale ; la monnaie, c’est le dépôt sur le compte.',
    },
    {
      question: 'Aujourd’hui, l’essentiel de la masse monétaire de la zone euro est constitué de :',
      choix: ['Pièces', 'Billets', 'Monnaie scripturale', 'Or'],
      bonne: 2,
      explication: 'Les dépôts bancaires représentent la plus grande partie de la masse monétaire.',
    },
    {
      question: 'Un livret d’épargne fait partie de :',
      choix: ['M1 seulement', 'M2 (et M3) mais pas M1', 'M3 seulement', 'Aucun agrégat'],
      bonne: 1,
      explication: 'M2 ajoute à M1 les dépôts à terme courts et les dépôts avec préavis (livrets). M3 inclut M2.',
    },
    {
      question: 'Quand une banque accorde un crédit de 10 000 € à une entreprise :',
      choix: [
        'Elle prête l’épargne d’autres clients',
        'Elle crée 10 000 € de monnaie en créditant le compte de l’entreprise',
        'Elle doit d’abord emprunter 10 000 € à la BCE',
        'La masse monétaire ne change pas',
      ],
      bonne: 1,
      explication: 'Les crédits font les dépôts : un dépôt nouveau est créé par écriture.',
    },
    {
      question: 'Dans le bilan de la banque, le crédit accordé à l’entreprise figure :',
      choix: ['Au passif, comme un dépôt', 'À l’actif, comme une créance', 'Au passif, comme une dette', 'Nulle part'],
      bonne: 1,
      explication: 'La banque possède une créance sur l’entreprise (actif) ; le dépôt de l’entreprise est une dette de la banque (passif).',
    },
    {
      question: 'Dans le bilan de l’entreprise, le dépôt reçu figure :',
      choix: ['À l’actif', 'Au passif', 'Dans le chiffre d’affaires', 'Dans les capitaux propres'],
      bonne: 0,
      explication: 'C’est de la monnaie que l’entreprise possède ; en face, au passif, figure sa dette envers la banque.',
    },
    {
      question: 'Une banque accorde 10 000 € de crédits ; dans le même temps, d’autres clients remboursent 2 000 €. La masse monétaire :',
      choix: ['Augmente de 12 000 €', 'Augmente de 8 000 €', 'Augmente de 10 000 €', 'Diminue de 2 000 €'],
      bonne: 1,
      explication: '10 000 € créés, 2 000 € détruits : +8 000 €.',
    },
    {
      question: 'Pourquoi les banques ont-elles besoin de monnaie centrale ?',
      choix: [
        'Pour payer leurs salariés uniquement',
        'Pour fournir des billets, régler les paiements entre banques et constituer des réserves obligatoires',
        'Pour accorder des crédits aux États',
        'Elles n’en ont pas besoin',
      ],
      bonne: 1,
      explication: 'Ce sont les trois « fuites » qui obligent les banques à se procurer de la monnaie centrale.',
    },
    {
      question: 'Le marché interbancaire est le marché sur lequel :',
      choix: ['Les ménages achètent des actions', 'Les banques s’échangent de la monnaie centrale', 'L’État vend ses obligations aux ménages', 'On échange des devises au guichet'],
      bonne: 1,
      explication: 'C’est un compartiment du marché monétaire réservé aux banques.',
    },
    {
      question: 'L’objectif principal de la BCE est :',
      choix: ['Le plein-emploi', 'La stabilité des prix (inflation de 2 % à moyen terme)', 'L’équilibre budgétaire', 'Un euro fort'],
      bonne: 1,
      explication: 'Les traités européens lui donnent pour mission prioritaire la stabilité des prix.',
    },
    {
      question: 'Si la BCE relève ses taux directeurs, on peut s’attendre à :',
      choix: [
        'Une hausse du crédit et de l’inflation',
        'Une baisse du crédit, de la demande et de l’inflation',
        'Une baisse des taux des crédits immobiliers',
        'Aucun effet sur l’activité',
      ],
      bonne: 1,
      explication: 'Le crédit coûte plus cher : on emprunte moins, la demande ralentit, les prix augmentent moins vite (et l’activité aussi ralentit).',
    },
    {
      question: 'Une politique monétaire expansive consiste à :',
      choix: ['Relever les taux directeurs', 'Baisser les taux directeurs', 'Augmenter les impôts', 'Réduire les dépenses publiques'],
      bonne: 1,
      explication: 'La baisse des taux rend le crédit moins cher et soutient l’activité.',
    },
    {
      question: 'Entre juillet 2022 et septembre 2023, la BCE a relevé ses taux pour :',
      choix: ['Lutter contre la déflation', 'Lutter contre une inflation élevée', 'Relancer le crédit', 'Financer les États'],
      bonne: 1,
      explication: 'L’inflation de la zone euro avait dépassé 10 % sur un an à l’automne 2022 ; la hausse des taux visait à la faire refluer.',
    },
  ],
};
