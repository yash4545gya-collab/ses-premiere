import type { DeveloppementChapitre } from '../../types';

/** Chapitre II — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devMarchesImparfaits: DeveloppementChapitre = {
  id: 'marches-imparfaits',
  definitions: {
    'Pouvoir de marché': {
      developpement:
        'Avoir du pouvoir de marché, c’est pouvoir vendre plus cher que le coût de production sans que tous les clients partent. C’est possible quand il y a peu de concurrents, quand les produits sont différents ou quand les clients ont du mal à changer de fournisseur. Plus le pouvoir de marché est fort, plus l’écart entre le prix et le coût marginal est grand.',
      exemples: [
        'Une marque de smartphones très appréciée peut vendre bien au-dessus du coût de fabrication : ses clients ne veulent pas d’un autre modèle.',
        'Le seul cinéma d’une petite ville peut vendre ses places plus cher qu’un cinéma de grande ville entouré de concurrents.',
      ],
    },
    'Faiseur de prix': {
      synonymes: ['faiseuse de prix'],
      developpement:
        'Le faiseur de prix choisit son prix, mais il reste contraint par la demande : plus le prix est élevé, moins il vend. Il cherche donc le prix qui lui rapporte le plus de profit, pas le prix le plus élevé possible. C’est l’opposé du preneur de prix de la concurrence parfaite.',
      exemples: [
        'Un laboratoire fixe le prix d’un médicament breveté en tenant compte de ce que les systèmes de santé acceptent de payer.',
        'Un club de football qui est seul à vendre les billets de ses matchs fixe lui-même leur prix.',
      ],
      nePasConfondre: 'Faiseur de prix (choisit le prix, en tenant compte de la demande) et preneur de prix (subit le prix du marché).',
    },
    'Concurrence imparfaite': {
      synonymes: ['imparfaitement concurrentiels', 'marché imparfaitement concurrentiel'],
      developpement:
        'La concurrence parfaite est un cas limite ; la plupart des marchés réels sont imparfaitement concurrentiels. Il suffit qu’une hypothèse manque (peu de vendeurs, produits différenciés, entrée difficile, information imparfaite) pour que certaines entreprises puissent influencer le prix. La concurrence imparfaite regroupe des situations très variées, du monopole à la concurrence entre marques.',
      exemples: [
        'Les restaurants d’une rue : nombreux, mais chacun propose une cuisine différente, donc un peu de pouvoir sur ses prix.',
        'Le transport aérien entre deux villes desservies par seulement deux compagnies.',
      ],
    },
    'Barrières à l’entrée': {
      developpement:
        'Si une entreprise fait de gros profits, d’autres voudraient venir sur le marché. Les barrières à l’entrée sont tout ce qui les en empêche : coûts d’installation énormes, lois, brevets, contrôle d’une ressource, réputation d’une marque ou stratégies des entreprises en place. Elles permettent de conserver durablement un pouvoir de marché.',
      exemples: [
        'Il faut des milliards d’euros pour construire une usine de puces électroniques : peu d’entreprises peuvent entrer.',
        'Un réseau social où sont déjà tous vos amis : un nouveau réseau a du mal à attirer des utilisateurs (effet de réseau).',
      ],
    },
    'Économies d’échelle': {
      developpement:
        'Quand une entreprise produit plus, ses coûts fixes (machines, recherche, réseau) se répartissent sur un plus grand nombre d’unités : le coût moyen baisse. Une grande entreprise peut alors vendre moins cher qu’une petite. C’est une barrière à l’entrée : un nouvel arrivant, qui produit peu, a des coûts plus élevés.',
      exemples: [
        'Un jeu vidéo coûte 50 millions d’euros à développer : vendu à 1 million d’exemplaires, cela fait 50 € de coût fixe par copie ; à 5 millions d’exemplaires, 10 € (données fictives).',
        'Une grande chaîne de supermarchés négocie de meilleurs prix d’achat qu’une épicerie indépendante.',
      ],
    },
    Monopole: {
      developpement:
        'Le monopole est seul sur son marché : il n’a pas de concurrent direct pour son produit. Cela ne veut pas dire qu’il n’a aucune contrainte : si son prix est trop élevé, les acheteurs réduisent leurs achats ou se tournent vers des produits de remplacement plus lointains. Il existe trois grandes origines : la technique (monopole naturel), la loi (monopole institutionnel) et l’innovation.',
      exemples: [
        'La SNCF Réseau gère seule le réseau ferré national.',
        'Une start-up qui lance la première une technologie nouvelle est, pour un temps, seule sur ce marché.',
      ],
    },
    'Monopole naturel': {
      developpement:
        'Dans certains secteurs, les coûts fixes sont si élevés (construire un réseau de canalisations, de rails ou de câbles) qu’il est moins coûteux pour la société d’avoir une seule entreprise. Deux réseaux parallèles seraient un gaspillage. Comme ce monopole pourrait abuser de sa position, il est souvent public ou strictement réglementé.',
      exemples: [
        'Le réseau de distribution d’électricité dans une région.',
        'Le réseau de canalisations d’eau d’une ville.',
      ],
    },
    'Monopole institutionnel': {
      developpement:
        'C’est la loi, et non la technique ou l’innovation, qui accorde le monopole. L’État le justifie par l’intérêt général : contrôler une activité à risque (les jeux d’argent), garantir un service partout sur le territoire, ou financer des missions publiques.',
      exemples: [
        'La Française des jeux pour les loteries.',
        'Les débits de tabac, seuls autorisés à vendre des cigarettes en France.',
      ],
    },
    'Monopole d’innovation': {
      developpement:
        'L’entreprise qui crée un produit vraiment nouveau est seule à le vendre au début : c’est une récompense de son innovation. Ce monopole est temporaire : les concurrents finissent par imiter, sauf si un brevet les en empêche pour une durée limitée. Pour Schumpeter, ce profit temporaire est le moteur de l’innovation.',
      exemples: [
        'Le premier smartphone tactile grand public a donné à son fabricant une avance de plusieurs années.',
        'Un médicament nouveau, protégé par un brevet de 20 ans, avant l’arrivée des génériques.',
      ],
    },
    Brevet: {
      developpement:
        'Le brevet est un contrat entre l’inventeur et la société : l’inventeur publie son invention (tout le monde peut l’étudier), et en échange il est seul à pouvoir l’exploiter pendant 20 ans en général. Le brevet crée donc volontairement un monopole temporaire pour encourager la recherche. À son expiration, la concurrence peut s’installer.',
      exemples: [
        'Quand le brevet d’un médicament expire, des médicaments génériques moins chers apparaissent.',
        'Une entreprise de jouets brevète un mécanisme d’emboîtement de briques.',
      ],
    },
    'Recette marginale': {
      developpement:
        'Pour une entreprise en concurrence parfaite, chaque unité de plus rapporte exactement le prix. Pour un monopole, c’est différent : pour vendre une unité de plus, il doit baisser son prix, et cette baisse s’applique à toutes les unités vendues. Ce qu’il gagne sur l’unité de plus est donc en partie annulé par ce qu’il perd sur les autres : la recette marginale est inférieure au prix.',
      exemples: [
        'Avec la demande P = 10 − 0,5Q : vendre 8 unités à 6 € rapporte 48 € ; vendre 9 unités oblige à baisser à 5,50 € et rapporte 49,50 €. La 9e unité ne rapporte que 1,50 €, bien moins que son prix.',
        'Une salle de concert qui veut remplir 100 places de plus doit baisser le prix de tous les billets, pas seulement des nouveaux.',
      ],
    },
    'Équilibre du monopole': {
      synonymes: ['recette marginale = coût marginal'],
      developpement:
        'Le monopole se demande, unité par unité, si produire davantage augmente son profit. Tant que la recette marginale dépasse le coût marginal, oui ; ensuite, non. Il produit donc jusqu’à Rm = Cm, puis lit sur la courbe de demande le prix le plus élevé que les acheteurs acceptent pour cette quantité. Résultat : moins de quantité et un prix plus élevé qu’en concurrence.',
      exemples: [
        'Demande P = 10 − 0,5Q, Cm = 2 : le monopole vend 8 unités à 6 € ; en concurrence, on échangerait 16 unités à 2 €.',
        'Un éditeur seul à vendre un manuel scolaire indispensable fixe un prix élevé et en vend moins que si plusieurs éditeurs se faisaient concurrence.',
      ],
    },
    Oligopole: {
      developpement:
        'En oligopole, chaque entreprise est assez grosse pour que ses choix modifient la situation des autres. Avant de baisser son prix ou de lancer un produit, elle doit anticiper la réaction de ses concurrents. C’est pour analyser ce type de situation qu’on utilise la théorie des jeux.',
      exemples: [
        'Si un opérateur de téléphonie lance un forfait moins cher, les autres doivent réagir pour ne pas perdre leurs clients.',
        'Les deux grands constructeurs d’avions de ligne surveillent chacun les commandes et les prix de l’autre.',
      ],
    },
    Duopole: {
      developpement:
        'Le duopole est l’oligopole le plus simple, avec seulement deux entreprises. Il sert souvent d’exemple dans les cours, car on peut résumer toutes les situations dans un tableau à quatre cases (dilemme du prisonnier).',
      exemples: [
        'Les deux grands fabricants de processeurs pour ordinateurs.',
        'Deux boulangeries dans un village isolé.',
      ],
    },
    'Théorie des jeux': {
      developpement:
        'Un « jeu », pour les économistes, est toute situation où le résultat de chacun dépend de ses choix et de ceux des autres. On décrit les joueurs, leurs stratégies possibles et les gains de chaque combinaison, puis on cherche ce que chacun a intérêt à faire. Elle sert à analyser l’oligopole, mais aussi les négociations, les élections ou les relations entre pays.',
      exemples: [
        'Deux entreprises qui doivent choisir en même temps leur budget de publicité.',
        'Deux pays qui décident s’ils réduisent ou non leurs émissions de CO₂.',
      ],
    },
    'Dilemme du prisonnier': {
      developpement:
        'Le nom vient d’une histoire : deux complices interrogés séparément ont chacun intérêt à dénoncer l’autre, et finissent tous deux en prison plus longtemps que s’ils s’étaient tus. En économie, deux entreprises ont chacune intérêt à baisser leur prix pour prendre les clients de l’autre, et finissent par gagner moins que si elles avaient maintenu des prix élevés. Le dilemme montre pourquoi la coopération (l’entente) est tentante, et pourquoi elle est difficile à tenir.',
      exemples: [
        'Gains (A ; B) : élevé/élevé 10 ; 10, A bas/B élevé 14 ; 3, bas/bas 5 ; 5. Chacun choisit le prix bas, et tous deux gagnent 5 au lieu de 10.',
        'Deux stations-service face à face : chacune baisse son prix pour attirer les automobilistes, et toutes deux voient leur marge fondre.',
      ],
    },
    'Stratégie dominante': {
      developpement:
        'Une stratégie est dominante si elle est la meilleure pour un joueur quoi que fasse l’autre. Le joueur n’a donc pas besoin de deviner le choix de son adversaire : il choisit cette stratégie dans tous les cas. Dans le dilemme du prisonnier, chaque joueur a une stratégie dominante, et c’est ce qui conduit au mauvais résultat collectif.',
      exemples: [
        'Si B fixe un prix élevé, A gagne 14 en baissant son prix (au lieu de 10) ; si B baisse son prix, A gagne 5 en le baissant aussi (au lieu de 3) : baisser est dominant.',
        'Pour un élève, réviser un contrôle peut être une stratégie dominante : c’est mieux, que le contrôle soit facile ou difficile.',
      ],
    },
    'Entente (cartel)': {
      developpement:
        'Une entente est un accord entre concurrents qui cessent de se faire concurrence : ils fixent ensemble leurs prix, se partagent les clients ou les régions, ou limitent leur production. Les consommateurs paient alors plus cher, comme face à un monopole. Les ententes sont interdites et lourdement sanctionnées, mais elles sont souvent secrètes et difficiles à prouver.',
      exemples: [
        'Des fabricants de produits d’entretien qui se mettent d’accord sur leurs hausses de prix.',
        'Des entreprises de travaux publics qui se répartissent à l’avance les appels d’offres d’une région.',
      ],
      nePasConfondre: 'Une entente (accord pour ne pas se concurrencer, illicite) et une fusion (deux entreprises deviennent une seule, autorisée si elle est contrôlée).',
    },
    'Position dominante': {
      developpement:
        'Une entreprise est en position dominante quand elle est si forte sur un marché qu’elle peut agir sans se soucier de ses concurrents. Ce n’est pas interdit : on peut devenir dominant grâce à un meilleur produit. Ce qui est interdit, c’est d’utiliser cette force pour empêcher les autres de rivaliser.',
      exemples: [
        'Un système d’exploitation installé sur la grande majorité des ordinateurs.',
        'Une plateforme de réservation d’hôtels utilisée par la plupart des voyageurs d’un pays.',
      ],
    },
    'Abus de position dominante': {
      developpement:
        'L’abus consiste à utiliser sa domination pour éliminer ou empêcher la concurrence, au lieu de gagner les clients par la qualité ou le prix. Exemples typiques : vendre à perte pour ruiner un concurrent, imposer l’achat d’un produit avec un autre, refuser l’accès à une infrastructure indispensable. Les autorités de concurrence peuvent infliger des amendes très élevées.',
      exemples: [
        'Un moteur de recherche qui met ses propres services en tête des résultats et relègue ceux de ses concurrents.',
        'Une entreprise dominante qui interdit à ses distributeurs de vendre les produits d’un concurrent.',
      ],
    },
    'Fusion-acquisition (concentration)': {
      developpement:
        'Quand deux concurrents fusionnent, le nombre d’entreprises sur le marché diminue et le pouvoir de marché peut augmenter. C’est pourquoi les grandes opérations doivent être autorisées par l’Autorité de la concurrence ou la Commission européenne. Une fusion peut aussi réduire les coûts (économies d’échelle) : l’autorité compare les avantages et les risques pour les consommateurs.',
      exemples: [
        'Un grand groupe de distribution qui rachète une chaîne de magasins concurrente doit parfois revendre certains magasins pour que la fusion soit autorisée.',
        'La Commission européenne a refusé en 2019 la fusion entre Alstom et Siemens dans le ferroviaire.',
      ],
    },
    'Politique de la concurrence': {
      developpement:
        'La politique de la concurrence part d’une idée simple : les consommateurs ont intérêt à ce que les entreprises se fassent concurrence. Elle a trois outils principaux : sanctionner les ententes, sanctionner les abus de position dominante et contrôler les concentrations ; dans l’Union européenne, elle contrôle aussi les aides d’État. Ses défenseurs y voient une protection du pouvoir d’achat ; ses critiques estiment qu’elle peut freiner la création de grandes entreprises européennes.',
      exemples: [
        'Une amende infligée à un cartel de fabricants de camions.',
        'L’obligation faite à une entreprise dominante de laisser ses concurrents accéder à son réseau.',
      ],
    },
    'Autorité de la concurrence': {
      developpement:
        'L’Autorité de la concurrence est indépendante du gouvernement : elle enquête, juge et sanctionne en France. Elle peut agir d’elle-même ou après une plainte. Pour les affaires qui concernent plusieurs pays européens, c’est la Commission européenne qui intervient.',
      exemples: [
        'Elle peut perquisitionner des entreprises soupçonnées d’entente.',
        'Elle rend des avis sur le fonctionnement de certains marchés (carburants, médicaments, numérique).',
      ],
    },
    'Programme de clémence': {
      developpement:
        'Les ententes étant secrètes, il est difficile de les découvrir. Le programme de clémence crée un dilemme du prisonnier entre les membres du cartel : le premier qui le dénonce échappe à l’amende, les autres paient. Chacun craint d’être trahi et a intérêt à parler le premier. Beaucoup de cartels ont été découverts de cette façon.',
      exemples: [
        'Un fabricant qui révèle une entente sur les prix des produits laitiers et obtient une immunité totale.',
        'Le deuxième membre à coopérer peut obtenir une réduction partielle de son amende.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Interdépendance stratégique',
      synonymes: ['interdépendantes', 'interdépendance'],
      definition: 'Situation dans laquelle le résultat de chaque entreprise dépend non seulement de ses propres décisions, mais aussi de celles de ses concurrents, qu’elle doit donc anticiper.',
      exemple: 'Si une compagnie aérienne baisse ses tarifs sur une ligne, sa concurrente perd des passagers et doit décider si elle baisse aussi les siens.',
      developpement:
        'L’interdépendance caractérise l’oligopole. En concurrence parfaite, chaque entreprise est trop petite pour gêner les autres ; en monopole, il n’y a pas d’autres. En oligopole, chaque décision appelle une réaction.',
      exemples: ['Les grandes enseignes de distribution suivent de près les prix affichés par leurs concurrentes.'],
    },
    {
      terme: 'Commission européenne',
      definition: 'Institution de l’Union européenne qui, entre autres missions, fait appliquer le droit européen de la concurrence : elle sanctionne les ententes et les abus de position dominante et contrôle les grandes fusions et les aides d’État.',
      exemple: 'Elle a refusé en 2019 la fusion entre Alstom et Siemens.',
      developpement:
        'Elle intervient pour les affaires qui dépassent le cadre d’un seul pays. Ses amendes peuvent atteindre 10 % du chiffre d’affaires mondial d’une entreprise.',
      exemples: ['Elle a infligé des amendes à de grandes entreprises du numérique pour abus de position dominante.'],
    },
    {
      terme: 'Aides d’État',
      definition: 'Avantages accordés par un État à certaines entreprises (subventions, prêts à taux réduit, exonérations), encadrés par le droit européen lorsqu’ils faussent la concurrence.',
      exemple: 'Une subvention à une seule compagnie aérienne nationale, qui la favorise face à ses concurrentes.',
      developpement:
        'Dans l’Union européenne, les aides d’État sont en principe interdites si elles faussent la concurrence, sauf exceptions (recherche, régions en difficulté, crises). La Commission européenne peut exiger leur remboursement.',
      exemples: ['Pendant la crise sanitaire de 2020, des aides exceptionnelles ont été autorisées pour éviter des faillites.'],
    },
    {
      terme: 'Équilibre de Nash',
      definition: 'Situation d’un jeu dans laquelle aucun joueur n’a intérêt à changer seul de stratégie, compte tenu de la stratégie choisie par les autres.',
      exemple: 'Dans le dilemme du prisonnier, la situation (prix bas ; prix bas) est un équilibre de Nash.',
      developpement:
        'Un équilibre de Nash n’est pas forcément le meilleur résultat pour les joueurs : dans le dilemme du prisonnier, les deux gagneraient plus en coopérant. C’est ce qui rend le dilemme intéressant : l’équilibre est stable mais collectivement mauvais.',
      exemples: ['Deux stations-service qui affichent toutes deux un prix bas : aucune n’a intérêt à remonter seule son prix.'],
    },
    {
      terme: 'Prix prédateur',
      definition: 'Prix fixé volontairement en dessous des coûts par une entreprise dominante pour éliminer un concurrent ou décourager son entrée, avant de remonter les prix.',
      exemple: 'Une compagnie qui vend des billets à perte sur une ligne jusqu’au départ de la compagnie nouvellement arrivée.',
      developpement:
        'À court terme, les consommateurs y gagnent ; mais une fois le concurrent éliminé, l’entreprise retrouve son pouvoir de marché et remonte ses prix. C’est une forme d’abus de position dominante.',
      exemples: ['Une plateforme qui subventionne massivement ses prix dans une ville jusqu’à la faillite des taxis locaux, puis augmente ses tarifs (exemple discuté).'],
    },
    {
      terme: 'Différenciation des produits',
      definition: 'Stratégie qui consiste à rendre son produit différent de ceux des concurrents (qualité, marque, design, service) pour obtenir un pouvoir de marché.',
      exemple: 'Deux marques de jus d’orange se distinguent par l’emballage, le goût et la publicité.',
      developpement:
        'Si les clients considèrent un produit comme unique, ils acceptent de le payer un peu plus cher : l’entreprise devient en partie faiseuse de prix, même s’il existe beaucoup de concurrents.',
      exemples: ['Les cafés « de spécialité » vendent plus cher que les cafés standards grâce à leur image.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'D’où vient le pouvoir de marché ? Trois cas',
        texte:
          '1. Peu d’offreurs : sur une île desservie par un seul ferry, la compagnie fixe ses tarifs (**monopole**). 2. Une **entente** : des fabricants de jouets se mettent d’accord sur leurs prix de Noël. 3. Des **barrières à l’entrée** : un nouveau fournisseur d’électricité ne peut pas construire son propre réseau et doit louer celui qui existe.',
      },
      {
        titre: 'Les économies d’échelle en chiffres',
        texte:
          'Développer un jeu vidéo coûte 50 millions d’euros, et chaque copie vendue coûte 2 € à produire. À 1 million de copies, le **coût moyen** est 50 + 2 = 52 € par copie ; à 5 millions, 10 + 2 = 12 €. Un grand studio qui vend beaucoup peut baisser ses prix plus qu’un petit : c’est une **barrière à l’entrée** (données fictives).',
      },
    ],
    [
      {
        titre: 'Pourquoi le monopole vend moins que la concurrence',
        texte:
          'Demande P = 10 − 0,5Q, coût marginal de 2. Le **monopole** compare la **recette marginale** (10 − Q) et le coût marginal : il produit 8 unités et vend à 6 €, profit (6 − 2) × 8 = 32. En concurrence, le prix tomberait à 2 et on échangerait 16 unités. Le **surplus du consommateur** passerait de 16 à 64 : le monopole capte une partie de ce surplus (profit) et en détruit une autre (**perte sèche** de 16).',
      },
      {
        titre: 'Trois monopoles, trois origines',
        texte:
          'Le réseau d’eau d’une ville est un **monopole naturel** (deux réseaux seraient un gaspillage). La vente de tabac réservée aux buralistes est un **monopole institutionnel** (créé par la loi). Le premier fabricant d’un nouveau type de batterie a un **monopole d’innovation**, protégé par un **brevet** pendant 20 ans au plus.',
      },
    ],
    [
      {
        titre: 'Le dilemme du prisonnier entre deux cafés',
        texte:
          'Deux cafés se font face. Si tous deux vendent le café 2,50 €, chacun gagne 300 € par jour. Si l’un passe à 2 € et pas l’autre, le moins cher gagne 400 € et l’autre 150 €. Si tous deux passent à 2 €, chacun gagne 200 €. Baisser est la **stratégie dominante** de chacun (400 > 300 et 200 > 150) : ils finissent à 200 € au lieu de 300 €. D’où la tentation d’une **entente**, illégale (données fictives).',
      },
      {
        titre: 'Comment la politique de la concurrence protège le consommateur',
        texte:
          'Imaginons qu’un **cartel** maintienne le prix d’un produit à 6 € alors qu’en concurrence il serait de 2 €. En sanctionnant l’entente, l’**Autorité de la concurrence** fait revenir la concurrence : le prix baisse, les quantités augmentent et le **surplus du consommateur** progresse (de 16 à 64 dans l’exemple du cours).',
      },
      {
        titre: 'Une fusion autorisée sous conditions',
        texte:
          'Deux enseignes de bricolage veulent fusionner. Dans certaines villes, elles sont les deux seules : la fusion créerait un **monopole** local. L’autorité autorise la fusion à condition que la nouvelle entreprise revende des magasins dans ces villes, pour qu’un concurrent puisse s’installer (exemple fictif).',
      },
    ],
  ],
};
