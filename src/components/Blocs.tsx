import type { Bloc, Definition, SchemaRef } from '../content/types';
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

export function CarteDefinition({ d }: { d: Definition }) {
  return (
    <article className="definition" id={`def-${slug(d.terme)}`}>
      <h3 className="definition-terme">{d.terme}</h3>
      <p className="definition-texte">
        <Texte>{d.definition}</Texte>
      </p>
      <p className="definition-exemple">
        <span className="ui ui-gris">Exemple</span> <Texte>{d.exemple}</Texte>
      </p>
      {d.voirAussi && d.voirAussi.length > 0 && (
        <p className="definition-voir ui ui-gris">Voir aussi : {d.voirAussi.join(' · ')}</p>
      )}
    </article>
  );
}

export const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
