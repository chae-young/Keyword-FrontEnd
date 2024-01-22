import {
  FRIEND,
  FRIEND_REQUEST,
  FRIEND_REQUESTED,
  ME,
  NOT_FRIEND,
  REQUEST
} from '../../constants/friends/index';

export type IsFriendType = typeof FRIEND;
export type IsFriendRequestType = typeof REQUEST;

export type NotFriendType = typeof NOT_FRIEND;
export type FriendType = typeof FRIEND;
export type FriendRequestType = typeof FRIEND_REQUEST;
export type FriendRequestedType = typeof FRIEND_REQUESTED;
export type MeType = typeof ME;

export interface FriendsDataType {
  memberId: number;
  name: string;
  email: string;
  imageUrl: string;
  status?:
    | NotFriendType
    | FriendType
    | FriendRequestType
    | FriendRequestedType
    | MeType;
}

export interface FriendDeleteType {
  isFriendDelete: boolean;
}

export interface FriendReqType {
  friendStatus: string;
}
