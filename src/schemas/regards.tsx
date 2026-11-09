/** Schémas des regards croisés (XI et XII). */
import { Chaine } from './eco';
import { Flux, type Noeud } from './Flux';

export function Mutualisation() {
  const assures: Noeud[] = [0, 1, 2, 3, 4].map((i) => ({
    id: `a${i}`,
    x: 6 + i * 72,
    y: 30,
    w: 60,
    h: 34,
    lignes: [i === 2 ? '…' : '200 €'],
    style: i === 2 ? ('contour' as const) : ('pale' as const),
  }));
  return (
    <Flux
      hauteur={300}
      titreAccessible="Mille assurés versent 200 euros chacun dans une caisse commune de 200 000 euros qui indemnise dix sinistrés à hauteur de 20 000 euros"
      noeuds={[
        ...assures,
        { id: 'caisse', x: 70, y: 124, w: 220, h: 54, lignes: ['Caisse commune', '1 000 × 200 € = 200 000 €'], style: 'orange' },
        { id: 'sin', x: 60, y: 238, w: 240, h: 54, lignes: ['10 sinistrés (1 %)', 'indemnisés 20 000 € chacun'] },
      ]}
      liens={[...assures.map((a) => ({ de: a.id, a: 'caisse' })), { de: 'caisse', a: 'sin', etiquette: 'indemnisation', dx: 52 }]}
      notes={[{ x: 180, y: 18, texte: '1 000 ASSURÉS · PRIME PURE DE 200 € CHACUN' }]}
    />
  );
}

export function CycleVie() {
  return (
    <Chaine
      titre="Cycle de vie d'une entreprise : création, croissance, changement de statut, disparition"
      h={50}
      lignes={[
        ['Création', 'projet, financement, choix du statut'],
        ['Croissance', 'interne (investissement) ou externe (rachat)'],
        ['Changement de statut juridique', 'ex. : entreprise individuelle → SAS → SA cotée'],
        ['Disparition', 'cessation, défaillance ou absorption'],
      ]}
    />
  );
}

export function PartiesPrenantes() {
  const internes = ['Salariés', 'Managers', 'Actionnaires'];
  const noeuds: Noeud[] = [
    ...internes.map((t, i) => ({ id: `i${i}`, x: 6 + i * 120, y: 24, w: 108, h: 36, lignes: [t], style: 'pale' as const })),
    { id: 'ent', x: 112, y: 134, w: 136, h: 48, lignes: ['Entreprise'], style: 'orange' },
    { id: 'cl', x: 4, y: 104, w: 96, h: 34, lignes: ['Clients'] },
    { id: 'fo', x: 4, y: 178, w: 96, h: 34, lignes: ['Fournisseurs'] },
    { id: 'ba', x: 260, y: 104, w: 96, h: 34, lignes: ['Banques'] },
    { id: 'et', x: 260, y: 178, w: 96, h: 34, lignes: ['État'] },
    { id: 'co', x: 54, y: 262, w: 116, h: 34, lignes: ['Collectivités'] },
    { id: 'ri', x: 190, y: 262, w: 116, h: 34, lignes: ['Riverains'] },
  ];
  const ids = noeuds.filter((n) => n.id !== 'ent').map((n) => n.id);
  return (
    <Flux
      hauteur={306}
      titreAccessible="L'entreprise au centre de ses parties prenantes internes (salariés, managers, actionnaires) et externes (clients, fournisseurs, banques, État, collectivités, riverains)"
      noeuds={noeuds}
      liens={ids.map((id) => ({ de: id, a: 'ent', sansFleche: true }))}
      notes={[
        { x: 180, y: 14, texte: 'PARTIES PRENANTES INTERNES' },
        { x: 180, y: 252, texte: 'PARTIES PRENANTES EXTERNES' },
      ]}
    />
  );
}
