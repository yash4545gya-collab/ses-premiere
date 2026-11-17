import type { DeveloppementChapitre } from '../../types';

/** Chapitre IV — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devFinancement: DeveloppementChapitre = {
  id: 'financement',
  definitions: {
    'Capacité de financement': {
      developpement:
        'Un agent a une capacité de financement quand il lui reste de l’argent après avoir payé ses dépenses courantes et ses investissements. Cet argent « en trop » peut être prêté ou placé : il servira à financer ceux qui en manquent. Au niveau d’un pays, ce sont surtout les ménages qui dégagent une capacité de financement.',
      exemples: [
        'Une famille qui épargne 400 € par mois et n’achète pas de logement place cet argent sur un livret.',
        'Une entreprise très rentable qui a plus de bénéfices que de projets d’investissement place sa trésorerie.',
      ],
      nePasConfondre: 'Capacité de financement (on peut prêter) et besoin de financement (on doit emprunter).',
    },
    'Besoin de financement': {
      developpement:
        'Un agent a un besoin de financement quand ses propres ressources ne suffisent pas à couvrir ses dépenses d’investissement (ou, pour l’État, ses dépenses totales). Il doit alors trouver de l’argent à l’extérieur : en empruntant ou en vendant des titres. Ce n’est pas forcément un signe de mauvaise santé : une entreprise qui investit beaucoup pour grandir a souvent un besoin de financement.',
      exemples: [
        'Un couple qui achète un appartement de 250 000 € avec 40 000 € d’apport a besoin d’emprunter 210 000 €.',
        'L’État, en déficit, doit emprunter chaque année sur les marchés.',
      ],
    },
    Épargne: {
      developpement:
        'L’épargne est ce qu’on ne consomme pas sur son revenu. C’est un flux (un montant par mois ou par an), à distinguer du patrimoine (un stock accumulé). On peut épargner pour se protéger d’un imprévu (épargne de précaution), pour un projet (acheter un logement) ou pour la retraite.',
      exemples: [
        'Une étudiante qui gagne 600 € par mois et en dépense 520 € épargne 80 €.',
        'Rembourser un emprunt immobilier est une forme d’épargne : on se constitue un patrimoine.',
      ],
      nePasConfondre: 'Épargne (flux : ce qu’on met de côté pendant une période) et patrimoine (stock : ce qu’on possède à une date).',
    },
    'Revenu disponible': {
      developpement:
        'C’est le revenu qui reste vraiment à la disposition d’un ménage pour consommer ou épargner, une fois les impôts directs et les cotisations payés et les aides reçues. On le calcule ainsi : revenus du travail et du patrimoine + prestations sociales − impôts directs − cotisations sociales.',
      exemples: [
        'Un salaire net de 1 900 € + 150 € d’allocations − 100 € d’impôt sur le revenu = 1 950 € de revenu disponible (données fictives).',
        'Un retraité dont la pension est de 1 600 € et qui paie 60 € d’impôt dispose de 1 540 € (données fictives).',
      ],
    },
    'Taux d’épargne': {
      developpement:
        'Le taux d’épargne indique quelle part de son revenu un ménage met de côté. Il augmente souvent quand l’avenir paraît incertain (les ménages se protègent) et avec le niveau de revenu (les plus aisés épargnent une plus grande part de ce qu’ils gagnent).',
      exemples: [
        'Revenu disponible de 3 000 €, épargne de 450 € : taux d’épargne de 15 % (données fictives).',
        'Pendant la crise sanitaire de 2020, le taux d’épargne des ménages français a fortement augmenté, faute de pouvoir consommer.',
      ],
    },
    Investissement: {
      developpement:
        'En économie, investir veut dire acheter des biens qui servent à produire pendant plusieurs années : machines, bâtiments, logiciels, véhicules. Pour les ménages, seul l’achat d’un logement neuf est compté comme investissement. Acheter des actions n’est pas un investissement au sens de la comptabilité nationale : c’est un placement.',
      exemples: [
        'Une boulangerie qui achète un nouveau four.',
        'Une entreprise qui développe un logiciel pour gérer ses commandes.',
      ],
      nePasConfondre: 'Investissement (achat de biens de production) et placement financier (achat d’actions, d’obligations, épargne sur un livret).',
    },
    'Excédent brut d’exploitation (EBE)': {
      developpement:
        'L’EBE répond à la question : « une fois payés les salariés et les impôts sur la production, que reste-t-il à l’entreprise grâce à son activité ? ». C’est avec l’EBE qu’elle va payer ses intérêts, ses impôts sur les bénéfices, verser des dividendes et financer ses investissements. Il mesure la capacité de l’entreprise à dégager des ressources par elle-même.',
      exemples: [
        'Valeur ajoutée de 500, rémunération des salariés de 300, impôts sur la production de 20 : EBE de 180.',
        'Une start-up en croissance peut avoir un EBE négatif : ses salaires dépassent encore la valeur qu’elle crée.',
      ],
    },
    Autofinancement: {
      synonymes: ['autofinancer', 'financement interne', 'interne'],
      developpement:
        'S’autofinancer, c’est payer ses investissements avec son propre argent, mis de côté sur les bénéfices passés. L’entreprise ne doit rien à personne et garde son indépendance. Mais ses ressources sont limitées : pour de gros projets, elle doit compléter par un financement externe.',
      exemples: [
        'Un artisan qui achète un camion avec l’argent gardé sur les bénéfices des années précédentes.',
        'Une grande entreprise qui finance sa nouvelle usine sans emprunter, grâce à ses profits.',
      ],
    },
    'Taux d’autofinancement': {
      developpement:
        'Ce taux indique quelle part des investissements l’entreprise finance elle-même. À 100 %, elle finance tout seule ; en dessous, elle doit emprunter ou émettre des titres pour la différence ; au-dessus, elle dégage même une capacité de financement.',
      exemples: [
        'Épargne brute de 150, investissement de 250 : taux d’autofinancement de 60 %, il faut trouver 100 à l’extérieur.',
        'Épargne brute de 300, investissement de 240 : taux de 125 %, l’entreprise peut placer ou prêter 60 (données fictives).',
      ],
    },
    'Financement externe': {
      synonymes: ['externe'],
      developpement:
        'Quand l’autofinancement ne suffit pas, l’entreprise va chercher de l’argent auprès d’autres agents. Deux grandes voies existent : emprunter à une banque (financement intermédié) ou émettre des titres sur les marchés financiers (financement direct).',
      exemples: [
        'Une PME qui obtient un prêt bancaire pour agrandir son atelier.',
        'Une grande entreprise qui émet des obligations pour financer un rachat.',
      ],
    },
    'Financement intermédié (indirect)': {
      developpement:
        'La banque se place entre ceux qui ont de l’argent et ceux qui en ont besoin. Elle évalue le risque de chaque emprunteur, fixe un taux et assume le risque de non-remboursement. C’est le mode de financement le plus utilisé par les PME et les ménages, qui n’ont pas accès aux marchés financiers.',
      exemples: [
        'Un ménage qui contracte un crédit immobilier.',
        'Un restaurateur qui obtient un prêt pour rénover sa salle.',
      ],
      nePasConfondre: 'Financement intermédié (une banque fait l’intermédiaire) et financement direct (l’entreprise vend ses titres directement aux épargnants).',
    },
    'Financement direct (de marché)': {
      developpement:
        'L’entreprise s’adresse directement aux épargnants en vendant des titres sur les marchés financiers : des actions (elle ouvre son capital) ou des obligations (elle emprunte). Ce mode convient aux grandes entreprises connues, capables d’attirer de nombreux investisseurs.',
      exemples: [
        'Une entreprise qui entre en Bourse en vendant des actions au public.',
        'L’État qui émet des obligations (OAT) pour financer son déficit.',
      ],
    },
    Action: {
      developpement:
        'Acheter une action, c’est devenir copropriétaire d’une petite partie de l’entreprise. L’actionnaire gagne de l’argent de deux façons : les dividendes (une part des bénéfices) et la hausse éventuelle du prix de l’action. Mais il prend un risque : si l’entreprise va mal, l’action peut perdre beaucoup de valeur, et il n’est jamais remboursé.',
      exemples: [
        'Un salarié qui achète des actions de son entreprise et vote à l’assemblée générale.',
        'Une action achetée 40 € qui en vaut 55 un an plus tard rapporte une plus-value de 15 € (données fictives).',
      ],
      nePasConfondre: 'Action (titre de propriété : dividende variable, risque plus élevé) et obligation (titre de dette : intérêt fixé, remboursement prévu).',
    },
    Obligation: {
      developpement:
        'Acheter une obligation, c’est prêter de l’argent à une entreprise ou à un État. En échange, on reçoit chaque année un intérêt fixé à l’avance (le coupon) et on est remboursé à une date prévue (l’échéance). C’est en général moins risqué qu’une action, mais l’émetteur peut faire défaut.',
      exemples: [
        'Une obligation de 1 000 € à 3 % sur 5 ans rapporte 30 € par an, puis 1 000 € remboursés au bout de 5 ans.',
        'Les obligations de l’État français (OAT) sont achetées par des banques, des assureurs et des fonds.',
      ],
    },
    Dividende: {
      developpement:
        'Chaque année, l’assemblée générale des actionnaires décide quelle part du bénéfice est distribuée et quelle part est gardée dans l’entreprise. Le dividende n’est pas garanti : il peut baisser ou disparaître si l’entreprise fait moins de bénéfices.',
      exemples: [
        'Une entreprise qui verse 2 € par action : un actionnaire qui en possède 100 reçoit 200 €.',
        'En 2020, beaucoup d’entreprises ont suspendu leurs dividendes à cause de la crise sanitaire.',
      ],
    },
    'Marché financier': {
      developpement:
        'Le marché financier est l’endroit (aujourd’hui surtout électronique) où s’achètent et se vendent les titres de long terme. On y distingue le marché primaire, où les titres sont créés et vendus pour la première fois (l’entreprise reçoit l’argent), et le marché secondaire (la Bourse), où ils changent ensuite de mains entre investisseurs.',
      exemples: [
        'Euronext Paris, où sont cotées les grandes entreprises françaises.',
        'Un épargnant qui revend ses actions en Bourse pour récupérer son argent.',
      ],
    },
    'Taux d’intérêt': {
      developpement:
        'Le taux d’intérêt est le « prix » de l’argent prêté. Pour celui qui prête, c’est une récompense : il renonce à utiliser son argent et prend le risque de ne pas être remboursé. Pour celui qui emprunte, c’est un coût. Plus l’emprunt est long et risqué, plus le taux est élevé en général.',
      exemples: [
        'Emprunter 20 000 € à 4,5 % coûte 900 € d’intérêts la première année.',
        'Un livret d’épargne à 3 % rapporte 30 € par an pour 1 000 € déposés.',
      ],
    },
    'Marché des fonds prêtables': {
      synonymes: ['fonds prêtables'],
      developpement:
        'C’est une façon de représenter l’ensemble des prêts et emprunts d’une économie comme un marché : l’offre de fonds vient de l’épargne, la demande vient des investisseurs et de l’État. Le taux d’intérêt joue le rôle du prix et s’ajuste pour égaliser les deux. Si l’État emprunte davantage, la demande augmente et le taux tend à monter.',
      exemples: [
        'Dans l’exemple du cours, l’équilibre est de 30 milliards prêtés à 4 %.',
        'Quand les ménages épargnent davantage, l’offre de fonds augmente et le taux tend à baisser.',
      ],
    },
    'Prime de risque': {
      developpement:
        'Prêter à quelqu’un qui risque de ne pas rembourser demande une compensation : le prêteur exige un taux plus élevé. La différence entre ce taux et celui d’un emprunteur jugé très sûr est la prime de risque. Elle augmente quand l’emprunteur est fragile ou quand l’économie va mal.',
      exemples: [
        'Une jeune entreprise sans historique emprunte à 7 % quand une grande entreprise solide emprunte à 4 % : 3 points de prime de risque (données fictives).',
        'Pendant la crise de la zone euro (2010-2012), la Grèce empruntait bien plus cher que l’Allemagne.',
      ],
    },
    'Taux d’intérêt réel': {
      synonymes: ['taux réel'],
      developpement:
        'Le taux réel mesure ce que rapporte vraiment un prêt en pouvoir d’achat. Si les prix montent de 3 % et que le prêt rapporte 3 %, le prêteur n’a rien gagné : il pourra acheter autant qu’avant. Quand l’inflation dépasse le taux nominal, le taux réel est négatif : l’emprunteur est avantagé.',
      exemples: [
        'Taux nominal 5 %, inflation 2 % : taux réel d’environ 3 %.',
        'Taux nominal 2 %, inflation 5 % : taux réel d’environ −3 %, l’emprunteur rembourse avec une monnaie qui a perdu de la valeur.',
      ],
      nePasConfondre: 'Taux réel (corrigé de l’inflation) et taux nominal (affiché dans le contrat).',
    },
    'Solde budgétaire': {
      developpement:
        'Le solde budgétaire compare ce que l’État encaisse (impôts, recettes non fiscales) et ce qu’il dépense (services publics, prestations, intérêts de la dette) sur une année. S’il est positif, c’est un excédent ; s’il est négatif, un déficit.',
      exemples: [
        'Recettes de 320, dépenses de 370 : solde de −50 (données fictives).',
        'Recettes de 400, dépenses de 380 : excédent de 20 (données fictives).',
      ],
    },
    'Déficit budgétaire': {
      developpement:
        'Quand l’État dépense plus qu’il n’encaisse, il doit emprunter la différence. Un déficit n’est pas forcément une mauvaise gestion : en période de crise, il permet de soutenir l’activité. Mais s’il dure, la dette augmente et les intérêts à payer aussi.',
      exemples: [
        'En 2020, les déficits publics européens ont fortement augmenté pour financer le chômage partiel.',
        'Un État qui construit des infrastructures peut accepter un déficit en espérant une croissance future plus forte.',
      ],
      nePasConfondre: 'Déficit (ce qui manque sur une année) et dette (total accumulé de ce que l’État doit).',
    },
    'Dette publique': {
      developpement:
        'La dette publique est l’ensemble de ce que les administrations publiques doivent à leurs créanciers à une date donnée. Elle grossit chaque année de déficit. On la rapporte souvent au PIB pour comparer les pays et juger si elle est soutenable : ce qui compte, c’est la capacité à payer les intérêts et à rembourser.',
      exemples: [
        'En France, la dette publique dépasse 3 000 milliards d’euros depuis 2023 (INSEE).',
        'Si le déficit est de 50 une année, la dette augmente d’environ 50 (données fictives).',
      ],
    },
    'Effet d’éviction': {
      developpement:
        'L’État et les entreprises puisent dans le même « réservoir » d’épargne. Si l’État emprunte beaucoup, il reste moins de fonds pour les entreprises, ou bien ces fonds coûtent plus cher (le taux monte). Certaines entreprises renoncent alors à investir : l’investissement public a « évincé » une partie de l’investissement privé.',
      exemples: [
        'Dans l’exemple du cours, l’emprunt public de 20 milliards fait monter le taux de 4 % à 5 % et réduit la demande privée de 30 à 20 milliards.',
        'Une PME renonce à acheter une machine parce que le taux de son crédit est passé de 3 % à 5 %.',
      ],
    },
    'Politique de relance': {
      developpement:
        'La relance vise à sortir d’une période de faible activité en augmentant la demande : l’État dépense plus (travaux publics, aides) ou baisse les impôts pour que les ménages consomment davantage. Selon l’analyse keynésienne, cette demande supplémentaire pousse les entreprises à produire et à embaucher. Son efficacité est discutée (effet d’éviction, dette, épargne des ménages).',
      exemples: [
        'Le plan de relance français de 2020 (rénovation énergétique, industrie, emploi des jeunes).',
        'Une prime versée aux ménages modestes pour soutenir la consommation.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Valeur ajoutée',
      definition: 'Richesse créée par une entreprise : valeur de sa production (chiffre d’affaires) moins la valeur des consommations intermédiaires (biens et services achetés et détruits dans la production).',
      exemple: 'Une boulangerie vend pour 200 000 € de pain et achète 70 000 € de farine, d’énergie et d’emballages : sa valeur ajoutée est de 130 000 € (données fictives).',
      developpement:
        'La valeur ajoutée mesure ce que l’entreprise apporte elle-même, sans compter ce qu’elle a acheté à d’autres. Elle sert à rémunérer les salariés, à payer les impôts sur la production, et ce qui reste forme l’EBE. La somme des valeurs ajoutées d’un pays donne son PIB.',
      exemples: ['Un garage qui facture 1 000 € une réparation dont les pièces lui ont coûté 400 € crée 600 € de valeur ajoutée.'],
      nePasConfondre: 'Valeur ajoutée (richesse créée) et chiffre d’affaires (total des ventes, qui inclut ce qui a été acheté à d’autres).',
    },
    {
      terme: 'Consommation',
      definition: 'Utilisation d’un bien ou d’un service pour satisfaire un besoin ; pour un ménage, partie du revenu disponible dépensée pour acheter des biens et services.',
      exemple: 'Les dépenses d’alimentation, de loyer, de transport et de loisirs.',
      developpement: 'Revenu disponible = consommation + épargne. Quand la consommation baisse à revenu constant, l’épargne augmente.',
      exemples: ['Un ménage qui dispose de 2 500 € et en dépense 2 200 consomme 2 200 € et épargne 300 €.'],
    },
    {
      terme: 'Taux d’intérêt nominal',
      synonymes: ['taux nominal'],
      definition: 'Taux d’intérêt inscrit dans le contrat de prêt, avant prise en compte de l’inflation.',
      exemple: 'Un crédit immobilier affiché à 3,5 % par an.',
      developpement: 'C’est le taux que l’on paie ou reçoit en euros. Pour savoir ce qu’il représente en pouvoir d’achat, on lui retire l’inflation : on obtient le taux réel.',
      exemples: ['Un livret à 3 % avec 2 % d’inflation ne rapporte qu’environ 1 % en pouvoir d’achat.'],
    },
    {
      terme: 'Coupon',
      definition: 'Intérêt versé périodiquement au détenteur d’une obligation, calculé à partir de la valeur de l’obligation et du taux fixé à l’émission.',
      exemple: 'Une obligation de 1 000 € à 3 % verse un coupon de 30 € par an.',
      developpement: 'Le coupon est fixé à l’émission et ne dépend pas des bénéfices de l’émetteur, contrairement au dividende d’une action.',
      exemples: ['Une obligation d’État de 5 000 € à 2 % verse 100 € par an jusqu’à son remboursement.'],
    },
    {
      terme: 'Marché primaire',
      definition: 'Compartiment du marché financier sur lequel sont émis et vendus pour la première fois des titres nouveaux ; l’argent va à l’entreprise ou à l’État émetteur.',
      exemple: 'Une entreprise qui vend de nouvelles actions lors de son entrée en Bourse.',
      developpement: 'C’est sur le marché primaire que le financement de l’économie a lieu : l’émetteur reçoit des fonds pour investir.',
      exemples: ['L’État qui vend de nouvelles obligations lors d’une adjudication.'],
      nePasConfondre: 'Marché primaire (émission : l’émetteur reçoit l’argent) et marché secondaire (revente : l’argent passe d’un investisseur à un autre).',
    },
    {
      terme: 'Marché secondaire',
      definition: 'Compartiment du marché financier sur lequel s’échangent des titres déjà émis (la Bourse) ; il permet aux épargnants de revendre leurs titres.',
      exemple: 'Un épargnant qui revend en Bourse des actions achetées il y a cinq ans.',
      developpement:
        'L’entreprise ne reçoit rien lors d’une revente, mais le marché secondaire est indispensable : on accepte plus facilement d’acheter un titre si l’on sait qu’on pourra le revendre. Il rend les titres liquides.',
      exemples: ['Le cours d’une action qui varie chaque jour selon les achats et les ventes des investisseurs.'],
    },
    {
      terme: 'Recettes publiques',
      synonymes: ['recettes', 'recettes fiscales', 'fiscales', 'non fiscales', 'recettes non fiscales'],
      definition: 'Ressources des administrations publiques : surtout des recettes fiscales (impôts et taxes) et, plus marginalement, des recettes non fiscales (revenus du patrimoine public, amendes, dividendes).',
      exemple: 'La TVA, l’impôt sur le revenu, l’impôt sur les sociétés (recettes fiscales) ; les dividendes d’une entreprise publique (recette non fiscale).',
      developpement: 'La TVA est en France la première recette fiscale de l’État. Les recettes dépendent de l’activité : en période de croissance, elles augmentent sans changer les taux.',
      exemples: ['Les amendes de stationnement ou les revenus de la location de bâtiments publics sont des recettes non fiscales.'],
    },
    {
      terme: 'Dépenses publiques',
      synonymes: ['dépenses'],
      definition: 'Ensemble des dépenses des administrations publiques : rémunération des agents publics, investissements, prestations sociales, intérêts de la dette.',
      exemple: 'Le salaire des enseignants, la construction d’une route, le versement des retraites.',
      developpement: 'Les dépenses publiques financent les services publics et la redistribution. Leur hausse peut soutenir l’activité (relance), mais si elle est financée par l’emprunt, elle peut créer un effet d’éviction.',
      exemples: ['Les intérêts de la dette publique sont une dépense qui augmente quand les taux montent.'],
    },
    {
      terme: 'Emprunt',
      definition: 'Somme d’argent obtenue auprès d’un prêteur (banque, épargnants) qui devra être remboursée, avec des intérêts, selon un calendrier fixé.',
      exemple: 'L’État finance son déficit par l’emprunt en émettant des obligations.',
      developpement: 'L’emprunt permet de dépenser aujourd’hui un argent qu’on n’a pas encore ; il crée une dette et un coût (les intérêts).',
      exemples: ['Une entreprise qui emprunte 100 000 € sur 5 ans pour acheter une machine.'],
    },
    {
      terme: 'Impôt',
      definition: 'Prélèvement obligatoire, sans contrepartie directe, effectué par les administrations publiques pour financer leurs dépenses.',
      exemple: 'L’impôt sur le revenu, la TVA, la taxe foncière.',
      developpement:
        'Contrairement au prix d’un bien, l’impôt ne donne pas droit à un service précis en échange : il finance l’ensemble des services publics. Il se distingue des cotisations sociales, qui ouvrent des droits (retraite, chômage).',
      exemples: ['La TVA est payée par tous les consommateurs sur la plupart des achats.'],
      nePasConfondre: 'Impôt (sans contrepartie directe) et cotisation sociale (ouvre des droits à des prestations).',
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Qui finance qui ? Un exemple dans une ville',
        texte:
          'La famille Martin épargne 300 € par mois sur un livret : elle a une **capacité de financement**. La boulangerie du quartier veut un four de 30 000 € mais n’a que 10 000 € : elle a un **besoin de financement**. La banque utilise les dépôts et sa capacité à créer de la monnaie pour prêter 20 000 € à la boulangerie : c’est du **financement intermédié** (données fictives).',
      },
      {
        titre: 'Pourquoi tous ne paient pas le même taux',
        texte:
          'L’État français emprunte à 3 %, une grande entreprise solide à 4 %, une jeune entreprise à 7 %. La différence s’explique par la **prime de risque** : plus le prêteur craint de ne pas être remboursé, plus il exige un **taux d’intérêt** élevé (données fictives).',
      },
      {
        titre: 'Taux nominal et taux réel',
        texte:
          'Inès place 1 000 € à 4 % : un an plus tard, elle a 1 040 €. Mais les prix ont augmenté de 3 % : ce qui coûtait 1 000 € coûte 1 030 €. En pouvoir d’achat, elle n’a gagné qu’environ 1 % : c’est le **taux d’intérêt réel** (≈ 4 − 3). Le **taux nominal** était de 4 % (données fictives).',
      },
    ],
    [
      {
        titre: 'Calculer un taux d’épargne',
        texte:
          'Le **revenu disponible** d’un ménage est de 3 000 € par mois. Il consomme 2 550 €. Son **épargne** est de 450 € et son **taux d’épargne** de 450 / 3 000 × 100 = 15 % (données fictives).',
      },
      {
        titre: 'Du chiffre d’affaires à l’autofinancement',
        texte:
          'Une entreprise réalise une **valeur ajoutée** de 500. Elle verse 300 de salaires et cotisations et 20 d’impôts sur la production : son **EBE** est de 180. Après intérêts, impôt sur les bénéfices et dividendes, il lui reste 150 d’épargne brute. Pour un investissement de 250, son **taux d’autofinancement** est de 60 % : elle doit emprunter ou émettre des titres pour 100.',
      },
      {
        titre: 'Action ou obligation ?',
        texte:
          'Lina a 1 000 € à placer. En achetant une **obligation** à 3 %, elle reçoit 30 € par an et récupère 1 000 € à l’échéance (sauf faillite de l’émetteur). En achetant des **actions**, elle peut gagner plus (dividendes, hausse du cours) ou perdre une partie de son argent si le cours baisse. Plus de rendement espéré va avec plus de risque.',
      },
    ],
    [
      {
        titre: 'Le budget d’un État en chiffres',
        texte:
          'Un État encaisse 320 milliards de **recettes** et dépense 370 milliards. Son **solde budgétaire** est de −50 milliards : c’est un **déficit**, financé par l’**emprunt**. Si sa dette était de 1 000 milliards, elle passe à environ 1 050 milliards (données fictives).',
      },
      {
        titre: 'Relance contre éviction',
        texte:
          'Pendant une récession, l’État finance des travaux de rénovation : les entreprises du bâtiment embauchent, les salaires versés sont dépensés dans les commerces (**effet de relance**). Mais pour financer ces dépenses, l’État emprunte : le taux d’intérêt monte de 4 % à 5 % et certaines entreprises renoncent à investir (**effet d’éviction**). Le bilan dépend de la situation : quand le chômage est élevé et les taux bas, la relance l’emporte souvent.',
      },
    ],
  ],
};
