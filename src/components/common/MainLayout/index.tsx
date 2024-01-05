import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

const MainLayout = () => (
  <>
    <Outlet />
    <Nav />
  </>
);

export default MainLayout;
