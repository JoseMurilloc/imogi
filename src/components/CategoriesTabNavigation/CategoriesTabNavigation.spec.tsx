import { categoryMock } from '../../../tests/__mocks__/categoryMock';
import { Emoji } from '../../services/emoji';

jest.mock('../../services/emoji', () => {
  return {
    Emoji: {
      getCategories() {
        return {
          data: categoryMock,
          ok: true,
        };
      },
    },
  };
});

describe('CategoriesTabNavigation Component', () => {
  it('should able to get a emojis categories', async () => {
    const response = await Emoji.getCategories();
    expect(response.data).toEqual(categoryMock);
  });
});
