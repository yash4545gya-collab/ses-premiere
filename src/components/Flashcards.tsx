import { useState } from 'react';
import type { Definition } from '../content/types';
import { Texte } from './Texte';

interface Props {
  cartes: Definition[];
  sues: string[];
  onMarquer: (terme: string, sue: boolean) => void;
}

/** Paquet de cartes recto (terme) / verso (définition). */
export function Flashcards({ cartes, sues, onMarquer }: Props) {
  const [i, setI] = useState(0);
  const [retournee, setRetournee] = useState(false);
  const c = cartes[i];
  const aller = (n: number) => {
    setRetournee(false);
    setI((n + cartes.length) % cartes.length);
  };
  const marquer = (sue: boolean) => {
    onMarquer(c.terme, sue);
    aller(i + 1);
  };

  return (
    <div className="flash">
      <div className="flash-tete">
        <span className="ui ui-gris">
          Carte {i + 1} / {cartes.length}
        </span>
        <span className="ui ui-gris">
          {sues.length} / {cartes.length} sues
        </span>
      </div>
      <button
        className={`flash-carte ${retournee ? 'est-verso' : ''}`}
        onClick={() => setRetournee((r) => !r)}
        aria-label={retournee ? 'Revoir le terme' : 'Afficher la définition'}
      >
        {!retournee ? (
          <span className="flash-recto">
            <span className="flash-terme">{c.terme}</span>
            <span className="ui ui-gris">Toucher pour retourner</span>
          </span>
        ) : (
          <span className="flash-verso apparait">
            <span className="ui ui-gris">{c.terme}</span>
            <span className="flash-def">
              <Texte>{c.definition}</Texte>
            </span>
          </span>
        )}
        {sues.includes(c.terme) && <span className="flash-sue ui">Sue</span>}
      </button>
      <div className="flash-actions">
        <button className="btn btn-petit" onClick={() => aller(i - 1)} aria-label="Carte précédente">
          ←
        </button>
        <button className="btn btn-petit" onClick={() => marquer(false)}>
          À revoir
        </button>
        <button className="btn btn-petit btn-plein" onClick={() => marquer(true)}>
          Je sais
        </button>
        <button className="btn btn-petit" onClick={() => aller(i + 1)} aria-label="Carte suivante">
          →
        </button>
      </div>
    </div>
  );
}
