import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/modules/Footer/Footer';
import { Header } from '@/components/modules/Header/Header';
import { UtilitiesConfig } from '@/utilities/UtilitiesConfig';

export const ParentLayout = () => {
  return (
    <>
      <section className="flex min-h-screen flex-col">
        <Header />
        <main className="flex grow flex-col">
          <UtilitiesConfig>
            <Outlet />
          </UtilitiesConfig>
        </main>
        <Footer />
      </section>
    </>
  );
};
