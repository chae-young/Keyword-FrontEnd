export interface ChatNewDataType {
  roomId: number;
  senderId: number;
  imageUrl: string;
  content: string[];
  sendAt: string;
  sender: string;
}

export interface ChatPrevDataType {
  sender: string;
  imageUrl: string;
  message: string;
}
export interface ChatListDataType {
  chatRoomId: number;
  scheduleTitle: string;
  friendsName: string[];
}
