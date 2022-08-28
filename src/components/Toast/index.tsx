import { useEffect } from 'react';
import { useToast } from '../../hooks/toast';

import * as S from './styles';

interface IToastProps {
  message: string;
}

export const Toast = ({ message }: IToastProps) => {
  const { setShouldRenderToast } = useToast();

  useEffect(() => {
    const timeToDisplayToast = setInterval(() => {
      setShouldRenderToast(false);
    }, 1000);

    return () => clearTimeout(timeToDisplayToast);
  }, []);

  return (
    <S.Container data-testid="toast">
      <span>{message}</span>
    </S.Container>
  );
};
