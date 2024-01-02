import React, { useEffect, useRef, useState } from 'react';
import TopTitle from '@/components/common/TopTitle';
import Logo from '@/components/common/Logo';
import Input from '@/components/common/Input';
import useInput from '@/hooks/useInput';
import WideButton from '@/components/common/Button/WideButton';
import { VaildType } from '@/types/auth/authDataType';
import { isValidEmail, isValidPassword } from '@/util/valid';
import usePostJoinQuery from '@/hooks/query/auth/usePostJoinQuery';
import Success from '@/components/common/Toast/ToastSuccess';
import useRedirectAfterToast from '@/hooks/useRedirectAfterToast';

const JoinPage = () => {
  const [email, setEmail, handleChangeEmail] = useInput('');
  const [password, setPassword, handleChangePassword] = useInput('');
  const [confirmPassword, setConfirmPassword, handleChangeConfirmPassword] =
    useInput('');
  const [nickname, setNickname, handleChangeNickname] = useInput('');
  const [phoneNumber, setPhoneNumber, handleChangePhoneNumber] = useInput('');
  const [allInputCheck, setAllInputCheck] = useState(false);

  const validObj = {
    status: false,
    text: ''
  };
  const [emailCheck, setEmailCheck] = useState<VaildType>(validObj);
  const [phoneNumberCheck, setPhoneNumberCheck] = useState<VaildType>(validObj);
  const [passwordCheck, setPasswordCheck] = useState<VaildType>(validObj);
  const [confirmPasswordCheck, setConfirmPasswordCheck] =
    useState<VaildType>(validObj);

  const { joinIsMutate, joinIsSuccess } = usePostJoinQuery();
  const redirect = useRedirectAfterToast(joinIsSuccess, '/auth/login');

  // 이메일 유효성 검사
  useEffect(() => {
    if (!email) return;
    if (isValidEmail(email)) {
      setEmailCheck({ status: true, text: '올바른 이메일 형식입니다.' });
    } else {
      setEmailCheck({ status: false, text: '올바른 이메일 형식이 아닙니다.' });
    }
  }, [email]);

  // 핸드폰번호 유효성 검사
  useEffect(() => {
    if (!phoneNumber) return;
    if (phoneNumber.length === 10) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      setPhoneNumberCheck({
        status: true,
        text: '올바른 전화번호 입니다.'
      });
    } else if (phoneNumber.length === 13) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
      setPhoneNumberCheck({
        status: true,
        text: '올바른 전화번호 입니다.'
      });
    } else {
      setPhoneNumberCheck({
        status: false,
        text: '올바른 전화번호를 입력해주세요.'
      });
    }
  }, [phoneNumber]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    if (!password) return;
    if (isValidPassword(password)) {
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
  }, [password]);

  // 비밀번호 재확인
  useEffect(() => {
    if (!confirmPassword) return;
    if (confirmPassword === password) {
      setConfirmPasswordCheck({
        status: true,
        text: '비밀번호가 일치합니다.'
      });
    } else {
      setConfirmPasswordCheck({
        status: false,
        text: '비밀번호가 일치하지 않습니다.'
      });
    }
  }, [confirmPassword]);

  // 전체 폼 입력 확인
  useEffect(() => {
    if (
      emailCheck.status &&
      phoneNumberCheck.status &&
      passwordCheck.status &&
      confirmPasswordCheck.status &&
      nickname.length > 1
    ) {
      setAllInputCheck(true);
    }
  }, [
    emailCheck.status,
    phoneNumberCheck.status,
    passwordCheck.status,
    confirmPasswordCheck.status,
    nickname.length
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('가입하기');

    joinIsMutate({ email, password, name: nickname, phone: phoneNumber });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Logo width={150} />
        <TopTitle title="회원가입" back />
        <div className="mt-6">
          <div>
            <Input
              type="email"
              value={email}
              handleChangeInput={handleChangeEmail}
              placeholder="이메일을 입력해주세요"
            />
            <p
              className={`text-body2 ${
                emailCheck.status ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {emailCheck.text}
            </p>
          </div>
          <div className="mt-3">
            <Input
              type="text"
              value={nickname}
              handleChangeInput={handleChangeNickname}
              placeholder="닉네임을 입력해주세요"
            />
          </div>
          <div className="mt-3">
            <Input
              type="text"
              value={phoneNumber}
              handleChangeInput={handleChangePhoneNumber}
              placeholder="핸드폰번호를 입력해주세요"
            />
            {/* <p className="text-stone-300 text-body3 mt-1">
              * ‘-’ 문자를 넣어 숫자를 입력해주세요(예: 010-3333-3333)
            </p> */}
            <p
              className={`text-body2 ${
                phoneNumberCheck.status ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {phoneNumberCheck.text}
            </p>
          </div>
          <div className="mt-3">
            <Input
              type="password"
              value={password}
              handleChangeInput={handleChangePassword}
              placeholder="비밀번호를 입력해주세요"
            />
            <p className="text-stone-300 text-body3 mt-1">
              * 영문자+특수문자+숫자를 포함하여 8자 이상 입력해주세요
            </p>
            <p
              className={`text-body2 ${
                passwordCheck.status ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {passwordCheck.text}
            </p>
          </div>
          <div className="mt-3">
            <Input
              type="password"
              value={confirmPassword}
              handleChangeInput={handleChangeConfirmPassword}
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <p
              className={`text-body2 ${
                confirmPasswordCheck.status ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {confirmPasswordCheck.text}
            </p>
          </div>
          <WideButton status={allInputCheck} text="가입하기" />
        </div>
      </form>

      <Success status={joinIsSuccess} text="회원가입이 완료되었습니다!" />
    </>
  );
};
export default JoinPage;
