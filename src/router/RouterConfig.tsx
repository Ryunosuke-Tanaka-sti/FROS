import { Outlet, Route, Routes } from 'react-router-dom';

import { SearchManagersPage } from '@/pages/SerchPage.tsx/SearchManagersPage';
import { SearchQualificationsPage } from '@/pages/SerchPage.tsx/SearchQualificationsPage';
import { SearchSkillsPage } from '@/pages/SerchPage.tsx/SearchSkillsPage';
import { TopPage } from '@/pages/TopPage';
import { UserMePage } from '@/pages/UserPage/UserMePage';
import { UserPage } from '@/pages/UserPage/UserPage';
import { UserRegistrationPage } from '@/pages/UserPage/UserRegistrationPage';
import { UtilitiesIndexPage } from '@/pages/UtilitiesPage/IndexPage';
import { ManagerIndexPage } from '@/pages/UtilitiesPage/Manager/ManagerIndex';
import { QuantificationIndexPage } from '@/pages/UtilitiesPage/Quantification/QuantificationIndex';
import { SLIndexPage } from '@/pages/UtilitiesPage/SL/SLIndex';
import { SkillIndexPage } from '@/pages/UtilitiesPage/Skill/SkillIndex';
import { ParentLayout } from '@/pages/layout/ParentLayout';
import { SearchLayout } from '@/pages/layout/SearchLayout';
import { UtilitiesLayout } from '@/pages/layout/UtilitiesLayout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<ParentLayout />}>
        <Route index element={<TopPage />} />
        <Route path="new" element={<UserRegistrationPage />} />
        <Route path="my-page" element={<Outlet />}>
          <Route index element={<UserMePage />} />
        </Route>
        <Route path="search" element={<SearchLayout />}>
          <Route index element={<SearchSkillsPage />} />
          <Route path="managers" element={<SearchManagersPage />} />
          <Route path="qualifications" element={<SearchQualificationsPage />} />
        </Route>
        <Route path="users/" element={<Outlet />}>
          <Route path=":userID" element={<UserPage />} />
        </Route>
        <Route path="utilities/" element={<UtilitiesLayout />}>
          <Route index element={<UtilitiesIndexPage />} />
          <Route path="sl" element={<SLIndexPage />} />
          <Route path="skills" element={<SkillIndexPage />} />
          <Route path="quantification" element={<QuantificationIndexPage />} />
          <Route path="manager" element={<ManagerIndexPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
