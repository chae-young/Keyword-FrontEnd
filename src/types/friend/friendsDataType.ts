export type IsFriendType = 'FRIEND';
export type IsFriendRequestType = 'REQUEST';
export interface FriendsDataType {
  memberId: number;
  name: string;
  email: string;
  imageUrl: string;
  status?: IsFriendType | IsFriendRequestType;
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
