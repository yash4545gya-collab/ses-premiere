import type { DeveloppementChapitre } from '../../types';

/** Chapitre III — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devDefaillancesMarche: DeveloppementChapitre = {
  id: 'defaillances-marche',
  definitions: {
    'Défaillance du marché': {
      developpement:
        'Le marché concurrentiel est efficace quand toutes les conditions du modèle sont réunies. Une défaillance apparaît quand l’une d’elles manque : un effet sur des tiers qui ne passe pas par les prix (externalité), un bien dont on ne peut pas faire payer l’usage (bien collectif, bien commun), ou une information cachée (asymétrie). Le marché produit alors trop, trop peu, ou pas du tout. C’est l’argument principal pour justifier l’intervention publique.',
      exemples: [
        'Le marché seul ne finance pas l’éclairage des rues : personne ne peut être obligé de payer.',
        'Le marché des voitures d’occasion fonctionne mal si l’acheteur ne peut pas vérifier l’état du véhicule.',
      ],
      nePasConfondre: 'Défaillance du marché (le marché fonctionne mal) et crise économique (baisse générale de l’activité).',
    },
    Externalité: {
      developpement:
        'Une externalité est un « effet secondaire » d’une activité sur quelqu’un qui n’a rien acheté ni vendu. Elle est dite « externe » parce qu’elle sort du marché : aucun prix ne la compense. Celui qui la crée n’en tient donc pas compte dans ses décisions. Résultat : trop d’activités nuisibles et pas assez d’activités utiles aux autres.',
      exemples: [
        'Une fête bruyante qui empêche les voisins de dormir.',
        'Un propriétaire qui rénove joliment sa façade embellit la rue pour tous les passants.',
      ],
    },
    'Externalité négative': {
      synonymes: ['externalités négatives'],
      developpement:
        'Le pollueur ne paie pas le dommage qu’il cause : son coût privé est plus faible que le coût pour la société. Il produit donc plus que ce qui serait souhaitable pour tous. C’est pourquoi on dit que le marché « surproduit » en présence d’une externalité négative.',
      exemples: [
        'Les fumées d’une usine qui salissent le linge et abîment la santé des riverains.',
        'La congestion : chaque voiture de plus ralentit tous les autres automobilistes, sans les dédommager.',
      ],
      nePasConfondre: 'Externalité négative (effet sur des tiers, non compensé) et coût de production (payé par l’entreprise elle-même).',
    },
    'Externalité positive': {
      developpement:
        'Celui qui crée une externalité positive n’est pas récompensé pour le bien qu’il fait aux autres : il en fait donc moins que ce qui serait utile à la société. Le marché « sous-produit ». C’est pourquoi l’État subventionne souvent ces activités (vaccination, recherche, éducation).',
      exemples: [
        'Une entreprise qui forme ses salariés : s’ils partent, une autre entreprise profite de cette formation sans l’avoir payée.',
        'La recherche fondamentale, dont les découvertes profitent à des milliers d’entreprises.',
      ],
    },
    'Coût social': {
      developpement:
        'Le coût social est ce que l’activité coûte vraiment à la société : ce que paie l’entreprise (coût privé) plus le dommage subi par les autres (coût externe). Quand le coût social dépasse le coût privé, le prix du marché est « trop bas » par rapport aux dégâts causés.',
      exemples: [
        'Un trajet en avion : le billet (coût privé) plus les émissions de CO₂ (coût externe).',
        'Dans l’exemple du cours, le coût social d’une unité est son coût privé plus 2 (dommage de pollution).',
      ],
    },
    'Internalisation des externalités': {
      synonymes: ['internaliser'],
      developpement:
        'Internaliser, c’est faire « rentrer » l’effet externe dans le calcul de celui qui le crée. On fait payer au pollueur le dommage (taxe), on l’oblige à réduire sa pollution (norme), ou on récompense celui qui crée un bienfait (subvention). Il prend alors en compte ce que son activité coûte ou rapporte aux autres.',
      exemples: [
        'Une taxe sur les sacs plastiques fait payer à l’usager une partie de la pollution qu’ils causent.',
        'Une aide à l’installation de panneaux solaires récompense une activité qui réduit les émissions.',
      ],
    },
    'Principe pollueur-payeur': {
      developpement:
        'Ce principe dit que les coûts de la pollution doivent être supportés par celui qui la crée, et non par la collectivité. Il est inscrit dans le droit de l’environnement. Il inspire les taxes environnementales et les obligations de dépollution.',
      exemples: [
        'Un industriel condamné à financer le nettoyage d’une rivière qu’il a polluée.',
        'La taxe sur les déchets mis en décharge, payée par ceux qui les produisent.',
      ],
    },
    'Taxe pigouvienne': {
      developpement:
        'Imaginée par l’économiste Arthur Cecil Pigou, elle vise un montant égal au dommage causé par chaque unité. Avec elle, le coût privé du pollueur devient égal au coût social : le marché produit alors la quantité optimale. En pratique, il est difficile de mesurer exactement le dommage, donc de fixer le bon montant.',
      exemples: [
        'Dans l’exemple du cours, une taxe de 2 par unité fait passer la quantité de 8 (marché) à 6 (optimum).',
        'La taxe carbone française sur les carburants s’inspire de ce principe.',
      ],
    },
    'Marché de quotas d’émission': {
      developpement:
        'L’État fixe un plafond total d’émissions et distribue ou vend des « droits à polluer » (quotas). Une entreprise qui pollue moins que ses quotas peut revendre le surplus ; celle qui pollue plus doit en acheter. Le prix du quota incite chaque entreprise à réduire ses émissions, et la réduction se fait là où elle coûte le moins.',
      exemples: [
        'Une centrale électrique qui investit dans une technologie propre revend ses quotas inutilisés à une cimenterie.',
        'Le système européen d’échange de quotas d’émission couvre l’industrie lourde, l’énergie et une partie de l’aviation.',
      ],
    },
    Rivalité: {
      synonymes: ['rival'],
      developpement:
        'Un bien est rival si ce que j’en consomme n’est plus disponible pour les autres. La plupart des biens ordinaires sont rivaux. À l’inverse, un bien non rival peut être utilisé par beaucoup de personnes en même temps sans s’épuiser.',
      exemples: [
        'Une place assise dans un bus bondé est rivale : si je la prends, tu restes debout.',
        'Une émission de radio est non rivale : un auditeur de plus n’empêche personne d’écouter.',
      ],
    },
    Excluabilité: {
      synonymes: ['excluable'],
      developpement:
        'Un bien est excluable si l’on peut empêcher quelqu’un de l’utiliser, en général parce qu’il ne paie pas. L’excluabilité permet de vendre le bien. Quand l’exclusion est impossible ou trop coûteuse, le marché ne peut pas se faire payer.',
      exemples: [
        'Un concert dans une salle est excluable : on contrôle les billets à l’entrée.',
        'Un feu d’artifice tiré au-dessus d’une ville n’est pas excluable : tout le monde le voit.',
      ],
    },
    'Bien collectif (bien public)': {
      synonymes: ['biens collectifs', 'bien collectif'],
      developpement:
        'Comme le bien collectif est non rival et non excluable, personne ne peut être obligé de payer pour en profiter. Chacun a intérêt à laisser les autres payer : le marché ne le produit pas, ou pas assez. C’est pourquoi l’État le produit et le finance par l’impôt, que tout le monde est obligé de payer.',
      exemples: [
        'La défense nationale protège tous les habitants, y compris ceux qui ne paieraient pas.',
        'Une digue contre les inondations protège tout le quartier.',
      ],
      nePasConfondre: 'Bien collectif (défini par ses caractéristiques : non rival, non excluable) et service public (défini par celui qui le produit : l’État).',
    },
    'Bien commun': {
      synonymes: ['biens communs'],
      developpement:
        'Le bien commun est accessible à tous (non excluable), mais il s’épuise quand on l’utilise (rival). Chaque utilisateur a intérêt à prendre le plus possible avant les autres, car ce qu’il laisse sera pris par quelqu’un d’autre. Sans règle, la ressource est surexploitée jusqu’à disparaître parfois.',
      exemples: [
        'Les nappes d’eau souterraines utilisées par tous les agriculteurs d’une région.',
        'Les pâturages communaux d’un village de montagne.',
      ],
    },
    'Bien de club': {
      developpement:
        'Le bien de club est réservé à ceux qui paient (excluable), mais un utilisateur de plus ne gêne pas les autres (non rival), tant qu’il n’y a pas trop de monde. Il peut donc être vendu sur un marché, souvent par abonnement.',
      exemples: [
        'Une salle de sport par abonnement, en dehors des heures de pointe.',
        'Un logiciel vendu sous licence : une copie de plus ne coûte presque rien.',
      ],
    },
    'Passager clandestin': {
      developpement:
        'Le passager clandestin est celui qui voyage sans billet en comptant sur le fait que les autres paient le bus. En économie, c’est celui qui profite d’un bien collectif ou d’une action commune sans y contribuer. Si tout le monde raisonne ainsi, personne ne paie et le bien n’existe pas.',
      exemples: [
        'Un salarié qui profite de la hausse de salaire obtenue par la grève de ses collègues sans avoir fait grève.',
        'Un pays qui profite des efforts des autres contre le réchauffement climatique sans réduire ses propres émissions.',
      ],
    },
    'Tragédie des communs': {
      synonymes: ['surexploitation'],
      developpement:
        'Garrett Hardin décrit des bergers qui partagent un pâturage : chacun a intérêt à ajouter une vache, car il en tire tout le profit alors que le surpâturage est partagé entre tous. Résultat : le pâturage est détruit. La « tragédie » est que chacun agit rationnellement, mais que le résultat est désastreux pour tous.',
      exemples: [
        'La surpêche du thon rouge en Méditerranée, avant l’instauration de quotas.',
        'Les embouteillages : chacun prend sa voiture, la route est saturée pour tous.',
      ],
    },
    'Asymétrie d’information': {
      synonymes: ['information asymétrique', 'asymétries d’information'],
      developpement:
        'Dans le modèle de concurrence parfaite, tout le monde sait tout (transparence). En réalité, l’une des parties sait souvent plus de choses que l’autre : le vendeur connaît mieux son produit, l’assuré connaît mieux ses risques, le salarié connaît mieux ses efforts. Celui qui est mieux informé peut en profiter, et l’autre se méfie : le marché fonctionne mal.',
      exemples: [
        'Un garagiste sait mieux que son client si une réparation est vraiment nécessaire.',
        'Un candidat à un emploi connaît mieux que le recruteur sa véritable motivation.',
      ],
    },
    'Sélection adverse (antisélection)': {
      developpement:
        'La sélection adverse joue avant la signature du contrat. Comme l’acheteur ne peut pas distinguer la bonne qualité de la mauvaise, il propose un prix moyen. Ce prix est trop bas pour ceux qui ont de bons produits : ils se retirent. La qualité moyenne baisse, le prix aussi… jusqu’à ce qu’il ne reste que les mauvais produits. Le marché « sélectionne » à l’envers, d’où son nom.',
      exemples: [
        'Une mutuelle qui fixe la même cotisation pour tous attire surtout les personnes qui se savent souvent malades.',
        'Un site de cours particuliers sans avis vérifiés : les bons professeurs, mal payés au prix moyen, partent ailleurs.',
      ],
      nePasConfondre: 'Sélection adverse (information cachée avant le contrat : la qualité) et aléa moral (comportement caché après le contrat).',
    },
    'Aléa moral': {
      developpement:
        'L’aléa moral joue après la signature du contrat : une fois protégé, l’un des contractants peut changer de comportement sans que l’autre puisse le voir. Ce n’est pas forcément malhonnête : on fait simplement un peu moins attention quand on sait que les conséquences ne retomberont pas sur nous.',
      exemples: [
        'Une personne qui loue une voiture avec assurance tous risques conduit parfois moins prudemment qu’avec sa propre voiture.',
        'Une banque qui sait que l’État la sauvera en cas de faillite peut prendre des risques excessifs.',
      ],
    },
    Signal: {
      developpement:
        'Pour réduire la méfiance, la partie la mieux informée peut envoyer un signal : une information difficile à imiter qui révèle sa qualité. Un signal est crédible parce qu’il coûterait cher à quelqu’un de mauvaise qualité.',
      exemples: [
        'Un diplôme signale à l’employeur des compétences et de la persévérance.',
        'Un vendeur de voitures d’occasion qui offre une garantie d’un an montre qu’il croit à la fiabilité du véhicule.',
      ],
    },
    Franchise: {
      developpement:
        'Avec une franchise, l’assuré paie lui-même la première partie du dommage. Il garde donc un intérêt à éviter les sinistres, ce qui limite l’aléa moral. Les petits sinistres, souvent liés au manque de précaution, sont aussi découragés.',
      exemples: [
        'Une franchise de 150 € sur l’assurance d’un téléphone : on fait plus attention à ne pas le casser.',
        'En assurance santé, une participation forfaitaire laissée à la charge du patient lors des consultations.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Coût privé',
      definition: 'Coût supporté directement par l’agent qui produit ou consomme un bien (matières, salaires, énergie…), sans tenir compte des effets sur les autres.',
      exemple: 'Pour un automobiliste, le carburant, l’assurance et l’usure de sa voiture.',
      developpement: 'C’est sur la base du coût privé que l’entreprise décide combien produire. En présence d’une externalité négative, il est inférieur au coût social.',
      exemples: ['Dans l’exemple du cours, le coût privé est donné par l’offre P = 2 + 0,5Q.'],
    },
    {
      terme: 'Coût externe',
      definition: 'Partie du coût d’une activité supportée par des tiers sans compensation (pollution, bruit, congestion…).',
      exemple: 'Les frais de santé liés à la pollution de l’air subis par les riverains d’une autoroute.',
      developpement: 'Coût social = coût privé + coût externe. Une taxe pigouvienne cherche à faire payer le coût externe à celui qui le cause.',
      exemples: ['Dans l’exemple du cours, le coût externe est de 2 par unité produite.'],
    },
    {
      terme: 'Réglementation (normes)',
      synonymes: ['réglementation', 'normes environnementales'],
      definition: 'Instrument des pouvoirs publics qui consiste à interdire une activité ou à fixer des limites obligatoires (normes) que les agents doivent respecter sous peine de sanction.',
      exemple: 'Les normes d’émission des véhicules neufs, l’interdiction de certains pesticides.',
      developpement:
        'La réglementation est simple à comprendre et efficace contre les pollutions très dangereuses. Mais elle est rigide : elle impose le même effort à tous, même à ceux pour qui réduire la pollution coûte très cher, et elle demande des contrôles.',
      exemples: ['L’interdiction des sacs plastiques à usage unique en caisse.'],
    },
    {
      terme: 'Gestion collective des communs',
      synonymes: ['gestion collective'],
      definition: 'Mode de gestion d’une ressource commune par la communauté de ses usagers, qui se donnent des règles d’accès et de partage et les font respecter.',
      exemple: 'Des pêcheurs qui fixent ensemble des périodes de pêche et des tailles minimales de poissons.',
      developpement:
        'Elinor Ostrom a montré que ni la privatisation ni l’intervention de l’État ne sont les seules solutions à la tragédie des communs : des communautés réussissent à gérer leurs ressources pendant des siècles grâce à des règles claires, une surveillance par les usagers et des sanctions graduées.',
      exemples: ['Les systèmes d’irrigation partagés de certaines vallées, gérés par les agriculteurs eux-mêmes.'],
    },
    {
      terme: 'Bonus-malus',
      definition: 'Système d’assurance qui baisse la prime des assurés sans sinistre (bonus) et l’augmente pour ceux qui en déclarent (malus).',
      exemple: 'En assurance automobile, un conducteur sans accident voit sa prime baisser chaque année.',
      developpement: 'Le bonus-malus limite l’aléa moral : l’assuré a intérêt à éviter les accidents pour ne pas payer plus cher. Il aide aussi l’assureur à mieux connaître le risque de chaque client.',
      exemples: ['Un conducteur responsable d’un accident voit sa prime augmenter l’année suivante.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Calculer la surproduction due à la pollution',
        texte:
          'Demande P = 10 − 0,5Q, **coût privé** P = 2 + 0,5Q, pollution de 2 par unité. Le marché échange 8 unités à 6 €. En ajoutant le **coût externe**, le **coût social** devient P = 4 + 0,5Q : l’optimum est 6 unités à 7 €. Les 2 unités de trop créent une **perte** de bien-être de 2. Une **taxe pigouvienne** de 2 ramène la quantité à 6.',
      },
      {
        titre: 'Externalité positive : pourquoi subventionner la vaccination',
        texte:
          'Quand Nora se fait vacciner contre la grippe, elle se protège, mais elle protège aussi ses grands-parents et ses collègues en réduisant la contagion. Ce bénéfice pour les autres n’entre pas dans sa décision : sans aide, trop peu de personnes se vaccinent. En rendant le vaccin gratuit pour les publics fragiles, l’État corrige cette **externalité positive**.',
      },
      {
        titre: 'Norme, taxe ou quotas : comparer',
        texte:
          'Pour réduire les émissions d’une région, l’État peut imposer à chaque usine de réduire ses émissions de 20 % (**réglementation**), taxer chaque tonne émise (**taxe pigouvienne**), ou fixer un plafond régional et laisser les usines s’échanger des **quotas**. Avec la taxe ou les quotas, les usines qui peuvent réduire leurs émissions à faible coût le font davantage : le même résultat coûte moins cher à la société.',
      },
    ],
    [
      {
        titre: 'Classer des biens dans le tableau rival / excluable',
        texte:
          'Un sandwich : rival et excluable (**bien privé**). Un film sur une plateforme d’abonnement : non rival et excluable (**bien de club**). Les poissons d’un lac en accès libre : rival et non excluable (**bien commun**). Un phare qui guide tous les bateaux : non rival et non excluable (**bien collectif**).',
      },
      {
        titre: 'Le passager clandestin dans une colocation',
        texte:
          'Quatre colocataires partagent un salon. Personne ne veut payer seul le nettoyage du salon, chacun espérant que les autres s’en occupent : c’est le comportement de **passager clandestin**. La solution ? Une règle collective (un tableau de ménage) ou une cagnotte obligatoire, comme l’impôt pour les biens collectifs.',
      },
    ],
    [
      {
        titre: 'La sélection adverse, étape par étape',
        texte:
          'Sur un marché d’occasion, la moitié des vélos électriques sont en bon état (valeur 1 000 €) et la moitié ont une batterie usée (valeur 400 €). L’acheteur, qui ne sait pas les distinguer, propose la moyenne : 700 €. Les propriétaires de bons vélos, qui en veulent au moins 850 €, refusent de vendre. Il ne reste que les mauvais vélos, et le prix tombe à 400 € : c’est la **sélection adverse** (données fictives).',
      },
      {
        titre: 'Repérer l’aléa moral',
        texte:
          'Après avoir souscrit une assurance qui rembourse intégralement les vols de vélo, Tom attache moins soigneusement son vélo. L’assureur ne peut pas le voir : c’est de l’**aléa moral**. Pour s’en protéger, l’assureur impose une **franchise** de 100 € et exige un antivol homologué.',
      },
      {
        titre: 'Comment l’État corrige les asymétries d’information',
        texte:
          'Le contrôle technique obligatoire informe l’acheteur d’une voiture d’occasion. Les garanties légales de conformité protègent l’acheteur d’un produit défectueux. L’assurance automobile obligatoire empêche les conducteurs prudents de quitter l’assurance, ce qui limite la **sélection adverse**.',
      },
    ],
  ],
};
