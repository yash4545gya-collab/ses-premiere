import type { ReactNode } from 'react';
import type { Bloc, Definition, ExempleCours, Partie, SchemaRef } from '../content/types';
import { chercherTerme, termesEnValeur, type IndexTermes } from '../lib/termes';
import { SCHEMAS } from '../schemas';
import { Formule, Texte } from './Texte';

export function Schema({ schema, numero }: { schema: SchemaRef; numero?: number }) {
  const Composant = SCHEMAS[schema.id];
  return (
    <figure className="schema" id={`schema-${schema.id}`}>
      <figcaption className="schema-titre">
        <span className="ui ui-gris">Schéma{numero ? ` ${numero}` : ''}</span>
        <span className="schema-nom">{schema.titre}</span>
      </figcaption>
      <div className="schema-cadre">{Composant ? <Composant /> : <p className="ui">Schéma introuvable : {schema.id}</p>}</div>
      <p className="schema-legende">
        <Texte>{schema.legende}</Texte>
      </p>
    </figure>
  );
}

export function Mecanisme({ etapes, titre }: { etapes: string[]; titre?: string }) {
  return (
    <figure className="mecanisme">
      {titre && <figcaption className="ui ui-gris">{titre}</figcaption>}
      <ol>
        {etapes.map((e, i) => (
          <li key={i}>
            <Texte>{e}</Texte>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function RenduBloc({ bloc, schemas }: { bloc: Bloc; schemas: SchemaRef[] }) {
  switch (bloc.type) {
    case 'texte':
      return (
        <p>
          <Texte>{bloc.texte}</Texte>
        </p>
      );
    case 'mecanisme':
      return <Mecanisme etapes={bloc.etapes} titre={bloc.titre} />;
    case 'formule':
      return <Formule tex={bloc.tex} legende={bloc.legende} />;
    case 'liste':
      return (
        <ul className="liste">
          {bloc.items.map((it, i) => (
            <li key={i}>
              <Texte>{it}</Texte>
            </li>
          ))}
        </ul>
      );
    case 'tableau':
      return (
        <figure className="tableau">
          {bloc.titre && (
            <figcaption className="ui ui-gris">
              <Texte>{bloc.titre}</Texte>
            </figcaption>
          )}
          <div className="tableau-defile" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  {bloc.entetes.map((h, i) => (
                    <th key={i} scope="col">
                      <Texte>{h}</Texte>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloc.lignes.map((l, i) => (
                  <tr key={i}>
                    {l.map((c, j) =>
                      j === 0 ? (
                        <th key={j} scope="row">
                          <Texte>{c}</Texte>
                        </th>
                      ) : (
                        <td key={j}>
                          <Texte>{c}</Texte>
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {bloc.source && <p className="ui ui-gris tableau-source">Source : {bloc.source}</p>}
        </figure>
      );
    case 'schema': {
      const s = schemas.find((x) => x.id === bloc.id);
      const n = schemas.findIndex((x) => x.id === bloc.id) + 1;
      return s ? <Schema schema={s} numero={n} /> : null;
    }
    case 'encadre':
      return (
        <aside className="encadre">
          <p className="ui">{bloc.titre}</p>
          <p>
            <Texte>{bloc.texte}</Texte>
          </p>
        </aside>
      );
  }
}

/**
 * Fiche d'une notion : définition « bac », explication développée, exemples,
 * piège à éviter. `action` (ex. bouton favori) et `pied` (ex. lien vers le chapitre)
 * sont facultatifs.
 */
export function CarteDefinition({ d, action, pied, compacte }: { d: Definition; action?: ReactNode; pied?: ReactNode; compacte?: boolean }) {
  const exemples = [d.exemple, ...(d.exemples ?? [])];
  return (
    <article className={`definition ${compacte ? 'definition-compacte' : ''}`} id={`def-${slug(d.terme)}`}>
      <div className="definition-ligne">
        <h3 className="definition-terme">{d.terme}</h3>
        {action}
      </div>
      <p className="definition-texte">
        <Texte>{d.definition}</Texte>
      </p>
      {!compacte && d.developpement && (
        <div className="definition-dev">
          <p className="ui ui-gris">Pour bien comprendre</p>
          <p>
            <Texte>{d.developpement}</Texte>
          </p>
        </div>
      )}
      {exemples.length === 1 || compacte ? (
        <p className="definition-exemple">
          <span className="ui ui-gris">Exemple</span> <Texte>{d.exemple}</Texte>
        </p>
      ) : (
        <div className="definition-exemples">
          <p className="ui ui-gris">Exemples</p>
          <ul>
            {exemples.map((e, i) => (
              <li key={i}>
                <Texte>{e}</Texte>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!compacte && d.nePasConfondre && (
        <p className="definition-piege">
          <span className="ui">Ne pas confondre</span> <Texte>{d.nePasConfondre}</Texte>
        </p>
      )}
      {d.voirAussi && d.voirAussi.length > 0 && (
        <p className="definition-voir ui ui-gris">Voir aussi : {d.voirAussi.join(' · ')}</p>
      )}
      {pied}
    </article>
  );
}

/** Exemples concrets à la fin d'une partie du cours */
export function ExemplesPartie({ exemples }: { exemples: ExempleCours[] }) {
  if (!exemples.length) return null;
  return (
    <div className="exemples-partie">
      <p className="ui ui-gris">Exemples pour comprendre</p>
      {exemples.map((e, i) => (
        <article key={i} className="exemple-cours">
          <p className="exemple-titre">{e.titre}</p>
          <p>
            <Texte>{e.texte}</Texte>
          </p>
        </article>
      ))}
    </div>
  );
}

/** Tous les textes d'une partie (pour repérer les termes mis en valeur) */
const textesDeLaPartie = (p: Partie): string[] =>
  p.blocs.flatMap((b) => {
    switch (b.type) {
      case 'texte':
        return [b.texte];
      case 'encadre':
        return [b.texte];
      case 'liste':
        return b.items;
      case 'mecanisme':
        return b.etapes;
      case 'tableau':
        return [...b.entetes, ...b.lignes.flat()];
      default:
        return [];
    }
  });

/** Définitions des termes mis en valeur dans une partie, sans doublon, dans l'ordre d'apparition */
export const notionsDeLaPartie = (p: Partie, index: IndexTermes): Definition[] => {
  const vues = new Set<string>();
  const out: Definition[] = [];
  for (const t of textesDeLaPartie(p).flatMap(termesEnValeur)) {
    const d = chercherTerme(index, t);
    if (d && !vues.has(d.terme)) {
      vues.add(d.terme);
      out.push(d);
    }
  }
  return out;
};

/** Les notions définies qui apparaissent dans une partie du cours */
export function NotionsPartie({ definitions }: { definitions: Definition[] }) {
  if (!definitions.length) return null;
  return (
    <details className="notions-partie" open>
      <summary className="ui">Les notions de cette partie ({definitions.length})</summary>
      <dl>
        {definitions.map((d) => (
          <div key={d.terme}>
            <dt>{d.terme}</dt>
            <dd>
              <Texte>{d.definition}</Texte>
            </dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

export const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
