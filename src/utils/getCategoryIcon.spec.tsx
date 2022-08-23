import { getCategoryIcon } from './getCategoryIcon';
import { categoryMock } from '../../tests/__mocks__/categoryMock';
import { iconsMock } from '../../tests/__mocks__/categoryIconMock';

describe('getCategoryIcon function', () => {
  it('should return a correctly icon from a slug', () => {
    const [category] = categoryMock;
    const activeIcon = getCategoryIcon(category.slug, '#a026eb');
    const disabledIcon = getCategoryIcon(category.slug, '#515156');

    expect(activeIcon).toEqual(iconsMock.active);
    expect(disabledIcon).toEqual(iconsMock.disabled);
  });
});
