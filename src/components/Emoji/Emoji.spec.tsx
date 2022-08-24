import { render } from '@testing-library/react';
import Emoji from '.';
import { SearchInput } from '../SearchInput';

describe('Emoji Component', () => {
  it('should render a emoji from a codePoint', () => {
    const { getByTestId } = render(<Emoji codePoint="1F5A5 FE0F" />);
    const emojiComponent = getByTestId('emojiInput');

    expect(emojiComponent).toHaveAttribute('value', '🖥');
  });

  it('should able to copy a emoji to a clipboard', () => {
    const { getByTestId } = render(<SearchInput searchTerm="fake-term" />);
  });
});
