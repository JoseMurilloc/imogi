import { MouseEvent, memo } from 'react';

import { useToast } from '../../hooks/toast';

import * as S from './styles';

interface IEmojiProps {
  codePoint: string;
}

const Emoji = ({ codePoint }: IEmojiProps) => {
  const { showToast } = useToast();

  const handleCopyEmojiToClipBoard = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLInputElement;
    navigator.clipboard.writeText(target.value);

    showToast('Copied!');
  };

  return (
    <S.Container
      onClick={handleCopyEmojiToClipBoard}
      type="button"
      value={String.fromCodePoint(parseInt(codePoint, 16))}
      data-testid="emojiInput"
    />
  );
};

export default memo(Emoji);
