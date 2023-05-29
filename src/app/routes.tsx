import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Layout = lazy(() => import('../app/components/Layout'));
const Home = lazy(() => import('./pages'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/dashboard" element={<Home />} />
        {/* <Route path="/my-account" element={<MyAccount />} /> */}
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
