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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmojis = [];

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

  const searchEmojis = useCallback(async () => {
    // if (!searchTerm) {
    //   return;
    // }

    // const response = await Emoji.searchEmojis(searchTerm);

    // if (!response.ok) {
    //   return;
    // }

    console.log(searchTerm);
  }, []);

  useEffect(() => {
    getEmojiList();
  }, [getEmojiList]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();

        console.log(searchTerm);

        searchEmojis();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [searchEmojis]);

  return (
    <S.Container>
      <SearchInput
        onChange={event => setSearchTerm(event.target.value)}
        searchTerm={searchTerm}
        value={searchTerm}
      />

      <S.EmojisContainer>
        {emojiList.map(emoji => (
          <EmojiComponent key={emoji.slug} codePoint={emoji.codePoint} />
        ))}
      </S.EmojisContainer>
    </S.Container>
  );
};
