import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { Toast } from '../components';

interface IToastProvider {
  children: ReactNode;
}

interface IToastContext {
  showToast: (message: string) => void;
  setShouldRenderToast: (shouldRenderToast: boolean) => void;
}

const ToastContext = createContext({} as IToastContext);

const ToastProvider = ({ children }: IToastProvider) => {
  const [shouldRenderToast, setShouldRenderToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = useCallback(message => {
    setShouldRenderToast(true);
    setToastMessage(message);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, setShouldRenderToast }}>
      {shouldRenderToast && <Toast message={toastMessage} />}
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  return useContext(ToastContext);
};

export { ToastProvider, useToast };
