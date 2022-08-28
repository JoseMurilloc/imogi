import { findByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastProvider } from '../../hooks/toast';
import { Emoji } from '../index';

describe('Toast Component', () => {
  it('should able to show a message when user click in a emoji', async () => {
    const user = userEvent.setup();
    const { getByTestId, findByTestId } = render(
      <ToastProvider>
        <Emoji codePoint="1F5A5 FE0F" />
      </ToastProvider>
    );
    const emojiComponent = getByTestId('emojiInput');

    await user.click(emojiComponent);

    const toastMessage = await findByTestId('toast');

    expect(toastMessage).toBeInTheDocument();
  });
});
