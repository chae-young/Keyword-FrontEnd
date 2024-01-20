import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_INFO } from '@/constants/auth';
import { removeCookie } from '@/util/cookie';
import useDeleteAccountQuery from '@/hooks/query/user/useDeleteAccountQuery';
import useUserState from '@/hooks/recoil/useUserState';

const AccountClose = () => {
  const navigate = useNavigate();
  const { AccountDeleteIsMutate } = useDeleteAccountQuery();
  const { userState } = useUserState();
  const handleLogOut = () => {
    const isConfirmed = window.confirm('로그아웃 하시겠어요?');
    if (isConfirmed) {
      // 토큰 삭제
      navigate('/auth', { replace: true });
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(USER_INFO);
      removeCookie(REFRESH_TOKEN);
    }
  };

  const handleAccountDelete = () => {
    const isConfirmed = window.confirm('정말 회원 탈퇴를 하시겠어요?');
    if (isConfirmed) {
      AccountDeleteIsMutate(userState.email);
    }
  };

  return (
    <div className="absolute bottom-24 left-0 m-auto right-0 text-center ">
      <button
        type="button"
        className="text-body3 text-gray3 pr-1"
        onClick={handleLogOut}
      >
        로그아웃 |
      </button>
      <button
        type="button"
        className="text-body3 text-gray3"
        onClick={handleAccountDelete}
      >
        회원탈퇴
      </button>
    </div>
  );
};

export default AccountClose;
