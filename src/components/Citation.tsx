import { useEffect, useState } from 'react';

/** Citations de l'accueil : modifie librement cette liste. */
export const CITATIONS = [
  'supply and demand buddy',
  'Sell me this pen',
  'Who owns this website',
  'Invest in rare fish',
  'Invest in a Lithuanian potato farm',
  'Economics is when brownies are baked',
];

export const AUTEUR_CITATIONS = 'John Business';

/** Durée d'affichage de chaque citation, en millisecondes */
const DUREE = 60_000;

/** Pastille de citation qui change toute seule, environ une fois par minute. */
export function Citation() {
  // on commence par une citation au hasard
  const [i, setI] = useState(() => Math.floor(Math.random() * CITATIONS.length));

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % CITATIONS.length), DUREE);
    return () => window.clearInterval(t);
  }, []);

  return (
    <figure className="citation-bloc">
      {/* la clé force l'animation d'entrée à chaque changement */}
      <blockquote key={i} className="citation">
        <span className="citation-guillemet" aria-hidden="true">
          “
        </span>
        {CITATIONS[i]}
        <span className="citation-guillemet" aria-hidden="true">
          ”
        </span>
      </blockquote>
      <figcaption className="citation-auteur">— {AUTEUR_CITATIONS}</figcaption>
    </figure>
  );
}
