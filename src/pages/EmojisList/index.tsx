import { FormEvent, useCallback, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Emoji } from '../../services/emoji';
import { Emoji as EmojiComponent, SearchInput } from '../../components';

import * as S from './styles';

interface IEmoji {
  slug: string;
  codePoint: string;
  group: string;
}

export const EmojisList = () => {
  const [emojiList, setEmojiList] = useState<IEmoji[]>([]);
  const [filteredEmojiList, setFilteredEmojiList] = useState<IEmoji[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { categorySlug } = useParams();

  const getEmojiList = useCallback(async () => {
    const response = await Emoji.getEmojiFromCategory(
      categorySlug ?? 'smileys-emotion'
    );

    if (!response.ok) {
      return;
    }

    setEmojiList(response.data);
  }, [categorySlug]);

  const searchEmojis = useCallback(async (searchTerm: string) => {
    if (!searchTerm) {
      return;
    }

    const response = await Emoji.searchEmojis(searchTerm);

    if (!response.ok) {
      return;
    }

    setFilteredEmojiList(response.data);
  }, []);

  useEffect(() => {
    getEmojiList();
  }, [getEmojiList]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredEmojiList([]);
      return;
    }

    const delayInSearch = setTimeout(() => {
      searchEmojis(searchTerm);
    }, 800);

    return () => clearTimeout(delayInSearch);
  }, [searchEmojis, searchTerm]);

  return (
    <S.Container>
      <SearchInput
        onChange={event => setSearchTerm(event.target.value)}
        searchTerm={searchTerm}
        value={searchTerm}
      />

      <S.EmojisContainer>
        {searchTerm.length > 0
          ? filteredEmojiList.map(emoji => (
              <EmojiComponent key={emoji.slug} codePoint={emoji.codePoint} />
            ))
          : emojiList.map(emoji => (
              <EmojiComponent key={emoji.slug} codePoint={emoji.codePoint} />
            ))}
      </S.EmojisContainer>
    </S.Container>
  );
};
