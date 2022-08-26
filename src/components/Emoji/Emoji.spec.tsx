import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Emoji from '.';

jest.mock('../../hooks/toast', () => {
  return {
    useToast() {
      return {
        showToast() {
          return jest.fn();
        },
      };
    },
  };
});

describe('Emoji Component', () => {
  it('should render a emoji from a codePoint', () => {
    const { getByTestId } = render(<Emoji codePoint="1F5A5 FE0F" />);
    const emojiComponent = getByTestId('emojiInput');

    expect(emojiComponent).toHaveAttribute('value', '🖥');
  });

  it('should able to copy a emoji to a clipboard', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<Emoji codePoint="1F5A5 FE0F" />);
    const emojiComponent = getByTestId('emojiInput');

    await user.click(emojiComponent);

    const clipboardContent = await navigator.clipboard.readText();

    expect(clipboardContent).toBe('🖥');
  });
});
