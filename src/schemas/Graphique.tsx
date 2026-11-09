/**
 * Moteur de graphiques économiques (quantité en abscisse, prix en ordonnée).
 * Les courbes sont des droites P = a + b·Q ; les intersections sont calculées,
 * jamais placées à l'œil.
 */
import type { ReactNode } from 'react';

export interface Droite {
  /** P = a + b·Q */
  a: number;
  b: number;
  etiquette: string;
  style: 'demande' | 'offre' | 'offre2' | 'demande2' | 'cout';
  /** Limiter le tracé à Q ∈ [qMin, qMax] */
  qMin?: number;
  qMax?: number;
}

export interface Point {
  q: number;
  p: number;
  etiquette?: string;
  /** Pointillés vers les axes + graduations */
  projections?: boolean;
  /** Libellés de graduation (sinon la valeur) */
  libQ?: string;
  libP?: string;
}

export interface Zone {
  points: [number, number][];
  motif: 'pale' | 'hachures' | 'orange' | 'brun' | 'blanc';
  contour?: boolean;
  etiquette?: string;
  /** Position de l’étiquette (coordonnées économiques) */
  at?: [number, number];
}

export interface Fleche {
  de: [number, number];
  a: [number, number];
}

export interface Segment {
  de: [number, number];
  a: [number, number];
  pointille?: boolean;
  etiquette?: string;
}

export interface GraphiqueProps {
  qMax: number;
  pMax: number;
  droites: Droite[];
  points?: Point[];
  zones?: Zone[];
  fleches?: Fleche[];
  segments?: Segment[];
  titreAccessible: string;
  /** Graduations supplémentaires sur l'axe des prix */
  marquesP?: { p: number; lib: string }[];
  marquesQ?: { q: number; lib: string }[];
  libQ?: string;
  libP?: string;
  /** Textes libres (coordonnées économiques) */
  textes?: { q: number; p: number; texte: string; ancre?: "start" | "middle" | "end" }[];
}

const L = 500;
const H = 370;
const M = { g: 58, d: 62, h: 26, b: 50 };

export const intersection = (d1: { a: number; b: number }, d2: { a: number; b: number }) => {
  const q = (d2.a - d1.a) / (d1.b - d2.b);
  return { q, p: d1.a + d1.b * q };
};

const STYLES: Record<Droite['style'], { couleur: string; epaisseur: number; tirets?: string }> = {
  demande: { couleur: 'var(--encre)', epaisseur: 2.25 },
  demande2: { couleur: 'var(--encre)', epaisseur: 2.25, tirets: '7 5' },
  offre: { couleur: 'var(--orange)', epaisseur: 2.75 },
  offre2: { couleur: 'var(--orange)', epaisseur: 2.75, tirets: '7 5' },
  cout: { couleur: 'var(--brun)', epaisseur: 2.25 },
};

