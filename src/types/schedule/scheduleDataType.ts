import {
  SCHEDULE_DELETE,
  SCHEDULE_ONGOING,
  SCHEDULE_END
} from '@/constants/schedule';
import { FriendsDataType } from '../friend/friendsDataType';

export interface ScheduleDataType {
  scheduleId: number;
  title: string;
  scheduleDateTime: string;
  locationExplanation: string;
  status: string;
}
export interface ScheduleDetailType {
  organizerId?: number;
  title: string;
  contents: string;
  scheduleAt: string;
  locationExplanation: string;
  latitude: number;
  longitude: number;
  status?:
    | typeof SCHEDULE_ONGOING
    | typeof SCHEDULE_DELETE
    | typeof SCHEDULE_END;
  remindAt: number;
  scheduleFriendList: FriendsDataType[];
}

export type ScheduleTime = {
  date: string;
  time: string;
};

export interface ScheduleDetailIdType {
  scheduleId: number;
  noticeId: number;
}

export interface ScheduleDeleteType {
  isScheduleDelete: boolean;
}

export interface ScheduleDataIdType {
  scheduleId: number;
}
