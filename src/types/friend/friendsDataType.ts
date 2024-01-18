export type IsFriendType = 'FRIEND';
export type IsFriendRequestType = 'REQUEST';

export type NotFriendType = 'NOT_FRIEND';
export type FriendType = 'FRIEND';
export type FriendRequestType = 'FRIEND_REQUEST';
export type FriendRequestedType = 'FRIEND_REQUESTED';
export type MeType = 'ME';

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

export interface FriendAddType {
  isFriendRequest: boolean;
}

export interface FriendDeleteType {
  isFriendDelete: boolean;
}

export interface FriendReqType {
  friendState: string;
}
