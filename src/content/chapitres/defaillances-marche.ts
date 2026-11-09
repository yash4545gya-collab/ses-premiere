import type { Chapitre } from '../types';

/**
 * Chapitre : Quelles sont les principales défaillances du marché ?
 * Chiffres vérifiés dans scripts/verifier-calculs.mjs (données fictives).
 */
export const defaillancesMarche: Chapitre = {
  id: 'defaillances-marche',
  titre: 'Quelles sont les principales défaillances du marché ?',
  titreCourt: 'Défaillances du marché',
  domaine: 'Science économique',
  objectifs: [
    'Comprendre que le marché est défaillant en présence d’externalités, et l’illustrer (notamment par la pollution).',
    'Comprendre que le marché est défaillant en présence de biens communs et de biens collectifs, et l’illustrer.',
    'Connaître les deux formes d’asymétrie d’information, la sélection adverse et l’aléa moral, et les illustrer (voitures d’occasion, assurance).',
    'Comprendre que la sélection adverse peut mener à l’absence d’équilibre.',
    'Illustrer l’intervention des pouvoirs publics face à ces défaillances.',
  ],

  essentiel: {
    problematique:
      'Le marché concurrentiel conduit en principe à une situation efficace. Dans quels cas échoue-t-il à le faire, et comment les pouvoirs publics peuvent-ils corriger ces défaillances ?',
    parties: [
      {
        titre: 'Les externalités : quand l’échange affecte des tiers',
        blocs: [
          {
            type: 'texte',
            texte:
              'Il y a **défaillance du marché** lorsque le libre fonctionnement du marché ne conduit pas à une allocation efficace des ressources (le surplus total n’est pas maximal). Les trois grandes défaillances étudiées sont les **externalités**, certains **types de biens** (communs et collectifs) et les **asymétries d’information**.',
          },
          {
            type: 'texte',
            texte:
              'Une **externalité** est l’effet de l’activité d’un agent sur le bien-être d’un autre agent, sans que cet effet donne lieu à une compensation monétaire par le marché. Elle est **négative** quand elle nuit à des tiers (pollution d’une usine, bruit d’un aéroport) et **positive** quand elle leur profite (un apiculteur dont les abeilles pollinisent les vergers voisins, la vaccination qui protège aussi les non-vaccinés, la recherche qui profite à d’autres entreprises).',
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi une externalité négative conduit à surproduire',
            etapes: [
              'Le producteur ne paie pas le coût qu’il impose aux tiers (pollution)',
              'Son coût privé est inférieur au coût social (coût privé + coût externe)',
              'Il offre davantage qu’il ne le ferait s’il supportait tout le coût',
              'La quantité échangée dépasse la quantité socialement optimale',
            ],
          },
          {
            type: 'texte',
            texte:
              'Exemple chiffré (données fictives) : demande $P = 10 - 0{,}5Q$, offre fondée sur le coût privé $P = 2 + 0{,}5Q$. Chaque unité produite crée une pollution évaluée à 2. Le marché échange 8 unités au prix de 6, alors que la quantité socialement optimale, qui tient compte du coût externe, n’est que de 6 (au prix de 7). Inversement, en présence d’une externalité **positive**, le marché produit **trop peu** : le producteur ne tient pas compte des bénéfices qu’il procure aux autres.',
          },
          { type: 'schema', id: 'externalite' },
          {
            type: 'texte',
            texte:
              'Les pouvoirs publics disposent de plusieurs instruments pour **internaliser** les externalités, c’est-à-dire faire en sorte que l’agent tienne compte des effets de ses actes :',
          },
          {
            type: 'tableau',
            entetes: ['Instrument', 'Principe', 'Exemple'],
            lignes: [
              ['Réglementation (normes)', 'Interdire ou limiter l’activité', 'Normes d’émission des véhicules, interdiction de certains pesticides'],
              ['Taxe (pollueur-payeur)', 'Faire payer le coût externe pour qu’il soit intégré au prix', 'Taxe carbone, malus automobile'],
              ['Subvention', 'Encourager une activité à externalités positives', 'Aides à la rénovation énergétique, crédit d’impôt recherche'],
              ['Marché de quotas d’émission', 'Fixer un plafond d’émissions et laisser s’échanger des droits à polluer', 'Système d’échange de quotas de l’Union européenne (SEQE)'],
            ],
          },
        ],
      },
      {
        titre: 'Biens communs et biens collectifs',
        blocs: [
          {
            type: 'texte',
            texte:
              'On classe les biens selon deux critères. Un bien est **rival** si sa consommation par une personne empêche sa consommation par une autre (une pomme mangée). Il est **excluable** si l’on peut empêcher quelqu’un de le consommer, en particulier s’il ne paie pas (un film en salle).',
          },
          {
            type: 'tableau',
            titre: 'Classification des biens',
            entetes: ['', 'Excluable', 'Non excluable'],
            lignes: [
              ['Rival', 'Biens privés (vêtements, pain)', 'Biens communs (poissons en haute mer, nappes phréatiques)'],
              ['Non rival', 'Biens de club (chaîne payante, autoroute peu fréquentée)', 'Biens collectifs ou publics (éclairage public, défense nationale, phare)'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Un **bien collectif** (non rival et non excluable) ne peut pas être produit en quantité suffisante par le marché. Puisqu’on ne peut pas exclure ceux qui ne paient pas, chacun a intérêt à attendre que les autres financent le bien pour en profiter gratuitement : c’est le comportement de **passager clandestin**. Aucune entreprise privée ne peut se faire rémunérer : le bien n’est pas produit, ou pas assez.',
          },
          {
            type: 'mecanisme',
            titre: 'Bien collectif et passager clandestin',
            etapes: [
              'Le bien est non excluable : on peut en profiter sans payer',
              'Chacun a intérêt à laisser les autres payer (passager clandestin)',
              'Les producteurs privés ne peuvent pas se faire rémunérer',
              'Le bien est sous-produit : l’État le produit et le finance par l’impôt',
            ],
          },
          {
            type: 'texte',
            texte:
              'Un **bien commun** (rival et non excluable) est menacé de **surexploitation** : chacun a intérêt à prélever le plus possible avant les autres, car ce qu’il ne prend pas sera pris par un autre. G. Hardin a appelé ce phénomène la « tragédie des communs » (épuisement des stocks de poissons, surpâturage).',
          },
          {
            type: 'texte',
            texte:
              'Pour éviter la surexploitation, on peut réglementer (quotas de pêche, périodes de chasse), créer des droits de propriété ou des droits d’usage, ou s’appuyer sur une **gestion collective** par les usagers eux-mêmes. Elinor Ostrom a montré que des communautés parviennent à gérer durablement des ressources communes grâce à des règles qu’elles se donnent et font respecter.',
          },
        ],
      },
      {
        titre: 'Les asymétries d’information',
        blocs: [
          {
            type: 'texte',
            texte:
              'Il y a **asymétrie d’information** lorsqu’une des parties à l’échange dispose d’une information que l’autre n’a pas. L’hypothèse de transparence de la concurrence parfaite n’est plus respectée. On distingue deux situations, selon que l’information cachée porte sur la **qualité du bien** avant l’échange, ou sur le **comportement** d’une partie après l’échange.',
          },
          {
            type: 'texte',
            texte:
              '**La sélection adverse** (ou antisélection) survient **avant** la signature du contrat : l’acheteur ne connaît pas la qualité réelle de ce qu’il achète. L’exemple classique est celui des voitures d’occasion étudié par G. Akerlof (1970). Le vendeur sait si sa voiture est bonne ou mauvaise ; l’acheteur l’ignore.',
          },
          {
            type: 'texte',
            texte:
              'Exemple (données fictives) : la moitié des voitures sont bonnes, la moitié sont de mauvaise qualité. Un acheteur serait prêt à payer 10 000 € une bonne voiture et 4 000 € une mauvaise. Ne pouvant les distinguer, il propose un prix moyen : $0{,}5 \\times 10\\,000 + 0{,}5 \\times 4\\,000 = 7\\,000$ €. Mais les propriétaires de bonnes voitures ne veulent pas les vendre à moins de 8 000 € : ils se retirent du marché. Seules restent les mauvaises voitures, et les acheteurs, qui l’anticipent, ne proposent plus que 4 000 €. Les échanges de bonnes voitures, pourtant avantageux pour tous, n’ont pas lieu.',
          },
          { type: 'schema', id: 'selection-adverse' },
          {
            type: 'texte',
            texte:
              'Le marché des bonnes voitures disparaît : **la sélection adverse peut conduire à l’absence d’équilibre** sur un marché (ou à un marché réduit aux seuls produits de mauvaise qualité). On la retrouve en assurance : si l’assureur ne connaît pas le risque de chaque client, il fixe une prime moyenne, qui fait fuir les assurés peu risqués et attire les plus risqués.',
          },
          {
            type: 'texte',
            texte:
              '**L’aléa moral** survient **après** la signature du contrat : une partie modifie son comportement sans que l’autre puisse l’observer. Une personne bien assurée contre le vol peut devenir moins vigilante ; un salarié dont l’effort n’est pas observable peut relâcher cet effort.',
          },
          {
            type: 'tableau',
            titre: 'Sélection adverse et aléa moral',
            entetes: ['', 'Sélection adverse', 'Aléa moral'],
            lignes: [
              ['Moment', 'Avant le contrat', 'Après le contrat'],
              ['Information cachée', 'Qualité du bien ou du risque', 'Comportement d’une partie'],
              ['Exemple', 'Voitures d’occasion, assurance (risques inégaux)', 'Assuré moins prudent, salarié moins impliqué'],
              ['Réponses', 'Garanties, labels, contrôle technique, questionnaire de santé, assurance obligatoire', 'Franchise, bonus-malus, contrôles, rémunération à la performance'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Pour réduire les asymétries d’information, les pouvoirs publics peuvent **imposer la transmission d’information** (contrôle technique obligatoire pour vendre une voiture d’occasion, étiquetage), **garantir la qualité** (normes, labels, garanties légales) ou **rendre l’assurance obligatoire** (assurance automobile, assurance maladie), ce qui empêche les « bons risques » de quitter le marché.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Défaillance du marché',
      definition: 'Situation dans laquelle le libre fonctionnement du marché ne conduit pas à une allocation efficace des ressources, ce qui peut justifier l’intervention des pouvoirs publics.',
      exemple: 'La pollution d’une usine n’est pas prise en compte par le prix de ses produits.',
    },
    {
      terme: 'Externalité',
      definition: 'Effet, positif ou négatif, de l’activité d’un agent sur le bien-être d’un autre agent, sans compensation monétaire par l’intermédiaire du marché.',
      exemple: 'Le bruit d’un chantier qui gêne les riverains.',
      voirAussi: ['Externalité positive', 'Externalité négative', 'Internalisation'],
    },
    {
      terme: 'Externalité négative',
      definition: 'Effet défavorable de l’activité d’un agent sur des tiers, qui ne sont pas indemnisés ; le marché produit alors trop.',
      exemple: 'Les rejets de CO₂ d’une centrale à charbon contribuent au réchauffement climatique.',
    },
    {
      terme: 'Externalité positive',
      definition: 'Effet favorable de l’activité d’un agent sur des tiers, qui ne le rémunèrent pas ; le marché produit alors trop peu.',
      exemple: 'Une personne vaccinée réduit le risque de contagion pour son entourage.',
    },
    {
      terme: 'Coût social',
      definition: 'Coût total d’une activité pour la société, égal à la somme du coût privé supporté par le producteur et du coût externe imposé aux tiers.',
      exemple: 'Le coût social d’un trajet en voiture inclut le carburant (coût privé) et la pollution (coût externe).',
    },
    {
      terme: 'Internalisation des externalités',
      definition: 'Action qui consiste à faire supporter (ou à rémunérer) par l’agent qui en est à l’origine les effets externes de son activité, pour qu’il en tienne compte dans ses décisions.',
      exemple: 'Une taxe carbone fait entrer le coût de la pollution dans le prix des carburants.',
    },
    {
      terme: 'Principe pollueur-payeur',
      definition: 'Principe selon lequel les coûts de la pollution doivent être supportés par celui qui la provoque.',
      exemple: 'Les redevances sur les rejets dans l’eau payées par les industriels.',
    },
    {
      terme: 'Taxe pigouvienne',
      definition: 'Taxe dont le montant est égal au coût externe par unité produite, afin d’aligner le coût privé sur le coût social (du nom de l’économiste A. C. Pigou).',
      exemple: 'Dans l’exemple du cours, une taxe de 2 par unité ramène la quantité au niveau optimal de 6.',
    },
    {
      terme: 'Marché de quotas d’émission',
      definition: 'Dispositif dans lequel les pouvoirs publics fixent un plafond global d’émissions et distribuent ou vendent des droits à polluer que les entreprises peuvent s’échanger.',
      exemple: 'Le système d’échange de quotas d’émission de l’Union européenne.',
    },
    {
      terme: 'Rivalité',
      definition: 'Caractéristique d’un bien dont la consommation par un agent réduit la quantité disponible pour les autres.',
      exemple: 'Une part de pizza mangée n’est plus disponible.',
    },
    {
      terme: 'Excluabilité',
      definition: 'Caractéristique d’un bien dont on peut empêcher la consommation par ceux qui ne paient pas.',
      exemple: 'On ne peut entrer dans un musée payant sans billet.',
    },
    {
      terme: 'Bien collectif (bien public)',
      definition: 'Bien non rival et non excluable : sa consommation par l’un ne réduit pas celle des autres, et on ne peut empêcher personne d’en profiter.',
      exemple: 'L’éclairage public, la défense nationale.',
    },
    {
      terme: 'Bien commun',
      definition: 'Bien rival mais non excluable : chacun peut y accéder librement, mais ce que l’un consomme n’est plus disponible pour les autres ; il est menacé de surexploitation.',
      exemple: 'Les stocks de poissons en haute mer.',
    },
    {
      terme: 'Bien de club',
      definition: 'Bien excluable mais non rival (tant qu’il n’est pas encombré).',
      exemple: 'Une plateforme de vidéo par abonnement.',
    },
    {
      terme: 'Passager clandestin',
      definition: 'Agent qui profite d’un bien ou d’un service sans contribuer à son financement, comptant sur la contribution des autres.',
      exemple: 'Un habitant qui refuse de cotiser à l’éclairage de sa rue, puisqu’il en profitera de toute façon.',
    },
    {
      terme: 'Tragédie des communs',
      definition: 'Surexploitation d’une ressource commune, chacun ayant intérêt à prélever le maximum avant que les autres ne le fassent.',
      exemple: 'L’effondrement des stocks de morue au large de Terre-Neuve dans les années 1990.',
    },
    {
      terme: 'Asymétrie d’information',
      definition: 'Situation dans laquelle une partie à un échange dispose d’informations que l’autre partie ne possède pas.',
      exemple: 'Le vendeur d’une voiture d’occasion connaît ses défauts, pas l’acheteur.',
    },
    {
      terme: 'Sélection adverse (antisélection)',
      definition: 'Asymétrie d’information portant sur la qualité d’un bien ou d’un risque avant la conclusion du contrat, qui conduit à évincer les produits ou les clients de bonne qualité et peut faire disparaître le marché.',
      exemple: 'Si l’assureur fixe une prime moyenne, les conducteurs prudents la jugent trop chère et ne s’assurent pas.',
    },
    {
      terme: 'Aléa moral',
      definition: 'Asymétrie d’information portant sur le comportement d’une partie après la conclusion du contrat : protégée par le contrat, elle peut prendre davantage de risques sans que l’autre partie puisse l’observer.',
      exemple: 'Un automobiliste bien assuré se gare moins prudemment.',
    },
    {
      terme: 'Signal',
      definition: 'Information coûteuse émise par la partie la mieux informée pour révéler la qualité de ce qu’elle propose.',
      exemple: 'Un vendeur qui offre une garantie de deux ans signale que son produit est fiable.',
    },
    {
      terme: 'Franchise',
      definition: 'Somme qui reste à la charge de l’assuré en cas de sinistre ; elle limite l’aléa moral en l’incitant à la prudence.',
      exemple: 'Après un accrochage, l’assuré paie les 300 premiers euros de réparation.',
    },
  ],

  auteurs: [
    {
      nom: 'Arthur Cecil Pigou',
      dates: '1877-1959',
      idee: 'Analyse les externalités (écart entre coût privé et coût social) et propose de les corriger par une taxe égale au dommage causé.',
      oeuvre: 'L’Économie du bien-être (1920)',
    },
    {
      nom: 'Ronald Coase',
      dates: '1910-2013',
      idee: 'Si les droits de propriété sont bien définis et la négociation peu coûteuse, les parties peuvent régler elles-mêmes le problème d’externalité, sans taxe.',
      oeuvre: '« Le problème du coût social » (1960)',
    },
    {
      nom: 'Paul Samuelson',
      dates: '1915-2009',
      idee: 'Formalise la notion de bien collectif (non rival, non excluable) que le marché ne peut produire en quantité suffisante.',
    },
    {
      nom: 'Garrett Hardin',
      dates: '1915-2003',
      idee: 'La « tragédie des communs » : une ressource en accès libre est surexploitée.',
      oeuvre: '« The Tragedy of the Commons » (1968)',
    },
    {
      nom: 'Elinor Ostrom',
      dates: '1933-2012',
      idee: 'Les communs peuvent être gérés durablement par les communautés d’usagers, grâce à des règles collectives, sans privatisation ni contrôle étatique.',
      oeuvre: 'La Gouvernance des biens communs (1990)',
    },
    {
      nom: 'George Akerlof',
      dates: 'né en 1940',
      idee: 'Le marché des voitures d’occasion (« lemons ») : l’asymétrie d’information sur la qualité peut faire disparaître les bons produits du marché.',
      oeuvre: '« The Market for Lemons » (1970)',
    },
  ],

  schemas: [
    {
      id: 'externalite',
      titre: 'Externalité négative : le marché produit trop',
      legende: 'Données fictives. L’offre reflète le coût privé (P = 2 + 0,5Q). Le coût social ajoute un coût externe de 2 par unité (P = 4 + 0,5Q). Le marché échange 8 unités (point M) ; l’optimum social est de 6 unités (point S). Le triangle foncé représente la perte de bien-être due à la surproduction (2). Une taxe pigouvienne de 2 par unité ramène la quantité à 6.',
    },
    {
      id: 'selection-adverse',
      titre: 'Sélection adverse sur le marché des voitures d’occasion',
      legende: 'Données fictives. Faute de pouvoir distinguer la qualité, l’acheteur propose un prix moyen ; les vendeurs de bonnes voitures se retirent ; il ne reste que les mauvaises voitures. Les échanges de bonnes voitures, pourtant avantageux, n’ont pas lieu.',
    },
  ],

  pieges: [
    {
      erreur: '« Une externalité, c’est ce qui est extérieur à l’entreprise. »',
      correction: 'C’est un **effet sur un tiers non compensé par le marché**. Acheter des matières premières à l’extérieur n’est pas une externalité : c’est un échange marchand.',
    },
    {
      erreur: '« Un bien collectif, c’est un bien produit par l’État. »',
      correction: 'Un bien collectif se définit par ses caractéristiques (**non rival, non excluable**), pas par son producteur. L’État produit aussi des biens privés (et l’éducation n’est pas strictement un bien collectif).',
    },
    {
      erreur: 'Confondre bien commun et bien collectif.',
      correction: 'Les deux sont non excluables, mais le bien commun est **rival** (risque de surexploitation) alors que le bien collectif est **non rival** (risque de sous-production).',
    },
    {
      erreur: 'Inverser sélection adverse et aléa moral.',
      correction: 'Sélection adverse : information cachée **avant** le contrat (qualité). Aléa moral : comportement caché **après** le contrat. Astuce : « sélection » = on choisit avant ; « moral » = on se comporte après.',
    },
    {
      erreur: '« Avec une externalité négative, le marché produit trop peu. »',
      correction: 'C’est l’inverse : le producteur ne paie pas tout le coût, il **surproduit**. Avec une externalité positive, il **sous-produit**.',
    },
    {
      erreur: 'Oublier de nuancer l’intervention publique.',
      correction: 'L’État peut aussi échouer (information imparfaite sur les coûts, réglementations mal calibrées). R. Coase et E. Ostrom proposent d’autres solutions que la taxe ou la réglementation.',
    },
  ],

  synthese: {
    idees: [
      'Défaillance du marché : le marché ne conduit pas à une situation efficace.',
      'Externalité : effet sur un tiers sans compensation ; négative → surproduction, positive → sous-production.',
      'Instruments publics : normes, taxe (pollueur-payeur, taxe pigouvienne), subvention, marché de quotas.',
      'Biens collectifs (non rivaux, non excluables) : passager clandestin → sous-production → financement par l’impôt.',
      'Biens communs (rivaux, non excluables) : surexploitation (tragédie des communs) → quotas, droits d’usage, gestion collective (Ostrom).',
      'Sélection adverse (avant le contrat) : les bons produits ou bons risques quittent le marché ; le marché peut disparaître (Akerlof).',
      'Aléa moral (après le contrat) : changement de comportement non observable ; franchise, bonus-malus, contrôles.',
      'L’État corrige les asymétries par l’information obligatoire, les normes, les garanties et l’assurance obligatoire.',
    ],
    mecanismes: [
      ['Coût externe non payé', 'coût privé < coût social', 'surproduction', 'taxe pigouvienne'],
      ['Non-excluabilité', 'passager clandestin', 'sous-production', 'production publique financée par l’impôt'],
      ['Qualité inobservable', 'prix moyen', 'retrait des bons vendeurs', 'disparition du marché'],
      ['Assurance complète', 'moins de prudence', 'plus de sinistres', 'franchise, bonus-malus'],
    ],
  },

  quiz: [
    {
      question: 'Une externalité est :',
      choix: [
        'Un échange réalisé avec un pays étranger',
        'Un effet sur un tiers non compensé par le marché',
        'Un coût supporté par l’entreprise qui produit',
        'Une subvention publique',
      ],
      bonne: 1,
      explication: 'Elle affecte le bien-être d’un autre agent sans que le marché ne donne lieu à paiement ou indemnisation.',
    },
    {
      question: 'Lequel de ces exemples est une externalité positive ?',
      choix: ['Le bruit d’un aéroport', 'La pollinisation des vergers par les abeilles d’un apiculteur', 'Les embouteillages', 'La pollution d’une rivière'],
      bonne: 1,
      explication: 'L’apiculteur rend un service aux arboriculteurs sans être rémunéré.',
    },
    {
      question: 'En présence d’une externalité négative de production, le marché :',
      choix: ['Produit trop peu', 'Produit trop', 'Produit la quantité optimale', 'Disparaît forcément'],
      bonne: 1,
      explication: 'Le producteur ne supporte pas le coût externe : son coût privé est trop faible, il produit au-delà de l’optimum social.',
    },
    {
      question: 'Demande P = 10 − 0,5Q ; coût privé P = 2 + 0,5Q ; coût externe 2 par unité. La quantité socialement optimale est :',
      choix: ['8', '6', '4', '10'],
      bonne: 1,
      explication: 'Coût social : P = 4 + 0,5Q. 10 − 0,5Q = 4 + 0,5Q donne Q = 6 (contre 8 sur le marché).',
    },
    {
      question: 'Une taxe pigouvienne a pour but de :',
      choix: [
        'Financer les biens collectifs',
        'Faire supporter au pollueur le coût externe qu’il crée',
        'Réduire les inégalités de revenus',
        'Supprimer la concurrence',
      ],
      bonne: 1,
      explication: 'Elle internalise l’externalité : le coût privé rejoint le coût social.',
    },
    {
      question: 'Un bien non rival et non excluable est :',
      choix: ['Un bien privé', 'Un bien commun', 'Un bien de club', 'Un bien collectif'],
      bonne: 3,
      explication: 'Exemple : l’éclairage public ou la défense nationale.',
    },
    {
      question: 'Les stocks de poissons en haute mer sont :',
      choix: ['Un bien collectif', 'Un bien commun', 'Un bien de club', 'Un bien privé'],
      bonne: 1,
      explication: 'Rival (un poisson pêché n’est plus disponible) et non excluable (accès libre) : bien commun.',
    },
    {
      question: 'Le comportement de passager clandestin explique :',
      choix: [
        'La surexploitation des biens privés',
        'La sous-production des biens collectifs par le marché',
        'La sélection adverse',
        'L’existence des monopoles',
      ],
      bonne: 1,
      explication: 'Chacun compte sur les autres pour financer un bien dont il ne peut être exclu : aucun producteur privé ne peut se faire payer.',
    },
    {
      question: 'Selon E. Ostrom, les biens communs :',
      choix: [
        'Doivent toujours être privatisés',
        'Doivent toujours être gérés par l’État',
        'Peuvent être gérés durablement par les communautés d’usagers',
        'Sont forcément surexploités',
      ],
      bonne: 2,
      explication: 'Elle a étudié des communautés qui se donnent des règles efficaces de gestion des ressources partagées.',
    },
    {
      question: 'La sélection adverse intervient :',
      choix: ['Après la signature du contrat', 'Avant la signature du contrat', 'Uniquement sur les marchés financiers', 'Seulement en monopole'],
      bonne: 1,
      explication: 'Elle porte sur une caractéristique cachée (qualité du bien, niveau de risque) au moment de contracter.',
    },
    {
      question: 'Bonnes voitures : 10 000 € pour l’acheteur (le vendeur en veut au moins 8 000 €) ; mauvaises : 4 000 € ; 50 % de chaque. Le prix moyen proposé est :',
      choix: ['8 000 €', '7 000 €', '10 000 €', '4 000 €'],
      bonne: 1,
      explication: '0,5 × 10 000 + 0,5 × 4 000 = 7 000 €, inférieur aux 8 000 € exigés par les vendeurs de bonnes voitures, qui se retirent.',
    },
    {
      question: 'Dans le modèle d’Akerlof, la sélection adverse peut conduire à :',
      choix: [
        'Une hausse de la qualité moyenne',
        'La disparition du marché des produits de bonne qualité',
        'Un monopole naturel',
        'Une externalité positive',
      ],
      bonne: 1,
      explication: 'Les bons vendeurs quittent le marché ; à la limite, il n’y a plus d’équilibre pour les bons produits.',
    },
    {
      question: 'Un assuré qui laisse sa voiture ouverte parce qu’il est bien couvert contre le vol illustre :',
      choix: ['La sélection adverse', 'L’aléa moral', 'Le passager clandestin', 'Une externalité positive'],
      bonne: 1,
      explication: 'Son comportement change après la signature du contrat, sans que l’assureur puisse l’observer.',
    },
    {
      question: 'Quel dispositif réduit l’aléa moral en assurance ?',
      choix: ['La franchise', 'L’éclairage public', 'Le brevet', 'La taxe carbone'],
      bonne: 0,
      explication: 'L’assuré supporte une partie du dommage : il reste incité à la prudence.',
    },
    {
      question: 'Le contrôle technique obligatoire pour vendre une voiture d’occasion vise à réduire :',
      choix: ['L’aléa moral', 'La sélection adverse', 'Les externalités positives', 'Le pouvoir de marché'],
      bonne: 1,
      explication: 'Il transmet à l’acheteur une information sur la qualité du véhicule avant l’achat.',
    },
    {
      question: 'Rendre l’assurance automobile obligatoire permet notamment :',
      choix: [
        'D’éviter que les conducteurs prudents quittent le marché',
        'De supprimer l’aléa moral',
        'D’augmenter les primes des conducteurs prudents',
        'De créer un bien collectif',
      ],
      bonne: 0,
      explication: 'Tout le monde est assuré : les « bons risques » restent dans la mutualisation, ce qui limite la sélection adverse.',
    },
  ],
};
