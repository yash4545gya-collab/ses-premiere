import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Polices auto-hébergées (aucun appel à Google Fonts)
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/eb-garamond/400.css';
import '@fontsource/eb-garamond/400-italic.css';
import '@fontsource/eb-garamond/500.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import 'katex/dist/katex.min.css';

import './styles/tokens.css';
import './styles/global.css';
import './styles/composants.css';
import './styles/doux.css';
import './styles/print.css';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
