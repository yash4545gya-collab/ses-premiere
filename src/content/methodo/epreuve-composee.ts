import type { FicheMethode } from '../types';

export const epreuveComposee: FicheMethode = {
  id: 'epreuve-composee',
  titre: 'L’épreuve composée : vue d’ensemble',
  sousTitre: 'Épreuve écrite de Terminale · à travailler dès la Première',
  intro:
    'Au baccalauréat, l’épreuve écrite de spécialité SES a lieu en Terminale. Le candidat choisit entre une dissertation et une épreuve composée. L’épreuve composée comporte trois parties indépendantes qui évaluent des compétences différentes. En Première, il n’y a pas d’épreuve nationale écrite en SES, mais tes devoirs reprennent ce format : autant en maîtriser les codes dès maintenant.',
  parties: [
    {
      titre: 'Les trois parties',
      blocs: [
        {
          type: 'tableau',
          entetes: ['Partie', 'Barème', 'Ce qu’on attend', 'Format en Première (indicatif)'],
          lignes: [
            ['1. Mobilisation des connaissances', '4 points', 'Répondre à une question de cours précise, sans document', 'Environ 15 min, 10 à 20 lignes'],
            ['2. Étude d’un document', '6 points', 'Présenter un document statistique, le lire, l’exploiter pour répondre à une question', 'Environ 20 à 30 min'],
            ['3. Raisonnement s’appuyant sur un dossier documentaire', '10 points', 'Construire une argumentation organisée à partir de 2 ou 3 documents et de ses connaissances', 'Environ 1 h'],
          ],
          source: 'Barème de l’épreuve de Terminale ; durées indicatives pour un devoir de Première',
        },
        {
          type: 'encadre',
          titre: 'Le conseil le plus important',
          texte:
            'Lis la consigne mot à mot et réponds exactement à la question posée. « Montrez que », « Expliquez », « Distinguez » et « Présentez » n’appellent pas la même réponse. Une copie hors sujet, même juste, rapporte peu de points.',
        },
      ],
    },
    {
      titre: 'Les verbes de consigne',
      blocs: [
        {
          type: 'tableau',
          entetes: ['Verbe', 'Ce qu’il faut faire'],
          lignes: [
            ['Définir', 'Donner la définition précise de la notion, éventuellement avec un exemple'],
            ['Présenter', 'Exposer de façon organisée, sans forcément argumenter'],
            ['Montrer que', 'Démontrer que l’affirmation est vraie, par des arguments et des mécanismes ; ne pas la discuter'],
            ['Expliquer', 'Donner les causes ou le mécanisme, en enchaînant les étapes (A entraîne B, qui entraîne C)'],
            ['Distinguer', 'Définir les deux notions et mettre en évidence ce qui les différencie'],
            ['Illustrer', 'Donner un ou plusieurs exemples précis'],
            ['Comparer', 'Mettre en évidence les ressemblances et les différences'],
          ],
        },
      ],
    },
  ],
};
