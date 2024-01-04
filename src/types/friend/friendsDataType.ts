export type IsFriendType = 'FRIEND';
export type IsFriendRequestType = 'REQUEST';
export interface FriendsDataType {
  memberId: number;
  name: string;
  email: string;
  profileImageUrl: string;
  status: IsFriendType | IsFriendRequestType;
}

export interface FriendAddType {
  isFriendRequest: boolean;
}
