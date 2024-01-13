import React, { useEffect, useState } from 'react';
import usePatchMyPasswordQuery from '@/hooks/query/user/usePatchMyPasswordQuery';
import TopTitle from '@/components/common/TopTitle';
import Input from '@/components/common/Input';
import useInput from '@/hooks/useInput';
import WideButton from '@/components/common/Button/WideButton';
import { VaildType } from '@/types/auth/authDataType';
import { isValidPassword } from '@/util/valid';

const MyPasswordUpdate = () => {
  const validObj = {
    status: false,
    text: ''
  };
  const [newPassword, setNewPassword, handleChangeInput] = useInput('');
  const { MyPasswordUpdateIsMutate } = usePatchMyPasswordQuery();
  const [passwordCheck, setPasswordCheck] = useState<VaildType>(validObj);

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    MyPasswordUpdateIsMutate(newPassword);
    setNewPassword('');
  };

  // 비밀번호 유효성 검사
  useEffect(() => {
    console.log(newPassword);
    if (!newPassword) return;
    if (isValidPassword(newPassword)) {
      setPasswordCheck({
        status: true,
        text: '올바른 비밀번호 입니다.'
      });
    } else {
      setPasswordCheck({
        status: false,
        text: '올바른 비밀번호 형식이 아닙니다.'
      });
    }
  }, [newPassword]);

  return (
    <form onSubmit={handlePasswordUpdate}>
      <TopTitle title="비밀번호 변경" back />
      <Input
        type="password"
        value={newPassword}
        handleChangeInput={handleChangeInput}
      />
      <p className="text-body3 mt-1 text-gray4">
        *영문자+특수문자+숫자를 포함하여 8자 이상 16이하로 입력해주세요
      </p>
      <p
        className={`text-body2 ${
          passwordCheck.status ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {' '}
        {passwordCheck.text}
      </p>

      <WideButton text="변경하기" status={passwordCheck.status} />
    </form>
  );
};

export default MyPasswordUpdate;
