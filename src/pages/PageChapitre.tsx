import { Link, useParams } from 'react-router-dom';
import { CHAPITRES, chapitreParId, type ChapitreOrdonne } from '../content/chapitres';
import { CarteDefinition, RenduBloc } from '../components/Blocs';
import { Flashcards } from '../components/Flashcards';
import { FilAriane } from '../components/Layout';
import { Quiz } from '../components/Quiz';
import { Sommaire } from '../components/Sommaire';
import { Texte } from '../components/Texte';
import { useProgression } from '../lib/progression';
import { romain } from '../lib/romain';
import { Introuvable } from './Introuvable';
import { CarteSujet } from './Sujets';
import { sujetsDuChapitre } from '../content/sujets';

export function Bandeau({ c }: { c: ChapitreOrdonne }) {
  return (
    <header className="bandeau">
      <div className="conteneur bandeau-in">
        <p className="ui bandeau-dom">
          {c.meta.domaine}
          {c.chapitreManuel !== undefined && <span className="bandeau-manuel"> · Manuel, chap. {c.chapitreManuel}</span>}
        </p>
        <div className="bandeau-ligne">
          <span className="bandeau-num" aria-hidden="true">
            {romain(c.numero)}
          </span>
          <h1 className="bandeau-titre">
            <span className="sr-only">Chapitre {romain(c.numero)} : </span>
            {c.meta.titre}
          </h1>
        </div>
      </div>
    </header>
  );
}

