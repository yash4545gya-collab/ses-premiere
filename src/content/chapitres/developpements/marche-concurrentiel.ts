import type { DeveloppementChapitre } from '../../types';

/** Chapitre I — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devMarcheConcurrentiel: DeveloppementChapitre = {
  id: 'marche-concurrentiel',
  definitions: {
    Marché: {
      developpement:
        'Un marché n’est pas forcément un lieu que l’on peut visiter : c’est une rencontre entre ceux qui veulent vendre (l’offre) et ceux qui veulent acheter (la demande). Cette rencontre fait apparaître un prix, qui informe chacun sur la rareté du bien. On parle donc du « marché du travail », du « marché du pétrole » ou du « marché des smartphones », même si aucun lieu unique ne réunit acheteurs et vendeurs.',
      exemples: [
        'Le marché du travail : les entreprises demandent du travail, les salariés l’offrent, et le salaire en est le prix.',
        'Une application de revente de vêtements d’occasion : vendeurs et acheteurs ne se voient jamais, mais un prix se forme à chaque échange.',
      ],
      nePasConfondre:
        'Le marché (rencontre d’une offre et d’une demande) et le lieu de vente (un magasin, une halle). Un magasin est un vendeur parmi d’autres sur le marché.',
    },
    Institution: {
      developpement:
        'Une institution est une « règle du jeu » durable, qui dure plus longtemps que les individus qui la suivent. Le marché a besoin de règles pour fonctionner : sans droit de propriété, je ne peux pas vendre ce qui ne m’appartient pas ; sans contrat que la justice fait respecter, je n’ose pas payer avant d’être livré ; sans monnaie acceptée par tous, je dois troquer. Dire que le marché est une institution, c’est dire qu’il est construit par la société, pas naturel.',
      exemples: [
        'Le Code de la consommation oblige à afficher les prix : l’acheteur peut comparer les offres.',
        'Les labels (AB, Label rouge) garantissent une qualité et rassurent l’acheteur qui ne peut pas la vérifier lui-même.',
      ],
    },
    'Concurrence pure et parfaite (CPP)': {
      developpement:
        'La CPP est un cas idéal construit par les économistes pour comprendre le fonctionnement d’un marché. « Pure » renvoie à l’atomicité, à l’homogénéité et à la libre entrée ; « parfaite » renvoie à la transparence et à la mobilité des facteurs. Si une seule hypothèse n’est pas respectée (un vendeur trop gros, un produit de marque, une information cachée), la concurrence devient imparfaite et certains agents peuvent influencer le prix.',
      exemples: [
        'Le marché mondial du blé s’en approche : des milliers de producteurs, un produit standard, des prix publiés en continu.',
        'Le marché des sodas en est loin : deux grandes marques, des produits différenciés par la publicité.',
      ],
      synonymes: ['concurrence parfaite'],
      nePasConfondre: 'Le modèle de CPP et un marché réel « très concurrentiel » : un marché peut être très concurrentiel sans réunir les cinq hypothèses.',
    },
    Atomicité: {
      developpement:
        'Le mot vient de l’image de l’atome : chaque acheteur et chaque vendeur est minuscule par rapport au marché. Sa décision n’a donc aucun effet sur le prix : s’il produit le double ou s’il arrête, le prix ne bouge pas. C’est cette hypothèse qui fait des agents des preneurs de prix.',
      exemples: [
        'Un étudiant qui achète un café au distributeur ne fait pas varier le prix mondial du café.',
        'Un éleveur qui vend 50 bovins sur un marché national qui en échange des millions n’a pas d’influence sur le cours.',
      ],
    },
    'Preneur de prix': {
      synonymes: ['preneuse de prix', 'preneurs de prix'],
      developpement:
        'Un preneur de prix ne fixe pas son prix : il le constate et décide seulement combien il achète ou vend. S’il demandait plus cher, ses clients iraient chez un concurrent qui vend exactement le même produit ; s’il vendait moins cher, il perdrait de l’argent sans raison, puisqu’il peut tout vendre au prix du marché. Son seul choix est la quantité.',
      exemples: [
        'Un producteur de lait qui vend à une coopérative au prix fixé par le marché.',
        'Un particulier qui vend de l’or : il reçoit le cours du jour, quoi qu’il en pense.',
      ],
      nePasConfondre: 'Preneur de prix (subit le prix : concurrence) et faiseur de prix (choisit son prix : monopole, chapitre II).',
    },
    'Degré de concurrence': {
      developpement:
        'Les marchés ne sont pas « concurrentiels » ou « non concurrentiels » : ils se situent sur une échelle. Plus les offreurs sont nombreux et petits, plus la concurrence est forte et moins chacun peut agir sur le prix. À l’autre bout de l’échelle, le monopole n’a aucun concurrent direct. Le degré de concurrence dépend aussi de la facilité à entrer sur le marché et de la ressemblance entre les produits.',
      exemples: [
        'La coiffure en ville : beaucoup de salons, concurrence forte.',
        'Les fournisseurs d’accès à Internet : quelques grands opérateurs, concurrence plus limitée (oligopole).',
      ],
    },
    Monopole: {
      developpement:
        'En monopole, il n’y a qu’un vendeur : l’acheteur ne peut pas aller ailleurs pour le même produit. Le monopole peut donc choisir son prix, mais pas n’importe lequel : s’il est trop cher, les clients achètent moins ou renoncent. Le chapitre II montre qu’il fixe un prix plus élevé et une quantité plus faible qu’en concurrence.',
      exemples: [
        'Le gestionnaire du réseau électrique : un seul réseau de lignes à haute tension.',
        'Un musée qui possède une œuvre unique : il est seul à pouvoir vendre l’entrée pour la voir.',
      ],
    },
    Oligopole: {
      developpement:
        'Dans un oligopole, chaque entreprise est assez grosse pour que ses décisions comptent pour les autres : si l’une baisse ses prix, les autres perdent des clients et réagissent. On dit que les décisions sont interdépendantes. C’est une situation très fréquente dans les économies modernes (automobile, énergie, téléphonie, grande distribution).',
      exemples: [
        'Les grandes enseignes de la distribution alimentaire en France.',
        'Les constructeurs de consoles de jeux vidéo.',
      ],
    },
    Demande: {
      developpement:
        'La demande n’est pas un nombre unique : c’est une relation entre chaque prix possible et la quantité que les acheteurs voudraient acheter à ce prix. On la représente par une courbe (prix en ordonnée, quantité en abscisse). Elle dépend du prix du bien, mais aussi du revenu, des goûts, du prix des autres biens et du nombre d’acheteurs.',
      exemples: [
        'À 3 € la place, une salle de cinéma remplirait 400 places par séance ; à 12 €, seulement 150 (données fictives).',
        'La demande de climatiseurs augmente fortement lors d’une canicule, à prix inchangé : la courbe se déplace.',
      ],
      nePasConfondre: 'La demande (toute la courbe) et la quantité demandée (un point de la courbe, pour un prix donné).',
    },
    'Loi de la demande': {
      developpement:
        'Quand un bien devient plus cher, deux effets poussent à en acheter moins : il pèse davantage sur un budget qui ne change pas (on peut en acheter moins), et il devient relativement plus cher que les biens qui peuvent le remplacer (on se reporte sur eux). C’est pourquoi la courbe de demande descend de gauche à droite.',
      exemples: [
        'Quand le prix des tomates double en hiver, une partie des ménages se reporte sur d’autres légumes.',
        'Une hausse du prix des abonnements de streaming pousse certains abonnés à n’en garder qu’un seul.',
      ],
    },
    Offre: {
      developpement:
        'L’offre est la relation entre chaque prix possible et la quantité que les producteurs voudraient vendre à ce prix. Elle dépend du prix, mais aussi des coûts de production, de la technique, du nombre de producteurs, des taxes et des subventions. On la représente par une courbe croissante.',
      exemples: [
        'Quand le prix des framboises monte, des producteurs récoltent aussi les parcelles moins faciles d’accès.',
        'Une nouvelle machine qui réduit les coûts déplace l’offre vers la droite : à chaque prix, on produit davantage.',
      ],
      nePasConfondre: 'L’offre (la courbe entière) et la quantité offerte (la quantité pour un prix donné).',
    },
    'Loi de l’offre': {
      developpement:
        'Un prix plus élevé rend rentables des unités qui coûtaient trop cher à produire. Le producteur, qui cherche le profit maximal, en produit donc davantage, et de nouveaux producteurs peuvent être attirés. C’est pourquoi la courbe d’offre monte de gauche à droite.',
      exemples: [
        'Quand le prix du pétrole monte, des gisements plus coûteux à exploiter (en mer profonde) deviennent rentables.',
        'Quand le tarif d’une course de VTC augmente le soir, davantage de chauffeurs se connectent.',
      ],
    },
    'Coût total': {
      developpement:
        'Le coût total rassemble tout ce que coûte la production d’une quantité donnée. Une partie ne dépend pas de la quantité (les coûts fixes : loyer, assurance, machines), l’autre augmente avec elle (les coûts variables : matières premières, énergie, heures de travail). Le coût total augmente donc quand la quantité augmente.',
      exemples: [
        'Une pizzeria paie 2 000 € de loyer par mois (fixe) et 3 € d’ingrédients par pizza (variable) : 500 pizzas coûtent 2 000 + 500 × 3 = 3 500 € (données fictives).',
        'Pour une imprimerie, le coût total d’un tirage de 1 000 affiches inclut le réglage de la machine (fixe) et le papier (variable).',
      ],
    },
    'Coût marginal': {
      developpement:
        '« Marginal » veut dire « à la marge », c’est-à-dire pour la dernière unité. Le coût marginal répond à la question : « combien me coûte une unité de plus ? ». C’est lui qui guide la décision de produire davantage, pas le coût moyen. À court terme, il finit par augmenter : la machine est saturée, il faut payer des heures supplémentaires ou utiliser des matières plus chères.',
      exemples: [
        'Pour une boulangerie qui tourne déjà à plein, la 301e baguette demande une fournée en plus et des heures supplémentaires : elle coûte plus cher que les précédentes.',
        'Pour une plateforme de musique en ligne, une écoute de plus ne coûte presque rien : le coût marginal est proche de zéro.',
      ],
      nePasConfondre: 'Coût marginal (coût de la dernière unité) et coût moyen (coût total divisé par la quantité).',
    },
    Profit: {
      developpement:
        'Le profit est ce qui reste au producteur une fois tous les coûts payés. Il est positif si les recettes dépassent les coûts, négatif (perte) dans le cas contraire. En SES, on suppose que le producteur cherche à le rendre le plus grand possible : c’est l’hypothèse de maximisation du profit.',
      exemples: [
        'Une maraîchère vend 4 caisses à 7 € (28 €) pour un coût total de 23 € : son profit est de 5 €.',
        'Un food-truck qui encaisse 1 200 € dans la semaine pour 1 350 € de coûts fait une perte de 150 € (données fictives).',
      ],
    },
    'Maximisation du profit': {
      developpement:
        'Le producteur compare, pour chaque unité supplémentaire, ce qu’elle rapporte (le prix) et ce qu’elle coûte (le coût marginal). Tant que le prix dépasse le coût marginal, produire une unité de plus augmente le profit. Dès que le coût marginal dépasse le prix, l’unité de plus ferait baisser le profit. Le producteur s’arrête donc là où le coût marginal rejoint le prix : c’est la règle P = Cm.',
      exemples: [
        'Au prix de 7 €, avec des coûts marginaux de 3, 4, 5, 6 puis 8 €, la maraîchère produit 4 caisses : la 5e coûterait plus qu’elle ne rapporte.',
        'Un artisan qui fabrique des bougies à 12 € pièce arrête quand fabriquer une bougie de plus lui coûterait plus de 12 € (heures de nuit, matières achetées en urgence).',
      ],
    },
    'Prix d’équilibre': {
      developpement:
        'Au prix d’équilibre, les projets des acheteurs et ceux des vendeurs sont compatibles : tout ce qui est offert trouve preneur, et tous ceux qui veulent acheter à ce prix le peuvent. Il n’y a ni invendus ni files d’attente, donc rien ne pousse le prix à changer. Graphiquement, c’est le point où les deux courbes se coupent.',
      exemples: [
        'Si à 6 € les vendeurs veulent vendre 8 unités et les acheteurs veulent en acheter 8, 6 € est le prix d’équilibre.',
        'Sur un marché de producteurs, en fin de matinée, le prix des fraises se fixe au niveau qui permet d’écouler le stock sans file d’attente.',
      ],
    },
    'Excès d’offre': {
      developpement:
        'Quand le prix est trop élevé, les producteurs veulent vendre beaucoup mais les acheteurs n’achètent pas tout : il reste des invendus. Pour s’en débarrasser, les vendeurs baissent leurs prix. Cette baisse fait remonter la quantité demandée et baisser la quantité offerte, jusqu’à l’équilibre.',
      exemples: [
        'Les soldes de fin de saison servent à écouler les vêtements restés en stock.',
        'Au prix de 8 €, avec Qd = 20 − 2P et Qo = 2P − 4, on offre 12 unités pour 4 demandées : 8 unités d’excès d’offre.',
      ],
      nePasConfondre: 'Excès d’offre (invendus, le prix baisse) et excès de demande (pénurie, le prix monte).',
    },
    'Excès de demande': {
      developpement:
        'Quand le prix est trop bas, beaucoup de gens veulent acheter mais les producteurs offrent peu : c’est une pénurie. On voit apparaître des files d’attente, des ruptures de stock ou des reventes plus chères. Les vendeurs comprennent qu’ils peuvent augmenter leurs prix, ce qui ramène le marché vers l’équilibre.',
      exemples: [
        'À la sortie d’une console très attendue, les stocks s’épuisent en quelques heures et des revendeurs la proposent plus cher.',
        'Au prix de 4 €, avec Qd = 20 − 2P et Qo = 2P − 4, on demande 12 unités pour 4 offertes : 8 unités d’excès de demande.',
      ],
    },
    'Déplacement d’une courbe': {
      developpement:
        'Une courbe d’offre ou de demande est dessinée « toutes choses égales par ailleurs ». Si une de ces « autres choses » change (revenu, goûts, coûts, technique, taxe…), toute la courbe change de place : à chaque prix, on demande (ou on offre) une autre quantité qu’avant. Vers la droite, c’est une hausse ; vers la gauche, une baisse.',
      exemples: [
        'Une campagne montrant les bienfaits du vélo déplace la demande de vélos vers la droite.',
        'Une sécheresse qui détruit une partie des récoltes déplace l’offre de blé vers la gauche.',
      ],
      nePasConfondre: 'Déplacement de la courbe (un autre facteur que le prix change) et mouvement le long de la courbe (seul le prix du bien change).',
    },
    'Mouvement le long d’une courbe': {
      synonymes: ['mouvement le long de la courbe'],
      developpement:
        'Quand seul le prix du bien change, la courbe ne bouge pas : on lit simplement un autre point sur la même courbe. On dit alors que la quantité demandée (ou offerte) varie, pas la demande (ou l’offre). Au bac, cette distinction est très souvent évaluée.',
      exemples: [
        'Le prix des places de concert baisse : on glisse vers la droite le long de la courbe de demande, plus de places sont achetées.',
        'Le prix de la farine augmente : les meuniers en offrent davantage, en glissant le long de leur courbe d’offre.',
      ],
    },
    'Toutes choses égales par ailleurs': {
      developpement:
        'Dans la réalité, beaucoup de choses changent en même temps. Pour comprendre l’effet d’une seule variable, l’économiste fait « comme si » toutes les autres restaient fixes. C’est un raisonnement, pas une description : il permet d’isoler une cause, avant de réintroduire les autres. On l’écrit souvent « ceteris paribus » (en latin).',
      exemples: [
        'Pour étudier l’effet du prix de l’essence sur la circulation, on suppose que les salaires et le prix des billets de train ne changent pas.',
        'Comparer le salaire des femmes et des hommes « à diplôme et à poste égaux » est un raisonnement toutes choses égales par ailleurs.',
      ],
    },
    'Disposition à payer': {
      developpement:
        'C’est le prix au-delà duquel un acheteur renonce : il exprime combien le bien compte pour lui. Elle varie d’une personne à l’autre (selon les goûts, le revenu, l’urgence). La courbe de demande peut se lire comme l’alignement des dispositions à payer des acheteurs, de la plus haute à la plus basse.',
      exemples: [
        'Un fan est prêt à payer 120 € une place pour son groupe préféré ; son voisin, pas plus de 30 €.',
        'Un voyageur pressé est prêt à payer plus cher un billet de train de dernière minute qu’un étudiant qui peut attendre.',
      ],
    },
    'Surplus du consommateur': {
      developpement:
        'Le surplus du consommateur mesure le « bonus » de l’acheteur : il obtient le bien pour moins cher que ce qu’il était prêt à payer. Pour un acheteur, c’est la différence entre sa disposition à payer et le prix. Pour tous les acheteurs, c’est l’aire entre la courbe de demande et le prix, jusqu’à la quantité échangée.',
      exemples: [
        'Inès était prête à payer 50 € un jean qu’elle paie 35 € : son surplus est de 15 €.',
        'Si le prix d’équilibre baisse, le surplus du consommateur augmente : chaque acheteur paie moins et de nouveaux acheteurs entrent.',
      ],
      nePasConfondre: 'Surplus du consommateur (gain des acheteurs) et surplus du producteur (gain des vendeurs).',
    },
    'Surplus du producteur': {
      developpement:
        'Le surplus du producteur mesure le « bonus » du vendeur : il vend plus cher que le prix minimum auquel il aurait accepté de vendre (son coût marginal). Pour l’ensemble des producteurs, c’est l’aire entre le prix et la courbe d’offre, jusqu’à la quantité échangée.',
      exemples: [
        'Un vendeur qui aurait accepté de céder son vélo 80 € et le vend 110 € a un surplus de 30 €.',
        'Si le prix de marché monte, le surplus du producteur augmente.',
      ],
    },
    'Gains à l’échange': {
      synonymes: ['surplus total'],
      developpement:
        'L’échange est volontaire : on n’achète que si le bien vaut plus que son prix à nos yeux, on ne vend que si le prix couvre notre coût. Chaque échange crée donc un gain pour les deux parties. La somme des surplus mesure ces gains. Elle est maximale à l’équilibre concurrentiel : on y réalise tous les échanges avantageux, et seulement eux.',
      exemples: [
        'Dans l’exemple du cours, les gains à l’échange valent 16 + 16 = 32.',
        'Une application qui met en relation propriétaires de perceuses et bricoleurs crée des gains à l’échange : l’outil qui dormait dans un placard sert à quelqu’un qui le paie moins cher qu’en magasin.',
      ],
    },
    'Taxe forfaitaire unitaire': {
      developpement:
        '« Forfaitaire » veut dire que le montant est fixe ; « unitaire », qu’il est payé sur chaque unité vendue. Elle s’oppose à une taxe proportionnelle au prix, comme la TVA. Payée par les producteurs, elle augmente leur coût de chaque unité du montant de la taxe : la courbe d’offre se déplace vers le haut de ce montant.',
      exemples: [
        'Une taxe de 0,50 € par litre de boisson sucrée, quel que soit le prix de la bouteille (montant fictif).',
        'Avec une taxe de 2 par unité dans l’exemple du cours, la quantité échangée passe de 8 à 6.',
      ],
      nePasConfondre: 'Taxe forfaitaire unitaire (montant fixe par unité) et taxe proportionnelle (pourcentage du prix, comme la TVA).',
    },
    'Perte sèche': {
      developpement:
        'Une taxe fait baisser la quantité échangée. Certains échanges qui auraient profité à l’acheteur et au vendeur n’ont plus lieu : le gain qu’ils auraient apporté disparaît. Ce n’est pas de l’argent transféré à l’État, c’est un gain que personne n’obtient. Graphiquement, c’est le petit triangle entre l’ancienne et la nouvelle quantité.',
      exemples: [
        'Taxe de 2 : le surplus total passe de 32 à 30 (recettes comprises) ; la perte sèche est de 2.',
        'Un prix plafond très bas sur les loyers peut créer une perte sèche : des logements ne sont plus proposés à la location alors que des locataires auraient payé le loyer.',
      ],
    },
    Subvention: {
      developpement:
        'La subvention est l’inverse d’une taxe : l’État verse de l’argent pour chaque unité produite ou achetée. Le coût de production baisse, l’offre se déplace vers le bas, le prix payé baisse et la quantité échangée augmente. Les pouvoirs publics l’utilisent pour encourager un bien jugé utile (énergie propre, santé, culture).',
      exemples: [
        'Le bonus écologique à l’achat d’une voiture électrique.',
        'Avec une subvention de 2 par unité dans l’exemple du cours, la quantité passe de 8 à 10 et le prix payé tombe à 5.',
      ],
    },
    Modèle: {
      developpement:
        'Un modèle est comme une carte routière : il ne montre pas tous les détails du paysage, seulement ce qui est utile pour se repérer. En économie, on simplifie volontairement (en supposant par exemple la concurrence parfaite) pour comprendre un mécanisme. Un bon modèle n’est pas « vrai » ou « faux » : il est utile pour expliquer certains faits.',
      exemples: [
        'Le modèle de l’offre et de la demande explique bien pourquoi le prix des fraises baisse en juin, quand elles sont abondantes.',
        'Le modèle de concurrence parfaite sert de référence pour mesurer ce que coûte un monopole.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Homogénéité du produit',
      synonymes: ['homogénéité'],
      definition: 'Hypothèse de la concurrence parfaite selon laquelle tous les vendeurs proposent exactement le même produit, si bien que l’acheteur n’a aucune raison de préférer l’un à l’autre, sauf le prix.',
      exemple: 'Des sacs de blé de même qualité, quel que soit l’agriculteur qui les vend.',
      developpement:
        'Si les produits sont identiques, seul le prix compte pour l’acheteur : un vendeur plus cher perd tous ses clients. Dès qu’une marque, un service ou une qualité différencie un produit, cette hypothèse n’est plus respectée et le vendeur gagne un peu de pouvoir sur son prix.',
      exemples: ['Le contre-exemple : des baskets de marque ne sont pas homogènes avec des baskets sans marque, même si elles se ressemblent.'],
    },
    {
      terme: 'Libre entrée et sortie',
      synonymes: ['libre entrée', 'libre entrée et sortie du marché'],
      definition: 'Hypothèse de la concurrence parfaite selon laquelle toute entreprise peut entrer sur un marché ou le quitter sans obstacle (ni autorisation, ni coût d’installation prohibitif).',
      exemple: 'Ouvrir un stand de crêpes sur un marché local demande peu de moyens.',
      developpement:
        'Si des profits élevés apparaissent, de nouveaux vendeurs arrivent, l’offre augmente et le prix baisse : les profits exceptionnels disparaissent. Les barrières à l’entrée (chapitre II) empêchent ce mécanisme et protègent le pouvoir de marché.',
      exemples: ['Le contre-exemple : construire une centrale nucléaire demande des autorisations et des milliards d’euros, l’entrée n’est pas libre.'],
    },
    {
      terme: 'Transparence de l’information',
      synonymes: ['transparence'],
      definition: 'Hypothèse de la concurrence parfaite selon laquelle tous les acheteurs et vendeurs connaissent parfaitement les prix et la qualité des biens échangés.',
      exemple: 'Un marché au cadran où les prix proposés s’affichent en direct pour tous.',
      developpement:
        'Grâce à la transparence, aucun vendeur ne peut vendre plus cher que le prix du marché à un acheteur mal informé. Quand l’information est inégalement répartie (asymétrie d’information, chapitre III), le marché peut mal fonctionner.',
      exemples: ['Les comparateurs de prix en ligne rendent un marché plus transparent.'],
    },
    {
      terme: 'Libre circulation des facteurs de production',
      synonymes: ['libre circulation', 'mobilité des facteurs'],
      definition: 'Hypothèse de la concurrence parfaite selon laquelle le travail et le capital peuvent se déplacer librement vers les activités où ils sont le mieux rémunérés.',
      exemple: 'Un agriculteur qui passe de la culture du blé à celle du colza si celle-ci devient plus rentable.',
      developpement:
        'Si les facteurs circulent librement, les ressources vont là où elles sont les plus utiles, ce qui améliore l’efficacité de l’économie. En réalité, changer de métier ou déplacer une usine prend du temps et coûte cher.',
      exemples: ['Le contre-exemple : un salarié très spécialisé ne peut pas changer de secteur du jour au lendemain.'],
    },
    {
      terme: 'Équilibre de marché',
      synonymes: ['équilibre', 'équilibre concurrentiel'],
      definition: 'Situation d’un marché dans laquelle, au prix pratiqué, la quantité offerte est égale à la quantité demandée ; elle est caractérisée par un prix et une quantité d’équilibre.',
      exemple: 'Avec $Q_d = 20 - 2P$ et $Q_o = 2P - 4$, l’équilibre est atteint pour 8 unités au prix de 6.',
      developpement:
        'À l’équilibre, personne n’a de raison de changer de comportement : les acheteurs trouvent ce qu’ils veulent au prix du marché et les vendeurs écoulent toute leur production. Si un choc (hausse du revenu, nouvelle taxe…) déplace une courbe, un nouvel équilibre s’établit.',
      exemples: ['Une hausse de la demande fait passer l’équilibre de (8 ; 6) à (10 ; 7) dans l’exemple du cours.'],
    },
    {
      terme: 'Efficacité économique',
      synonymes: ['efficace', 'efficacité', 'efficacité économique'],
      definition: 'Situation dans laquelle on ne peut pas augmenter le surplus total : toutes les possibilités d’échanges mutuellement avantageux sont exploitées et aucune ressource n’est gaspillée.',
      exemple: 'L’équilibre concurrentiel est efficace : la somme des surplus y est maximale.',
      developpement:
        'L’efficacité ne dit rien de la justice : un équilibre peut être efficace et très inégal. Elle répond seulement à la question « crée-t-on le plus de gains possible ? ». Une taxe, un monopole ou une externalité rendent un marché inefficace en faisant apparaître une perte sèche.',
      exemples: ['Le monopole n’est pas efficace : il produit moins qu’en concurrence et crée une perte sèche (chapitre II).'],
      nePasConfondre: 'Efficacité (le surplus total est maximal) et équité (la répartition est juste).',
    },
    {
      terme: 'Coût fixe',
      definition: 'Coût qui ne varie pas avec la quantité produite, à court terme ; il doit être payé même si l’entreprise ne produit rien.',
      exemple: 'Le loyer d’un atelier, l’assurance, le remboursement d’une machine.',
      developpement:
        'Le coût fixe ne dépend pas du nombre d’unités produites : que l’atelier fabrique 10 ou 1 000 objets, le loyer est le même. Plus on produit, plus ce coût est réparti sur un grand nombre d’unités, ce qui fait baisser le coût fixe par unité.',
      exemples: ['Pour une salle de sport, l’abonnement à l’électricité de base et le loyer du local.'],
    },
    {
      terme: 'Coût variable',
      definition: 'Coût qui augmente avec la quantité produite.',
      exemple: 'Les ingrédients d’une boulangerie, l’énergie consommée par une machine, les heures de travail supplémentaires.',
      developpement:
        'Le coût variable est nul quand on ne produit rien et augmente avec chaque unité produite. Coût total = coût fixe + coût variable.',
      exemples: ['Pour une imprimerie, le papier et l’encre utilisés pour chaque affiche.'],
    },
    {
      terme: 'Coût moyen',
      definition: 'Coût total divisé par la quantité produite : c’est le coût d’une unité en moyenne.',
      exemple: '500 pizzas pour un coût total de 3 500 € : coût moyen de 3 500 / 500 = 7 € par pizza (données fictives).',
      developpement:
        'Le coût moyen permet de savoir si l’entreprise gagne de l’argent : si le prix de vente est supérieur au coût moyen, elle fait un profit. Il diminue souvent quand la production augmente, car les coûts fixes sont répartis sur plus d’unités.',
      exemples: ['Avec 1 000 pizzas, le coût total passe à 5 000 € et le coût moyen tombe à 5 € (même exemple fictif).'],
      nePasConfondre: 'Coût moyen (coût par unité en moyenne) et coût marginal (coût de la dernière unité).',
    },
    {
      terme: 'Recette totale',
      definition: 'Somme encaissée par le producteur grâce à ses ventes : prix × quantité vendue (on parle aussi de chiffre d’affaires).',
      exemple: '4 caisses vendues 7 € : recette totale de 28 €.',
      developpement:
        'En concurrence parfaite, le prix ne dépend pas de la quantité vendue : chaque unité supplémentaire rapporte exactement le prix. La recette totale augmente donc du prix à chaque unité vendue.',
      exemples: ['Un vendeur de glaces qui vend 150 cornets à 3 € encaisse 450 €.'],
      nePasConfondre: 'Recette totale (ce qui est encaissé) et profit (ce qui reste une fois les coûts payés).',
    },
    {
      terme: 'Rendements décroissants',
      definition:
        'Situation dans laquelle chaque unité supplémentaire d’un facteur de production (travail, engrais…) ajoute de moins en moins à la production, les autres facteurs restant fixes.',
      exemple: 'Dans une petite cuisine, un 2e cuisinier double presque la production ; un 6e se gêne avec les autres et l’augmente peu.',
      developpement:
        'Les rendements décroissants expliquent pourquoi le coût marginal augmente à court terme : pour produire une unité de plus, il faut de plus en plus de travail ou de matières, donc de plus en plus d’argent. C’est la raison profonde de la pente croissante de la courbe d’offre.',
      exemples: ['Ajouter toujours plus d’engrais sur un même champ finit par n’augmenter presque plus la récolte.'],
    },
    {
      terme: 'Biens substituables',
      definition: 'Biens qui peuvent se remplacer pour satisfaire un même besoin : quand le prix de l’un augmente, la demande de l’autre augmente.',
      exemple: 'Le beurre et la margarine ; le train et le covoiturage.',
      developpement:
        'Si le prix d’un bien monte, une partie des acheteurs se reporte sur son substitut : la courbe de demande du substitut se déplace vers la droite. Plus un bien a de substituts proches, plus sa demande est sensible à son prix.',
      exemples: ['Quand le prix des billets d’avion augmente, la demande de billets de train grande vitesse augmente.'],
      nePasConfondre: 'Biens substituables (ils se remplacent) et biens complémentaires (ils s’utilisent ensemble).',
    },
    {
      terme: 'Biens complémentaires',
      definition: 'Biens qui s’utilisent ensemble : quand le prix de l’un augmente, la demande de l’autre diminue.',
      exemple: 'Une imprimante et ses cartouches ; une console et ses jeux.',
      developpement:
        'Si le prix d’un bien monte, on en achète moins, et on a donc moins besoin de son complément : la demande du bien complémentaire se déplace vers la gauche.',
      exemples: ['Une forte hausse du prix des voitures neuves réduit aussi la demande de sièges auto pour enfants vendus avec.'],
    },
    {
      terme: 'Élasticité-prix de la demande',
      definition:
        'Mesure de la sensibilité de la quantité demandée à une variation du prix : variation de la quantité demandée en % divisée par la variation du prix en %.',
      exemple: 'Un prix qui augmente de 20 % et une quantité qui baisse de 10 % donnent une élasticité de −10 / 20 = −0,5.',
      developpement:
        'Si l’élasticité est inférieure à 1 en valeur absolue, la demande est peu sensible au prix (inélastique) : c’est le cas des biens sans substitut proche ou indispensables. Si elle est supérieure à 1, la demande est élastique. Cette notion est un complément au programme : elle aide à comprendre qui supporte une taxe.',
      exemples: ['La demande de carburant est peu élastique à court terme : on doit aller travailler même si l’essence coûte plus cher.'],
    },
    {
      terme: 'Prix plafond',
      definition: 'Prix maximum fixé par les pouvoirs publics, en dessous du prix d’équilibre, pour protéger les acheteurs.',
      exemple: 'L’encadrement des loyers dans certaines villes.',
      developpement:
        'Si le plafond est inférieur au prix d’équilibre, la quantité demandée dépasse la quantité offerte : une pénurie apparaît. Les acheteurs qui obtiennent le bien paient moins cher, mais d’autres n’en trouvent pas. Dans l’exemple du cours, un plafond à 4 crée une pénurie de 8 unités (12 demandées, 4 offertes).',
      exemples: ['Un prix maximum sur les masques pendant une épidémie : ceux qui en trouvent les paient moins cher, mais les rayons se vident vite.'],
      nePasConfondre: 'Prix plafond (maximum : risque de pénurie) et prix plancher (minimum : risque d’excédent).',
    },
    {
      terme: 'Prix plancher',
      definition: 'Prix minimum fixé par les pouvoirs publics, au-dessus du prix d’équilibre, pour protéger les vendeurs.',
      exemple: 'Un prix minimum garanti aux agriculteurs pour leur lait.',
      developpement:
        'Si le plancher est supérieur au prix d’équilibre, la quantité offerte dépasse la quantité demandée : il y a des invendus. Le salaire minimum est parfois analysé de cette façon, mais son effet sur l’emploi fait débat entre économistes.',
      exemples: ['Un prix minimum du vin qui pousse les producteurs à produire plus que ce qui est acheté, d’où des stocks à écouler.'],
    },
    {
      terme: 'Incidence fiscale',
      definition: 'Répartition réelle de la charge d’un impôt entre acheteurs et vendeurs, qui ne dépend pas de qui le verse légalement à l’État.',
      exemple: 'Avec une taxe de 2, les acheteurs paient 1 de plus et les vendeurs reçoivent 1 de moins : la charge est partagée.',
      developpement:
        'Ce n’est pas parce que le producteur verse la taxe qu’il la supporte seul : le prix payé par les acheteurs augmente aussi. La charge se répartit selon la sensibilité de chaque côté au prix : le côté le moins sensible (la courbe la plus pentue) en supporte la plus grande part.',
      exemples: ['Les taxes sur le tabac sont surtout supportées par les fumeurs, dont la demande est peu sensible au prix.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Un marché sans règles ne marche pas',
        texte:
          'Imagine un site de revente où personne ne vérifie les vendeurs et où l’on ne peut jamais se faire rembourser. Après quelques arnaques, les acheteurs ne paient plus d’avance, et les vendeurs honnêtes partent. Les plateformes ont donc inventé des **institutions** : avis notés, paiement bloqué jusqu’à la livraison, médiation en cas de litige. Ce sont elles qui permettent au **marché** d’exister.',
      },
      {
        titre: 'Classer des marchés selon leur degré de concurrence',
        texte:
          'Le marché des pommes sur une grande place de marché (beaucoup de petits vendeurs, produit presque identique) se rapproche de la **concurrence pure et parfaite**. Le marché des moteurs de recherche, dominé par une entreprise, se rapproche du **monopole**. Le marché des téléphones mobiles, avec quelques grandes marques, est un **oligopole**.',
      },
      {
        titre: 'Pourquoi un preneur de prix ne peut pas augmenter son prix',
        texte:
          'Sur un marché aux bestiaux, cent éleveurs vendent des agneaux semblables au prix du jour de 8 € le kilo. Si l’un d’eux demande 9 €, les acheteurs vont chez son voisin : il ne vend plus rien. S’il demande 7 €, il perd de l’argent sans raison, puisqu’il peut tout vendre à 8 €. Il est **preneur de prix** : il ne choisit que la quantité qu’il apporte (prix fictifs).',
      },
    ],
    [
      {
        titre: 'Lire une courbe de demande',
        texte:
          'Avec la demande $Q_d = 20 - 2P$ : à 4 €, on demande 12 unités ; à 6 €, 8 unités ; à 8 €, 4 unités. Chaque fois que le prix monte de 2 €, la quantité demandée baisse de 4 unités : c’est la **loi de la demande**. Si le revenu des ménages augmente, toute la courbe se déplace : à 6 €, on pourrait par exemple demander 10 unités au lieu de 8.',
      },
      {
        titre: 'Coût fixe, coût variable, coût moyen, coût marginal',
        texte:
          'Une pizzeria paie 2 000 € de loyer par mois (**coût fixe**) et 3 € d’ingrédients par pizza (**coût variable**). Pour 500 pizzas, le **coût total** est 2 000 + 500 × 3 = 3 500 € et le **coût moyen** 7 €. Pour 1 000 pizzas, le coût total est 5 000 € et le coût moyen 5 € : les coûts fixes sont mieux répartis. Tant que le four n’est pas saturé, le **coût marginal** d’une pizza reste de 3 € (données fictives).',
      },
      {
        titre: 'Déplacement ou mouvement ? Trois situations',
        texte:
          '1. Le prix des tickets de cinéma baisse : **mouvement le long de la courbe** de demande. 2. Un film très attendu sort : la demande de places se **déplace** vers la droite. 3. Le prix de l’électricité augmente pour les cinémas : leur coût monte, l’**offre** se déplace vers la gauche (moins de séances proposées à chaque prix).',
      },
    ],
    [
      {
        titre: 'Suivre le retour à l’équilibre',
        texte:
          'Avec $Q_d = 20 - 2P$ et $Q_o = 2P - 4$, partons d’un prix de 8 € : 12 unités offertes, 4 demandées, **excès d’offre** de 8. Les vendeurs baissent leurs prix. À 7 €, il y a 10 unités offertes pour 6 demandées (encore 4 d’excès). À 6 €, 8 offertes et 8 demandées : c’est l’**équilibre**.',
      },
      {
        titre: 'Calculer un surplus à la main',
        texte:
          'Trois acheteurs veulent un même livre : Léo est prêt à payer 20 €, Maya 15 €, Sam 9 €. Le livre coûte 10 €. Léo et Maya l’achètent, Sam non. **Surplus du consommateur** : (20 − 10) + (15 − 10) = 15 €. Si le prix descendait à 8 €, Sam achèterait aussi et le surplus total des acheteurs passerait à 12 + 7 + 1 = 20 € (données fictives).',
      },
      {
        titre: 'Taxe ou subvention : comparer les effets',
        texte:
          'Dans l’exemple du cours (équilibre : 8 unités à 6 €). Avec une **taxe forfaitaire unitaire** de 2 : 6 unités échangées, prix payé 7, prix reçu 5, recettes fiscales 12, **perte sèche** 2. Avec une **subvention** de 2 : 10 unités échangées, prix payé 5, coût pour l’État 20. La taxe réduit les échanges, la subvention les augmente.',
      },
    ],
  ],
};
