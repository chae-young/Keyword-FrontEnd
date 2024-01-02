import React from 'react';

interface LogoProps {
  width: number;
}
const Logo = ({ width }: LogoProps) => (
  <img
    src="/public/images/logo.svg"
    width={width}
    className="m-auto"
    alt="keyword"
  />
);

export default Logo;
