import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
