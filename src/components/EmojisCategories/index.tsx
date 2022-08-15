import { useCallback, useEffect, useState } from 'react';

import { Emoji } from '../../services/emoji';
import { CategoryIcon } from '../CategoryIcon';

import * as S from './styles';

interface ICategory {
  slug: string;
}

export const EmojisCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([
    {
      slug: 'smileys-emotion',
    },
    {
      slug: 'people-body',
    },
    {
      slug: 'animals-nature',
    },
    {
      slug: 'food-drink',
    },
    {
      slug: 'component',
    },
    {
      slug: 'travel-places',
    },
    {
      slug: 'activities',
    },
    {
      slug: 'objects',
    },
    {
      slug: 'symbols',
    },
    {
      slug: 'flags',
    },
  ]);

  const getEmojiCategories = useCallback(async () => {
    const response = await Emoji.getCategories();

    if (!response.ok) {
      return;
    }

    setCategories(response.data);
  }, []);

  useEffect(() => {
    getEmojiCategories();
  }, [getEmojiCategories]);

  return (
    <S.Container>
      {categories.map(category => (
        <CategoryIcon key={category.slug} categorySlug={category.slug} />
      ))}
    </S.Container>
  );
};
