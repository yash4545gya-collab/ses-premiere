import type { DeveloppementChapitre } from '../../types';

/** Chapitre VI — développement. */
export const devSocialisation: DeveloppementChapitre = {
  id: 'socialisation',
  definitions: {
    Socialisation: {
      developpement:
        'Personne ne naît en sachant comment se comporter en société : on l’apprend. La socialisation, c’est cet apprentissage, qui dure toute la vie. Il passe par ce qu’on nous dit (consignes, interdits) mais surtout par ce qu’on observe, imite et répète sans y penser. Il façonne nos goûts, nos manières de parler, nos ambitions, et donc notre identité.',
      exemples: [
        'Un enfant apprend à se servir d’une fourchette en imitant ses parents.',
        'Un nouvel élève comprend vite, en observant les autres, comment on se comporte dans son lycée (tenue, vocabulaire, attitude en classe).',
      ],
    },
    'Norme sociale': {
      synonymes: ['normes'],
      developpement:
        'Une norme sociale indique ce qu’il « faut » faire dans une situation : saluer, faire la queue, éteindre son téléphone au cinéma. Elle n’est pas forcément écrite, mais tout le monde la connaît, et celui qui ne la respecte pas s’expose à une réaction (un regard, une remarque, une mise à l’écart). Les normes varient selon les groupes et les époques.',
      exemples: [
        'Dans certaines familles, on enlève ses chaussures en entrant ; dans d’autres, non.',
        'Répondre à un message rapidement est une norme chez beaucoup d’adolescents.',
      ],
      nePasConfondre: 'Norme (règle de conduite concrète) et valeur (idéal général qui justifie la norme).',
    },
    Valeur: {
      developpement:
        'Une valeur est un idéal, une chose jugée importante ou désirable : l’honnêteté, la solidarité, la réussite, la liberté. Les valeurs sont abstraites ; elles se traduisent concrètement en normes. Une même valeur peut donner des normes différentes selon les groupes.',
      exemples: [
        'La valeur de politesse se traduit par la norme « dire bonjour en entrant dans un magasin ».',
        'La valeur d’égalité se traduit par la norme « chacun parle à son tour pendant une réunion ».',
      ],
    },
    Intériorisation: {
      synonymes: ['intériorisent', 'intérioriser'],
      developpement:
        'Intérioriser une norme, c’est la faire sienne au point de ne plus la ressentir comme une contrainte : on la suit naturellement, sans y penser, et on se sent mal à l’aise si on la transgresse. C’est ce qui rend la socialisation si efficace : les règles apprises deviennent des habitudes et des goûts personnels.',
      exemples: [
        'Un adulte qui se lave les mains avant de manger sans même y penser.',
        'Une personne qui se sent gênée de parler fort dans une bibliothèque, même vide.',
      ],
    },
    'Instance de socialisation': {
      synonymes: ['instances de socialisation'],
      developpement:
        'Une instance de socialisation est un « lieu » ou un groupe qui transmet des façons d’être : la famille, l’école, les amis, les médias, puis le travail, le couple, les associations. Chacune transmet des messages différents, parfois concordants, parfois contradictoires.',
      exemples: [
        'Un club de football transmet l’esprit d’équipe, le respect des règles et de l’arbitre.',
        'Les réseaux sociaux diffusent des modes vestimentaires et des façons de parler.',
      ],
    },
    'Socialisation primaire': {
      developpement:
        'La socialisation primaire a lieu pendant l’enfance. C’est la plus profonde : elle forme la base de la personnalité (langage, rapport au corps, façons de se tenir, premières valeurs). Elle se fait surtout dans la famille, mais aussi à l’école, avec les pairs et devant les écrans. Ce qui est appris à cet âge est très durable.',
      exemples: [
        'Apprendre sa langue maternelle et l’accent de sa région.',
        'Apprendre à partager ses jouets à la crèche.',
      ],
      nePasConfondre: 'Socialisation primaire (enfance, base de la personnalité) et socialisation secondaire (âge adulte, nouveaux groupes).',
    },
    'Socialisation secondaire': {
      developpement:
        'À l’âge adulte, on entre dans de nouveaux groupes (un métier, un couple, une association, un parti) dont il faut apprendre les règles. La socialisation secondaire s’appuie sur ce qu’on a appris enfant : elle peut le prolonger, le compléter ou le contredire. Elle explique qu’on change au cours de la vie.',
      exemples: [
        'Un étudiant en médecine apprend à parler de la maladie avec calme et distance.',
        'Une personne qui devient parent apprend un nouveau rôle et de nouvelles priorités.',
      ],
    },
    'Socialisation professionnelle': {
      developpement:
        'Chaque métier a ses savoir-faire, son vocabulaire, ses horaires, ses façons de se comporter et même sa tenue. En entrant dans un métier, on les apprend, souvent au contact des collègues plus expérimentés. On développe aussi une identité professionnelle : « je suis infirmière », « je suis cuisinier ».',
      exemples: [
        'Un jeune policier apprend à garder son calme face aux situations tendues.',
        'Une apprentie coiffeuse apprend à tenir une conversation légère avec les clients.',
      ],
    },
    'Socialisation conjugale': {
      developpement:
        'Vivre en couple oblige à accorder ses habitudes avec celles de l’autre : repas, rangement, loisirs, budget, relations avec les familles. Peu à peu, chacun change un peu au contact de l’autre. La répartition des tâches domestiques s’y construit aussi, souvent de façon inégale entre femmes et hommes.',
      exemples: [
        'Une personne qui se met au sport parce que son conjoint en fait.',
        'Un couple qui invente ses propres rituels de week-end.',
      ],
    },
    'Socialisation politique': {
      developpement:
        'On n’apprend pas seulement à se tenir à table, on apprend aussi à penser la politique : s’y intéresser ou non, se sentir de gauche ou de droite, voter ou pas, militer. La famille joue un grand rôle, puis l’école, les amis, le travail et les grands événements vécus à une période de la vie (effet de génération).',
      exemples: [
        'Un enfant qui accompagne ses parents au bureau de vote découvre que voter est important.',
        'Une génération marquée par les mobilisations pour le climat développe un intérêt durable pour l’écologie.',
      ],
    },
    'Socialisation différenciée': {
      synonymes: ['différenciée selon le genre', 'socialisation différenciée selon le genre', 'socialisation différenciée selon le milieu social'],
      developpement:
        'On ne socialise pas tous les enfants de la même façon : leur sexe et le milieu de leurs parents changent ce qu’on leur transmet. Ces différences ne sont pas naturelles, elles sont apprises. Elles expliquent que, en moyenne, les comportements, les goûts et les ambitions diffèrent selon le genre et l’origine sociale.',
      exemples: [
        'On encourage plus souvent les garçons à grimper et prendre des risques, les filles à être calmes et soigneuses.',
        'Dans les familles d’enseignants, les vacances sont plus souvent l’occasion de visites culturelles.',
      ],
    },
    'Stéréotype de genre': {
      developpement:
        'Un stéréotype est une idée toute faite qui attribue des qualités à un groupe entier : « les garçons sont nuls en langues », « les filles sont douces ». Même faux, il agit : il oriente ce qu’on attend des enfants et ce qu’ils pensent d’eux-mêmes. Une élève qui entend que les maths « ne sont pas pour les filles » peut perdre confiance.',
      exemples: [
        'Des publicités de jouets montrant toujours des garçons avec des véhicules et des filles avec des poupées.',
        'L’idée qu’un garçon qui pleure « n’est pas un vrai garçon ».',
      ],
    },
    Genre: {
      developpement:
        'Le sexe renvoie aux différences biologiques ; le genre renvoie à tout ce que la société associe au féminin et au masculin : rôles, métiers, couleurs, attitudes. Ces associations changent selon les époques et les pays : elles sont donc sociales. Étudier le genre, c’est étudier comment on apprend à être « une fille » ou « un garçon ».',
      exemples: [
        'Au XVIIIe siècle, les hommes de la noblesse portaient perruques, talons et rubans.',
        'Le métier de secrétaire était masculin au XIXe siècle et est devenu très féminin au XXe.',
      ],
      nePasConfondre: 'Genre (construction sociale du masculin et du féminin) et sexe (différences biologiques).',
    },
    Habitus: {
      developpement:
        'Pour Pierre Bourdieu, l’habitus est un ensemble de dispositions (façons de penser, de sentir, d’agir) acquises pendant la socialisation et qui deviennent comme une « seconde nature ». Il est propre au milieu social où l’on a grandi. Il oriente nos choix (musique, sport, alimentation, études) sans que nous en ayons conscience : on a l’impression que nos goûts sont naturels.',
      exemples: [
        'Se sentir à l’aise ou mal à l’aise dans un musée, selon qu’on y allait enfant ou non.',
        'Préférer naturellement certains sports (golf, rugby, football) selon son milieu d’origine.',
      ],
    },
    'Capital culturel': {
      developpement:
        'Le capital culturel regroupe les ressources culturelles d’une famille : diplômes, livres, connaissances, façon de parler, aisance avec la culture « légitime » (celle que l’école valorise). Pour Bourdieu, les enfants qui l’héritent sont avantagés à l’école, car ce qu’on leur demande ressemble à ce qu’ils connaissent déjà : l’école paraît récompenser le mérite, mais elle récompense aussi l’héritage.',
      exemples: [
        'Des parents qui lisent des histoires tous les soirs et discutent de l’actualité à table.',
        'Un enfant qui a déjà visité des châteaux comprend plus facilement un cours d’histoire sur la Renaissance.',
      ],
    },
    'Configuration familiale': {
      synonymes: ['configurations familiales', 'diversité des configurations familiales'],
      developpement:
        'Les familles ne se ressemblent pas : deux parents ou un seul, famille recomposée, homoparentale, enfant unique ou fratrie nombreuse, grands-parents présents ou non. Chaque configuration change les conditions de la socialisation : le temps passé avec chaque adulte, le nombre de modèles, les règles à suivre. L’enfant peut être exposé à des influences plus variées.',
      exemples: [
        'Un enfant de famille recomposée apprend à s’adapter à deux maisons aux règles différentes.',
        'Un aîné de fratrie nombreuse apprend tôt à s’occuper des plus jeunes.',
      ],
    },
    'Groupe de pairs': {
      developpement:
        'Les pairs sont les personnes du même âge et de la même condition (camarades de classe, amis, équipe). À l’adolescence, leur influence devient très forte : ils transmettent des goûts (musique, vêtements, vocabulaire) et des façons de se comporter, parfois en opposition avec celles des parents.',
      exemples: [
        'Une expression qui se répand dans toute une classe en quelques jours.',
        'Un adolescent qui se met à un sport parce que ses amis en font.',
      ],
    },
    Resocialisation: {
      developpement:
        'Parfois, la socialisation secondaire ne se contente pas de compléter l’ancienne : elle la remplace presque entièrement. C’est une resocialisation. Elle se produit souvent dans des institutions qui encadrent toute la vie (armée, monastère, prison) ou lors de changements radicaux (conversion, exil).',
      exemples: [
        'Une personne qui entre dans un ordre religieux et adopte un mode de vie, des horaires et des valeurs nouveaux.',
        'Un migrant qui doit apprendre une autre langue et d’autres règles de vie.',
      ],
    },
    'Pluralité des influences socialisatrices': {
      synonymes: ['influences multiples', 'pluralité des influences'],
      developpement:
        'Dans les sociétés modernes, chacun est socialisé par plusieurs instances qui ne disent pas toutes la même chose : la famille, l’école, les amis, les médias, un club, un mentor. Bernard Lahire parle d’« homme pluriel » : chacun porte des dispositions variées, qui s’activent selon les contextes. Cette pluralité explique pourquoi deux frères et sœurs peuvent être très différents.',
      exemples: [
        'Une adolescente encouragée par une professeure de sciences alors que sa famille la voyait plutôt dans un métier de soin.',
        'Un jeune qui adopte à la fois les goûts musicaux de ses amis et ceux de ses grands-parents.',
      ],
    },
    'Trajectoire improbable': {
      developpement:
        'Statistiquement, l’origine sociale et le sexe permettent de prévoir en partie le parcours scolaire et professionnel. Une trajectoire improbable va contre ces probabilités. La sociologie ne l’explique ni par le hasard ni par un « don » : elle cherche les socialisations particulières qui l’ont rendue possible.',
      exemples: [
        'Un fils d’agriculteurs qui devient chercheur en physique après avoir été encouragé par un instituteur.',
        'Une fille qui devient pilote de ligne, métier encore très masculin.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Socialisation explicite',
      synonymes: ['explicite', 'socialisation méthodique'],
      definition: 'Socialisation consciente et volontaire, par laquelle on transmet des normes et des valeurs de façon directe : consignes, interdits, conseils, enseignement.',
      exemple: 'Un parent qui dit à son enfant « on dit merci ».',
      developpement: 'C’est la partie la plus visible de la socialisation, mais pas la plus importante : beaucoup de choses s’apprennent sans qu’on nous les dise.',
      exemples: ['Le règlement intérieur d’un lycée, expliqué en début d’année.'],
      nePasConfondre: 'Socialisation explicite (on nous dit ce qu’il faut faire) et socialisation implicite (on l’apprend sans qu’on nous le dise).',
    },
    {
      terme: 'Socialisation implicite',
      synonymes: ['implicite', 'socialisation diffuse'],
      definition: 'Socialisation qui se fait sans intention de transmettre, par imitation, observation et répétition de situations.',
      exemple: 'Un enfant qui adopte la façon de parler de ses parents sans qu’on la lui ait apprise.',
      developpement: 'C’est la forme la plus fréquente et la plus efficace de socialisation : on apprend en regardant faire, souvent sans s’en rendre compte.',
      exemples: ['Une fille qui voit toujours sa mère cuisiner et son père bricoler associe ces tâches à chaque sexe.'],
    },
    {
      terme: 'Rôle social',
      definition: 'Ensemble des comportements attendus d’une personne en fonction de la position qu’elle occupe dans un groupe ou une situation.',
      exemple: 'On attend d’un professeur qu’il explique, corrige et fasse respecter les règles de la classe.',
      developpement: 'Chaque individu tient plusieurs rôles (élève, enfant, ami, coéquipier). La socialisation apprend à les tenir et à passer de l’un à l’autre.',
      exemples: ['En devenant délégué de classe, un élève apprend un nouveau rôle : représenter ses camarades.'],
    },
    {
      terme: 'Aspirations',
      synonymes: ['aspiration', 'ambitions'],
      definition: 'Projets et ambitions qu’un individu forme pour son avenir (études, métier, mode de vie), en partie façonnés par sa socialisation.',
      exemple: 'Viser des études longues ou un emploi rapide après le bac.',
      developpement:
        'Les aspirations dépendent de ce qui paraît possible et souhaitable dans son milieu. Un enfant qui ne connaît personne ayant fait des études longues les envisage moins facilement : c’est une manière d’« anticiper l’avenir » socialement située.',
      exemples: ['À résultats scolaires égaux, les enfants de cadres demandent plus souvent une filière générale que les enfants d’ouvriers.'],
    },
    {
      terme: 'Effet de génération',
      definition: 'Influence durable qu’exercent sur une génération les événements et le contexte vécus pendant sa jeunesse.',
      exemple: 'Une génération qui a grandi avec Internet a des habitudes de communication différentes des précédentes.',
      developpement: 'La socialisation politique est souvent marquée par un effet de génération : les grands événements vécus vers 18-25 ans laissent une empreinte durable.',
      exemples: ['La génération de Mai 68, marquée par les mobilisations étudiantes.'],
    },
    {
      terme: 'Institution totale',
      definition: 'Selon E. Goffman, institution qui prend en charge toute la vie de ses membres, coupés du reste de la société (prison, caserne, monastère, internat strict).',
      exemple: 'Une caserne où les recrues mangent, dorment et travaillent au même endroit, selon des horaires imposés.',
      developpement: 'Ces institutions favorisent la resocialisation : elles remplacent les anciennes habitudes par de nouvelles, en contrôlant tous les moments de la journée.',
      exemples: ['Un séjour de plusieurs années dans un monastère.'],
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Deux façons d’apprendre une norme',
        texte:
          'Quand un père dit à son fils « on ne parle pas la bouche pleine », c’est une **socialisation explicite**. Quand le fils, sans que personne ne le lui dise, prend l’habitude de lire le journal le dimanche comme sa mère, c’est une **socialisation implicite**. Dans les deux cas, la norme finit par être **intériorisée** : elle paraît naturelle.',
      },
      {
        titre: 'Le même âge, deux socialisations',
        texte:
          'Hugo grandit chez des parents professeurs : livres partout, discussions sur l’actualité, visites de musées. Kevin grandit chez des parents qui travaillent en horaires décalés et regardent les matchs à la télévision. Au collège, Hugo trouve familières les attentes de l’école, grâce au **capital culturel** hérité ; Kevin les découvre. Ce n’est pas une question de « don », mais de **socialisation différenciée** selon le milieu social (exemple fictif).',
      },
      {
        titre: 'Les jouets et le genre',
        texte:
          'Dans un catalogue de jouets, les pages roses montrent poupées et dînettes, les pages bleues véhicules et jeux de construction. Un enfant qui ne reçoit que des jeux de construction développe le goût et l’aisance pour les objets techniques. Ces **stéréotypes de genre** participent à une **socialisation différenciée selon le genre**, qui pèse plus tard sur les choix d’orientation.',
      },
    ],
    [
      {
        titre: 'Une socialisation professionnelle',
        texte:
          'Inès commence comme infirmière aux urgences. Les premières semaines, elle observe ses collègues : comment parler aux patients inquiets, comment garder son calme, quel vocabulaire employer. Après quelques mois, elle a **intériorisé** ces façons de faire : c’est sa **socialisation professionnelle**, une forme de **socialisation secondaire** qui s’ajoute à ce qu’elle avait appris enfant.',
      },
      {
        titre: 'Prolonger, compléter ou contredire',
        texte:
          'Une fille d’avocats qui devient avocate **prolonge** sa socialisation primaire. Un enfant d’ouvriers qui devient cadre doit apprendre de nouveaux codes (tenue, langage, loisirs) : sa socialisation secondaire peut entrer en **tension** avec sa socialisation primaire. Une personne qui entre dans un monastère vit une **resocialisation**.',
      },
    ],
    [
      {
        titre: 'Une trajectoire improbable expliquée',
        texte:
          'Sarah, fille d’une aide-soignante et d’un chauffeur routier, entre en école d’ingénieurs. Ce n’est pas un hasard : sa grand-mère lui achetait des livres de sciences, un professeur de mathématiques l’a encouragée à viser une classe préparatoire, et une association l’a accompagnée. La **pluralité des influences socialisatrices** a rendu possible cette **trajectoire improbable** (exemple fictif).',
      },
      {
        titre: 'Régularités statistiques, pas destins',
        texte:
          'Dire que les enfants de cadres font plus souvent des études longues que les enfants d’ouvriers décrit une tendance, pas une loi. Beaucoup d’enfants d’ouvriers font des études longues, et des enfants de cadres n’en font pas. La socialisation explique des **régularités statistiques**, que chaque parcours individuel peut contredire.',
      },
    ],
  ],
};
