import type { FicheMethode } from '../types';

export const ec1: FicheMethode = {
  id: 'ec1',
  titre: 'EC1 — Mobilisation des connaissances',
  sousTitre: 'Partie 1 · 4 points · environ 15 minutes',
  intro:
    'L’EC1 est une question de cours, sans document. Elle vérifie que tu connais les notions et les mécanismes du programme et que tu sais les exposer avec rigueur. Une réponse courte mais complète vaut mieux qu’une longue réponse confuse.',
  attendus: [
    'Les notions de la question sont définies avec précision.',
    'Le ou les mécanismes demandés sont expliqués, étape par étape.',
    'Au moins un exemple concret illustre la réponse.',
    'La réponse est structurée (deux ou trois paragraphes, ou une introduction courte puis deux temps).',
  ],
  etapes: [
    { titre: 'Analyser la consigne', texte: 'Souligne le verbe (montrez, expliquez, distinguez…) et les notions. Demande-toi : quelle est exactement la question ?' },
    { titre: 'Mobiliser le cours', texte: 'Note au brouillon les définitions, le mécanisme (A → B → C), un auteur si pertinent, un exemple.' },
    { titre: 'Organiser', texte: 'Prévois deux ou trois paragraphes : un par idée, ou un par notion pour une question « distinguez ».' },
    { titre: 'Rédiger', texte: 'Phrase d’introduction qui reprend la question et définit les termes ; un paragraphe par argument ou par étape du mécanisme ; une phrase de conclusion facultative.' },
    { titre: 'Relire', texte: 'Vérifie que chaque notion est définie et que tu as bien répondu à la question posée.' },
  ],
  modele: {
    sujet: 'Montrez que l’équilibre du monopole n’est pas efficace. (4 points)',
    copie: [
      {
        texte:
          'Un monopole est une structure de marché dans laquelle un seul offreur fait face à une multitude de demandeurs. Contrairement à l’entreprise en concurrence parfaite, il dispose d’un pouvoir de marché : il est faiseur de prix. Un équilibre est efficace lorsque la somme des surplus du consommateur et du producteur est maximale.',
      },
      {
        texte:
          'Le monopole maximise son profit en produisant la quantité pour laquelle sa recette marginale est égale à son coût marginal, puis il fixe le prix le plus élevé que les acheteurs acceptent pour cette quantité. Comme il doit baisser son prix pour vendre davantage, sa recette marginale est inférieure au prix : il a intérêt à limiter la quantité produite. Il en résulte un prix supérieur au coût marginal et une quantité inférieure à celle de la concurrence. Par exemple, avec une demande P = 10 − 0,5Q et un coût marginal constant de 2, le monopole vend 8 unités au prix de 6, alors qu’en concurrence on échangerait 16 unités au prix de 2.',
      },
      {
        texte:
          'Ce choix n’est pas efficace : des consommateurs qui seraient prêts à payer plus que le coût de production renoncent à acheter, si bien que des échanges mutuellement avantageux n’ont pas lieu. Une partie du surplus du consommateur est transférée au monopole sous forme de profit, et une autre est perdue pour tous : c’est la perte sèche (16 dans l’exemple). Le surplus total est donc inférieur à celui de la concurrence. C’est pourquoi la politique de la concurrence cherche à limiter le pouvoir de marché.',
      },
    ],
    commentaire:
      'La copie définit les notions (monopole, efficacité), explique le mécanisme (Rm = Cm, prix supérieur au coût marginal, quantité réduite), illustre par un exemple chiffré et conclut sur la perte sèche, qui est le cœur de la question.',
  },
  grille: [
    'J’ai défini toutes les notions de la consigne.',
    'J’ai expliqué un mécanisme, pas seulement énoncé une idée.',
    'J’ai donné un exemple précis (chiffré si possible).',
    'Ma réponse est organisée en paragraphes.',
    'Je réponds exactement à la question (pas de hors-sujet, pas de récitation de tout le chapitre).',
  ],
};

