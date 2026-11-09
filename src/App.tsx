import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Accueil } from './pages/Accueil';
import { FicheSynthese } from './pages/FicheSynthese';
import { Introuvable } from './pages/Introuvable';
import { PageChapitre } from './pages/PageChapitre';
import { ListeTechniques, PageTechnique } from './pages/Techniques';
import { ListeMethodes, PageMethode } from './pages/Methodologie';
import { ListeSujets, PageSujet } from './pages/Sujets';
import { Glossaire, QuizMixte, Revision, TableauDeBord } from './pages/Outils';
import { Courbes } from './pages/Courbes';

export function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="chapitre/:id" element={<PageChapitre />} />
          <Route path="chapitre/:id/fiche" element={<FicheSynthese />} />
          <Route path="techniques" element={<ListeTechniques />} />
          <Route path="techniques/:id" element={<PageTechnique />} />
          <Route path="methodologie" element={<ListeMethodes />} />
          <Route path="methodologie/:id" element={<PageMethode />} />
          <Route path="sujets" element={<ListeSujets />} />
          <Route path="sujets/:id" element={<PageSujet />} />
          <Route path="glossaire" element={<Glossaire />} />
          <Route path="revision" element={<Revision />} />
          <Route path="quiz" element={<QuizMixte />} />
          <Route path="tableau-de-bord" element={<TableauDeBord />} />
          <Route path="courbes" element={<Courbes />} />
          <Route path="*" element={<Introuvable />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
