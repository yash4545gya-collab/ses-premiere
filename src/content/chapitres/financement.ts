import type { Chapitre } from '../types';

/**
 * Chapitre : Comment les agents économiques se financent-ils ?
 * Chiffres d'exemple fictifs, vérifiés dans scripts/verifier-calculs.mjs.
 */
export const financement: Chapitre = {
  id: 'financement',
  titre: 'Comment les agents économiques se financent-ils ?',
  titreCourt: 'Financement de l’économie',
  domaine: 'Science économique',
  objectifs: [
    'Comprendre que le financement consiste à couvrir des besoins de financement par des capacités de financement.',
    'Comprendre que le taux d’intérêt (rémunération du prêteur, coût du crédit pour l’emprunteur) est le prix sur le marché des fonds prêtables.',
    'Savoir que le revenu disponible des ménages se répartit entre consommation et épargne, et qu’ils peuvent dégager des besoins ou des capacités de financement.',
    'Savoir ce qu’est l’excédent brut d’exploitation ; comprendre que les entreprises se financent par autofinancement et financement externe (emprunts bancaires, actions, obligations).',
    'Savoir que le solde budgétaire est la différence entre recettes et dépenses de l’État ; comprendre que le déficit est financé par l’emprunt et qu’une politique de dépenses publiques peut avoir des effets contradictoires (relance / effet d’éviction).',
  ],

  essentiel: {
    problematique:
      'Certains agents dépensent plus qu’ils ne gagnent, d’autres moins : comment les fonds circulent-ils des seconds vers les premiers, à quel prix, et quelles sont les particularités du financement des ménages, des entreprises et de l’État ?',
    parties: [
      {
        titre: 'Besoins et capacités de financement : le rôle du taux d’intérêt',
        blocs: [
          {
            type: 'texte',
            texte:
              'Un agent dégage une **capacité de financement** lorsque son épargne est supérieure à ses dépenses d’investissement : il peut prêter. À l’inverse, il a un **besoin de financement** lorsque son épargne ne suffit pas à financer ses investissements : il doit emprunter ou trouver d’autres fonds. Le **financement de l’économie** consiste à mettre en relation ces deux types d’agents.',
          },
          {
            type: 'formule',
            tex: '\\text{Capacité }(+)\\text{ ou besoin }(-)\\text{ de financement} = \\text{Épargne} - \\text{Investissement}',
            legende: 'Version simplifiée',
          },
          {
            type: 'texte',
            texte:
              'Le financement peut être **interne** (l’agent utilise sa propre épargne : c’est l’autofinancement) ou **externe**. Le financement externe prend deux formes : le **financement intermédié** (indirect), lorsqu’une banque collecte l’épargne et accorde des crédits, et le **financement direct** (de marché), lorsque l’agent à besoin de financement émet des titres (actions, obligations) achetés directement par les agents à capacité de financement sur les **marchés financiers**.',
          },
          { type: 'schema', id: 'circuit-financement' },
          {
            type: 'texte',
            texte:
              'Le **taux d’intérêt** est à la fois la **rémunération du prêteur** (qui renonce à disposer de son argent et prend un risque) et le **coût du crédit pour l’emprunteur**. Il s’analyse comme le **prix sur le marché des fonds prêtables**, où se rencontrent l’offre de fonds (l’épargne des agents à capacité de financement) et la demande de fonds (celle des agents à besoin de financement).',
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi l’offre de fonds augmente avec le taux',
            etapes: [
              'Le taux d’intérêt augmente',
              'Prêter rapporte davantage',
              'Les agents épargnent et prêtent plus',
              'L’offre de fonds prêtables augmente (et la demande diminue, car emprunter coûte plus cher)',
            ],
          },
          {
            type: 'texte',
            texte:
              'Le taux dépend aussi du **risque** : plus l’emprunteur risque de ne pas rembourser, plus le prêteur exige une **prime de risque**. C’est pourquoi un État jugé fiable emprunte moins cher qu’une jeune entreprise, et un crédit à 20 ans coûte souvent plus cher qu’un crédit à 1 an. Il faut enfin distinguer le **taux nominal** (celui qui est affiché) du **taux réel**, qui tient compte de l’inflation.',
          },
          { type: 'formule', tex: '\\text{Taux réel} \\approx \\text{taux nominal} - \\text{taux d’inflation}', legende: 'Approximation valable pour des taux faibles' },
          {
            type: 'texte',
            texte:
              'Exemple (données fictives) : un prêt à 4 % alors que les prix augmentent de 1,5 % rapporte en réalité environ 2,5 % de pouvoir d’achat au prêteur (2,46 % en calcul exact : $1{,}04 / 1{,}015 - 1$).',
          },
        ],
      },
      {
        titre: 'Le financement des ménages et des entreprises',
        blocs: [
          {
            type: 'texte',
            texte:
              'Le **revenu disponible** des ménages (revenus d’activité et de la propriété, plus les prestations sociales, moins les impôts directs et les cotisations sociales) se répartit entre **consommation** et **épargne**. Le **taux d’épargne** rapporte l’épargne au revenu disponible.',
          },
          { type: 'formule', tex: '\\text{Taux d’épargne} = \\frac{\\text{Épargne}}{\\text{Revenu disponible}} \\times 100' },
          {
            type: 'texte',
            texte:
              'Exemple (données fictives) : un ménage dispose de 2 500 € par mois et en consomme 2 200 ; il épargne 300 €, soit un taux d’épargne de 12 %. Dans l’ensemble, les ménages dégagent une **capacité de financement**, mais certains ménages ont un **besoin de financement**, notamment lorsqu’ils achètent un logement (investissement) grâce à un crédit immobilier.',
          },
          {
            type: 'texte',
            texte:
              'Les **entreprises** (sociétés non financières) ont en général un **besoin de financement**, car elles investissent beaucoup. Leurs ressources internes proviennent de l’**excédent brut d’exploitation** (EBE) : ce qui reste de la valeur ajoutée une fois payés les salaires, les cotisations sociales et les impôts sur la production.',
          },
          { type: 'formule', tex: '\\text{EBE} = \\text{Valeur ajoutée} - \\text{Rémunération des salariés} - \\text{Impôts sur la production}', legende: '(subventions d’exploitation ajoutées le cas échéant)' },
          {
            type: 'texte',
            texte:
              'Après avoir payé les intérêts, les impôts sur les bénéfices et les dividendes, l’entreprise conserve une épargne brute qui lui permet de s’**autofinancer**. Exemple (données fictives) : une entreprise dont la valeur ajoutée est de 500 verse 300 de salaires et cotisations et 20 d’impôts sur la production : son EBE est de 180. Si elle investit 250 et dispose de 150 d’épargne brute, son **taux d’autofinancement** est de 60 % ; elle doit trouver 100 à l’extérieur.',
          },
          {
            type: 'tableau',
            titre: 'Les sources de financement de l’entreprise',
            entetes: ['Source', 'Comment', 'Avantages', 'Limites'],
            lignes: [
              ['Autofinancement', 'Épargne brute de l’entreprise', 'Indépendance, pas d’intérêts à payer', 'Souvent insuffisant pour de gros projets'],
              ['Emprunt bancaire (intermédié)', 'Crédit accordé par une banque', 'Accessible aux PME, montant adapté', 'Intérêts, garanties exigées, endettement'],
              ['Émission d’actions (direct)', 'Vente de parts du capital', 'Pas de remboursement, pas d’intérêts', 'Partage du pouvoir et des bénéfices (dividendes)'],
              ['Émission d’obligations (direct)', 'Emprunt sous forme de titres', 'Pas de perte de contrôle, gros montants', 'Intérêts fixes à payer, remboursement à l’échéance'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Une **action** est un titre de propriété d’une partie du capital d’une société : elle donne droit à une part des bénéfices (le **dividende**, variable) et à un droit de vote en assemblée générale. Une **obligation** est un titre de créance : son détenteur prête à l’émetteur, qui lui verse un intérêt (le **coupon**) et le rembourse à l’échéance. Une obligation de 1 000 € à 3 % rapporte 30 € par an. Les titres sont émis sur le **marché primaire** puis s’échangent sur le **marché secondaire** (la Bourse), ce qui permet à l’épargnant de récupérer son argent avant l’échéance.',
          },
        ],
      },
      {
        titre: 'Le financement de l’État',
        blocs: [
          {
            type: 'texte',
            texte:
              'Les **recettes** de l’État sont surtout **fiscales** (TVA, impôt sur le revenu, impôt sur les sociétés…) et, plus marginalement, **non fiscales** (dividendes des entreprises publiques, amendes, revenus du domaine). Ses **dépenses** financent les services publics (éducation, défense, justice), les transferts et les intérêts de la dette. Le **solde budgétaire** est la différence entre les deux.',
          },
          { type: 'formule', tex: '\\text{Solde budgétaire} = \\text{Recettes} - \\text{Dépenses}' },
          {
            type: 'texte',
            texte:
              'Si les dépenses dépassent les recettes, le solde est négatif : c’est un **déficit budgétaire** (par exemple, recettes de 320 et dépenses de 370 : déficit de 50, données fictives). Ce déficit est financé par l’**emprunt**, essentiellement par l’émission d’obligations d’État (en France, les OAT, obligations assimilables du Trésor). L’accumulation des emprunts non remboursés forme la **dette publique**. En France, la dette des administrations publiques dépasse 3 000 milliards d’euros depuis 2023, soit plus de 110 % du PIB fin 2024 (INSEE).',
          },
          {
            type: 'texte',
            texte:
              'Une politique de dépenses publiques peut avoir des **effets contradictoires** sur l’activité économique :',
          },
          {
            type: 'mecanisme',
            titre: 'Effet de relance (analyse keynésienne)',
            etapes: [
              'L’État augmente ses dépenses (investissements, prestations)',
              'La demande adressée aux entreprises augmente',
              'Elles produisent et embauchent davantage, les revenus augmentent',
              'La consommation et l’activité progressent : relance de la demande',
            ],
          },
          {
            type: 'mecanisme',
            titre: 'Effet d’éviction',
            etapes: [
              'L’État emprunte pour financer son déficit',
              'La demande de fonds prêtables augmente',
              'Le taux d’intérêt monte',
              'L’investissement privé, devenu plus coûteux, recule : il est « évincé »',
            ],
          },
          { type: 'schema', id: 'fonds-pretables' },
          {
            type: 'encadre',
            titre: 'Deux analyses en débat',
            texte:
              'Les keynésiens soulignent l’effet de relance, surtout en période de chômage et de taux bas, quand des capacités de production sont inutilisées. Les libéraux insistent sur l’effet d’éviction et sur le poids futur de la dette (impôts plus élevés demain). L’effet net dépend du contexte : niveau des taux, situation de l’emploi, confiance des agents.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Capacité de financement',
      definition: 'Situation d’un agent dont l’épargne est supérieure à ses dépenses d’investissement ; il peut prêter ou placer la différence.',
      exemple: 'Un ménage qui épargne 300 € par mois sans investir dispose d’une capacité de financement.',
    },
    {
      terme: 'Besoin de financement',
      definition: 'Situation d’un agent dont l’épargne est insuffisante pour financer ses dépenses d’investissement ; il doit emprunter ou se procurer des fonds à l’extérieur.',
      exemple: 'Une entreprise qui investit 250 avec seulement 150 d’épargne a un besoin de financement de 100.',
    },
    {
      terme: 'Épargne',
      definition: 'Part du revenu disponible qui n’est pas consommée.',
      exemple: '2 500 € de revenu disponible, 2 200 € de consommation : 300 € d’épargne.',
    },
    {
      terme: 'Revenu disponible',
      definition: 'Revenu dont disposent les ménages pour consommer et épargner : revenus primaires (activité, propriété) plus prestations sociales, moins impôts directs et cotisations sociales.',
      exemple: 'Un salaire net augmenté des allocations familiales, moins l’impôt sur le revenu.',
    },
    {
      terme: 'Taux d’épargne',
      definition: 'Part du revenu disponible consacrée à l’épargne, exprimée en pourcentage.',
      exemple: '300 / 2 500 × 100 = 12 %.',
    },
    {
      terme: 'Investissement',
      definition: 'Dépense consacrée à l’achat de biens de production durables (équipements, bâtiments, logiciels) ou, pour les ménages, de logements neufs.',
      exemple: 'Une entreprise achète un robot de soudure.',
    },
    {
      terme: 'Excédent brut d’exploitation (EBE)',
      definition: 'Solde de la valeur ajoutée après paiement de la rémunération des salariés (salaires et cotisations) et des impôts sur la production (subventions d’exploitation ajoutées) ; il mesure les ressources dégagées par l’activité de l’entreprise.',
      exemple: 'VA de 500, rémunération des salariés de 300, impôts sur la production de 20 : EBE de 180.',
    },
    {
      terme: 'Autofinancement',
      definition: 'Financement des investissements d’une entreprise par ses propres ressources (son épargne brute), sans recours à l’extérieur.',
      exemple: 'Une boulangerie finance un nouveau four avec les bénéfices mis de côté.',
    },
    {
      terme: 'Taux d’autofinancement',
      definition: 'Rapport entre l’épargne brute et l’investissement, exprimé en pourcentage ; au-delà de 100 %, l’entreprise finance seule ses investissements.',
      exemple: '150 / 250 × 100 = 60 %.',
    },
    {
      terme: 'Financement externe',
      definition: 'Financement par des ressources extérieures à l’agent : emprunts auprès des banques (financement intermédié) ou émission de titres sur les marchés financiers (financement direct).',
      exemple: 'Une start-up lève des fonds auprès d’investisseurs.',
    },
    {
      terme: 'Financement intermédié (indirect)',
      definition: 'Financement dans lequel un intermédiaire financier, en général une banque, collecte l’épargne et accorde des crédits aux agents à besoin de financement.',
      exemple: 'Un crédit bancaire de 20 000 € à 4,5 % coûte 900 € d’intérêts la première année.',
    },
    {
      terme: 'Financement direct (de marché)',
      definition: 'Financement dans lequel les agents à besoin de financement émettent des titres (actions, obligations) achetés directement par les agents à capacité de financement sur les marchés financiers.',
      exemple: 'Une grande entreprise émet des obligations souscrites par des fonds de placement.',
    },
    {
      terme: 'Action',
      definition: 'Titre de propriété représentant une part du capital d’une société ; elle donne droit à un dividende (variable) et à un droit de vote.',
      exemple: 'Détenir 100 actions d’une société cotée en Bourse.',
    },
    {
      terme: 'Obligation',
      definition: 'Titre de créance représentant une part d’un emprunt émis par une entreprise ou un État ; il rapporte un intérêt (coupon) et est remboursé à une date fixée.',
      exemple: 'Une obligation de 1 000 € à 3 % rapporte 30 € par an.',
    },
    {
      terme: 'Dividende',
      definition: 'Part des bénéfices d’une société distribuée à ses actionnaires ; son montant varie selon les résultats et la décision de l’assemblée générale.',
      exemple: 'Une société verse 2 € par action après une bonne année.',
    },
    {
      terme: 'Marché financier',
      definition: 'Marché sur lequel s’émettent (marché primaire) et s’échangent (marché secondaire, la Bourse) les titres à moyen et long terme : actions et obligations.',
      exemple: 'Euronext Paris.',
    },
    {
      terme: 'Taux d’intérêt',
      definition: 'Prix sur le marché des fonds prêtables : rémunération du prêteur et coût du crédit pour l’emprunteur, exprimé en pourcentage du montant prêté par an.',
      exemple: 'Emprunter 20 000 € à 4,5 % coûte 900 € d’intérêts par an.',
    },
    {
      terme: 'Marché des fonds prêtables',
      definition: 'Marché (au sens théorique) où se rencontrent l’offre de fonds (épargne des agents à capacité de financement) et la demande de fonds (des agents à besoin de financement) ; le prix qui s’y forme est le taux d’intérêt.',
      exemple: 'Si l’État emprunte davantage, la demande de fonds augmente et le taux tend à monter.',
    },
    {
      terme: 'Prime de risque',
      definition: 'Supplément de taux d’intérêt exigé par le prêteur pour compenser le risque que l’emprunteur ne rembourse pas.',
      exemple: 'Une entreprise jugée fragile emprunte à un taux plus élevé qu’un État réputé solvable.',
    },
    {
      terme: 'Taux d’intérêt réel',
      definition: 'Taux d’intérêt corrigé de l’inflation, qui mesure l’évolution du pouvoir d’achat du prêteur ; approximativement, taux nominal moins taux d’inflation.',
      exemple: 'Taux nominal 4 %, inflation 1,5 % : taux réel d’environ 2,5 %.',
      voirAussi: ['Taux d’intérêt'],
    },
    {
      terme: 'Solde budgétaire',
      definition: 'Différence entre les recettes et les dépenses de l’État au cours d’une année ; il est négatif en cas de déficit, positif en cas d’excédent.',
      exemple: 'Recettes 320, dépenses 370 : solde de −50 (données fictives).',
    },
    {
      terme: 'Déficit budgétaire',
      definition: 'Situation dans laquelle les dépenses de l’État sont supérieures à ses recettes ; il est financé par l’emprunt.',
      exemple: 'L’État émet des obligations pour financer l’écart entre dépenses et recettes.',
    },
    {
      terme: 'Dette publique',
      definition: 'Montant total des emprunts contractés par les administrations publiques et non encore remboursés, à une date donnée ; elle résulte de l’accumulation des déficits passés.',
      exemple: 'En France, elle dépasse 3 000 milliards d’euros depuis 2023 (INSEE).',
    },
    {
      terme: 'Effet d’éviction',
      definition: 'Baisse de l’investissement privé provoquée par la hausse des taux d’intérêt qui résulte de l’endettement de l’État sur le marché des fonds prêtables.',
      exemple: 'L’État emprunte massivement, les taux montent, des entreprises renoncent à investir.',
    },
    {
      terme: 'Politique de relance',
      definition: 'Politique qui augmente les dépenses publiques ou baisse les impôts pour stimuler la demande globale, la production et l’emploi.',
      exemple: 'Un plan d’investissement public dans les infrastructures en période de récession.',
    },
  ],

  auteurs: [
    {
      nom: 'John Maynard Keynes',
      dates: '1883-1946',
      idee: 'En période de sous-emploi, la dépense publique stimule la demande et l’activité (effet multiplicateur) ; un déficit peut être utile pour relancer l’économie.',
      oeuvre: 'Théorie générale de l’emploi, de l’intérêt et de la monnaie (1936)',
    },
    {
      nom: 'Milton Friedman',
      dates: '1912-2006',
      idee: 'Critique de la relance budgétaire : l’endettement public entre en concurrence avec l’investissement privé (effet d’éviction).',
    },
    {
      nom: 'Robert Barro',
      dates: 'né en 1944',
      idee: 'Équivalence ricardienne : anticipant des impôts futurs pour rembourser la dette, les ménages épargnent davantage, ce qui annule l’effet de la relance.',
      oeuvre: '« Are Government Bonds Net Wealth? » (1974)',
    },
  ],

  schemas: [
    {
      id: 'circuit-financement',
      titre: 'Les circuits de financement',
      legende: 'Les agents à capacité de financement financent les agents à besoin de financement soit par l’intermédiaire des banques (financement intermédié : dépôts puis crédits), soit directement en achetant les titres qu’ils émettent sur les marchés financiers (financement direct : actions, obligations).',
    },
    {
      id: 'fonds-pretables',
      titre: 'Le marché des fonds prêtables et l’effet d’éviction',
      legende: 'Données fictives (en milliards). Offre de fonds : i = 1 + 0,1Q ; demande initiale : i = 7 − 0,1Q. Équilibre E1 : 30 milliards à 4 %. L’État emprunte 20 milliards : la demande se déplace en D2 (i = 9 − 0,1Q). Nouvel équilibre E2 : 40 milliards à 5 %. Au taux de 5 %, les agents privés ne demandent plus que 20 milliards au lieu de 30 : 10 milliards d’investissement privé sont évincés.',
    },
  ],

  pieges: [
    {
      erreur: '« L’épargne, c’est l’argent placé à la banque. »',
      correction: 'L’épargne est un **flux** : la part du revenu non consommée. Ce qu’on en fait (livret, actions, remboursement d’emprunt, achat de logement) est une autre question.',
    },
    {
      erreur: 'Confondre action et obligation.',
      correction: 'Action = **propriété** (dividende variable, droit de vote, pas de remboursement). Obligation = **créance** (intérêt fixé, remboursement à l’échéance, pas de droit de vote).',
    },
    {
      erreur: '« Le financement direct passe par la banque. »',
      correction: 'Le financement **intermédié** passe par la banque (crédit). Le financement **direct** passe par les marchés financiers (émission de titres), même si des banques y interviennent comme conseillères.',
    },
    {
      erreur: 'Confondre déficit et dette.',
      correction: 'Le déficit est un **flux annuel** (dépenses − recettes sur une année). La dette est un **stock** : l’accumulation des emprunts non remboursés.',
    },
    {
      erreur: 'Confondre EBE et bénéfice.',
      correction: 'L’EBE est calculé **avant** intérêts, impôts sur les bénéfices et amortissements ; le bénéfice (résultat net) est ce qui reste après.',
    },
    {
      erreur: 'Ne présenter que l’effet de relance (ou que l’effet d’éviction).',
      correction: 'Le programme demande de comprendre que les deux effets sont **contradictoires** et que leur poids dépend du contexte. Présente les deux.',
    },
  ],

  synthese: {
    idees: [
      'Financer l’économie = couvrir les besoins de financement par les capacités de financement.',
      'Financement interne (autofinancement) ou externe : intermédié (banques, crédit) ou direct (marchés financiers, titres).',
      'Le taux d’intérêt est le prix sur le marché des fonds prêtables : rémunération du prêteur, coût pour l’emprunteur ; il intègre une prime de risque.',
      'Taux réel ≈ taux nominal − inflation.',
      'Ménages : revenu disponible = consommation + épargne ; globalement à capacité de financement.',
      'Entreprises : EBE → épargne brute → autofinancement ; complété par emprunts bancaires, actions, obligations.',
      'État : solde budgétaire = recettes − dépenses ; le déficit est financé par l’emprunt ; la dette publique est le stock des emprunts.',
      'Les dépenses publiques ont des effets contradictoires : relance de la demande / effet d’éviction.',
    ],
    formules: [
      { tex: '\\text{Taux d’épargne} = \\frac{S}{RD} \\times 100', legende: 'S : épargne ; RD : revenu disponible' },
      { tex: '\\text{Taux d’autofinancement} = \\frac{\\text{Épargne brute}}{\\text{Investissement}} \\times 100' },
      { tex: '\\text{Solde budgétaire} = \\text{Recettes} - \\text{Dépenses}' },
      { tex: 'r \\approx i - \\pi', legende: 'Taux réel ≈ taux nominal − inflation' },
    ],
    mecanismes: [
      ['Hausse du taux d’intérêt', 'épargner rapporte plus', 'offre de fonds ↑', 'demande de fonds ↓'],
      ['Dépenses publiques ↑', 'demande ↑', 'production et emploi ↑', 'relance'],
      ['Emprunt public ↑', 'demande de fonds ↑', 'taux ↑', 'investissement privé ↓ (éviction)'],
    ],
  },

  quiz: [
    {
      question: 'Un agent a une capacité de financement lorsque :',
      choix: ['Son épargne est inférieure à son investissement', 'Son épargne est supérieure à son investissement', 'Il emprunte à une banque', 'Il émet des actions'],
      bonne: 1,
      explication: 'Il lui reste de l’épargne après avoir financé ses investissements : il peut prêter.',
    },
    {
      question: 'Un ménage a un revenu disponible de 2 500 € et consomme 2 200 €. Son taux d’épargne est de :',
      choix: ['8,8 %', '12 %', '13,6 %', '30 %'],
      bonne: 1,
      explication: 'Épargne = 300 € ; 300 / 2 500 × 100 = 12 %.',
    },
    {
      question: 'Le taux d’intérêt est :',
      choix: [
        'Le prix sur le marché des fonds prêtables',
        'Le prix des actions',
        'Le taux d’inflation',
        'La part des bénéfices distribuée',
      ],
      bonne: 0,
      explication: 'Rémunération du prêteur et coût du crédit, il égalise l’offre et la demande de fonds prêtables.',
    },
    {
      question: 'Un prêt à 4 % alors que l’inflation est de 1,5 % a un taux réel d’environ :',
      choix: ['5,5 %', '2,5 %', '4 %', '1,5 %'],
      bonne: 1,
      explication: 'Taux réel ≈ 4 − 1,5 = 2,5 % (2,46 % en calcul exact).',
    },
    {
      question: 'Pourquoi une jeune entreprise emprunte-t-elle en général à un taux plus élevé qu’un grand État ?',
      choix: ['À cause de la prime de risque', 'À cause de l’effet d’éviction', 'Parce qu’elle a une capacité de financement', 'Parce que l’inflation est plus forte'],
      bonne: 0,
      explication: 'Le prêteur exige une compensation plus élevée quand le risque de non-remboursement est plus grand.',
    },
    {
      question: 'L’excédent brut d’exploitation est égal à :',
      choix: [
        'Chiffre d’affaires − consommations intermédiaires',
        'Valeur ajoutée − rémunération des salariés − impôts sur la production',
        'Bénéfice − dividendes',
        'Investissement − épargne',
      ],
      bonne: 1,
      explication: 'C’est ce qui reste de la valeur ajoutée pour l’entreprise après avoir rémunéré le travail et payé les impôts sur la production.',
    },
    {
      question: 'VA = 500 ; rémunération des salariés = 300 ; impôts sur la production = 20. L’EBE vaut :',
      choix: ['200', '180', '480', '220'],
      bonne: 1,
      explication: '500 − 300 − 20 = 180.',
    },
    {
      question: 'Une entreprise investit 250 et dispose de 150 d’épargne brute. Son taux d’autofinancement est de :',
      choix: ['60 %', '40 %', '166,7 %', '150 %'],
      bonne: 0,
      explication: '150 / 250 × 100 = 60 %. Elle doit trouver 100 en financement externe.',
    },
    {
      question: 'Un crédit bancaire relève du :',
      choix: ['Financement direct', 'Financement intermédié', 'Autofinancement', 'Financement par actions'],
      bonne: 1,
      explication: 'La banque s’intercale entre épargnants et emprunteurs.',
    },
    {
      question: 'Le détenteur d’une action :',
      choix: [
        'Est un créancier de l’entreprise',
        'Est copropriétaire de l’entreprise et peut recevoir un dividende',
        'Reçoit un intérêt fixe garanti',
        'Est remboursé à une date fixée',
      ],
      bonne: 1,
      explication: 'L’action est un titre de propriété ; le dividende dépend des bénéfices.',
    },
    {
      question: 'Une obligation de 1 000 € au taux de 3 % rapporte chaque année :',
      choix: ['3 €', '30 €', '300 €', '1 030 €'],
      bonne: 1,
      explication: '1 000 × 0,03 = 30 € de coupon par an, puis 1 000 € remboursés à l’échéance.',
    },
    {
      question: 'Pour une entreprise, l’émission d’actions présente l’inconvénient de :',
      choix: ['Devoir rembourser à l’échéance', 'Partager le pouvoir et les bénéfices', 'Payer un intérêt fixe', 'Passer obligatoirement par une banque'],
      bonne: 1,
      explication: 'Les nouveaux actionnaires votent en assemblée générale et reçoivent des dividendes.',
    },
    {
      question: 'Recettes de l’État : 320 ; dépenses : 370. Le solde budgétaire est :',
      choix: ['+50', '−50', '690', '−370'],
      bonne: 1,
      explication: 'Solde = recettes − dépenses = 320 − 370 = −50 : déficit de 50.',
    },
    {
      question: 'La dette publique est :',
      choix: [
        'Le déficit de l’année',
        'Le stock des emprunts publics non remboursés',
        'Le montant des impôts',
        'Les intérêts payés par l’État',
      ],
      bonne: 1,
      explication: 'Le déficit est un flux annuel ; la dette en est l’accumulation (un stock).',
    },
    {
      question: 'L’effet d’éviction désigne :',
      choix: [
        'La hausse de l’activité due aux dépenses publiques',
        'La baisse de l’investissement privé due à la hausse des taux provoquée par l’emprunt public',
        'Le départ des épargnants vers l’étranger',
        'La sortie des entreprises non rentables',
      ],
      bonne: 1,
      explication: 'L’État concurrence les entreprises sur le marché des fonds prêtables : les taux montent, l’investissement privé recule.',
    },
    {
      question: 'Selon l’analyse keynésienne, une hausse des dépenses publiques en période de chômage :',
      choix: ['Réduit nécessairement l’activité', 'Stimule la demande, la production et l’emploi', 'N’a aucun effet', 'Fait baisser les taux d’intérêt à zéro'],
      bonne: 1,
      explication: 'La demande supplémentaire incite les entreprises à produire et embaucher : c’est l’effet de relance.',
    },
  ],
};
