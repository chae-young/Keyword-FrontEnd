import React, { useEffect, useState } from 'react';
import useInput from '@/hooks/useInput';
import Input from '@/components/common/Input';
import TopTitle from '@/components/common/TopTitle';
import usePostLoginQuery from '@/hooks/query/auth/usePostLoginQuery';
import WideButton from '@/components/common/Button/WideButton';
import Logo from '@/components/common/Logo';

const LoginPage = () => {
  const [email, setEmail, handleChangeEmail] = useInput('');
  const [password, setPassword, handleChangePassword] = useInput('');
  const [allInputCheck, setAllInputCheck] = useState(false);

  const { loginIsMutate, loginIsError, loginIsSuccess } = usePostLoginQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    loginIsMutate({ email, password });
  };

  useEffect(() => {
    if (email && password) setAllInputCheck(true);
  }, [email, password]);

  return (
    <div className="mt-4">
      <TopTitle title="로그인" back />
      <form onSubmit={handleSubmit}>
        <Logo width={200} />
        <div className="mt-10">
          <Input
            type="email"
            value={email}
            handleChangeInput={handleChangeEmail}
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className="mt-3">
          <Input
            type="password"
            value={password}
            minLength={8}
            handleChangeInput={handleChangePassword}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <p className="text-red-400 text-body3 mt-2">
          {loginIsError && '아이디 또는 비밀번호가 일치하지 않습니다.'}
        </p>
        <WideButton text="시작하기" status={allInputCheck} />
      </form>
    </div>
  );
};

export default LoginPage;
