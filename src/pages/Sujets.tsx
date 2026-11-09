import { useEffect, useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { FilAriane } from '../components/Layout';
import { Texte } from '../components/Texte';
import { CHAPITRES, chapitreParId } from '../content/chapitres';
import { SUJETS, sujetParId } from '../content/sujets';
import type { Sujet, TypeExercice } from '../content/types';
import { romain } from '../lib/romain';
import { ecrire, lire, useStocke } from '../lib/stockage';
import { Introuvable } from './Introuvable';
import { DocumentAffiche } from './Methodologie';
import { BandeauSection } from './Techniques';

const TYPES: TypeExercice[] = ['EC1', 'EC2', 'EC3', 'Dissertation'];

export function EtiquetteOrigine({ s }: { s: Sujet }) {
  return s.origine === 'officiel' ? (
    <span className="etiquette etiquette-officiel ui">Sujet officiel</span>
  ) : (
    <span className="etiquette ui">Sujet type — non officiel</span>
  );
}

export function CarteSujet({ s }: { s: Sujet }) {
  const [brouillon] = useStocke<string>(`brouillon:${s.id}`, '');
  const chaps = s.chapitres.map((c) => chapitreParId(c)).filter(Boolean);
  return (
    <Link to={`/sujets/${s.id}`} className="carte-lien carte-sujet">
      <span className="carte-sujet-tete">
        <span className="ui">{s.type}</span>
        <EtiquetteOrigine s={s} />
      </span>
      <span className="carte-titre">{s.titre}</span>
      <span className="ui ui-gris">
        {chaps.map((c) => `${romain(c!.numero)}. ${c!.meta.titreCourt}`).join(' · ')} · {s.dureeMinutes} min
        {brouillon.trim() ? ' · brouillon enregistré' : ''}
      </span>
    </Link>
  );
}

export function ListeSujets() {
  const [params, setParams] = useSearchParams();
  const chap = params.get('chapitre') ?? '';
  const type = params.get('type') ?? '';
  const origine = params.get('origine') ?? '';
  const maj = (k: string, v: string) => {
    const p = new URLSearchParams(params);
    if (v) p.set(k, v);
    else p.delete(k);
    setParams(p, { replace: true });
  };
  const liste = SUJETS.filter(
    (s) => (!chap || s.chapitres.includes(chap)) && (!type || s.type === type) && (!origine || s.origine === origine),
  ).sort((a, b) => {
    const ia = Math.min(...a.chapitres.map((c) => chapitreParId(c)?.numero ?? 99));
    const ib = Math.min(...b.chapitres.map((c) => chapitreParId(c)?.numero ?? 99));
    return ia - ib || TYPES.indexOf(a.type) - TYPES.indexOf(b.type);
  });

  return (
    <>
      <BandeauSection
        sur="S’entraîner"
        titre="Sujets"
        chapo="Sujets officiels (avec leur source exacte) et sujets type rédigés au format de l’épreuve. Chaque sujet a un mode entraînement chronométré et un corrigé."
      />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Sujets' }]} />
        <aside className="encadre avertissement">
          <p className="ui">À savoir</p>
          <p>
            Il n’y a pas d’épreuve écrite nationale de SES en Première. Les sujets officiels proposés ici viennent du baccalauréat (épreuve de
            Terminale) : chacun a été choisi parce que l’exercice porte sur des notions du programme de Première. Les sujets type sont des
            sujets originaux, non officiels. Les corrigés sont rédigés pour ce site.
          </p>
        </aside>
        <div className="filtres" role="group" aria-label="Filtres">
          <label>
            <span className="ui ui-gris">Chapitre</span>
            <select value={chap} onChange={(e) => maj('chapitre', e.target.value)}>
              <option value="">Tous les chapitres</option>
              {CHAPITRES.map((c) => (
                <option key={c.meta.id} value={c.meta.id}>
                  {romain(c.numero)}. {c.meta.titreCourt}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="ui ui-gris">Exercice</span>
            <select value={type} onChange={(e) => maj('type', e.target.value)}>
              <option value="">Tous</option>
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="ui ui-gris">Source</span>
            <select value={origine} onChange={(e) => maj('origine', e.target.value)}>
              <option value="">Toutes</option>
              <option value="officiel">Officiels</option>
              <option value="type">Sujets type</option>
            </select>
          </label>
        </div>
        <p className="ui ui-gris">{liste.length} sujet(s)</p>
        <ul className="cartes-liste">
          {liste.map((s) => (
            <li key={s.id}>
              <CarteSujet s={s} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function format(sec: number) {
  const s = Math.max(0, sec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  return (h ? `${h}:` : '') + `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}

function Chrono({ minutes }: { minutes: number }) {
  const [reste, setReste] = useState(minutes * 60);
  const [actif, setActif] = useState(false);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (!actif) return;
    ref.current = window.setInterval(() => setReste((r) => (r <= 1 ? 0 : r - 1)), 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [actif]);
  useEffect(() => {
    if (reste === 0) setActif(false);
  }, [reste]);
  const pct = 100 - (reste / (minutes * 60)) * 100;
  return (
    <div className={`chrono ${reste === 0 ? 'chrono-fini' : ''}`}>
      <span className="chrono-temps" role="timer" aria-live="off">
        {format(reste)}
      </span>
      <div className="barre" aria-hidden="true">
        <span style={{ width: `${pct}%` }} />
      </div>
      <div className="chrono-actions">
        <button className="btn btn-petit btn-plein" onClick={() => setActif((a) => !a)} disabled={reste === 0}>
          {actif ? 'Pause' : reste === minutes * 60 ? 'Démarrer' : 'Reprendre'}
        </button>
        <button
          className="btn btn-petit"
          onClick={() => {
            setActif(false);
            setReste(minutes * 60);
          }}
        >
          Réinitialiser
        </button>
      </div>
      {reste === 0 && <p className="ui" role="status">Temps écoulé</p>}
    </div>
  );
}

function Brouillon({ id }: { id: string }) {
  const cle = `brouillon:${id}`;
  const [texte, setTexte] = useState(() => lire<string>(cle, ''));
  const [etat, setEtat] = useState<'enregistré' | 'en cours'>('enregistré');
  useEffect(() => {
    setEtat('en cours');
    const t = window.setTimeout(() => {
      ecrire(cle, texte);
      if (texte.trim()) {
        const tentes = lire<string[]>('sujets-tentes', []);
        if (!tentes.includes(id)) ecrire('sujets-tentes', [...tentes, id]);
      }
      setEtat('enregistré');
    }, 600);
    return () => window.clearTimeout(t);
  }, [texte, cle, id]);
  const mots = texte.trim() ? texte.trim().split(/\s+/).length : 0;
  return (
    <div className="brouillon">
      <label htmlFor="brouillon" className="ui ui-gris">
        Ta copie (enregistrée automatiquement sur cet appareil)
      </label>
      <textarea id="brouillon" value={texte} onChange={(e) => setTexte(e.target.value)} rows={14} placeholder="Rédige ta réponse ici…" />
      <p className="ui ui-gris">
        {mots} mot(s) · {etat}
      </p>
    </div>
  );
}

export function PageSujet() {
  const { id = '' } = useParams();
  const s = sujetParId(id);
  const [corrige, setCorrige] = useState(false);
  if (!s) return <Introuvable />;
  const chaps = s.chapitres.map((c) => chapitreParId(c)).filter(Boolean);
  return (
    <>
      <BandeauSection sur={`${s.type} · ${s.dureeMinutes} min`} titre={s.titre} />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Sujets', to: '/sujets' }, { lib: s.titre }]} />
        <article className="colonne sujet-page">
          <p className="sujet-meta">
            <EtiquetteOrigine s={s} />
            {chaps.map((c) => (
              <Link key={c!.meta.id} to={`/chapitre/${c!.meta.id}`} className="ui">
                {romain(c!.numero)}. {c!.meta.titreCourt}
              </Link>
            ))}
          </p>
          {s.origine === 'officiel' && (
            <aside className="encadre">
              <p className="ui">Source officielle</p>
              <p>
                {s.sourceOfficielle}.{' '}
                {s.lienOfficiel && (
                  <a href={s.lienOfficiel} target="_blank" rel="noreferrer">
                    Ouvrir le sujet officiel (PDF, eduscol)
                  </a>
                )}
              </p>
              {s.remarque && <p>{s.remarque}</p>}
            </aside>
          )}

          <div className="sujet-encadre">
            <p className="ui ui-gris">Consigne{s.consigneReformulee ? ' (reformulée : texte exact dans le PDF officiel)' : ''}</p>
            <p className="sujet-consigne">
              <Texte>{s.consigne}</Texte>
            </p>
          </div>

          {s.documents?.map((d, i) => (
            <DocumentAffiche key={i} d={d} />
          ))}
          {s.documentsDecrits && (
            <div className="documents-decrits">
              <p className="ui ui-gris">Documents du dossier (à consulter dans le PDF officiel)</p>
              <ul className="liste">
                {s.documentsDecrits.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          <section className="entrainement" aria-labelledby="h-entrainement">
            <h2 id="h-entrainement">Mode entraînement</h2>
            <Chrono minutes={s.dureeMinutes} />
            <Brouillon id={s.id} />
          </section>

          <section aria-labelledby="h-corrige">
            <h2 id="h-corrige">Corrigé</h2>
            {!corrige ? (
              <button className="btn btn-plein" onClick={() => setCorrige(true)}>
                Afficher le corrigé
              </button>
            ) : (
              <div className="corrige apparait">
                <p className="ui ui-gris">Notions attendues</p>
                <ul className="notions">
                  {s.corrige.notions.map((n) => (
                    <li key={n} className="terme-tag">
                      {n}
                    </li>
                  ))}
                </ul>
                {s.corrige.reponseModele && (
                  <>
                    <p className="ui ui-gris">Réponse modèle</p>
                    <div className="copie">
                      <div className="copie-para">
                        <p>
                          <Texte>{s.corrige.reponseModele}</Texte>
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {s.corrige.plan && (
                  <>
                    <p className="ui ui-gris">Plan détaillé</p>
                    <div className="copie">
                      {s.corrige.plan.map((p, i) => (
                        <div key={i} className="copie-para">
                          <p className="corrige-partie">{p.titre}</p>
                          {p.paragraphes.map((t, j) => (
                            <p key={j}>
                              <Texte>{t}</Texte>
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {s.corrige.arguments && (
                  <>
                    <p className="ui ui-gris">Éléments de réponse</p>
                    <ul className="liste">
                      {s.corrige.arguments.map((a, i) => (
                        <li key={i}>
                          <Texte>{a}</Texte>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="ui ui-gris">Erreurs à éviter</p>
                <ul className="pieges">
                  {s.corrige.erreursAEviter.map((e, i) => (
                    <li key={i} className="piege">
                      <p>
                        <Texte>{e}</Texte>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </article>
      </div>
    </>
  );
}
