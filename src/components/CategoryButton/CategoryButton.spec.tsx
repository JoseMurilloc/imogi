import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { CategoryButton } from '.';

import { categoryMock } from '../../../tests/__mocks__/categoryMock';

describe('CategoryButton Component', () => {
  it('should render a correctly icon', async () => {
    const [category] = categoryMock;

    const { getByTestId } = render(
      <CategoryButton categorySlug={category.slug} />,
      {
        wrapper: MemoryRouter,
      }
    );

    const CategoryButtonIcon = getByTestId('categoryIcon');

    expect(CategoryButtonIcon).toHaveAttribute('id', category.slug);
  });
});
