import { atom } from 'recoil';
import { ModalAcceptOrRejectType } from './types';
import { FriendsDataType } from '@/types/friend/friendsDataType';

// basic 모달
export const modalAtom = atom({
  key: 'modalAtom',
  default: ''
});
// 모달: 친구 요청 수락 거절
export const modalAcceptOrRejectAtom = atom<ModalAcceptOrRejectType>({
  key: 'modalAcceptOrRejectAtom',
  default: {
    memeberReqId: null,
    labelName: '',
    friendName: ''
  }
});

// 모달: 내 친구 목록
export const modalMySelectedFriendsAtom = atom<FriendsDataType[]>({
  key: 'modalAcceptOrRejectAtom',
  default: []
});
