import { categoryMock } from '../../../tests/__mocks__/categoryMock';
import { emojiListMock } from '../../../tests/__mocks__/emojiListMock';
import { searchEmojiListMock } from '../../../tests/__mocks__/searchEmojiList';
import { Emoji } from '../../services/emoji';

jest.mock('../../services/emoji', () => {
  return {
    Emoji: {
      getEmojiFromCategory() {
        return {
          data: emojiListMock,
          ok: true,
        };
      },
      searchEmojis() {
        return {
          data: searchEmojiListMock,
          ok: true,
        };
      },
    },
  };
});

describe('EmojiList Page', () => {
  it('should able to load a list of emojis', async () => {
    const [category] = categoryMock;
    const response = await Emoji.getEmojiFromCategory(category.slug);

    expect(response.data).toEqual(emojiListMock);
  });

  it('should able to get a list of emojis from a search term', async () => {
    const response = await Emoji.searchEmojis('computer');

    expect(response.data).toEqual(searchEmojiListMock);
  });
});
