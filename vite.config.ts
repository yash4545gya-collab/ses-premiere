import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` = nom du dépôt GitHub, pour GitHub Pages (https://<user>.github.io/ses-premiere/)
export default defineConfig({
  base: '/ses-premiere/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // KaTeX et React dans des fichiers séparés : meilleur cache entre deux mises à jour du contenu
        manualChunks(id) {
          if (id.includes('node_modules/katex')) return 'katex';
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler|lucide-react)\//.test(id)) return 'react';
          if (id.includes('/src/content/')) return 'contenu';
        },
      },
    },
  },
});
