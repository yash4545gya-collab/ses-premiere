/**
 * ORDRE DES CHAPITRES
 * -------------------
 * C'est le seul fichier à modifier pour réordonner les chapitres :
 * déplace les lignes. Les chiffres romains (I, II, III…) suivent cet ordre.
 *
 * `chapitreManuel` : numéro du chapitre dans le manuel Hachette SES 1re (éd. 2023).
 * Laisse `undefined` tant que tu ne l'as pas vérifié ; quand il est renseigné,
 * il s'affiche discrètement sur la page du chapitre.
 *
 * Ordre par défaut = ordre du programme officiel (BO spécial n°1 du 22 janvier 2019).
 */
export interface EntreeOrdre {
  id: string;
  chapitreManuel?: number;
}

export const ORDRE: EntreeOrdre[] = [
  // Science économique
  { id: 'marche-concurrentiel', chapitreManuel: undefined },
  { id: 'marches-imparfaits', chapitreManuel: undefined },
  { id: 'defaillances-marche', chapitreManuel: undefined },
  { id: 'financement', chapitreManuel: undefined },
  { id: 'monnaie', chapitreManuel: undefined },
  // Sociologie et science politique
  { id: 'socialisation', chapitreManuel: undefined },
  { id: 'liens-sociaux', chapitreManuel: undefined },
  { id: 'deviance', chapitreManuel: undefined },
  { id: 'opinion-publique', chapitreManuel: undefined },
  { id: 'vote', chapitreManuel: undefined },
  // Regards croisés
  { id: 'risques-protection-sociale', chapitreManuel: undefined },
  { id: 'entreprises', chapitreManuel: undefined },
];
