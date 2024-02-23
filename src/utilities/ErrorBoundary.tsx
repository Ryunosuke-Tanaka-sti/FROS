import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { NetWorkError } from './Error/NetworkError';

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryComponent = (props: Props) => {
  const { children } = props;

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (error instanceof NetWorkError) return <div>ネットワークエラー</div>;
  return (
    <>
      <button className="" onClick={resetErrorBoundary}>
        リトライ
      </button>
    </>
  );
};
