import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { AppProvider } from './hooks';

import { GlobalStyle } from './styles/GlobalStyle';

import { EmojisCategories } from './components/EmojisCategories';
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
            <Route path="/:categorySlug" element={<EmojisList />} />
            <Route path="/emojis/:categorySlug" element={<EmojisList />} />
          </Routes>
          <EmojisCategories />
        </S.Container>
      </AppProvider>
    </Router>
  );
}