export const ec2: FicheMethode = {
  id: 'ec2',
  titre: 'EC2 — Étude d’un document',
  sousTitre: 'Partie 2 · 6 points · environ 20 à 30 minutes',
  intro:
    'L’EC2 porte sur un document statistique (tableau, graphique). La consigne comporte en général deux temps : présenter le document, puis l’exploiter pour répondre à une question. On évalue la lecture exacte des données, la maîtrise des calculs simples et la capacité à relier les chiffres à un savoir du programme.',
  attendus: [
    'Le document est présenté : nature, titre, source, date, champ, unité.',
    'Les données sont lues correctement, avec des phrases rigoureuses (« Selon l’INSEE, en 2024, … »).',
    'Des calculs pertinents (écarts, taux de variation, rapports) font ressortir l’information principale.',
    'Les données sont interprétées : on explique ce qu’elles montrent à l’aide du cours.',
  ],
  etapes: [
    { titre: 'Présenter', texte: 'Une phrase : « Ce [tableau / graphique], publié par [source] en [année], présente [ce qu’il mesure] selon [variables], en [unité]. »' },
    { titre: 'Repérer l’idée principale', texte: 'Quelle est la tendance générale, l’écart le plus frappant ? Commence par là, pas par les détails.' },
    { titre: 'Choisir et calculer', texte: 'Sélectionne 2 ou 3 données utiles ; calcule un écart (en points si ce sont des %), un rapport (« 1,4 fois plus ») ou un taux de variation.' },
    { titre: 'Lire avec rigueur', texte: 'Fais au moins une phrase de lecture complète d’une donnée avec sa source, sa date et son unité.' },
    { titre: 'Interpréter', texte: 'Explique les écarts à l’aide d’un mécanisme du cours, sans aller au-delà de ce que le document permet de dire.' },
  ],
  modele: {
    sujet:
      'À l’aide du document, vous présenterez la relation entre l’âge et la participation électorale, puis vous en proposerez une explication. (6 points)',
    documents: [
      {
        titre: 'Taux de participation au premier tour d’une élection selon l’âge, en % des inscrits',
        tableau: {
          entetes: ['Âge', '18-24 ans', '25-34 ans', '35-49 ans', '50-64 ans', '65 ans et plus'],
          lignes: [['Taux de participation (%)', '58', '62', '71', '79', '84']],
        },
        source: 'Données fictives, inspirées des ordres de grandeur des enquêtes sur la participation',
      },
    ],
    copie: [
      {
        titre: 'Présentation',
        texte:
          'Ce tableau, construit à partir de données fictives, présente le taux de participation au premier tour d’une élection selon la tranche d’âge des électeurs, en pourcentage des inscrits.',
      },
      {
        titre: 'Lecture et calculs',
        texte:
          'La participation augmente régulièrement avec l’âge. Selon ce document, 58 % des inscrits âgés de 18 à 24 ans ont voté, contre 84 % des 65 ans et plus, soit un écart de 26 points de pourcentage. Les électeurs de 65 ans et plus ont donc participé environ 1,4 fois plus que les plus jeunes (84 / 58 ≈ 1,45). La hausse est continue d’une tranche à l’autre : la participation gagne 9 points entre les 25-34 ans et les 35-49 ans.',
      },
      {
        titre: 'Interprétation',
        texte:
          'Cet écart s’explique d’abord par le degré d’intégration sociale : les plus âgés ont plus souvent un emploi stable ou une retraite, vivent en couple, sont propriétaires et installés depuis longtemps dans leur commune, ce qui favorise la participation. Les jeunes, eux, sont plus souvent en situation de mobilité (études, premiers emplois), ce qui expose à la mal-inscription, et leur socialisation politique est encore en cours. Enfin, les jeunes pratiquent davantage une abstention intermittente : ils votent surtout aux élections qu’ils jugent décisives.',
      },
    ],
    commentaire:
      'La copie présente le document, dégage la tendance avant les détails, calcule un écart en points et un rapport, puis mobilise trois facteurs du cours (intégration sociale, mal-inscription, intermittence).',
  },
  grille: [
    'J’ai présenté le document (nature, source, date, unité).',
    'J’ai dégagé l’idée principale avant les détails.',
    'J’ai fait au moins une lecture complète et exacte d’une donnée.',
    'J’ai fait au moins un calcul pertinent, avec la bonne unité (points ou %).',
    'J’ai expliqué les données avec un mécanisme du cours.',
    'Je ne dis pas plus que ce que le document permet d’affirmer.',
  ],
};

