import { Outlet } from 'react-router-dom';

import { UtilitiesConfig } from '@/utilities/UtilitiesConfig';

export const ParentLayout = () => {
  return (
    <>
      <section>
        <main>
          <UtilitiesConfig>
            <Outlet />
          </UtilitiesConfig>
        </main>
      </section>
    </>
  );
};
