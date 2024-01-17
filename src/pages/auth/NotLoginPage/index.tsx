import React from 'react';
import { Link } from 'react-router-dom';

const NotLoginPage = () => (
  <section className="max-w-default m-auto h-screen px-5 pt-10">
    <h1>
      <img src="/images/logo.svg" alt="keyword" className="w-80 m-auto" />
    </h1>

    <p className="text-center mt-4">
      간편하게 로그인 하고 <br />
      다양한 서비스를 이용하세요.
    </p>
    <div className="max-w-default absolute left-0 right-0 bottom-36 m-auto px-5">
      <Link
        to="/auth/login"
        className="border border-gray2 text-body1 w-full h-[50px] rounded-xl flex justify-center items-center"
      >
        이메일 로그인
      </Link>
    </div>
    <p className="text-center text-body3 absolute bottom-10 left-0 right-0 m-auto">
      계정이 없으신가요?{' '}
      <Link to="/auth/join">
        <b>회원가입</b>
      </Link>
    </p>
  </section>
);
export default NotLoginPage;
