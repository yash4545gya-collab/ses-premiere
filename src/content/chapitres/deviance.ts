import type { Chapitre } from '../types';

export const deviance: Chapitre = {
  id: 'deviance',
  titre: 'Quels sont les processus sociaux qui contribuent à la déviance ?',
  titreCourt: 'Déviance',
  domaine: 'Sociologie et science politique',
  objectifs: [
    'Distinguer normes sociales et normes juridiques ; connaître la diversité des formes de contrôle social.',
    'Comprendre que la déviance est une transgression des normes, variable selon les sociétés et les groupes sociaux.',
    'Comprendre que la déviance peut résulter de processus sociaux (étiquetage, stigmatisation, carrières déviantes).',
    'Distinguer et illustrer déviance et délinquance.',
    'Comprendre et illustrer les difficultés de mesure de la délinquance.',
  ],

  essentiel: {
    problematique:
      'Pourquoi certains comportements sont-ils considérés comme déviants ici et pas ailleurs, aujourd’hui et pas hier ? La déviance tient-elle aux individus qui transgressent, ou aux processus sociaux qui désignent et sanctionnent ?',
    parties: [
      {
        titre: 'Normes et contrôle social',
        blocs: [
          {
            type: 'texte',
            texte:
              'Les **normes** sont des règles de conduite qui encadrent les comportements. Les **normes sociales** sont des règles implicites ou explicites, issues des usages et des mœurs, dont le non-respect entraîne une désapprobation (regards, moqueries, mise à l’écart). Les **normes juridiques** sont des règles de droit, écrites, édictées par une autorité légitime (Parlement, gouvernement) et dont le non-respect est sanctionné par les institutions (police, justice).',
          },
          {
            type: 'tableau',
            entetes: ['', 'Norme sociale', 'Norme juridique'],
            lignes: [
              ['Origine', 'Usages, mœurs, traditions d’un groupe', 'Autorité publique légitime (loi, règlement)'],
              ['Forme', 'Souvent implicite, non écrite', 'Écrite, publique'],
              ['Sanction', 'Informelle : réprobation, rejet, moquerie', 'Formelle : amende, prison, retrait de permis'],
              ['Exemple', 'Laisser sa place à une personne âgée', 'S’arrêter au feu rouge'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Le **contrôle social** est l’ensemble des moyens par lesquels une société ou un groupe fait respecter ses normes. Il est **formel** lorsqu’il est exercé par des institutions spécialisées selon des procédures (police, justice, administration, règlement intérieur d’un lycée) et **informel** lorsqu’il est exercé spontanément par l’entourage (famille, voisins, pairs, regards dans la rue). Il passe par des **sanctions** **négatives** (punitions) ou **positives** (récompenses, félicitations). Avec le numérique, de nouvelles formes de contrôle apparaissent (vidéosurveillance, commentaires et dénonciations en ligne).',
          },
          {
            type: 'texte',
            texte:
              'La **déviance** est la transgression d’une norme, sociale ou juridique, qui expose à une sanction. Elle est **relative** : ce qui est déviant varie selon les **sociétés** (le port du voile ou la consommation d’alcool sont jugés différemment selon les pays), selon les **époques** (l’homosexualité a été pénalisée en France jusqu’en 1982) et, au sein d’une même société, selon les **groupes sociaux** (une tenue normale dans un groupe d’amis peut être déviante dans une entreprise).',
          },
          {
            type: 'texte',
            texte:
              'La **délinquance** est la partie de la déviance qui transgresse une **norme juridique pénale** : c’est l’ensemble des **infractions** (contraventions, délits, crimes) commises dans une société. Toute délinquance est une déviance, mais toute déviance n’est pas une délinquance : arriver en pyjama en cours est déviant mais pas délinquant. Inversement, une infraction très répandue (petit excès de vitesse) peut être peu désapprouvée socialement.',
          },
        ],
      },
      {
        titre: 'La déviance, produit de processus sociaux',
        blocs: [
          {
            type: 'texte',
            texte:
              'Pour É. Durkheim, le crime est un phénomène **normal** (présent dans toutes les sociétés) et même utile : la sanction réaffirme la norme et renforce la cohésion du groupe. R. K. Merton explique la déviance par l’**anomie** : un décalage entre les buts valorisés par la société (la réussite matérielle) et les moyens légitimes d’y parvenir, inégalement accessibles. Ces approches cherchent les **causes** de la déviance.',
          },
          {
            type: 'texte',
            texte:
              'Les sociologues **interactionnistes** déplacent la question : comment un acte ou une personne en vient-il à être **désigné** comme déviant ? Pour H. Becker, « le déviant est celui à qui l’on a réussi à appliquer cette étiquette » : la déviance n’est pas une propriété de l’acte, mais le résultat d’une **interaction** entre celui qui agit et ceux qui réagissent. Les **entrepreneurs de morale** (militants, associations, journalistes, responsables politiques) contribuent à créer de nouvelles normes et à les faire appliquer.',
          },
          {
            type: 'texte',
            texte:
              'L’**étiquetage** consiste à désigner publiquement un individu comme déviant. Il peut entraîner une **stigmatisation** : selon E. Goffman, le **stigmate** est un attribut qui jette un discrédit profond sur la personne (un passé judiciaire, un handicap, une maladie) et réduit son identité à ce trait. L’individu étiqueté est traité différemment (refus d’embauche, méfiance), ce qui peut le pousser à adopter l’identité qu’on lui prête : la prophétie se réalise.',
          },
          {
            type: 'texte',
            texte:
              'Becker décrit la **carrière déviante** comme une succession d’étapes, chacune rendant la suivante plus probable, sans que le parcours soit écrit d’avance :',
          },
          { type: 'schema', id: 'carriere-deviante' },
          {
            type: 'mecanisme',
            titre: 'Étiquetage et stigmatisation',
            etapes: [
              'Un individu commet un acte transgressif (parfois occasionnel)',
              'Il est repéré et étiqueté comme déviant par une institution ou son entourage',
              'Il est stigmatisé : exclusion des groupes « conformes », perte d’opportunités',
              'Il se rapproche d’un groupe déviant et intériorise cette identité',
            ],
          },
          {
            type: 'encadre',
            titre: 'Un exemple célèbre',
            texte:
              'Dans Outsiders (1963), H. Becker étudie des musiciens de jazz consommateurs de marijuana : on apprend à fumer, à percevoir les effets et à les trouver agréables au contact du groupe. La déviance s’apprend, comme les comportements conformes.',
          },
        ],
      },
      {
        titre: 'Mesurer la délinquance : une tâche difficile',
        blocs: [
          {
            type: 'texte',
            texte:
              'Mesurer la délinquance est difficile, car toutes les infractions ne sont pas connues. On dispose de deux grandes sources, complémentaires :',
          },
          {
            type: 'tableau',
            entetes: ['Source', 'Ce qu’elle mesure', 'Limites'],
            lignes: [
              [
                'Statistiques administratives (police, gendarmerie, justice)',
                'Les infractions enregistrées : plaintes déposées et faits constatés par les services',
                'Ne comptent pas les infractions non déclarées ; dépendent de l’activité des services (contrôles, priorités) et des règles d’enregistrement',
              ],
              [
                'Enquêtes de victimation (interrogent un échantillon de personnes sur les atteintes subies)',
                'Les atteintes subies, déclarées ou non ; le taux de plainte',
                'Reposent sur la mémoire et la déclaration des victimes ; ignorent les infractions sans victime directe (trafics, fraude fiscale)',
              ],
            ],
          },
          {
            type: 'texte',
            texte:
              'En France, l’enquête « Cadre de vie et sécurité » (INSEE, 2007-2021) a été remplacée par l’enquête « Vécu et ressenti en matière de sécurité » du service statistique du ministère de l’Intérieur. Ces enquêtes montrent que de nombreuses victimes ne portent pas plainte (atteintes jugées peu graves, honte, peur des représailles, défiance envers la police) : c’est le **chiffre noir** de la délinquance.',
          },
          { type: 'schema', id: 'chiffre-noir' },
          {
            type: 'mecanisme',
            titre: 'Pourquoi une hausse des chiffres n’est pas toujours une hausse de la délinquance',
            etapes: [
              'Les pouvoirs publics multiplient les contrôles (stupéfiants, routiers) ou facilitent les plaintes (plainte en ligne)',
              'Davantage d’infractions sont enregistrées',
              'La délinquance enregistrée augmente',
              'Sans que la délinquance réelle ait forcément augmenté',
            ],
          },
          {
            type: 'texte',
            texte:
              'De même, la sensibilité de la société à certains faits peut changer : les violences intrafamiliales ou sexuelles sont davantage dénoncées depuis quelques années, ce qui fait augmenter les plaintes. Il faut donc toujours interroger la **construction** des statistiques avant de conclure.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Norme sociale',
      definition: 'Règle de conduite, explicite ou implicite, issue des usages et des mœurs d’un groupe, dont la transgression entraîne une sanction informelle.',
      exemple: 'Saluer ses voisins, ne pas parler fort au cinéma.',
    },
    {
      terme: 'Norme juridique',
      definition: 'Règle de droit écrite, édictée par une autorité publique légitime, dont la transgression est sanctionnée par les institutions (police, justice).',
      exemple: 'L’interdiction de conduire sans permis.',
    },
    {
      terme: 'Contrôle social',
      definition: 'Ensemble des moyens (formels et informels) par lesquels une société ou un groupe obtient de ses membres qu’ils respectent les normes.',
      exemple: 'Les regards réprobateurs dans le bus, les contrôles de police.',
    },
    {
      terme: 'Contrôle social formel',
      definition: 'Contrôle exercé par des institutions spécialisées, selon des règles et des procédures établies.',
      exemple: 'La police, la justice, le conseil de discipline d’un lycée.',
    },
    {
      terme: 'Contrôle social informel',
      definition: 'Contrôle exercé spontanément par l’entourage (famille, pairs, voisins), sans procédure établie.',
      exemple: 'Des amis qui se moquent d’une tenue jugée ridicule.',
    },
    {
      terme: 'Sanction',
      definition: 'Réaction du groupe au respect (sanction positive) ou à la transgression (sanction négative) d’une norme.',
      exemple: 'Des félicitations du conseil de classe ; une amende pour stationnement interdit.',
    },
    {
      terme: 'Déviance',
      definition: 'Transgression d’une norme sociale ou juridique, reconnue comme telle et exposant à une sanction ; elle est relative aux sociétés, aux époques et aux groupes.',
      exemple: 'Tricher à un examen, ne pas respecter un code vestimentaire.',
    },
    {
      terme: 'Délinquance',
      definition: 'Ensemble des comportements qui transgressent une norme juridique pénale (infractions : contraventions, délits, crimes) ; c’est une partie de la déviance.',
      exemple: 'Le vol, les violences, le trafic de stupéfiants.',
    },
    {
      terme: 'Infraction',
      definition: 'Acte interdit par la loi pénale et puni d’une peine ; selon sa gravité, c’est une contravention, un délit ou un crime.',
      exemple: 'Un excès de vitesse est une contravention, un vol un délit, un meurtre un crime.',
    },
    {
      terme: 'Anomie',
      definition: 'Affaiblissement ou absence de normes capables de réguler les comportements (Durkheim) ; chez Merton, décalage entre les buts valorisés par la société et les moyens légitimes de les atteindre.',
      exemple: 'Un individu qui veut réussir matériellement mais n’a pas accès aux études ou à l’emploi peut se tourner vers des moyens illégaux.',
    },
    {
      terme: 'Étiquetage',
      definition: 'Processus par lequel un individu est publiquement désigné comme déviant par d’autres (institutions, entourage), ce qui modifie la façon dont il est perçu et traité.',
      exemple: 'Un élève qualifié de « perturbateur » par l’équipe éducative.',
    },
    {
      terme: 'Stigmatisation',
      definition: 'Processus par lequel un attribut (stigmate) jette le discrédit sur un individu et réduit son identité à ce trait, entraînant rejet et exclusion.',
      exemple: 'Un ancien détenu qui ne trouve pas d’emploi à cause de son casier judiciaire.',
    },
    {
      terme: 'Stigmate',
      definition: 'Selon E. Goffman, attribut qui jette un profond discrédit sur celui qui le porte aux yeux des autres.',
      exemple: 'Un passé psychiatrique, un handicap visible, une condamnation.',
    },
    {
      terme: 'Carrière déviante',
      definition: 'Selon H. Becker, succession d’étapes par lesquelles un individu s’engage progressivement dans la déviance, jusqu’à adopter une identité déviante et rejoindre un groupe déviant organisé.',
      exemple: 'Un jeune qui passe de l’usage occasionnel au trafic après avoir été exclu de son lycée.',
    },
    {
      terme: 'Entrepreneur de morale',
      definition: 'Selon H. Becker, individu ou groupe qui se mobilise pour créer de nouvelles normes (créateur de normes) ou pour les faire appliquer (faire respecter).',
      exemple: 'Des associations qui obtiennent l’interdiction de fumer dans les lieux publics.',
    },
    {
      terme: 'Statistiques administratives de la délinquance',
      definition: 'Données produites par la police, la gendarmerie et la justice, qui recensent les infractions enregistrées (plaintes et faits constatés).',
      exemple: 'Le nombre de cambriolages enregistrés en une année.',
    },
    {
      terme: 'Enquête de victimation',
      definition: 'Enquête qui interroge un échantillon de la population sur les atteintes qu’elle a subies, qu’elles aient été déclarées ou non aux autorités.',
      exemple: 'L’enquête « Vécu et ressenti en matière de sécurité ».',
    },
    {
      terme: 'Chiffre noir de la délinquance',
      definition: 'Ensemble des infractions commises qui ne sont pas connues des autorités et n’apparaissent donc pas dans les statistiques administratives.',
      exemple: 'Un vol de téléphone non déclaré par la victime.',
    },
    {
      terme: 'Taux de plainte',
      definition: 'Part des victimes d’une atteinte qui déclarent avoir porté plainte ; il est mesuré par les enquêtes de victimation.',
      exemple: 'Un taux de plainte faible signifie qu’une grande partie de ces atteintes échappe aux statistiques policières.',
    },
  ],

  auteurs: [
    {
      nom: 'Émile Durkheim',
      dates: '1858-1917',
      idee: 'Le crime est « normal » : il existe dans toutes les sociétés et sa sanction renforce la conscience collective.',
      oeuvre: 'Les Règles de la méthode sociologique (1895)',
    },
    {
      nom: 'Robert K. Merton',
      dates: '1910-2003',
      idee: 'La déviance naît de l’anomie : décalage entre les buts culturellement valorisés et l’accès inégal aux moyens légitimes.',
      oeuvre: '« Social Structure and Anomie » (1938)',
    },
    {
      nom: 'Howard Becker',
      dates: '1928-2023',
      idee: 'La déviance est le produit d’une interaction : étiquetage, entrepreneurs de morale, carrière déviante.',
      oeuvre: 'Outsiders (1963)',
    },
    {
      nom: 'Erving Goffman',
      dates: '1922-1982',
      idee: 'Le stigmate disqualifie l’individu ; il analyse les stratégies des stigmatisés pour gérer leur identité.',
      oeuvre: 'Stigmate (1963)',
    },
  ],

  schemas: [
    {
      id: 'carriere-deviante',
      titre: 'La carrière déviante selon H. Becker',
      legende: 'Chaque étape rend la suivante plus probable, mais aucune n’est inévitable : un individu peut sortir de la carrière à chaque étape. L’étiquetage public est le tournant décisif.',
    },
    {
      id: 'chiffre-noir',
      titre: 'De la délinquance réelle à la délinquance enregistrée',
      legende: 'Les infractions effectivement commises ne sont pas toutes connues des victimes, pas toutes déclarées, pas toutes enregistrées. L’écart entre délinquance réelle et délinquance enregistrée est le chiffre noir. Les enquêtes de victimation permettent d’en estimer une partie.',
    },
  ],

  pieges: [
    {
      erreur: '« Déviance et délinquance, c’est la même chose. »',
      correction: 'La délinquance est la **partie** de la déviance qui viole une **norme juridique pénale**. Toute délinquance est déviante, pas l’inverse.',
    },
    {
      erreur: '« La déviance, c’est ce qui est mal. »',
      correction: 'La sociologie ne juge pas : la déviance est **relative** (sociétés, époques, groupes) et résulte d’une **désignation**.',
    },
    {
      erreur: 'Confondre contrôle formel et sanction formelle.',
      correction: 'Le contrôle **formel** est exercé par des **institutions** spécialisées (police, justice, école) ; le contrôle **informel** par l’entourage. Les deux peuvent sanctionner positivement ou négativement.',
    },
    {
      erreur: '« Les statistiques de police mesurent toute la délinquance. »',
      correction: 'Elles mesurent la délinquance **enregistrée**, qui dépend des plaintes et de l’activité des services. Il existe un **chiffre noir**.',
    },
    {
      erreur: 'Conclure d’une hausse des faits enregistrés à une hausse de la délinquance.',
      correction: 'Elle peut traduire une hausse des **plaintes** ou des **contrôles**. Il faut croiser avec les enquêtes de victimation.',
    },
    {
      erreur: 'Présenter la carrière déviante comme un destin.',
      correction: 'Chaque étape rend la suivante **plus probable**, mais on peut en sortir à tout moment.',
    },
  ],

  synthese: {
    idees: [
      'Normes sociales (usages, sanctions informelles) ≠ normes juridiques (droit écrit, sanctions formelles).',
      'Contrôle social formel (institutions) et informel (entourage) ; sanctions positives ou négatives.',
      'La déviance est la transgression d’une norme ; elle est relative aux sociétés, aux époques et aux groupes.',
      'La délinquance est la partie de la déviance qui enfreint la loi pénale.',
      'Approches causales (Durkheim : crime normal ; Merton : anomie) et approche interactionniste (Becker : étiquetage).',
      'Étiquetage et stigmatisation (Goffman) peuvent enfermer dans une carrière déviante (Becker).',
      'Mesure : statistiques administratives (délinquance enregistrée) et enquêtes de victimation ; chiffre noir.',
      'Les chiffres dépendent des plaintes et de l’activité des services : prudence dans l’interprétation.',
    ],
    mecanismes: [
      ['Acte transgressif', 'étiquetage', 'stigmatisation', 'identité déviante', 'groupe déviant'],
      ['Plus de contrôles ou de plaintes', 'plus d’infractions enregistrées', 'hausse des statistiques sans hausse réelle'],
    ],
  },

  quiz: [
    {
      question: 'S’arrêter au feu rouge relève :',
      choix: ['D’une norme sociale seulement', 'D’une norme juridique', 'D’une valeur', 'D’un stigmate'],
      bonne: 1,
      explication: 'C’est une règle de droit écrite (Code de la route) dont la transgression est sanctionnée par une amende.',
    },
    {
      question: 'Les moqueries d’un groupe d’amis envers l’un d’eux relèvent :',
      choix: ['Du contrôle social formel', 'Du contrôle social informel', 'D’une norme juridique', 'D’une enquête de victimation'],
      bonne: 1,
      explication: 'Il est exercé spontanément par l’entourage, sans procédure.',
    },
    {
      question: 'Une sanction positive est :',
      choix: ['Une amende', 'Des félicitations', 'Une exclusion', 'Un avertissement'],
      bonne: 1,
      explication: 'Elle récompense le respect des normes.',
    },
    {
      question: 'La déviance est relative, cela signifie que :',
      choix: [
        'Elle n’existe pas vraiment',
        'Ce qui est déviant varie selon les sociétés, les époques et les groupes',
        'Elle concerne peu de personnes',
        'Elle est toujours sanctionnée par la loi',
      ],
      bonne: 1,
      explication: 'Exemple : l’homosexualité, pénalisée en France jusqu’en 1982, ne l’est plus.',
    },
    {
      question: 'Lequel de ces comportements est déviant mais pas délinquant ?',
      choix: ['Voler un vélo', 'Arriver en pyjama en cours', 'Conduire sans permis', 'Frauder le fisc'],
      bonne: 1,
      explication: 'Il transgresse une norme sociale, pas une loi pénale.',
    },
    {
      question: 'Pour Durkheim, le crime est :',
      choix: ['Pathologique', 'Normal, car présent dans toutes les sociétés', 'Toujours lié à la pauvreté', 'Héréditaire'],
      bonne: 1,
      explication: 'Sa sanction réaffirme les normes et renforce la cohésion du groupe.',
    },
    {
      question: 'Chez Merton, l’anomie désigne :',
      choix: [
        'Un excès de normes',
        'Un décalage entre buts valorisés et moyens légitimes accessibles',
        'Une absence de sanctions',
        'Une forme de solidarité',
      ],
      bonne: 1,
      explication: 'Ceux qui n’ont pas accès aux moyens légitimes de réussite peuvent recourir à des moyens illégitimes.',
    },
    {
      question: '« Le déviant est celui à qui l’on a réussi à appliquer cette étiquette » : cette phrase est de :',
      choix: ['É. Durkheim', 'H. Becker', 'K. Marx', 'A. Smith'],
      bonne: 1,
      explication: 'Outsiders (1963) : la déviance résulte d’une interaction et d’une désignation.',
    },
    {
      question: 'Un entrepreneur de morale est :',
      choix: [
        'Un chef d’entreprise honnête',
        'Un acteur qui se mobilise pour créer ou faire appliquer des normes',
        'Un juge',
        'Un délinquant repenti',
      ],
      bonne: 1,
      explication: 'Associations, militants, journalistes ou élus peuvent jouer ce rôle.',
    },
    {
      question: 'Selon E. Goffman, le stigmate est :',
      choix: [
        'Un attribut qui jette un discrédit profond sur la personne',
        'Une sanction juridique',
        'Une valeur partagée',
        'Une statistique de police',
      ],
      bonne: 0,
      explication: 'L’identité de la personne est réduite à ce trait.',
    },
    {
      question: 'Dans la carrière déviante de Becker, l’étape décisive est souvent :',
      choix: [
        'Le premier acte transgressif',
        'L’étiquetage public de l’individu comme déviant',
        'La naissance',
        'L’obtention d’un diplôme',
      ],
      bonne: 1,
      explication: 'Être publiquement désigné modifie la manière dont l’individu est traité et se perçoit.',
    },
    {
      question: 'Les statistiques de la police et de la gendarmerie mesurent :',
      choix: ['Toute la délinquance', 'La délinquance enregistrée', 'Le sentiment d’insécurité', 'Le chiffre noir'],
      bonne: 1,
      explication: 'Elles ne comptent que les faits portés à la connaissance des services.',
    },
    {
      question: 'Une enquête de victimation permet :',
      choix: [
        'De connaître le nombre de condamnations',
        'D’estimer les atteintes subies, y compris non déclarées',
        'De mesurer les infractions sans victime comme le trafic',
        'De remplacer la justice',
      ],
      bonne: 1,
      explication: 'Elle interroge directement un échantillon de personnes et mesure aussi le taux de plainte.',
    },
    {
      question: 'Le chiffre noir de la délinquance correspond :',
      choix: [
        'Aux crimes les plus graves',
        'Aux infractions commises mais inconnues des autorités',
        'Aux infractions commises la nuit',
        'Aux amendes non payées',
      ],
      bonne: 1,
      explication: 'Il résulte notamment des victimes qui ne portent pas plainte.',
    },
    {
      question: 'La plainte en ligne est mise en place et le nombre de plaintes augmente. On peut en conclure :',
      choix: [
        'Que la délinquance a forcément augmenté',
        'Que la délinquance enregistrée a augmenté, sans certitude sur la délinquance réelle',
        'Que le chiffre noir a augmenté',
        'Que les enquêtes de victimation sont fausses',
      ],
      bonne: 1,
      explication: 'Faciliter la plainte réduit le chiffre noir : la hausse peut venir d’une meilleure déclaration.',
    },
  ],
};