export function Graphique(props: GraphiqueProps) {
  const { qMax, pMax } = props;
  const x = (q: number) => M.g + (q / qMax) * (L - M.g - M.d);
  const y = (p: number) => H - M.b - (p / pMax) * (H - M.h - M.b);
  const pt = ([q, p]: [number, number]) => `${x(q)},${y(p)}`;

  const tracer = (d: Droite) => {
    // découpe la droite dans le cadre [0,qMax] × [0,pMax]
    let q0 = d.qMin ?? 0;
    let q1 = d.qMax ?? qMax;
    const pDe = (q: number) => d.a + d.b * q;
    const qDe = (p: number) => (p - d.a) / d.b;
    if (d.b !== 0) {
      const qs = [qDe(0), qDe(pMax)].sort((m, n) => m - n);
      q0 = Math.max(q0, qs[0]);
      q1 = Math.min(q1, qs[1]);
    }
    return { q0, q1, p0: pDe(q0), p1: pDe(q1) };
  };

  const elements: ReactNode[] = [];

  // Étiquettes en bout de courbe, décalées vers le bas si elles se chevauchent
  const etiquettes = props.droites.map((d) => {
    const t = tracer(d);
    const pEtiq = pMax * 0.09;
    const fin = d.b < 0 && t.p1 < pEtiq ? { q: (pEtiq - d.a) / d.b, p: pEtiq } : { q: t.q1, p: t.p1 };
    return { x: x(fin.q) + 7, y: y(fin.p) + (d.b < 0 ? -3 : 4), w: d.etiquette.length * 8.5 };
  });
  for (let i = 1; i < etiquettes.length; i++) {
    for (let essai = 0; essai < 6; essai++) {
      const e = etiquettes[i];
      const gene = etiquettes
        .slice(0, i)
        .some((o) => Math.abs(o.y - e.y) < 17 && e.x < o.x + o.w && o.x < e.x + e.w);
      if (!gene) break;
      e.y += 19;
    }
  }

  return (
    <svg viewBox={`0 0 ${L} ${H}`} role="img" aria-label={props.titreAccessible} className="graphique">
      <defs>
        <pattern id="hachures" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="7" height="7" fill="var(--carte)" />
          <line x1="0" y1="0" x2="0" y2="7" stroke="var(--brun)" strokeWidth="1.3" />
        </pattern>
        <marker id="pointe" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--brun)" />
        </marker>
        <marker id="pointe-axe" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--encre)" />
        </marker>
      </defs>

      {/* zones */}
      {props.zones?.map((z, i) => (
        <polygon
          key={`z${i}`}
          points={z.points.map(pt).join(' ')}
          fill={
            z.motif === 'blanc'
              ? 'var(--carte)'
              : z.motif === 'pale'
              ? 'var(--orange-pale)'
              : z.motif === 'hachures'
                ? 'url(#hachures)'
                : z.motif === 'orange'
                  ? 'var(--orange)'
                  : 'var(--brun)'
          }
          fillOpacity={z.motif === 'orange' ? 0.45 : z.motif === 'brun' ? 0.75 : 1}
          stroke={z.contour ? "var(--brun)" : "none"}
          strokeWidth={z.contour ? 1 : 0}
        />
      ))}

      {/* axes */}
      <line x1={x(0)} y1={y(0)} x2={L - M.d + 30} y2={y(0)} stroke="var(--encre)" strokeWidth="1.25" markerEnd="url(#pointe-axe)" />
      <line x1={x(0)} y1={y(0)} x2={x(0)} y2={M.h - 8} stroke="var(--encre)" strokeWidth="1.25" markerEnd="url(#pointe-axe)" />
      <text x={L - M.d + 30} y={y(0) + 30} textAnchor="end" className="g-axe">
        {props.libQ ?? 'Quantité'}
      </text>
      <text x={x(0) + 10} y={M.h - 2} className="g-axe">
        {props.libP ?? 'Prix'}
      </text>
      <text x={x(0) - 8} y={y(0) + 18} textAnchor="end" className="g-grad">
        0
      </text>

      {/* segments */}
      {props.segments?.map((s, i) => (
        <g key={`s${i}`}>
          <line
            x1={x(s.de[0])}
            y1={y(s.de[1])}
            x2={x(s.a[0])}
            y2={y(s.a[1])}
            stroke="var(--brun)"
            strokeWidth="1.25"
            strokeDasharray={s.pointille ? '3 4' : undefined}
          />
          {s.etiquette && (
            <text x={x(s.a[0]) + 6} y={y(s.a[1]) + 4} className="g-etiq">
              {s.etiquette}
            </text>
          )}
        </g>
      ))}

      {/* droites */}
      {props.droites.map((d, i) => {
        const t = tracer(d);
        const st = STYLES[d.style];
        const pos = etiquettes[i];
        return (
          <g key={`d${i}`}>
            <line
              x1={x(t.q0)}
              y1={y(t.p0)}
              x2={x(t.q1)}
              y2={y(t.p1)}
              stroke={st.couleur}
              strokeWidth={st.epaisseur}
              strokeDasharray={st.tirets}
              strokeLinecap="round"
              className={st.tirets ? undefined : "g-trace"}
              pathLength={st.tirets ? undefined : 1}
            />
            <text x={pos.x} y={pos.y} className="g-courbe">
              {d.etiquette}
            </text>
          </g>
        );
      })}

      {/* graduations supplémentaires */}
      {props.marquesP?.map((m, i) => (
        <text key={`mp${i}`} x={x(0) - 8} y={y(m.p) + 4} textAnchor="end" className="g-grad">
          {m.lib}
        </text>
      ))}
      {props.marquesQ?.map((m, i) => (
        <text key={`mq${i}`} x={x(m.q)} y={y(0) + 18} textAnchor="middle" className="g-grad">
          {m.lib}
        </text>
      ))}

      {/* points */}
      {props.points?.map((p, i) => (
        <g key={`p${i}`}>
          {p.projections && (
            <>
              <line x1={x(p.q)} y1={y(p.p)} x2={x(p.q)} y2={y(0)} stroke="var(--brun)" strokeWidth="1" strokeDasharray="3 4" />
              <line x1={x(p.q)} y1={y(p.p)} x2={x(0)} y2={y(p.p)} stroke="var(--brun)" strokeWidth="1" strokeDasharray="3 4" />
              <text x={x(p.q)} y={y(0) + 18} textAnchor="middle" className="g-grad">
                {p.libQ ?? String(p.q).replace('.', ',')}
              </text>
              <text x={x(0) - 8} y={y(p.p) + 4} textAnchor="end" className="g-grad">
                {p.libP ?? String(p.p).replace('.', ',')}
              </text>
            </>
          )}
          <circle cx={x(p.q)} cy={y(p.p)} r="4.5" fill="var(--encre)" />
          {p.etiquette && (
            <text x={x(p.q)} y={y(p.p) - 13} textAnchor="middle" className="g-point">
              {p.etiquette}
            </text>
          )}
        </g>
      ))}

      {/* étiquettes de zones */}
      {props.zones?.map((z, i) =>
        z.etiquette && z.at ? (
          <text key={`ze${i}`} x={x(z.at[0])} y={y(z.at[1])} textAnchor="middle" className="g-zone">
            {z.etiquette}
          </text>
        ) : null,
      )}

      {/* flèches */}
      {props.fleches?.map((f, i) => (
        <line
          key={`f${i}`}
          x1={x(f.de[0])}
          y1={y(f.de[1])}
          x2={x(f.a[0])}
          y2={y(f.a[1])}
          stroke="var(--brun)"
          strokeWidth="1.5"
          markerEnd="url(#pointe)"
        />
      ))}
      {props.textes?.map((t, i) => (
        <text key={`t${i}`} x={x(t.q)} y={y(t.p)} textAnchor={t.ancre ?? "middle"} className="g-zone">
          {t.texte}
        </text>
      ))}
      {elements}
    </svg>
  );
}
