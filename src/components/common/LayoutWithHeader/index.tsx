import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Nav from '../Nav';

const LayoutWithHeader = () => (
  <>
    <Header />
    <Outlet />
    <Nav />
  </>
);

export default LayoutWithHeader;
