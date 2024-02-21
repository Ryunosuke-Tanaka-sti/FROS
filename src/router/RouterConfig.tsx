import { Route, Routes } from 'react-router-dom';

import { TopPage } from '@/pages/TopPage';
import { ParentLayout } from '@/pages/layout/ParentLayout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<ParentLayout />}>
        <Route index element={<TopPage />} />
      </Route>
    </Routes>
  );
};
