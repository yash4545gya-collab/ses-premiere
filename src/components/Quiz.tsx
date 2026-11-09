import { useMemo, useState } from 'react';
import type { Question } from '../content/types';
import { Texte } from './Texte';

/** Mélange (Fisher-Yates) — sur une copie */
export function melanger<T>(t: T[]): T[] {
  const a = [...t];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface Props {
  questions: Question[];
  /** Appelé à la fin avec le score en % */
  onFin?: (pct: number) => void;
  meilleur?: number | null;
}

export function Quiz({ questions, onFin, meilleur }: Props) {
  const [tirage, setTirage] = useState(0);
  // Ordre des questions et des choix mélangé à chaque nouvelle tentative
  const serie = useMemo(
    () =>
      melanger(questions).map((q) => {
        const ordre = melanger(q.choix.map((_, i) => i));
        return { ...q, choix: ordre.map((i) => q.choix[i]), bonne: ordre.indexOf(q.bonne) };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questions, tirage],
  );
  const [i, setI] = useState(0);
  const [choix, setChoix] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [fini, setFini] = useState(false);

  const q = serie[i];

  const repondre = (k: number) => {
    if (choix !== null) return;
    setChoix(k);
    if (k === q.bonne) setScore((s) => s + 1);
  };

  const suivante = () => {
    if (i + 1 < serie.length) {
      setI(i + 1);
      setChoix(null);
    } else {
      setFini(true);
      onFin?.(Math.round((score / serie.length) * 100));
    }
  };

  const recommencer = () => {
    setTirage((t) => t + 1);
    setI(0);
    setChoix(null);
    setScore(0);
    setFini(false);
  };

  if (fini) {
    const pct = Math.round((score / serie.length) * 100);
    return (
      <div className="quiz carte apparait">
        <p className="ui ui-gris">Résultat</p>
        <p className="quiz-score">
          {score} / {serie.length}
        </p>
        <div className="barre" aria-hidden="true">
          <span style={{ width: `${pct}%` }} />
        </div>
        <p className="ui ui-gris" style={{ marginTop: '0.8rem' }}>
          Meilleur score enregistré : {Math.max(pct, meilleur ?? 0)} %
        </p>
        <button className="btn btn-plein" onClick={recommencer}>
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="quiz carte">
      <div className="quiz-tete">
        <span className="ui ui-gris">
          Question {i + 1} / {serie.length}
        </span>
        <span className="ui ui-gris">Score {score}</span>
      </div>
      <div className="barre barre-fine" aria-hidden="true">
        <span style={{ width: `${(i / serie.length) * 100}%` }} />
      </div>
      <p className="quiz-question" key={`q${tirage}-${i}`}>
        <Texte>{q.question}</Texte>
      </p>
      <ul className="quiz-choix" role="list">
        {q.choix.map((c, k) => {
          const etat =
            choix === null ? '' : k === q.bonne ? 'est-bonne' : k === choix ? 'est-fausse' : 'est-neutre';
          return (
            <li key={k}>
              <button className={`quiz-option ${etat}`} onClick={() => repondre(k)} disabled={choix !== null} aria-pressed={choix === k}>
                <span className="quiz-lettre ui">{String.fromCharCode(65 + k)}</span>
                <span>
                  <Texte>{c}</Texte>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {choix !== null && (
        <div className={`quiz-retour apparait ${choix === q.bonne ? 'retour-bon' : 'retour-faux'}`} role="status">
          <p className="ui">{choix === q.bonne ? 'Bonne réponse' : 'Réponse incorrecte'}</p>
          <p>
            <Texte>{q.explication}</Texte>
          </p>
          <button className="btn btn-plein" onClick={suivante} autoFocus>
            {i + 1 < serie.length ? 'Question suivante' : 'Voir le résultat'}
          </button>
        </div>
      )}
    </div>
  );
}
