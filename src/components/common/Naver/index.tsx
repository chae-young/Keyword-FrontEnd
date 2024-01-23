const Naver = () => {
  const { VITE_SERVER } = import.meta.env;

  const NaverLogin = () => {
    window.location.href = `${VITE_SERVER}/oauth2/authorization/naver`;
  };
  return (
    <button
      className="relative text-body1 w-full h-[50px] rounded-xl flex justify-center items-center bg-[#05BB22] text-white"
      type="button"
      onClick={NaverLogin}
    >
      <i className="bg-ico-naver w-4 h-4 absolute left-6 bg-cover" />
      네이버 로그인
    </button>
  );
};
export default Naver;
