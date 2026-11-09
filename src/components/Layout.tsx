import { Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Recherche } from './Recherche';

const MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

const NAV = [
  { to: '/', lib: 'Chapitres', fin: true },
  { to: '/techniques', lib: 'Techniques' },
  { to: '/methodologie', lib: 'Méthodologie' },
  { to: '/sujets', lib: 'Sujets' },
  { to: '/courbes', lib: 'Courbes' },
  { to: '/glossaire', lib: 'Glossaire' },
  { to: '/revision', lib: 'Révision' },
  { to: '/quiz', lib: 'Quiz' },
  { to: '/tableau-de-bord', lib: 'Progression' },
];

export function Layout() {
  const [ouvert, setOuvert] = useState(false);
  const [recherche, setRecherche] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const raccourci = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setRecherche((r) => !r);
      }
    };
    window.addEventListener('keydown', raccourci);
    return () => window.removeEventListener('keydown', raccourci);
  }, []);

  // Ferme le menu et remonte en haut à chaque changement de page
  useEffect(() => {
    setOuvert(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const echap = (e: KeyboardEvent) => e.key === 'Escape' && setOuvert(false);
    window.addEventListener('keydown', echap);
    return () => window.removeEventListener('keydown', echap);
  }, []);

  return (
    <div className="site">
      <a className="evitement ui" href="#contenu">
        Aller au contenu
      </a>
      <header className="entete">
        <div className="conteneur entete-in">
          <Link to="/" className="marque" aria-label="Accueil — SES Première">
            <span className="marque-ses">SES</span>
            <span className="marque-sous ui"><span className="marque-prefixe">Première · par </span><span className="nom">Y.gya</span></span>
          </Link>
          <nav className="nav-large" aria-label="Navigation principale">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.fin} className="nav-lien ui">
                {n.lib}
              </NavLink>
            ))}
          </nav>
          <button className="bouton-recherche" onClick={() => setRecherche(true)} aria-label="Rechercher" title={`Rechercher (${MAC ? '⌘' : 'Ctrl'} K)`}>
            <Search strokeWidth={1.25} size={22} />
            <kbd className="ui">{MAC ? '⌘' : 'Ctrl'} K</kbd>
          </button>
          <button
            className="nav-bouton"
            aria-expanded={ouvert}
            aria-controls="nav-mobile"
            aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOuvert((o) => !o)}
          >
            {ouvert ? <X strokeWidth={1.25} size={26} /> : <Menu strokeWidth={1.25} size={26} />}
          </button>
        </div>
        {ouvert && (
          <nav id="nav-mobile" className="nav-mobile apparait" aria-label="Navigation principale">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.fin} className="nav-mobile-lien">
                {n.lib}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <Recherche ouvert={recherche} onFermer={() => setRecherche(false)} />

      <main id="contenu" className="principal">
        <div key={pathname} className="page-entree">
          <Outlet />
        </div>
      </main>

      <footer className="pied">
        <div className="conteneur pied-in">
          <span className="ui">SES — Première · <span className="nom">Y.gya</span></span>
        </div>
      </footer>
    </div>
  );
}

export function FilAriane({ etapes }: { etapes: { lib: string; to?: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="ariane ui">
      <ol>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {etapes.map((e, i) => (
          <li key={i} aria-current={e.to ? undefined : 'page'}>
            {e.to ? <Link to={e.to}>{e.lib}</Link> : <span>{e.lib}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
