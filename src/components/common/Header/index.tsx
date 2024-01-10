import React from 'react';
import { Link } from 'react-router-dom';
import Alarm from '../Alarm';

const Header = () => (
  <div className="max-w-default h-[60px] flex justify-center items-center fixed left-0 top-0 right-0 m-auto w-full bg-white shadow-bottom">
    <h1>
      <Link to="/">
        <span className="sr-only">Keyword</span>
        <img src="/images/logo.svg" alt="keyword" className="w-32" />
      </Link>
    </h1>
    <Alarm />
  </div>
);

export default Header;
