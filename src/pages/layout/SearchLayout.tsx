import { Children } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { MenuItem } from '@/components/common/MenuItem/MenuItem';

type SearchMenuProps = {
  children: React.ReactNode;
};

const SearchMenu = ({ children }: SearchMenuProps) => {
  return (
    <ul className="flex w-32 flex-row gap-2 ">
      {Children.map(children, (child) => {
        return <>{child}</>;
      })}
    </ul>
  );
};

export const SearchLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  type childPageType = '/search' | '/search/managers' | '/search/qualifications';
  const clickChildNavigate = (childPage: childPageType) => {
    navigate(`${childPage}`);
  };
  return (
    <>
      <section className="flex flex-col">
        <SearchMenu>
          <MenuItem
            onClick={() => clickChildNavigate('/search')}
            active={pathname == '/search'}
            text="skills"
          />
          <MenuItem
            onClick={() => clickChildNavigate('/search/managers')}
            active={pathname.includes('managers')}
            text="managers"
          />
          <MenuItem
            onClick={() => clickChildNavigate('/search/qualifications')}
            active={pathname.includes('qualifications')}
            text="qualifications"
          />
        </SearchMenu>
        <Outlet />
      </section>
    </>
  );
};
