import { useId, useState, type ReactElement, type ReactNode } from 'react';
import { TABLEAU_SPECIALITES } from '../content/techniques/proportions';
import {
  cmDepuisTaux,
  coefficientMultiplicateur,
  correlation,
  ecartPoints,
  elasticite,
  fr,
  indice,
  lireNombre,
  mediane,
  moyenne,
  moyennePonderee,
  pente,
  proportion,
  tauxCumule,
  tauxDepuisCm,
  tauxEntreIndices,
  tauxMoyen,
  tauxReel,
  tauxVariation,
  valeurReelle,
} from '../lib/calculs';

/* ---------- Petits éléments communs ---------- */

function Champ({
  label,
  valeur,
  onChange,
  suffixe,
  large,
}: {
  label: string;
  valeur: string;
  onChange: (v: string) => void;
  suffixe?: string;
  large?: boolean;
}) {
  const id = useId();
  return (
    <label className={`champ ${large ? 'champ-large' : ''}`} htmlFor={id}>
      <span className="ui ui-gris">{label}</span>
      <span className="champ-saisie">
        <input id={id} inputMode="decimal" value={valeur} onChange={(e) => onChange(e.target.value)} autoComplete="off" />
        {suffixe && <span className="champ-suffixe">{suffixe}</span>}
      </span>
    </label>
  );
}

function Resultat({ label, valeur, detail }: { label: string; valeur: string; detail?: ReactNode }) {
  return (
    <div className="resultat">
      <span className="ui ui-gris">{label}</span>
      <span className="resultat-valeur">{valeur}</span>
      {detail && <span className="resultat-detail">{detail}</span>}
    </div>
  );
}

function Bloc({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <div className="calc-bloc">
      <p className="ui">{titre}</p>
      {children}
    </div>
  );
}

const n = (s: string) => lireNombre(s);
const liste = (s: string) =>
  s
    .split(/[;\n]/)
    .map((x) => lireNombre(x))
    .filter((x): x is number => x !== null);
const ok = (...v: (number | null)[]) => v.every((x) => x !== null && Number.isFinite(x));

/* ---------- Calculateurs ---------- */

