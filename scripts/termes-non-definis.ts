// Liste, chapitre par chapitre, les termes mis en valeur (**…**) dans le cours
// qui n'ont pas de définition (ni dans le chapitre, ni dans le glossaire).
// Utile pour savoir quelles notions ajouter. Lancer : node scripts/termes-non-definis.mjs
import { CHAPITRES } from '../src/content/chapitres';
import { GLOSSAIRE } from '../src/lib/donnees';
import { chercherTerme, indexerDefinitions, termesEnValeur } from '../src/lib/termes';

for (const c of CHAPITRES) {
  const ch = c.contenu;
  if (!ch) continue;
  const index = indexerDefinitions(ch.definitions, GLOSSAIRE);
  const textes = ch.essentiel.parties.flatMap((p) =>
    p.blocs.flatMap((b) =>
      b.type === 'texte' || b.type === 'encadre'
        ? [b.texte]
        : b.type === 'liste'
          ? b.items
          : b.type === 'mecanisme'
            ? b.etapes
            : b.type === 'tableau'
              ? [...b.entetes, ...b.lignes.flat()]
              : [],
    ),
  );
  const manquants = [...new Set(textes.flatMap(termesEnValeur).filter((t) => !chercherTerme(index, t)))];
  console.log(`${String(c.numero).padStart(2)} ${ch.id} (${manquants.length}) : ${manquants.join(' | ')}`);
}
