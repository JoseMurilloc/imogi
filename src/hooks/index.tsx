import { ReactNode } from 'react';
import { ToastProvider } from './toast';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return <ToastProvider>{children}</ToastProvider>;
};
