import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RenduBloc } from '../components/Blocs';
import { FilAriane } from '../components/Layout';
import { Sommaire } from '../components/Sommaire';
import { Texte } from '../components/Texte';
import { METHODES, methodeParId } from '../content/methodo';
import type { DocumentSujet } from '../content/types';
import { Introuvable } from './Introuvable';
import { BandeauSection } from './Techniques';

export function DocumentAffiche({ d }: { d: DocumentSujet }) {
  return (
    <figure className="document">
      <figcaption className="document-titre">{d.titre}</figcaption>
      {d.contenu && (
        <p className="document-texte">
          <Texte>{d.contenu}</Texte>
        </p>
      )}
      {d.tableau && (
        <RenduBloc bloc={{ type: 'tableau', entetes: d.tableau.entetes, lignes: d.tableau.lignes }} schemas={[]} />
      )}
      <p className="ui ui-gris document-source">Source : {d.source}</p>
    </figure>
  );
}

export function ListeMethodes() {
  return (
    <>
      <BandeauSection
        sur="Savoir rédiger"
        titre="Méthodologie"
        chapo="Épreuve composée (EC1, EC2, EC3) et dissertation : ce qu’on attend, la méthode pas à pas, des copies modèles et des grilles pour t’auto-évaluer."
      />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Méthodologie' }]} />
        <ol className="cartes-liste">
          {METHODES.map((m) => (
            <li key={m.id}>
              <Link to={`/methodologie/${m.id}`} className="carte-lien">
                {m.sousTitre && <span className="ui ui-gris">{m.sousTitre}</span>}
                <span className="carte-titre">{m.titre}</span>
                <span className="carte-texte">{m.intro.split('. ')[0]}.</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

function Grille({ id, items }: { id: string; items: string[] }) {
  const [coches, setCoches] = useState<boolean[]>(() => items.map(() => false));
  return (
    <ul className="grille">
      {items.map((g, i) => (
        <li key={i}>
          <label>
            <input
              type="checkbox"
              checked={coches[i]}
              onChange={() => setCoches((c) => c.map((x, j) => (j === i ? !x : x)))}
              name={`${id}-${i}`}
            />
            <span>{g}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export function PageMethode() {
  const { id = '' } = useParams();
  const m = methodeParId(id);
  if (!m) return <Introuvable />;
  const idx = METHODES.indexOf(m);
  const prec = METHODES[idx - 1];
  const suiv = METHODES[idx + 1];
  const sections = [
    m.attendus && { id: 'attendus', lib: 'Ce qu’on attend' },
    m.etapes && { id: 'methode', lib: 'Méthode' },
    ...(m.parties ?? []).map((p, i) => ({ id: `partie-${i}`, lib: p.titre })),
    m.modele && { id: 'modele', lib: 'Copie modèle' },
    m.grille && { id: 'grille', lib: 'Grille' },
  ].filter(Boolean) as { id: string; lib: string }[];

  return (
    <>
      <BandeauSection sur={m.sousTitre ?? 'Méthodologie'} titre={m.titre} />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Méthodologie', to: '/methodologie' }, { lib: m.titre }]} />
        <div className="chapitre-grille">
          <Sommaire entrees={sections} />
          <article className="chapitre-corps">
            <p className="chapo">
              <Texte>{m.intro}</Texte>
            </p>

            {m.attendus && (
              <section id="attendus">
                <h2>Ce qu’on attend</h2>
                <ul className="liste">
                  {m.attendus.map((a, i) => (
                    <li key={i}>
                      <Texte>{a}</Texte>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {m.etapes && (
              <section id="methode">
                <h2>Méthode pas à pas</h2>
                <ol className="etapes">
                  {m.etapes.map((e, i) => (
                    <li key={i}>
                      <span className="etape-titre">{e.titre}</span>
                      <Texte>{e.texte}</Texte>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {m.parties?.map((p, i) => (
              <section key={i} id={`partie-${i}`}>
                <h2>{p.titre}</h2>
                {p.blocs.map((b, j) => (
                  <RenduBloc key={j} bloc={b} schemas={[]} />
                ))}
              </section>
            ))}

            {m.modele && (
              <section id="modele">
                <h2>Copie modèle</h2>
                <div className="sujet-encadre">
                  <p className="ui ui-gris">Sujet</p>
                  <p className="sujet-consigne">
                    <Texte>{m.modele.sujet}</Texte>
                  </p>
                </div>
                {m.modele.documents?.map((d, i) => (
                  <DocumentAffiche key={i} d={d} />
                ))}
                <div className="copie">
                  {m.modele.copie.map((c, i) => (
                    <div key={i} className="copie-para">
                      {c.titre && <p className="ui ui-gris">{c.titre}</p>}
                      <p>
                        <Texte>{c.texte}</Texte>
                      </p>
                    </div>
                  ))}
                </div>
                {m.modele.commentaire && (
                  <aside className="encadre">
                    <p className="ui">Pourquoi cette copie fonctionne</p>
                    <p>
                      <Texte>{m.modele.commentaire}</Texte>
                    </p>
                  </aside>
                )}
              </section>
            )}

            {m.grille && (
              <section id="grille">
                <h2>Grille d’auto-évaluation</h2>
                <p className="ui ui-gris">Coche ce que ta copie contient</p>
                <Grille id={m.id} items={m.grille} />
              </section>
            )}

            <nav className="precsuiv" aria-label="Fiches précédente et suivante">
              {prec ? (
                <Link to={`/methodologie/${prec.id}`} className="precsuiv-lien">
                  <span className="ui ui-gris">← Précédent</span>
                  <span>{prec.titre}</span>
                </Link>
              ) : (
                <span />
              )}
              {suiv ? (
                <Link to={`/methodologie/${suiv.id}`} className="precsuiv-lien precsuiv-suiv">
                  <span className="ui ui-gris">Suivant →</span>
                  <span>{suiv.titre}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </article>
        </div>
      </div>
    </>
  );
}
