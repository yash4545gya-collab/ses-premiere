/**
 * Schémas en boîtes et flèches (circuits, processus, acteurs).
 * Conçus en largeur 360 pour rester lisibles sur téléphone.
 * Les flèches sont calculées entre les bords des boîtes.
 */

export interface Noeud {
  id: string;
  /** coin haut-gauche */
  x: number;
  y: number;
  w: number;
  h: number;
  /** une entrée par ligne */
  lignes: string[];
  style?: 'orange' | 'blanc' | 'pale' | 'contour';
  /** petite étiquette en capitales au-dessus du texte */
  sur?: string;
}

export interface Lien {
  de: string;
  a: string;
  etiquette?: string;
  /** décalage de l'étiquette (px) */
  dx?: number;
  dy?: number;
  /** les deux sens */
  double?: boolean;
  pointille?: boolean;
  /** trait simple, sans pointe (liens d'un réseau) */
  sansFleche?: boolean;
  epais?: boolean;
}

export interface FluxProps {
  hauteur: number;
  largeur?: number;
  noeuds: Noeud[];
  liens: Lien[];
  titreAccessible: string;
  /** textes libres */
  notes?: { x: number; y: number; texte: string; ancre?: 'start' | 'middle' | 'end' }[];
}

function bord(n: Noeud, vers: { x: number; y: number }) {
  const cx = n.x + n.w / 2;
  const cy = n.y + n.h / 2;
  const dx = vers.x - cx;
  const dy = vers.y - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const tx = dx !== 0 ? n.w / 2 / Math.abs(dx) : Infinity;
  const ty = dy !== 0 ? n.h / 2 / Math.abs(dy) : Infinity;
  const t = Math.min(tx, ty);
  return { x: cx + dx * t, y: cy + dy * t };
}

export function Flux({ hauteur, largeur = 360, noeuds, liens, titreAccessible, notes }: FluxProps) {
  const parId = new Map(noeuds.map((n) => [n.id, n]));
  return (
    <svg viewBox={`0 0 ${largeur} ${hauteur}`} role="img" aria-label={titreAccessible} className="flux">
      <defs>
        <marker id="flux-pointe" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--brun)" />
        </marker>
      </defs>
      {liens.map((l, i) => {
        const A = parId.get(l.de);
        const B = parId.get(l.a);
        if (!A || !B) return null;
        const cA = { x: A.x + A.w / 2, y: A.y + A.h / 2 };
        const cB = { x: B.x + B.w / 2, y: B.y + B.h / 2 };
        const p1 = bord(A, cB);
        const p2 = bord(B, cA);
        // petit retrait pour que la pointe ne touche pas la boîte
        const len = Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1;
        const ux = (p2.x - p1.x) / len;
        const uy = (p2.y - p1.y) / len;
        const r = l.sansFleche ? 0 : 3;
        const x1 = p1.x + ux * (l.double ? r : 0);
        const y1 = p1.y + uy * (l.double ? r : 0);
        const x2 = p2.x - ux * r;
        const y2 = p2.y - uy * r;
        return (
          <g key={i}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--brun)"
              strokeWidth={l.epais ? 2.25 : 1.25}
              strokeDasharray={l.pointille ? '4 4' : undefined}
              markerEnd={l.sansFleche ? undefined : "url(#flux-pointe)"}
              markerStart={l.double ? 'url(#flux-pointe)' : undefined}
            />
            {l.etiquette && (
              <text x={(x1 + x2) / 2 + (l.dx ?? 0)} y={(y1 + y2) / 2 + (l.dy ?? 0)} textAnchor="middle" className="f-lien">
                {l.etiquette}
              </text>
            )}
          </g>
        );
      })}
      {noeuds.map((n) => {
        const st = n.style ?? 'blanc';
        const fond = st === 'orange' ? 'var(--orange)' : st === 'pale' ? 'var(--orange-pale)' : st === 'contour' ? 'var(--fond)' : 'var(--carte)';
        const contour = st === 'orange' ? 'var(--orange)' : st === 'contour' ? 'var(--orange)' : 'var(--brun)';
        const hLigne = 17;
        const nbL = n.lignes.length + (n.sur ? 1 : 0);
        const y0 = n.y + n.h / 2 - ((nbL - 1) * hLigne) / 2 + 5;
        return (
          <g key={n.id}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} fill={fond} stroke={contour} strokeWidth="1" />
            {n.sur && (
              <text x={n.x + n.w / 2} y={y0 - 1} textAnchor="middle" className="f-sur">
                {n.sur}
              </text>
            )}
            {n.lignes.map((t, k) => (
              <text key={k} x={n.x + n.w / 2} y={y0 + (k + (n.sur ? 1 : 0)) * hLigne} textAnchor="middle" className="f-texte">
                {t}
              </text>
            ))}
          </g>
        );
      })}
      {notes?.map((n, i) => (
        <text key={i} x={n.x} y={n.y} textAnchor={n.ancre ?? 'middle'} className="f-lien">
          {n.texte}
        </text>
      ))}
    </svg>
  );
}
