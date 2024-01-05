import React from 'react';
import { Outlet } from 'react-router-dom';

const InnerCon = () => (
  <section className="max-w-default m-auto px-5 pt-[60px]">
    <Outlet />
  </section>
);

export default InnerCon;
