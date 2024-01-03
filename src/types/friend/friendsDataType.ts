export type IsFriendType = 'FRIEND';
export type IsFriendRequestType = 'REQUESTING';
export interface FriendsDataType {
  memberId: number;
  name: string;
  email: string;
  profileImageUrl: string;
  status: IsFriendType | IsFriendRequestType;
}
