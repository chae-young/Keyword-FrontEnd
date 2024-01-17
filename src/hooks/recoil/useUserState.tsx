import { useRecoilState } from 'recoil';
import { userAtom } from '@/recoil/atoms/user/atom';
import { UserInfo } from '@/types/auth/authDataType';

const useUserState = () => {
  const [userState, setUserState] = useRecoilState(userAtom);

  const saveUserInfo = (userInfo: UserInfo) => {
    setUserState(prevState => ({
      ...prevState,
      myInfoResponse: { ...userInfo }
    }));
  };

  return {
    userState,
    setUserState,
    saveUserInfo
  };
};

export default useUserState;
