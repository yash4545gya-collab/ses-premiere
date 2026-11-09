import type { Sujet } from '../types';

/**
 * SUJETS TYPE — NON OFFICIELS
 * Sujets originaux rédigés au format de l'épreuve. Données fictives signalées comme telles ;
 * chiffres des corrigés vérifiés dans scripts/verifier-calculs.mjs.
 */
export const SUJETS_TYPE: Sujet[] = [
  /* ---------------- I. Marché concurrentiel ---------------- */
  {
    id: 'type-marche-ec1',
    type: 'EC1',
    chapitres: ['marche-concurrentiel'],
    origine: 'type',
    titre: 'La formation du prix sur un marché concurrentiel',
    consigne: 'Expliquez comment se forme le prix d’équilibre sur un marché concurrentiel. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Marché concurrentiel', 'Preneur de prix', 'Offre', 'Demande', 'Prix d’équilibre', 'Excès d’offre', 'Excès de demande'],
      arguments: [
        'Définir le marché concurrentiel : nombreux offreurs et demandeurs preneurs de prix.',
        'La demande est décroissante (le bien devient relativement plus cher, budget limité) ; l’offre est croissante (coût marginal croissant : produire plus n’est rentable que si le prix monte).',
        'Si le prix est trop élevé, excès d’offre → les vendeurs baissent leurs prix ; s’il est trop bas, excès de demande → le prix monte.',
        'L’ajustement s’arrête au prix pour lequel quantité offerte = quantité demandée. Exemple chiffré : Qd = 20 − 2P et Qo = 2P − 4 donnent P = 6 et Q = 8.',
      ],
      erreursAEviter: ['Oublier de définir le prix d’équilibre.', 'Dire que les offreurs « fixent » le prix en concurrence.', 'Confondre demande et quantité demandée.'],
    },
  },
  {
    id: 'type-marche-ec2',
    type: 'EC2',
    chapitres: ['marche-concurrentiel'],
    origine: 'type',
    titre: 'Le marché des fraises et l’effet d’une taxe',
    consigne:
      '1. À l’aide du document, déterminez le prix et la quantité d’équilibre (2 points). 2. Une taxe de 1 € par barquette est payée par les producteurs : à l’aide d’un calcul, montrez ses effets sur le prix payé, le prix reçu et la quantité échangée (4 points).',
    documents: [
      {
        titre: 'Quantités offertes et demandées de barquettes de fraises selon le prix (en milliers de barquettes par semaine)',
        tableau: {
          entetes: ['Prix (€)', '2', '3', '4', '5', '6'],
          lignes: [
            ['Quantité demandée', '100', '80', '60', '40', '20'],
            ['Quantité offerte', '20', '40', '60', '80', '100'],
          ],
        },
        source: 'Données fictives (demande : Qd = 140 − 20P ; offre : Qo = 20P − 20)',
      },
    ],
    dureeMinutes: 20,
    corrige: {
      notions: ['Équilibre', 'Taxe forfaitaire unitaire', 'Déplacement de la courbe d’offre', 'Perte sèche'],
      reponseModele:
        '1. Au prix de 4 €, la quantité offerte est égale à la quantité demandée : 60 000 barquettes. C’est l’équilibre. À 5 €, il y aurait un excès d’offre de 40 000 barquettes (80 − 40), qui ferait baisser le prix. 2. La taxe augmente de 1 € le coût de chaque barquette pour les producteurs : l’offre se déplace vers le haut de 1 €. Pour un prix payé P, les producteurs ne reçoivent que P − 1, et l’offre devient 20(P − 1) − 20 = 20P − 40. Le nouvel équilibre est atteint quand 140 − 20P = 20P − 40, soit P = 4,50 €. Les consommateurs paient 4,50 € (+0,50 €), les producteurs reçoivent 3,50 € (−0,50 €) et la quantité échangée tombe à 50 000 barquettes (−10 000). L’État perçoit 50 000 €. La charge de la taxe est partagée à parts égales, car les deux courbes ont ici des pentes de même valeur absolue.',
      erreursAEviter: ['Ajouter 1 € au prix d’équilibre sans recalculer la quantité.', 'Croire que la taxe est entièrement payée par les producteurs.'],
    },
  },

  /* ---------------- II. Marchés imparfaits ---------------- */
  {
    id: 'type-imparfaits-ec1',
    type: 'EC1',
    chapitres: ['marches-imparfaits'],
    origine: 'type',
    titre: 'Pourquoi les firmes en oligopole ont intérêt à s’entendre',
    consigne: 'À l’aide du dilemme du prisonnier, montrez que les firmes en oligopole ont intérêt à former des ententes. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Oligopole', 'Interdépendance stratégique', 'Dilemme du prisonnier', 'Stratégie dominante', 'Entente'],
      arguments: [
        'Définir l’oligopole : quelques offreurs interdépendants.',
        'Présenter une matrice : prix élevé/élevé (10 ; 10), bas/élevé (14 ; 3), élevé/bas (3 ; 14), bas/bas (5 ; 5).',
        'Le prix bas est une stratégie dominante pour chaque firme (14 > 10 et 5 > 3) : sans coopération, elles aboutissent à (5 ; 5).',
        'En s’entendant sur un prix élevé, elles gagneraient 10 chacune : d’où l’intérêt d’une entente, illicite car elle réduit le surplus du consommateur, et instable (tentation de tricher).',
      ],
      erreursAEviter: ['Oublier de conclure sur l’entente.', 'Présenter les firmes comme irrationnelles.'],
    },
  },

  /* ---------------- III. Défaillances du marché ---------------- */
  {
    id: 'type-defaillances-ec1',
    type: 'EC1',
    chapitres: ['defaillances-marche'],
    origine: 'type',
    titre: 'Sélection adverse et aléa moral',
    consigne: 'Distinguez sélection adverse et aléa moral en les illustrant chacun par un exemple. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Asymétrie d’information', 'Sélection adverse', 'Aléa moral'],
      arguments: [
        'Point commun : asymétrie d’information entre les parties.',
        'Sélection adverse : information cachée avant le contrat, sur la qualité. Exemple d’Akerlof : l’acheteur propose un prix moyen, les vendeurs de bonnes voitures se retirent, le marché peut disparaître.',
        'Aléa moral : comportement caché après le contrat. Exemple : un assuré bien couvert devient moins prudent ; réponse : franchise, bonus-malus.',
      ],
      erreursAEviter: ['Inverser les deux notions.', 'Ne donner qu’un exemple pour les deux.'],
    },
  },

  /* ---------------- IV. Financement ---------------- */
  {
    id: 'type-financement-ec1',
    type: 'EC1',
    chapitres: ['financement'],
    origine: 'type',
    titre: 'Les effets contradictoires des dépenses publiques',
    consigne: 'Montrez qu’une politique de hausse des dépenses publiques peut avoir des effets contradictoires sur l’activité économique. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Dépenses publiques', 'Déficit budgétaire', 'Effet de relance', 'Marché des fonds prêtables', 'Effet d’éviction'],
      arguments: [
        'Effet de relance (Keynes) : dépenses ↑ → demande ↑ → production et emploi ↑ → revenus et consommation ↑.',
        'Effet d’éviction : si les dépenses sont financées par l’emprunt, la demande de fonds prêtables ↑ → taux d’intérêt ↑ → investissement privé ↓.',
        'L’effet net dépend du contexte : chômage élevé et taux bas favorisent la relance ; plein emploi et taux élevés renforcent l’éviction.',
      ],
      erreursAEviter: ['Ne présenter qu’un des deux effets.', 'Oublier le lien entre déficit et emprunt.'],
    },
  },
  {
    id: 'type-financement-ec2',
    type: 'EC2',
    chapitres: ['financement'],
    origine: 'type',
    titre: 'Le taux d’autofinancement des entreprises',
    consigne:
      '1. Présentez le document et calculez l’évolution du taux d’autofinancement entre 2023 et 2026 (2 points). 2. Montrez que les entreprises disposent d’autres sources de financement que l’autofinancement (4 points).',
    documents: [
      {
        titre: 'Taux d’autofinancement des sociétés non financières d’un pays (épargne brute / investissement, en %)',
        tableau: {
          entetes: ['Année', '2023', '2024', '2025', '2026'],
          lignes: [['Taux d’autofinancement (%)', '95', '110', '90', '80']],
        },
        source: 'Données fictives',
      },
    ],
    dureeMinutes: 20,
    corrige: {
      notions: ['Autofinancement', 'Épargne brute', 'Besoin de financement', 'Financement intermédié', 'Financement direct', 'Action', 'Obligation'],
      reponseModele:
        '1. Ce tableau (données fictives) présente le taux d’autofinancement des sociétés non financières, c’est-à-dire le rapport entre leur épargne brute et leurs investissements. Il est passé de 95 % en 2023 à 80 % en 2026, soit une baisse de 15 points (−15,8 %). En 2024, il dépassait 100 % : les entreprises finançaient alors entièrement leurs investissements par leurs ressources propres. En 2026, elles ne financent plus que 80 % de leurs investissements par leur épargne : elles ont un besoin de financement correspondant à 20 % de l’investissement. 2. Ce besoin est couvert par le financement externe : intermédié (emprunts bancaires : la banque crée de la monnaie en accordant le crédit), ou direct sur les marchés financiers, en émettant des actions (titres de propriété, sans remboursement mais avec partage du pouvoir et des dividendes) ou des obligations (titres de dette, remboursées avec intérêts, sans perte de contrôle).',
      erreursAEviter: ['Écrire « baisse de 15 % » au lieu de « 15 points ».', 'Confondre action et obligation.'],
    },
  },

  /* ---------------- V. Monnaie ---------------- */
  {
    id: 'type-monnaie-ec1',
    type: 'EC1',
    chapitres: ['monnaie'],
    origine: 'type',
    titre: 'Les crédits font les dépôts',
    consigne: 'À l’aide des bilans simplifiés d’une banque et d’une entreprise, montrez que le crédit bancaire crée de la monnaie. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Création monétaire', 'Monnaie scripturale', 'Bilan', 'Créance', 'Dépôt à vue', 'Destruction monétaire'],
      arguments: [
        'La banque accorde 10 000 € de crédit : à son actif, une créance de 10 000 € ; à son passif, un dépôt de 10 000 € au nom de l’entreprise.',
        'Pour l’entreprise : à l’actif, un dépôt (monnaie) de 10 000 € ; au passif, une dette de 10 000 €.',
        'Ce dépôt n’existait pas : la masse monétaire augmente de 10 000 €. « Les crédits font les dépôts. »',
        'Au remboursement, dépôt et créance disparaissent : destruction monétaire. Limites : besoin de monnaie centrale, demande de crédit solvable.',
      ],
      erreursAEviter: ['Dire que la banque prête l’épargne de ses clients.', 'Placer le crédit au passif de la banque.'],
    },
  },

  /* ---------------- VI. Socialisation ---------------- */
  {
    id: 'type-socialisation-ec1',
    type: 'EC1',
    chapitres: ['socialisation'],
    origine: 'type',
    titre: 'Une socialisation différenciée selon le milieu social',
    consigne: 'Montrez que la socialisation varie selon le milieu social. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Socialisation primaire', 'Normes et valeurs', 'Habitus', 'Capital culturel', 'Aspirations'],
      arguments: [
        'Les familles transmettent des pratiques différentes selon leurs ressources : rapport à la lecture, au langage, aux loisirs, à l’école.',
        'Habitus (Bourdieu) : dispositions durables propres à un milieu, intériorisées.',
        'Ces différences se traduisent par des goûts et des aspirations scolaires et professionnelles différents (anticipation de l’avenir).',
        'Exemple : les enfants de familles diplômées sont plus familiers de la culture attendue par l’école.',
      ],
      erreursAEviter: ['Confondre milieu social et revenu seulement.', 'Présenter la socialisation comme un destin.'],
    },
  },
  {
    id: 'type-socialisation-dissertation',
    type: 'Dissertation',
    chapitres: ['socialisation'],
    origine: 'type',
    titre: 'La socialisation détermine-t-elle les comportements des individus ?',
    consigne: 'La socialisation détermine-t-elle les comportements des individus ?',
    dureeMinutes: 120,
    corrige: {
      notions: ['Socialisation primaire et secondaire', 'Habitus', 'Socialisation différenciée', 'Pluralité des influences', 'Trajectoire improbable'],
      plan: [
        {
          titre: 'I. La socialisation façonne fortement les comportements',
          paragraphes: [
            'A. La socialisation primaire transmet des normes, des valeurs et un habitus durables (Durkheim, Bourdieu).',
            'B. Elle est différenciée selon le milieu social et le genre, ce qui explique des régularités de comportements et d’aspirations.',
          ],
        },
        {
          titre: 'II. Mais elle ne détermine pas mécaniquement les individus',
          paragraphes: [
            'A. Les socialisations secondaires (professionnelle, conjugale, politique) transforment les dispositions acquises.',
            'B. La pluralité d’influences parfois contradictoires explique des trajectoires improbables (Lahire).',
          ],
        },
      ],
      erreursAEviter: ['Répondre par « oui » ou « non » sans nuancer.', 'Oublier les socialisations secondaires.'],
    },
  },

  /* ---------------- VII. Liens sociaux ---------------- */
  {
    id: 'type-liens-ec1',
    type: 'EC1',
    chapitres: ['liens-sociaux'],
    origine: 'type',
    titre: 'Les critères des PCS',
    consigne: 'Présentez les critères de construction des professions et catégories socioprofessionnelles (PCS). (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['PCS', 'Statut', 'Qualification', 'Position hiérarchique', 'Groupe socioprofessionnel'],
      arguments: [
        'Les PCS (INSEE, rénovées en 2020) classent les individus selon leur situation professionnelle, en groupes supposés homogènes.',
        'Critères : statut (indépendant / salarié), métier, qualification, position hiérarchique, secteur d’activité, taille de l’entreprise pour les indépendants.',
        'Exemples : un infirmier salarié → professions intermédiaires ; un boulanger à son compte → artisans, commerçants et chefs d’entreprise.',
      ],
      erreursAEviter: ['Citer le revenu comme critère.', 'Oublier d’illustrer.'],
    },
  },
  {
    id: 'type-liens-ec3',
    type: 'EC3',
    chapitres: ['liens-sociaux'],
    origine: 'type',
    titre: 'Ce qui fragilise les liens sociaux',
    consigne: 'À l’aide du dossier documentaire et de vos connaissances, vous montrerez que plusieurs facteurs exposent les individus à l’affaiblissement de leurs liens sociaux. (10 points)',
    documents: [
      {
        titre: 'Document 1 — Part des personnes déclarant n’avoir eu aucune rencontre avec leur famille ou leurs amis au cours de l’année, selon la situation (en %)',
        tableau: {
          entetes: ['Situation', 'En emploi stable', 'En emploi précaire', 'Au chômage', 'Ensemble'],
          lignes: [['Part (%)', '6', '11', '15', '9']],
        },
        source: 'Données fictives',
      },
      {
        titre: 'Document 2 — Témoignage',
        contenu:
          '« Depuis mon licenciement, je ne vois plus mes collègues. Avec mes revenus, je refuse les invitations au restaurant. Après mon divorce, je me suis retrouvé seul dans un quartier où je ne connais personne. »',
        source: 'Témoignage rédigé pour l’exercice',
      },
    ],
    dureeMinutes: 60,
    corrige: {
      notions: ['Lien social', 'Lien de participation organique', 'Précarité', 'Isolement', 'Rupture familiale', 'Ségrégation', 'Disqualification sociale'],
      plan: [
        {
          titre: 'I. La précarité et le chômage affaiblissent le lien de participation organique',
          paragraphes: [
            'Perte des collègues, de la reconnaissance et des revenus. Document 1 : 15 % des chômeurs n’ont vu ni famille ni amis dans l’année, contre 6 % des personnes en emploi stable (2,5 fois plus).',
          ],
        },
        {
          titre: 'II. Les ruptures familiales et l’isolement fragilisent le lien de filiation et les liens électifs',
          paragraphes: ['Divorce, deuil, éloignement (document 2) ; personnes âgées seules.'],
        },
        {
          titre: 'III. Les ségrégations et le cumul des fragilités',
          paragraphes: ['Quartiers ségrégués : peu de liens faibles vers l’emploi ; les fragilités se cumulent (Paugam : disqualification sociale ; Castel : désaffiliation).'],
        },
      ],
      erreursAEviter: ['Ne pas citer précisément les documents.', 'Oublier de montrer le cumul des facteurs.'],
    },
  },

  /* ---------------- VIII. Déviance ---------------- */
  {
    id: 'type-deviance-ec1',
    type: 'EC1',
    chapitres: ['deviance'],
    origine: 'type',
    titre: 'Déviance et délinquance',
    consigne: 'Distinguez déviance et délinquance en illustrant votre réponse. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Norme sociale', 'Norme juridique', 'Déviance', 'Délinquance', 'Sanction'],
      arguments: [
        'Déviance : transgression d’une norme (sociale ou juridique) qui expose à une sanction ; elle est relative.',
        'Délinquance : transgression d’une norme juridique pénale (contravention, délit, crime).',
        'Toute délinquance est déviante, pas l’inverse : arriver en pyjama en cours est déviant mais pas délinquant ; le vol est délinquant.',
        'Nuance : certaines infractions courantes sont peu réprouvées socialement (petits excès de vitesse).',
      ],
      erreursAEviter: ['Présenter les deux notions comme synonymes.', 'Oublier les exemples.'],
    },
  },
  {
    id: 'type-deviance-ec2',
    type: 'EC2',
    chapitres: ['deviance'],
    origine: 'type',
    titre: 'Victimes et plaintes : le chiffre noir',
    consigne:
      '1. À l’aide d’un calcul, comparez le taux de plainte selon le type d’atteinte (2 points). 2. Montrez que les statistiques administratives ne mesurent qu’une partie de la délinquance (4 points).',
    documents: [
      {
        titre: 'Victimes déclarées dans une enquête de victimation et plaintes déposées, par type d’atteinte, sur un an',
        tableau: {
          entetes: ['Atteinte', 'Victimes (enquête)', 'Plaintes déposées'],
          lignes: [
            ['Vols de vélos', '400 000', '100 000'],
            ['Violences physiques', '600 000', '180 000'],
            ['Cambriolages', '300 000', '210 000'],
          ],
        },
        source: 'Données fictives',
      },
    ],
    dureeMinutes: 20,
    corrige: {
      notions: ['Enquête de victimation', 'Statistiques administratives', 'Taux de plainte', 'Chiffre noir'],
      reponseModele:
        '1. Le taux de plainte (plaintes / victimes × 100) est de 25 % pour les vols de vélos (100 000 / 400 000), de 30 % pour les violences physiques et de 70 % pour les cambriolages (210 000 / 300 000). Les victimes de cambriolage portent donc plainte 2,8 fois plus souvent que celles de vols de vélos. 2. Les statistiques de police et de gendarmerie ne recensent que les faits enregistrés, essentiellement les plaintes. Or 75 % des victimes de vols de vélos et 70 % des victimes de violences ne portent pas plainte : ces faits forment le chiffre noir. Les victimes portent plainte quand l’atteinte est grave ou quand l’assurance l’exige (cambriolage) ; elles y renoncent quand le préjudice est faible, par honte ou peur des représailles (violences), ou par défiance. Les enquêtes de victimation permettent d’estimer une partie de ce chiffre noir.',
      erreursAEviter: ['Calculer victimes / plaintes au lieu de plaintes / victimes.', 'Conclure que les cambriolages sont plus nombreux parce qu’ils ont plus de plaintes.'],
    },
  },

  /* ---------------- IX. Opinion publique ---------------- */
  {
    id: 'type-opinion-ec1',
    type: 'EC1',
    chapitres: ['opinion-publique'],
    origine: 'type',
    titre: 'Deux critiques des sondages',
    consigne: 'Présentez deux critiques adressées aux sondages d’opinion. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Sondage', 'Échantillon représentatif', 'Marge d’erreur', 'Opinion publique'],
      arguments: [
        'Critique méthodologique : un sondage n’est qu’une estimation (marge d’erreur d’environ ± 3 points pour 1 000 personnes) ; formulation et ordre des questions orientent les réponses.',
        'Critique de fond (Bourdieu, 1973) : tout le monde n’a pas d’opinion, toutes les opinions ne se valent pas, les questions sont imposées par les commanditaires.',
        'Possible : les sondages contribuent à fabriquer l’opinion qu’ils mesurent (Champagne).',
      ],
      erreursAEviter: ['Confondre méthode des quotas et tirage au sort.', 'Ne présenter qu’une critique.'],
    },
  },
  {
    id: 'type-opinion-dissertation',
    type: 'Dissertation',
    chapitres: ['opinion-publique'],
    origine: 'type',
    titre: 'Les sondages mesurent-ils l’opinion publique ?',
    consigne: 'Les sondages mesurent-ils l’opinion publique ?',
    dureeMinutes: 120,
    corrige: {
      notions: ['Opinion publique', 'Sondage', 'Échantillon représentatif', 'Méthode des quotas', 'Marge d’erreur', 'Démocratie d’opinion'],
      plan: [
        {
          titre: 'I. Des outils qui permettent de connaître l’opinion du plus grand nombre',
          paragraphes: [
            'A. Des techniques rigoureuses : échantillon représentatif, quotas, redressement, marge d’erreur.',
            'B. Une mesure en continu entre les élections, qui donne la parole à tous (Gallup, 1936).',
          ],
        },
        {
          titre: 'II. Mais une mesure qui construit aussi ce qu’elle mesure',
          paragraphes: [
            'A. Les limites techniques et les postulats contestables (Bourdieu).',
            'B. Les sondages contribuent à forger l’opinion et transforment la démocratie (Champagne, Manin).',
          ],
        },
      ],
      erreursAEviter: ['Oublier de définir l’opinion publique.', 'Ne parler que des sondages électoraux.'],
    },
  },

  /* ---------------- X. Vote ---------------- */
  {
    id: 'type-vote-ec1',
    type: 'EC1',
    chapitres: ['vote'],
    origine: 'type',
    titre: 'Un acte à la fois individuel et collectif',
    consigne: 'Montrez que le vote est à la fois un acte individuel et un acte collectif. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Vote', 'Électeur rationnel', 'Offre électorale', 'Appartenances sociales', 'Identification partisane'],
      arguments: [
        'Acte individuel : l’électeur exprime des préférences, selon les enjeux, le contexte et l’offre électorale (vote sur enjeux, vote utile).',
        'Acte collectif : il traduit des appartenances sociales (Lazarsfeld : on « pense politiquement comme on est socialement ») et une identification partisane héritée.',
        'Exemple : la pratique religieuse catholique a longtemps orienté le vote à droite ; un électeur peut aussi changer de vote selon le bilan du gouvernement.',
      ],
      erreursAEviter: ['Ne traiter qu’une des deux dimensions.'],
    },
  },

  /* ---------------- XI. Risques et protection sociale ---------------- */
  {
    id: 'type-risques-ec1',
    type: 'EC1',
    chapitres: ['risques-protection-sociale'],
    origine: 'type',
    titre: 'Logique d’assurance et logique d’assistance',
    consigne: 'Distinguez logique d’assurance et logique d’assistance dans la protection sociale. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Protection sociale', 'Logique d’assurance', 'Logique d’assistance', 'Cotisations sociales', 'Minima sociaux', 'Solidarité'],
      arguments: [
        'Assurance (Bismarck) : cotisations sur les salaires ; prestations réservées aux cotisants et liées aux cotisations (retraites, indemnités chômage) ; solidarité horizontale.',
        'Assistance (Beveridge) : financement par l’impôt ; prestations sous conditions de ressources, sans contrepartie de cotisation (RSA) ; solidarité verticale.',
        'Les deux reposent sur la solidarité collective et coexistent dans le système français.',
      ],
      erreursAEviter: ['Inverser les deux logiques.', 'Oublier les exemples.'],
    },
  },
  {
    id: 'type-risques-ec3',
    type: 'EC3',
    chapitres: ['risques-protection-sociale'],
    origine: 'type',
    titre: 'Les effets du partage des risques',
    consigne: 'À l’aide du dossier documentaire et de vos connaissances, vous montrerez que le partage des risques a des effets à la fois positifs et négatifs. (10 points)',
    documents: [
      {
        titre: 'Document 1 — Mutualisation dans une assurance habitation',
        tableau: {
          entetes: ['Assurés', 'Probabilité de sinistre', 'Coût d’un sinistre', 'Prime pure par assuré'],
          lignes: [['1 000', '1 %', '20 000 €', '200 €']],
        },
        source: 'Données fictives',
      },
      {
        titre: 'Document 2 — Témoignage d’une créatrice d’entreprise',
        contenu:
          '« Sans l’assurance chômage pendant ma création d’entreprise, je n’aurais jamais quitté mon emploi salarié. Je savais que, si mon projet échouait, je ne perdrais pas tout. »',
        source: 'Témoignage rédigé pour l’exercice',
      },
      {
        titre: 'Document 3 — Fréquence des sinistres avant et après la suppression d’une franchise dans une mutuelle',
        tableau: {
          entetes: ['', 'Avec franchise', 'Sans franchise'],
          lignes: [['Sinistres déclarés pour 1 000 assurés', '40', '52']],
        },
        source: 'Données fictives',
      },
    ],
    dureeMinutes: 60,
    corrige: {
      notions: ['Mutualisation', 'Aversion au risque', 'Bien-être', 'Incitation à innover', 'Aléa moral', 'Franchise'],
      plan: [
        {
          titre: 'I. Des effets positifs',
          paragraphes: [
            'A. La mutualisation transforme un risque lourd et rare en charge faible et certaine (document 1 : 200 € par assuré couvrent 10 sinistres de 20 000 €) : sécurité et bien-être.',
            'B. Le partage des risques incite à entreprendre et à innover (document 2).',
          ],
        },
        {
          titre: 'II. Des effets négatifs',
          paragraphes: [
            'A. L’aléa moral : protégés, les assurés sont moins prudents. Document 3 : sans franchise, les sinistres passent de 40 à 52 pour 1 000 assurés (+30 %).',
            'B. Les réponses : franchise, bonus-malus, prévention.',
          ],
        },
      ],
      erreursAEviter: ['Oublier l’aléa moral.', 'Ne pas calculer à partir du document 3.'],
    },
  },

  /* ---------------- XII. Entreprises ---------------- */
  {
    id: 'type-entreprises-ec1',
    type: 'EC1',
    chapitres: ['entreprises'],
    origine: 'type',
    titre: 'Entrepreneur, manager, actionnaire',
    consigne: 'Distinguez trois figures de l’entrepreneur selon leur fonction économique. (4 points)',
    dureeMinutes: 15,
    corrige: {
      notions: ['Entrepreneur-innovateur', 'Manager', 'Actionnaire', 'Séparation de la propriété et du pouvoir'],
      arguments: [
        'Entrepreneur-innovateur (Schumpeter) : introduit une innovation et en assume le risque.',
        'Manager : dirigeant, souvent salarié, qui gère l’entreprise sans en être propriétaire (Chandler).',
        'Actionnaire : propriétaire d’une part du capital, perçoit des dividendes et vote en AG.',
        'Dans les grandes sociétés, propriété et pouvoir sont séparés (Berle et Means), d’où des enjeux de gouvernance.',
      ],
      erreursAEviter: ['Confondre statut juridique et fonction économique.'],
    },
  },
  {
    id: 'type-entreprises-dissertation',
    type: 'Dissertation',
    chapitres: ['entreprises'],
    origine: 'type',
    titre: 'L’entreprise est-elle un lieu de coopération ou de conflit ?',
    consigne: 'L’entreprise est-elle un lieu de coopération ou de conflit ?',
    dureeMinutes: 120,
    corrige: {
      notions: ['Parties prenantes', 'Coopération', 'Hiérarchie', 'Subordination', 'Conflit', 'Négociation collective', 'Gouvernance'],
      plan: [
        {
          titre: 'I. Un lieu de coopération organisée',
          paragraphes: [
            'A. Produire suppose de coordonner le travail de chacun (division du travail, équipes, culture d’entreprise).',
            'B. Les parties prenantes ont un intérêt commun à la réussite de l’entreprise ; formes coopératives (SCOP).',
          ],
        },
        {
          titre: 'II. Mais aussi un lieu de hiérarchie et de conflits',
          paragraphes: [
            'A. Relations hiérarchiques et subordination ; intérêts divergents sur le partage de la valeur ajoutée.',
            'B. Les conflits sont régulés : grève, négociation collective, instances représentatives, gouvernance partenariale.',
          ],
        },
      ],
      erreursAEviter: ['Choisir un seul camp sans nuance.', 'Oublier les parties prenantes autres que salariés et dirigeants.'],
    },
  },
];
