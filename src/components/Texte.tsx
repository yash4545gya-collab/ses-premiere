import katex from 'katex';
import { Fragment, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ContexteTermes, chercherTerme, useTermes } from '../lib/termes';

/**
 * Terme clé du cours. S'il est défini quelque part dans le site, on peut le
 * toucher pour lire sa définition sans quitter la page.
 */
function TermeCle({ texte }: { texte: string }) {
  const index = useTermes();
  const def = chercherTerme(index, texte);
  const [pos, setPos] = useState<{
    top: number;
    left: number;
    enBas: boolean;
    hauteurMax: number;
  } | null>(null);
  const bouton = useRef<HTMLButtonElement>(null);
  const bulle = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!pos) return;
    const fermer = () => setPos(null);
    const clic = (e: MouseEvent) => {
      if (!bulle.current?.contains(e.target as Node) && !bouton.current?.contains(e.target as Node)) fermer();
    };
    const touche = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        fermer();
        bouton.current?.focus();
      }
    };
    window.addEventListener('scroll', fermer, { passive: true });
    window.addEventListener('resize', fermer);
    document.addEventListener('mousedown', clic);
    document.addEventListener('keydown', touche);
    return () => {
      window.removeEventListener('scroll', fermer);
      window.removeEventListener('resize', fermer);
      document.removeEventListener('mousedown', clic);
      document.removeEventListener('keydown', touche);
    };
  }, [pos]);

  if (!def) return <span className="terme">{texte}</span>;

  const ouvrir = () => {
    if (pos) return setPos(null);
    const r = bouton.current!.getBoundingClientRect();
    const largeur = Math.min(340, window.innerWidth - 24);
    const left = Math.max(12, Math.min(r.left, window.innerWidth - largeur - 12));
    // Côté où il y a le plus de place ; la bulle défile si elle ne tient pas.
    const placeBas = window.innerHeight - r.bottom - 20;
    const placeHaut = r.top - 20;
    const enBas = placeBas >= 260 || placeBas >= placeHaut;
    setPos({
      top: enBas ? r.bottom + 8 : r.top - 8,
      left,
      enBas,
      hauteurMax: Math.max(120, enBas ? placeBas : placeHaut),
    });
  };

  return (
    <>
      <button
        ref={bouton}
        type="button"
        className={`terme terme-defini ${pos ? 'est-ouvert' : ''}`}
        onClick={ouvrir}
        aria-expanded={!!pos}
        aria-controls={pos ? id : undefined}
        title={`Définition : ${def.terme}`}
      >
        {texte}
      </button>
      {pos &&
        createPortal(
          <div
            ref={bulle}
            id={id}
            role="dialog"
            aria-label={`Définition : ${def.terme}`}
            className={`bulle-terme ${pos.enBas ? '' : 'bulle-haut'}`}
            style={{ top: pos.top, left: pos.left, maxHeight: pos.hauteurMax }}
          >
            <ContexteTermes.Provider value={null}>
              <p className="bulle-titre">{def.terme}</p>
              <p className="bulle-def">
                <Texte>{def.definition}</Texte>
              </p>
              <p className="bulle-exemple">
                <span className="ui ui-gris">Exemple</span> <Texte>{def.exemple}</Texte>
              </p>
              <Link className="ui bulle-lien" to={`/glossaire?q=${encodeURIComponent(def.terme)}`} onClick={() => setPos(null)}>
                Voir la fiche complète →
              </Link>
            </ContexteTermes.Provider>
          </div>,
          document.body,
        )}
    </>
  );
}

function tex(source: string, bloc = false): string {
  try {
    return katex.renderToString(source, {
      displayMode: bloc,
      throwOnError: false,
      strict: 'ignore',
    });
  } catch {
    return source;
  }
}

/**
 * Rend une chaîne de contenu : **terme clé** et $formule$.
 * Le reste est du texte brut (pas de HTML injecté depuis le contenu).
 */
export function Texte({ children }: { children: string }) {
  const morceaux = useMemo(() => {
    const out: { k: 't' | 'b' | 'm'; v: string }[] = [];
    const re = /(\*\*[^*]+\*\*|\$[^$]+\$)/g;
    let dernier = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(children))) {
      if (m.index > dernier) out.push({ k: 't', v: children.slice(dernier, m.index) });
      const s = m[0];
      if (s.startsWith('**')) out.push({ k: 'b', v: s.slice(2, -2) });
      else out.push({ k: 'm', v: s.slice(1, -1) });
      dernier = m.index + s.length;
    }
    if (dernier < children.length) out.push({ k: 't', v: children.slice(dernier) });
    return out;
  }, [children]);

  return (
    <>
      {morceaux.map((p, i) =>
        p.k === 't' ? (
          <Fragment key={i}>{p.v}</Fragment>
        ) : p.k === 'b' ? (
          <TermeCle key={i} texte={p.v} />
        ) : (
          <span key={i} dangerouslySetInnerHTML={{ __html: tex(p.v) }} />
        ),
      )}
    </>
  );
}

export function Formule({ tex: source, legende }: { tex: string; legende?: string }) {
  const html = useMemo(() => tex(source, true), [source]);
  return (
    <figure className="formule">
      <div className="formule-bloc" dangerouslySetInnerHTML={{ __html: html }} />
      {legende && <figcaption className="ui ui-gris">{legende}</figcaption>}
    </figure>
  );
}
