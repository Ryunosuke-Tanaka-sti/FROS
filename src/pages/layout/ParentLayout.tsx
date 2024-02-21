import { Outlet } from 'react-router-dom';

import { AxiosConfig } from '@/utilities/AxiosConfig';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { FirebaseInit } from '@/utilities/FirebaseInit';
import { SWRConfigComponent } from '@/utilities/SwrConfig';

export const ParentLayout = () => {
  return (
    <>
      <section>
        <main>
          <ErrorBoundaryComponent>
            <FirebaseInit>
              <SWRConfigComponent>
                <AxiosConfig>
                  <Outlet />
                </AxiosConfig>
              </SWRConfigComponent>
            </FirebaseInit>
          </ErrorBoundaryComponent>
        </main>
      </section>
    </>
  );
};
