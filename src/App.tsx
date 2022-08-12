import { FormEvent, useEffect, useState } from 'react';

import emojiList from './data/emojiList';

import { SearchInput } from './components/SearchInput';
import { GlobalStyle } from './styles/GlobalStyle';

import * as S from './styles';

export function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.DraggableTaskBar />

        <SearchInput handleSearch={handleSearch} />
      </S.Container>
    </>
  );
}
