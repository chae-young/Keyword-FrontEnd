export interface ModalAcceptOrRejectType {
  memeberReqId: null | number;
  labelName: string;
  friendName: string;
}

export interface ResToMyFriendType extends ModalAcceptOrRejectType {
  friendStatus: string;
}
