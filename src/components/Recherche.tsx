import Fuse from 'fuse.js';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INDEX_RECHERCHE } from '../lib/donnees';

/** Recherche globale (Ctrl/Cmd + K) dans les chapitres, notions, techniques, méthodes et sujets. */
export function Recherche({ ouvert, onFermer }: { ouvert: boolean; onFermer: () => void }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const fuse = useMemo(
    () =>
      new Fuse(INDEX_RECHERCHE, {
        keys: [
          { name: 'titre', weight: 3 },
          { name: 'texte', weight: 1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [],
  );
  const resultats = q.trim() ? fuse.search(q.trim(), { limit: 12 }).map((r) => r.item) : [];

  useEffect(() => {
    if (ouvert) {
      setQ('');
      setSel(0);
      window.setTimeout(() => input.current?.focus(), 10);
    }
  }, [ouvert]);
  useEffect(() => setSel(0), [q]);

  if (!ouvert) return null;

  const aller = (to: string) => {
    onFermer();
    navigate(to);
  };

  return (
    <div className="recherche-fond" onClick={onFermer} role="presentation">
      <div className="recherche apparait" role="dialog" aria-modal="true" aria-label="Rechercher" onClick={(e) => e.stopPropagation()}>
        <div className="recherche-champ">
          <Search size={20} strokeWidth={1.25} aria-hidden="true" />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Notion, chapitre, technique, sujet…"
            aria-label="Rechercher"
            aria-controls="recherche-resultats"
            aria-activedescendant={resultats[sel] ? `res-${sel}` : undefined}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSel((s) => Math.min(s + 1, resultats.length - 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSel((s) => Math.max(s - 1, 0));
              } else if (e.key === 'Enter' && resultats[sel]) {
                aller(resultats[sel].to);
              } else if (e.key === 'Escape') {
                onFermer();
              }
            }}
          />
          <kbd className="ui">Échap</kbd>
        </div>
        <ul id="recherche-resultats" className="recherche-resultats" role="listbox">
          {resultats.map((r, i) => (
            <li key={`${r.type}-${r.to}`} id={`res-${i}`} role="option" aria-selected={i === sel}>
              <button className={`recherche-res ${i === sel ? 'est-sel' : ''}`} onMouseEnter={() => setSel(i)} onClick={() => aller(r.to)}>
                <span className="ui ui-gris recherche-type">{r.type}</span>
                <span className="recherche-titre">{r.titre}</span>
                <span className="recherche-sous">{r.sousTitre}</span>
              </button>
            </li>
          ))}
          {q.trim() && !resultats.length && <li className="recherche-vide">Aucun résultat.</li>}
          {!q.trim() && <li className="recherche-vide ui ui-gris">Tape un mot : « surplus », « Becker », « taux de variation »…</li>}
        </ul>
      </div>
    </div>
  );
}
