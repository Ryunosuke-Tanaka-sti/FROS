import { Outlet, useNavigate } from 'react-router-dom';

export const UtilitiesLayout = () => {
  const navigate = useNavigate();
  type childPageType = 'skills' | 'sl' | 'quantification' | 'manager' | '/utilities';
  const clickChildNavigate = (childPage: childPageType) => {
    navigate(`${childPage}`);
  };
  return (
    <>
      <section>
        <ul>
          <li onClick={() => clickChildNavigate('/utilities')}>top</li>
          <li onClick={() => clickChildNavigate('skills')}>skills</li>
          <li onClick={() => clickChildNavigate('sl')}>sl</li>
          <li onClick={() => clickChildNavigate('quantification')}>qualification</li>
          <li onClick={() => clickChildNavigate('manager')}>manager</li>
        </ul>
        <Outlet />
      </section>
    </>
  );
};
