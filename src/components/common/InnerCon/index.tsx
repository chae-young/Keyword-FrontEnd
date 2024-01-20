import { Outlet } from 'react-router-dom';

const InnerCon = () => (
  <section className="max-w-default m-auto px-5 pt-20 pb-16 h-screen">
    <Outlet />
  </section>
);

export default InnerCon;
