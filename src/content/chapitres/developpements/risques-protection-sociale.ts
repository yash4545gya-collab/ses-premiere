import type { DeveloppementChapitre } from '../../types';

/** Chapitre XI — développement. Chiffres fictifs vérifiés dans scripts/verifier-calculs.mjs. */
export const devRisquesProtectionSociale: DeveloppementChapitre = {
  id: 'risques-protection-sociale',
  definitions: {
    Risque: {
      developpement:
        'Un risque est un événement qui peut arriver ou non, dont on peut estimer la probabilité, et qui causerait un dommage s’il arrivait. Parce qu’on peut calculer sa probabilité à partir de l’expérience passée (combien d’accidents par an, combien de malades), on peut s’assurer contre lui.',
      exemples: [
        'Le risque qu’un logement soit cambriolé dans l’année, que les assureurs estiment à partir des statistiques.',
        'Le risque d’accident de ski pendant les vacances d’hiver.',
      ],
      nePasConfondre: 'Risque (probabilité calculable, donc assurable) et incertitude (probabilité inconnue).',
    },
    'Risques sociaux': {
      synonymes: ['risques économiques et sociaux'],
      developpement:
        'Les risques sociaux sont ceux qui menacent la capacité d’un individu à vivre de son travail ou à faire face à ses dépenses : maladie, accident, perte d’emploi, vieillesse (ne plus pouvoir travailler). Ils entraînent une perte de revenu (on ne peut plus travailler) ou une hausse des dépenses (soins, dépendance). La protection sociale a été construite pour les couvrir.',
      exemples: [
        'Une ouvrière blessée au travail qui doit arrêter plusieurs mois.',
        'Un salarié licencié qui perd son revenu.',
      ],
    },
    Incertitude: {
      developpement:
        'L’économiste Frank Knight distingue le risque, dont on connaît la probabilité, et l’incertitude, dont on ne connaît même pas la probabilité. On ne peut pas vraiment s’assurer contre l’incertitude : l’assureur ne sait pas quelle prime demander.',
      exemples: [
        'Les effets à long terme d’une technologie entièrement nouvelle.',
        'L’apparition d’une pandémie inconnue, avant qu’elle ne se produise.',
      ],
    },
    'Exposition au risque': {
      developpement:
        'Nous ne sommes pas tous exposés de la même façon aux risques. Les conditions de travail, le revenu, le lieu de vie et l’âge changent la probabilité de tomber malade, d’avoir un accident ou de perdre son emploi. Les catégories populaires sont souvent plus exposées : métiers physiques, contrats précaires, logements de moins bonne qualité.',
      exemples: [
        'Un couvreur est beaucoup plus exposé aux accidents du travail qu’un comptable.',
        'Un salarié en contrat court est plus exposé au chômage qu’un fonctionnaire titulaire.',
      ],
    },
    'Perception du risque': {
      developpement:
        'La perception du risque, c’est l’idée qu’on se fait de la probabilité et de la gravité d’un danger. Elle peut être très différente du risque réel : on surestime les risques spectaculaires et rares (attentats, accidents d’avion) et on sous-estime les risques familiers (accidents domestiques, sédentarité). Elle dépend de l’information, de l’expérience vécue et de la culture.',
      exemples: [
        'Avoir peur de prendre l’avion tout en conduisant tous les jours, alors que la voiture est plus dangereuse.',
        'Des habitants qui sous-estiment le risque d’inondation parce qu’ils n’en ont jamais connu.',
      ],
    },
    'Aversion au risque': {
      developpement:
        'Une personne qui a de l’aversion au risque préfère une situation sûre à une situation incertaine, même si celle-ci rapporte autant en moyenne. Elle accepte donc de payer une petite somme certaine (la prime d’assurance) pour éviter une grosse perte possible. C’est ce qui explique qu’on s’assure. Le degré d’aversion varie selon les personnes et leur situation.',
      exemples: [
        'Préférer payer 250 € par an plutôt que risquer de perdre 20 000 €, même si le risque n’est que de 1 %.',
        'Choisir un emploi stable moins bien payé plutôt qu’un emploi incertain mieux payé.',
      ],
    },
    'Conduite à risque': {
      developpement:
        'Une conduite à risque consiste à s’exposer volontairement à un danger. Elle est plus fréquente chez les jeunes hommes, ce que la sociologie explique en partie par la socialisation masculine qui valorise le courage et la prise de risque. Elle varie aussi selon les groupes sociaux et les cultures.',
      exemples: [
        'Conduire très vite pour impressionner ses amis.',
        'Pratiquer un sport extrême sans équipement de sécurité.',
      ],
    },
    Prévention: {
      developpement:
        'Prévenir, c’est agir avant que le dommage n’arrive pour qu’il arrive moins souvent ou soit moins grave. La prévention est souvent le moyen le moins coûteux de gérer un risque. Elle est organisée par les pouvoirs publics (vaccinations, sécurité routière), les entreprises (sécurité au travail) et les assureurs (conseils, réductions de prime pour les comportements prudents).',
      exemples: [
        'Le port obligatoire du casque à vélo pour les enfants de moins de 12 ans.',
        'Un dépistage gratuit du cancer, qui permet de soigner plus tôt et plus efficacement.',
      ],
    },
    Mutualisation: {
      developpement:
        'Mutualiser, c’est mettre en commun. Chacun verse une petite somme dans une caisse commune ; la caisse indemnise ceux qui subissent le dommage. Comme on ne sait pas à l’avance qui sera touché, tout le monde paie un peu pour que personne ne perde beaucoup. Plus les participants sont nombreux, plus le coût total est prévisible.',
      exemples: [
        '1 000 assurés à 200 € chacun forment une caisse de 200 000 € qui indemnise les 10 sinistres attendus de 20 000 €.',
        'Les cotisations maladie de tous les salariés financent les soins de ceux qui tombent malades.',
      ],
      nePasConfondre: 'Mutualisation (beaucoup de personnes partagent le coût d’un même risque) et diversification (on répartit ses risques sur des domaines différents).',
    },
    Diversification: {
      developpement:
        'Diversifier, c’est ne pas « mettre tous ses œufs dans le même panier ». Un assureur couvre des risques variés (incendie, auto, santé) et dans des régions différentes pour qu’ils ne surviennent pas tous en même temps. Un épargnant place son argent dans plusieurs entreprises pour ne pas tout perdre si l’une fait faillite.',
      exemples: [
        'Un agriculteur qui cultive plusieurs plantes différentes pour ne pas tout perdre en cas de maladie de l’une d’elles.',
        'Un assureur qui se réassure auprès d’une autre compagnie pour les catastrophes très coûteuses.',
      ],
    },
    Assurance: {
      developpement:
        'L’assurance est un contrat : l’assuré paie régulièrement une prime ; en échange, l’assureur s’engage à l’indemniser si un événement prévu au contrat se produit. Elle repose sur la mutualisation : les primes de tous paient les dommages de quelques-uns. Certaines assurances sont obligatoires (automobile, habitation pour les locataires).',
      exemples: [
        'Une assurance habitation qui rembourse les dégâts d’un dégât des eaux.',
        'Une assurance voyage qui rembourse un billet en cas d’annulation pour maladie.',
      ],
    },
    'Prime (ou cotisation) d’assurance': {
      synonymes: ['prime', 'prime d’assurance', 'cotisation d’assurance'],
      developpement:
        'La prime est le prix de l’assurance. Sa base est la « prime pure » : le coût moyen attendu du risque (probabilité × montant du dommage). L’assureur y ajoute un chargement pour ses frais de gestion et sa marge. Une société d’assurance fait souvent varier la prime selon le risque de chaque client.',
      exemples: [
        'Probabilité de 1 %, dommage de 20 000 € : prime pure de 200 € ; avec 25 % de chargement, prime de 250 €.',
        'Un jeune conducteur paie une prime plus élevée, car il a statistiquement plus d’accidents.',
      ],
    },
    Mutuelle: {
      developpement:
        'Une mutuelle est une société d’assurance à but non lucratif, gérée par ses adhérents qui élisent ses dirigeants. Elle ne cherche pas à faire des profits pour des actionnaires. Elle fixe souvent des cotisations qui dépendent peu du risque de chacun (par exemple selon l’âge mais pas l’état de santé), ce qui organise une solidarité entre adhérents.',
      exemples: [
        'Une complémentaire santé qui rembourse ce que la Sécurité sociale ne prend pas en charge.',
        'Une mutuelle d’enseignants créée au départ par et pour cette profession.',
      ],
      nePasConfondre: 'Mutuelle (non lucrative, gérée par les adhérents) et société d’assurance (lucrative, détenue par des actionnaires).',
    },
    'Société d’assurance': {
      developpement:
        'Une société d’assurance est une entreprise privée qui vend des contrats d’assurance pour réaliser un profit. Elle ajuste ses primes au niveau de risque de chaque client (âge, antécédents, lieu de vie) : plus le client est risqué, plus il paie. Elle utilise des outils comme le bonus-malus et la franchise pour limiter l’aléa moral.',
      exemples: [
        'Un assureur automobile qui fait payer plus cher un client vivant dans une ville où les vols sont fréquents.',
        'Une compagnie qui propose une réduction aux clients qui installent une alarme.',
      ],
    },
    'Aléa moral (en assurance)': {
      synonymes: ['aléa moral'],
      developpement:
        'Quand on est bien assuré, on supporte moins les conséquences d’un dommage, et on peut devenir moins prudent sans que l’assureur puisse le voir. C’est l’aléa moral. Il fait augmenter les sinistres et donc les primes de tous. Les assureurs le limitent par la franchise, le bonus-malus, les contrôles et la prévention.',
      exemples: [
        'Un locataire très bien assuré qui laisse ses fenêtres ouvertes en partant en vacances.',
        'Un patient entièrement remboursé qui consulte plus souvent qu’il ne le ferait s’il payait.',
      ],
    },
    'Protection sociale': {
      developpement:
        'La protection sociale regroupe tous les dispositifs collectifs qui aident les individus à faire face aux risques sociaux : remboursement des soins, indemnités en cas d’accident ou de chômage, retraites, allocations familiales, minima sociaux. En France, elle est surtout organisée par la Sécurité sociale (créée en 1945), l’assurance chômage et des aides financées par l’impôt.',
      exemples: [
        'Le remboursement d’une partie d’une consultation médicale par l’Assurance maladie.',
        'La pension de retraite versée à une ancienne salariée.',
      ],
    },
    'Logique d’assurance': {
      developpement:
        'Dans la logique d’assurance (inspirée du modèle mis en place par Bismarck en Allemagne), on cotise sur son salaire et on reçoit des prestations en fonction de ce qu’on a cotisé. Elle protège ceux qui travaillent et leurs proches, et vise à maintenir leur niveau de vie face au risque. Elle organise une solidarité horizontale (des actifs vers les chômeurs, des bien-portants vers les malades).',
      exemples: [
        'L’allocation chômage, calculée à partir des salaires antérieurs.',
        'La retraite de base, qui dépend du nombre de trimestres cotisés et des salaires.',
      ],
      nePasConfondre: 'Logique d’assurance (cotisations, prestations liées à ce qu’on a cotisé) et logique d’assistance (impôt, prestations selon les besoins).',
    },
    'Logique d’assistance': {
      developpement:
        'Dans la logique d’assistance (inspirée du rapport Beveridge de 1942), on aide ceux qui sont dans le besoin, qu’ils aient cotisé ou non. Les prestations sont financées par l’impôt et souvent versées sous conditions de ressources. Elle vise à garantir un minimum de ressources et à lutter contre la pauvreté. Elle organise une solidarité verticale (des plus aisés vers les plus modestes).',
      exemples: [
        'Le revenu de solidarité active (RSA).',
        'L’allocation de solidarité aux personnes âgées, versée aux retraités dont les ressources sont très faibles.',
      ],
    },
    'Cotisations sociales': {
      developpement:
        'Les cotisations sociales sont prélevées sur les salaires, à la fois sur la part de l’employeur et sur celle du salarié. Contrairement à l’impôt, elles ouvrent des droits : en cotisant, on acquiert le droit à une retraite, à des indemnités maladie ou chômage. Elles financent la logique d’assurance de la protection sociale.',
      exemples: [
        'La ligne « cotisation vieillesse » sur une fiche de paie.',
        'Les cotisations patronales payées par l’employeur en plus du salaire brut.',
      ],
    },
    'Minima sociaux': {
      developpement:
        'Les minima sociaux sont des aides qui garantissent un revenu minimum aux personnes dont les ressources sont trop faibles. Ils relèvent de la logique d’assistance : on n’a pas besoin d’avoir cotisé, et on les perçoit sous conditions de ressources. Ils évitent que des personnes tombent dans la grande pauvreté.',
      exemples: [
        'Le RSA pour les personnes sans ressources ou presque.',
        'L’allocation aux adultes handicapés (AAH).',
      ],
    },
    'Solidarité horizontale': {
      developpement:
        'La solidarité horizontale va de ceux qui ne subissent pas le risque vers ceux qui le subissent, quel que soit leur revenu : des bien-portants vers les malades, des actifs vers les chômeurs, des jeunes vers les retraités, des personnes sans enfants vers les familles. Elle est au cœur de la logique d’assurance.',
      exemples: [
        'Les cotisations maladie d’un salarié en bonne santé financent l’hospitalisation d’un autre.',
        'Les cotisations des actifs financent les pensions des retraités d’aujourd’hui (retraite par répartition).',
      ],
      nePasConfondre: 'Solidarité horizontale (des non-exposés vers les exposés au risque) et solidarité verticale (des plus riches vers les plus pauvres).',
    },
    'Solidarité verticale': {
      developpement:
        'La solidarité verticale va des ménages les plus aisés vers les plus modestes. Elle passe par l’impôt (qui pèse davantage sur les hauts revenus) et par des prestations réservées aux ménages modestes. Elle réduit les inégalités de revenus et relève de la logique d’assistance.',
      exemples: [
        'Les aides au logement, plus élevées pour les ménages à faibles revenus.',
        'Les bourses scolaires attribuées selon les revenus des parents.',
      ],
    },
  },

  nouvellesDefinitions: [
    {
      terme: 'Sécurité sociale',
      definition: 'Ensemble d’organismes publics créés en 1945 qui couvrent les principaux risques sociaux par des cotisations : maladie, accidents du travail et maladies professionnelles, vieillesse, famille, et depuis 2021 l’autonomie.',
      exemple: 'L’Assurance maladie, qui rembourse une partie des soins.',
      developpement: 'La Sécurité sociale est au cœur de la protection sociale française. Elle mêle logique d’assurance (cotisations) et logique de solidarité. L’assurance chômage, elle, est gérée à part (Unédic).',
      exemples: ['La branche famille verse les allocations familiales.'],
    },
    {
      terme: 'Prime pure',
      definition: 'Coût moyen attendu d’un risque pour un assuré : probabilité du sinistre × montant du dommage.',
      exemple: 'Probabilité de 1 %, dommage de 20 000 € : prime pure de 200 €.',
      developpement: 'Si chaque assuré paie la prime pure, la caisse commune couvre exactement, en moyenne, les sinistres attendus. L’assureur ajoute ensuite un chargement pour ses frais.',
      exemples: ['Probabilité de 5 %, dommage de 2 000 € : prime pure de 100 € (données fictives).'],
    },
    {
      terme: 'Réassurance',
      definition: 'Assurance des assureurs : un assureur transfère une partie de ses risques à une autre compagnie (le réassureur) pour se protéger contre des pertes très importantes.',
      exemple: 'Un assureur qui se réassure contre les tempêtes, qui peuvent toucher des milliers d’assurés en même temps.',
      developpement: 'La réassurance est une forme de diversification : les risques sont répartis entre plusieurs compagnies et pays.',
      exemples: ['Après une catastrophe naturelle, les réassureurs prennent en charge une partie des indemnités.'],
    },
    {
      terme: 'État-providence',
      definition: 'État qui intervient largement pour protéger les individus contre les risques sociaux et réduire les inégalités, par la protection sociale et les services publics.',
      exemple: 'En France, la Sécurité sociale, l’école publique gratuite et l’assurance chômage relèvent de l’État-providence.',
      developpement: 'Il s’est développé après 1945 dans la plupart des pays développés. Son coût et ses effets sur l’incitation au travail font débat.',
      exemples: ['Les pays nordiques ont des États-providence très développés, financés par des impôts élevés.'],
    },
    {
      terme: 'Retraite par répartition',
      definition: 'Système de retraite dans lequel les cotisations des actifs d’aujourd’hui financent directement les pensions des retraités d’aujourd’hui.',
      exemple: 'Le régime général de retraite en France.',
      developpement: 'C’est une solidarité entre générations. Le vieillissement de la population (plus de retraités pour moins d’actifs) pose la question de son financement.',
      exemples: ['Si le nombre de retraités augmente plus vite que celui des cotisants, il faut augmenter les cotisations, baisser les pensions ou reculer l’âge de départ.'],
      nePasConfondre: 'Répartition (les actifs paient les retraités actuels) et capitalisation (chacun épargne pour sa propre retraite).',
    },
  ],

  exemplesParPartie: [
    [
      {
        titre: 'Le même risque, des expositions différentes',
        texte:
          'Le risque d’accident du travail existe pour tous, mais un ouvrier du bâtiment y est bien plus exposé qu’un comptable. Le risque de chômage existe pour tous, mais un salarié en intérim y est plus exposé qu’un fonctionnaire titulaire. L’**exposition au risque** dépend de la position sociale.',
      },
      {
        titre: 'Pourquoi s’assurer quand on perd de l’argent en moyenne',
        texte:
          'Ton vélo vaut 1 000 €, le risque de vol est de 5 % par an : la perte moyenne attendue est de 50 €. L’assureur te demande 70 € (**prime pure** + frais). En moyenne, tu « perds » 20 €. Mais tu préfères payer 70 € à coup sûr que risquer de perdre 1 000 € : c’est l’**aversion au risque** (données fictives).',
      },
    ],
    [
      {
        titre: 'Prévention, mutualisation, diversification : un exemple chacun',
        texte:
          '**Prévention** : une entreprise installe des garde-corps sur ses chantiers pour réduire les chutes. **Mutualisation** : 5 000 étudiants versent 10 € chacun à une assurance qui rembourse les quelques ordinateurs volés dans l’année. **Diversification** : un assureur couvre des habitations dans toute la France, pour ne pas être ruiné par une inondation dans une seule région.',
      },
      {
        titre: 'Une mutualisation en chiffres',
        texte:
          '2 000 personnes ont chacune une probabilité de 5 % d’avoir un sinistre de 2 000 €. On attend 100 sinistres, soit 200 000 € à payer. Si chacun verse 100 € (**prime pure**), la caisse commune couvre les sinistres. Avec 20 % de frais, la prime devient 120 € (données fictives).',
      },
      {
        titre: 'L’aléa moral et sa correction',
        texte:
          'Une assurance téléphone sans **franchise** pousse certains assurés à moins protéger leur appareil : les casses augmentent (**aléa moral**). L’assureur introduit une franchise de 50 € et un **bonus-malus** : les assurés font plus attention.',
      },
    ],
    [
      {
        titre: 'Assurance ou assistance ? Trois prestations',
        texte:
          'L’allocation chômage dépend des salaires et cotisations passés : **logique d’assurance**. Le RSA est versé aux personnes sans ressources, sans condition de cotisation, et financé par l’impôt : **logique d’assistance**. Les remboursements de soins par l’Assurance maladie sont ouverts à tous les résidents : on parle de logique universelle, proche de l’assistance par son financement en partie par l’impôt (CSG).',
      },
      {
        titre: 'Les deux solidarités',
        texte:
          'Julie, en bonne santé, paie des cotisations qui financent l’opération de Marc : c’est la **solidarité horizontale**. Les impôts de Paul, cadre aisé, financent les aides au logement de Léa, étudiante modeste : c’est la **solidarité verticale**.',
      },
    ],
  ],
};