export function PrecSuiv({ numero }: { numero: number }) {
  const prec = CHAPITRES[numero - 2];
  const suiv = CHAPITRES[numero];
  return (
    <nav className="precsuiv" aria-label="Chapitres précédent et suivant">
      {prec ? (
        <Link to={`/chapitre/${prec.meta.id}`} className="precsuiv-lien">
          <span className="ui ui-gris">← Chapitre {romain(prec.numero)}</span>
          <span>{prec.meta.titreCourt}</span>
        </Link>
      ) : (
        <span />
      )}
      {suiv ? (
        <Link to={`/chapitre/${suiv.meta.id}`} className="precsuiv-lien precsuiv-suiv">
          <span className="ui ui-gris">Chapitre {romain(suiv.numero)} →</span>
          <span>{suiv.meta.titreCourt}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

function Objectifs({ items }: { items: string[] }) {
  return (
    <details className="objectifs">
      <summary className="ui">Objectifs du programme officiel</summary>
      <ul>
        {items.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </details>
  );
}

export function PageChapitre() {
  const { id = '' } = useParams();
  const c = chapitreParId(id);
  const { prog, marquerLue, enregistrerQuiz, basculerCarte } = useProgression(id);
  if (!c) return <Introuvable />;

  const ariane = <FilAriane etapes={[{ lib: 'Chapitres', to: '/' }, { lib: `${romain(c.numero)}. ${c.meta.titreCourt}` }]} />;

  if (!c.contenu) {
    return (
      <>
        <Bandeau c={c} />
        <div className="conteneur">
          {ariane}
          <div className="colonne">
            <p className="ui ui-gris" style={{ marginTop: '2rem' }}>
              En préparation
            </p>
            <p>Le cours de ce chapitre n’est pas encore rédigé. Voici ce que le programme attend.</p>
            <ul className="liste">
              {c.meta.objectifs.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
            <PrecSuiv numero={c.numero} />
          </div>
        </div>
      </>
    );
  }

  const ch = c.contenu;
  const sections = [
    { id: 'essentiel', lib: 'L’essentiel' },
    { id: 'definitions', lib: 'Définitions' },
    { id: 'auteurs', lib: 'Auteurs & théories' },
    { id: 'schemas', lib: 'Schémas' },
    { id: 'pieges', lib: 'Pièges fréquents' },
    { id: 'fiche', lib: 'Fiche synthèse' },
    { id: 'quiz', lib: 'Quiz' },
    { id: 'flashcards', lib: 'Flashcards' },
    { id: 'sujets', lib: 'Sujets liés' },
  ];

  return (
    <>
      <Bandeau c={c} />
      <div className="conteneur">
        {ariane}
        <div className="chapitre-grille">
          <Sommaire entrees={sections} />
          <article className="chapitre-corps">
            <Objectifs items={ch.objectifs} />

            <section id="essentiel" aria-labelledby="h-essentiel">
              <h2 id="h-essentiel">L’essentiel</h2>
              <div className="problematique">
                <p className="ui ui-gris">Problématique</p>
                <p>
                  <Texte>{ch.essentiel.problematique}</Texte>
                </p>
              </div>
              <ol className="plan ui">
                {ch.essentiel.parties.map((p, i) => (
                  <li key={i}>
                    {romain(i + 1)}. {p.titre}
                  </li>
                ))}
              </ol>
              {ch.essentiel.parties.map((p, i) => (
                <div key={i} className="partie">
                  <h3>
                    <span className="partie-num">{romain(i + 1)}.</span> {p.titre}
                  </h3>
                  {p.blocs.map((b, j) => (
                    <RenduBloc key={j} bloc={b} schemas={ch.schemas} />
                  ))}
                </div>
              ))}
              <div className="lu">
                <button className={`btn ${prog.leconLue ? '' : 'btn-plein'}`} onClick={() => marquerLue(!prog.leconLue)} aria-pressed={prog.leconLue}>
                  {prog.leconLue ? 'Leçon lue ✓' : 'Marquer la leçon comme lue'}
                </button>
              </div>
            </section>

            <section id="definitions" aria-labelledby="h-definitions">
              <h2 id="h-definitions">Définitions</h2>
              <p className="ui ui-gris">{ch.definitions.length} notions</p>
              <div className="definitions">
                {ch.definitions.map((d) => (
                  <CarteDefinition key={d.terme} d={d} />
                ))}
              </div>
            </section>

            <section id="auteurs" aria-labelledby="h-auteurs">
              <h2 id="h-auteurs">Auteurs & théories</h2>
              <dl className="auteurs">
                {ch.auteurs.map((a) => (
                  <div key={a.nom} className="auteur">
                    <dt>
                      <span className="auteur-nom">{a.nom}</span>
                      {a.dates && <span className="ui ui-gris"> {a.dates}</span>}
                    </dt>
                    <dd>
                      <Texte>{a.idee}</Texte>
                      {a.oeuvre && <span className="auteur-oeuvre"> — {a.oeuvre}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="schemas" aria-labelledby="h-schemas">
              <h2 id="h-schemas">Schémas</h2>
              <p>Les schémas sont insérés dans le cours ci-dessus. Accès direct :</p>
              <ol className="liste-schemas">
                {ch.schemas.map((s, i) => (
                  <li key={s.id}>
                    <button
                      className="lien-bouton"
                      onClick={() => document.getElementById(`schema-${s.id}`)?.scrollIntoView({ block: 'start' })}
                    >
                      <span className="ui ui-gris">Schéma {i + 1}</span> {s.titre}
                    </button>
                  </li>
                ))}
              </ol>
            </section>

            <section id="pieges" aria-labelledby="h-pieges">
              <h2 id="h-pieges">Pièges fréquents</h2>
              <ul className="pieges">
                {ch.pieges.map((p, i) => (
                  <li key={i} className="piege">
                    <p className="piege-erreur">
                      <span className="ui">Erreur</span> <Texte>{p.erreur}</Texte>
                    </p>
                    <p className="piege-correction">
                      <span className="ui">Correction</span> <Texte>{p.correction}</Texte>
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="fiche" aria-labelledby="h-fiche">
              <h2 id="h-fiche">Fiche synthèse</h2>
              <p>Une page, à imprimer ou à relire la veille d’un contrôle : idées clés, formules, mécanismes et définitions courtes.</p>
              <Link to={`/chapitre/${ch.id}/fiche`} className="btn btn-plein">
                Ouvrir la fiche imprimable
              </Link>
            </section>

            <section id="quiz" aria-labelledby="h-quiz">
              <h2 id="h-quiz">Quiz</h2>
              <p className="ui ui-gris">
                {ch.quiz.length} questions{prog.meilleurQuiz !== null ? ` · meilleur score ${prog.meilleurQuiz} %` : ''}
              </p>
              <Quiz questions={ch.quiz} onFin={enregistrerQuiz} meilleur={prog.meilleurQuiz} />
            </section>

            <section id="flashcards" aria-labelledby="h-flashcards">
              <h2 id="h-flashcards">Flashcards</h2>
              <Flashcards cartes={ch.definitions} sues={prog.flashcardsSues} onMarquer={basculerCarte} />
            </section>

            <section id="sujets" aria-labelledby="h-sujets">
              <h2 id="h-sujets">Sujets liés</h2>
              <ul className="cartes-liste cartes-liste-1">
                {sujetsDuChapitre(ch.id).map((s) => (
                  <li key={s.id}>
                    <CarteSujet s={s} />
                  </li>
                ))}
              </ul>
              <Link to={`/sujets?chapitre=${ch.id}`} className="btn" style={{ marginTop: '1rem' }}>
                Tous les sujets de ce chapitre
              </Link>
            </section>

            <PrecSuiv numero={c.numero} />
          </article>
        </div>
      </div>
    </>
  );
}

