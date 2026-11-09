import type { Chapitre } from '../types';

export const entreprises: Chapitre = {
  id: 'entreprises',
  titre: 'Comment les entreprises sont-elles organisées et gouvernées ?',
  titreCourt: 'Organisation des entreprises',
  domaine: 'Regards croisés',
  objectifs: [
    'Comprendre le cycle de vie d’une entreprise (création, croissance, changement de statut juridique, disparition).',
    'Connaître la diversité des figures de l’entrepreneur : par le statut (entrepreneur individuel, micro-entrepreneur, chef d’entreprise) et par la fonction (entrepreneur-innovateur, manager, actionnaire).',
    'Comprendre les notions de gouvernance, d’autorité et de centralisation / décentralisation des décisions.',
    'Comprendre que l’entreprise est un lieu de relations sociales (coopération, hiérarchie, conflit) entre parties prenantes (salariés, managers, actionnaires, coopérateurs).',
  ],

  essentiel: {
    problematique:
      'Une entreprise est à la fois une organisation qui produit, un lieu de pouvoir et une communauté humaine. Qui la dirige, qui décide, et comment s’articulent la coopération et les conflits entre ceux qui y participent ?',
    parties: [
      {
        titre: 'Le cycle de vie des entreprises et la diversité des entrepreneurs',
        blocs: [
          {
            type: 'texte',
            texte:
              'Une **entreprise** est une organisation qui produit des biens ou des services marchands, en combinant des facteurs de production (travail, capital), en vue de les vendre. Les entreprises ont un **cycle de vie** : elles naissent, se développent, changent de forme et peuvent disparaître.',
          },
          { type: 'schema', id: 'cycle-vie' },
          {
            type: 'liste',
            items: [
              '**Création** : un projet, des financements (épargne personnelle, prêt bancaire, investisseurs), le choix d’un statut juridique et l’immatriculation.',
              '**Croissance** : **interne** (investissements, embauches, nouveaux produits) ou **externe** (rachat d’autres entreprises, fusions).',
              '**Changement de statut juridique** : une entreprise individuelle devient une société (SARL, SAS) pour accueillir des associés, lever des capitaux ou limiter les risques ; une grande société peut s’introduire en Bourse (SA cotée).',
              '**Disparition** : cessation volontaire (départ à la retraite sans repreneur), **défaillance** (incapacité à payer ses dettes, pouvant mener à une liquidation judiciaire), ou absorption par une autre entreprise.',
            ],
          },
          {
            type: 'texte',
            texte:
              'Les **figures de l’entrepreneur** sont diverses. Selon le **statut juridique**, on distingue l’**entrepreneur individuel**, qui exerce seul en son nom propre (depuis 2022, son patrimoine personnel est en principe séparé de son patrimoine professionnel), le **micro-entrepreneur**, entrepreneur individuel qui bénéficie d’un régime simplifié (formalités allégées, cotisations proportionnelles au chiffre d’affaires, chiffre d’affaires plafonné), et le **chef d’entreprise** qui dirige une société dotée de la personnalité morale (SARL, SAS, SA).',
          },
          {
            type: 'tableau',
            titre: 'Les figures de l’entrepreneur selon leur fonction',
            entetes: ['Figure', 'Rôle', 'Exemple'],
            lignes: [
              ['Entrepreneur-innovateur', 'Introduit une innovation (produit, procédé, organisation, marché) et prend le risque de la lancer', 'Fondatrice d’une start-up qui crée un nouveau service'],
              ['Manager', 'Dirigeant, souvent salarié, qui gère l’entreprise au quotidien sans en être propriétaire', 'Directeur général nommé par le conseil d’administration'],
              ['Actionnaire', 'Propriétaire d’une partie du capital, qui apporte des fonds, supporte le risque, perçoit des dividendes et vote en assemblée générale', 'Un fonds d’investissement, un salarié actionnaire'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Pour J. Schumpeter, l’entrepreneur est d’abord un **innovateur** qui bouscule les routines. Dans les grandes sociétés, A. Berle et G. Means (1932) montrent une **séparation entre la propriété** (les actionnaires, nombreux et dispersés) **et le pouvoir** (les managers) ; A. Chandler parle de la « main visible » des managers.',
          },
        ],
      },
      {
        titre: 'Gouvernance, autorité et organisation des décisions',
        blocs: [
          {
            type: 'texte',
            texte:
              'La **gouvernance d’entreprise** désigne l’ensemble des règles, des organes et des pratiques qui déterminent comment l’entreprise est dirigée et contrôlée, et comment le pouvoir est réparti entre ses acteurs. Dans une société anonyme, l’**assemblée générale** des actionnaires élit le **conseil d’administration**, qui nomme et contrôle la **direction générale**.',
          },
          {
            type: 'texte',
            texte:
              'La séparation entre propriété et pouvoir crée un risque de **conflit d’intérêts** : les managers peuvent poursuivre leurs propres objectifs (prestige, taille de l’entreprise, rémunération) au détriment de ceux des actionnaires (le rendement). La **gouvernance actionnariale** cherche à aligner les managers sur les actionnaires (rémunération en actions, contrôle par le conseil). La **gouvernance partenariale** considère que l’entreprise doit tenir compte de toutes ses **parties prenantes**. En France, la loi PACTE (2019) permet aux sociétés d’adopter une « raison d’être » et de devenir **sociétés à mission**.',
          },
          {
            type: 'texte',
            texte:
              'L’**autorité** est le pouvoir reconnu comme **légitime** de donner des ordres et d’être obéi. M. Weber distingue trois sources de légitimité : la tradition, le charisme du chef et la règle légale-rationnelle (la fonction occupée dans une organisation bureaucratique). Dans l’entreprise, l’autorité s’exerce par la **hiérarchie** : la chaîne des responsabilités, de la direction aux exécutants.',
          },
          {
            type: 'tableau',
            titre: 'Centraliser ou décentraliser les décisions ?',
            entetes: ['', 'Centralisation', 'Décentralisation'],
            lignes: [
              ['Principe', 'Les décisions sont prises au sommet de la hiérarchie', 'Une partie des décisions est déléguée aux échelons inférieurs (filiales, équipes)'],
              ['Avantages', 'Cohérence, contrôle, rapidité pour les décisions stratégiques', 'Réactivité, adaptation au terrain, motivation et autonomie des salariés'],
              ['Limites', 'Lenteur de remontée de l’information, faible initiative', 'Risque d’incohérence, coordination plus difficile'],
              ['Exemple', 'Organisation taylorienne d’une usine', 'Magasins d’une chaîne qui adaptent leur offre locale'],
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi les entreprises décentralisent',
            etapes: [
              'L’entreprise grandit et son environnement change vite',
              'Le sommet ne peut plus traiter toute l’information',
              'Des décisions sont déléguées aux unités proches du terrain',
              'Réactivité accrue, mais besoin de coordination et de contrôle',
            ],
          },
        ],
      },
      {
        titre: 'L’entreprise, un lieu de relations sociales',
        blocs: [
          {
            type: 'texte',
            texte:
              'L’entreprise n’est pas seulement une unité de production : c’est un **lieu de relations sociales** entre **parties prenantes** (en anglais, *stakeholders*) aux intérêts en partie convergents, en partie divergents. Les parties prenantes internes sont les salariés, les managers, les propriétaires ou actionnaires (et les associés d’une coopérative) ; les parties prenantes externes sont les clients, les fournisseurs, les banques, l’État, les collectivités et les riverains.',
          },
          { type: 'schema', id: 'parties-prenantes' },
          {
            type: 'liste',
            items: [
              '**Coopération** : produire suppose de coordonner le travail de chacun (travail en équipe, partage d’informations, culture d’entreprise).',
              '**Hiérarchie** : les relations sont asymétriques ; le salarié est placé dans un lien de **subordination** à l’employeur (contrat de travail).',
              '**Conflit** : les intérêts divergent sur le partage de la valeur ajoutée (salaires / profits), les conditions de travail, les restructurations. Les conflits s’expriment par la grève, mais aussi par la **négociation collective** entre syndicats et direction, et dans les instances représentatives (comité social et économique).',
            ],
          },
          {
            type: 'texte',
            texte:
              'Les **coopératives** offrent un autre modèle de gouvernance. Dans une **SCOP** (société coopérative et participative), les salariés sont associés majoritaires et le pouvoir est réparti selon le principe « **une personne, une voix** », quel que soit le capital détenu. Une partie importante des bénéfices est réinvestie dans l’entreprise. Les **coopérateurs** sont à la fois travailleurs et propriétaires, ce qui modifie les relations de pouvoir.',
          },
          {
            type: 'encadre',
            titre: 'Débat',
            texte:
              'Pour M. Friedman (1970), la responsabilité sociale de l’entreprise est d’augmenter ses profits, dans le respect des règles. Pour R. E. Freeman (1984), l’entreprise doit créer de la valeur pour l’ensemble de ses parties prenantes. Cette opposition structure les débats sur la gouvernance (rémunération des dirigeants, place des salariés au conseil d’administration, responsabilité sociale et environnementale).',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Entreprise',
      definition: 'Organisation qui produit des biens ou des services marchands en combinant des facteurs de production, en vue de les vendre.',
      exemple: 'Une boulangerie, une entreprise de logiciels, un constructeur automobile.',
    },
    {
      terme: 'Cycle de vie de l’entreprise',
      definition: 'Succession des étapes que peut connaître une entreprise : création, croissance, changements de statut juridique, disparition.',
      exemple: 'Une start-up créée par deux étudiants, devenue SAS puis rachetée par un grand groupe.',
    },
    {
      terme: 'Croissance interne',
      definition: 'Développement de l’entreprise par ses propres moyens : investissements, embauches, nouveaux produits.',
      exemple: 'Une entreprise ouvre une deuxième usine.',
    },
    {
      terme: 'Croissance externe',
      definition: 'Développement de l’entreprise par le rachat d’autres entreprises ou par fusion.',
      exemple: 'Un groupe de distribution rachète un réseau de magasins concurrent.',
    },
    {
      terme: 'Défaillance d’entreprise',
      definition: 'Situation d’une entreprise qui ne peut plus faire face à ses dettes avec ses ressources disponibles (cessation de paiements), ouvrant une procédure judiciaire (redressement ou liquidation).',
      exemple: 'Un restaurant placé en liquidation judiciaire.',
    },
    {
      terme: 'Statut juridique',
      definition: 'Forme légale sous laquelle une entreprise exerce son activité (entreprise individuelle, SARL, SAS, SA, coopérative), qui détermine notamment la responsabilité des propriétaires et la répartition du pouvoir.',
      exemple: 'Une SAS permet d’accueillir facilement de nouveaux associés.',
    },
    {
      terme: 'Entrepreneur individuel',
      definition: 'Personne qui exerce une activité professionnelle en son nom propre, sans créer de société ; depuis 2022, son patrimoine personnel est en principe protégé des dettes professionnelles.',
      exemple: 'Un plombier à son compte.',
    },
    {
      terme: 'Micro-entrepreneur',
      definition: 'Entrepreneur individuel qui relève d’un régime simplifié : formalités allégées, cotisations calculées en proportion du chiffre d’affaires, chiffre d’affaires plafonné.',
      exemple: 'Un graphiste free-lance qui facture quelques clients.',
    },
    {
      terme: 'Chef d’entreprise',
      definition: 'Personne qui dirige une entreprise ; dans une société, c’est le dirigeant légal (gérant, président, directeur général).',
      exemple: 'La présidente d’une SAS de 50 salariés.',
    },
    {
      terme: 'Entrepreneur-innovateur',
      definition: 'Selon J. Schumpeter, entrepreneur qui introduit une innovation (nouveau produit, procédé, organisation, marché) et en assume le risque.',
      exemple: 'Le fondateur d’une entreprise qui lance une technologie nouvelle.',
    },
    {
      terme: 'Manager',
      definition: 'Dirigeant professionnel, souvent salarié, chargé de gérer l’entreprise sans en être propriétaire.',
      exemple: 'Le directeur général d’un grand groupe coté.',
    },
    {
      terme: 'Actionnaire',
      definition: 'Propriétaire d’une partie du capital d’une société : il apporte des fonds, supporte le risque, perçoit des dividendes et vote en assemblée générale.',
      exemple: 'Un fonds de pension qui détient 5 % du capital d’une entreprise.',
    },
    {
      terme: 'Gouvernance d’entreprise',
      definition: 'Ensemble des règles, des organes et des pratiques qui déterminent la manière dont l’entreprise est dirigée et contrôlée, et la répartition du pouvoir entre ses acteurs.',
      exemple: 'Le conseil d’administration contrôle la direction générale.',
    },
    {
      terme: 'Assemblée générale des actionnaires',
      definition: 'Réunion des actionnaires d’une société, qui approuve les comptes, décide de la distribution des dividendes et élit le conseil d’administration ; chaque action donne en principe une voix.',
      exemple: 'L’assemblée annuelle qui vote la rémunération des dirigeants.',
    },
    {
      terme: 'Conseil d’administration',
      definition: 'Organe élu par les actionnaires, qui fixe les orientations stratégiques de la société, nomme et contrôle la direction.',
      exemple: 'Il peut révoquer un directeur général.',
    },
    {
      terme: 'Autorité',
      definition: 'Pouvoir reconnu comme légitime de donner des ordres et d’être obéi.',
      exemple: 'Un chef d’équipe dont les consignes sont suivies parce qu’il occupe cette fonction.',
    },
    {
      terme: 'Hiérarchie',
      definition: 'Organisation des relations de pouvoir selon des niveaux de responsabilité, du sommet de l’entreprise aux exécutants.',
      exemple: 'Direction, cadres, agents de maîtrise, ouvriers.',
    },
    {
      terme: 'Centralisation',
      definition: 'Mode d’organisation dans lequel les décisions sont prises au sommet de la hiérarchie.',
      exemple: 'Le siège fixe les prix de tous les magasins.',
    },
    {
      terme: 'Décentralisation',
      definition: 'Mode d’organisation dans lequel une partie des décisions est déléguée aux échelons inférieurs ou aux unités proches du terrain.',
      exemple: 'Chaque magasin choisit une partie de son assortiment.',
    },
    {
      terme: 'Parties prenantes',
      definition: 'Ensemble des acteurs qui ont un intérêt dans l’activité de l’entreprise ou sont affectés par elle : salariés, managers, actionnaires, clients, fournisseurs, banques, État, collectivités, riverains.',
      exemple: 'Les riverains d’une usine sont concernés par ses rejets.',
    },
    {
      terme: 'Subordination',
      definition: 'Lien juridique qui place le salarié sous l’autorité de l’employeur, qui peut lui donner des ordres, contrôler son travail et le sanctionner ; il caractérise le contrat de travail.',
      exemple: 'Un salarié doit respecter les horaires fixés par l’employeur.',
    },
    {
      terme: 'Négociation collective',
      definition: 'Discussion entre les représentants des salariés (syndicats) et les employeurs pour fixer les conditions de travail et de rémunération par des accords.',
      exemple: 'Un accord d’entreprise sur le télétravail.',
    },
    {
      terme: 'Coopérative (SCOP)',
      definition: 'Entreprise dont les salariés sont associés majoritaires et dans laquelle le pouvoir est réparti selon le principe « une personne, une voix », indépendamment du capital détenu.',
      exemple: 'Une entreprise reprise en SCOP par ses salariés.',
    },
  ],

  auteurs: [
    {
      nom: 'Joseph Schumpeter',
      dates: '1883-1950',
      idee: 'L’entrepreneur est un innovateur qui introduit de « nouvelles combinaisons » et provoque la destruction créatrice.',
      oeuvre: 'Théorie de l’évolution économique (1911)',
    },
    {
      nom: 'Adolf Berle et Gardiner Means',
      idee: 'Dans les grandes sociétés, la propriété (actionnaires dispersés) se sépare du pouvoir (managers).',
      oeuvre: 'The Modern Corporation and Private Property (1932)',
    },
    {
      nom: 'Alfred Chandler',
      dates: '1918-2007',
      idee: 'La « main visible » des managers coordonne l’activité des grandes entreprises, aux côtés de la main invisible du marché.',
      oeuvre: 'La Main visible des managers (1977)',
    },
    {
      nom: 'Max Weber',
      dates: '1864-1920',
      idee: 'Trois types de domination légitime (traditionnelle, charismatique, légale-rationnelle) ; la bureaucratie repose sur des règles impersonnelles et une hiérarchie.',
      oeuvre: 'Économie et société (1922)',
    },
    {
      nom: 'R. Edward Freeman',
      dates: 'né en 1951',
      idee: 'Théorie des parties prenantes : l’entreprise doit créer de la valeur pour tous ceux qui sont affectés par son activité.',
      oeuvre: 'Strategic Management: A Stakeholder Approach (1984)',
    },
    {
      nom: 'Milton Friedman',
      dates: '1912-2006',
      idee: 'La responsabilité sociale de l’entreprise est d’accroître ses profits, dans le respect des règles du jeu.',
      oeuvre: 'Article du New York Times Magazine (1970)',
    },
  ],

  schemas: [
    {
      id: 'cycle-vie',
      titre: 'Le cycle de vie d’une entreprise',
      legende: 'Une entreprise naît, se développe par croissance interne ou externe, change souvent de statut juridique en grandissant, et peut disparaître (cessation, défaillance, absorption). Aucune étape n’est obligatoire.',
    },
    {
      id: 'parties-prenantes',
      titre: 'L’entreprise et ses parties prenantes',
      legende: 'Parties prenantes internes (en haut) et externes (en bas). Leurs intérêts convergent en partie (la réussite de l’entreprise) et divergent en partie (partage de la valeur, conditions de travail, environnement).',
    },
  ],

  pieges: [
    {
      erreur: 'Confondre entrepreneur, manager et actionnaire.',
      correction: 'L’**entrepreneur** crée ou innove et prend un risque ; le **manager** dirige sans être forcément propriétaire ; l’**actionnaire** possède une part du capital.',
    },
    {
      erreur: '« Le micro-entrepreneur est un salarié. »',
      correction: 'C’est un **indépendant** (entrepreneur individuel sous régime simplifié) : pas de contrat de travail ni de lien de subordination.',
    },
    {
      erreur: 'Confondre autorité et pouvoir.',
      correction: 'L’**autorité** est un pouvoir reconnu comme **légitime** ; le pouvoir peut s’imposer sans être accepté.',
    },
    {
      erreur: 'Présenter la décentralisation comme toujours meilleure.',
      correction: 'Chaque mode a des **avantages** et des **limites** (réactivité contre cohérence).',
    },
    {
      erreur: 'Présenter l’entreprise uniquement comme un lieu de conflits (ou uniquement de coopération).',
      correction: 'Le programme demande de montrer la coexistence de la **coopération**, de la **hiérarchie** et du **conflit**.',
    },
    {
      erreur: '« Dans une coopérative, chaque associé vote selon son nombre de parts. »',
      correction: 'C’est l’inverse : **une personne, une voix**, quel que soit le capital détenu.',
    },
  ],

  synthese: {
    idees: [
      'Cycle de vie : création, croissance (interne / externe), changement de statut juridique, disparition (cessation, défaillance, absorption).',
      'Figures de l’entrepreneur par le statut : entrepreneur individuel, micro-entrepreneur, chef d’entreprise ; par la fonction : innovateur (Schumpeter), manager, actionnaire.',
      'Séparation de la propriété et du pouvoir dans les grandes sociétés (Berle et Means) ; « main visible » des managers (Chandler).',
      'Gouvernance : règles et organes de direction et de contrôle (AG, conseil d’administration, direction) ; actionnariale ou partenariale.',
      'Autorité = pouvoir légitime (Weber) ; hiérarchie ; centralisation ou décentralisation des décisions, chacune avec avantages et limites.',
      'L’entreprise est un lieu de relations sociales entre parties prenantes : coopération, hiérarchie (subordination), conflit (grève, négociation collective).',
      'Coopératives (SCOP) : « une personne, une voix », salariés associés.',
    ],
    mecanismes: [
      ['Séparation propriété / pouvoir', 'intérêts divergents', 'mécanismes de gouvernance pour contrôler les managers'],
      ['Croissance et environnement instable', 'trop d’informations au sommet', 'décentralisation', 'réactivité mais besoin de coordination'],
    ],
  },

  quiz: [
    {
      question: 'Le rachat d’une entreprise concurrente est un exemple de :',
      choix: ['Croissance interne', 'Croissance externe', 'Défaillance', 'Décentralisation'],
      bonne: 1,
      explication: 'La croissance externe passe par le rachat ou la fusion avec d’autres entreprises.',
    },
    {
      question: 'Une entreprise en cessation de paiements qui fait l’objet d’une liquidation judiciaire connaît :',
      choix: ['Une croissance externe', 'Une défaillance', 'Une décentralisation', 'Une introduction en Bourse'],
      bonne: 1,
      explication: 'Elle ne peut plus payer ses dettes avec ses ressources disponibles.',
    },
    {
      question: 'Le micro-entrepreneur est :',
      choix: [
        'Un salarié d’une petite entreprise',
        'Un entrepreneur individuel bénéficiant d’un régime simplifié',
        'Un actionnaire minoritaire',
        'Le dirigeant d’une société anonyme',
      ],
      bonne: 1,
      explication: 'Formalités allégées, cotisations proportionnelles au chiffre d’affaires, chiffre d’affaires plafonné.',
    },
    {
      question: 'Pour J. Schumpeter, l’entrepreneur est avant tout :',
      choix: ['Un gestionnaire prudent', 'Un innovateur', 'Un actionnaire', 'Un fonctionnaire'],
      bonne: 1,
      explication: 'Il introduit de nouvelles combinaisons productives et bouscule les routines.',
    },
    {
      question: 'Un directeur général nommé par le conseil d’administration, sans être propriétaire, est :',
      choix: ['Un actionnaire', 'Un manager', 'Un micro-entrepreneur', 'Un coopérateur'],
      bonne: 1,
      explication: 'Il dirige l’entreprise pour le compte des actionnaires.',
    },
    {
      question: 'Berle et Means (1932) mettent en évidence :',
      choix: [
        'La séparation entre la propriété et le pouvoir dans les grandes sociétés',
        'Le dilemme du prisonnier',
        'La force des liens faibles',
        'La destruction créatrice',
      ],
      bonne: 0,
      explication: 'Les actionnaires dispersés laissent le pouvoir effectif aux managers.',
    },
    {
      question: 'La gouvernance d’entreprise désigne :',
      choix: [
        'Les relations avec les clients',
        'Les règles et organes qui déterminent comment l’entreprise est dirigée et contrôlée',
        'Le chiffre d’affaires',
        'La publicité de l’entreprise',
      ],
      bonne: 1,
      explication: 'Assemblée générale, conseil d’administration, direction générale, règles de contrôle.',
    },
    {
      question: 'Dans une société anonyme, qui élit le conseil d’administration ?',
      choix: ['Les salariés seuls', 'L’assemblée générale des actionnaires', 'Le directeur général', 'L’État'],
      bonne: 1,
      explication: 'Le conseil nomme ensuite et contrôle la direction générale.',
    },
    {
      question: 'L’autorité se distingue du simple pouvoir parce qu’elle est :',
      choix: ['Écrite', 'Reconnue comme légitime', 'Toujours charismatique', 'Exercée par l’État'],
      bonne: 1,
      explication: 'On obéit parce qu’on reconnaît le droit de commander.',
    },
    {
      question: 'Un avantage de la décentralisation des décisions est :',
      choix: ['Une plus grande cohérence', 'Une meilleure réactivité face au terrain', 'Un contrôle plus strict du sommet', 'L’absence de coordination nécessaire'],
      bonne: 1,
      explication: 'Les unités proches du terrain s’adaptent plus vite, au prix d’un besoin de coordination.',
    },
    {
      question: 'Laquelle de ces parties prenantes est externe à l’entreprise ?',
      choix: ['Les salariés', 'Les managers', 'Les fournisseurs', 'Les actionnaires'],
      bonne: 2,
      explication: 'Fournisseurs, clients, banques, État, riverains sont des parties prenantes externes.',
    },
    {
      question: 'Le lien de subordination caractérise :',
      choix: ['Le contrat de travail', 'Le statut de micro-entrepreneur', 'La relation client', 'L’actionnariat'],
      bonne: 0,
      explication: 'Le salarié est placé sous l’autorité de l’employeur.',
    },
    {
      question: 'Le partage de la valeur ajoutée entre salaires et profits peut être source de :',
      choix: ['Coopération uniquement', 'Conflits', 'Centralisation', 'Croissance externe'],
      bonne: 1,
      explication: 'Les intérêts des salariés et des actionnaires divergent en partie ; la négociation collective permet de les réguler.',
    },
    {
      question: 'Dans une SCOP :',
      choix: [
        'Chaque associé vote selon le capital détenu',
        'Les salariés sont associés majoritaires et chaque associé a une voix',
        'Il n’y a pas de dirigeant',
        'Les actionnaires extérieurs détiennent la majorité',
      ],
      bonne: 1,
      explication: 'Principe « une personne, une voix ».',
    },
    {
      question: 'Pour R. E. Freeman, l’entreprise doit :',
      choix: [
        'Maximiser uniquement les profits des actionnaires',
        'Créer de la valeur pour l’ensemble de ses parties prenantes',
        'Être dirigée par l’État',
        'Se décentraliser totalement',
      ],
      bonne: 1,
      explication: 'Il s’oppose à la conception de M. Friedman centrée sur le profit.',
    },
  ],
};
