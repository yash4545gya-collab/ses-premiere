import type { DeveloppementChapitre } from '../../types';

/** Chapitre X — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devVote: DeveloppementChapitre = {
  id: 'vote',
  definitions: {
    'Inscription sur les listes électorales': {
      synonymes: ['inscrit sur les listes électorales', 'inscription'],
      developpement:
        'Pour voter, il ne suffit pas d’être citoyen majeur : il faut être inscrit sur la liste électorale d’une commune. Depuis 1997, les jeunes recensés à 16 ans sont inscrits automatiquement à 18 ans. Mais quand on déménage, il faut faire la démarche soi-même ; beaucoup l’oublient, ce qui crée des non-inscrits et des mal-inscrits.',
      exemples: [
        'Une étudiante qui s’inscrit en ligne sur les listes de sa ville d’études.',
        'Un jeune de 18 ans qui découvre qu’il est déjà inscrit grâce à son recensement.',
      ],
    },
    'Taux d’inscription': {
      developpement:
        'Le taux d’inscription mesure la part des personnes qui pourraient voter (citoyens majeurs) et qui sont effectivement inscrites. Un taux de 91 % signifie que 9 personnes sur 100 qui ont le droit de voter ne pourront pas le faire faute d’inscription.',
      exemples: [
        '1 000 inscrits pour 1 100 personnes en âge et en droit de voter : taux d’inscription d’environ 90,9 %.',
        'Les jeunes et les personnes qui déménagent souvent ont un taux d’inscription plus faible.',
      ],
    },
    'Mal-inscription': {
      synonymes: ['mal inscrits', 'mal-inscrits'],
      developpement:
        'On est mal inscrit quand on est encore inscrit dans une commune où l’on ne vit plus : pour voter, il faut retourner dans cette commune ou faire une procuration. Cela décourage beaucoup d’électeurs, surtout les jeunes adultes et les personnes mobiles. La mal-inscription explique une partie de l’abstention, notamment dans les quartiers populaires.',
      exemples: [
        'Un jeune salarié inscrit chez ses parents, à 500 km de son domicile.',
        'Une famille qui a déménagé dans la même ville mais n’a pas changé de bureau de vote.',
      ],
    },
    'Taux de participation': {
      developpement:
        'Le taux de participation indique la part des inscrits qui ont voté. On le calcule toujours par rapport aux inscrits, pas à toute la population. Il varie beaucoup selon le type d’élection : il est en général plus élevé à l’élection présidentielle qu’aux élections européennes.',
      exemples: [
        '720 votants pour 1 000 inscrits : taux de participation de 72 %.',
        'Une participation de 50 % à une élection municipale signifie qu’un inscrit sur deux a voté.',
      ],
    },
    Abstention: {
      developpement:
        'S’abstenir, c’est ne pas aller voter alors qu’on est inscrit. Le taux d’abstention est la part des inscrits qui n’ont pas voté (100 − taux de participation). L’abstention n’est pas toujours un désintérêt : elle peut être un choix de protestation, ou résulter d’un empêchement (mal-inscription, maladie, travail).',
      exemples: [
        '280 abstentionnistes pour 1 000 inscrits : taux d’abstention de 28 %.',
        'Un électeur qui ne vote pas pour montrer qu’aucun candidat ne lui convient.',
      ],
      nePasConfondre: 'Abstention (ne pas voter) et vote blanc (voter sans choisir de candidat).',
    },
    'Abstention intermittente': {
      synonymes: ['intermittence du vote', 'vote intermittent'],
      developpement:
        'La plupart des abstentionnistes ne s’abstiennent pas tout le temps : ils votent à certaines élections et pas à d’autres, selon l’enjeu qu’ils perçoivent. C’est l’abstention intermittente, aujourd’hui la forme la plus fréquente. Les abstentionnistes « systématiques », qui ne votent jamais, sont beaucoup moins nombreux.',
      exemples: [
        'Voter à l’élection présidentielle mais pas aux élections européennes.',
        'Ne voter qu’au second tour, quand le duel paraît décisif.',
      ],
    },
    'Suffrages exprimés': {
      developpement:
        'Tous les bulletins mis dans l’urne ne comptent pas pour désigner le gagnant : les votes blancs et nuls sont mis à part. Les suffrages exprimés sont les bulletins valables pour un candidat ou une liste. C’est à partir d’eux qu’on calcule les pourcentages obtenus par chaque candidat.',
      exemples: [
        '720 votants dont 30 blancs et nuls : 690 suffrages exprimés.',
        'Un candidat qui obtient 345 voix sur 690 exprimés a 50 % des suffrages exprimés.',
      ],
    },
    'Vote blanc': {
      developpement:
        'Voter blanc, c’est se déplacer pour voter mais ne choisir aucun candidat. Depuis 2014, les votes blancs sont comptés séparément des votes nuls, mais ils ne sont pas des suffrages exprimés : ils n’influencent pas le résultat. Ils expriment souvent un rejet de l’offre électorale, tout en affirmant son attachement au vote.',
      exemples: [
        'Un électeur qui glisse une enveloppe vide dans l’urne.',
        'Une hausse des votes blancs au second tour quand aucun des deux candidats ne convient à une partie de l’électorat.',
      ],
    },
    'Intégration sociale': {
      synonymes: ['degré d’intégration sociale', 'le degré d’intégration sociale'],
      developpement:
        'Plus une personne est insérée dans des groupes (travail stable, couple, famille, associations, quartier où elle vit depuis longtemps), plus elle vote. Ces groupes l’informent, la sollicitent, l’encouragent à voter, et lui donnent le sentiment d’appartenir à une communauté dont le sort la concerne. Les personnes isolées, au chômage ou très mobiles votent moins.',
      exemples: [
        'Un retraité, membre de plusieurs associations de sa commune, qui vote à toutes les élections.',
        'Un jeune en contrats courts, récemment arrivé dans une ville, qui vote rarement.',
      ],
    },
    'Sentiment de compétence politique': {
      developpement:
        'Pour voter ou donner son avis, il faut se sentir légitime : avoir le sentiment de comprendre les enjeux et d’avoir un avis qui vaut d’être exprimé. Ce sentiment est très inégal : il augmente avec le diplôme et le milieu social. Ceux qui ne l’ont pas disent souvent « la politique, ce n’est pas pour moi ».',
      exemples: [
        'Une personne qui ne regarde jamais les débats parce qu’elle pense « ne rien y comprendre ».',
        'Un étudiant en science politique qui donne facilement son avis sur toutes les réformes.',
      ],
    },
    'Cens caché': {
      developpement:
        'Le « cens » était, au XIXe siècle, un impôt minimum qu’il fallait payer pour avoir le droit de voter : seuls les plus riches votaient. Le suffrage universel l’a supprimé. Pour Daniel Gaxie, un « cens caché » subsiste : les moins diplômés, qui se sentent peu compétents, s’excluent d’eux-mêmes de la participation. Le droit est égal, mais l’usage du droit ne l’est pas.',
      exemples: [
        'La participation électorale plus faible des personnes sans diplôme que des diplômés du supérieur.',
        'Des réunions publiques où ce sont presque toujours les plus diplômés qui prennent la parole.',
      ],
    },
    'Variables lourdes du vote': {
      developpement:
        'Les variables lourdes sont des caractéristiques sociales stables (religion, classe sociale, patrimoine, lieu de vie) qui permettent de prédire assez bien le vote. En France, la pratique religieuse catholique a longtemps orienté à droite, et l’appartenance au monde ouvrier à gauche. Ces variables pèsent moins aujourd’hui, mais d’autres (diplôme, territoire) ont pris de l’importance.',
      exemples: [
        'Les catholiques pratiquants votaient très majoritairement à droite dans les années 1970.',
        'Aujourd’hui, le niveau de diplôme et le fait de vivre dans une grande métropole ou non distinguent fortement les votes.',
      ],
    },
    'Identification partisane': {
      synonymes: ['identification politique', 'déclin de l’identification politique'],
      developpement:
        'L’identification partisane est un attachement affectif et durable à un parti ou à un camp, souvent hérité de ses parents, un peu comme on soutient une équipe de football. Celui qui s’identifie à un parti vote pour lui presque à chaque élection. Moins d’électeurs se sentent aujourd’hui attachés à un parti, ce qui rend le vote plus changeant.',
      exemples: [
        'Une famille où l’on vote pour le même camp depuis trois générations.',
        'Un électeur qui se dit « de gauche » ou « de droite » depuis toujours.',
      ],
    },
    'Clivage gauche/droite': {
      developpement:
        'Le clivage gauche/droite est l’opposition qui a structuré la vie politique française depuis la Révolution : la gauche insiste plutôt sur l’égalité et l’intervention de l’État, la droite plutôt sur la liberté d’entreprendre, l’ordre et la tradition. Les électeurs se situent sur cette échelle. Il structure moins les choix aujourd’hui, d’autres clivages apparaissant (ouverture ou fermeture à l’Europe et à la mondialisation, écologie).',
      exemples: [
        'Un sondage qui demande de se placer sur une échelle de 0 (très à gauche) à 10 (très à droite).',
        'Des électeurs qui votent selon d’autres critères, comme l’écologie ou l’Europe.',
      ],
    },
    'Offre électorale (offre politique)': {
      synonymes: ['offre électorale', 'offre politique'],
      developpement:
        'L’offre électorale, c’est le « menu » proposé aux électeurs : les candidats, les partis, leurs programmes, leurs alliances. Elle change d’une élection à l’autre et influence le vote : un électeur ne peut voter que pour quelqu’un qui se présente. L’arrivée d’un nouveau parti ou l’absence d’un candidat proche de ses idées modifie les choix et la participation.',
      exemples: [
        'Un électeur écologiste qui doit choisir un autre candidat quand aucun écologiste ne se présente.',
        'L’apparition d’un nouveau parti qui attire des électeurs venus de plusieurs camps.',
      ],
    },
    'Vote sur enjeux': {
      synonymes: ['enjeux'],
      developpement:
        'Voter sur enjeux, c’est choisir un candidat en fonction de ses positions sur les sujets qui nous importent (emploi, pouvoir d’achat, sécurité, environnement, éducation), plutôt que par fidélité à un parti. Ce comportement s’est développé avec l’élévation du niveau d’instruction et le déclin de l’identification partisane.',
      exemples: [
        'Une électrice qui choisit le candidat dont le programme sur l’environnement lui paraît le plus sérieux.',
        'Un agriculteur qui vote selon les positions des candidats sur la politique agricole.',
      ],
    },
    'Électeur rationnel (électeur stratège)': {
      synonymes: ['électeur rationnel', 'électeur stratège'],
      developpement:
        'Le modèle de l’électeur rationnel le présente comme un « consommateur » de politique : il s’informe, compare les programmes et le bilan des sortants, et vote pour ce qui sert le mieux ses intérêts. Il peut voter « utile » ou sanctionner le gouvernement. Ce modèle explique bien la volatilité, mais il oublie que les préférences elles-mêmes sont socialement construites.',
      exemples: [
        'Un électeur qui vote contre le gouvernement parce que le chômage a augmenté pendant son mandat (vote sanction).',
        'Un électeur qui vote pour le candidat le mieux placé de son camp dès le premier tour.',
      ],
    },
    'Volatilité électorale': {
      developpement:
        'Un électeur volatil change de comportement d’une élection à l’autre : il passe du vote à l’abstention (intermittence), ou d’un parti ou d’un camp à un autre. La volatilité a augmenté avec le déclin de l’identification partisane et l’affaiblissement de certaines variables lourdes. Elle renforce le poids du contexte de chaque élection (enjeux, candidats).',
      exemples: [
        'Un électeur qui vote pour un candidat de gauche en 2017, s’abstient en 2019 et vote pour un candidat du centre en 2022.',
        'Un électeur qui ne vote qu’aux élections présidentielles.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Participation électorale',
      synonymes: ['participation'],
      definition: 'Fait de voter lors d’une élection ; on la mesure par le taux de participation (votants / inscrits × 100).',
      exemple: 'Une participation de 72 % signifie que 72 inscrits sur 100 ont voté.',
      developpement: 'La participation dépend de facteurs individuels (intégration sociale, intérêt pour la politique, sentiment de compétence) et du contexte (type d’élection, enjeu perçu).',
      exemples: ['La participation est en général plus forte au second tour d’une présidentielle très disputée.'],
    },
    {
      terme: 'Non-inscription',
      synonymes: ['non inscrits', 'non-inscrits'],
      definition: 'Situation des citoyens majeurs qui ne sont inscrits sur aucune liste électorale et ne peuvent donc pas voter.',
      exemple: 'Un adulte arrivé de l’étranger après sa majorité qui n’a jamais fait la démarche.',
      developpement: 'Les non-inscrits n’apparaissent pas dans le taux d’abstention officiel, qui est calculé par rapport aux inscrits : la non-participation réelle est donc plus élevée que l’abstention mesurée.',
      exemples: ['Dans l’exemple du cours, 100 personnes sur 1 100 ne sont pas inscrites.'],
    },
    {
      terme: 'Abstention systématique',
      definition: 'Comportement des électeurs inscrits qui ne votent à aucune élection.',
      exemple: 'Un inscrit qui ne s’est pas déplacé depuis dix ans.',
      developpement: 'Elle est beaucoup plus rare que l’abstention intermittente et concerne surtout des personnes peu intégrées socialement.',
      exemples: ['Une personne qui dit « voter ne sert à rien » et ne vote jamais.'],
      nePasConfondre: 'Abstention systématique (ne vote jamais) et abstention intermittente (vote à certaines élections seulement).',
    },
    {
      terme: 'Abstention « hors du jeu »',
      synonymes: ['hors du jeu'],
      definition: 'Abstention de citoyens peu intéressés par la politique et peu intégrés socialement, qui se tiennent à l’écart de la vie politique.',
      exemple: 'Une personne qui ne s’informe jamais de l’actualité politique et ne vote pas.',
      developpement: 'Cette distinction a été proposée par Anne Muxel et Jérôme Jaffré. L’abstention « hors du jeu » ressemble au cens caché : elle touche surtout les plus éloignés de la politique.',
      exemples: ['Un jeune sans diplôme qui ne connaît pas les candidats.'],
    },
    {
      terme: 'Abstention « dans le jeu »',
      synonymes: ['dans le jeu'],
      definition: 'Abstention de citoyens intéressés par la politique, qui choisissent de ne pas voter pour exprimer un mécontentement ou parce que l’enjeu leur paraît faible.',
      exemple: 'Un électeur informé qui s’abstient au second tour parce qu’aucun des deux candidats ne lui convient.',
      developpement: 'Ces abstentionnistes ressemblent aux votants (diplôme, intérêt pour la politique) : leur abstention est un comportement politique.',
      exemples: ['Un militant associatif qui ne vote pas aux élections européennes, jugées sans enjeu pour lui.'],
    },
    {
      terme: 'Intérêt pour la politique',
      synonymes: ['l’intérêt pour la politique'],
      definition: 'Attention portée à la vie politique (suivre l’actualité, en discuter, s’informer sur les programmes), qui augmente la probabilité de voter.',
      exemple: 'Une personne qui regarde les débats électoraux et en parle avec ses proches.',
      developpement: 'L’intérêt pour la politique dépend fortement de la socialisation familiale et du niveau de diplôme.',
      exemples: ['Un lycéen dont les parents discutent de politique à table s’y intéresse plus souvent.'],
    },
    {
      terme: 'Variables contextuelles',
      synonymes: ['variables contextuelles du vote'],
      definition: 'Éléments propres à chaque élection qui influencent la participation et le vote : type d’élection, enjeux perçus, offre électorale, campagne, situation économique.',
      exemple: 'Une élection présidentielle très disputée mobilise davantage qu’une élection partielle.',
      developpement: 'Leur poids a augmenté avec le déclin de l’identification partisane : les électeurs réagissent davantage à la situation de chaque élection.',
      exemples: ['Une crise économique pendant la campagne qui fait du pouvoir d’achat l’enjeu principal.'],
    },
    {
      terme: 'Vote sanction',
      definition: 'Vote contre le gouvernement ou les élus sortants, pour sanctionner leur bilan.',
      exemple: 'Un électeur qui vote pour l’opposition aux élections locales pour exprimer son mécontentement envers le gouvernement.',
      developpement: 'Le vote sanction illustre la dimension individuelle et rationnelle du vote : l’électeur juge un bilan.',
      exemples: ['Les élections intermédiaires (municipales, européennes) sont souvent défavorables au parti au pouvoir.'],
    },
    {
      terme: 'Vote de classe',
      definition: 'Lien entre l’appartenance à une classe sociale et l’orientation du vote (par exemple, les ouvriers votant majoritairement à gauche).',
      exemple: 'Dans les années 1970, une large majorité des ouvriers votait à gauche en France.',
      developpement: 'Le vote de classe s’est affaibli : les ouvriers votent aujourd’hui de façon plus dispersée, et s’abstiennent davantage.',
      exemples: ['Le recul du vote ouvrier pour la gauche depuis les années 1980.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Calculer tous les taux d’un scrutin',
        texte:
          'Dans une commune, 1 100 personnes ont le droit de voter, 1 000 sont inscrites, 720 votent, dont 30 blanc ou nul. **Taux d’inscription** : 1 000 / 1 100 ≈ 90,9 %. **Taux de participation** : 720 / 1 000 = 72 %. **Taux d’abstention** : 28 %. **Suffrages exprimés** : 690. Si l’on rapporte les non-votants à toutes les personnes en droit de voter, la non-participation atteint (1 100 − 720) / 1 100 ≈ 34,5 % (données fictives).',
      },
      {
        titre: 'Deux abstentionnistes très différents',
        texte:
          'Jordan, 23 ans, en intérim, inscrit chez ses parents à 300 km, ne vote pas : il est **mal inscrit** et peu informé (abstention **hors du jeu**). Claire, 45 ans, cadre très informée, ne vote pas au second tour parce qu’aucun candidat ne lui convient (abstention **dans le jeu**). Le même comportement a des causes opposées.',
      },
    ],
    [
      {
        titre: 'Pourquoi tout le monde ne vote pas autant',
        texte:
          'Monique, 68 ans, retraitée, mariée, propriétaire et bénévole, vote à toutes les élections : forte **intégration sociale**. Yanis, 20 ans, étudiant arrivé dans une nouvelle ville, sans diplôme encore, qui pense « ne rien comprendre à la politique », vote rarement : faible **sentiment de compétence politique**. C’est le **cens caché** décrit par D. Gaxie (exemple fictif).',
      },
      {
        titre: 'Le contexte compte aussi',
        texte:
          'Le même électeur vote à l’élection présidentielle, qu’il juge décisive, mais pas aux européennes, dont il perçoit mal l’**enjeu**. Une campagne très disputée, médiatisée, avec des candidats très différents, augmente la participation : ce sont des **variables contextuelles**.',
      },
    ],
    [
      {
        titre: 'Un vote individuel ou collectif ?',
        texte:
          'Paul vote pour le même camp que ses parents depuis toujours (**identification partisane**, dimension collective). Sa voisine Sofia change de vote selon les programmes sur l’emploi et l’environnement (**vote sur enjeux**, dimension individuelle). Mais les priorités de Sofia (elle est enseignante et vit en ville) sont elles-mêmes liées à sa position sociale : les deux dimensions se combinent.',
      },
      {
        titre: 'La volatilité sur trois élections',
        texte:
          'Un électeur vote pour un candidat de droite à une présidentielle, s’abstient aux européennes suivantes, puis vote pour une liste écologiste aux municipales. Il combine **intermittence du vote** et **changement de préférences** : c’est la **volatilité électorale**, favorisée par le **déclin de l’identification politique** et le poids accru du contexte.',
      },
    ],
  ],
};
