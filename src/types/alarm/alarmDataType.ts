import {
  FRIEND_REQUEST,
  SCHEDULE_CALCEL,
  SCHEDULE_REMIND
} from '@/constants/alarm';

export interface AlarmDataType {
  noticeId: number;
  infoId: number;
  scheduleId?: number;
  type: typeof FRIEND_REQUEST | typeof SCHEDULE_CALCEL | typeof SCHEDULE_REMIND;
}
