import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserInfo } from '@/types/auth/authDataType';
import { USER_INFO } from '@/constants/auth';

const { persistAtom } = recoilPersist({
  key: USER_INFO, // 고유한 key 값
  storage: localStorage
});

export const userAtom = atom<UserInfo>({
  key: 'userAtom',
  default: {
    memberId: 0,
    name: '',
    email: '',
    phone: '',
    imageUrl: null,
    isLogin: false
  },
  effects_UNSTABLE: [persistAtom]
});

export const test = '';
