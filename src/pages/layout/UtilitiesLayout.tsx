import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { MenuItem } from '@/components/common/MenuItem/MenuItem';
import { UtilityMenu } from '@/components/modules/UtilityMenu/UtilityMenu';

export const UtilitiesLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  type childPageType = 'skills' | 'sl' | 'quantification' | 'manager' | '/utilities';
  const clickChildNavigate = (childPage: childPageType) => {
    navigate(`${childPage}`);
  };
  return (
    <>
      <section className="flex flex-row">
        <UtilityMenu>
          <MenuItem
            text="top"
            onClick={() => clickChildNavigate('/utilities')}
            active={pathname == '/utilities'}
          />
          <MenuItem
            text="skills"
            onClick={() => clickChildNavigate('skills')}
            active={pathname.includes('skills')}
          />
          <MenuItem
            text="sl"
            onClick={() => clickChildNavigate('sl')}
            active={pathname.includes('sl')}
          />
          <MenuItem
            text="qualification"
            onClick={() => clickChildNavigate('quantification')}
            active={pathname.includes('qualification')}
          />
          <MenuItem
            text="manager"
            onClick={() => clickChildNavigate('manager')}
            active={pathname.includes('manager')}
          />
        </UtilityMenu>
        <Outlet />
      </section>
    </>
  );
};
