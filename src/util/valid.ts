// export const formatPhoneNumber = (phoneNumber: string) => {
//   // 숫자만 남기고 나머지 문자 제거
//   const onlyPhoneNumber = phoneNumber.replace(/[^\d]/g, '');
//   // 핸드폰 번호의 유효성 검사
//   const isValidPhoneNumber = /^010\d{8}$/.test(onlyPhoneNumber);
//   console.log(onlyPhoneNumber, isValidPhoneNumber);

//   if (isValidPhoneNumber) {
//     // 010-xxxx-xxxx 형식으로 변환
//     const formattedPhoneNumber = onlyPhoneNumber.replace(
//       /(\d{3})(\d{4})(\d{4})/,
//       '$1-$2-$3'
//     );
//     return formattedPhoneNumber;
//   }
//   // 유효하지 않은 핸드폰 번호일 경우 처리
//   console.error('유효하지 않은 핸드폰 번호입니다.');
//   return phoneNumber;
// };

// const phoneNumberPattern =
//   /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

// export const isValidPhoneNumber = (phoneNumber: string) => {
//   if (phoneNumberPattern.test(phoneNumber) === false) {
//     return false;
//   }
//   return true;
// };

export const isValidPassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_=+\\|\[\]{};:'",.<>/?])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
