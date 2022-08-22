import { useCallback, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Emoji } from '../../services/emoji';
import { Emoji as EmojiComponent, SearchInput } from '../../components';

import loadingAnimation from '../../lotties/loading.json';
import Lottie from 'react-lottie';

import * as S from './styles';

interface IEmoji {
  slug: string;
  codePoint: string;
  group: string;
}

type TPageStatus = 'idle' | 'loading' | 'resolved' | 'error';

export const EmojisList = () => {
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const [emojiList, setEmojiList] = useState<IEmoji[]>([]);
  const [filteredEmojiList, setFilteredEmojiList] = useState<IEmoji[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { categorySlug } = useParams();

  const getEmojiList = useCallback(async () => {
    setPageStatus('loading');

    const response = await Emoji.getEmojiFromCategory(
      categorySlug ?? 'smileys-emotion'
    );

    if (!response.ok) {
      setPageStatus('error');
      return;
    }

    setEmojiList(response.data);
    setPageStatus('resolved');
  }, [categorySlug]);

  const searchEmojis = useCallback(async (searchTerm: string) => {
    setPageStatus('loading');
    if (!searchTerm) {
      return;
    }

    const response = await Emoji.searchEmojis(searchTerm);

    if (!response.ok) {
      setPageStatus('error');
      return;
    }

    setFilteredEmojiList(response.data);
    setPageStatus('resolved');
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

      {pageStatus === 'loading' && (
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: loadingAnimation,
            }}
            width={80}
            height={80}
          />
        </div>
      )}

      {pageStatus === 'resolved' && (
        <S.EmojisContainer>
          {searchTerm.length > 0 ? (
            <ul>
              {filteredEmojiList?.map(emoji => (
                <li key={emoji.slug}>
                  <EmojiComponent codePoint={emoji.codePoint} />
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {emojiList.map(emoji => (
                <li key={emoji.slug}>
                  <EmojiComponent codePoint={emoji.codePoint} />
                </li>
              ))}
            </ul>
          )}
        </S.EmojisContainer>
      )}

      {pageStatus === 'error' && (
        <S.ErrorContainer>
          <span>😔 Failed to load, you can try again later!</span>
        </S.ErrorContainer>
      )}
    </S.Container>
  );
};
