import type { DeveloppementChapitre } from '../../types';

/** Chapitre XII — développement. Entreprises et personnes citées : exemples fictifs sauf mention. */
export const devEntreprises: DeveloppementChapitre = {
  id: 'entreprises',
  definitions: {
    Entreprise: {
      developpement:
        'Une entreprise combine du travail (des salariés) et du capital (machines, locaux, logiciels) pour produire quelque chose qu’elle vend sur un marché. C’est ce qui la distingue d’une administration (qui fournit des services non marchands, gratuits ou presque) ou d’une association (qui ne vise pas à vendre). Les entreprises sont très diverses : de la boulangerie d’une seule personne au groupe mondial de centaines de milliers de salariés.',
      exemples: [
        'Une boulangerie de quartier, avec son boulanger et deux vendeuses.',
        'Un constructeur automobile qui emploie des dizaines de milliers de salariés dans plusieurs pays.',
      ],
      nePasConfondre: 'Entreprise (production marchande) et administration publique (production non marchande, comme l’école publique).',
    },
    'Cycle de vie de l’entreprise': {
      synonymes: ['cycle de vie'],
      developpement:
        'Comme un être vivant, une entreprise naît, grandit, change et peut disparaître. Les étapes ne sont pas obligatoires : beaucoup d’entreprises restent petites toute leur vie, d’autres disparaissent dans les premières années. À chaque étape, les besoins changent : financement et statut juridique à la création, investissements pendant la croissance, transmission ou rachat à la fin.',
      exemples: [
        'Une start-up créée dans un garage, qui lève des fonds, grandit, puis est rachetée par un grand groupe.',
        'Un restaurant familial ouvert en 1990, transmis aux enfants, puis fermé faute de repreneur.',
      ],
    },
    'Croissance interne': {
      synonymes: ['interne'],
      developpement:
        'La croissance interne, c’est grandir par ses propres moyens : investir dans de nouvelles machines, ouvrir des magasins, embaucher, lancer de nouveaux produits. Elle est plus lente que la croissance externe, mais l’entreprise garde le contrôle et sa culture.',
      exemples: [
        'Une enseigne de vêtements qui ouvre dix nouvelles boutiques en un an.',
        'Une PME industrielle qui construit une deuxième usine.',
      ],
      nePasConfondre: 'Croissance interne (créer de nouvelles capacités) et croissance externe (acheter des capacités qui existent déjà).',
    },
    'Croissance externe': {
      synonymes: ['externe'],
      developpement:
        'La croissance externe, c’est grandir en rachetant d’autres entreprises ou en fusionnant avec elles. Elle est rapide : on acquiert d’un coup des clients, des usines, des savoir-faire. Mais elle coûte cher et l’intégration de deux entreprises aux cultures différentes peut échouer. Les grosses opérations sont contrôlées par les autorités de la concurrence.',
      exemples: [
        'Un géant du numérique qui rachète une application de partage de photos.',
        'Deux banques régionales qui fusionnent pour former une seule banque.',
      ],
    },
    'Défaillance d’entreprise': {
      synonymes: ['défaillance'],
      developpement:
        'Une entreprise est défaillante quand elle ne peut plus payer ses dettes avec l’argent dont elle dispose (on parle de « cessation de paiements »). Elle passe alors devant le tribunal. Il peut y avoir un plan de sauvegarde ou de redressement (l’entreprise continue en étalant ses dettes) ou une liquidation judiciaire (elle disparaît et ses biens sont vendus pour payer les créanciers).',
      exemples: [
        'Une enseigne de magasins qui n’arrive plus à payer ses fournisseurs et ses loyers et est placée en redressement judiciaire.',
        'Un petit commerce qui ferme après une liquidation judiciaire.',
      ],
    },
    'Statut juridique': {
      developpement:
        'Le statut juridique est la « forme » légale de l’entreprise. Il détermine qui en est propriétaire, comment on prend les décisions, comment l’entreprise est imposée et surtout jusqu’où les dirigeants sont responsables des dettes. On distingue principalement l’entreprise individuelle (une seule personne, en son nom propre) et la société (une « personne morale » distincte de ses associés).',
      exemples: [
        'Une graphiste indépendante en micro-entreprise.',
        'Trois amis qui créent une SAS pour lancer une marque de baskets.',
      ],
    },
    'Entrepreneur individuel': {
      developpement:
        'L’entrepreneur individuel exerce son activité seul, sans créer de société : l’entreprise et la personne ne font qu’un. Depuis 2022, son patrimoine personnel (sa maison, par exemple) est en principe protégé des dettes professionnelles. Ce statut est simple et peu coûteux, mais il ne permet pas d’accueillir des associés.',
      exemples: [
        'Un plombier artisan qui travaille à son compte.',
        'Une infirmière libérale.',
      ],
    },
    'Micro-entrepreneur': {
      synonymes: ['auto-entrepreneur', 'micro-entreprise'],
      developpement:
        'Le micro-entrepreneur (anciennement « auto-entrepreneur ») est un entrepreneur individuel qui bénéficie d’un régime très simplifié : formalités réduites, cotisations calculées en pourcentage du chiffre d’affaires, plafond de chiffre d’affaires à ne pas dépasser. Ce statut a beaucoup été utilisé par les livreurs et chauffeurs de plateformes, ce qui pose la question de leur indépendance réelle.',
      exemples: [
        'Un étudiant qui donne des cours particuliers en micro-entreprise.',
        'Un livreur à vélo qui travaille pour une plateforme sous ce statut.',
      ],
    },
    'Chef d’entreprise': {
      developpement:
        'Le chef d’entreprise est la personne qui dirige l’entreprise et prend les décisions importantes. Il peut en être le propriétaire (artisan, fondateur de PME) ou un dirigeant salarié choisi par les actionnaires (manager). Ses fonctions : fixer la stratégie, organiser le travail, trouver des financements, représenter l’entreprise.',
      exemples: [
        'La fondatrice d’une PME de cosmétiques qui la dirige depuis 15 ans.',
        'Le directeur général d’un grand groupe, nommé par le conseil d’administration.',
      ],
    },
    'Entrepreneur-innovateur': {
      synonymes: ['innovateur'],
      developpement:
        'Pour Joseph Schumpeter, l’entrepreneur n’est pas simplement celui qui gère une affaire : c’est celui qui innove, c’est-à-dire qui introduit quelque chose de nouveau (un produit, une façon de produire, une organisation, un nouveau marché) et qui prend le risque que cela échoue. Les innovations réussies font disparaître des activités anciennes : c’est la « destruction créatrice ».',
      exemples: [
        'Les créateurs des premières plateformes de vidéo en ligne, qui ont bouleversé la location de DVD.',
        'Une entrepreneuse qui invente un emballage compostable pour la restauration rapide.',
      ],
    },
    Manager: {
      developpement:
        'Le manager est un dirigeant professionnel : il gère l’entreprise sans en être (principalement) propriétaire. Il est souvent salarié et peut être remplacé par les actionnaires. L’apparition des managers dans les grandes sociétés a été décrite par Berle et Means (1932) : la propriété (actionnaires) se sépare du pouvoir (managers).',
      exemples: [
        'Le PDG d’une grande banque, qui ne possède qu’une toute petite part du capital.',
        'La directrice d’un magasin d’une chaîne de supermarchés.',
      ],
      nePasConfondre: 'Manager (dirige sans être propriétaire) et actionnaire (propriétaire sans forcément diriger).',
    },
    Actionnaire: {
      developpement:
        'L’actionnaire possède une ou plusieurs actions, c’est-à-dire une part du capital d’une société. Il a donc un droit sur les bénéfices (les dividendes) et un droit de vote en assemblée générale. S’il a beaucoup d’actions, il pèse sur les décisions. Il prend un risque : si la société va mal, la valeur de ses actions baisse et il peut tout perdre (mais pas plus que ce qu’il a apporté).',
      exemples: [
        'Un fonds de pension qui possède 5 % du capital d’un constructeur automobile.',
        'Une salariée qui achète des actions de son entreprise.',
      ],
    },
    'Gouvernance d’entreprise': {
      developpement:
        'La gouvernance répond à la question : qui décide, et qui contrôle ceux qui décident ? Elle comprend les organes (assemblée générale, conseil d’administration, direction), les règles (statuts, lois) et les pratiques (transparence, comités). Elle peut être organisée surtout au service des actionnaires (gouvernance actionnariale) ou de toutes les parties prenantes (gouvernance partenariale).',
      exemples: [
        'Un conseil d’administration qui refuse le plan stratégique proposé par le directeur général.',
        'Une entreprise qui fait entrer des représentants des salariés dans son conseil d’administration.',
      ],
    },
    'Assemblée générale des actionnaires': {
      synonymes: ['assemblée générale'],
      developpement:
        'L’assemblée générale réunit les actionnaires, en général une fois par an. Ils votent sur les grandes décisions : approbation des comptes, montant des dividendes, élection des administrateurs, parfois la rémunération des dirigeants. Le principe est « une action, une voix » : plus on possède d’actions, plus on pèse.',
      exemples: [
        'L’assemblée générale d’une société cotée vote contre la hausse de rémunération du PDG.',
        'Les actionnaires d’une PME votent la distribution d’un dividende.',
      ],
      nePasConfondre: '« Une action, une voix » (société de capitaux) et « une personne, une voix » (coopérative).',
    },
    'Conseil d’administration': {
      developpement:
        'Le conseil d’administration est un petit groupe de personnes (les administrateurs), élues par l’assemblée générale. Il fixe les grandes orientations, nomme et contrôle la direction générale, et peut la révoquer. Il comprend souvent des administrateurs indépendants et, dans les grandes entreprises françaises, des administrateurs représentant les salariés.',
      exemples: [
        'Le conseil d’administration d’un groupe remplace son directeur général après de mauvais résultats.',
        'Un conseil qui crée un comité chargé de fixer la rémunération des dirigeants.',
      ],
    },
    Autorité: {
      developpement:
        'L’autorité n’est pas la simple force : c’est un pouvoir que ceux qui obéissent considèrent comme légitime, normal. Max Weber distingue trois types de légitimité : traditionnelle (on obéit parce que « cela s’est toujours fait ainsi »), charismatique (on obéit à une personne exceptionnelle) et légale-rationnelle (on obéit à quelqu’un parce qu’il occupe une fonction définie par des règles). Dans l’entreprise moderne, c’est surtout la troisième.',
      exemples: [
        'Un salarié qui suit les consignes de sa cheffe d’équipe parce que c’est son rôle défini dans l’organisation.',
        'Un fondateur charismatique que les salariés suivent avec enthousiasme.',
      ],
    },
    Hiérarchie: {
      developpement:
        'La hiérarchie, c’est l’organisation de l’entreprise en niveaux : chaque personne a un supérieur à qui elle rend des comptes, jusqu’au sommet. Elle fixe qui donne les ordres à qui et permet de coordonner le travail. Elle peut être très « haute » (beaucoup de niveaux) ou « plate » (peu de niveaux).',
      exemples: [
        'Ouvrier → chef d’équipe → responsable d’atelier → directeur d’usine → direction générale.',
        'Une start-up de 15 personnes où tout le monde rend des comptes directement à la fondatrice.',
      ],
    },
    Centralisation: {
      developpement:
        'Dans une organisation centralisée, les décisions importantes sont prises au sommet puis appliquées par les échelons inférieurs. Cela assure la cohérence et le contrôle, mais l’information met du temps à remonter et les salariés ont peu d’initiative.',
      exemples: [
        'Une chaîne de restauration rapide où le siège fixe les menus, les prix et la décoration de tous les restaurants.',
        'Une usine où chaque geste est défini par le bureau des méthodes (organisation taylorienne).',
      ],
      nePasConfondre: 'Centralisation (décider au sommet) et hiérarchie (l’existence de niveaux) : une entreprise hiérarchisée peut être centralisée ou décentralisée.',
    },
    Décentralisation: {
      developpement:
        'Décentraliser, c’est déléguer une partie des décisions aux échelons proches du terrain (filiales, magasins, équipes). Cela rend l’entreprise plus réactive et motive les salariés, mais il faut ensuite coordonner des décisions qui peuvent être différentes.',
      exemples: [
        'Des directeurs de magasins qui choisissent une partie des produits selon les goûts de leur clientèle locale.',
        'Un groupe dont chaque filiale nationale fixe ses propres campagnes publicitaires.',
      ],
    },
    'Parties prenantes': {
      developpement:
        'Les parties prenantes sont toutes les personnes et organisations qui ont un intérêt dans la vie de l’entreprise ou qui sont touchées par ses décisions. Internes : salariés, managers, actionnaires. Externes : clients, fournisseurs, banques, État, collectivités locales, riverains, associations. Leurs intérêts sont en partie communs (que l’entreprise réussisse) et en partie opposés (partage de la valeur ajoutée, pollution…).',
      exemples: [
        'Les riverains d’une usine, concernés par le bruit et la pollution.',
        'Les fournisseurs d’un supermarché, qui dépendent de ses commandes et des prix qu’il impose.',
      ],
    },
    Subordination: {
      developpement:
        'Le lien de subordination est ce qui définit le contrat de travail : l’employeur peut donner des ordres, contrôler le travail et sanctionner le salarié. En échange, le salarié reçoit un salaire et bénéficie des protections du droit du travail. Quand un « indépendant » est en réalité soumis à des ordres et des sanctions, les juges peuvent requalifier sa relation en contrat de travail.',
      exemples: [
        'Une caissière qui doit respecter les horaires et les consignes fixés par son employeur.',
        'Des chauffeurs de plateforme dont la relation a été requalifiée en contrat de travail par la justice.',
      ],
    },
    'Négociation collective': {
      developpement:
        'La négociation collective, ce sont les discussions entre représentants des salariés (syndicats) et employeurs pour fixer des règles communes : salaires, temps de travail, conditions de travail, formation. Elle aboutit à des accords collectifs (d’entreprise ou de branche). C’est une façon de gérer les conflits sans forcément passer par la grève.',
      exemples: [
        'La négociation annuelle sur les salaires dans une entreprise.',
        'Un accord sur le télétravail signé entre la direction et les syndicats.',
      ],
    },
    'Coopérative (SCOP)': {
      synonymes: ['SCOP', 'coopérative', 'société coopérative et participative'],
      developpement:
        'Dans une coopérative, les associés sont des personnes qui participent à l’activité (salariés, producteurs, clients) et non des investisseurs extérieurs. Le pouvoir suit le principe « une personne, une voix » : celui qui a apporté plus de capital n’a pas plus de voix. Dans une SCOP, ce sont les salariés qui sont associés majoritaires, élisent leurs dirigeants et se partagent une partie des bénéfices.',
      exemples: [
        'Des salariés qui reprennent leur entreprise en SCOP quand le propriétaire part à la retraite.',
        'Une coopérative agricole où les agriculteurs mettent en commun la vente de leur lait.',
      ],
      nePasConfondre: 'Coopérative (« une personne, une voix ») et société de capitaux (« une action, une voix »).',
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Société',
      synonymes: ['SARL', 'SAS', 'SA', 'société anonyme'],
      definition: 'Entreprise dotée d’une personnalité juridique propre, distincte de ses associés, qui apportent un capital et en partagent les bénéfices et les risques. Principales formes : SARL, SAS, SA.',
      exemple: 'Une SAS créée par trois associés qui apportent chacun 5 000 €.',
      developpement: 'Dans une société, la responsabilité des associés est en général limitée à leurs apports : s’ils ont apporté 5 000 €, ils ne peuvent perdre plus. La SA (société anonyme) est la forme des grandes entreprises cotées.',
      exemples: ['Une entreprise individuelle qui devient une SARL pour accueillir un associé.'],
    },
    {
      terme: 'Direction générale',
      definition: 'Équipe dirigeante (directeur général et ses adjoints) qui gère l’entreprise au quotidien et met en œuvre la stratégie, sous le contrôle du conseil d’administration.',
      exemple: 'Le directeur général, la directrice financière et le directeur des ressources humaines d’un groupe.',
      developpement: 'La direction générale est nommée par le conseil d’administration, qui peut la remplacer. C’est là que travaillent les managers.',
      exemples: ['Le directeur général présente chaque année les résultats aux actionnaires.'],
    },
    {
      terme: 'Séparation entre la propriété et le pouvoir',
      synonymes: ['séparation entre la propriété', 'séparation de la propriété et du pouvoir'],
      definition: 'Situation des grandes sociétés où ceux qui possèdent le capital (les actionnaires, nombreux et dispersés) ne sont pas ceux qui dirigent (les managers).',
      exemple: 'Une société cotée possédée par des milliers d’actionnaires et dirigée par un PDG salarié.',
      developpement: 'Mise en évidence par A. Berle et G. Means (1932), elle crée un risque de conflit d’intérêts entre actionnaires et managers.',
      exemples: ['Un PDG qui détient 0,1 % du capital mais prend toutes les décisions stratégiques.'],
    },
    {
      terme: 'Conflit d’intérêts',
      synonymes: ['problème d’agence'],
      definition: 'Situation où les managers, chargés d’agir pour les actionnaires, poursuivent leurs propres objectifs au détriment de ceux-ci.',
      exemple: 'Un dirigeant qui rachète une entreprise pour augmenter la taille de son groupe (et son prestige) même si l’opération n’est pas rentable.',
      developpement: 'On parle aussi de « problème d’agence » : l’actionnaire (le mandant) confie une tâche au manager (l’agent), qui en sait plus que lui et n’a pas forcément les mêmes intérêts. C’est un cas d’asymétrie d’information.',
      exemples: ['Un manager qui fixe sa propre rémunération très haut alors que les résultats sont mauvais.'],
    },
    {
      terme: 'Gouvernance actionnariale',
      definition: 'Conception de la gouvernance selon laquelle l’entreprise doit être dirigée avant tout dans l’intérêt des actionnaires (maximiser la valeur pour eux).',
      exemple: 'Payer les dirigeants en actions pour qu’ils aient intérêt à faire monter le cours de bourse.',
      developpement: 'Associée à M. Friedman : la responsabilité de l’entreprise est de faire du profit en respectant les règles. On lui reproche de privilégier le court terme.',
      exemples: ['Un conseil d’administration qui fixe des objectifs de rentabilité très élevés pour les managers.'],
      nePasConfondre: 'Gouvernance actionnariale (au service des actionnaires) et gouvernance partenariale (au service de toutes les parties prenantes).',
    },
    {
      terme: 'Gouvernance partenariale',
      definition: 'Conception de la gouvernance selon laquelle l’entreprise doit tenir compte des intérêts de toutes ses parties prenantes (salariés, clients, fournisseurs, riverains…), pas seulement des actionnaires.',
      exemple: 'Des représentants des salariés qui siègent au conseil d’administration.',
      developpement: 'Associée à R. E. Freeman (1984). On lui reproche de rendre les objectifs flous et les dirigeants plus difficiles à contrôler.',
      exemples: ['Une entreprise qui associe des fournisseurs locaux à ses choix d’achat.'],
    },
    {
      terme: 'Société à mission',
      synonymes: ['sociétés à mission', 'raison d’être'],
      definition: 'Société qui inscrit dans ses statuts une raison d’être et des objectifs sociaux ou environnementaux, contrôlés par un comité de mission (loi PACTE, 2019).',
      exemple: 'Une entreprise alimentaire qui inscrit dans ses statuts l’objectif de favoriser une alimentation saine.',
      developpement: 'Ce statut traduit une gouvernance plus partenariale. Le respect des objectifs est vérifié par un organisme indépendant.',
      exemples: ['Une mutuelle qui inscrit dans ses statuts la réduction des inégalités d’accès aux soins (exemple fictif).'],
    },
    {
      terme: 'Liquidation judiciaire',
      definition: 'Procédure décidée par un tribunal quand une entreprise défaillante ne peut plus être sauvée : l’activité s’arrête et ses biens sont vendus pour payer les créanciers.',
      exemple: 'Un magasin dont les stocks et les locaux sont vendus après sa liquidation.',
      developpement: 'C’est l’issue la plus grave d’une défaillance. Avant, le tribunal peut tenter une procédure de sauvegarde ou de redressement.',
      exemples: ['Les salariés d’une entreprise liquidée sont licenciés ; une partie de leurs salaires impayés est garantie par un fonds spécial (AGS).'],
    },
    {
      terme: 'Conflit social',
      synonymes: ['conflit'],
      definition: 'Opposition entre des groupes aux intérêts divergents dans l’entreprise (salariés et direction), à propos des salaires, des conditions de travail ou de l’emploi.',
      exemple: 'Une grève pour obtenir une hausse de salaire.',
      developpement: 'Le conflit n’est pas seulement un dysfonctionnement : il peut faire évoluer les règles et aboutir à des accords par la négociation collective.',
      exemples: ['Une manifestation de salariés contre un plan de fermeture d’usine.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Une entreprise, tout un cycle de vie (exemple fictif)',
        texte:
          'En 2015, Inès crée seule une marque de bougies, comme **micro-entrepreneur**. En 2018, les ventes explosent : elle s’associe avec deux amis et transforme son activité en **société** (une SAS). En 2021, elle ouvre un atelier et embauche dix salariés : c’est de la **croissance interne**. En 2024, elle rachète un petit fabricant de savons : c’est de la **croissance externe**. Si un jour elle ne peut plus payer ses dettes, l’entreprise sera en **défaillance**.',
      },
      {
        titre: 'Trois figures de l’entrepreneur dans une même entreprise',
        texte:
          'La fondatrice qui a eu l’idée d’un service nouveau est l’**entrepreneur-innovateur**. Quand l’entreprise entre en bourse, des fonds d’investissement deviennent **actionnaires**. Ils nomment un directeur général venu d’un autre groupe : c’est un **manager**, qui dirige sans être propriétaire.',
      },
    ],
    [
      {
        titre: 'Qui décide dans une société anonyme ?',
        texte:
          'Les **actionnaires**, réunis en **assemblée générale**, élisent le **conseil d’administration**. Le conseil nomme la **direction générale** et la contrôle. Si les résultats sont mauvais, il peut remplacer le directeur général. Le pouvoir des actionnaires dépend du nombre d’actions : « une action, une voix ».',
      },
      {
        titre: 'Un conflit d’intérêts concret',
        texte:
          'Le PDG d’un groupe propose de racheter un concurrent très cher. L’opération augmentera la taille du groupe, son prestige et sa rémunération. Mais les actionnaires craignent que le prix payé soit trop élevé et fasse baisser leurs dividendes : c’est un **conflit d’intérêts**. Le conseil d’administration peut refuser l’opération ou lier la rémunération du PDG aux résultats.',
      },
      {
        titre: 'Centraliser ou décentraliser ? Deux chaînes de magasins (exemples fictifs)',
        texte:
          'La chaîne A décide tout au siège : mêmes produits, mêmes prix, même vitrine partout (**centralisation**). La chaîne B laisse chaque directeur choisir 30 % des produits selon sa clientèle (**décentralisation**). A est plus cohérente et contrôle mieux ses coûts ; B s’adapte mieux aux goûts locaux mais doit coordonner des choix différents.',
      },
    ],
    [
      {
        titre: 'Coopération, hiérarchie et conflit dans une usine',
        texte:
          '**Coopération** : les équipes du matin et du soir se transmettent les informations pour que la production ne s’arrête pas. **Hiérarchie** : les opérateurs suivent les consignes du chef d’atelier (**subordination**). **Conflit** : les salariés font grève pour une prime, puis la direction et les syndicats signent un accord (**négociation collective**).',
      },
      {
        titre: 'Une même décision, des parties prenantes aux intérêts différents',
        texte:
          'Une entreprise envisage de fermer une usine. Les actionnaires y voient une hausse de rentabilité ; les salariés craignent pour leur emploi ; les fournisseurs locaux perdent un client ; la commune perd des impôts et des habitants. Prendre en compte toutes ces **parties prenantes** est l’idée de la gouvernance partenariale.',
      },
      {
        titre: 'Une SCOP en pratique (exemple fictif)',
        texte:
          'Dans une SCOP de 40 salariés, l’associé qui a apporté 10 000 € et celui qui a apporté 500 € ont chacun une voix : « **une personne, une voix** ». Ils élisent ensemble leur dirigeant et décident d’affecter une grande partie du bénéfice aux réserves de l’entreprise.',
      },
    ],
  ],
};
