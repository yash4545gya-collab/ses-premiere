/** Schémas des chapitres de sociologie et science politique (VI à X). */
import { Chaine } from './eco';
import { Flux, type Lien, type Noeud } from './Flux';

export function InstancesSocialisation() {
  const haut = ['Famille', 'École', 'Pairs', 'Médias'];
  const bas = ['Travail', 'Couple', 'Engagement'];
  const noeuds: Noeud[] = [
    ...haut.map((t, i) => ({ id: `h${i}`, x: 4 + i * 90, y: 26, w: 82, h: 36, lignes: [t], style: 'pale' as const })),
    { id: 'ind', x: 95, y: 128, w: 170, h: 60, lignes: ['L’individu', 'normes, valeurs, habitus'], style: 'orange' },
    ...bas.map((t, i) => ({ id: `b${i}`, x: 4 + i * 120, y: 258, w: 112, h: 38, lignes: [t] })),
  ];
  const liens: Lien[] = [
    ...haut.map((_, i) => ({ de: `h${i}`, a: 'ind' })),
    ...bas.map((_, i) => ({ de: `b${i}`, a: 'ind' })),
  ];
  return (
    <Flux
      hauteur={306}
      noeuds={noeuds}
      liens={liens}
      titreAccessible="Famille, école, pairs et médias (socialisation primaire) ; travail, couple et engagement (socialisations secondaires) agissent sur l'individu"
      notes={[
        { x: 180, y: 16, texte: 'SOCIALISATION PRIMAIRE' },
        { x: 180, y: 248, texte: 'SOCIALISATIONS SECONDAIRES' },
      ]}
    />
  );
}

export function LiensFortsFaibles() {
  return (
    <Flux
      hauteur={292}
      titreAccessible="Réseau d'un individu : liens forts avec des proches qui se connaissent entre eux, liens faibles vers d'autres milieux"
      noeuds={[
        { id: 'ego', x: 132, y: 136, w: 72, h: 38, lignes: ['Moi'], style: 'orange' },
        { id: 'p', x: 6, y: 50, w: 92, h: 34, lignes: ['Parent'], style: 'pale' },
        { id: 'a', x: 6, y: 138, w: 92, h: 34, lignes: ['Ami proche'], style: 'pale' },
        { id: 'c', x: 6, y: 226, w: 92, h: 34, lignes: ['Conjoint'], style: 'pale' },
        { id: 'ac', x: 230, y: 40, w: 124, h: 34, lignes: ['Ancien camarade'] },
        { id: 'co', x: 230, y: 236, w: 124, h: 34, lignes: ['Connaissance'] },
        { id: 'aut', x: 240, y: 128, w: 114, h: 54, lignes: ['Autre milieu :', 'offre d’emploi'], style: 'contour' },
      ]}
      liens={[
        { de: 'ego', a: 'p', sansFleche: true, epais: true },
        { de: 'ego', a: 'a', sansFleche: true, epais: true },
        { de: 'ego', a: 'c', sansFleche: true, epais: true },
        { de: 'p', a: 'a', sansFleche: true },
        { de: 'a', a: 'c', sansFleche: true },
        { de: 'ego', a: 'ac', sansFleche: true, pointille: true },
        { de: 'ego', a: 'co', sansFleche: true, pointille: true },
        { de: 'ac', a: 'aut', etiquette: 'information', dx: 34 },
      ]}
      notes={[
        { x: 52, y: 30, texte: 'LIENS FORTS' },
        { x: 292, y: 26, texte: 'LIENS FAIBLES' },
      ]}
    />
  );
}

export function CarriereDeviante() {
  return (
    <Chaine
      titre="Carrière déviante : transgression, étiquetage, stigmatisation, entrée dans un groupe déviant"
      h={50}
      lignes={[
        ['1. Transgression d’une norme', '(souvent occasionnelle)'],
        ['2. Désignation publique', 'étiquetage comme « déviant »'],
        ['3. Stigmatisation, exclusion', 'intériorisation de l’identité déviante'],
        ['4. Entrée dans un groupe', 'déviant organisé'],
      ]}
    />
  );
}

/** Entonnoir : largeurs proportionnelles aux effectifs */
function Entonnoir({
  etages,
  titre,
  pertes,
}: {
  etages: { lib: string; n?: number; largeur?: number }[];
  titre: string;
  pertes?: string[];
}) {
  const h = 42;
  const gap = 26;
  const max = Math.max(...etages.map((e) => e.n ?? 0));
  const noeuds: Noeud[] = etages.map((e, i) => {
    const w = e.largeur ?? Math.round((340 * (e.n ?? max)) / max);
    return { id: `e${i}`, x: 180 - w / 2, y: 10 + i * (h + gap), w, h, lignes: [e.lib], style: i === 0 ? 'pale' : i === etages.length - 1 ? 'orange' : 'blanc' };
  });
  const liens: Lien[] = etages.slice(1).map((_, i) => ({ de: `e${i}`, a: `e${i + 1}`, etiquette: pertes?.[i], dx: 78, dy: 4 }));
  return <Flux hauteur={10 + etages.length * (h + gap) - gap + 10} noeuds={noeuds} liens={liens} titreAccessible={titre} />;
}

export function ChiffreNoir() {
  return (
    <Entonnoir
      titre="De la délinquance réelle à la délinquance enregistrée : à chaque étape, une partie des infractions disparaît des statistiques"
      etages={[
        { lib: 'Infractions réellement commises', largeur: 340 },
        { lib: 'Connues des victimes', largeur: 280 },
        { lib: 'Signalées (plaintes)', largeur: 220 },
        { lib: 'Enregistrées', largeur: 160 },
      ]}
      pertes={['non perçues', 'non déclarées', 'non enregistrées']}
    />
  );
}

export function Sondage() {
  return (
    <Chaine
      titre="Étapes d'un sondage : population, échantillon par quotas, questionnaire, redressement, résultat avec marge d'erreur"
      h={50}
      lignes={[
        ['Population étudiée', '(ex. : les inscrits sur les listes)'],
        ['Échantillon par quotas : ≈ 1 000 pers.', 'sexe, âge, PCS, région, agglomération'],
        ['Questionnaire', 'en ligne ou par téléphone'],
        ['Redressement', 'pondération des réponses'],
        ['Résultat ± marge d’erreur', 'ex. : 52 % ± 3 points'],
      ]}
    />
  );
}

export function Participation() {
  return (
    <Entonnoir
      titre="Données fictives : 1 100 personnes en droit de voter, 1 000 inscrits, 720 votants, 690 suffrages exprimés"
      etages={[
        { lib: 'En droit de voter : 1 100', n: 1100 },
        { lib: 'Inscrits : 1 000', n: 1000 },
        { lib: 'Votants : 720', n: 720 },
        { lib: 'Exprimés : 690', n: 690 },
      ]}
      pertes={['100 non-inscrits', '280 abstentionnistes', '30 blancs et nuls']}
    />
  );
}
