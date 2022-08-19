import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { AppProvider } from './hooks';

import { GlobalStyle } from './styles/GlobalStyle';

import { CategoriesTabNavigation } from './components/CategoriesTabNavigation';
import { EmojisList } from './pages/EmojisList';

import * as S from './styles';

export function App() {
  return (
    <Router>
      <AppProvider>
        <GlobalStyle />
        <S.DraggableTaskBar />

        <S.Container>
          <Routes>
            <Route path="/" element={<EmojisList />} />
            <Route path="/emojis/:categorySlug" element={<EmojisList />} />
          </Routes>
          <CategoriesTabNavigation />
        </S.Container>
      </AppProvider>
    </Router>
  );
}
