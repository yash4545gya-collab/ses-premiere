import { Link, useParams } from 'react-router-dom';
import { RenduBloc } from '../components/Blocs';
import { CALCULATEURS } from '../components/Calculateurs';
import { Exercices } from '../components/Exercices';
import { FilAriane } from '../components/Layout';
import { Sommaire } from '../components/Sommaire';
import { Formule, Texte } from '../components/Texte';
import { TECHNIQUES, techniqueParId } from '../content/techniques';
import { useStocke } from '../lib/stockage';
import { Introuvable } from './Introuvable';

export function BandeauSection({ sur, titre, chapo }: { sur: string; titre: string; chapo?: string }) {
  return (
    <header className="bandeau bandeau-section">
      <div className="conteneur bandeau-in">
        <p className="ui bandeau-dom">{sur}</p>
        <h1 className="bandeau-titre">{titre}</h1>
        {chapo && <p className="bandeau-chapo">{chapo}</p>}
      </div>
    </header>
  );
}

function Avancement({ id, total }: { id: string; total: number }) {
  const [r] = useStocke<number[]>(`technique:${id}`, []);
  return (
    <span className="carte-avancement">
      <span className="ui ui-gris">
        {r.length} / {total} exercices
      </span>
      <span className="barre barre-fine" aria-hidden="true">
        <span style={{ width: `${(r.length / total) * 100}%` }} />
      </span>
    </span>
  );
}

export function ListeTechniques() {
  return (
    <>
      <BandeauSection
        sur="Savoir-faire quantitatifs"
        titre="Techniques"
        chapo="Calculer, lire et rédiger : formules, méthode, calculateurs et exercices auto-corrigés."
      />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Techniques' }]} />
        <ol className="cartes-liste">
          {TECHNIQUES.map((t, i) => (
            <li key={t.id}>
              <Link to={`/techniques/${t.id}`} className="carte-lien">
                <span className="ui ui-gris">Technique {i + 1}</span>
                <span className="carte-titre">{t.titre}</span>
                <span className="carte-texte">{t.intro.split('. ')[0]}.</span>
                <Avancement id={t.id} total={t.exercices.length} />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export function PageTechnique() {
  const { id = '' } = useParams();
  const t = techniqueParId(id);
  if (!t) return <Introuvable />;
  const idx = TECHNIQUES.indexOf(t);
  const prec = TECHNIQUES[idx - 1];
  const suiv = TECHNIQUES[idx + 1];
  const Calc = CALCULATEURS[t.calculateur];
  const sections = [
    { id: 'formules', lib: 'Formules' },
    { id: 'rediger', lib: 'Rédiger le résultat' },
    { id: 'exemple', lib: 'Exemple corrigé' },
    { id: 'erreurs', lib: 'Erreurs fréquentes' },
    { id: 'calculateur', lib: 'Calculateur' },
    { id: 'exercices', lib: 'Exercices' },
  ];
  return (
    <>
      <BandeauSection sur={`Technique ${idx + 1} / ${TECHNIQUES.length}`} titre={t.titre} />
      <div className="conteneur">
        <FilAriane etapes={[{ lib: 'Techniques', to: '/techniques' }, { lib: t.titre }]} />
        <div className="chapitre-grille">
          <Sommaire entrees={sections} />
          <article className="chapitre-corps">
            <p className="chapo">
              <Texte>{t.intro}</Texte>
            </p>

            <section id="formules">
              <h2>Formules</h2>
              {t.formules.map((f, i) => (
                <Formule key={i} tex={f.tex} legende={f.legende} />
              ))}
              {t.complements?.map((b, i) => (
                <RenduBloc key={i} bloc={b} schemas={[]} />
              ))}
            </section>

            <section id="rediger">
              <h2>Rédiger le résultat</h2>
              <ul className="phrases">
                {t.phraseType.map((p, i) => (
                  <li key={i}>
                    <Texte>{p}</Texte>
                  </li>
                ))}
              </ul>
            </section>

            <section id="exemple">
              <h2>Exemple corrigé</h2>
              <p>
                <Texte>{t.exemple.enonce}</Texte>
              </p>
              {t.exemple.tableau && (
                <RenduBloc
                  bloc={{ type: 'tableau', entetes: t.exemple.tableau.entetes, lignes: t.exemple.tableau.lignes, source: t.exemple.tableau.source }}
                  schemas={[]}
                />
              )}
              <ol className="resolution">
                {t.exemple.resolution.map((r, i) => (
                  <li key={i}>
                    <Texte>{r}</Texte>
                  </li>
                ))}
              </ol>
            </section>

            <section id="erreurs">
              <h2>Erreurs fréquentes</h2>
              <ul className="pieges">
                {t.erreurFrequente.map((e, i) => (
                  <li key={i} className="piege">
                    <p>
                      <Texte>{e}</Texte>
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="calculateur">
              <h2>Calculateur</h2>
              <div className="calculateur">{Calc ? <Calc /> : <p>Calculateur introuvable.</p>}</div>
            </section>

            <section id="exercices">
              <h2>Exercices</h2>
              <Exercices id={t.id} exercices={t.exercices} />
            </section>

            <nav className="precsuiv" aria-label="Techniques précédente et suivante">
              {prec ? (
                <Link to={`/techniques/${prec.id}`} className="precsuiv-lien">
                  <span className="ui ui-gris">← Technique {idx}</span>
                  <span>{prec.titre}</span>
                </Link>
              ) : (
                <span />
              )}
              {suiv ? (
                <Link to={`/techniques/${suiv.id}`} className="precsuiv-lien precsuiv-suiv">
                  <span className="ui ui-gris">Technique {idx + 2} →</span>
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
