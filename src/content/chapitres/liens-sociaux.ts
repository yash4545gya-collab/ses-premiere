import type { Chapitre } from '../types';

export const liensSociaux: Chapitre = {
  id: 'liens-sociaux',
  titre: 'Comment se construisent et évoluent les liens sociaux ?',
  titreCourt: 'Liens sociaux',
  domaine: 'Sociologie et science politique',
  objectifs: [
    'Comprendre et illustrer la diversité des liens au sein des groupes sociaux (familles, pairs, univers professionnel, associations, réseaux).',
    'Connaître les critères de construction des PCS.',
    'Comprendre et illustrer le processus d’individualisation et l’évolution des formes de solidarité (solidarité mécanique / organique).',
    'Comprendre comment les nouvelles sociabilités numériques contribuent au lien social.',
    'Comprendre comment précarités, isolements, ségrégations et ruptures familiales exposent à l’affaiblissement ou à la rupture des liens sociaux.',
  ],

  essentiel: {
    problematique:
      'Dans des sociétés où chacun revendique son autonomie, qu’est-ce qui relie encore les individus entre eux ? Comment les liens sociaux se transforment-ils, et pourquoi certains individus s’en trouvent-ils privés ?',
    parties: [
      {
        titre: 'La diversité des liens au sein des groupes sociaux',
        blocs: [
          {
            type: 'texte',
            texte:
              'Le **lien social** désigne l’ensemble des relations qui unissent les individus entre eux et à la société, et qui leur assurent à la fois **protection** (pouvoir compter sur les autres) et **reconnaissance** (exister à leurs yeux), selon S. Paugam. Ces liens se nouent au sein de **groupes sociaux** : ensembles d’individus qui ont des relations entre eux, partagent des caractéristiques ou des objectifs et ont conscience d’appartenir au groupe.',
          },
          {
            type: 'tableau',
            titre: 'Les quatre types de liens sociaux selon S. Paugam',
            entetes: ['Type de lien', 'Où se noue-t-il ?', 'Protection / reconnaissance'],
            lignes: [
              ['Lien de filiation', 'Entre parents et enfants, dans la famille', 'Solidarité familiale / affection'],
              ['Lien de participation élective', 'Couple, amis, groupes de pairs, associations, réseaux', 'Entraide choisie / reconnaissance affective'],
              ['Lien de participation organique', 'Monde du travail, école', 'Emploi stable, droits sociaux / utilité reconnue'],
              ['Lien de citoyenneté', 'Appartenance à une nation', 'Droits civils, politiques et sociaux / égalité des citoyens'],
            ],
          },
          {
            type: 'texte',
            texte:
              'On distingue les **groupes primaires** (petits, relations directes et affectives : famille, amis proches) et les **groupes secondaires** (plus larges, relations plus formelles et organisées autour d’un objectif : entreprise, association, syndicat). Les **réseaux sociaux**, au sens sociologique, sont l’ensemble des relations d’un individu, qui peuvent être analysées comme une structure.',
          },
          {
            type: 'texte',
            texte:
              'M. Granovetter distingue les **liens forts** (relations fréquentes, intimes, chargées d’émotion : famille, amis proches) et les **liens faibles** (connaissances, anciens collègues). Paradoxalement, les liens faibles sont très utiles pour trouver un emploi : ils relient l’individu à des milieux différents du sien et lui apportent des informations nouvelles, alors que ses proches savent souvent la même chose que lui. C’est « la force des liens faibles ».',
          },
          { type: 'schema', id: 'liens-forts-faibles' },
          {
            type: 'texte',
            texte:
              'Pour décrire la structure sociale, l’INSEE classe la population selon la nomenclature des **professions et catégories socioprofessionnelles (PCS)**, rénovée en 2020. Elle regroupe des individus qui ont une situation professionnelle proche et, par hypothèse, des comportements et des modes de vie voisins. Ses **critères** de construction sont :',
          },
          {
            type: 'liste',
            items: [
              'le **statut** : indépendant (à son compte) ou salarié ;',
              'le **métier** (la profession exercée) ;',
              'la **qualification** (souvent liée au diplôme) ;',
              'la **position hiérarchique** (encadrement ou exécution) ;',
              'le **secteur d’activité** et, pour les indépendants, la **taille de l’entreprise** (nombre de salariés).',
            ],
          },
          {
            type: 'tableau',
            titre: 'Les six groupes socioprofessionnels des actifs (PCS 2020, INSEE)',
            entetes: ['Groupe', 'Exemples'],
            lignes: [
              ['1. Agriculteurs exploitants', 'Viticulteur, éleveur'],
              ['2. Artisans, commerçants et chefs d’entreprise', 'Boulanger, gérant de magasin, chef d’entreprise de 10 salariés ou plus'],
              ['3. Cadres et professions intellectuelles supérieures', 'Ingénieur, médecin libéral, professeur de lycée, avocat'],
              ['4. Professions intermédiaires', 'Infirmier, professeur des écoles, technicien, agent de maîtrise'],
              ['5. Employés', 'Secrétaire, caissier, aide-soignant, agent de sécurité'],
              ['6. Ouvriers', 'Ouvrier qualifié du bâtiment, conducteur de poids lourds, ouvrier agricole'],
            ],
            source: 'INSEE, nomenclature PCS 2020 (les retraités et les autres inactifs sont classés à part)',
          },
        ],
      },
      {
        titre: 'Individualisation et évolution des formes de solidarité',
        blocs: [
          {
            type: 'texte',
            texte:
              'É. Durkheim (1893) distingue deux formes de **solidarité**, c’est-à-dire de ce qui assure la cohésion d’une société. Dans les sociétés traditionnelles, peu différenciées, domine la **solidarité mécanique** : les individus se ressemblent (mêmes activités, mêmes croyances) et sont liés par cette similitude ; la **conscience collective** est forte et le droit est surtout répressif. Dans les sociétés modernes, la **division du travail** rend les individus différents mais **interdépendants** : c’est la **solidarité organique**, qui fonctionne comme les organes d’un corps. Le droit y devient surtout restitutif (réparer le préjudice).',
          },
          {
            type: 'tableau',
            entetes: ['', 'Solidarité mécanique', 'Solidarité organique'],
            lignes: [
              ['Type de société', 'Traditionnelle, rurale, peu différenciée', 'Moderne, urbaine, différenciée'],
              ['Fondement du lien', 'Similitude des individus', 'Complémentarité, interdépendance'],
              ['Conscience collective', 'Forte, englobante', 'Plus faible, laisse place à l’individu'],
              ['Droit dominant', 'Répressif (punir)', 'Restitutif (réparer)'],
            ],
          },
          {
            type: 'mecanisme',
            titre: 'De la solidarité mécanique à la solidarité organique',
            etapes: [
              'Croissance de la population et de sa densité',
              'Division du travail et spécialisation des tâches',
              'Les individus deviennent différents mais dépendent les uns des autres',
              'La cohésion repose sur la complémentarité : solidarité organique',
            ],
          },
          {
            type: 'texte',
            texte:
              'Ce passage s’accompagne d’un **processus d’individualisation** : l’individu s’émancipe des appartenances héritées (famille, village, religion, classe) et revendique le droit de choisir ses liens, ses valeurs et son mode de vie. Les liens deviennent plus **électifs** (on choisit ses amis, son conjoint, ses engagements) et plus **réversibles** (divorce, changement d’emploi). L’individualisation n’est pas l’individualisme (repli égoïste) : elle se traduit par de nouvelles formes d’engagement et de solidarité.',
          },
          {
            type: 'texte',
            texte:
              'Les **sociabilités numériques** (réseaux sociaux, messageries, jeux en ligne, forums) **contribuent au lien social** : elles entretiennent les liens existants malgré la distance (familles dispersées, amis partis étudier ailleurs), multiplient les liens faibles et permettent de rejoindre des communautés d’intérêt. Elles ne remplacent pas les relations en face à face, qu’elles prolongent le plus souvent. Elles comportent aussi des risques (cyberharcèlement, enfermement dans un entre-soi, inégalités d’usage).',
          },
        ],
      },
      {
        titre: 'Les facteurs d’affaiblissement ou de rupture des liens sociaux',
        blocs: [
          {
            type: 'texte',
            texte:
              'Certains individus voient leurs liens sociaux s’affaiblir, voire se rompre. Le programme retient quatre facteurs, qui se cumulent souvent :',
          },
          {
            type: 'liste',
            items: [
              '**Précarités** : l’emploi précaire ou le chômage affaiblissent le lien de participation organique (moins de collègues, moins de reconnaissance, revenus faibles qui limitent les sorties).',
              '**Isolements** : le grand âge, la maladie, le handicap ou la vie en zone rurale isolée réduisent la fréquence des contacts.',
              '**Ségrégations** : la concentration spatiale de populations défavorisées dans certains quartiers limite les liens avec d’autres milieux et l’accès aux ressources (emploi, services).',
              '**Ruptures familiales** : divorce, conflits, deuil, ou rupture avec la famille fragilisent le lien de filiation et le soutien qu’il procure.',
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Le cumul des fragilités (disqualification sociale)',
            etapes: [
              'Perte d’emploi',
              'Baisse des revenus et perte des liens professionnels',
              'Tensions familiales, renoncement aux sorties : isolement',
              'Perte de protection et de reconnaissance : risque de rupture des liens',
            ],
          },
          {
            type: 'texte',
            texte:
              'S. Paugam parle de **disqualification sociale** pour décrire ce processus d’affaiblissement progressif des liens, R. Castel de **désaffiliation** pour la situation des individus qui cumulent la perte du travail et l’isolement relationnel. Les politiques publiques (insertion, logement, lutte contre l’isolement des personnes âgées, mixité sociale) et les associations cherchent à recréer ces liens.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Lien social',
      definition: 'Ensemble des relations qui unissent les individus entre eux et à la société, et qui leur assurent protection et reconnaissance.',
      exemple: 'Les relations avec la famille, les collègues, les amis, les voisins.',
    },
    {
      terme: 'Groupe social',
      definition: 'Ensemble d’individus qui entretiennent des relations, partagent des caractéristiques, des normes ou des objectifs, et ont conscience d’appartenir à ce groupe.',
      exemple: 'Une équipe de football amateur, une classe de lycée.',
    },
    {
      terme: 'Groupe primaire',
      definition: 'Groupe restreint dans lequel les relations sont directes, personnelles et affectives.',
      exemple: 'La famille, un groupe d’amis proches.',
    },
    {
      terme: 'Groupe secondaire',
      definition: 'Groupe plus large, dans lequel les relations sont plus impersonnelles et organisées autour d’objectifs ou de règles formelles.',
      exemple: 'Une entreprise, un syndicat, une association nationale.',
    },
    {
      terme: 'Sociabilité',
      definition: 'Ensemble des relations qu’un individu entretient avec les autres, et formes que prennent ces relations.',
      exemple: 'Recevoir des amis à dîner, discuter avec ses voisins, échanger en ligne.',
    },
    {
      terme: 'Réseau social',
      definition: 'En sociologie, ensemble des relations d’un individu ou d’un groupe, considéré comme une structure de liens ; par extension, plateforme numérique qui permet d’entretenir ces liens.',
      exemple: 'Le réseau d’un étudiant comprend sa famille, ses amis, ses enseignants, ses anciens camarades.',
    },
    {
      terme: 'Liens forts',
      definition: 'Relations fréquentes, intimes et chargées d’émotion, qui relient souvent des personnes semblables.',
      exemple: 'Les relations avec les parents ou le meilleur ami.',
    },
    {
      terme: 'Liens faibles',
      definition: 'Relations peu fréquentes et peu intimes (connaissances) qui relient l’individu à des milieux différents et lui apportent des informations nouvelles.',
      exemple: 'Un ancien camarade de lycée qui signale une offre d’emploi.',
    },
    {
      terme: 'PCS (professions et catégories socioprofessionnelles)',
      definition: 'Nomenclature de l’INSEE qui classe la population selon sa situation professionnelle (statut, métier, qualification, position hiérarchique, secteur, taille de l’entreprise) en groupes supposés homogènes.',
      exemple: 'Un infirmier salarié appartient au groupe des professions intermédiaires.',
    },
    {
      terme: 'Solidarité mécanique',
      definition: 'Selon É. Durkheim, forme de cohésion des sociétés traditionnelles fondée sur la similitude des individus, qui partagent les mêmes activités et une conscience collective forte.',
      exemple: 'Une communauté villageoise où tous vivent de l’agriculture et partagent les mêmes croyances.',
    },
    {
      terme: 'Solidarité organique',
      definition: 'Selon É. Durkheim, forme de cohésion des sociétés modernes fondée sur la complémentarité d’individus différents, rendus interdépendants par la division du travail.',
      exemple: 'Le boulanger dépend du médecin, de l’enseignant, du transporteur, qui dépendent de lui.',
    },
    {
      terme: 'Conscience collective',
      definition: 'Ensemble des croyances et des sentiments communs à la moyenne des membres d’une société.',
      exemple: 'Dans les sociétés traditionnelles, la religion partagée forme une conscience collective forte.',
    },
    {
      terme: 'Division du travail',
      definition: 'Répartition des tâches et spécialisation des individus dans des activités différentes et complémentaires.',
      exemple: 'Dans un hôpital : médecins, infirmiers, aides-soignants, agents d’entretien, administratifs.',
    },
    {
      terme: 'Individualisation',
      definition: 'Processus par lequel l’individu s’émancipe des appartenances héritées et des contraintes collectives pour choisir davantage ses liens, ses valeurs et son mode de vie.',
      exemple: 'Le choix du conjoint, autrefois souvent arrangé par les familles, est aujourd’hui un choix personnel.',
    },
    {
      terme: 'Sociabilité numérique',
      definition: 'Ensemble des relations entretenues par l’intermédiaire des outils numériques (réseaux sociaux, messageries, jeux en ligne, forums).',
      exemple: 'Un groupe de messagerie familial qui relie des membres dispersés dans plusieurs pays.',
    },
    {
      terme: 'Précarité',
      definition: 'Situation d’instabilité (emploi, revenu, logement) qui empêche de se projeter dans l’avenir et fragilise l’intégration sociale.',
      exemple: 'Enchaîner des contrats courts avec des périodes de chômage.',
    },
    {
      terme: 'Isolement social',
      definition: 'Situation d’un individu qui a très peu de relations avec les autres (famille, amis, voisins, collègues, associations).',
      exemple: 'Une personne âgée qui vit seule et ne reçoit presque aucune visite.',
    },
    {
      terme: 'Ségrégation',
      definition: 'Séparation, en particulier spatiale, de groupes sociaux qui vivent dans des espaces distincts et se côtoient peu.',
      exemple: 'Des quartiers où se concentrent les ménages pauvres, éloignés des emplois et des services.',
    },
    {
      terme: 'Rupture familiale',
      definition: 'Affaiblissement ou cessation des relations au sein de la famille (séparation, conflit, deuil), qui prive l’individu d’une source de protection.',
      exemple: 'Un jeune adulte en rupture avec ses parents qui ne peut compter sur aucune aide.',
    },
    {
      terme: 'Disqualification sociale',
      definition: 'Selon S. Paugam, processus d’affaiblissement ou de rupture des liens sociaux, en particulier pour les personnes en situation de précarité qui dépendent de l’assistance.',
      exemple: 'Un chômeur de longue durée qui s’éloigne progressivement de ses anciens collègues et de ses amis.',
    },
  ],

  auteurs: [
    {
      nom: 'Émile Durkheim',
      dates: '1858-1917',
      idee: 'Avec la division du travail, les sociétés passent d’une solidarité mécanique (similitude) à une solidarité organique (complémentarité).',
      oeuvre: 'De la division du travail social (1893)',
    },
    {
      nom: 'Mark Granovetter',
      dates: 'né en 1943',
      idee: 'La « force des liens faibles » : les simples connaissances apportent des informations nouvelles, utiles notamment pour trouver un emploi.',
      oeuvre: '« The Strength of Weak Ties » (1973)',
    },
    {
      nom: 'Serge Paugam',
      dates: 'né en 1960',
      idee: 'Distingue quatre types de liens (filiation, participation élective, participation organique, citoyenneté) ; analyse la disqualification sociale.',
      oeuvre: 'Le Lien social (2008)',
    },
    {
      nom: 'Robert Castel',
      dates: '1933-2013',
      idee: 'La désaffiliation : perte cumulée de l’intégration par le travail et de l’insertion relationnelle.',
      oeuvre: 'Les Métamorphoses de la question sociale (1995)',
    },
    {
      nom: 'François de Singly',
      dates: 'né en 1948',
      idee: 'L’individualisation ne détruit pas les liens : les individus restent liés, mais en revendiquant une autonomie (« libres ensemble »).',
      oeuvre: 'Libres ensemble (2000)',
    },
  ],

  schemas: [
    {
      id: 'liens-forts-faibles',
      titre: 'Liens forts et liens faibles',
      legende: 'Traits épais : liens forts (famille, amis proches), qui se connaissent souvent entre eux et partagent les mêmes informations. Pointillés : liens faibles (connaissances), qui servent de « ponts » vers d’autres réseaux, par exemple vers une offre d’emploi.',
    },
  ],

  pieges: [
    {
      erreur: 'Confondre réseau social (sociologie) et réseau social numérique.',
      correction: 'Le réseau social, en sociologie, est l’**ensemble des relations** d’un individu ; les plateformes numériques ne sont qu’un outil pour les entretenir.',
    },
    {
      erreur: 'Inverser solidarité mécanique et organique.',
      correction: '**Mécanique** = similitude (sociétés traditionnelles). **Organique** = complémentarité, comme les organes d’un corps (sociétés modernes).',
    },
    {
      erreur: '« L’individualisation, c’est l’égoïsme. »',
      correction: 'L’individualisation est l’**autonomie** de l’individu dans ses choix ; elle ne supprime pas les liens, elle les rend plus électifs.',
    },
    {
      erreur: '« Les réseaux numériques isolent les individus. »',
      correction: 'Le plus souvent, ils **prolongent** les relations existantes et multiplient les liens faibles ; il faut nuancer (risques, inégalités d’usage).',
    },
    {
      erreur: 'Citer le revenu comme critère des PCS.',
      correction: 'Les critères sont le **statut**, le **métier**, la **qualification**, la **position hiérarchique**, le **secteur** et la **taille de l’entreprise**, pas le revenu.',
    },
    {
      erreur: 'Penser que les liens faibles sont inutiles.',
      correction: 'Ils sont précieux pour l’**accès à l’information** et à l’emploi, car ils relient à d’autres milieux (Granovetter).',
    },
  ],

  synthese: {
    idees: [
      'Le lien social assure protection et reconnaissance ; quatre types de liens (Paugam) : filiation, participation élective, participation organique, citoyenneté.',
      'Les liens se nouent dans des groupes primaires et secondaires et forment des réseaux ; liens forts et liens faibles (Granovetter).',
      'Les PCS (INSEE) classent les actifs selon le statut, le métier, la qualification, la position hiérarchique, le secteur et la taille de l’entreprise.',
      'Durkheim : passage de la solidarité mécanique (similitude) à la solidarité organique (complémentarité) grâce à la division du travail.',
      'L’individualisation rend les liens plus électifs et réversibles, sans les faire disparaître.',
      'Les sociabilités numériques entretiennent et prolongent les liens, et multiplient les liens faibles.',
      'Précarités, isolements, ségrégations et ruptures familiales affaiblissent les liens ; ils se cumulent (disqualification, désaffiliation).',
    ],
    mecanismes: [
      ['Division du travail', 'spécialisation', 'interdépendance', 'solidarité organique'],
      ['Perte d’emploi', 'perte de revenus et de collègues', 'isolement', 'rupture des liens'],
    ],
  },

  quiz: [
    {
      question: 'Selon S. Paugam, le lien social apporte aux individus :',
      choix: ['Un revenu et un diplôme', 'Protection et reconnaissance', 'Un statut juridique', 'Une identité nationale uniquement'],
      bonne: 1,
      explication: 'On peut compter sur les autres (protection) et on existe à leurs yeux (reconnaissance).',
    },
    {
      question: 'Le lien de participation organique se noue principalement :',
      choix: ['Dans la famille', 'Entre amis', 'Dans le monde du travail', 'Dans la nation'],
      bonne: 2,
      explication: 'Il repose sur l’emploi et la reconnaissance de l’utilité de chacun dans la division du travail.',
    },
    {
      question: 'Une famille est un exemple de :',
      choix: ['Groupe primaire', 'Groupe secondaire', 'Catégorie statistique', 'Réseau numérique'],
      bonne: 0,
      explication: 'Les relations y sont directes, personnelles et affectives.',
    },
    {
      question: 'Selon M. Granovetter, les liens faibles sont utiles parce que :',
      choix: [
        'Ils sont plus affectifs',
        'Ils relient à des milieux différents et apportent des informations nouvelles',
        'Ils sont plus nombreux dans la famille',
        'Ils remplacent les liens forts',
      ],
      bonne: 1,
      explication: 'Les proches partagent souvent les mêmes informations ; les simples connaissances ouvrent sur d’autres réseaux.',
    },
    {
      question: 'Lequel n’est pas un critère de construction des PCS ?',
      choix: ['Le statut (indépendant ou salarié)', 'La qualification', 'Le revenu', 'La position hiérarchique'],
      bonne: 2,
      explication: 'Le revenu n’est pas un critère, même si les groupes ont des revenus moyens différents.',
    },
    {
      question: 'Un infirmier salarié appartient au groupe :',
      choix: ['Cadres et professions intellectuelles supérieures', 'Professions intermédiaires', 'Employés', 'Ouvriers'],
      bonne: 1,
      explication: 'Les professions de la santé et du travail social de niveau intermédiaire relèvent du groupe 4.',
    },
    {
      question: 'Pour Durkheim, la solidarité mécanique repose sur :',
      choix: ['La complémentarité des individus', 'La similitude des individus', 'Le marché', 'L’État-providence'],
      bonne: 1,
      explication: 'Dans les sociétés traditionnelles, les individus se ressemblent et partagent une forte conscience collective.',
    },
    {
      question: 'Le passage à la solidarité organique s’explique d’abord par :',
      choix: ['La division du travail', 'Internet', 'La baisse de la population', 'La religion'],
      bonne: 0,
      explication: 'La spécialisation rend les individus différents mais interdépendants.',
    },
    {
      question: 'Dans les sociétés à solidarité organique, le droit dominant est :',
      choix: ['Répressif', 'Restitutif', 'Religieux', 'Inexistant'],
      bonne: 1,
      explication: 'Il vise à réparer le préjudice et à rétablir les relations entre individus interdépendants.',
    },
    {
      question: 'L’individualisation désigne :',
      choix: [
        'Le repli égoïste sur soi',
        'L’émancipation de l’individu vis-à-vis des appartenances héritées',
        'La disparition de tout lien social',
        'L’isolement des personnes âgées',
      ],
      bonne: 1,
      explication: 'Les liens deviennent plus choisis ; ce n’est pas de l’individualisme.',
    },
    {
      question: 'Les sociabilités numériques :',
      choix: [
        'Remplacent totalement les relations en face à face',
        'Prolongent souvent les relations existantes et multiplient les liens faibles',
        'N’ont aucun effet sur le lien social',
        'Ne concernent que les adolescents',
      ],
      bonne: 1,
      explication: 'Elles entretiennent les liens à distance et ouvrent sur des communautés d’intérêt, avec des risques à nuancer.',
    },
    {
      question: 'Quel facteur fragilise d’abord le lien de participation organique ?',
      choix: ['Un divorce', 'Le chômage', 'Un déménagement', 'Le vieillissement'],
      bonne: 1,
      explication: 'Perdre son emploi, c’est perdre des collègues, un revenu et une reconnaissance sociale.',
    },
    {
      question: 'La ségrégation spatiale fragilise les liens sociaux car :',
      choix: [
        'Elle mélange les milieux sociaux',
        'Elle limite les contacts avec d’autres milieux et l’accès aux ressources',
        'Elle augmente les revenus',
        'Elle supprime les liens familiaux',
      ],
      bonne: 1,
      explication: 'Les habitants de quartiers ségrégués ont moins de liens faibles vers l’emploi et les services.',
    },
    {
      question: 'Le processus d’affaiblissement progressif des liens analysé par S. Paugam s’appelle :',
      choix: ['La disqualification sociale', 'La solidarité organique', 'La socialisation secondaire', 'La mobilité sociale'],
      bonne: 0,
      explication: 'R. Castel parle, lui, de désaffiliation.',
    },
    {
      question: 'Les fragilités qui affaiblissent les liens sociaux :',
      choix: ['Sont toujours isolées', 'Se cumulent souvent', 'Ne touchent que les personnes âgées', 'Sont sans lien avec l’emploi'],
      bonne: 1,
      explication: 'Le chômage peut entraîner des tensions familiales, un repli et un isolement : les fragilités s’enchaînent.',
    },
  ],
};
