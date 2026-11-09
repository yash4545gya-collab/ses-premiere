import type { Chapitre } from '../types';

/**
 * Chapitre : Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?
 * Chiffres vérifiés dans scripts/verifier-calculs.mjs (données fictives :
 * demande P = 10 − 0,5Q ; recette marginale Rm = 10 − Q ; coût marginal constant = 2).
 */
export const marchesImparfaits: Chapitre = {
  id: 'marches-imparfaits',
  titre: 'Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?',
  titreCourt: 'Marchés imparfaitement concurrentiels',
  domaine: 'Science économique',
  objectifs: [
    'Comprendre, à l’aide d’exemples, les principales sources du pouvoir de marché (nombre limité d’offreurs, ententes et barrières à l’entrée).',
    'Comprendre que le monopole est faiseur de prix et donner des exemples de monopoles (naturel, institutionnel, d’innovation).',
    'Comprendre, à l’aide d’un graphique ou d’un exemple chiffré, que l’équilibre du monopole n’est pas efficace.',
    'Comprendre ce qu’est un oligopole et, à l’aide du dilemme du prisonnier, pourquoi les firmes en oligopole ont intérêt à former des ententes.',
    'Comprendre que la politique de la concurrence, en régulant les fusions-acquisitions et en luttant contre les ententes illicites et les abus de position dominante, augmente le surplus du consommateur.',
  ],

  essentiel: {
    problematique:
      'Lorsque quelques entreprises, voire une seule, dominent un marché, elles ne sont plus preneuses de prix : comment utilisent-elles ce pouvoir de marché, pourquoi est-ce coûteux pour la collectivité, et comment les pouvoirs publics peuvent-ils le limiter ?',
    parties: [
      {
        titre: 'Le pouvoir de marché et ses sources',
        blocs: [
          {
            type: 'texte',
            texte:
              'Une entreprise dispose d’un **pouvoir de marché** lorsqu’elle peut fixer un prix supérieur à celui qui prévaudrait en concurrence, sans perdre tous ses clients. Elle n’est plus **preneuse de prix** mais **faiseuse de prix**. La plupart des marchés réels sont **imparfaitement concurrentiels** : ils s’écartent d’au moins une hypothèse de la concurrence parfaite.',
          },
          {
            type: 'texte',
            texte:
              'Le programme retient trois sources principales du pouvoir de marché : le **nombre limité d’offreurs** (monopole, oligopole), les **ententes** entre concurrents et les **barrières à l’entrée**, qui empêchent de nouveaux concurrents de venir faire baisser les prix.',
          },
          {
            type: 'tableau',
            titre: 'Les principales barrières à l’entrée',
            entetes: ['Barrière', 'Nature', 'Exemple'],
            lignes: [
              ['Économies d’échelle et coûts fixes élevés', 'Technique / économique', 'Construire un réseau ferré ou un réseau électrique'],
              ['Brevet, licence, autorisation', 'Légale (institutionnelle)', 'Brevet sur un médicament, licence de taxi'],
              ['Contrôle d’une ressource rare', 'Économique', 'Gisement minier, fréquences hertziennes'],
              ['Effets de réseau, notoriété de la marque', 'Stratégique', 'Réseau social où sont déjà tous les utilisateurs'],
              ['Stratégies des firmes en place', 'Stratégique', 'Prix temporairement très bas pour décourager un entrant'],
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Comment les barrières à l’entrée protègent le pouvoir de marché',
            etapes: [
              'Une entreprise en place réalise des profits élevés',
              'Ces profits devraient attirer de nouveaux concurrents',
              'Des barrières à l’entrée les en empêchent',
              'Le nombre d’offreurs reste faible : le prix peut rester élevé',
            ],
          },
        ],
      },
      {
        titre: 'Le monopole : un faiseur de prix dont l’équilibre n’est pas efficace',
        blocs: [
          {
            type: 'texte',
            texte:
              'Un **monopole** est un marché sur lequel un seul offreur fait face à de nombreux demandeurs. On en distingue trois types : le **monopole naturel**, lorsque les coûts fixes sont si élevés qu’une seule entreprise produit à moindre coût que plusieurs (réseau ferré, distribution d’eau) ; le **monopole institutionnel**, créé par la loi (monopole de la Française des jeux sur les jeux de tirage, par exemple) ; le **monopole d’innovation**, temporaire, dont bénéficie une entreprise qui lance un produit nouveau, souvent protégé par un brevet.',
          },
          {
            type: 'texte',
            texte:
              'Le monopole fait face à toute la courbe de demande, qui est décroissante. S’il veut vendre une unité de plus, il doit baisser son prix, **sur toutes les unités vendues**. Sa **recette marginale** (ce que lui rapporte une unité supplémentaire) est donc inférieure au prix. Il maximise son profit en produisant la quantité pour laquelle **recette marginale = coût marginal**, puis fixe le prix le plus élevé que les acheteurs acceptent pour cette quantité (lu sur la courbe de demande).',
          },
          { type: 'formule', tex: 'Rm = Cm', legende: 'Condition de maximisation du profit du monopole' },
          {
            type: 'texte',
            texte:
              'Exemple chiffré (données fictives) : demande $P = 10 - 0{,}5Q$, coût marginal constant égal à 2. La recette marginale est $Rm = 10 - Q$. Le monopole produit $Q = 8$ (car $10 - Q = 2$) et vend au prix $P = 6$. Son profit est $(6 - 2) \\times 8 = 32$. En concurrence, le prix serait égal au coût marginal ($P = 2$) et on échangerait 16 unités.',
          },
          { type: 'schema', id: 'monopole' },
          {
            type: 'mecanisme',
            titre: 'Pourquoi le monopole n’est pas efficace',
            etapes: [
              'Le monopole restreint la quantité produite (8 au lieu de 16)',
              'Il fixe un prix supérieur au coût marginal (6 au lieu de 2)',
              'Des consommateurs prêts à payer plus que le coût de production n’achètent pas',
              'Une partie des gains à l’échange disparaît : perte sèche (16 dans l’exemple)',
            ],
          },
          {
            type: 'texte',
            texte:
              'Le surplus du consommateur chute (de 64 à 16) : une partie est captée par le monopole sous forme de profit (32), une autre est perdue pour tout le monde (la **perte sèche**, 16). Le surplus total est donc plus faible qu’en concurrence : l’équilibre du monopole **n’est pas efficace**.',
          },
          {
            type: 'encadre',
            titre: 'Nuancer',
            texte:
              'Le monopole n’a pas que des inconvénients. Le monopole naturel évite de dupliquer des infrastructures coûteuses ; le monopole d’innovation récompense l’effort de recherche et incite à innover (J. Schumpeter). C’est pourquoi on protège les innovations par des brevets, mais pour une durée limitée.',
          },
        ],
      },
      {
        titre: 'Oligopole, ententes et politique de la concurrence',
        blocs: [
          {
            type: 'texte',
            texte:
              'Un **oligopole** est un marché où quelques offreurs font face à de nombreux demandeurs. Chaque firme doit tenir compte des réactions de ses concurrentes : les décisions sont **interdépendantes**. La **théorie des jeux** analyse ces situations d’interaction stratégique.',
          },
          {
            type: 'texte',
            texte:
              'Deux entreprises A et B peuvent choisir un prix élevé (ce qui revient à s’entendre) ou un prix bas. Le tableau indique leurs profits (en millions d’euros, données fictives), le premier chiffre pour A, le second pour B.',
          },
          {
            type: 'tableau',
            titre: 'Le dilemme du prisonnier appliqué à un duopole',
            entetes: ['', 'B : prix élevé', 'B : prix bas'],
            lignes: [
              ['A : prix élevé', '10 ; 10', '3 ; 14'],
              ['A : prix bas', '14 ; 3', '5 ; 5'],
            ],
            source: 'Données fictives',
          },
          {
            type: 'texte',
            texte:
              'Quel que soit le choix de B, A gagne plus en choisissant le prix bas (14 > 10 et 5 > 3) : c’est sa **stratégie dominante**. Le raisonnement est le même pour B. Les deux choisissent donc le prix bas et gagnent 5 chacun, alors qu’en coopérant (prix élevé) ils auraient gagné 10. C’est le **dilemme du prisonnier** : la recherche de l’intérêt individuel aboutit à une situation moins bonne pour chacun.',
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi les firmes en oligopole ont intérêt à s’entendre',
            etapes: [
              'Sans coordination, chaque firme a intérêt à baisser son prix',
              'Toutes baissent leur prix : leurs profits diminuent',
              'Une entente (accord sur les prix ou les quantités) permet de maintenir des prix élevés',
              'Les profits augmentent, au détriment du surplus des consommateurs',
            ],
          },
          {
            type: 'texte',
            texte:
              'Une **entente** (ou cartel) est un accord entre entreprises concurrentes pour fixer les prix, se répartir le marché ou limiter la production. Elle est fragile, car chaque membre est tenté de tricher, mais elle peut durer si la tricherie est surveillée et punie. Les ententes sont **illicites** en droit européen et français.',
          },
          {
            type: 'texte',
            texte:
              'La **politique de la concurrence** vise à protéger le fonctionnement concurrentiel des marchés, au profit des consommateurs. En France, elle est menée par l’**Autorité de la concurrence** et, au niveau européen, par la **Commission européenne**. Elle a trois grands volets :',
          },
          {
            type: 'liste',
            items: [
              '**Lutter contre les ententes illicites** : amendes pouvant atteindre 10 % du chiffre d’affaires mondial ; programme de clémence qui réduit ou supprime l’amende de l’entreprise qui dénonce le cartel la première.',
              '**Sanctionner les abus de position dominante** : une entreprise peut être dominante, mais elle ne doit pas utiliser cette position pour évincer ses concurrents (ventes liées, prix prédateurs, refus d’accès à une infrastructure essentielle).',
              '**Contrôler les fusions-acquisitions** (concentrations) : les opérations importantes doivent être autorisées ; elles peuvent être interdites ou soumises à conditions (revente d’une partie des activités).',
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Effet de la politique de la concurrence',
            etapes: [
              'Sanction des ententes, des abus, contrôle des concentrations',
              'Le nombre de concurrents effectifs est maintenu',
              'Les prix se rapprochent du coût marginal, les quantités augmentent',
              'Le surplus du consommateur augmente',
            ],
          },
          {
            type: 'encadre',
            titre: 'Débat',
            texte:
              'Certains économistes estiment qu’une politique de la concurrence trop stricte empêche l’émergence de grandes entreprises européennes capables de rivaliser avec les géants américains ou chinois (débat autour du refus de la fusion Alstom-Siemens par la Commission européenne en 2019). D’autres rappellent que la concurrence stimule l’innovation et protège le pouvoir d’achat.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Pouvoir de marché',
      definition: 'Capacité d’une entreprise à fixer un prix supérieur au prix de concurrence (au coût marginal) sans perdre l’ensemble de sa clientèle.',
      exemple: 'Un laboratoire qui détient le brevet d’un médicament peut le vendre bien au-dessus de son coût de fabrication.',
      voirAussi: ['Faiseur de prix', 'Barrières à l’entrée'],
    },
    {
      terme: 'Faiseur de prix',
      definition: 'Entreprise qui dispose d’un pouvoir de marché et peut donc choisir son prix, contrairement à l’entreprise preneuse de prix de la concurrence parfaite.',
      exemple: 'Un monopole fixe son prix en fonction de la demande à laquelle il fait face.',
    },
    {
      terme: 'Concurrence imparfaite',
      definition: 'Situation d’un marché qui ne respecte pas au moins une des hypothèses de la concurrence pure et parfaite, si bien que certains agents disposent d’un pouvoir de marché.',
      exemple: 'Le marché des consoles de jeux, dominé par trois fabricants aux produits différenciés.',
    },
    {
      terme: 'Barrières à l’entrée',
      definition: 'Obstacles (techniques, légaux ou stratégiques) qui empêchent ou découragent de nouvelles entreprises d’entrer sur un marché.',
      exemple: 'Le coût de construction d’une usine de semi-conducteurs, de plusieurs milliards d’euros.',
    },
    {
      terme: 'Économies d’échelle',
      definition: 'Baisse du coût moyen de production lorsque la quantité produite augmente, généralement parce que des coûts fixes élevés sont répartis sur un plus grand nombre d’unités.',
      exemple: 'Une fois le réseau électrique construit, desservir un client supplémentaire coûte peu.',
    },
    {
      terme: 'Monopole',
      definition: 'Structure de marché dans laquelle un seul offreur fait face à une multitude de demandeurs, sans substitut proche à son produit.',
      exemple: 'SNCF Réseau gère seul le réseau ferré national.',
    },
    {
      terme: 'Monopole naturel',
      definition: 'Monopole qui s’explique par la structure des coûts : les coûts fixes sont si élevés qu’une seule entreprise peut servir tout le marché à un coût moyen plus faible que plusieurs entreprises.',
      exemple: 'La distribution d’eau potable dans une ville : construire deux réseaux de canalisations serait un gaspillage.',
    },
    {
      terme: 'Monopole institutionnel',
      definition: 'Monopole créé ou protégé par la loi, qui réserve une activité à une seule entreprise.',
      exemple: 'Le monopole accordé à la Française des jeux sur les loteries.',
    },
    {
      terme: 'Monopole d’innovation',
      definition: 'Monopole temporaire dont bénéficie une entreprise qui met sur le marché un produit nouveau, souvent protégé par un brevet, jusqu’à l’arrivée d’imitateurs.',
      exemple: 'Une entreprise qui commercialise la première une nouvelle technologie de batterie.',
    },
    {
      terme: 'Brevet',
      definition: 'Titre de propriété industrielle qui donne à l’inventeur le droit exclusif d’exploiter son invention pendant une durée limitée (20 ans en général), en échange de sa publication.',
      exemple: 'Un nouveau principe actif pharmaceutique est breveté avant sa mise sur le marché.',
    },
    {
      terme: 'Recette marginale',
      definition: 'Supplément de recette totale procuré par la vente d’une unité supplémentaire ; pour un monopole, elle est inférieure au prix, car il doit baisser le prix de toutes les unités pour vendre davantage.',
      exemple: 'Si vendre 9 unités au lieu de 8 oblige à passer de 6 € à 5,50 €, la recette passe de 48 € à 49,50 € : la recette marginale est de 1,50 €.',
    },
    {
      terme: 'Équilibre du monopole',
      definition: 'Situation où le monopole produit la quantité qui égalise recette marginale et coût marginal, et fixe le prix maximal que la demande accepte pour cette quantité ; le prix est supérieur au coût marginal.',
      exemple: 'Dans l’exemple du cours : 8 unités vendues au prix de 6, pour un coût marginal de 2.',
    },
    {
      terme: 'Oligopole',
      definition: 'Structure de marché où un petit nombre d’offreurs font face à une multitude de demandeurs ; les décisions de chaque firme dépendent de celles des autres (interdépendance stratégique).',
      exemple: 'Airbus et Boeing se partagent l’essentiel du marché des avions de ligne.',
    },
    {
      terme: 'Duopole',
      definition: 'Cas particulier d’oligopole dans lequel le marché ne compte que deux offreurs.',
      exemple: 'Le marché des systèmes d’exploitation pour smartphones (Android et iOS).',
    },
    {
      terme: 'Théorie des jeux',
      definition: 'Branche de l’économie qui étudie les situations dans lesquelles les choix de chaque agent dépendent des choix des autres (interactions stratégiques).',
      exemple: 'Analyser la fixation des prix entre deux opérateurs de téléphonie qui s’observent mutuellement.',
    },
    {
      terme: 'Dilemme du prisonnier',
      definition: 'Jeu dans lequel chaque joueur, en suivant son intérêt individuel, aboutit à un résultat moins bon pour chacun que s’ils avaient coopéré.',
      exemple: 'Deux firmes qui baissent toutes deux leurs prix gagnent 5 chacune, au lieu de 10 si elles avaient maintenu des prix élevés.',
    },
    {
      terme: 'Stratégie dominante',
      definition: 'Stratégie qui procure à un joueur le meilleur gain, quelle que soit la stratégie choisie par l’autre joueur.',
      exemple: 'Dans l’exemple du cours, le prix bas est dominant pour A : 14 > 10 et 5 > 3.',
    },
    {
      terme: 'Entente (cartel)',
      definition: 'Accord explicite ou tacite entre entreprises concurrentes visant à limiter la concurrence (fixation des prix, répartition des marchés, limitation de la production) ; elle est illicite.',
      exemple: 'Des fabricants de produits d’entretien sanctionnés pour s’être concertés sur leurs hausses de prix.',
    },
    {
      terme: 'Position dominante',
      definition: 'Situation d’une entreprise suffisamment puissante sur un marché pour pouvoir agir sans tenir compte de ses concurrents, de ses clients ou de ses fournisseurs ; être dominant n’est pas interdit.',
      exemple: 'Un moteur de recherche utilisé pour la grande majorité des recherches en ligne.',
    },
    {
      terme: 'Abus de position dominante',
      definition: 'Utilisation par une entreprise dominante de son pouvoir pour évincer ses concurrents ou exploiter ses clients ; il est interdit et sanctionné.',
      exemple: 'Favoriser ses propres services dans les résultats d’un moteur de recherche au détriment des concurrents.',
    },
    {
      terme: 'Fusion-acquisition (concentration)',
      definition: 'Opération par laquelle deux entreprises s’unissent (fusion) ou par laquelle une entreprise prend le contrôle d’une autre (acquisition), ce qui réduit le nombre de concurrents indépendants.',
      exemple: 'Le rachat d’un réseau de supermarchés par un concurrent.',
    },
    {
      terme: 'Politique de la concurrence',
      definition: 'Ensemble des règles et des actions publiques qui visent à préserver la concurrence sur les marchés : lutte contre les ententes et les abus de position dominante, contrôle des concentrations, encadrement des aides d’État.',
      exemple: 'L’Autorité de la concurrence inflige une amende à un cartel.',
    },
    {
      terme: 'Autorité de la concurrence',
      definition: 'Autorité administrative indépendante française chargée de faire respecter le droit de la concurrence ; la Commission européenne joue ce rôle pour les affaires de dimension européenne.',
      exemple: 'Elle peut autoriser, interdire ou conditionner une fusion entre deux distributeurs.',
    },
    {
      terme: 'Programme de clémence',
      definition: 'Dispositif qui accorde une réduction, voire une exonération d’amende, à l’entreprise qui révèle l’existence d’une entente à laquelle elle a participé.',
      exemple: 'Le premier membre d’un cartel à le dénoncer peut échapper à l’amende.',
    },
  ],

  auteurs: [
    {
      nom: 'Antoine Augustin Cournot',
      dates: '1801-1877',
      idee: 'Premier à modéliser le monopole et le duopole : il montre que le prix diminue quand le nombre de concurrents augmente.',
      oeuvre: 'Recherches sur les principes mathématiques de la théorie des richesses (1838)',
    },
    {
      nom: 'Joseph Schumpeter',
      dates: '1883-1950',
      idee: 'Le monopole d’innovation est le moteur du capitalisme : le profit temporaire récompense l’innovateur, avant que les imitateurs n’arrivent (« destruction créatrice »).',
      oeuvre: 'Capitalisme, socialisme et démocratie (1942)',
    },
    {
      nom: 'John Nash',
      dates: '1928-2015',
      idee: 'Définit l’équilibre d’un jeu : situation où aucun joueur n’a intérêt à changer seul de stratégie, même si une autre issue serait meilleure pour tous.',
    },
    {
      nom: 'Albert Tucker',
      dates: '1905-1995',
      idee: 'Formule et popularise le dilemme du prisonnier (1950) pour illustrer le conflit entre intérêt individuel et intérêt collectif.',
    },
  ],

  schemas: [
    {
      id: 'monopole',
      titre: 'L’équilibre du monopole comparé à la concurrence',
      legende: 'Données fictives : demande P = 10 − 0,5Q, recette marginale Rm = 10 − Q, coût marginal constant = 2. Le monopole produit là où Rm = Cm (Q = 8) et vend au prix lu sur la demande (P = 6) : point M. En concurrence, P = Cm = 2 et Q = 16 : point C. Zone claire : surplus du consommateur (16) ; zone orange : profit du monopole (32) ; triangle foncé : perte sèche (16).',
    },
  ],

  pieges: [
    {
      erreur: '« Le monopole fixe le prix qu’il veut. »',
      correction: 'Il choisit son prix, mais il est **contraint par la demande** : plus il fixe un prix élevé, moins il vend. Il cherche le couple prix-quantité qui maximise son profit.',
    },
    {
      erreur: 'Lire le prix du monopole sur la courbe de coût marginal ou de recette marginale.',
      correction: 'La quantité se lit à l’intersection **Rm = Cm** ; le prix se lit ensuite **sur la courbe de demande**, à la verticale de cette quantité.',
    },
    {
      erreur: '« Une position dominante est illégale. »',
      correction: 'Être dominant n’est pas interdit (on peut l’être grâce à un meilleur produit). Seul l’**abus** de position dominante est sanctionné.',
    },
    {
      erreur: 'Confondre oligopole et entente.',
      correction: 'L’oligopole est une **structure de marché** (peu d’offreurs). L’entente est un **comportement** (une coordination illicite) que l’oligopole rend plus facile.',
    },
    {
      erreur: '« Dans le dilemme du prisonnier, les joueurs sont irrationnels. »',
      correction: 'Au contraire, chacun est **rationnel individuellement** ; c’est l’agrégation des choix rationnels qui produit un résultat collectivement mauvais.',
    },
    {
      erreur: 'Dire que le monopole n’est pas efficace « parce qu’il fait des profits ».',
      correction: 'Le profit n’est qu’un transfert de surplus. L’inefficacité vient de la **perte sèche** : des échanges mutuellement avantageux n’ont pas lieu parce que la quantité est réduite.',
    },
    {
      erreur: 'Oublier les avantages possibles du monopole.',
      correction: 'Monopole naturel (pas de duplication des infrastructures) et monopole d’innovation (incitation à innover) peuvent se justifier ; il faut nuancer.',
    },
  ],

  synthese: {
    idees: [
      'Pouvoir de marché = capacité à fixer un prix supérieur au coût marginal ; ses sources : peu d’offreurs, ententes, barrières à l’entrée.',
      'Le monopole est faiseur de prix ; il peut être naturel, institutionnel ou d’innovation.',
      'Le monopole produit là où Rm = Cm et fixe le prix sur la courbe de demande : prix plus élevé et quantité plus faible qu’en concurrence.',
      'L’équilibre du monopole n’est pas efficace : il entraîne une perte sèche et un transfert de surplus des consommateurs vers le monopole.',
      'En oligopole, les décisions sont interdépendantes ; le dilemme du prisonnier montre que la concurrence fait baisser les profits, d’où l’intérêt de s’entendre.',
      'Les ententes sont illicites ; elles sont instables (tentation de tricher).',
      'La politique de la concurrence lutte contre les ententes et les abus de position dominante et contrôle les concentrations : elle augmente le surplus du consommateur.',
    ],
    formules: [
      { tex: 'Rm = Cm', legende: 'Quantité qui maximise le profit du monopole' },
      { tex: '\\text{Profit} = (P - CM) \\times Q', legende: 'CM : coût moyen (ici égal au coût marginal, constant)' },
    ],
    mecanismes: [
      ['Barrières à l’entrée', 'pas de nouveaux concurrents', 'peu d’offreurs', 'prix élevé durable'],
      ['Monopole', 'quantité réduite', 'prix > coût marginal', 'perte sèche'],
      ['Concurrence en oligopole', 'baisse des prix', 'profits réduits', 'incitation à l’entente'],
      ['Politique de la concurrence', 'prix plus bas, quantités plus élevées', 'hausse du surplus du consommateur'],
    ],
  },

  quiz: [
    {
      question: 'Une entreprise qui peut fixer un prix supérieur à son coût marginal sans perdre tous ses clients :',
      choix: ['Est preneuse de prix', 'Dispose d’un pouvoir de marché', 'Est en concurrence parfaite', 'Pratique forcément une entente'],
      bonne: 1,
      explication: 'C’est la définition du pouvoir de marché ; elle est alors faiseuse de prix.',
    },
    {
      question: 'Laquelle de ces situations n’est pas une barrière à l’entrée ?',
      choix: ['Un brevet', 'Des coûts fixes très élevés', 'Un grand nombre de petits concurrents', 'Une licence obligatoire'],
      bonne: 2,
      explication: 'Un grand nombre de petits concurrents est au contraire le signe d’un marché ouvert.',
    },
    {
      question: 'La distribution d’eau potable dans une ville est un exemple de :',
      choix: ['Monopole naturel', 'Monopole d’innovation', 'Oligopole', 'Concurrence parfaite'],
      bonne: 0,
      explication: 'Les coûts fixes du réseau sont tels qu’un seul réseau dessert la ville au moindre coût.',
    },
    {
      question: 'Un laboratoire qui commercialise seul un médicament breveté bénéficie :',
      choix: ['D’un monopole naturel', 'D’un monopole d’innovation', 'D’une entente', 'D’un abus de position dominante'],
      bonne: 1,
      explication: 'Le brevet protège temporairement l’innovation : c’est un monopole d’innovation (qui a aussi une base légale).',
    },
    {
      question: 'Pour un monopole, la recette marginale est :',
      choix: ['Égale au prix', 'Supérieure au prix', 'Inférieure au prix', 'Toujours nulle'],
      bonne: 2,
      explication: 'Pour vendre une unité de plus, il doit baisser le prix de toutes les unités vendues : il gagne moins que le prix de la dernière unité.',
    },
    {
      question: 'Le monopole choisit la quantité qui maximise son profit lorsque :',
      choix: ['Prix = coût marginal', 'Recette marginale = coût marginal', 'Prix = coût moyen', 'La recette totale est maximale'],
      bonne: 1,
      explication: 'Tant que Rm > Cm, produire une unité de plus augmente le profit.',
    },
    {
      question: 'Demande P = 10 − 0,5Q, Rm = 10 − Q, Cm = 2. Le monopole produit et vend :',
      choix: ['16 unités à 2', '8 unités à 6', '8 unités à 2', '4 unités à 8'],
      bonne: 1,
      explication: 'Rm = Cm : 10 − Q = 2, donc Q = 8. Prix lu sur la demande : 10 − 0,5 × 8 = 6.',
    },
    {
      question: 'Dans le même exemple, le profit du monopole s’élève à :',
      choix: ['48', '32', '16', '64'],
      bonne: 1,
      explication: 'Profit = (P − Cm) × Q = (6 − 2) × 8 = 32.',
    },
    {
      question: 'Toujours dans cet exemple, la perte sèche due au monopole est de :',
      choix: ['8', '16', '32', '64'],
      bonne: 1,
      explication: 'Triangle entre Q = 8 et Q = 16, entre la demande et le coût marginal : (6 − 2) × (16 − 8) / 2 = 16.',
    },
    {
      question: 'L’équilibre du monopole n’est pas efficace car :',
      choix: [
        'Le monopole réalise un profit',
        'Des échanges mutuellement avantageux n’ont pas lieu',
        'Le prix est inférieur au coût marginal',
        'La demande est décroissante',
      ],
      bonne: 1,
      explication: 'La quantité est réduite : des acheteurs prêts à payer plus que le coût n’achètent pas. Le surplus total diminue (perte sèche).',
    },
    {
      question: 'Un oligopole se caractérise par :',
      choix: [
        'Un seul offreur',
        'Un petit nombre d’offreurs interdépendants',
        'Un grand nombre d’offreurs preneurs de prix',
        'Un seul acheteur',
      ],
      bonne: 1,
      explication: 'Peu d’offreurs, qui doivent tenir compte des réactions de leurs concurrents.',
    },
    {
      question: 'Gains (A ; B) : élevé/élevé 10 ; 10 — A bas/B élevé 14 ; 3 — A élevé/B bas 3 ; 14 — bas/bas 5 ; 5. Quelle issue est obtenue sans coopération ?',
      choix: ['Élevé/élevé (10 ; 10)', 'Bas/bas (5 ; 5)', 'A bas, B élevé', 'Aucune issue'],
      bonne: 1,
      explication: 'Le prix bas est une stratégie dominante pour chacun (14 > 10 et 5 > 3) : les deux le choisissent.',
    },
    {
      question: 'Le dilemme du prisonnier montre que :',
      choix: [
        'La coopération est toujours spontanée',
        'L’intérêt individuel peut conduire à un résultat collectivement moins bon',
        'Les entreprises n’ont aucun intérêt à s’entendre',
        'Les prix bas profitent aux entreprises',
      ],
      bonne: 1,
      explication: 'Chacun agit rationnellement, mais tous auraient gagné à coopérer : d’où l’intérêt d’une entente.',
    },
    {
      question: 'Une entente entre producteurs pour fixer les prix est :',
      choix: ['Autorisée si elle est secrète', 'Illicite et sanctionnée', 'Obligatoire en oligopole', 'Une forme de monopole naturel'],
      bonne: 1,
      explication: 'Les ententes sont interdites ; l’Autorité de la concurrence ou la Commission européenne les sanctionnent par des amendes.',
    },
    {
      question: 'Le programme de clémence consiste à :',
      choix: [
        'Réduire l’amende de l’entreprise qui dénonce une entente',
        'Autoriser les ententes en période de crise',
        'Annuler les fusions déjà réalisées',
        'Subventionner les petites entreprises',
      ],
      bonne: 0,
      explication: 'Il déstabilise les cartels en incitant chaque membre à dénoncer les autres le premier.',
    },
    {
      question: 'Qu’est-ce qui est sanctionné par le droit de la concurrence ?',
      choix: [
        'Le fait d’avoir une position dominante',
        'L’abus de position dominante',
        'Le fait de déposer un brevet',
        'Le fait d’être une grande entreprise',
      ],
      bonne: 1,
      explication: 'Être dominant est autorisé ; abuser de cette position pour évincer les concurrents ne l’est pas.',
    },
    {
      question: 'La politique de la concurrence vise principalement à :',
      choix: [
        'Augmenter le profit des entreprises',
        'Augmenter le surplus du consommateur',
        'Supprimer toutes les grandes entreprises',
        'Fixer les prix à la place du marché',
      ],
      bonne: 1,
      explication: 'En maintenant la concurrence, elle fait baisser les prix et augmenter les quantités échangées.',
    },
  ],
};