export const ec3: FicheMethode = {
  id: 'ec3',
  titre: 'EC3 — Raisonnement s’appuyant sur un dossier documentaire',
  sousTitre: 'Partie 3 · 10 points · environ 1 heure',
  intro:
    'L’EC3 demande de construire une argumentation organisée qui répond à une consigne, en s’appuyant sur un dossier de deux ou trois documents et sur tes connaissances. Ce n’est pas une dissertation (pas de problématique à construire, pas de plan dialectique obligatoire), mais une démonstration structurée : introduction courte, développement en paragraphes argumentés, conclusion.',
  attendus: [
    'La réponse est structurée : courte introduction (définitions, annonce du plan), deux ou trois parties ou paragraphes argumentés, courte conclusion.',
    'Chaque paragraphe suit la logique AEI : Affirmation, Explication (mécanisme), Illustration (données du dossier ou exemple).',
    'Tous les documents sont exploités, avec des données précises et citées (« document 2 »).',
    'Les connaissances personnelles complètent les documents (définitions, mécanismes, auteurs).',
  ],
  etapes: [
    { titre: 'Analyser la consigne (5 min)', texte: 'Repère le verbe et les notions ; définis-les au brouillon. Demande-toi ce que tu dois démontrer.' },
    { titre: 'Exploiter le dossier (15 min)', texte: 'Pour chaque document, note l’idée principale et une ou deux données précises qui serviront d’illustration.' },
    { titre: 'Construire le plan (5 min)', texte: 'Deux ou trois arguments qui répondent à la consigne ; range les données et tes connaissances sous chacun.' },
    { titre: 'Rédiger (30 min)', texte: 'Introduction (définitions, annonce), paragraphes AEI avec des connecteurs logiques, conclusion qui répond clairement à la consigne.' },
    { titre: 'Relire (5 min)', texte: 'Vérifie que chaque document est cité au moins une fois et que chaque paragraphe contient une affirmation, une explication et une illustration.' },
  ],
  modele: {
    sujet:
      'À l’aide du dossier documentaire et de vos connaissances, vous montrerez que la socialisation différenciée selon le genre contribue à expliquer les différences de choix d’orientation entre filles et garçons. (10 points)',
    documents: [
      {
        titre: 'Document 1 — Jouets et activités',
        contenu:
          'Dans les catalogues de jouets, les pages « filles » mettent en avant poupées, dînettes et kits de maquillage, souvent dans des tons roses ; les pages « garçons » proposent véhicules, jeux de construction et kits scientifiques. Les parents déclarent encourager davantage les garçons dans les activités physiques et techniques, et les filles dans les activités calmes, artistiques ou tournées vers les autres.',
        source: 'Texte rédigé pour l’exercice',
      },
      {
        titre: 'Document 2 — Part des filles parmi les élèves de Première d’un lycée, selon la spécialité',
        tableau: {
          entetes: ['Spécialité', 'Numérique et sciences informatiques', 'Physique-chimie', 'SES', 'Humanités, littérature et philosophie'],
          lignes: [['Part des filles (%)', '18', '42', '58', '75']],
        },
        source: 'Données fictives',
      },
      {
        titre: 'Document 3 — Le regard des enseignants',
        contenu:
          'Des observations en classe montrent que les enseignants interrogent un peu plus souvent les garçons en mathématiques et attribuent plus volontiers leurs réussites au « talent », celles des filles au « travail ». À niveau égal, les filles s’estiment moins compétentes en mathématiques que les garçons.',
        source: 'Texte rédigé pour l’exercice',
      },
    ],
    copie: [
      {
        titre: 'Introduction',
        texte:
          'La socialisation est le processus par lequel les individus intériorisent les normes et les valeurs de la société. Elle est différenciée selon le genre lorsque les instances de socialisation transmettent des attentes et des pratiques différentes aux filles et aux garçons. Nous montrerons que cette socialisation, d’abord familiale puis scolaire, façonne des goûts et une confiance en soi différents, qui orientent les choix scolaires.',
      },
      {
        titre: 'I. Une socialisation familiale qui oriente les goûts dès l’enfance',
        texte:
          'Dès la petite enfance, la famille transmet des goûts et des compétences différents selon le sexe de l’enfant. En effet, les jouets et les encouragements ne sont pas les mêmes : les garçons reçoivent plus souvent des jeux de construction et des kits scientifiques, les filles des poupées et des dînettes (document 1). Par la répétition de ces activités, les enfants intériorisent des goûts et développent des savoir-faire distincts, que la sociologue E. G. Belotti décrivait déjà dans Du côté des petites filles. Ainsi, une fille qui a peu manipulé de jeux techniques se sentira moins attirée par ces domaines à l’adolescence.',
      },
      {
        titre: 'II. Une socialisation scolaire qui renforce ces différences',
        texte:
          'L’école, autre instance de la socialisation primaire, prolonge ces différences, souvent de manière implicite. Les enseignants interrogent un peu plus les garçons en mathématiques et attribuent leurs réussites au talent, celles des filles au travail (document 3). Il en résulte qu’à niveau égal, les filles se jugent moins compétentes en mathématiques : elles intériorisent un stéréotype de genre qui réduit leur confiance en elles dans ces matières.',
      },
      {
        titre: 'III. Des choix d’orientation différenciés',
        texte:
          'Ces dispositions intériorisées se traduisent dans les choix d’orientation. Dans le lycée étudié, les filles ne représentent que 18 % des élèves de numérique et sciences informatiques, mais 75 % des élèves d’humanités, littérature et philosophie, soit un écart de 57 points (document 2). Les élèves choisissent les spécialités qui correspondent aux goûts et à l’image de soi construits par leur socialisation, ce qui reproduit la séparation entre filières « masculines » et « féminines ». Toutefois, la pluralité des influences socialisatrices (un parent ingénieur, une enseignante marquante) explique que certaines filles fassent des choix « improbables ».',
      },
      {
        titre: 'Conclusion',
        texte:
          'La socialisation différenciée selon le genre, familiale puis scolaire, façonne des goûts et un sentiment de compétence différents chez les filles et les garçons ; elle contribue ainsi à expliquer leurs choix d’orientation distincts. Elle n’en est pas la seule cause : les représentations des métiers et les débouchés jouent aussi.',
      },
    ],
    commentaire:
      'Chaque partie suit la logique AEI (affirmation, explication du mécanisme, illustration par un document). Les trois documents sont cités, avec un calcul d’écart pour le document 2. La copie mobilise des connaissances (intériorisation, stéréotype de genre, Belotti, trajectoires improbables).',
  },
  grille: [
    'Mon introduction définit les notions et annonce le plan.',
    'Chaque partie commence par une affirmation qui répond à la consigne.',
    'Chaque partie explique un mécanisme avec des connecteurs (« en effet », « il en résulte »).',
    'Chaque partie est illustrée par des données précises du dossier, citées.',
    'Tous les documents sont utilisés.',
    'J’ai ajouté des connaissances personnelles (définitions, auteurs, exemples).',
    'Ma conclusion répond clairement à la consigne.',
  ],
};
