import { Outlet } from 'react-router-dom';

import { FooterComponent } from '@/components/modules/FooterComponent';
import { HeaderComponent } from '@/components/modules/HeaderComponent';
import { UtilitiesConfig } from '@/utilities/UtilitiesConfig';

export const ParentLayout = () => {
  return (
    <>
      <section>
        <HeaderComponent />
        <main>
          <UtilitiesConfig>
            <Outlet />
          </UtilitiesConfig>
        </main>
        <FooterComponent />
      </section>
    </>
  );
};
