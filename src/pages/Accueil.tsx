import { Link } from 'react-router-dom';
import { Citation } from '../components/Citation';
import { CHAPITRES } from '../content/chapitres';
import { romain } from '../lib/romain';

const EXTRAS = [
  { to: '/techniques', titre: 'Techniques', sous: 'Calculs & graphiques' },
  { to: '/methodologie', titre: 'Méthodologie', sous: 'EC & dissertation' },
  { to: '/sujets', titre: 'Sujets', sous: 'Entraînement bac' },
  { to: '/courbes', titre: 'Courbes', sous: 'Atelier de graphiques' },
];

export function Accueil() {
  return (
    <div className="conteneur accueil">
      <header className="accueil-tete">
        <Citation />
        <p className="ui ui-gris">Spécialité · Programme 2019 · Année 2026–2027</p>
        <h1>Sciences économiques et sociales</h1>
        <p className="accueil-chapo">
          Les douze questionnements de Première : le cours, les définitions, les schémas, les pièges, et de quoi s’entraîner.
        </p>
      </header>

      <ul className="tuiles" aria-label="Chapitres">
        {CHAPITRES.map((c, i) => (
          <li key={c.meta.id} style={{ ["--i" as string]: i }}>
            <Link to={`/chapitre/${c.meta.id}`} className="tuile">
              <span className="tuile-num" aria-hidden="true">
                {romain(c.numero)}
              </span>
              <span className="tuile-ruban" aria-hidden="true" />
              <span className="tuile-titre">
                <span className="sr-only">Chapitre {romain(c.numero)} : </span>
                {c.meta.titreCourt}
              </span>
              <span className="tuile-dom ui">{c.contenu ? c.meta.domaine : 'En préparation'}</span>
            </Link>
          </li>
        ))}
        {EXTRAS.map((e, i) => (
          <li key={e.to} style={{ ["--i" as string]: CHAPITRES.length + i }}>
            <Link to={e.to} className="tuile tuile-extra">
              <span className="tuile-titre tuile-titre-extra">{e.titre}</span>
              <span className="tuile-ruban" aria-hidden="true" />
              <span className="tuile-dom ui">{e.sous}</span>
            </Link>
          </li>
        ))}
      </ul>

      <nav className="accueil-liens" aria-label="Outils de révision">
        <Link to="/glossaire" className="ui">Glossaire</Link>
        <Link to="/revision" className="ui">Flashcards</Link>
        <Link to="/quiz" className="ui">Quiz mixte</Link>
        <Link to="/tableau-de-bord" className="ui">Tableau de bord</Link>
      </nav>
    </div>
  );
}
