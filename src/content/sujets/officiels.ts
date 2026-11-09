import type { Sujet } from '../types';

/**
 * SUJETS OFFICIELS
 * Uniquement des sujets dont la source exacte a été vérifiée (PDF officiel lu sur eduscol,
 * page « Annales des épreuves du baccalauréat des voies générale et technologique »).
 * Il n'existe pas d'épreuve écrite nationale de SES en Première : ce sont des sujets
 * du baccalauréat (épreuve de Terminale) dont l'exercice porte sur des notions du programme
 * de Première. Les consignes longues sont reformulées : le texte exact est dans le PDF.
 * Les corrigés sont rédigés pour ce site (ils ne sont pas officiels).
 */
const EDUSCOL = 'https://eduscol.education.gouv.fr/sites/default/files/document/';

export const SUJETS_OFFICIELS: Sujet[] = [
  {
    id: 'off-26-sesj2me1-dissertation',
    type: 'Dissertation',
    chapitres: ['marches-imparfaits'],
    origine: 'officiel',
    titre: 'La politique européenne de la concurrence atteint-elle ses objectifs ?',
    sourceOfficielle: 'Baccalauréat général, session 2026, épreuves normales, Métropole, jour 2 — sujet 26-SESJ2ME1, dissertation',
    lienOfficiel: EDUSCOL + '26-sesj2me1-128226.pdf',
    remarque: 'Sujet du bac (Terminale). Il mobilise directement le chapitre « Marchés imparfaitement concurrentiels » de Première.',
    consigne: 'Dans quelle mesure la politique européenne de la concurrence atteint-elle ses objectifs ?',
    documentsDecrits: [
      'Document 1 : décisions de l’Autorité de la concurrence sur des projets de concentration, 2009-2023 (Autorité de la concurrence, rapport annuel 2023).',
      'Document 2 : bilan de l’activité de l’Autorité de la concurrence en 2024.',
      'Document 3 : article de presse sur une enquête européenne antisubventions dans l’éolien.',
      'Document 4 : parts de marché mondiales des moteurs de recherche.',
    ],
    dureeMinutes: 120,
    corrige: {
      notions: [
        'Politique de la concurrence', 'Pouvoir de marché', 'Entente', 'Abus de position dominante', 'Concentration (fusion-acquisition)', 'Surplus du consommateur', 'Aides d’État',
      ],
      plan: [
        {
          titre: 'I. Une politique qui protège la concurrence et le surplus du consommateur',
          paragraphes: [
            'A. Le contrôle des concentrations empêche la formation de positions dominantes : la plupart des projets sont autorisés, certains sous conditions, quelques-uns interdits (document 1).',
            'B. La sanction des ententes (amendes, programme de clémence) et des abus de position dominante fait baisser les prix et augmente le surplus du consommateur (document 2).',
            'C. Le contrôle des aides d’État et les enquêtes antisubventions évitent que des entreprises soient avantagées artificiellement (document 3).',
          ],
        },
        {
          titre: 'II. Une efficacité limitée',
          paragraphes: [
            'A. Certains marchés restent très concentrés malgré les sanctions, notamment dans le numérique, où les effets de réseau créent des barrières à l’entrée (document 4).',
            'B. Les procédures sont longues et les amendes ne dissuadent pas toujours ; les ententes sont difficiles à détecter.',
            'C. Un débat : une politique trop stricte empêcherait l’émergence de « champions européens » face aux concurrents américains et chinois (refus Alstom-Siemens en 2019).',
          ],
        },
      ],
      arguments: [
        'Mécanisme : moins de pouvoir de marché → prix plus proche du coût marginal → quantités plus élevées → surplus du consommateur plus élevé.',
        'Exploiter un calcul sur le document 1 (part des projets autorisés, sous conditions, interdits).',
      ],
      erreursAEviter: [
        'Réciter le cours sans répondre à « dans quelle mesure » : il faut un bilan nuancé.',
        'Confondre position dominante (autorisée) et abus de position dominante (sanctionné).',
        'Oublier d’exploiter les données chiffrées des documents.',
      ],
    },
  },
  {
    id: 'off-23-sesj2me1-dissertation',
    type: 'Dissertation',
    chapitres: ['defaillances-marche'],
    origine: 'officiel',
    titre: 'Les instruments publics face aux externalités négatives sur l’environnement sont-ils efficaces ?',
    sourceOfficielle: 'Baccalauréat général, session 2023, épreuves normales, Métropole, Mayotte, Antilles-Guyane, jour 2 — sujet 23-SESJ2ME1, dissertation',
    lienOfficiel: EDUSCOL + 'baccalaur-g-n-ral-2023-sciences-conomiques-et-sociales-133961pdf-98736.pdf',
    remarque: 'Sujet du bac (Terminale, chapitre environnement). Il repose sur la notion d’externalité et les instruments étudiés au chapitre « Défaillances du marché » de Première.',
    consigneReformulee: true,
    consigne: 'Dissertation : dans quelle mesure les instruments dont disposent les pouvoirs publics pour faire face aux externalités négatives sur l’environnement sont-ils efficaces ?',
    documentsDecrits: [
      'Document 1 : rapport sur l’impact environnemental du budget de l’État (2021).',
      'Document 2 : données du ministère de la Transition écologique (2021).',
      'Document 3 : document du site du ministère de l’Écologie (2021).',
      'Document 4 : données de l’Observatoire climat-énergie (2022).',
    ],
    dureeMinutes: 120,
    corrige: {
      notions: ['Externalité négative', 'Internalisation', 'Réglementation (normes)', 'Taxation (pollueur-payeur)', 'Subvention', 'Marché de quotas d’émission', 'Passager clandestin'],
      plan: [
        {
          titre: 'I. Des instruments qui permettent de réduire les externalités négatives',
          paragraphes: [
            'A. La réglementation fixe des normes et des interdictions : efficace pour les pollutions dangereuses, contrôle simple.',
            'B. La taxe internalise le coût externe : le pollueur intègre la pollution dans ses coûts (taxe pigouvienne), ce qui réduit la quantité produite.',
            'C. Le marché de quotas fixe un plafond d’émissions et laisse le prix du carbone inciter les entreprises à réduire leurs émissions là où c’est le moins coûteux.',
          ],
        },
        {
          titre: 'II. Une efficacité limitée',
          paragraphes: [
            'A. Les normes sont rigides et coûteuses à contrôler ; les taxes sont difficiles à calibrer et peuvent être socialement contestées (effets sur les ménages modestes).',
            'B. Un prix du quota trop bas incite peu à réduire les émissions ; risque de « fuites de carbone ».',
            'C. Le climat est un bien commun mondial : sans coordination internationale, chaque pays est tenté d’être passager clandestin.',
          ],
        },
      ],
      erreursAEviter: [
        'Présenter les instruments sans évaluer leur efficacité.',
        'Confondre bien commun (climat) et bien collectif.',
        'Ne pas citer les documents.',
      ],
    },
  },
  {
    id: 'off-25-sesj1me2-dissertation',
    type: 'Dissertation',
    chapitres: ['defaillances-marche'],
    origine: 'officiel',
    titre: 'Comment les pouvoirs publics peuvent-ils agir face au changement climatique ?',
    sourceOfficielle: 'Baccalauréat général, session 2025, épreuves normales, Métropole, jour 1, sujet 2 — 25-SESJ1ME2, dissertation',
    lienOfficiel: EDUSCOL + '25-sesj1me2v1pdf-112671.pdf',
    remarque: 'Sujet du bac (Terminale). Il mobilise les externalités et les instruments étudiés au chapitre « Défaillances du marché » de Première.',
    consigne: 'Comment les pouvoirs publics peuvent-ils agir pour faire face au changement climatique ?',
    documentsDecrits: [
      'Document 1 : présentation du Pacte vert pour l’Europe.',
      'Document 2 : chiffres clés du climat (ministère de la Transition énergétique).',
      'Document 3 : bilan de la fiscalité environnementale (ministère de la Transition écologique).',
      'Document 4 : le système d’échange de quotas d’émission de l’Union européenne.',
    ],
    dureeMinutes: 120,
    corrige: {
      notions: ['Externalité négative', 'Bien commun', 'Réglementation', 'Taxation', 'Subvention', 'Marché de quotas d’émission', 'Coopération internationale'],
      plan: [
        {
          titre: 'I. Des instruments pour internaliser les externalités',
          paragraphes: [
            'A. Réglementer : normes d’émission, interdictions (Pacte vert, document 1).',
            'B. Taxer et subventionner : fiscalité environnementale (document 3) ; aides à la rénovation, aux véhicules propres.',
            'C. Créer un marché de quotas (document 4) : plafond d’émissions, prix du carbone.',
          ],
        },
        {
          titre: 'II. Une action qui doit être coordonnée',
          paragraphes: [
            'A. Le climat est un bien commun mondial : risque de passager clandestin entre pays.',
            'B. Accords internationaux et action européenne pour dépasser ce risque ; limites (engagements non contraignants, fuites de carbone).',
          ],
        },
      ],
      erreursAEviter: ['Faire une liste d’instruments sans expliquer leur mécanisme.', 'Oublier la dimension internationale du problème.'],
    },
  },
  {
    id: 'off-25-sesj1me1-dissertation',
    type: 'Dissertation',
    chapitres: ['monnaie', 'financement'],
    origine: 'officiel',
    titre: 'Les politiques monétaire et budgétaires agissent-elles sur la conjoncture de la zone euro ?',
    sourceOfficielle: 'Baccalauréat général, session 2025, épreuves normales, Métropole, jour 1, sujet 1 — 25-SESJ1ME1, dissertation',
    lienOfficiel: EDUSCOL + '25-sesj1me1v1pdf-112668.pdf',
    remarque: 'Sujet du bac (Terminale, chapitre zone euro). Il mobilise la politique monétaire (chapitre « Monnaie ») et le financement de l’État (chapitre « Financement ») de Première.',
    consigneReformulee: true,
    consigne: 'Dissertation : dans quelle mesure les politiques monétaire et budgétaires parviennent-elles à agir sur la conjoncture des pays membres de la zone euro ?',
    documentsDecrits: [
      'Document 1 : article de presse (Libération, septembre 2024).',
      'Document 2 : données Eurostat (2023).',
      'Document 3 : données INSEE (septembre 2024).',
      'Document 4 : évolution d’un taux du marché interbancaire (Euribor, 2024).',
    ],
    dureeMinutes: 120,
    corrige: {
      notions: ['Politique monétaire', 'Taux directeurs', 'Marché interbancaire', 'Inflation', 'Politique budgétaire', 'Déficit public', 'Effet de relance', 'Effet d’éviction'],
      plan: [
        {
          titre: 'I. Des politiques qui peuvent agir sur la conjoncture',
          paragraphes: [
            'A. La BCE pilote les taux courts (document 4) : la hausse des taux de 2022-2023 a freiné le crédit et contribué au recul de l’inflation.',
            'B. Les politiques budgétaires nationales soutiennent la demande (relance) et amortissent les chocs (stabilisateurs).',
          ],
        },
        {
          titre: 'II. Une efficacité limitée',
          paragraphes: [
            'A. Une politique monétaire unique ne convient pas à des économies aux situations différentes.',
            'B. Les règles budgétaires européennes et le niveau de la dette limitent les marges de manœuvre ; l’effet d’éviction peut réduire l’effet de relance.',
            'C. Le manque de coordination entre politiques budgétaires nationales.',
          ],
        },
      ],
      erreursAEviter: ['Confondre politique monétaire (BCE) et politique budgétaire (États).', 'Ne présenter que les effets positifs.'],
    },
  },
  {
    id: 'off-25-sesj1me2-ec3',
    type: 'EC3',
    chapitres: ['monnaie', 'financement'],
    origine: 'officiel',
    titre: 'Les difficultés des politiques monétaire et budgétaires dans la zone euro',
    sourceOfficielle: 'Baccalauréat général, session 2025, épreuves normales, Métropole, jour 1, sujet 2 — 25-SESJ1ME2, épreuve composée, partie 3',
    lienOfficiel: EDUSCOL + '25-sesj1me2v1pdf-112671.pdf',
    remarque: 'Sujet du bac (Terminale). Il mobilise la politique monétaire et le déficit public étudiés en Première.',
    consigneReformulee: true,
    consigne:
      'À l’aide de vos connaissances et du dossier documentaire, vous montrerez que la politique monétaire et les politiques budgétaires de la zone euro rencontrent des difficultés.',
    documentsDecrits: [
      'Document 1 : article de presse sur la procédure européenne pour déficit excessif visant la France.',
      'Document 2 : situation des pays de l’Union européenne au regard des critères de déficit et de dette (INSEE).',
      'Document 3 : données Eurostat (2024).',
    ],
    dureeMinutes: 60,
    corrige: {
      notions: ['Politique monétaire unique', 'Taux directeurs', 'Solde budgétaire', 'Déficit public', 'Dette publique', 'Règles budgétaires européennes'],
      plan: [
        {
          titre: 'I. Une politique monétaire unique pour des pays différents',
          paragraphes: ['Un taux directeur commun ne peut pas convenir à tous les pays quand leurs taux d’inflation et de croissance divergent (document 3).'],
        },
        {
          titre: 'II. Des politiques budgétaires contraintes',
          paragraphes: [
            'Les déficits et la dette élevés de certains pays (documents 1 et 2) les exposent aux procédures européennes et à la hausse des taux d’intérêt, ce qui limite leur capacité de relance.',
          ],
        },
      ],
      erreursAEviter: ['Oublier de citer des données précises des documents (écarts au critère de 3 % de déficit, de 60 % de dette).'],
    },
  },
  {
    id: 'off-26-sesj1me1-ec2',
    type: 'EC2',
    chapitres: ['vote'],
    origine: 'officiel',
    titre: 'Le vote systématique selon l’âge et le diplôme (2002-2022)',
    sourceOfficielle: 'Baccalauréat général, session 2026, épreuves normales, Métropole, jour 1 — sujet 26-SESJ1ME1, épreuve composée, partie 2',
    lienOfficiel: EDUSCOL + '26-sesj1me1-128223.pdf',
    remarque: 'Sujet du bac (Terminale). La question 1 est un savoir-faire de Première ; la question 2 mobilise le chapitre « Le vote » de Première (et le chapitre sur l’engagement de Terminale).',
    consigneReformulee: true,
    consigne:
      '1. À l’aide des données et d’un calcul simple, comparez l’évolution du vote systématique des 18-29 ans à celle de l’ensemble de la population entre 2012 et 2022 (2 points). 2. À l’aide du document et de vos connaissances, montrez que l’engagement politique dépend de variables sociodémographiques (4 points).',
    documents: [
      {
        titre: 'Vote systématique aux élections nationales de l’année en 2002, 2012 et 2022, par âge et diplôme (en % des inscrits)',
        tableau: {
          entetes: ['', '2002', '2012', '2022'],
          lignes: [
            ['Ensemble de la population', '47,6', '47,8', '37'],
            ['18-29 ans', '31,4', '26,8', '17,3'],
            ['30-64 ans', '49,1', '50,1', '37,2'],
            ['65 ans et plus', '55,7', '56,5', '47,7'],
            ['Aucun diplôme', '45,6', '42,2', '28,8'],
            ['Diplôme inférieur au baccalauréat', '51,8', '49,2', '38,1'],
            ['Baccalauréat', '52,2', '46,9', '33,3'],
            ['Diplôme de l’enseignement supérieur', '54,5', '53,8', '43,7'],
          ],
        },
        source:
          'Élisabeth Algava et Kilian Bloch, « Vingt ans de participation électorale : en 2022, les écarts selon l’âge et le diplôme continuent de se creuser », Insee Première n° 1929, 2022. Vote systématique : avoir voté à tous les tours des élections nationales de l’année (présidentielle et législatives). Champ : inscrits résidant en France métropolitaine.',
      },
    ],
    dureeMinutes: 20,
    corrige: {
      notions: ['Participation électorale', 'Abstention intermittente', 'Intégration sociale', 'Sentiment de compétence politique', 'Cens caché', 'Points de pourcentage'],
      reponseModele:
        '1. Selon l’INSEE, entre 2012 et 2022, la part des inscrits ayant voté à tous les tours des élections nationales est passée de 47,8 % à 37 % pour l’ensemble de la population, soit une baisse de 10,8 points (−22,6 %). Pour les 18-29 ans, elle est passée de 26,8 % à 17,3 %, soit une baisse de 9,5 points, mais de 35,4 % en valeur relative. La baisse est donc proportionnellement bien plus forte chez les jeunes, déjà moins souvent votants systématiques. 2. Le document montre que le vote systématique augmente avec l’âge (17,3 % des 18-29 ans contre 47,7 % des 65 ans et plus en 2022, soit 30,4 points d’écart) et avec le diplôme (28,8 % des non-diplômés contre 43,7 % des diplômés du supérieur). Ces écarts s’expliquent par le degré d’intégration sociale (emploi stable, couple, ancienneté dans la commune chez les plus âgés), par la mal-inscription des jeunes plus mobiles, et par le sentiment de compétence politique, plus fort chez les plus diplômés (le « cens caché » de D. Gaxie). Les jeunes pratiquent plutôt une participation intermittente.',
      erreursAEviter: [
        'Écrire « baisse de 9,5 % » au lieu de « 9,5 points ».',
        'Conclure que les jeunes baissent « moins » que l’ensemble en regardant seulement les points, sans voir la variation relative.',
        'Oublier de définir le vote systématique (note du document).',
      ],
    },
  },
  {
    id: 'off-23-sesj2me1-ec3',
    type: 'EC3',
    chapitres: ['vote'],
    origine: 'officiel',
    titre: 'L’engagement politique dépend de variables sociodémographiques',
    sourceOfficielle: 'Baccalauréat général, session 2023, épreuves normales, Métropole, Mayotte, Antilles-Guyane, jour 2 — sujet 23-SESJ2ME1, épreuve composée, partie 3',
    lienOfficiel: EDUSCOL + 'baccalaur-g-n-ral-2023-sciences-conomiques-et-sociales-133961pdf-98736.pdf',
    remarque: 'Sujet du bac (Terminale, chapitre engagement). Il mobilise aussi les déterminants de la participation électorale vus au chapitre « Le vote » de Première.',
    consigneReformulee: true,
    consigne: 'À l’aide de vos connaissances et du dossier documentaire, vous montrerez que l’engagement politique dépend de variables sociodémographiques.',
    documentsDecrits: [
      'Document 1 : extrait de Nonna Mayer, Sociologie des comportements politiques (2014).',
      'Document 2 : données INSEE (2016).',
      'Document 3 : données d’enquête Ipsos (2022).',
    ],
    dureeMinutes: 60,
    corrige: {
      notions: ['Engagement politique', 'Participation électorale', 'Variables sociodémographiques (âge, diplôme, PCS, sexe)', 'Sentiment de compétence politique', 'Intégration sociale'],
      plan: [
        { titre: 'I. Le diplôme et la catégorie sociale', paragraphes: ['Les plus diplômés et les cadres votent et militent davantage : capital culturel, sentiment de compétence politique, cens caché.'] },
        { titre: 'II. L’âge et la génération', paragraphes: ['Participation électorale plus faible et plus intermittente chez les jeunes, qui privilégient d’autres formes d’engagement (manifestations, pétitions, engagement en ligne).'] },
        { titre: 'III. Le sexe', paragraphes: ['Écarts historiques d’engagement entre femmes et hommes (militantisme, candidatures), qui se réduisent pour le vote.'] },
      ],
      erreursAEviter: ['Ne parler que du vote alors que l’engagement inclut le militantisme, la manifestation, la pétition.', 'Ne pas exploiter les trois documents.'],
    },
  },
  {
    id: 'off-23-sesj1me1-ec2',
    type: 'EC2',
    chapitres: ['marches-imparfaits'],
    origine: 'officiel',
    titre: 'Brevets, droits de propriété et croissance au Royaume-Uni',
    sourceOfficielle: 'Baccalauréat général, session 2023, épreuves normales, Métropole, Mayotte, Antilles-Guyane, jour 1 — sujet 23-SESJ1ME1, épreuve composée, partie 2',
    lienOfficiel: EDUSCOL + 'baccalaur-g-n-ral-2023-sciences-conomiques-et-sociales-1338500pdf-98592.pdf',
    remarque:
      'Sujet du bac (Terminale, chapitre croissance). En Première, il permet de travailler la lecture d’indices (base 100) et la notion de brevet / monopole d’innovation.',
    consigneReformulee: true,
    consigne:
      'Document : évolution du nombre de brevets et du PIB par habitant au Royaume-Uni, en indice base 100 en 2011, de 2011 à 2019. 1. Caractérisez l’évolution du nombre de brevets (2 points). 2. Montrez le rôle des droits de propriété sur la croissance économique (4 points).',
    documentsDecrits: ['Graphique : nombre de brevets et PIB par habitant au Royaume-Uni, indices base 100 en 2011, 2011-2019 (Organisation mondiale de la propriété intellectuelle, 2022). Lire les valeurs sur le graphique du PDF officiel.'],
    dureeMinutes: 20,
    corrige: {
      notions: ['Indice base 100', 'Brevet', 'Droit de propriété', 'Monopole d’innovation', 'Incitation à innover'],
      reponseModele:
        '1. Méthode : lire la valeur de l’indice des brevets en 2019 sur le graphique, puis écrire « entre 2011 et 2019, le nombre de brevets a augmenté de (indice − 100) % ». Décrire aussi les éventuelles phases (baisse, hausse). 2. Le brevet est un droit de propriété qui donne à l’innovateur un monopole temporaire d’exploitation : il peut fixer un prix supérieur au coût et rentabiliser ses dépenses de recherche. Cette perspective de profit incite à innover ; les innovations augmentent la productivité et la croissance. En échange, l’invention est publiée, ce qui diffuse les connaissances. Nuance : un brevet trop long ou trop large freine la diffusion et la concurrence.',
      erreursAEviter: [
        'Lire un écart d’indices entre deux dates qui ne sont pas la base comme un taux de variation.',
        'Oublier que le monopole lié au brevet est temporaire.',
      ],
    },
  },
];
