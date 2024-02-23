import { AxiosConfig } from './AxiosConfig';
import { ErrorBoundaryComponent } from './ErrorBoundary';
import { FirebaseInit } from './FirebaseInit';
import { NetworkStatusConfig } from './NetworkStatusConfig';

type Props = {
  children: React.ReactNode;
};

export const UtilitiesConfig = (props: Props) => {
  const { children } = props;
  return (
    <>
      <ErrorBoundaryComponent>
        <NetworkStatusConfig>
          <FirebaseInit>
            <AxiosConfig>{children}</AxiosConfig>
          </FirebaseInit>
        </NetworkStatusConfig>
      </ErrorBoundaryComponent>
    </>
  );
};
