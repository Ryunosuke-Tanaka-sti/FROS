import { Outlet, Route, Routes } from 'react-router-dom';


export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="page1" element={<div>Page 1</div>} />
        <Route path="page2" element={<div>Page 2</div>} />
      </Route>
    </Routes>
  );
};
