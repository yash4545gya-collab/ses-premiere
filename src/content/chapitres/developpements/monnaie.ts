import type { DeveloppementChapitre } from '../../types';

/** Chapitre V — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devMonnaie: DeveloppementChapitre = {
  id: 'monnaie',
  definitions: {
    Monnaie: {
      developpement:
        'La monnaie est ce que tout le monde accepte en paiement, parce que chacun sait que les autres l’accepteront aussi. Elle repose donc sur la confiance : un billet n’a presque aucune valeur matérielle. On la reconnaît à ses trois fonctions (échanger, compter, conserver) et elle existe aujourd’hui surtout sous forme de soldes sur des comptes bancaires.',
      exemples: [
        'Les euros sur ton compte courant sont de la monnaie : tu peux payer avec, par carte ou virement.',
        'Dans un camp de prisonniers de la Seconde Guerre mondiale, les cigarettes servaient de monnaie : tout le monde les acceptait.',
      ],
    },
    'Intermédiaire des échanges': {
      developpement:
        'Sans monnaie, il faudrait troquer : trouver quelqu’un qui a ce que je veux et qui veut justement ce que j’ai. Avec la monnaie, l’échange se fait en deux temps : je vends ce que j’ai contre de la monnaie, puis j’achète ce que je veux avec. On n’a plus besoin de cette « double coïncidence ».',
      exemples: [
        'Une coiffeuse est payée en euros et achète son pain avec, sans avoir à coiffer le boulanger.',
        'Un étudiant vend un vieux téléphone en ligne et utilise l’argent pour acheter des livres.',
      ],
    },
    'Unité de compte': {
      developpement:
        'La monnaie sert d’étalon pour mesurer la valeur de tout. Avec des prix en euros, on peut comparer un concert, un jean et un trajet en train d’un coup d’œil. Sans unité commune, il faudrait connaître le « prix » de chaque bien en chacun des autres biens.',
      exemples: [
        'Un restaurant affiche tous ses plats en euros : on compare facilement.',
        'Avec 100 biens et du troc, il y aurait 4 950 rapports d’échange à retenir ; avec la monnaie, 100 prix suffisent.',
      ],
    },
    'Réserve de valeur': {
      developpement:
        'La monnaie permet de garder son pouvoir d’achat pour plus tard : je gagne aujourd’hui, je dépense dans six mois. Cette fonction est fragile : si les prix montent fortement (inflation), la monnaie conservée achète de moins en moins de choses. En cas d’hyperinflation, les gens se débarrassent vite de leur monnaie.',
      exemples: [
        'Mettre de côté son argent de poche pour acheter un vélo à l’été.',
        'Avec 3 % d’inflation par an, 1 000 € gardés sous le matelas n’achètent plus que l’équivalent d’environ 970 € de l’an passé.',
      ],
    },
    Troc: {
      developpement:
        'Le troc est un échange direct d’un bien contre un autre, sans monnaie. Il est difficile : il faut que chacun veuille ce que l’autre propose, au même moment et dans des quantités compatibles. Il réapparaît parfois quand la monnaie perd la confiance des gens.',
      exemples: [
        'Échanger des cartes à collectionner dans la cour de récréation.',
        'Des sites d’échange de services entre voisins (une heure de jardinage contre une heure de couture).',
      ],
    },
    'Monnaie fiduciaire': {
      developpement:
        '« Fiduciaire » vient du latin fiducia, la confiance. Un billet vaut 20 € non pas parce que son papier vaut 20 €, mais parce que tout le monde accepte qu’il vaut 20 €. Dans la zone euro, la monnaie fiduciaire est émise par la banque centrale (billets) et par les États (pièces). Elle ne représente qu’une petite part de la monnaie totale.',
      exemples: [
        'Payer sa baguette avec une pièce de 1 €.',
        'Retirer un billet de 50 € au distributeur transforme de la monnaie scripturale en monnaie fiduciaire.',
      ],
    },
    'Monnaie scripturale': {
      developpement:
        '« Scripturale » vient d’écrire : c’est une monnaie qui n’existe que comme une écriture dans les comptes des banques. Quand tu paies par carte, la banque diminue le solde de ton compte et augmente celui du commerçant : la monnaie circule sans billet. C’est la forme principale de monnaie aujourd’hui.',
      exemples: [
        'Un salaire versé par virement.',
        'Un remboursement entre amis par une application de paiement : de la monnaie scripturale passe d’un compte à l’autre.',
      ],
      nePasConfondre: 'Monnaie scripturale (le dépôt sur le compte) et moyen de paiement (la carte ou le virement qui la fait circuler).',
    },
    'Moyen de paiement': {
      developpement:
        'Un moyen de paiement est un outil qui transfère de la monnaie scripturale d’un compte à un autre. La carte, le chèque, le virement ou le paiement par téléphone ne sont pas de la monnaie : sans argent sur le compte, ils ne servent à rien.',
      exemples: [
        'Le prélèvement automatique de l’abonnement de téléphone.',
        'Le paiement sans contact avec un smartphone.',
      ],
    },
    'Masse monétaire': {
      developpement:
        'La masse monétaire est la quantité totale de monnaie dont disposent les agents d’une économie. La banque centrale la surveille, car si elle augmente beaucoup plus vite que la production, cela peut alimenter l’inflation. Elle augmente quand les banques accordent plus de crédits qu’on ne leur en rembourse.',
      exemples: [
        'Quand beaucoup de ménages contractent des crédits immobiliers, la masse monétaire augmente.',
        'La BCE publie chaque mois l’évolution de M3 dans la zone euro.',
      ],
    },
    'Agrégats monétaires': {
      synonymes: ['M1', 'M2', 'M3'],
      developpement:
        'Comme il n’est pas évident de dire ce qui est « de la monnaie » (un livret d’épargne l’est-il ?), on mesure la masse monétaire avec plusieurs cercles emboîtés : M1 (le plus liquide : billets, pièces, dépôts à vue), M2 (M1 + livrets et dépôts à court terme) et M3 (M2 + certains titres de court terme). Plus on s’éloigne de M1, moins l’actif est immédiatement utilisable pour payer.',
      exemples: [
        'L’argent sur ton compte courant fait partie de M1.',
        'L’argent sur un livret A fait partie de M2 : il faut le virer sur le compte courant avant de payer.',
      ],
    },
    Liquidité: {
      developpement:
        'Un actif est liquide s’il peut être transformé rapidement en moyen de paiement, sans perdre de valeur. Le billet est l’actif le plus liquide ; un appartement est peu liquide (le vendre prend des mois, et le prix est incertain).',
      exemples: [
        'Le solde d’un compte courant est très liquide.',
        'Une œuvre d’art est peu liquide : il faut trouver un acheteur, et le prix obtenu est incertain.',
      ],
    },
    'Création monétaire': {
      synonymes: ['les crédits font les dépôts'],
      developpement:
        'Quand une banque accorde un crédit, elle ne prend pas l’argent d’un autre client : elle inscrit une somme nouvelle sur le compte de l’emprunteur. Cette somme n’existait pas avant : c’est de la monnaie créée. En face, la banque possède une créance (l’emprunteur lui doit cette somme). C’est pourquoi on dit que « les crédits font les dépôts ».',
      exemples: [
        'Une banque prête 15 000 € à un étudiant pour ses études : 15 000 € de monnaie nouvelle apparaissent sur son compte.',
        'Une banque qui achète des titres à une entreprise crée aussi de la monnaie en créditant le compte de cette entreprise.',
      ],
      nePasConfondre: 'Création monétaire (la banque crée un dépôt nouveau) et impression de billets (la banque centrale fabrique des billets, qui ne sont qu’une petite partie de la monnaie).',
    },
    'Destruction monétaire': {
      developpement:
        'Quand l’emprunteur rembourse, la somme quitte son compte et la créance de la banque disparaît : cette monnaie cesse d’exister. La masse monétaire augmente seulement si, sur une période, les nouveaux crédits dépassent les remboursements.',
      exemples: [
        'Un ménage qui rembourse 500 € de son crédit chaque mois détruit 500 € de monnaie par mois.',
        'Si les banques accordent 10 000 € de crédits et reçoivent 12 000 € de remboursements, la masse monétaire baisse de 2 000 €.',
      ],
    },
    Bilan: {
      developpement:
        'Le bilan est une photographie de ce qu’un agent possède (actif, à gauche) et de ce qu’il doit (passif, à droite), à une date donnée. Les deux colonnes ont toujours le même total. Pour une banque, les crédits accordés sont à l’actif (on lui doit cet argent) et les dépôts des clients au passif (elle leur doit cet argent).',
      exemples: [
        'Bilan d’une entreprise : à l’actif, ses machines et son dépôt bancaire ; au passif, ses emprunts et ses capitaux propres.',
        'Après un crédit de 10 000 €, l’actif et le passif de la banque augmentent tous deux de 10 000 €.',
      ],
    },
    'Banque commerciale': {
      developpement:
        'La banque commerciale (ou « banque de second rang ») est la banque des ménages et des entreprises : elle tient leurs comptes, gère leurs moyens de paiement et leur accorde des crédits. En accordant ces crédits, elle crée l’essentiel de la monnaie en circulation.',
      exemples: [
        'La banque où tu as ton compte courant.',
        'Une banque qui finance l’achat d’un camion pour une entreprise de livraison.',
      ],
      nePasConfondre: 'Banque commerciale (banque des ménages et des entreprises) et banque centrale (banque des banques).',
    },
    'Banque centrale': {
      developpement:
        'La banque centrale est « la banque des banques » : les banques commerciales y ont un compte et peuvent lui emprunter. Elle seule émet les billets et la monnaie centrale. Elle conduit la politique monétaire, surtout en fixant ses taux directeurs, et veille à la stabilité du système financier.',
      exemples: [
        'La Banque centrale européenne (BCE), à Francfort, pour les pays de la zone euro.',
        'La Banque de France, qui fabrique les billets et applique en France les décisions de la BCE.',
      ],
    },
    'Monnaie centrale': {
      developpement:
        'La monnaie centrale est la monnaie émise par la banque centrale : les billets et les réserves que les banques détiennent sur leur compte à la banque centrale. Les banques commerciales en ont besoin pour trois raisons : approvisionner les distributeurs de billets, régler les paiements entre banques et constituer leurs réserves obligatoires.',
      exemples: [
        'Quand un client de la banque A paie un client de la banque B, la banque A doit transférer de la monnaie centrale à la banque B.',
        'Avant Noël, les banques ont besoin de plus de billets : elles se procurent davantage de monnaie centrale.',
      ],
    },
    'Marché interbancaire': {
      developpement:
        'Chaque jour, certaines banques ont trop de monnaie centrale et d’autres pas assez. Elles se la prêtent entre elles, souvent pour une seule nuit, sur le marché interbancaire. Le taux de ce marché suit de près les taux directeurs de la banque centrale.',
      exemples: [
        'Une banque qui a reçu beaucoup de paiements dans la journée prête son excédent à une autre jusqu’au lendemain.',
        'Le taux €STR mesure le coût de ces prêts d’un jour dans la zone euro.',
      ],
    },
    'Marché monétaire': {
      developpement:
        'Le marché monétaire est le marché de l’argent à court terme (moins d’un an). Les banques, les grandes entreprises, l’État et la banque centrale y empruntent et y prêtent. C’est là que la banque centrale intervient pour piloter les taux courts.',
      exemples: [
        'Une grande entreprise qui place sa trésorerie pour trois mois.',
        'L’État qui émet des titres de court terme pour gérer ses fins de mois.',
      ],
      nePasConfondre: 'Marché monétaire (court terme) et marché financier (long terme : actions, obligations).',
    },
    Refinancement: {
      developpement:
        'Se refinancer, pour une banque, c’est obtenir de la monnaie centrale auprès de la banque centrale. Elle lui prête contre des garanties (des titres) et à un taux fixé par la banque centrale. Plus ce taux est élevé, plus il coûte cher aux banques de se procurer de la monnaie centrale, et plus elles prêtent cher à leurs clients.',
      exemples: [
        'Une banque qui emprunte 1 milliard d’euros à la BCE pour une semaine.',
        'Pendant la crise de 2008, les banques centrales ont fortement augmenté le refinancement pour éviter les faillites bancaires.',
      ],
    },
    'Taux directeurs': {
      developpement:
        'Ce sont les taux auxquels la banque centrale prête aux banques ou rémunère leurs dépôts. Ils servent de « signal » pour tous les autres taux : quand ils montent, les taux du marché interbancaire, puis ceux des crédits, montent aussi. C’est le principal levier de la politique monétaire.',
      exemples: [
        'Entre juillet 2022 et septembre 2023, la BCE a relevé son taux de dépôt de −0,5 % à 4 %.',
        'Quand la BCE baisse ses taux, les taux des crédits immobiliers baissent en général quelques mois plus tard.',
      ],
    },
    'Politique monétaire': {
      developpement:
        'La politique monétaire agit sur le coût et la quantité du crédit. Elle est restrictive quand la banque centrale relève ses taux pour freiner l’inflation, expansive quand elle les baisse pour soutenir l’activité. Ses effets mettent plusieurs mois à se faire sentir et dépendent du comportement des ménages et des entreprises.',
      exemples: [
        'Hausse des taux en 2022-2023 contre l’inflation : politique restrictive.',
        'Taux proches de zéro et rachats massifs de titres après 2015 : politique expansive.',
      ],
    },
    Inflation: {
      developpement:
        'L’inflation est une hausse durable de l’ensemble des prix, pas d’un seul produit. On la mesure par la variation de l’indice des prix à la consommation (IPC) sur un an. Elle réduit le pouvoir d’achat de la monnaie, pèse sur les revenus fixes et favorise les emprunteurs. Une inflation faible et stable est jugée souhaitable.',
      exemples: [
        'Avec 2 % d’inflation, un panier de courses de 100 € en coûte 102 un an plus tard.',
        'À l’automne 2022, l’inflation a dépassé 10 % sur un an dans la zone euro (Eurostat).',
      ],
      nePasConfondre: 'Inflation (hausse générale des prix) et hausse du prix d’un seul produit (qui peut avoir une cause particulière).',
    },
    'Stabilité des prix': {
      developpement:
        'La BCE n’a pas pour but que les prix ne bougent jamais : elle vise une inflation de 2 % par an à moyen terme. Une inflation trop forte réduit le pouvoir d’achat et brouille les signaux des prix ; une baisse des prix (déflation) pousse les ménages à reporter leurs achats et peut faire plonger l’activité.',
      exemples: [
        'Si l’inflation reste longtemps à 5 %, la BCE relève ses taux.',
        'Si l’inflation tombe sous 1 % durablement, la BCE baisse ses taux.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Monnaie marchandise',
      definition: 'Forme ancienne de monnaie constituée d’un bien qui a une valeur en lui-même (sel, bétail, coquillages, métaux).',
      exemple: 'Le sel, qui servait de moyen de paiement dans l’Antiquité.',
      developpement: 'La monnaie marchandise est encombrante, périssable ou difficile à diviser : elle a été remplacée par des pièces de métal puis par des formes de plus en plus dématérialisées.',
      exemples: ['Les coquillages cauris utilisés comme monnaie dans plusieurs régions d’Afrique et d’Asie.'],
    },
    {
      terme: 'Monnaie métallique',
      definition: 'Monnaie constituée de pièces de métal (or, argent, bronze) dont la valeur dépendait autrefois de la quantité de métal précieux qu’elles contenaient.',
      exemple: 'Les pièces d’or et d’argent de l’Antiquité et du Moyen Âge.',
      developpement: 'Aujourd’hui, les pièces sont encore en métal, mais leur valeur ne dépend plus du métal : ce sont des pièces fiduciaires.',
      exemples: ['Les pièces d’euro, dont la valeur faciale est bien supérieure à la valeur du métal.'],
    },
    {
      terme: 'Réserves obligatoires',
      definition: 'Montant minimal de monnaie centrale que chaque banque commerciale doit détenir sur son compte à la banque centrale, calculé en pourcentage de certains dépôts de ses clients (1 % dans la zone euro).',
      exemple: 'Une banque qui reçoit 100 millions d’euros de dépôts concernés doit détenir 1 million de réserves à la BCE.',
      developpement: 'Les réserves obligatoires obligent les banques à se procurer de la monnaie centrale quand elles créent des dépôts : c’est l’une des limites à la création monétaire.',
      exemples: ['Si les dépôts augmentent, les réserves obligatoires augmentent aussi.'],
    },
    {
      terme: 'Politique monétaire restrictive',
      definition: 'Politique de la banque centrale qui relève ses taux directeurs (ou réduit la quantité de monnaie centrale) pour freiner le crédit, la demande et l’inflation.',
      exemple: 'La hausse des taux de la BCE de 2022 à 2023.',
      developpement: 'Elle rend le crédit plus cher : on emprunte moins, la demande ralentit, les prix augmentent moins vite. Mais l’activité et l’emploi ralentissent aussi.',
      exemples: ['Des taux de crédit immobilier qui passent de 1 % à 4 % font baisser les ventes de logements.'],
      nePasConfondre: 'Politique restrictive (taux en hausse, contre l’inflation) et politique expansive (taux en baisse, pour soutenir l’activité).',
    },
    {
      terme: 'Politique monétaire expansive',
      definition: 'Politique de la banque centrale qui baisse ses taux directeurs (ou augmente la quantité de monnaie centrale) pour faciliter le crédit et soutenir l’activité.',
      exemple: 'Les taux proches de zéro de la BCE dans les années 2010.',
      developpement: 'Le crédit devient moins cher : les ménages et les entreprises empruntent davantage pour consommer et investir. Le risque est de nourrir l’inflation ou des bulles sur les prix des actifs.',
      exemples: ['La baisse des taux de la BCE à partir de juin 2024, une fois l’inflation revenue vers 2 %.'],
    },
    {
      terme: 'Pouvoir d’achat',
      definition: 'Quantité de biens et de services qu’un revenu (ou une somme de monnaie) permet d’acheter ; il dépend du revenu et du niveau des prix.',
      exemple: 'Si les salaires augmentent de 2 % et les prix de 5 %, le pouvoir d’achat baisse.',
      developpement: 'Le pouvoir d’achat augmente quand le revenu progresse plus vite que les prix. L’inflation, si elle n’est pas compensée par des hausses de revenus, réduit le pouvoir d’achat.',
      exemples: ['Avec 20 €, on achète moins de places de cinéma si le prix de la place passe de 8 € à 10 €.'],
    },
    {
      terme: 'Cryptoactif',
      synonymes: ['cryptoactifs', 'cryptomonnaie'],
      definition: 'Actif numérique émis et échangé sur un registre informatique partagé (blockchain), sans banque centrale, dont le bitcoin est l’exemple le plus connu.',
      exemple: 'Le bitcoin.',
      developpement:
        'On parle souvent de « cryptomonnaies », mais la plupart des économistes préfèrent « cryptoactifs » : leur valeur très instable en fait de mauvaises unités de compte et réserves de valeur, et ils sont peu acceptés comme moyens de paiement. Ils n’ont pas cours légal dans la zone euro.',
      exemples: ['La valeur d’un bitcoin peut varier de plus de 10 % en une journée.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Les trois fonctions de la monnaie dans une journée',
        texte:
          'Le matin, Sami achète un croissant 1,20 € (**intermédiaire des échanges**). Il compare le prix de deux sacs à dos, 35 € et 50 € (**unité de compte**). Il met 20 € de côté sur son compte pour un concert dans deux mois (**réserve de valeur**). Une seule monnaie remplit les trois fonctions.',
      },
      {
        titre: 'Du troc à la monnaie scripturale',
        texte:
          'Au départ, on échange directement (**troc**). Puis on utilise un bien accepté par tous, comme le sel ou le bétail (**monnaie marchandise**), puis des pièces d’or (**monnaie métallique**), puis des billets (**monnaie fiduciaire**). Aujourd’hui, l’essentiel de la monnaie est une écriture sur des comptes bancaires (**monnaie scripturale**), que l’on fait circuler par carte ou virement.',
      },
      {
        titre: 'Ranger son argent dans M1, M2, M3',
        texte:
          'Léa a 30 € en billets et 400 € sur son compte courant : ils sont dans **M1**. Elle a aussi 1 500 € sur un livret A : ils sont dans **M2** (et M3), mais pas dans M1, car il faut les virer sur le compte courant avant de payer. Plus on passe de M1 à M3, moins l’argent est **liquide**.',
      },
    ],
    [
      {
        titre: 'Suivre un crédit dans les bilans',
        texte:
          'La banque accorde 10 000 € à une boulangerie. Bilan de la banque : à l’actif, une créance de 10 000 € ; au passif, un dépôt de 10 000 €. Bilan de la boulangerie : à l’actif, 10 000 € sur son compte ; au passif, une dette de 10 000 €. La **masse monétaire** a augmenté de 10 000 € : c’est la **création monétaire**.',
      },
      {
        titre: 'Création et destruction sur un mois',
        texte:
          'En un mois, les banques d’un pays accordent 50 milliards d’euros de nouveaux crédits, et leurs clients en remboursent 42 milliards. La masse monétaire augmente de 50 − 42 = 8 milliards. Si les remboursements avaient dépassé les crédits, elle aurait diminué (**destruction monétaire**) (données fictives).',
      },
    ],
    [
      {
        titre: 'Pourquoi une banque a besoin de la banque centrale',
        texte:
          'La banque A a accordé beaucoup de crédits. Ses clients paient des clients de la banque B et retirent des billets avant les vacances. La banque A doit donc transférer de la **monnaie centrale** à la banque B et approvisionner ses distributeurs. Si elle n’en a pas assez, elle en emprunte sur le **marché interbancaire** ou auprès de la **banque centrale** (**refinancement**).',
      },
      {
        titre: 'Une hausse des taux, étape par étape',
        texte:
          'La BCE relève ses **taux directeurs** de 2 points. Les banques empruntent plus cher la monnaie centrale et augmentent le taux de leurs crédits. Un couple qui voulait emprunter 200 000 € sur 20 ans voit sa mensualité augmenter : il achète un logement plus petit ou renonce. Moins de crédit, moins de demande : l’**inflation** ralentit, mais l’activité aussi.',
      },
    ],
  ],
};
