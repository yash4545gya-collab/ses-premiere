import { useEffect, useState } from 'react';

export interface EntreeSommaire {
  id: string;
  lib: string;
}

function allerA(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduit = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduit ? 'auto' : 'smooth', block: 'start' });
}

/** Sommaire collant dans la marge (bureau) / menu déroulant (mobile). */
export function Sommaire({ entrees }: { entrees: EntreeSommaire[] }) {
  const [actif, setActif] = useState(entrees[0]?.id);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(
      (vus) => {
        const visibles = vus.filter((v) => v.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibles[0]) setActif(visibles[0].target.id);
      },
      { rootMargin: '-80px 0px -65% 0px' },
    );
    entrees.forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [entrees]);

  return (
    <>
      <nav className="sommaire" aria-label="Sommaire du chapitre">
        <p className="ui ui-gris">Sommaire</p>
        <ol>
          {entrees.map((e) => (
            <li key={e.id}>
              <button className={`sommaire-lien ${actif === e.id ? 'est-actif' : ''}`} onClick={() => allerA(e.id)}>
                {e.lib}
              </button>
            </li>
          ))}
        </ol>
      </nav>
      <div className="sommaire-mobile">
        <label className="sr-only" htmlFor="sommaire-select">
          Aller à la section
        </label>
        <select
          id="sommaire-select"
          className="ui"
          value={actif}
          onChange={(e) => {
            setActif(e.target.value);
            allerA(e.target.value);
          }}
        >
          {entrees.map((e) => (
            <option key={e.id} value={e.id}>
              {e.lib}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
