import { FRIEND_REQUEST } from '../../constants/friends/index';

export interface AlarmDataType {
  noticeId: number;
  infoId: number;
  type: typeof FRIEND_REQUEST;
}
