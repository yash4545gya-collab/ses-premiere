import type { DeveloppementChapitre } from '../../types';

/** Chapitre VII — développement. */
export const devLiensSociaux: DeveloppementChapitre = {
  id: 'liens-sociaux',
  definitions: {
    'Lien social': {
      developpement:
        'Le lien social, ce sont tous les fils qui nous rattachent aux autres : famille, amis, collègues, voisins, membres d’une association, concitoyens. Selon Serge Paugam, ces liens nous apportent deux choses : de la protection (on peut compter sur quelqu’un en cas de coup dur) et de la reconnaissance (on existe et on compte aux yeux des autres). Quand ils s’affaiblissent, on est plus vulnérable.',
      exemples: [
        'Des voisins qui gardent les clés les uns des autres et arrosent les plantes pendant les vacances.',
        'Des collègues qui organisent une cagnotte pour le départ à la retraite d’un collègue.',
      ],
    },
    'Groupe social': {
      synonymes: ['groupes sociaux'],
      developpement:
        'Un simple ensemble de personnes (les passagers d’un bus) n’est pas un groupe social. Pour former un groupe, il faut des relations entre les membres, quelque chose en commun (des normes, un objectif, une activité) et le sentiment d’en faire partie (« nous »). Les groupes sont le cadre dans lequel se tissent les liens sociaux.',
      exemples: [
        'Une chorale qui répète chaque semaine et prépare un concert.',
        'Les habitants d’un immeuble qui ont créé une association de locataires.',
      ],
    },
    'Groupe primaire': {
      developpement:
        'Le groupe primaire est petit : tout le monde se connaît personnellement et les relations sont chargées d’émotion. On y est aimé ou rejeté pour ce qu’on est, pas pour ce qu’on fait. La famille et les amis proches en sont les meilleurs exemples. C’est souvent dans ces groupes que se fait la socialisation primaire.',
      exemples: [
        'Une bande de trois amis inséparables depuis le collège.',
        'Une famille réunie chaque dimanche chez les grands-parents.',
      ],
      nePasConfondre: 'Groupe primaire (petit, relations personnelles et affectives) et groupe secondaire (grand, relations plus formelles et organisées).',
    },
    'Groupe secondaire': {
      developpement:
        'Le groupe secondaire est plus grand, organisé autour d’un objectif, avec des règles et souvent une hiérarchie. Les relations y sont plus impersonnelles : on y entre pour ce qu’on fait (son travail, sa cotisation), pas pour ce qu’on est. On peut y nouer des liens affectifs, mais ce n’est pas sa raison d’être.',
      exemples: [
        'Une entreprise de 500 salariés.',
        'Un parti politique ou un syndicat.',
      ],
    },
    Sociabilité: {
      developpement:
        'La sociabilité désigne l’ensemble des relations qu’on entretient et la manière de les vivre : fréquence des rencontres, type d’activités partagées, lieux. Elle varie selon l’âge, le milieu social, le lieu de vie : les jeunes sortent davantage entre amis, les plus âgés reçoivent davantage la famille, les plus diplômés ont souvent des réseaux plus étendus.',
      exemples: [
        'Inviter des amis à dîner, jouer en ligne avec des coéquipiers, discuter avec ses voisins.',
        'Les apéritifs entre voisins organisés dans certains quartiers.',
      ],
    },
    'Réseau social': {
      synonymes: ['réseaux sociaux', 'réseaux'],
      developpement:
        'En sociologie, le réseau social est l’ensemble des personnes avec qui on est en relation, vu comme une toile : qui connaît qui, avec quels liens. On peut l’étudier même sans Internet. Les plateformes numériques ne sont qu’un outil pour entretenir ce réseau ; on les appelle aussi « réseaux sociaux », d’où une confusion fréquente.',
      exemples: [
        'Le réseau d’un étudiant : sa famille, ses amis, ses professeurs, son club de sport, ses anciens camarades.',
        'Le carnet d’adresses d’une commerçante, qui lui sert à trouver fournisseurs et clients.',
      ],
      nePasConfondre: 'Réseau social au sens sociologique (ensemble des relations) et réseau social numérique (plateforme en ligne).',
    },
    'Liens forts': {
      developpement:
        'Les liens forts nous unissent aux proches : on se voit souvent, on se confie, on peut compter les uns sur les autres. Ils apportent soutien et protection. Mais nos proches se connaissent souvent entre eux et savent à peu près les mêmes choses que nous : ils nous apportent peu d’informations nouvelles.',
      exemples: [
        'Le lien avec une sœur à qui l’on parle chaque jour.',
        'Le lien avec un meilleur ami qui vient aider à déménager.',
      ],
    },
    'Liens faibles': {
      developpement:
        'Les liens faibles relient à des connaissances : ancien camarade, ami d’ami, collègue d’un autre service. On se voit rarement, mais ils jouent le rôle de « ponts » vers d’autres milieux. Mark Granovetter a montré que beaucoup de personnes trouvent un emploi grâce à eux, car ils apportent des informations qu’on n’a pas déjà.',
      exemples: [
        'Une ancienne voisine qui signale un stage dans son entreprise.',
        'Un membre d’un club de randonnée qui recommande un bon artisan.',
      ],
      nePasConfondre: 'Liens forts (proches, soutien, informations souvent redondantes) et liens faibles (connaissances, ponts vers des informations nouvelles).',
    },
    'PCS (professions et catégories socioprofessionnelles)': {
      synonymes: ['PCS', 'professions et catégories socioprofessionnelles (PCS)', 'professions et catégories socioprofessionnelles'],
      developpement:
        'L’INSEE classe les personnes selon leur situation professionnelle pour décrire la structure de la société. On regroupe des métiers qui se ressemblent par le statut, la qualification, la position hiérarchique et le secteur. L’idée est que les personnes d’un même groupe ont des conditions de vie et des comportements proches. La nomenclature a été rénovée en 2020.',
      exemples: [
        'Un professeur des écoles est classé en professions intermédiaires ; un professeur de lycée en cadres et professions intellectuelles supérieures.',
        'Une caissière salariée est classée parmi les employés ; un plombier à son compte parmi les artisans.',
      ],
    },
    'Solidarité mécanique': {
      developpement:
        'Dans les sociétés traditionnelles décrites par Durkheim, les gens font les mêmes travaux, partagent les mêmes croyances et vivent de la même façon. Ce qui les unit, c’est leur ressemblance : la solidarité est « mécanique », comme les pièces identiques d’une machine. L’individu compte peu face au groupe, et celui qui s’écarte des règles est durement puni.',
      exemples: [
        'Un village agricole d’autrefois où toutes les familles cultivent la terre et vont à la même église.',
        'Une petite communauté religieuse isolée, où chacun suit les mêmes règles de vie.',
      ],
      nePasConfondre: 'Solidarité mécanique (on se ressemble) et solidarité organique (on est différents mais complémentaires).',
    },
    'Solidarité organique': {
      developpement:
        'Dans les sociétés modernes, chacun exerce un métier spécialisé : personne ne produit tout ce dont il a besoin. Nous sommes différents, mais nous dépendons les uns des autres, comme les organes d’un corps qui ont chacun leur fonction. C’est cette complémentarité qui fait tenir la société. Elle laisse plus de place à l’individu et à ses choix.',
      exemples: [
        'Un informaticien dépend de l’agriculteur pour se nourrir, et l’agriculteur de l’informaticien pour faire fonctionner son tracteur connecté.',
        'Pendant une grève des transports, toute la ville voit à quel point elle dépend des conducteurs.',
      ],
    },
    'Conscience collective': {
      developpement:
        'La conscience collective est l’ensemble des croyances et des sentiments partagés par les membres d’une société, qui s’imposent à chacun. Elle est très forte dans les sociétés à solidarité mécanique ; elle s’affaiblit et devient plus abstraite (droits de l’homme, égalité) dans les sociétés modernes, laissant plus de place aux convictions personnelles.',
      exemples: [
        'L’émotion partagée par tout un pays après un attentat ou une catastrophe.',
        'Les fêtes nationales, qui rassemblent autour de valeurs communes.',
      ],
    },
    'Division du travail': {
      developpement:
        'La division du travail consiste à répartir les tâches pour que chacun se spécialise. Elle rend la production plus efficace, mais elle rend aussi chacun dépendant des autres. Pour Durkheim, c’est elle qui transforme la solidarité mécanique en solidarité organique.',
      exemples: [
        'Dans une chaîne de restauration rapide, l’un prend les commandes, l’autre cuit, un troisième prépare les boissons.',
        'Dans un hôpital : chirurgiens, infirmiers, brancardiers, agents d’entretien, secrétaires.',
      ],
    },
    Individualisation: {
      synonymes: ['processus d’individualisation'],
      developpement:
        'Autrefois, on héritait largement de sa place : son métier, son conjoint, sa religion, son lieu de vie dépendaient de sa famille et de sa communauté. Avec l’individualisation, chacun revendique le droit de choisir : ses amis, son conjoint, ses opinions, son mode de vie. Les liens deviennent plus « électifs » (choisis) et plus « réversibles » (on peut les défaire). Cela ne signifie pas que chacun vit seul.',
      exemples: [
        'Le mariage arrangé par les familles est devenu, en France, un choix personnel.',
        'Choisir sa religion, ou ne pas en avoir, alors que ses parents sont croyants.',
      ],
      nePasConfondre: 'Individualisation (autonomie de l’individu dans ses choix) et individualisme (repli égoïste sur soi).',
    },
    'Sociabilité numérique': {
      synonymes: ['sociabilités numériques'],
      developpement:
        'Messageries, réseaux sociaux, jeux en ligne et forums permettent d’entretenir des relations à distance et d’en créer de nouvelles. Les études montrent qu’ils prolongent surtout les relations existantes (on écrit aux amis qu’on voit aussi en vrai) et multiplient les liens faibles. Ils comportent aussi des risques : cyberharcèlement, comparaison permanente, enfermement dans des groupes qui se ressemblent.',
      exemples: [
        'Un groupe de discussion qui permet à une famille dispersée dans trois pays de partager des photos chaque jour.',
        'Une communauté en ligne de passionnés de jardinage qui finit par organiser des rencontres.',
      ],
    },
    Précarité: {
      synonymes: ['précarités'],
      developpement:
        'La précarité est une situation instable : contrats courts, revenus irréguliers, logement incertain. Elle empêche de faire des projets et fragilise les liens : moins de collègues stables, moins d’argent pour sortir, plus de stress dans la famille. Elle touche surtout le lien de participation organique (au monde du travail).',
      exemples: [
        'Une jeune qui enchaîne des missions d’intérim et ne connaît jamais ses collègues.',
        'Une famille qui déménage souvent faute de pouvoir payer son loyer.',
      ],
    },
    'Isolement social': {
      synonymes: ['isolement', 'isolements'],
      developpement:
        'L’isolement social, c’est avoir très peu de relations : peu ou pas de contacts avec la famille, les amis, les voisins, les collègues ou les associations. Il touche particulièrement les personnes âgées, les malades, les personnes sans emploi et certains habitants de zones rurales éloignées. Il prive de protection et de reconnaissance.',
      exemples: [
        'Une personne âgée qui vit seule et ne reçoit de visite que de son infirmière.',
        'Un étudiant arrivé seul dans une ville où il ne connaît personne.',
      ],
    },
    Ségrégation: {
      synonymes: ['ségrégations', 'ségrégation spatiale'],
      developpement:
        'La ségrégation spatiale, c’est quand des groupes sociaux vivent dans des quartiers séparés et se côtoient peu. Les habitants de quartiers défavorisés ont alors moins de liens faibles vers l’emploi, des écoles moins mixtes et moins de services. La ségrégation touche aussi les quartiers très aisés, qui vivent en « entre-soi ».',
      exemples: [
        'Un quartier d’habitat social éloigné du centre-ville et mal desservi par les transports.',
        'Des quartiers résidentiels fermés réservés aux ménages très aisés.',
      ],
    },
    'Rupture familiale': {
      synonymes: ['ruptures familiales'],
      developpement:
        'La famille est souvent le premier filet de sécurité : hébergement, aide financière, soutien moral. Une rupture (séparation, conflit grave, deuil, placement) fragilise ce lien de filiation. Les personnes en rupture familiale sont plus exposées à l’isolement et à la pauvreté, surtout si d’autres fragilités s’y ajoutent.',
      exemples: [
        'Un jeune adulte qui a coupé les ponts avec sa famille et ne peut pas compter sur elle pour se loger.',
        'Une personne qui perd son conjoint et se retrouve seule.',
      ],
    },
    'Disqualification sociale': {
      developpement:
        'Pour Serge Paugam, la disqualification sociale est un processus : on perd progressivement ses liens et la reconnaissance des autres. Elle passe souvent par des étapes : perte d’emploi, aides sociales vécues comme humiliantes, repli sur soi, rupture des liens. L’individu se sent « disqualifié », sans place reconnue dans la société.',
      exemples: [
        'Un ancien ouvrier au chômage depuis plusieurs années qui n’ose plus voir ses anciens collègues.',
        'Une personne qui évite ses voisins parce qu’elle a honte de vivre des minima sociaux.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Lien de filiation',
      definition: 'Lien entre parents et enfants (et plus largement entre membres d’une même famille), qui apporte protection rapprochée et reconnaissance affective.',
      exemple: 'Des parents qui hébergent leur enfant étudiant ou l’aident à payer son loyer.',
      developpement: 'C’est le premier des quatre liens décrits par S. Paugam. Il est obligatoire au départ : on ne choisit pas sa famille.',
      exemples: ['Des grands-parents qui gardent leurs petits-enfants pendant les vacances.'],
    },
    {
      terme: 'Lien de participation élective',
      definition: 'Lien choisi, qui se noue entre amis, conjoints, membres d’une association ou d’un groupe de pairs.',
      exemple: 'Une amitié née dans un club de théâtre.',
      developpement: 'Ce lien apporte une protection (l’entraide entre amis) et une reconnaissance affective. Il est électif : on choisit ses amis, et on peut s’en éloigner.',
      exemples: ['Des bénévoles d’une association qui deviennent amis.'],
    },
    {
      terme: 'Lien de participation organique',
      definition: 'Lien qui se noue dans le monde du travail (et de l’école), fondé sur la contribution de chacun à la division du travail.',
      exemple: 'Un salarié en emploi stable, intégré dans une équipe et reconnu pour son travail.',
      developpement: 'Il apporte une protection (salaire, droits sociaux liés à l’emploi) et une reconnaissance (se sentir utile). Le chômage et la précarité le fragilisent.',
      exemples: ['Une infirmière dont le travail est reconnu par ses collègues et ses patients.'],
    },
    {
      terme: 'Lien de citoyenneté',
      definition: 'Lien qui rattache l’individu à une communauté politique (une nation) et lui donne des droits et des devoirs égaux à ceux des autres citoyens.',
      exemple: 'Le droit de vote, l’accès à l’école publique, la protection de la justice.',
      developpement: 'Il apporte une protection juridique (droits civils, politiques et sociaux) et la reconnaissance d’être un citoyen égal aux autres.',
      exemples: ['Une personne sans papiers est privée de ce lien et des droits qui l’accompagnent.'],
    },
    {
      terme: 'Désaffiliation',
      definition: 'Selon R. Castel, situation de personnes qui ont perdu à la fois l’intégration par le travail et l’insertion dans des relations familiales et sociales.',
      exemple: 'Une personne sans domicile, sans emploi et sans contact avec sa famille.',
      developpement: 'La désaffiliation est l’aboutissement d’un cumul de ruptures. Castel insiste sur le lien entre la fragilisation du travail (chômage, précarité) et celle des relations.',
      exemples: ['Un chômeur de longue durée qui perd son logement après une séparation.'],
    },
    {
      terme: 'Solidarité',
      synonymes: ['solidarités', 'formes de solidarité'],
      definition: 'Ensemble des liens qui rendent les membres d’une société dépendants les uns des autres et qui assurent sa cohésion.',
      exemple: 'L’entraide entre voisins, mais aussi les cotisations sociales qui financent les retraites.',
      developpement: 'Durkheim distingue la solidarité mécanique (par ressemblance) et la solidarité organique (par complémentarité). Aujourd’hui, l’État organise aussi une solidarité collective (protection sociale, chapitre XI).',
      exemples: ['Une collecte de nourriture organisée par une association de quartier.'],
    },
    {
      terme: 'Qualification',
      definition: 'Ensemble des compétences reconnues qu’exige un emploi (qualification du poste) ou que possède un travailleur, souvent attestées par un diplôme ou l’expérience.',
      exemple: 'Un ouvrier qualifié maîtrise un savoir-faire reconnu ; un ouvrier non qualifié effectue des tâches simples.',
      developpement: 'La qualification est l’un des critères de construction des PCS : elle permet de distinguer, par exemple, ouvriers qualifiés et non qualifiés.',
      exemples: ['Un électricien titulaire d’un CAP occupe un poste d’ouvrier qualifié.'],
    },
    {
      terme: 'Statut (indépendant ou salarié)',
      synonymes: ['statut'],
      definition: 'Situation juridique d’une personne qui travaille : salariée (liée à un employeur par un contrat de travail) ou indépendante (à son compte).',
      exemple: 'Une boulangère qui possède sa boutique est indépendante ; le vendeur qu’elle emploie est salarié.',
      developpement: 'C’est le premier critère de construction des PCS : agriculteurs exploitants et artisans-commerçants sont indépendants, les autres groupes surtout salariés.',
      exemples: ['Un médecin libéral est indépendant ; un médecin hospitalier est salarié.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Les quatre liens de Paugam dans une vie',
        texte:
          'Malik vit avec ses parents (**lien de filiation**), joue au basket avec ses amis du quartier (**lien de participation élective**), fait un apprentissage dans un garage où il est apprécié (**lien de participation organique**) et votera pour la première fois l’an prochain (**lien de citoyenneté**). Chacun de ces liens lui apporte de la protection et de la reconnaissance.',
      },
      {
        titre: 'La force des liens faibles',
        texte:
          'Camille cherche un stage. Ses meilleures amies (**liens forts**) sont en terminale comme elle et ne connaissent pas d’entreprise. C’est une ancienne voisine, croisée deux fois par an (**lien faible**), qui lui signale une offre dans son entreprise. Les liens faibles font le pont vers d’autres milieux et apportent des informations nouvelles.',
      },
      {
        titre: 'Classer des actifs dans les PCS',
        texte:
          'Une agricultrice qui exploite sa ferme : agriculteurs exploitants. Un boulanger à son compte : artisans, commerçants et chefs d’entreprise. Une avocate : cadres et professions intellectuelles supérieures. Un infirmier salarié : professions intermédiaires. Un caissier : employés. Un maçon salarié : ouvriers. Les critères utilisés sont le **statut**, le métier, la **qualification** et la position hiérarchique.',
      },
    ],
    [
      {
        titre: 'Solidarité mécanique et organique : deux villages',
        texte:
          'Dans un village de 1850, presque toutes les familles cultivent la terre, vont à la même messe et suivent les mêmes coutumes : c’est la **solidarité mécanique**. Dans une ville d’aujourd’hui, chacun exerce un métier spécialisé (développeur, livreur, médecin, boulanger) et dépend des autres pour vivre : c’est la **solidarité organique**, née de la **division du travail**.',
      },
      {
        titre: 'L’individualisation au quotidien',
        texte:
          'La grand-mère de Léa s’est mariée avec un garçon du village choisi avec l’accord de sa famille. Léa, elle, a rencontré son compagnon sur une application et n’a demandé l’avis de personne : les liens sont devenus plus **électifs**. Elle garde pourtant des liens forts avec sa famille : l’**individualisation** ne fait pas disparaître les liens, elle les transforme.',
      },
    ],
    [
      {
        titre: 'Le cumul des fragilités',
        texte:
          'Karim perd son emploi après la fermeture de son usine (**précarité**). Ses revenus baissent, il ne voit plus ses collègues et renonce aux sorties. Les tensions dans son couple mènent à une séparation (**rupture familiale**). Il déménage dans un quartier où il ne connaît personne (**isolement**). Ces fragilités s’enchaînent : c’est la **disqualification sociale** décrite par S. Paugam (exemple fictif).',
      },
      {
        titre: 'Comment recréer des liens',
        texte:
          'Des politiques publiques et des associations agissent : visites de bénévoles aux personnes âgées isolées, accompagnement des chômeurs vers l’emploi, logements mélangeant des ménages de revenus différents pour lutter contre la **ségrégation**, lieux de rencontre dans les quartiers.',
      },
    ],
  ],
};
