export interface ChatDataType {
  chatRoomId: number;
  senderId: number;
  message: string;
  sendAt: string;
}

export interface ChatListDataType {
  chatRoomId: number;
  scheduleTitle: string;
  friendsName: string[];
}
