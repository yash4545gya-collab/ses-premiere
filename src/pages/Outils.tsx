import Fuse from 'fuse.js';
import { Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FilAriane } from '../components/Layout';
import { Quiz, melanger } from '../components/Quiz';
import { Texte } from '../components/Texte';
import { CHAPITRES } from '../content/chapitres';
import { SUJETS } from '../content/sujets';
import { TECHNIQUES } from '../content/techniques';
import type { Question } from '../content/types';
import { GLOSSAIRE, INTERVALLES, aujourdhui, estDue, repondreLeitner, texteBrut, type EtatCarte } from '../lib/donnees';
import type { ProgressionChapitre } from '../lib/progression';
import { romain } from '../lib/romain';
import { lire, useStocke } from '../lib/stockage';
import { BandeauSection } from './Techniques';

/* ======================= Glossaire ======================= */

const LETTRES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function Glossaire() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const lettre = params.get('lettre') ?? '';
  const chap = params.get('chapitre') ?? '';
  const favSeuls = params.get('favoris') === '1';
  const [favoris, setFavoris] = useStocke<string[]>('favoris', []);
  const maj = (k: string, v: string) => {
    const p = new URLSearchParams(params);
    if (v) p.set(k, v);
    else p.delete(k);
    setParams(p, { replace: true });
  };
  const fuse = useMemo(
    () =>
      new Fuse(GLOSSAIRE, {
        keys: [
          { name: 'terme', weight: 3 },
          { name: 'definitionBrute', weight: 1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        getFn: (obj, path) => {
          const k = Array.isArray(path) ? path[0] : path;
          return k === 'definitionBrute' ? texteBrut(obj.definition) : (obj as unknown as Record<string, string>)[k];
        },
      }),
    [],
  );
  const base = q.trim() ? fuse.search(q.trim()).map((r) => r.item) : GLOSSAIRE;
  const liste = base.filter(
    (g) => (!lettre || g.lettre === lettre) && (!chap || g.chapitreId === chap) && (!favSeuls || favoris.includes(g.cle)),
  );
  const lettresPresentes = new Set(GLOSSAIRE.map((g) => g.lettre));
  const basculer = (cle: string) => setFavoris((f) => (f.includes(cle) ? f.filter((x) => x !== cle) : [...f, cle]));

  return (
    <>
      <BandeauSection sur={`${GLOSSAIRE.length} notions`} titre="Glossaire" chapo="Toutes les définitions du programme, avec leur exemple. Recherche approximative : les fautes de frappe sont tolérées." />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Glossaire' }]} />
        <div className="filtres filtres-glossaire">
          <label>
            <span className="ui ui-gris">Rechercher</span>
            <input className="champ-texte" type="search" value={q} onChange={(e) => maj('q', e.target.value)} placeholder="ex. : surplus, aléa moral, PCS…" />
          </label>
          <label>
            <span className="ui ui-gris">Chapitre</span>
            <select value={chap} onChange={(e) => maj('chapitre', e.target.value)}>
              <option value="">Tous</option>
              {CHAPITRES.map((c) => (
                <option key={c.meta.id} value={c.meta.id}>
                  {romain(c.numero)}. {c.meta.titreCourt}
                </option>
              ))}
            </select>
          </label>
          <label className="case">
            <input type="checkbox" checked={favSeuls} onChange={(e) => maj('favoris', e.target.checked ? '1' : '')} />
            <span className="ui">Favoris seulement ({favoris.length})</span>
          </label>
        </div>
        <nav className="az" aria-label="Filtrer par lettre">
          <button className={`az-lettre ${!lettre ? 'est-actif' : ''}`} onClick={() => maj('lettre', '')}>
            Tout
          </button>
          {LETTRES.map((l) => (
            <button
              key={l}
              className={`az-lettre ${lettre === l ? 'est-actif' : ''}`}
              disabled={!lettresPresentes.has(l)}
              onClick={() => maj('lettre', lettre === l ? '' : l)}
              aria-pressed={lettre === l}
            >
              {l}
            </button>
          ))}
        </nav>
        <p className="ui ui-gris">{liste.length} notion(s)</p>
        <div className="colonne-large definitions">
          {liste.map((g) => {
            const fav = favoris.includes(g.cle);
            return (
              <article key={g.cle} className="definition">
                <div className="definition-ligne">
                  <h3 className="definition-terme">{g.terme}</h3>
                  <button className={`favori ${fav ? 'est-favori' : ''}`} onClick={() => basculer(g.cle)} aria-pressed={fav} aria-label={fav ? `Retirer ${g.terme} des favoris` : `Ajouter ${g.terme} aux favoris`}>
                    <Star size={20} strokeWidth={1.25} />
                  </button>
                </div>
                <p className="definition-texte">
                  <Texte>{g.definition}</Texte>
                </p>
                <p className="definition-exemple">
                  <span className="ui ui-gris">Exemple</span> <Texte>{g.exemple}</Texte>
                </p>
                <p className="definition-voir ui ui-gris">
                  <Link to={`/chapitre/${g.chapitreId}`}>
                    Chapitre {romain(g.numero)} · {g.chapitreTitre}
                  </Link>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* ======================= Choix de chapitres ======================= */

function ChoixChapitres({ choisis, onChange }: { choisis: string[]; onChange: (c: string[]) => void }) {
  const tous = choisis.length === CHAPITRES.length;
  return (
    <fieldset className="choix-chapitres">
      <legend className="ui ui-gris">Chapitres</legend>
      <div className="choix-actions">
        <button className="btn btn-petit" onClick={() => onChange(tous ? [] : CHAPITRES.map((c) => c.meta.id))}>
          {tous ? 'Tout désélectionner' : 'Tout sélectionner'}
        </button>
      </div>
      <div className="choix-grille">
        {CHAPITRES.map((c) => (
          <label key={c.meta.id} className={`choix ${choisis.includes(c.meta.id) ? 'est-choisi' : ''}`}>
            <input
              type="checkbox"
              checked={choisis.includes(c.meta.id)}
              onChange={() => onChange(choisis.includes(c.meta.id) ? choisis.filter((x) => x !== c.meta.id) : [...choisis, c.meta.id])}
            />
            <span>
              <span className="choix-num">{romain(c.numero)}</span> {c.meta.titreCourt}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/* ======================= Révision (Leitner) ======================= */

export function Revision() {
  const [etats, setEtats] = useStocke<Record<string, EtatCarte>>('leitner', {});
  const [choisis, setChoisis] = useStocke<string[]>('revision-chapitres', CHAPITRES.map((c) => c.meta.id));
  const [session, setSession] = useState<string[] | null>(null);
  const [i, setI] = useState(0);
  const [verso, setVerso] = useState(false);
  const [bilan, setBilan] = useState({ su: 0, revoir: 0 });

  const cartes = GLOSSAIRE.filter((g) => choisis.includes(g.chapitreId));
  const dues = cartes.filter((g) => estDue(etats[g.cle]));
  const parBoite = [1, 2, 3, 4, 5].map((b) => cartes.filter((g) => (etats[g.cle]?.boite ?? 0) === b).length);
  const nouvelles = cartes.filter((g) => !etats[g.cle]).length;

  const demarrer = () => {
    // priorité aux boîtes basses, puis au hasard ; 20 cartes maximum
    const ordre = melanger(dues).sort((a, b) => (etats[a.cle]?.boite ?? 0) - (etats[b.cle]?.boite ?? 0));
    setSession(ordre.slice(0, 20).map((g) => g.cle));
    setI(0);
    setVerso(false);
    setBilan({ su: 0, revoir: 0 });
  };

  const repondre = (su: boolean) => {
    if (!session) return;
    const cle = session[i];
    setEtats((e) => ({ ...e, [cle]: repondreLeitner(e[cle], su) }));
    setBilan((b) => ({ su: b.su + (su ? 1 : 0), revoir: b.revoir + (su ? 0 : 1) }));
    setVerso(false);
    setI(i + 1);
  };

  const carte = session && i < session.length ? GLOSSAIRE.find((g) => g.cle === session[i]) : null;

  return (
    <>
      <BandeauSection sur="Répétition espacée" titre="Révision" chapo="Système de Leitner : une carte réussie monte d’une boîte et revient plus tard ; une carte ratée retourne en boîte 1." />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Révision' }]} />
        <div className="colonne-large">
          {!session && (
            <>
              <ChoixChapitres choisis={choisis} onChange={setChoisis} />
              <div className="boites" aria-label="Répartition des cartes par boîte">
                <div className="boite">
                  <span className="ui ui-gris">Nouvelles</span>
                  <span className="boite-n">{nouvelles}</span>
                </div>
                {parBoite.map((n, b) => (
                  <div key={b} className="boite">
                    <span className="ui ui-gris">Boîte {b + 1}</span>
                    <span className="boite-n">{n}</span>
                    <span className="ui ui-gris boite-int">{b === 0 ? 'chaque jour' : `tous les ${INTERVALLES[b + 1]} j`}</span>
                  </div>
                ))}
              </div>
              <p>
                <strong>{dues.length}</strong> carte(s) à réviser aujourd’hui sur {cartes.length}.
              </p>
              <button className="btn btn-plein" onClick={demarrer} disabled={!dues.length}>
                {dues.length ? `Commencer (${Math.min(20, dues.length)} cartes)` : 'Rien à réviser aujourd’hui'}
              </button>
            </>
          )}

          {session && carte && (
            <div className="flash">
              <div className="flash-tete">
                <span className="ui ui-gris">
                  Carte {i + 1} / {session.length}
                </span>
                <span className="ui ui-gris">Boîte {etats[carte.cle]?.boite ?? 'nouvelle'}</span>
              </div>
              <button className="flash-carte" onClick={() => setVerso((v) => !v)} aria-label={verso ? 'Revoir le terme' : 'Afficher la définition'}>
                {!verso ? (
                  <span className="flash-recto">
                    <span className="flash-terme">{carte.terme}</span>
                    <span className="ui ui-gris">
                      Chapitre {romain(carte.numero)} · toucher pour retourner
                    </span>
                  </span>
                ) : (
                  <span className="flash-verso apparait">
                    <span className="ui ui-gris">{carte.terme}</span>
                    <span className="flash-def">
                      <Texte>{carte.definition}</Texte>
                    </span>
                  </span>
                )}
              </button>
              <div className="flash-actions">
                <button className="btn" onClick={() => repondre(false)} disabled={!verso}>
                  À revoir
                </button>
                <button className="btn btn-plein" onClick={() => repondre(true)} disabled={!verso}>
                  Je savais
                </button>
              </div>
              {!verso && <p className="ui ui-gris centre">Retourne la carte avant de répondre</p>}
            </div>
          )}

          {session && !carte && (
            <div className="carte apparait">
              <p className="ui ui-gris">Session terminée</p>
              <p className="quiz-score">
                {bilan.su} / {session.length}
              </p>
              <p>
                {bilan.su} carte(s) montent d’une boîte, {bilan.revoir} retournent en boîte 1. Prochaine révision : demain.
              </p>
              <button className="btn btn-plein" onClick={() => setSession(null)}>
                Retour
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ======================= Quiz mixte ======================= */

interface Resultat {
  date: string;
  pct: number;
  n: number;
  chapitres: number;
}

export function QuizMixte() {
  const [choisis, setChoisis] = useStocke<string[]>('quiz-mixte-chapitres', CHAPITRES.map((c) => c.meta.id));
  const [historique, setHistorique] = useStocke<Resultat[]>('quiz-mixte-historique', []);
  const [serie, setSerie] = useState<Question[] | null>(null);
  const [cle, setCle] = useState(0);

  const pool = CHAPITRES.filter((c) => choisis.includes(c.meta.id)).flatMap((c) => c.contenu?.quiz ?? []);
  const lancer = () => {
    setSerie(melanger(pool).slice(0, 20));
    setCle((k) => k + 1);
  };

  return (
    <>
      <BandeauSection sur="20 questions" titre="Quiz mixte" chapo="Des questions tirées au hasard dans les chapitres choisis. Ton score est enregistré dans l’historique." />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Quiz mixte' }]} />
        <div className="colonne-large">
          {!serie ? (
            <>
              <ChoixChapitres choisis={choisis} onChange={setChoisis} />
              <p>{pool.length} questions disponibles.</p>
              <button className="btn btn-plein" onClick={lancer} disabled={pool.length < 1}>
                Lancer le quiz ({Math.min(20, pool.length)} questions)
              </button>
            </>
          ) : (
            <>
              <Quiz
                key={cle}
                questions={serie}
                onFin={(pct) =>
                  setHistorique((h) => [{ date: new Date().toISOString(), pct, n: serie.length, chapitres: choisis.length }, ...h].slice(0, 50))
                }
                meilleur={historique.length ? Math.max(...historique.map((h) => h.pct)) : null}
              />
              <button className="btn" style={{ marginTop: '1rem' }} onClick={() => setSerie(null)}>
                Changer de chapitres
              </button>
            </>
          )}

          <h2>Historique</h2>
          {historique.length ? (
            <div className="tableau-defile">
              <table className="table-calc">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Questions</th>
                    <th scope="col">Chapitres</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {historique.map((h, k) => (
                    <tr key={k}>
                      <td>{new Date(h.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</td>
                      <td>{h.n}</td>
                      <td>{h.chapitres}</td>
                      <td className="cell-total">{h.pct} %</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="ui ui-gris">Aucun quiz terminé pour l’instant.</p>
          )}
        </div>
      </div>
    </>
  );
}

/* ======================= Tableau de bord ======================= */

function Jauge({ label, valeur, total, texte }: { label: string; valeur: number; total: number; texte?: string }) {
  const pct = total ? Math.round((valeur / total) * 100) : 0;
  return (
    <div className="jauge">
      <span className="ui ui-gris">{label}</span>
      <span className="jauge-val">{texte ?? `${valeur} / ${total}`}</span>
      <span className="barre barre-fine" aria-hidden="true">
        <span style={{ width: `${pct}%` }} />
      </span>
    </div>
  );
}

export function TableauDeBord() {
  // relecture complète du stockage à chaque rendu (la page est légère)
  const [etats] = useStocke<Record<string, EtatCarte>>('leitner', {});
  const [tentes] = useStocke<string[]>('sujets-tentes', []);
  const jour = aujourdhui();
  const lignes = CHAPITRES.map((c) => {
    const p = { leconLue: false, meilleurQuiz: null, flashcardsSues: [], ...lire<Partial<ProgressionChapitre>>(`progression:${c.meta.id}`, {}) } as ProgressionChapitre;
    const defs = GLOSSAIRE.filter((g) => g.chapitreId === c.meta.id);
    const maitrisees = defs.filter((g) => (etats[g.cle]?.boite ?? 0) >= 4 || p.flashcardsSues.includes(g.terme)).length;
    const sujets = SUJETS.filter((s) => s.chapitres.includes(c.meta.id));
    const sujetsTentes = sujets.filter((s) => tentes.includes(s.id)).length;
    return { c, p, defs, maitrisees, sujets, sujetsTentes };
  });
  const lues = lignes.filter((l) => l.p.leconLue).length;
  const dues = GLOSSAIRE.filter((g) => estDue(etats[g.cle], jour)).length;
  const techReussis = TECHNIQUES.reduce((s, t) => s + lire<number[]>(`technique:${t.id}`, []).length, 0);
  const techTotal = TECHNIQUES.reduce((s, t) => s + t.exercices.length, 0);

  return (
    <>
      <BandeauSection sur="Ta progression" titre="Tableau de bord" chapo="Tout est enregistré sur cet appareil, dans ce navigateur." />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Tableau de bord' }]} />
        <div className="resume">
          <Jauge label="Leçons lues" valeur={lues} total={CHAPITRES.length} />
          <Jauge label="Exercices de techniques réussis" valeur={techReussis} total={techTotal} />
          <Jauge label="Sujets tentés" valeur={tentes.length} total={SUJETS.length} />
          <div className="jauge">
            <span className="ui ui-gris">Cartes à réviser aujourd’hui</span>
            <span className="jauge-val">{dues}</span>
            <Link to="/revision" className="ui">
              Réviser →
            </Link>
          </div>
        </div>
        <div className="tableau-defile">
          <table className="tableau-bord">
            <thead>
              <tr>
                <th scope="col">Chapitre</th>
                <th scope="col">Leçon</th>
                <th scope="col">Flashcards maîtrisées</th>
                <th scope="col">Meilleur quiz</th>
                <th scope="col">Sujets tentés</th>
              </tr>
            </thead>
            <tbody>
              {lignes.map(({ c, p, defs, maitrisees, sujets, sujetsTentes }) => (
                <tr key={c.meta.id}>
                  <th scope="row">
                    <Link to={`/chapitre/${c.meta.id}`}>
                      <span className="choix-num">{romain(c.numero)}</span> {c.meta.titreCourt}
                    </Link>
                  </th>
                  <td>{p.leconLue ? <span className="ok-lu">Lue</span> : <span className="ui ui-gris">—</span>}</td>
                  <td>
                    <Jauge label="" valeur={maitrisees} total={defs.length} />
                  </td>
                  <td>
                    <Jauge label="" valeur={p.meilleurQuiz ?? 0} total={100} texte={p.meilleurQuiz === null ? '—' : `${p.meilleurQuiz} %`} />
                  </td>
                  <td>
                    <Jauge label="" valeur={sujetsTentes} total={sujets.length} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="ui ui-gris" style={{ marginTop: '1rem' }}>
          Flashcards maîtrisées : cartes en boîte 4 ou 5 de la révision, ou marquées « Je sais » dans le chapitre.
        </p>
      </div>
    </>
  );
}
