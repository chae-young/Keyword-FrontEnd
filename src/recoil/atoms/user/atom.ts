import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserInfo } from '@/types/auth/authDataType';

const { persistAtom } = recoilPersist({
  key: 'localStorage', // 고유한 key 값
  storage: localStorage
});

export const userAtom = atom<UserInfo>({
  key: 'userAtom',
  default: {
    name: '',
    email: '',
    phone: '',
    imageUrl: null,
    isLogin: false
  },
  effects_UNSTABLE: [persistAtom]
});

export const test = '';
