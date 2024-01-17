import {
  IsFriendRequestType,
  IsFriendType
} from '@/types/friend/friendsDataType';

// 친구 상태
export const IS_FRIEND: IsFriendType = 'FRIEND';
export const IS_FRIEND_REQUEST: IsFriendRequestType = 'REQUEST';

// 친구 요청 수락 거절
export const ACCEPTED = 'ACCEPTED';
export const REJECTED = 'REJECTED';
