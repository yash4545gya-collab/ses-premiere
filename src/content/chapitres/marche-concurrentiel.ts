import type { Chapitre } from '../types';

/**
 * Chapitre : Comment un marché concurrentiel fonctionne-t-il ?
 * Tous les chiffres des exemples sont vérifiés dans scripts/verifier-calculs.mjs
 * (demande P = 10 − 0,5Q ; offre P = 2 + 0,5Q ; données fictives).
 */
export const marcheConcurrentiel: Chapitre = {
  id: 'marche-concurrentiel',
  titre: 'Comment un marché concurrentiel fonctionne-t-il ?',
  titreCourt: 'Marché concurrentiel',
  domaine: 'Science économique',
  objectifs: [
    'Savoir que le marché est une institution et distinguer les marchés selon leur degré de concurrence (de la concurrence parfaite au monopole).',
    'Interpréter les courbes d’offre et de demande et leurs pentes ; comprendre comment leur confrontation détermine l’équilibre d’un marché où les agents sont preneurs de prix.',
    'Illustrer et interpréter les déplacements des courbes et sur les courbes par des exemples chiffrés, notamment une taxe forfaitaire.',
    'Déduire la courbe d’offre de la maximisation du profit : avec un coût marginal croissant, le producteur produit la quantité qui égalise coût marginal et prix.',
    'Comprendre les notions de surplus du producteur et du consommateur.',
    'Comprendre la notion de gains à l’échange et savoir que la somme des surplus est maximisée à l’équilibre.',
  ],

  essentiel: {
    problematique:
      'Sur un marché où aucun acheteur ni aucun vendeur ne peut fixer seul le prix, comment la confrontation de l’offre et de la demande aboutit-elle à un prix et à une quantité d’équilibre — et en quoi cet équilibre est-il le plus avantageux pour l’ensemble des participants ?',
    parties: [
      {
        titre: 'Le marché, une institution plus ou moins concurrentielle',
        blocs: [
          {
            type: 'texte',
            texte:
              'Un **marché** est le lieu, physique ou non, où se rencontrent l’offre et la demande d’un bien ou d’un service et où se forme un prix. Le marché aux fleurs, une plateforme de vente en ligne et le marché des changes sont tous des marchés, même si seul le premier a une existence physique.',
          },
          {
            type: 'texte',
            texte:
              'Le marché n’est pas un phénomène naturel : c’est une **institution**, c’est-à-dire un ensemble de règles, de normes et d’organisations durables qui encadrent les échanges. Pour que l’on puisse échanger, il faut des droits de propriété garantis, des contrats que l’on peut faire respecter, une monnaie, des normes de qualité, des mesures communes et un minimum de confiance. L’État (droit, justice, contrôle de la qualité) et les organisateurs de marchés (bourses, plateformes, salles des ventes) jouent un rôle central.',
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi le marché a besoin de règles',
            etapes: [
              'Règles garanties (propriété, contrats, normes de qualité)',
              'Les acheteurs et les vendeurs se font confiance',
              'Les coûts et les risques de l’échange diminuent',
              'Les échanges se multiplient : le marché peut fonctionner',
            ],
          },
          {
            type: 'texte',
            texte:
              'Les marchés se distinguent par leur **degré de concurrence**, qui dépend surtout du nombre d’offreurs et de leur capacité à influencer le prix. On va de la **concurrence parfaite** (une multitude de petits offreurs) au **monopole** (un seul offreur), en passant par l’**oligopole** (quelques offreurs).',
          },
          {
            type: 'tableau',
            titre: 'Les structures de marché selon le nombre d’offreurs',
            entetes: ['Structure', 'Nombre d’offreurs', 'Pouvoir sur le prix', 'Exemple'],
            lignes: [
              ['Concurrence parfaite (modèle)', 'Très grand', 'Aucun : preneurs de prix', 'Marché au cadran de fraises, marchés agricoles mondiaux (approximation)'],
              ['Oligopole', 'Quelques-uns', 'Important, interdépendance', 'Téléphonie mobile, constructeurs d’avions'],
              ['Monopole', 'Un seul', 'Maximal : faiseur de prix', 'Réseau ferré national, brevet sur un médicament'],
            ],
          },
          {
            type: 'texte',
            texte:
              'Le modèle de **concurrence pure et parfaite** (CPP) repose sur cinq hypothèses : **atomicité** (un très grand nombre d’acheteurs et de vendeurs, chacun trop petit pour influencer le prix), **homogénéité** du produit (les biens sont identiques), **libre entrée et sortie** du marché, **transparence** de l’information (tous connaissent les prix et la qualité) et **libre circulation** des facteurs de production. Dans ce cadre, les agents sont **preneurs de prix** : ils considèrent le prix comme une donnée et choisissent seulement les quantités.',
          },
          {
            type: 'encadre',
            titre: 'Un modèle, pas une description',
            texte:
              'La CPP est un **modèle** : une représentation simplifiée qui isole quelques variables pour comprendre un mécanisme. Elle ne prétend pas décrire la réalité, et elle n’est pas non plus un idéal à atteindre. Rares sont les marchés qui en réunissent toutes les hypothèses ; certains s’en approchent, parfois parce qu’on les a délibérément organisés ainsi (voir le marché au cadran étudié par M.-F. Garcia-Parpet).',
          },
        ],
      },
      {
        titre: 'Offre et demande : deux courbes aux pentes opposées',
        blocs: [
          {
            type: 'texte',
            texte:
              'La **demande** est la quantité d’un bien que les acheteurs souhaitent acquérir à chaque niveau de prix. La courbe de demande est en général **décroissante** : plus le prix est élevé, plus la quantité demandée est faible (toutes choses égales par ailleurs).',
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi la demande est décroissante',
            etapes: [
              'Le prix du bien augmente',
              'Il coûte plus cher par rapport aux autres biens et pèse davantage sur un budget limité',
              'Certains acheteurs renoncent ou se reportent sur des substituts',
              'La quantité demandée diminue',
            ],
          },
          {
            type: 'texte',
            texte:
              'L’**offre** est la quantité d’un bien que les producteurs souhaitent vendre à chaque niveau de prix. Elle se déduit de la **maximisation du profit** : le producteur compare ce que lui rapporte une unité supplémentaire (le prix, puisqu’il est preneur de prix) à ce qu’elle lui coûte, le **coût marginal**.',
          },
          { type: 'formule', tex: '\\text{Profit} = \\text{Recette totale} - \\text{Coût total} = P \\times Q - CT', legende: 'Le profit du producteur' },
          { type: 'formule', tex: 'Cm = \\frac{\\Delta CT}{\\Delta Q}', legende: 'Coût marginal : le coût de la dernière unité produite' },
          {
            type: 'texte',
            texte:
              'À court terme, le coût marginal est en général **croissant** : au-delà d’un certain volume, chaque unité supplémentaire coûte plus cher (heures supplémentaires, machines saturées, matières premières plus coûteuses). Le producteur a donc intérêt à produire tant que le prix couvre le coût de l’unité supplémentaire, et à s’arrêter quand $P = Cm$.',
          },
          {
            type: 'tableau',
            titre: 'Exemple : une maraîchère vend ses salades au prix de marché de 7 € la caisse (données fictives, coût fixe de 5 €)',
            entetes: ['Caisses produites', '1', '2', '3', '4', '5', '6'],
            lignes: [
              ['Coût marginal (€)', '3', '4', '5', '6', '8', '10'],
              ['Profit total (€)', '−1', '2', '4', '5', '4', '1'],
            ],
            source: 'Données fictives',
          },
          {
            type: 'texte',
            texte:
              'Jusqu’à la 4e caisse, chaque caisse rapporte 7 € et coûte moins : le profit augmente. La 5e coûterait 8 € pour 7 € de recette : la produire ferait baisser le profit. La quantité optimale est donc 4 caisses, là où le coût marginal rejoint le prix. Si le prix montait à 9 €, la 5e caisse (coût marginal de 8 €) deviendrait rentable : la quantité offerte augmenterait. C’est pourquoi **la courbe d’offre correspond à la partie croissante de la courbe de coût marginal** : elle est croissante.',
          },
          {
            type: 'mecanisme',
            titre: 'Pourquoi l’offre est croissante',
            etapes: [
              'Le prix de marché augmente',
              'Des unités dont le coût marginal était trop élevé deviennent rentables',
              'Le producteur qui maximise son profit produit jusqu’à ce que Cm = P',
              'La quantité offerte augmente',
            ],
          },
          { type: 'schema', id: 'cout-marginal-offre' },
          {
            type: 'texte',
            texte:
              'Il faut distinguer deux cas. Quand **le prix du bien lui-même** varie, on se **déplace le long de la courbe** : c’est la quantité demandée (ou offerte) qui change. Quand **un autre déterminant** varie, c’est **toute la courbe qui se déplace** : la demande (ou l’offre) elle-même change.',
          },
          {
            type: 'tableau',
            titre: 'Ce qui déplace les courbes',
            entetes: ['La demande se déplace si…', 'L’offre se déplace si…'],
            lignes: [
              ['le revenu des ménages change', 'le coût des facteurs de production change (salaires, énergie, matières premières)'],
              ['le prix d’un bien substituable ou complémentaire change', 'une innovation améliore la productivité'],
              ['les goûts, les modes, l’information changent', 'le nombre de producteurs change'],
              ['la population ou les anticipations changent', 'une taxe ou une subvention est instaurée'],
            ],
          },
          { type: 'schema', id: 'deplacement-mouvement' },
        ],
      },
      {
        titre: 'L’équilibre de marché et son efficacité',
        blocs: [
          {
            type: 'texte',
            texte:
              'L’**équilibre** est atteint au prix pour lequel la quantité offerte est égale à la quantité demandée. Graphiquement, c’est le point d’intersection des deux courbes. Si le prix est au-dessus, il y a **excès d’offre** (des invendus) ; s’il est en dessous, il y a **excès de demande** (une pénurie).',
          },
          {
            type: 'mecanisme',
            titre: 'Le retour à l’équilibre',
            etapes: [
              'Le prix est supérieur au prix d’équilibre',
              'Quantité offerte > quantité demandée : des invendus apparaissent',
              'Les vendeurs baissent leurs prix pour écouler leur production',
              'La quantité demandée augmente, la quantité offerte diminue, jusqu’à l’équilibre',
            ],
          },
          {
            type: 'texte',
            texte:
              'Exemple chiffré (données fictives) : la demande s’écrit $Q_d = 20 - 2P$ et l’offre $Q_o = 2P - 4$. À l’équilibre, $20 - 2P = 2P - 4$, soit $P^* = 6$ et $Q^* = 8$. Au prix de 8, on aurait $Q_d = 4$ et $Q_o = 12$ : un excès d’offre de 8 unités, qui pousse le prix à la baisse.',
          },
          { type: 'schema', id: 'equilibre' },
          {
            type: 'texte',
            texte:
              'Le **surplus du consommateur** est l’écart entre le prix maximum qu’un acheteur était prêt à payer (sa disposition à payer) et le prix qu’il paie réellement. Le **surplus du producteur** est l’écart entre le prix qu’il reçoit et le prix minimum auquel il aurait accepté de vendre (son coût marginal). Graphiquement, ce sont les aires entre les courbes et le prix d’équilibre.',
          },
          {
            type: 'texte',
            texte:
              'Dans notre exemple, le surplus du consommateur vaut $(10 - 6) \\times 8 / 2 = 16$ et celui du producteur $(6 - 2) \\times 8 / 2 = 16$. Le **surplus total** (32) mesure les **gains à l’échange** : ce que l’échange rapporte à l’ensemble des participants par rapport à une situation sans échange.',
          },
          { type: 'schema', id: 'surplus' },
          {
            type: 'texte',
            texte:
              'La somme des surplus est **maximale à l’équilibre concurrentiel**. Si l’on échangeait moins que $Q^*$, des échanges mutuellement avantageux (où la disposition à payer dépasse le coût) n’auraient pas lieu. Si l’on échangeait plus, on produirait des unités dont le coût dépasse ce que les acheteurs sont prêts à payer. En ce sens, l’équilibre concurrentiel est **efficace**.',
          },
          {
            type: 'texte',
            texte:
              'Une **taxe forfaitaire unitaire** (un montant fixe par unité vendue, par exemple 2 € par unité) payée par les producteurs augmente leur coût de chaque unité : la courbe d’offre se **déplace vers le haut** du montant de la taxe. Dans l’exemple, la nouvelle quantité d’équilibre est 6 ; les consommateurs paient 7 et les producteurs ne gardent que 5. L’État perçoit $2 \\times 6 = 12$. Le surplus total passe de 32 à $9 + 9 + 12 = 30$ : la différence (2) est une **perte sèche**, des échanges avantageux qui n’ont plus lieu.',
          },
          {
            type: 'mecanisme',
            titre: 'Effets d’une taxe forfaitaire unitaire',
            etapes: [
              'Taxe de t € par unité vendue',
              'L’offre se déplace vers le haut de t',
              'Le prix payé par les acheteurs augmente (de moins que t), le prix reçu par les vendeurs baisse',
              'La quantité échangée diminue : recettes fiscales, mais perte sèche',
            ],
          },
          { type: 'schema', id: 'taxe' },
          {
            type: 'encadre',
            titre: 'Complément : la subvention',
            texte:
              'Une subvention unitaire produit l’effet inverse : l’offre se déplace vers le bas, le prix payé baisse et la quantité échangée augmente. Avec une subvention de 2 par unité dans notre exemple, on échange 10 unités au prix de 5, pour un coût de 20 pour l’État. Les pouvoirs publics l’utilisent pour encourager la consommation de certains biens (véhicules électriques, rénovation énergétique).',
          },
          {
            type: 'texte',
            texte:
              'Qui supporte réellement la taxe ? Peu importe qui la verse à l’État : la charge se partage entre acheteurs et vendeurs selon la pente des courbes. Plus la demande est peu sensible au prix (courbe pentue), plus la taxe est supportée par les consommateurs.',
          },
        ],
      },
    ],
  },

  definitions: [
    {
      terme: 'Marché',
      definition: 'Lieu, physique ou non, de rencontre entre l’offre et la demande d’un bien ou d’un service, où se forme un prix.',
      exemple: 'Le marché des smartphones reconditionnés, qui se tient surtout sur des plateformes en ligne.',
      voirAussi: ['Institution', 'Prix d’équilibre'],
    },
    {
      terme: 'Institution',
      definition: 'Ensemble durable de règles, de normes et d’organisations qui encadrent les comportements et les échanges dans une société.',
      exemple: 'Le marché repose sur des institutions : droit des contrats, droit de propriété, monnaie, normes de qualité (étiquetage des produits).',
    },
    {
      terme: 'Concurrence pure et parfaite (CPP)',
      definition: 'Modèle de marché reposant sur cinq hypothèses : atomicité, homogénéité du produit, libre entrée et sortie, transparence de l’information et libre circulation des facteurs de production.',
      exemple: 'Un marché au cadran de fruits, où des dizaines de producteurs vendent des lots identiques à de nombreux acheteurs, s’en rapproche.',
      voirAussi: ['Preneur de prix', 'Atomicité'],
    },
    {
      terme: 'Atomicité',
      definition: 'Hypothèse selon laquelle il existe un très grand nombre d’offreurs et de demandeurs, chacun trop petit pour influencer le prix par ses décisions.',
      exemple: 'Un petit producteur de blé qui double sa production ne modifie pas le cours mondial du blé.',
    },
    {
      terme: 'Preneur de prix',
      definition: 'Agent qui n’a aucune influence sur le prix du marché : il le considère comme une donnée et choisit seulement les quantités qu’il achète ou vend.',
      exemple: 'En concurrence parfaite, une maraîchère qui vendrait plus cher que le prix du marché ne vendrait plus rien.',
      voirAussi: ['Concurrence pure et parfaite (CPP)'],
    },
    {
      terme: 'Degré de concurrence',
      definition: 'Intensité de la concurrence sur un marché, qui dépend principalement du nombre d’offreurs et de leur capacité à influencer le prix ; elle va de la concurrence parfaite au monopole.',
      exemple: 'Le marché du pain en ville est plus concurrentiel que celui du transport ferroviaire de voyageurs.',
    },
    {
      terme: 'Monopole',
      definition: 'Structure de marché où un seul offreur fait face à un grand nombre de demandeurs ; il peut fixer son prix (faiseur de prix).',
      exemple: 'Un laboratoire qui détient le brevet d’un médicament est seul à pouvoir le vendre pendant la durée du brevet.',
    },
    {
      terme: 'Oligopole',
      definition: 'Structure de marché où un petit nombre d’offreurs font face à un grand nombre de demandeurs ; les décisions de chacun dépendent de celles des autres.',
      exemple: 'Le marché de la téléphonie mobile en France, dominé par quatre opérateurs.',
    },
    {
      terme: 'Demande',
      definition: 'Quantité d’un bien ou d’un service que les acheteurs souhaitent acquérir à chaque niveau de prix, toutes choses égales par ailleurs.',
      exemple: 'À 2 € le croissant, un lycée en achète 300 par jour ; à 1 €, il en achèterait 500.',
      voirAussi: ['Loi de la demande'],
    },
    {
      terme: 'Loi de la demande',
      definition: 'Relation décroissante entre le prix d’un bien et la quantité demandée : toutes choses égales par ailleurs, quand le prix augmente, la quantité demandée diminue.',
      exemple: 'Quand le prix du carburant augmente fortement, certains automobilistes roulent moins ou covoiturent.',
    },
    {
      terme: 'Offre',
      definition: 'Quantité d’un bien ou d’un service que les producteurs souhaitent vendre à chaque niveau de prix, toutes choses égales par ailleurs.',
      exemple: 'À 7 € la caisse, une maraîchère propose 4 caisses de salades ; à 9 €, elle en propose 5.',
      voirAussi: ['Loi de l’offre', 'Coût marginal'],
    },
    {
      terme: 'Loi de l’offre',
      definition: 'Relation croissante entre le prix d’un bien et la quantité offerte : toutes choses égales par ailleurs, quand le prix augmente, la quantité offerte augmente.',
      exemple: 'Quand le prix du cacao monte, les planteurs entretiennent davantage leurs arbres et récoltent plus.',
    },
    {
      terme: 'Coût total',
      definition: 'Ensemble des coûts supportés par le producteur pour produire une quantité donnée ; il se compose des coûts fixes (indépendants de la quantité) et des coûts variables.',
      exemple: 'Pour une boulangerie : le loyer (coût fixe) et la farine (coût variable).',
    },
    {
      terme: 'Coût marginal',
      definition: 'Coût de production de la dernière unité produite, c’est-à-dire la variation du coût total entraînée par la production d’une unité supplémentaire ($Cm = \\Delta CT / \\Delta Q$).',
      exemple: 'Si produire 4 caisses coûte 23 € et 5 caisses 31 €, le coût marginal de la 5e caisse est de 8 €.',
      voirAussi: ['Maximisation du profit'],
    },
    {
      terme: 'Profit',
      definition: 'Différence entre la recette totale (prix × quantité vendue) et le coût total de production.',
      exemple: '4 caisses vendues 7 € pour un coût total de 23 € : profit de 28 − 23 = 5 €.',
    },
    {
      terme: 'Maximisation du profit',
      definition: 'Comportement du producteur qui choisit la quantité rendant son profit le plus élevé possible ; en concurrence parfaite et avec un coût marginal croissant, il produit jusqu’à ce que le coût marginal soit égal au prix.',
      exemple: 'Au prix de 7 €, la maraîchère s’arrête à 4 caisses, car la 5e coûterait 8 €.',
    },
    {
      terme: 'Prix d’équilibre',
      definition: 'Prix pour lequel la quantité offerte est égale à la quantité demandée ; graphiquement, il correspond à l’intersection des courbes d’offre et de demande.',
      exemple: 'Avec $Q_d = 20 - 2P$ et $Q_o = 2P - 4$, le prix d’équilibre est 6 et la quantité d’équilibre 8.',
      voirAussi: ['Excès d’offre', 'Excès de demande'],
    },
    {
      terme: 'Excès d’offre',
      definition: 'Situation où, au prix pratiqué, la quantité offerte est supérieure à la quantité demandée ; elle tend à faire baisser le prix.',
      exemple: 'Une récolte de tomates exceptionnelle crée des invendus et les prix chutent en fin de marché.',
    },
    {
      terme: 'Excès de demande',
      definition: 'Situation où, au prix pratiqué, la quantité demandée est supérieure à la quantité offerte (pénurie) ; elle tend à faire monter le prix.',
      exemple: 'Des billets de concert vendus trop peu cher s’arrachent en quelques minutes et sont revendus plus cher.',
    },
    {
      terme: 'Déplacement d’une courbe',
      definition: 'Changement de toute la courbe d’offre ou de demande, provoqué par la variation d’un déterminant autre que le prix du bien (revenu, goûts, coûts, technique, taxe…).',
      exemple: 'Une hausse des revenus déplace la demande de voyages vers la droite : à chaque prix, on demande davantage.',
      voirAussi: ['Mouvement le long d’une courbe'],
    },
    {
      terme: 'Mouvement le long d’une courbe',
      definition: 'Variation de la quantité demandée ou offerte provoquée uniquement par une variation du prix du bien lui-même ; la courbe ne bouge pas.',
      exemple: 'Une baisse du prix des billets de train augmente la quantité demandée : on glisse le long de la courbe de demande.',
    },
    {
      terme: 'Toutes choses égales par ailleurs',
      definition: 'Raisonnement qui consiste à étudier l’effet d’une seule variable en supposant que toutes les autres restent constantes.',
      exemple: 'On étudie l’effet du prix sur la quantité demandée en supposant que le revenu et les goûts ne changent pas.',
    },
    {
      terme: 'Disposition à payer',
      definition: 'Prix maximum qu’un acheteur est prêt à payer pour obtenir un bien.',
      exemple: 'Lina est prête à payer jusqu’à 50 € une place de concert ; si elle la paie 35 €, son surplus est de 15 €.',
    },
    {
      terme: 'Surplus du consommateur',
      definition: 'Différence entre le prix maximum que le consommateur était prêt à payer et le prix qu’il paie effectivement ; pour l’ensemble des consommateurs, c’est l’aire située sous la courbe de demande et au-dessus du prix.',
      exemple: 'Dans l’exemple du cours, le surplus des consommateurs vaut (10 − 6) × 8 / 2 = 16.',
    },
    {
      terme: 'Surplus du producteur',
      definition: 'Différence entre le prix que le producteur reçoit et le prix minimum auquel il aurait accepté de vendre (son coût marginal) ; c’est l’aire située au-dessus de la courbe d’offre et en dessous du prix.',
      exemple: 'Dans l’exemple du cours, le surplus des producteurs vaut (6 − 2) × 8 / 2 = 16.',
    },
    {
      terme: 'Gains à l’échange',
      definition: 'Avantages que les acheteurs et les vendeurs retirent de l’échange, mesurés par la somme des surplus ; ils sont maximaux à l’équilibre concurrentiel.',
      exemple: 'Dans l’exemple du cours, les gains à l’échange (surplus total) s’élèvent à 32.',
    },
    {
      terme: 'Taxe forfaitaire unitaire',
      definition: 'Impôt d’un montant fixe prélevé sur chaque unité vendue, quel que soit le prix du bien.',
      exemple: 'Une taxe de 2 € par paquet de cigarettes vendu.',
      voirAussi: ['Perte sèche'],
    },
    {
      terme: 'Perte sèche',
      definition: 'Diminution du surplus total due à une intervention (taxe, prix imposé…) qui fait disparaître des échanges mutuellement avantageux ; elle n’est récupérée par personne.',
      exemple: 'Avec une taxe de 2, le surplus total passe de 32 à 30 (surplus + recettes fiscales) : la perte sèche est de 2.',
    },
    {
      terme: 'Subvention',
      definition: 'Aide financière versée par les pouvoirs publics à un producteur ou à un consommateur, par exemple pour chaque unité vendue, afin d’encourager la production ou la consommation d’un bien.',
      exemple: 'Une aide à l’achat de vélos à assistance électrique.',
    },
    {
      terme: 'Modèle',
      definition: 'Représentation simplifiée de la réalité qui isole quelques variables jugées déterminantes afin d’expliquer un phénomène.',
      exemple: 'Le modèle de concurrence parfaite ne décrit aucun marché réel, mais il permet de comprendre comment se forme un prix.',
    },
  ],

  auteurs: [
    {
      nom: 'Adam Smith',
      dates: '1723-1790',
      idee: 'La « main invisible » : en recherchant leur intérêt personnel, les individus contribuent sans le vouloir à l’intérêt général par le jeu du marché.',
      oeuvre: 'Recherches sur la nature et les causes de la richesse des nations (1776)',
    },
    {
      nom: 'Léon Walras',
      dates: '1834-1910',
      idee: 'Théorise l’équilibre général : tous les marchés s’équilibrent simultanément, comme si un « commissaire-priseur » ajustait les prix jusqu’à égaliser offre et demande.',
      oeuvre: 'Éléments d’économie politique pure (1874)',
    },
    {
      nom: 'Alfred Marshall',
      dates: '1842-1924',
      idee: 'Analyse l’équilibre d’un marché par la confrontation de l’offre et de la demande (les « deux lames des ciseaux ») et formalise le surplus du consommateur.',
      oeuvre: 'Principes d’économie politique (1890)',
    },
    {
      nom: 'Karl Polanyi',
      dates: '1886-1964',
      idee: 'Le marché autorégulateur n’a rien de naturel : il est le produit d’une construction politique et institutionnelle, historiquement récente.',
      oeuvre: 'La Grande Transformation (1944)',
    },
    {
      nom: 'Marie-France Garcia-Parpet',
      idee: 'Étudie un marché au cadran de fraises en Sologne : un marché proche de la concurrence parfaite, construit volontairement par des acteurs locaux (lots standardisés, enchères électroniques, acheteurs séparés des vendeurs).',
      oeuvre: '« La construction sociale d’un marché parfait » (1986)',
    },
  ],

  schemas: [
    {
      id: 'cout-marginal-offre',
      titre: 'Du coût marginal à la courbe d’offre',
      legende: 'Le producteur produit tant que le prix couvre le coût marginal. Au prix de 7, il produit 4 caisses ; au prix de 9, il en produit 5. Barres claires : caisses produites au prix de 7 ; barre hachurée : caisse ajoutée au prix de 9 ; barre blanche : jamais rentable à ces prix. Les couples (prix, quantité) ainsi obtenus forment la courbe d’offre.',
    },
    {
      id: 'deplacement-mouvement',
      titre: 'Déplacement de la demande, mouvement le long de l’offre',
      legende: 'Une hausse du revenu déplace la demande de D1 à D2 (déplacement de courbe). Le prix monte de 6 à 7 : sur la courbe d’offre, on glisse de E1 à E2 (mouvement le long de la courbe), la quantité offerte passe de 8 à 10.',
    },
    {
      id: 'equilibre',
      titre: 'L’équilibre du marché',
      legende: 'Données fictives : demande P = 10 − 0,5Q, offre P = 2 + 0,5Q. Équilibre en E (Q* = 8, P* = 6). Au prix de 8, la quantité offerte (12) dépasse la quantité demandée (4) : excès d’offre.',
    },
    {
      id: 'surplus',
      titre: 'Surplus du consommateur et du producteur',
      legende: 'Le surplus du consommateur (16) est le triangle entre la demande et le prix d’équilibre ; le surplus du producteur (16) est le triangle entre le prix d’équilibre et l’offre. Leur somme (32) mesure les gains à l’échange.',
    },
    {
      id: 'taxe',
      titre: 'Effets d’une taxe forfaitaire unitaire (t = 2)',
      legende: 'L’offre se déplace vers le haut de 2. La quantité passe de 8 à 6. Les acheteurs paient 7, les vendeurs reçoivent 5. Rectangle : recettes fiscales (12). Triangle : perte sèche (2).',
    },
  ],

  pieges: [
    {
      erreur: '« Le prix augmente, donc la demande baisse. »',
      correction: 'C’est la **quantité demandée** qui baisse : on se déplace le long de la courbe. La **demande** (la courbe entière) ne change que si un autre facteur que le prix varie.',
    },
    {
      erreur: '« La demande augmente, donc le prix augmente, donc la demande baisse… »',
      correction: 'Raisonnement circulaire. La demande se déplace vers la droite ; le prix d’équilibre monte ; la **quantité offerte** augmente le long de la courbe d’offre. Le nouvel équilibre a un prix et une quantité plus élevés.',
    },
    {
      erreur: 'Mettre le prix en abscisse et la quantité en ordonnée.',
      correction: 'Convention en économie : **quantité en abscisse** (axe horizontal), **prix en ordonnée** (axe vertical). Toujours nommer les axes et les courbes.',
    },
    {
      erreur: '« Une taxe payée par les producteurs est supportée par les producteurs. »',
      correction: 'Le versement légal ne dit pas qui supporte la charge. Le prix payé par les acheteurs augmente : la charge est **partagée**, selon la pente des courbes.',
    },
    {
      erreur: '« Le prix augmente du montant de la taxe. »',
      correction: 'En général, le prix payé augmente **de moins** que la taxe (ici de 1 pour une taxe de 2), car la quantité échangée diminue.',
    },
    {
      erreur: 'Présenter la concurrence parfaite comme la réalité des marchés ou comme un idéal.',
      correction: 'C’est un **modèle** : il simplifie pour expliquer. Peu de marchés réunissent les cinq hypothèses.',
    },
    {
      erreur: 'Confondre coût marginal et coût moyen.',
      correction: 'Le coût marginal est le coût de la **dernière** unité ; le coût moyen est le coût total divisé par le nombre d’unités produites.',
    },
    {
      erreur: 'Croire que le surplus du producteur est égal au profit.',
      correction: 'Le surplus du producteur ne tient pas compte des **coûts fixes** : il est égal à la recette moins les seuls coûts variables.',
    },
  ],

  synthese: {
    idees: [
      'Le marché est une institution : il repose sur des règles (propriété, contrats, monnaie, normes) et des organisations.',
      'Les marchés se classent selon leur degré de concurrence : concurrence parfaite, oligopole, monopole.',
      'En concurrence parfaite (5 hypothèses), les agents sont preneurs de prix.',
      'La demande est décroissante, l’offre croissante (toutes choses égales par ailleurs).',
      'Le producteur maximise son profit en produisant jusqu’à ce que Cm = P : la courbe d’offre est la courbe de coût marginal croissant.',
      'Variation du prix du bien : mouvement le long de la courbe. Variation d’un autre déterminant : déplacement de la courbe.',
      'À l’équilibre, quantité offerte = quantité demandée ; les excès d’offre ou de demande font varier le prix.',
      'Surplus du consommateur + surplus du producteur = gains à l’échange, maximisés à l’équilibre concurrentiel.',
      'Une taxe forfaitaire unitaire déplace l’offre vers le haut : le prix payé monte, le prix reçu baisse, la quantité diminue ; elle crée des recettes fiscales et une perte sèche.',
    ],
    formules: [
      { tex: '\\text{Profit} = P \\times Q - CT', legende: 'Profit' },
      { tex: 'Cm = \\frac{\\Delta CT}{\\Delta Q}', legende: 'Coût marginal' },
      { tex: 'P = Cm', legende: 'Condition de maximisation du profit en concurrence parfaite' },
      { tex: 'Q_o(P^*) = Q_d(P^*)', legende: 'Équilibre' },
    ],
    mecanismes: [
      ['Prix > prix d’équilibre', 'excès d’offre', 'baisse du prix', 'retour à l’équilibre'],
      ['Hausse du prix', 'unités plus coûteuses rentables', 'Cm = P plus loin', 'hausse de la quantité offerte'],
      ['Taxe de t par unité', 'offre déplacée vers le haut de t', 'prix payé ↑, prix reçu ↓', 'quantité ↓, perte sèche'],
    ],
  },

  quiz: [
    {
      question: 'En concurrence parfaite, les offreurs sont :',
      choix: ['Faiseurs de prix', 'Preneurs de prix', 'Libres de fixer leur prix au-dessus du marché', 'En nombre limité'],
      bonne: 1,
      explication: 'Atomicité et homogénéité : aucun offreur ne peut influencer le prix. Il le prend comme une donnée et choisit seulement sa quantité.',
    },
    {
      question: 'L’hypothèse d’atomicité signifie que :',
      choix: [
        'Les produits sont identiques',
        'Tout le monde connaît les prix',
        'Il y a un très grand nombre d’acheteurs et de vendeurs, aucun ne pouvant influencer le prix',
        'Les entreprises peuvent entrer et sortir librement du marché',
      ],
      bonne: 2,
      explication: 'Les autres propositions correspondent aux hypothèses d’homogénéité, de transparence et de libre entrée.',
    },
    {
      question: 'Dire que le marché est une institution, c’est dire qu’il :',
      choix: [
        'Existe naturellement dès que des individus échangent',
        'Repose sur des règles, des normes et des organisations',
        'Est toujours organisé par l’État',
        'Fonctionne uniquement dans un lieu physique',
      ],
      bonne: 1,
      explication: 'Droit de propriété, contrats, monnaie, normes de qualité, organisateurs du marché : sans ces règles, les échanges seraient trop risqués.',
    },
    {
      question: 'Le prix des places de cinéma augmente (rien d’autre ne change). Sur le graphique :',
      choix: [
        'La courbe de demande se déplace vers la gauche',
        'On se déplace le long de la courbe de demande : la quantité demandée diminue',
        'La courbe de demande se déplace vers la droite',
        'La courbe d’offre se déplace vers la gauche',
      ],
      bonne: 1,
      explication: 'Seul le prix du bien varie : c’est un mouvement le long de la courbe, pas un déplacement de la courbe.',
    },
    {
      question: 'Le revenu des ménages augmente (bien normal). Toutes choses égales par ailleurs :',
      choix: [
        'La demande se déplace vers la droite, le prix et la quantité d’équilibre augmentent',
        'La demande se déplace vers la gauche, le prix baisse',
        'L’offre se déplace vers la droite',
        'Rien ne change, car le prix du bien n’a pas varié',
      ],
      bonne: 0,
      explication: 'Le revenu est un déterminant de la demande autre que le prix : la courbe entière se déplace. Le nouvel équilibre a un prix et une quantité plus élevés.',
    },
    {
      question: 'Le prix de l’énergie utilisée par les producteurs baisse. Toutes choses égales par ailleurs :',
      choix: [
        'La demande se déplace vers la droite',
        'L’offre se déplace vers la droite (vers le bas) : le prix d’équilibre baisse',
        'L’offre se déplace vers la gauche : le prix d’équilibre augmente',
        'On se déplace le long de la courbe d’offre',
      ],
      bonne: 1,
      explication: 'Les coûts de production baissent : à chaque prix, les producteurs offrent davantage. L’offre se déplace vers la droite, le prix baisse, la quantité augmente.',
    },
    {
      question: 'Si le prix pratiqué est supérieur au prix d’équilibre :',
      choix: [
        'Il y a un excès de demande et le prix tend à monter',
        'Il y a un excès d’offre et le prix tend à baisser',
        'Le marché est à l’équilibre',
        'La quantité demandée est supérieure à la quantité offerte',
      ],
      bonne: 1,
      explication: 'À un prix trop élevé, les producteurs offrent plus que ce que les acheteurs demandent : des invendus apparaissent et poussent le prix à la baisse.',
    },
    {
      question: 'Avec $Q_d = 20 - 2P$ et $Q_o = 2P - 4$, l’équilibre est :',
      choix: ['P* = 4 ; Q* = 12', 'P* = 6 ; Q* = 8', 'P* = 8 ; Q* = 4', 'P* = 5 ; Q* = 10'],
      bonne: 1,
      explication: '20 − 2P = 2P − 4 ⟺ 4P = 24 ⟺ P = 6. Puis Q = 20 − 2 × 6 = 8.',
    },
    {
      question: 'Avec les mêmes fonctions, au prix de 8, on observe :',
      choix: ['Un excès de demande de 8', 'Un excès d’offre de 8', 'Un excès d’offre de 4', 'L’équilibre'],
      bonne: 1,
      explication: 'Qd = 20 − 16 = 4 et Qo = 16 − 4 = 12 : il y a 12 − 4 = 8 unités d’excès d’offre.',
    },
    {
      question: 'Le coût marginal est :',
      choix: [
        'Le coût total divisé par la quantité produite',
        'Le coût de la dernière unité produite',
        'L’ensemble des coûts fixes',
        'Le prix de vente diminué du profit',
      ],
      bonne: 1,
      explication: 'Cm = ΔCT / ΔQ. Le coût total divisé par la quantité est le coût moyen.',
    },
    {
      question: 'Une entreprise en concurrence parfaite, avec un coût marginal croissant, maximise son profit en produisant la quantité pour laquelle :',
      choix: ['Le coût marginal est minimal', 'Le prix est égal au coût marginal', 'La recette totale est maximale', 'Le coût total est minimal'],
      bonne: 1,
      explication: 'Tant que P > Cm, chaque unité supplémentaire augmente le profit ; au-delà de P = Cm, elle le diminue.',
    },
    {
      question: 'Les coûts marginaux de la 1re à la 6e unité sont 3, 4, 5, 6, 8 et 10 €. Au prix de 7 €, combien d’unités l’entreprise produit-elle ?',
      choix: ['3', '4', '5', '6'],
      bonne: 1,
      explication: 'Les 4 premières unités coûtent moins de 7 € et augmentent le profit. La 5e coûterait 8 € pour 7 € de recette : elle ferait baisser le profit.',
    },
    {
      question: 'Le surplus du consommateur est :',
      choix: [
        'Le profit réalisé par les entreprises',
        'L’écart entre le prix maximum que l’acheteur était prêt à payer et le prix payé',
        'L’écart entre le prix payé et le coût marginal',
        'La quantité achetée au-delà de l’équilibre',
      ],
      bonne: 1,
      explication: 'C’est le « gain » de l’acheteur : il paie moins que ce qu’il était prêt à payer.',
    },
    {
      question: 'Demande P = 10 − 0,5Q, prix d’équilibre 6, quantité d’équilibre 8. Le surplus du consommateur vaut :',
      choix: ['32', '24', '16', '8'],
      bonne: 2,
      explication: 'Aire du triangle : (10 − 6) × 8 / 2 = 16.',
    },
    {
      question: 'La somme des surplus du consommateur et du producteur est maximale :',
      choix: [
        'Quand le prix est le plus bas possible',
        'Quand le prix est le plus élevé possible',
        'À l’équilibre concurrentiel',
        'Quand l’État fixe le prix',
      ],
      bonne: 2,
      explication: 'À l’équilibre, tous les échanges mutuellement avantageux ont lieu, et seulement eux : les gains à l’échange sont maximaux.',
    },
    {
      question: 'Une taxe forfaitaire unitaire versée par les producteurs :',
      choix: [
        'Déplace la demande vers le bas',
        'Déplace l’offre vers le haut du montant de la taxe',
        'N’a aucun effet sur la quantité échangée',
        'Augmente le prix payé exactement du montant de la taxe',
      ],
      bonne: 1,
      explication: 'Pour chaque quantité, les producteurs exigent t de plus. Le prix payé augmente en général de moins que t, et la quantité échangée diminue.',
    },
    {
      question: 'Dans l’exemple du cours, une taxe de 2 par unité fait passer la quantité de 8 à 6. Les recettes fiscales sont de :',
      choix: ['16', '12', '6', '2'],
      bonne: 1,
      explication: 'Recettes = taxe unitaire × quantité échangée après la taxe = 2 × 6 = 12.',
    },
    {
      question: 'La perte sèche liée à une taxe correspond :',
      choix: [
        'Aux recettes perçues par l’État',
        'À la baisse du surplus du consommateur seulement',
        'Aux échanges mutuellement avantageux qui n’ont plus lieu',
        'Au profit perdu par les entreprises qui ferment',
      ],
      bonne: 2,
      explication: 'Une partie du surplus perdu par les acheteurs et les vendeurs n’est récupérée par personne, pas même par l’État : c’est la perte sèche.',
    },
    {
      question: 'L’étude du marché au cadran de Fontaines-en-Sologne par M.-F. Garcia-Parpet montre que :',
      choix: [
        'La concurrence parfaite apparaît spontanément',
        'Un marché proche de la concurrence parfaite peut être construit volontairement',
        'Les marchés agricoles sont toujours des monopoles',
        'Les prix sont fixés par l’État',
      ],
      bonne: 1,
      explication: 'Des acteurs locaux ont organisé le marché (lots standardisés, enchères électroniques, séparation acheteurs/vendeurs) pour le rapprocher des hypothèses du modèle.',
    },
  ],
};
