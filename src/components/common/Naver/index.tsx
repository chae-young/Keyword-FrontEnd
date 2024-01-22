import React from 'react';

const Naver = () => {
  const { VITE_NAVER_CLIENT_ID } = import.meta.env;
  const REDIRECT_URI = 'http://localhost:5173/login/oauth2/code/naver';
  const STATE = 'false';
  const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${VITE_NAVER_CLIENT_ID}&state=${STATE}_STRING&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URI;
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
