import {
  SCHEDULE_DELETE,
  SCHEDULE_END,
  SCHEDULE_ONGOING
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
    | typeof SCHEDULE_END
    | typeof SCHEDULE_DELETE
    | typeof SCHEDULE_ONGOING;
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

export interface ScheduleEditDataType {
  schedule: ScheduleDetailType;
  scheduleId: number;
}
