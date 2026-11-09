import katex from 'katex';
import { Fragment, useMemo } from 'react';

function tex(source: string, bloc = false): string {
  try {
    return katex.renderToString(source, { displayMode: bloc, throwOnError: false, strict: 'ignore' });
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
          <span key={i} className="terme">
            {p.v}
          </span>
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
