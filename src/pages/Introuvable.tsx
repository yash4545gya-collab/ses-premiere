import { Link } from 'react-router-dom';

export function Introuvable() {
  return (
    <div className="conteneur colonne page-simple">
      <p className="ui ui-gris">Erreur 404</p>
      <h1>Page introuvable</h1>
      <p>Cette page n’existe pas, ou plus.</p>
      <Link to="/" className="btn btn-plein">
        Retour aux chapitres
      </Link>
    </div>
  );
}

