import { useParams } from 'react-router-dom';
import { chapitreParId } from '../content/chapitres';
import { FilAriane } from '../components/Layout';
import { Formule, Texte } from '../components/Texte';
import { romain } from '../lib/romain';
import { Introuvable } from './Introuvable';

/** Fiche d'une page, pensée pour l'impression (voir print.css). */
export function FicheSynthese() {
  const { id = '' } = useParams();
  const c = chapitreParId(id);
  if (!c || !c.contenu) return <Introuvable />;
  const ch = c.contenu;

  return (
    <div className="conteneur">
      <FilAriane
        etapes={[
          { lib: 'Chapitres', to: '/' },
          { lib: `${romain(c.numero)}. ${c.meta.titreCourt}`, to: `/chapitre/${ch.id}` },
          { lib: 'Fiche synthèse' },
        ]}
      />
      <div className="fiche">
        <div className="fiche-actions sans-impression">
          <button className="btn btn-plein" onClick={() => window.print()}>
            Imprimer la fiche
          </button>
        </div>
        <header className="fiche-tete">
          <p className="ui">
            Chapitre {romain(c.numero)} · {c.meta.domaine}
          </p>
          <h1>{ch.titre}</h1>
        </header>

        <div className="fiche-cols">
          <section>
            <h2>À retenir</h2>
            <ul>
              {ch.synthese.idees.map((idee, i) => (
                <li key={i}>
                  <Texte>{idee}</Texte>
                </li>
              ))}
            </ul>
          </section>

          {ch.synthese.mecanismes && (
            <section>
              <h2>Mécanismes</h2>
              {ch.synthese.mecanismes.map((m, i) => (
                <p key={i} className="fiche-meca">
                  {m.join(' → ')}
                </p>
              ))}
            </section>
          )}

          {ch.synthese.formules && (
            <section>
              <h2>Formules</h2>
              {ch.synthese.formules.map((f, i) => (
                <Formule key={i} tex={f.tex} legende={f.legende} />
              ))}
            </section>
          )}

          <section className="fiche-defs">
            <h2>Notions</h2>
            <dl>
              {ch.definitions.map((d) => (
                <div key={d.terme}>
                  <dt>{d.terme}</dt>
                  <dd>
                    <Texte>{d.definition}</Texte>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2>Auteurs</h2>
            <ul>
              {ch.auteurs.map((a) => (
                <li key={a.nom}>
                  <strong>{a.nom}</strong> : <Texte>{a.idee}</Texte>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
