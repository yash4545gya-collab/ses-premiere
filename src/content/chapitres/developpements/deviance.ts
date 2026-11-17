import type { DeveloppementChapitre } from '../../types';

/** Chapitre VIII — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devDeviance: DeveloppementChapitre = {
  id: 'deviance',
  definitions: {
    'Norme sociale': {
      synonymes: ['normes'],
      developpement:
        'Une norme sociale est une règle de comportement partagée par un groupe, même si elle n’est écrite nulle part. On la découvre surtout quand quelqu’un la transgresse : regards appuyés, remarques, moqueries, mise à l’écart. Elle varie selon les groupes : ce qui est attendu entre amis ne l’est pas forcément au travail ou en famille.',
      exemples: [
        'Ne pas couper la parole à quelqu’un pendant une conversation.',
        'S’habiller de façon sobre pour un entretien d’embauche.',
      ],
      nePasConfondre: 'Norme sociale (règle d’usage, sanction informelle) et norme juridique (règle de droit, sanction par les institutions).',
    },
    'Norme juridique': {
      synonymes: ['norme juridique pénale', 'normes juridiques'],
      developpement:
        'Une norme juridique est une règle de droit : elle est écrite (dans une loi ou un règlement), connue de tous en principe, et sa violation est sanctionnée par les institutions (police, justice, administration). Certaines normes juridiques traduisent des normes sociales anciennes (ne pas voler) ; d’autres sont techniques (le Code de la route).',
      exemples: [
        'L’obligation de porter la ceinture de sécurité en voiture.',
        'L’interdiction de fumer dans les lieux publics fermés.',
      ],
    },
    'Contrôle social': {
      developpement:
        'Le contrôle social désigne tout ce qui pousse les individus à respecter les normes : regards, conseils, récompenses, punitions, surveillance. Il peut être exercé par des institutions (police, école, justice) ou par l’entourage. Il n’agit pas seulement par la peur de la sanction : le plus efficace est l’intériorisation des normes.',
      exemples: [
        'Des parents qui privent leur enfant de console après une mauvaise conduite.',
        'Les caméras de vidéosurveillance dans un centre-ville.',
      ],
    },
    'Contrôle social formel': {
      synonymes: ['formel'],
      developpement:
        'Le contrôle formel est exercé par des institutions dont c’est la mission, selon des règles écrites et des procédures : un policier qui verbalise, un juge qui condamne, un conseil de discipline qui exclut. La sanction est officielle et prévue à l’avance.',
      exemples: [
        'Un contrôleur qui verbalise un voyageur sans billet.',
        'Un professeur qui inscrit une sanction dans le carnet de liaison selon le règlement intérieur.',
      ],
      nePasConfondre: 'Contrôle formel (institutions spécialisées, procédures) et contrôle informel (entourage, spontané).',
    },
    'Contrôle social informel': {
      synonymes: ['informel'],
      developpement:
        'Le contrôle informel est exercé spontanément par l’entourage, sans règles écrites : un regard réprobateur, une remarque, une moquerie, une mise à l’écart, mais aussi un compliment. Il est souvent très efficace, car on tient au regard de ses proches.',
      exemples: [
        'Des amis qui se moquent d’un camarade arrivé avec une tenue jugée démodée.',
        'Un voisin qui fait une remarque à quelqu’un qui laisse ses déchets dans l’escalier.',
      ],
    },
    Sanction: {
      synonymes: ['sanctions', 'sanctions positives', 'sanctions négatives'],
      developpement:
        'En sociologie, une sanction n’est pas forcément une punition : c’est toute réaction d’un groupe face au comportement de quelqu’un. Elle est positive quand elle récompense le respect des normes (félicitations, prime, promotion) et négative quand elle punit leur transgression (amende, moquerie, exclusion).',
      exemples: [
        'Une prime accordée à un salarié pour la qualité de son travail (sanction positive).',
        'Une exclusion temporaire d’un club de sport après une bagarre (sanction négative).',
      ],
    },
    Déviance: {
      developpement:
        'Un comportement est déviant quand il s’écarte d’une norme et que le groupe le désigne comme tel. La déviance est relative : elle dépend de la société, de l’époque et du groupe. Ce qui est déviant ici peut être normal ailleurs. Elle n’est pas forcément grave ni illégale : avoir des cheveux bleus dans certaines entreprises est déviant, sans être un délit.',
      exemples: [
        'Fumer en classe était toléré pour les professeurs dans les années 1970 ; c’est aujourd’hui interdit.',
        'Porter un costume dans un groupe de skateurs peut être perçu comme déviant.',
      ],
    },
    Délinquance: {
      developpement:
        'La délinquance est la partie de la déviance qui viole la loi pénale : vol, violences, fraude, trafics… Elle est sanctionnée par la justice. Toute délinquance est déviante, mais la plupart des comportements déviants ne sont pas des délits.',
      exemples: [
        'Taguer un mur sans autorisation est une infraction.',
        'Revendre de façon habituelle des billets de concert sans l’autorisation de l’organisateur est une infraction en France.',
      ],
      nePasConfondre: 'Délinquance (transgression de la loi pénale) et déviance (transgression de toute norme, sociale ou juridique).',
    },
    Infraction: {
      developpement:
        'Une infraction est un acte interdit par la loi pénale et puni d’une peine. Le droit français les classe en trois catégories selon leur gravité : les contraventions (les moins graves), les délits et les crimes (les plus graves).',
      exemples: [
        'Stationner sur une place réservée aux personnes handicapées (contravention).',
        'Un vol à l’étalage (délit).',
      ],
    },
    Anomie: {
      developpement:
        'Pour Durkheim, l’anomie est un affaiblissement des règles qui encadrent les désirs des individus, par exemple lors de changements rapides de la société. Pour Merton, c’est un décalage entre les buts que la société valorise (la réussite) et les moyens légitimes d’y parvenir (diplômes, emploi), inégalement accessibles. Ceux qui n’ont pas accès à ces moyens peuvent chercher d’autres voies, parfois illégales.',
      exemples: [
        'Un jeune qui valorise la richesse affichée sur les réseaux mais n’a pas accès aux études ni à l’emploi.',
        'Une période de crise brutale où les repères habituels ne fonctionnent plus.',
      ],
    },
    Étiquetage: {
      developpement:
        'L’étiquetage consiste à « coller une étiquette » de déviant sur quelqu’un : « voleur », « perturbateur », « délinquant ». Pour Howard Becker, c’est ce qui fait de quelqu’un un déviant : un même acte peut passer inaperçu ou être sanctionné selon qui le commet et qui le remarque. Une fois étiqueté, l’individu est traité différemment, ce qui peut l’enfermer dans ce rôle.',
      exemples: [
        'Un élève qualifié de « perturbateur » est surveillé de près et puni plus vite que les autres pour les mêmes faits.',
        'Un jeune interpellé une fois est connu des services de police et contrôlé plus souvent.',
      ],
    },
    Stigmatisation: {
      developpement:
        'La stigmatisation transforme une caractéristique en marque de honte : la personne n’est plus vue que par ce trait. Elle est rejetée, mise à l’écart, perd des occasions (emploi, logement, amitiés). Erving Goffman a étudié comment les personnes stigmatisées cachent ou gèrent ce trait pour être acceptées.',
      exemples: [
        'Un ancien détenu qui cache son passé pour trouver un emploi.',
        'Un élève moqué pour son accent qui finit par ne plus parler en classe.',
      ],
    },
    Stigmate: {
      developpement:
        'Le stigmate est la caractéristique elle-même : un passé judiciaire, une maladie, un handicap, une origine, une orientation sexuelle. Ce n’est pas le trait qui est honteux en soi, c’est le regard des autres qui le rend disqualifiant.',
      exemples: [
        'Une cicatrice visible sur le visage.',
        'Un casier judiciaire.',
      ],
    },
    'Carrière déviante': {
      developpement:
        'Becker compare l’entrée dans la déviance à une carrière professionnelle : on avance par étapes, et chaque étape rend la suivante plus probable. Premier acte, désignation publique, rejet par les groupes « conformes », rapprochement avec d’autres déviants qui partagent les mêmes pratiques et justifications. Mais rien n’est écrit : on peut s’arrêter à chaque étape.',
      exemples: [
        'Un adolescent qui fume du cannabis avec des amis, est exclu de son lycée, puis se rapproche d’un groupe de revendeurs.',
        'Un jeune qui tague, est repéré, puis rejoint un collectif de graffeurs avec ses codes et ses justifications.',
      ],
    },
    'Entrepreneur de morale': {
      developpement:
        'Les normes ne tombent pas du ciel : des personnes se mobilisent pour les créer ou les faire respecter. Becker les appelle « entrepreneurs de morale ». Ce sont des militants, associations, journalistes, responsables politiques qui font qu’un comportement autrefois toléré devient interdit, ou l’inverse.',
      exemples: [
        'Des associations de victimes de la route qui obtiennent des contrôles d’alcoolémie plus fréquents.',
        'Des militants qui obtiennent la reconnaissance du harcèlement scolaire comme un délit.',
      ],
    },
    'Statistiques administratives de la délinquance': {
      developpement:
        'Ces statistiques comptent les faits enregistrés par la police, la gendarmerie et la justice. Elles ne mesurent pas toute la délinquance : seulement celle qui arrive jusqu’aux services. Elles dépendent donc aussi des plaintes déposées, des priorités des services et des moyens disponibles.',
      exemples: [
        'Le nombre de vols de voitures enregistrés en un an.',
        'Si la police multiplie les contrôles de stupéfiants, le nombre d’infractions enregistrées augmente.',
      ],
    },
    'Enquête de victimation': {
      developpement:
        'Plutôt que de compter les plaintes, on demande directement à un échantillon de personnes : « avez-vous été victime de… ces 12 derniers mois ? » et « avez-vous porté plainte ? ». On découvre ainsi des faits jamais déclarés à la police, ce qui permet d’estimer une partie du chiffre noir. Ces enquêtes ont leurs limites (oublis, réticence à répondre, pas d’infractions sans victime directe).',
      exemples: [
        'L’enquête « Vécu et ressenti en matière de sécurité » du service statistique du ministère de l’Intérieur.',
        'Une enquête qui révèle que la plupart des victimes de vols de vélos ne portent pas plainte.',
      ],
    },
    'Chiffre noir de la délinquance': {
      synonymes: ['chiffre noir'],
      developpement:
        'Le chiffre noir, c’est tout ce qui échappe aux statistiques : les infractions jamais découvertes, jamais déclarées ou jamais enregistrées. Il est très élevé pour certains faits (vols simples, violences intrafamiliales, fraudes) et plus faible pour d’autres (vols de voitures, cambriolages), que l’on déclare pour être remboursé par l’assurance.',
      exemples: [
        'Une victime d’insultes dans la rue qui ne porte pas plainte.',
        'Une fraude fiscale jamais contrôlée.',
      ],
    },
    'Taux de plainte': {
      developpement:
        'Le taux de plainte rapporte le nombre de victimes qui ont porté plainte au nombre total de victimes déclarées dans une enquête. Plus il est faible, plus le chiffre noir est grand. Il varie selon le type d’atteinte, la gravité, la confiance dans la police et l’intérêt à déclarer (assurance).',
      exemples: [
        '100 000 plaintes pour 400 000 victimes de vols de vélos : taux de plainte de 25 % (données fictives).',
        'Les cambriolages ont souvent un taux de plainte élevé, car l’assurance exige une plainte pour rembourser.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Contravention',
      definition: 'Infraction la moins grave, punie d’une amende (et parfois de peines complémentaires), jugée par le tribunal de police.',
      exemple: 'Un excès de vitesse de moins de 20 km/h, un stationnement interdit.',
      developpement: 'Les contraventions sont très nombreuses et souvent sanctionnées sans procès (amendes forfaitaires).',
      exemples: ['Jeter un mégot sur la voie publique.'],
      nePasConfondre: 'Contravention (la moins grave), délit (intermédiaire) et crime (le plus grave).',
    },
    {
      terme: 'Délit',
      synonymes: ['délits'],
      definition: 'Infraction de gravité intermédiaire, punie notamment d’amendes et de peines de prison jusqu’à 10 ans, jugée par le tribunal correctionnel.',
      exemple: 'Un vol, des violences légères, la conduite sans permis.',
      developpement: 'La plupart des infractions jugées par les tribunaux sont des délits.',
      exemples: ['Le harcèlement scolaire est un délit en France.'],
    },
    {
      terme: 'Crime',
      synonymes: ['crimes'],
      definition: 'Infraction la plus grave, punie de peines de réclusion (plus de 10 ans de prison), jugée par une cour d’assises ou une cour criminelle.',
      exemple: 'Un meurtre, un viol, un vol à main armée.',
      developpement: 'Dans le langage courant, « crime » désigne souvent toute infraction ; en droit, il désigne seulement la catégorie la plus grave.',
      exemples: ['Un incendie volontaire ayant causé la mort de quelqu’un.'],
    },
    {
      terme: 'Approche interactionniste',
      synonymes: ['interactionnistes', 'interactionnisme'],
      definition: 'Approche sociologique qui étudie la déviance comme le résultat d’interactions entre ceux qui agissent et ceux qui réagissent (qui désignent, étiquettent, sanctionnent).',
      exemple: 'Étudier comment un élève devient « le perturbateur de la classe » à travers les réactions des enseignants et des camarades.',
      developpement:
        'Plutôt que de chercher pourquoi certains individus deviennent déviants (leurs « causes »), l’approche interactionniste (H. Becker, E. Goffman) se demande comment certains actes et certaines personnes en viennent à être désignés comme déviants, et avec quelles conséquences.',
      exemples: ['Becker étudie comment les fumeurs de marijuana apprennent leur pratique au contact du groupe.'],
    },
    {
      terme: 'Relativité de la déviance',
      synonymes: ['relative'],
      definition: 'Idée selon laquelle un même comportement peut être déviant ou non selon la société, l’époque ou le groupe social.',
      exemple: 'Embrasser quelqu’un pour lui dire bonjour est normal en France, déviant dans d’autres pays.',
      developpement: 'La relativité montre que la déviance n’est pas une propriété de l’acte : elle dépend des normes du groupe qui juge.',
      exemples: ['Le tatouage, longtemps associé à des groupes marginaux, est aujourd’hui courant.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Norme sociale ou norme juridique ?',
        texte:
          'Laisser sa place assise à une femme enceinte dans le bus : **norme sociale** (sanction possible : regards réprobateurs). Valider son ticket : **norme juridique** (sanction : amende du contrôleur). Ne pas mettre ses pieds sur le siège : norme sociale qui figure aussi dans le règlement du transporteur. Une même règle peut être à la fois sociale et juridique.',
      },
      {
        titre: 'Quatre formes de contrôle social',
        texte:
          'Un policier qui verbalise : contrôle **formel**, **sanction** négative. Un diplôme de bon comportement au collège : contrôle formel, sanction positive. Des amis qui se moquent : contrôle **informel**, sanction négative. Un parent qui félicite : contrôle informel, sanction positive.',
      },
      {
        titre: 'La déviance change avec le temps',
        texte:
          'Fumer dans un restaurant était courant en France jusqu’en 2008 ; c’est aujourd’hui interdit et largement réprouvé. À l’inverse, l’homosexualité, pénalisée jusqu’en 1982, n’est plus une infraction. Ces évolutions montrent la **relativité de la déviance** et le rôle des **entrepreneurs de morale**.',
      },
    ],
    [
      {
        titre: 'Une carrière déviante, étape par étape',
        texte:
          'Théo, 15 ans, vole une fois dans un magasin avec des amis (transgression). Il est pris et l’affaire se sait au collège : il devient « le voleur » (**étiquetage**). Certains parents interdisent à leurs enfants de le fréquenter (**stigmatisation**). Il se rapproche d’autres jeunes déjà en conflit avec l’école et recommence. À chaque étape, il pouvait sortir de cette **carrière déviante** (exemple fictif).',
      },
      {
        titre: 'Merton : quand les moyens manquent',
        texte:
          'La société valorise la réussite matérielle. Un jeune sans diplôme, dans un quartier où il y a peu d’emplois, n’a pas accès aux moyens légitimes d’y parvenir. Certains se résignent, d’autres se révoltent, d’autres encore choisissent des moyens illégaux (trafic). Pour Merton, cette **anomie** explique une partie de la délinquance.',
      },
    ],
    [
      {
        titre: 'Calculer un taux de plainte',
        texte:
          'Une **enquête de victimation** estime 600 000 victimes de violences physiques sur un an ; 180 000 ont porté plainte. Le **taux de plainte** est de 180 000 / 600 000 × 100 = 30 %. Les 70 % restants n’apparaissent pas dans les **statistiques administratives** : ils font partie du **chiffre noir** (données fictives).',
      },
      {
        titre: 'Une hausse des chiffres qui n’est pas une hausse des faits',
        texte:
          'Après le lancement de la plainte en ligne et des campagnes encourageant les victimes de violences conjugales à parler, les plaintes augmentent de 20 %. Cela ne prouve pas que ces violences ont augmenté : le **chiffre noir** a diminué, car plus de victimes déclarent les faits (données fictives).',
      },
    ],
  ],
};
