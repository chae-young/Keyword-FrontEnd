import { Outlet } from 'react-router-dom';

const InnerCon = () => (
  <section className="max-w-default m-auto px-5 pt-20 pb-16 min-h-screen bg-white">
    <Outlet />
  </section>
);

export default InnerCon;
