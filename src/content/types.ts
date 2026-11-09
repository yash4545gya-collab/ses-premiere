/**
 * Types du contenu du site.
 *
 * Dans tous les champs de texte, deux balises légères sont reconnues :
 *   **terme**  → terme clé (souligné orange)
 *   $x^2$      → formule KaTeX en ligne
 */

export type Domaine = 'Science économique' | 'Sociologie et science politique' | 'Regards croisés';

/** Une notion du programme, rédigée comme une définition « bac ». */
export interface Definition {
  terme: string;
  /** 1 à 2 phrases, rigoureuses. */
  definition: string;
  /** Un exemple concret. */
  exemple: string;
  /** Termes liés (affichés en « voir aussi »). */
  voirAussi?: string[];
}

export interface Auteur {
  nom: string;
  /** ex. « 1723-1790 » */
  dates?: string;
  /** L'idée, en une ligne. */
  idee: string;
  oeuvre?: string;
}

/** Question de QCM. `bonne` est l'indice (0-based) de la bonne réponse dans `choix`. */
export interface Question {
  question: string;
  choix: string[];
  bonne: number;
  explication: string;
}

/** Les blocs qui composent une partie de « L'essentiel ». */
export type Bloc =
  | { type: 'texte'; texte: string }
  /** Chaîne causale A → B → C */
  | { type: 'mecanisme'; titre?: string; etapes: string[] }
  | { type: 'formule'; tex: string; legende?: string }
  | { type: 'liste'; items: string[] }
  | { type: 'tableau'; titre?: string; entetes: string[]; lignes: string[][]; source?: string }
  /** Renvoi à un schéma déclaré dans `schemas` (par son id) */
  | { type: 'schema'; id: string }
  | { type: 'encadre'; titre: string; texte: string };

export interface Partie {
  titre: string;
  blocs: Bloc[];
}

export interface Piege {
  erreur: string;
  correction: string;
}

export interface SchemaRef {
  /** Clé dans le registre `src/schemas/index.tsx` */
  id: string;
  titre: string;
  legende: string;
}

/** Ce qui identifie un chapitre (connu même avant que le cours soit rédigé). */
export interface ChapitreMeta {
  /** Identifiant stable, utilisé dans l'URL et dans ordre.ts */
  id: string;
  /** Le questionnement du programme */
  titre: string;
  /** Titre court pour les tuiles et la navigation */
  titreCourt: string;
  domaine: Domaine;
  /** Objectifs d'apprentissage du programme officiel (2019) */
  objectifs: string[];
}

export interface Chapitre extends ChapitreMeta {
  essentiel: {
    problematique: string;
    parties: Partie[];
  };
  definitions: Definition[];
  auteurs: Auteur[];
  schemas: SchemaRef[];
  pieges: Piege[];
  synthese: {
    /** Les idées à retenir, une phrase chacune */
    idees: string[];
    /** Formules à connaître (TeX) */
    formules?: { tex: string; legende?: string }[];
    /** Mécanismes à savoir réciter */
    mecanismes?: string[][];
  };
  quiz: Question[];
}

/* -------- Types des autres sections (remplis aux étapes suivantes) -------- */

/** Formules connues du vérificateur (scripts/verifier-contenu.ts), qui recalcule chaque réponse. */
export type FormuleVerif =
  | 'proportion'
  | 'tauxVariation'
  | 'coefficientMultiplicateur'
  | 'tauxDepuisCm'
  | 'cmDepuisTaux'
  | 'tauxCumule'
  | 'tauxMoyen'
  | 'indice'
  | 'tauxEntreIndices'
  | 'moyenne'
  | 'moyennePonderee'
  | 'mediane'
  | 'ecartPoints'
  | 'tauxReel'
  | 'valeurReelle'
  | 'elasticite'
  | 'pente'
  | 'valeurFinale';

export type Exercice =
  | {
      type: 'nombre';
      enonce: string;
      /** Réponse attendue, recalculée par le vérificateur à partir de `verif` */
      reponse: number;
      /** Tolérance acceptée (ex. 0.1 pour un arrondi au dixième) */
      tolerance: number;
      unite?: string;
      verif: { f: FormuleVerif; args: (number | number[])[] };
      correction: string;
    }
  | {
      type: 'qcm';
      enonce: string;
      choix: string[];
      bonne: number;
      correction: string;
    };

export interface Technique {
  id: string;
  titre: string;
  intro: string;
  formules: { tex: string; legende?: string }[];
  /** Comment rédiger le résultat (phrases modèles) */
  phraseType: string[];
  exemple: { enonce: string; resolution: string[]; tableau?: { entetes: string[]; lignes: string[][]; source: string } };
  erreurFrequente: string[];
  /** Compléments de cours (blocs) */
  complements?: Bloc[];
  /** Clé du calculateur interactif (registre des calculateurs) */
  calculateur: string;
  exercices: Exercice[];
}

export type TypeExercice = 'EC1' | 'EC2' | 'EC3' | 'Dissertation';

export interface DocumentSujet {
  titre: string;
  /** Texte, ou tableau de données */
  contenu?: string;
  tableau?: { entetes: string[]; lignes: string[][] };
  /** Source réelle, ou « Données fictives » */
  source: string;
}

export interface Sujet {
  id: string;
  type: TypeExercice;
  /** Ids des chapitres concernés */
  chapitres: string[];
  /** 'officiel' seulement si la source exacte est connue */
  origine: 'officiel' | 'type';
  /** Pour un sujet officiel : session, code du sujet */
  sourceOfficielle?: string;
  /** Lien vers le PDF officiel (eduscol) */
  lienOfficiel?: string;
  /** Précision affichée (ex. « sujet de Terminale qui mobilise le chapitre II de Première ») */
  remarque?: string;
  /** Titre court pour les listes */
  titre: string;
  /** true si la consigne est reformulée (texte exact dans le PDF officiel) */
  consigneReformulee?: boolean;
  consigne: string;
  documents?: DocumentSujet[];
  /** Documents d'un sujet officiel, seulement décrits (à consulter dans le PDF) */
  documentsDecrits?: string[];
  dureeMinutes: number;
  corrige: {
    notions: string[];
    plan?: { titre: string; paragraphes: string[] }[];
    arguments?: string[];
    reponseModele?: string;
    erreursAEviter: string[];
  };
}

export interface FicheMethode {
  id: string;
  titre: string;
  /** ex. « Partie 1 · 4 points · environ 15 min » */
  sousTitre?: string;
  intro: string;
  /** Ce que le correcteur attend */
  attendus?: string[];
  /** Méthode pas à pas */
  etapes?: { titre: string; texte: string }[];
  /** Copie modèle sur un sujet de Première */
  modele?: {
    sujet: string;
    documents?: DocumentSujet[];
    /** Paragraphes de la copie ; un titre facultatif par paragraphe (« Introduction », « I. A. »…) */
    copie: { titre?: string; texte: string }[];
    commentaire?: string;
  };
  /** Grille d'auto-évaluation */
  grille?: string[];
  /** Compléments libres */
  parties?: Partie[];
}
