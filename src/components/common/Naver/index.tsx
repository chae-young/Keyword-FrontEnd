import React from 'react';

const Naver = () => {
  const { VITE_SERVER } = import.meta.env;

  const NaverLogin = () => {
    window.location.href = `${VITE_SERVER}oauth2/authorization/naver`;
  };
  return (
    <button
      className="border border-gray2 text-body1 w-full h-[50px] rounded-xl flex justify-center items-center"
      type="button"
      onClick={NaverLogin}
    >
      네이버 로그인
    </button>
  );
};
export default Naver;
