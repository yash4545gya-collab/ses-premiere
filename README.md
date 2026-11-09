# SES — Première · par Y.gya

Site de révision pour la spécialité **Sciences économiques et sociales de Première** (programme officiel de 2019, BO spécial n°1 du 22 janvier 2019). Les 12 chapitres, 8 techniques quantitatives, la méthodologie de l’épreuve composée et de la dissertation, 28 sujets corrigés, un glossaire, des flashcards en répétition espacée, un quiz mixte, un tableau de bord et un atelier pour dessiner ses propres courbes.

Vite + React + TypeScript, sans serveur : tout est statique, la progression est enregistrée dans le navigateur (`localStorage`).

## Lancer le site sur ton ordinateur

Il faut [Node.js](https://nodejs.org) (version 20 ou plus récente).

```bash
npm install
npm run dev        # site en local : http://localhost:5173/ses-premiere/
npm run check      # vérifie tous les calculs et la cohérence du contenu
npm run build      # construit le site dans dist/
npm run preview    # sert la version construite
```

## Publier sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque `push` sur `main`.

1. Crée un dépôt public nommé **`ses-premiere`** sur GitHub (le nom compte : il correspond à `base` dans `vite.config.ts`).
2. Pousse le projet sur la branche `main`.
3. Dans le dépôt : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. Le site est en ligne à l’adresse `https://<ton-pseudo>.github.io/ses-premiere/` (onglet **Actions** pour suivre la publication).

Si tu renommes le dépôt, change `base` dans `vite.config.ts` (`'/nouveau-nom/'`).

## Réordonner les chapitres

Tout se passe dans **`src/content/ordre.ts`** : déplace les lignes pour suivre la progression de ton professeur. Les chiffres romains (I, II, III…) suivent cet ordre automatiquement.

Pour afficher le numéro du chapitre dans ton manuel (Hachette SES 1re, éd. 2023), remplis `chapitreManuel` :

```ts
{ id: 'monnaie', chapitreManuel: 4 },
```

## Modifier ou ajouter du contenu

Le contenu est séparé de l’affichage : tu peux tout modifier sans toucher aux composants.

| Contenu | Fichier |
|---|---|
| Un chapitre (cours, définitions, auteurs, pièges, synthèse, quiz) | `src/content/chapitres/<id>.ts` |
| Liste des chapitres rédigés | `src/content/chapitres/index.ts` |
| Les techniques et leurs exercices | `src/content/techniques/*.ts` |
| La méthodologie | `src/content/methodo/*.ts` |
| Les sujets officiels / sujets type | `src/content/sujets/officiels.ts`, `src/content/sujets/types.ts` |
| Les schémas (graphiques calculés, schémas en boîtes) | `src/schemas/*.tsx` |
| Les modèles de l’atelier de courbes | `MODELES` dans `src/pages/Courbes.tsx` |
| Couleurs et polices | `src/styles/tokens.css` |
| Coins arrondis et animations | `src/styles/doux.css` |

Les types (`Chapitre`, `Definition`, `Auteur`, `Question`, `Technique`, `Sujet`…) sont décrits dans `src/content/types.ts`.

Dans les textes :

- `**terme**` met un terme clé en valeur (soulignement orange) ;
- `$...$` affiche une formule (KaTeX), par exemple `$Q_d = 20 - 2P$`.

Une question de quiz :

```ts
{
  question: 'Le coût marginal est :',
  choix: ['…', 'Le coût de la dernière unité produite', '…', '…'],
  bonne: 1, // indice de la bonne réponse, en partant de 0
  explication: 'Cm = ΔCT / ΔQ.',
},
```

Après chaque modification, lance `npm run check` puis `npm run build`.

## Règles de fiabilité

- Toutes les données des exemples et exercices sont **fictives** et signalées comme telles, sauf mention d’une source réelle.
- Chaque chiffre utilisé dans un exemple, un exercice ou un corrigé est **recalculé** par `scripts/verifier-calculs.mjs` ; chaque réponse d’exercice est recalculée de façon indépendante par `scripts/verifier-contenu.ts`.
- Un sujet n’est marqué **officiel** que si sa source exacte (session, code du sujet, PDF eduscol) a été vérifiée. Les autres sont des « sujets type — non officiels ».
- Aucun texte du manuel n’est reproduit.

Voir `CONTENT_NOTES.md` pour les sources et les points à vérifier.

---

SES — Première · Y.gya
