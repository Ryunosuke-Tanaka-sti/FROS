import { Outlet } from 'react-router-dom';

import { AxiosConfig } from '@/utilities/AxiosConfig';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { FirebaseInit } from '@/utilities/FirebaseInit';
import { NetworkStatusConfig } from '@/utilities/NetworkStatusConfig';

export const ParentLayout = () => {
  return (
    <>
      <section>
        <main>
          <ErrorBoundaryComponent>
            <NetworkStatusConfig>
              <FirebaseInit>
                <AxiosConfig>
                  <Outlet />
                </AxiosConfig>
              </FirebaseInit>
            </NetworkStatusConfig>
          </ErrorBoundaryComponent>
        </main>
      </section>
    </>
  );
};