function CalcProportions() {
  const [p, setP] = useState('45');
  const [t, setT] = useState('120');
  const [mode, setMode] = useState<'eff' | 'ligne' | 'colonne' | 'total'>('ligne');
  const P = n(p);
  const T = n(t);
  const { lignes, colonnes, valeurs } = TABLEAU_SPECIALITES;
  const totL = valeurs.map((l) => l.reduce((a, b) => a + b, 0));
  const totC = colonnes.map((_, j) => valeurs.reduce((s, l) => s + l[j], 0));
  const tot = totL.reduce((a, b) => a + b, 0);
  const cell = (v: number, i: number, j: number) => {
    if (mode === 'eff') return fr(v, 0);
    if (mode === 'ligne') return fr(proportion(v, i < 0 ? tot : totL[i]), 1) + ' %';
    if (mode === 'colonne') return fr(proportion(v, j < 0 ? tot : totC[j]), 1) + ' %';
    return fr(proportion(v, tot), 1) + ' %';
  };
  return (
    <>
      <Bloc titre="Part d’une partie dans un ensemble">
        <div className="champs">
          <Champ label="Effectif de la partie" valeur={p} onChange={setP} />
          <Champ label="Effectif de l’ensemble" valeur={t} onChange={setT} />
        </div>
        <Resultat
          label="Part"
          valeur={ok(P, T) && T !== 0 ? `${fr(proportion(P!, T!), 2)} %` : '—'}
          detail={ok(P, T) && T !== 0 ? `${fr(P!, 2)} / ${fr(T!, 2)} × 100` : 'Saisis deux nombres'}
        />
      </Bloc>
      <Bloc titre="Tableau à double entrée (données fictives)">
        <div className="bascule" role="group" aria-label="Mode de lecture">
          {(
            [
              ['eff', 'Effectifs'],
              ['ligne', '% en ligne'],
              ['colonne', '% en colonne'],
              ['total', '% du total'],
            ] as const
          ).map(([k, l]) => (
            <button key={k} className={`btn btn-petit ${mode === k ? 'btn-plein' : ''}`} onClick={() => setMode(k)} aria-pressed={mode === k}>
              {l}
            </button>
          ))}
        </div>
        <div className="tableau-defile" tabIndex={0}>
          <table className="table-calc">
            <thead>
              <tr>
                <th />
                {colonnes.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {lignes.map((l, i) => (
                <tr key={l}>
                  <th scope="row">{l}</th>
                  {valeurs[i].map((v, j) => (
                    <td key={j}>{cell(v, i, j)}</td>
                  ))}
                  <td className="cell-total">{cell(totL[i], i, -1)}</td>
                </tr>
              ))}
              <tr>
                <th scope="row">Total</th>
                {totC.map((v, j) => (
                  <td key={j} className="cell-total">
                    {cell(v, -1, j)}
                  </td>
                ))}
                <td className="cell-total">{cell(tot, -1, -1)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="calc-note">
          {mode === 'ligne' && 'Lecture en ligne : « parmi les filles, 37,5 % ont choisi SES ». Les totaux à 100 % sont en bout de ligne.'}
          {mode === 'colonne' && 'Lecture en colonne : « parmi les élèves de SES, 64,3 % sont des filles ». Les totaux à 100 % sont en bas de colonne.'}
          {mode === 'total' && 'Chaque case est une part de l’ensemble : « 22,5 % des élèves sont des filles qui ont choisi SES ».'}
          {mode === 'eff' && 'Effectifs bruts : choisis un mode de lecture pour calculer les parts.'}
        </p>
      </Bloc>
    </>
  );
}

function CalcTauxVariation() {
  const [vd, setVd] = useState('400');
  const [va, setVa] = useState('460');
  const [tv, setTv] = useState('15');
  const [cm, setCm] = useState('1,15');
  const [succ, setSucc] = useState('15 ; -10');
  const [annees, setAnnees] = useState('2');
  const D = n(vd);
  const A = n(va);
  const TV = n(tv);
  const CM = n(cm);
  const S = liste(succ);
  const N = n(annees);
  const glob = S.length ? tauxCumule(S) : null;
  return (
    <>
      <Bloc titre="Entre deux valeurs">
        <div className="champs">
          <Champ label="Valeur de départ" valeur={vd} onChange={setVd} />
          <Champ label="Valeur d’arrivée" valeur={va} onChange={setVa} />
        </div>
        <div className="resultats">
          <Resultat
            label="Taux de variation"
            valeur={ok(D, A) && D !== 0 ? `${fr(tauxVariation(D!, A!), 2)} %` : '—'}
            detail={ok(D, A) && D !== 0 ? `(${fr(A!, 2)} − ${fr(D!, 2)}) / ${fr(D!, 2)} × 100` : undefined}
          />
          <Resultat label="Coefficient multiplicateur" valeur={ok(D, A) && D !== 0 ? fr(coefficientMultiplicateur(D!, A!), 4) : '—'} />
        </div>
      </Bloc>
      <Bloc titre="Conversion">
        <div className="champs">
          <Champ label="Taux (%)" valeur={tv} onChange={setTv} suffixe="%" />
          <Champ label="Coefficient" valeur={cm} onChange={setCm} />
        </div>
        <div className="resultats">
          <Resultat label="CM correspondant" valeur={ok(TV) ? fr(cmDepuisTaux(TV!), 4) : '—'} detail="1 + taux / 100" />
          <Resultat label="Taux correspondant" valeur={ok(CM) ? `${fr(tauxDepuisCm(CM!), 2)} %` : '—'} detail="(CM − 1) × 100" />
        </div>
      </Bloc>
      <Bloc titre="Taux successifs et taux moyen">
        <div className="champs">
          <Champ label="Taux successifs (séparés par ;)" valeur={succ} onChange={setSucc} large />
          <Champ label="Nombre d’années" valeur={annees} onChange={setAnnees} />
        </div>
        <div className="resultats">
          <Resultat
            label="Taux global"
            valeur={glob !== null ? `${fr(glob, 2)} %` : '—'}
            detail={S.length ? `CM = ${S.map((t) => fr(cmDepuisTaux(t), 4)).join(' × ')} = ${fr(cmDepuisTaux(glob!), 4)}` : undefined}
          />
          <Resultat
            label="Taux annuel moyen"
            valeur={glob !== null && ok(N) && N! > 0 && glob > -100 ? `${fr(tauxMoyen(glob, N!), 2)} %` : '—'}
            detail="(CM global^(1/n) − 1) × 100"
          />
        </div>
      </Bloc>
    </>
  );
}

function CalcIndices() {
  const [lignes, setLignes] = useState([
    ['2015', '40'],
    ['2020', '46'],
    ['2025', '52'],
    ['', ''],
  ]);
  const [base, setBase] = useState(0);
  const [i1, setI1] = useState('115');
  const [i2, setI2] = useState('130');
  const vb = n(lignes[base]?.[1] ?? '');
  const maj = (r: number, c: number, v: string) => setLignes((ls) => ls.map((l, i) => (i === r ? l.map((x, j) => (j === c ? v : x)) : l)));
  const I1 = n(i1);
  const I2 = n(i2);
  return (
    <>
      <Bloc titre="Calculer des indices base 100">
        <div className="tableau-defile">
          <table className="table-calc">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Valeur</th>
                <th scope="col">Base</th>
                <th scope="col">Indice</th>
              </tr>
            </thead>
            <tbody>
              {lignes.map((l, i) => {
                const v = n(l[1]);
                return (
                  <tr key={i}>
                    <td>
                      <input className="cell-input" value={l[0]} onChange={(e) => maj(i, 0, e.target.value)} aria-label={`Date ${i + 1}`} />
                    </td>
                    <td>
                      <input className="cell-input" inputMode="decimal" value={l[1]} onChange={(e) => maj(i, 1, e.target.value)} aria-label={`Valeur ${i + 1}`} />
                    </td>
                    <td>
                      <input type="radio" name="base-indice" checked={base === i} onChange={() => setBase(i)} aria-label={`Prendre la ligne ${i + 1} comme base`} />
                    </td>
                    <td className="cell-total">{ok(v, vb) && vb !== 0 ? fr(indice(v!, vb!), 1) : '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Bloc>
      <Bloc titre="Taux de variation entre deux indices">
        <div className="champs">
          <Champ label="Indice de départ" valeur={i1} onChange={setI1} />
          <Champ label="Indice d’arrivée" valeur={i2} onChange={setI2} />
        </div>
        <Resultat
          label="Taux de variation"
          valeur={ok(I1, I2) && I1 !== 0 ? `${fr(tauxEntreIndices(I1!, I2!), 2)} %` : '—'}
          detail={ok(I1, I2) && I1 !== 0 ? `(${fr(I2!, 2)} − ${fr(I1!, 2)}) / ${fr(I1!, 2)} × 100 — différent de ${fr(I2! - I1!, 2)} sauf si l’indice de départ vaut 100` : undefined}
        />
      </Bloc>
    </>
  );
}

function CalcMoyennes() {
  const [vals, setVals] = useState('1200 ; 1500 ; 1800 ; 2100 ; 9000');
  const [poids, setPoids] = useState('');
  const V = liste(vals);
  const P = liste(poids);
  const pondOk = P.length === V.length && P.length > 0 && P.reduce((a, b) => a + b, 0) !== 0;
  return (
    <Bloc titre="Résumer une série">
      <div className="champs">
        <Champ label="Valeurs (séparées par ;)" valeur={vals} onChange={setVals} large />
        <Champ label="Poids (facultatif, même nombre)" valeur={poids} onChange={setPoids} large />
      </div>
      <div className="resultats">
        <Resultat label="Moyenne simple" valeur={V.length ? fr(moyenne(V), 2) : '—'} detail={V.length ? `somme ${fr(V.reduce((a, b) => a + b, 0), 2)} / ${V.length} valeurs` : undefined} />
        <Resultat
          label="Moyenne pondérée"
          valeur={pondOk ? fr(moyennePonderee(V, P), 2) : '—'}
          detail={P.length && !pondOk ? 'Il faut autant de poids que de valeurs' : 'Σ(valeur × poids) / Σ poids'}
        />
        <Resultat
          label="Médiane"
          valeur={V.length ? fr(mediane(V), 2) : '—'}
          detail={V.length ? `série rangée : ${[...V].sort((a, b) => a - b).map((x) => fr(x, 2)).join(' ; ')}` : undefined}
        />
      </div>
    </Bloc>
  );
}

function CalcPoints() {
  const [t1, setT1] = useState('7,5');
  const [t2, setT2] = useState('9');
  const A = n(t1);
  const B = n(t2);
  return (
    <Bloc titre="Évolution d’un taux">
      <div className="champs">
        <Champ label="Taux de départ" valeur={t1} onChange={setT1} suffixe="%" />
        <Champ label="Taux d’arrivée" valeur={t2} onChange={setT2} suffixe="%" />
      </div>
      <div className="resultats">
        <Resultat label="Écart" valeur={ok(A, B) ? `${fr(ecartPoints(A!, B!), 2)} point(s)` : '—'} detail="taux d’arrivée − taux de départ" />
        <Resultat label="Variation relative" valeur={ok(A, B) && A !== 0 ? `${fr(tauxVariation(A!, B!), 2)} %` : '—'} detail="(t2 − t1) / t1 × 100" />
      </div>
      {ok(A, B) && A !== 0 && (
        <p className="calc-note">
          Phrase : « Le taux est passé de {fr(A!, 2)} % à {fr(B!, 2)} %, soit {B! >= A! ? 'une hausse' : 'une baisse'} de {fr(Math.abs(B! - A!), 2)} point(s), ou{' '}
          {fr(Math.abs(tauxVariation(A!, B!)), 1)} %. »
        </p>
      )}
    </Bloc>
  );
}

function CalcValeurReelle() {
  const [nom, setNom] = useState('3');
  const [inf, setInf] = useState('2');
  const [vn, setVn] = useState('2400');
  const [ip, setIp] = useState('120');
  const N = n(nom);
  const I = n(inf);
  const VN = n(vn);
  const IP = n(ip);
  return (
    <>
      <Bloc titre="Taux réel">
        <div className="champs">
          <Champ label="Taux nominal" valeur={nom} onChange={setNom} suffixe="%" />
          <Champ label="Inflation" valeur={inf} onChange={setInf} suffixe="%" />
        </div>
        <div className="resultats">
          <Resultat label="Taux réel exact" valeur={ok(N, I) && I! > -100 ? `${fr(tauxReel(N!, I!), 2)} %` : '—'} detail="((1 + n) / (1 + π) − 1) × 100" />
          <Resultat label="Approximation" valeur={ok(N, I) ? `${fr(N! - I!, 2)} %` : '—'} detail="taux nominal − inflation" />
        </div>
      </Bloc>
      <Bloc titre="Valeur en euros constants">
        <div className="champs">
          <Champ label="Valeur nominale" valeur={vn} onChange={setVn} suffixe="€" />
          <Champ label="Indice des prix (base 100)" valeur={ip} onChange={setIp} />
        </div>
        <Resultat label="Valeur réelle" valeur={ok(VN, IP) && IP !== 0 ? `${fr(valeurReelle(VN!, IP!), 2)} €` : '—'} detail="valeur nominale / indice × 100 (euros de l’année de base)" />
      </Bloc>
    </>
  );
}

function CalcElasticite() {
  const [p1, setP1] = useState('10');
  const [q1, setQ1] = useState('500');
  const [p2, setP2] = useState('12');
  const [q2, setQ2] = useState('450');
  const [P1, Q1, P2, Q2] = [p1, q1, p2, q2].map(n);
  const valide = ok(P1, Q1, P2, Q2) && P1 !== 0 && Q1 !== 0 && P1 !== P2;
  const e = valide ? elasticite(P1!, Q1!, P2!, Q2!) : NaN;
  return (
    <Bloc titre="Élasticité-prix et pente">
      <div className="champs champs-4">
        <Champ label="Prix 1" valeur={p1} onChange={setP1} />
        <Champ label="Quantité 1" valeur={q1} onChange={setQ1} />
        <Champ label="Prix 2" valeur={p2} onChange={setP2} />
        <Champ label="Quantité 2" valeur={q2} onChange={setQ2} />
      </div>
      <div className="resultats">
        <Resultat label="Variation du prix" valeur={valide ? `${fr(tauxVariation(P1!, P2!), 2)} %` : '—'} />
        <Resultat label="Variation de la quantité" valeur={valide ? `${fr(tauxVariation(Q1!, Q2!), 2)} %` : '—'} />
        <Resultat
          label="Élasticité-prix"
          valeur={valide ? fr(e, 2) : '—'}
          detail={valide ? (Math.abs(e) > 1 ? 'Demande élastique (|e| > 1)' : Math.abs(e) < 1 ? 'Demande inélastique (|e| < 1)' : 'Élasticité unitaire') : undefined}
        />
        <Resultat
          label="Pente ΔP / ΔQ"
          valeur={ok(P1, Q1, P2, Q2) && Q1 !== Q2 ? fr(pente(Q1!, P1!, Q2!, P2!), 3) : '—'}
          detail="variation du prix pour une unité de quantité"
        />
      </div>
    </Bloc>
  );
}

function Nuage({ x, y }: { x: number[]; y: number[] }) {
  const W = 320;
  const H = 220;
  const m = 30;
  const [x0, x1] = [Math.min(...x), Math.max(...x)];
  const [y0, y1] = [Math.min(...y), Math.max(...y)];
  const sx = (v: number) => m + ((v - x0) / (x1 - x0 || 1)) * (W - 2 * m);
  const sy = (v: number) => H - m - ((v - y0) / (y1 - y0 || 1)) * (H - 2 * m);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="nuage" role="img" aria-label="Nuage de points des deux séries">
      <line x1={m} y1={H - m} x2={W - 10} y2={H - m} stroke="var(--encre)" />
      <line x1={m} y1={H - m} x2={m} y2={10} stroke="var(--encre)" />
      <text x={W - 10} y={H - 10} textAnchor="end" className="g-grad">
        X
      </text>
      <text x={m + 6} y={18} className="g-grad">
        Y
      </text>
      {x.map((v, i) => (
        <circle key={i} cx={sx(v)} cy={sy(y[i])} r="4.5" fill="var(--orange)" stroke="var(--brun)" strokeWidth="0.75" />
      ))}
    </svg>
  );
}

function CalcCorrelation() {
  const [xs, setXs] = useState('15 ; 18 ; 22 ; 25 ; 28 ; 31');
  const [ys, setYs] = useState('120 ; 150 ; 210 ; 260 ; 300 ; 360');
  const X = liste(xs);
  const Y = liste(ys);
  const valide = X.length === Y.length && X.length >= 3;
  const r = valide ? correlation(X, Y) : NaN;
  return (
    <Bloc titre="Deux séries : y a-t-il une liaison ?">
      <div className="champs">
        <Champ label="Série X (ex. : température, °C)" valeur={xs} onChange={setXs} large />
        <Champ label="Série Y (ex. : glaces vendues)" valeur={ys} onChange={setYs} large />
      </div>
      {valide ? (
        <>
          <Nuage x={X} y={Y} />
          <Resultat
            label="Coefficient de corrélation r (complément)"
            valeur={Number.isFinite(r) ? fr(r, 2) : '—'}
            detail={
              Number.isFinite(r)
                ? Math.abs(r) >= 0.8
                  ? `Liaison linéaire forte et ${r > 0 ? 'positive' : 'négative'}.`
                  : Math.abs(r) >= 0.4
                    ? 'Liaison linéaire modérée.'
                    : 'Liaison linéaire faible ou nulle.'
                : undefined
            }
          />
          <p className="calc-note">
            Même avec r proche de 1, une corrélation ne prouve pas une causalité : cherche un mécanisme, une variable cachée, une causalité inverse.
          </p>
        </>
      ) : (
        <p className="calc-note">Saisis au moins trois valeurs, en nombre égal dans les deux séries.</p>
      )}
    </Bloc>
  );
}

export const CALCULATEURS: Record<string, () => ReactElement> = {
  proportions: CalcProportions,
  'taux-variation': CalcTauxVariation,
  indices: CalcIndices,
  moyennes: CalcMoyennes,
  points: CalcPoints,
  'valeur-reelle': CalcValeurReelle,
  elasticite: CalcElasticite,
  correlation: CalcCorrelation,
};
