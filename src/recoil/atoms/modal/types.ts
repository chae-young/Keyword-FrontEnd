export interface ModalAcceptOrRejectType {
  memeberReqId: null | number;
  labelName: string;
  friendName: string;
}

export interface ResToMyFriendType extends ModalAcceptOrRejectType {
  friendState: string;
}
