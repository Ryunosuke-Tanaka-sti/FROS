import { useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { NetWorkError } from './Error/NetworkError';

type Props = {
  children: React.ReactNode;
};

export const NetworkStatusConfig = (props: Props) => {
  const { children } = props;
  const { showBoundary } = useErrorBoundary();
  const throwNetworkError = () => {
    showBoundary(new NetWorkError());
  };

  useEffect(() => {
    window.addEventListener('offline', throwNetworkError);
    return () => {
      window.removeEventListener('offline', throwNetworkError);
    };
  });

  return <>{children}</>;
};
