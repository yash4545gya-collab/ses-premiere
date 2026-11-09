import { useState } from 'react';
import type { Exercice } from '../content/types';
import { fr, lireNombre } from '../lib/calculs';
import { useStocke } from '../lib/stockage';
import { Texte } from './Texte';

type Etat = 'vide' | 'juste' | 'faux';

function UnExercice({ ex, i, onResultat }: { ex: Exercice; i: number; onResultat: (juste: boolean) => void }) {
  const [saisie, setSaisie] = useState('');
  const [choix, setChoix] = useState<number | null>(null);
  const [etat, setEtat] = useState<Etat>('vide');
  const [voir, setVoir] = useState(false);

  const verifier = () => {
    let juste = false;
    if (ex.type === 'nombre') {
      const v = lireNombre(saisie);
      if (v === null) return;
      juste = Math.abs(v - ex.reponse) <= ex.tolerance + 1e-9;
    } else {
      if (choix === null) return;
      juste = choix === ex.bonne;
    }
    setEtat(juste ? 'juste' : 'faux');
    setVoir(true);
    onResultat(juste);
  };

  return (
    <li className={`exercice ${etat !== 'vide' ? `ex-${etat}` : ''}`}>
      <p className="exercice-enonce">
        <span className="ui ui-gris">Exercice {i + 1}</span>
        <Texte>{ex.enonce}</Texte>
      </p>
      {ex.type === 'nombre' ? (
        <div className="exercice-saisie">
          <label className="sr-only" htmlFor={`ex-${i}`}>
            Ta réponse
          </label>
          <input
            id={`ex-${i}`}
            inputMode="decimal"
            value={saisie}
            onChange={(e) => {
              setSaisie(e.target.value);
              setEtat('vide');
            }}
            onKeyDown={(e) => e.key === 'Enter' && verifier()}
            placeholder="Ta réponse"
            autoComplete="off"
          />
          {ex.unite && <span className="champ-suffixe">{ex.unite}</span>}
          <button className="btn btn-petit btn-plein" onClick={verifier}>
            Vérifier
          </button>
        </div>
      ) : (
        <fieldset className="exercice-qcm">
          <legend className="sr-only">Choix</legend>
          {ex.choix.map((c, k) => (
            <label key={k} className={`exercice-choix ${choix === k ? 'est-choisi' : ''}`}>
              <input
                type="radio"
                name={`qcm-${i}`}
                checked={choix === k}
                onChange={() => {
                  setChoix(k);
                  setEtat('vide');
                }}
              />
              <span>
                <Texte>{c}</Texte>
              </span>
            </label>
          ))}
          <button className="btn btn-petit btn-plein" onClick={verifier} disabled={choix === null}>
            Vérifier
          </button>
        </fieldset>
      )}
      {etat !== 'vide' && (
        <p className={`exercice-retour ui ${etat === 'juste' ? 'retour-bon' : 'retour-faux'}`} role="status">
          {etat === 'juste' ? 'Juste' : 'Pas tout à fait'}
          {ex.type === 'nombre' && etat === 'faux' && ` — réponse attendue : ${fr(ex.reponse, 2)}${ex.unite ? ' ' + ex.unite : ''}`}
        </p>
      )}
      {(voir || etat !== 'vide') && (
        <p className="exercice-correction apparait">
          <span className="ui ui-gris">Correction</span> <Texte>{ex.correction}</Texte>
        </p>
      )}
      {!voir && etat === 'vide' && (
        <button className="lien-discret ui" onClick={() => setVoir(true)}>
          Voir la correction
        </button>
      )}
    </li>
  );
}

/** Série d'exercices auto-corrigés ; mémorise les exercices réussis. */
export function Exercices({ id, exercices }: { id: string; exercices: Exercice[] }) {
  const [reussis, setReussis] = useStocke<number[]>(`technique:${id}`, []);
  return (
    <>
      <p className="ui ui-gris">
        Réussis : {reussis.length} / {exercices.length}
      </p>
      <div className="barre" aria-hidden="true">
        <span style={{ width: `${(reussis.length / exercices.length) * 100}%` }} />
      </div>
      <ol className="exercices">
        {exercices.map((ex, i) => (
          <UnExercice
            key={i}
            ex={ex}
            i={i}
            onResultat={(juste) => juste && setReussis((r) => (r.includes(i) ? r : [...r, i]))}
          />
        ))}
      </ol>
    </>
  );
}
