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
  status?: string;
  remindAt: number;
  scheduleFriendList: FriendsDataType[];
}

export type ScheduleTime = {
  date: string;
  time: string;
};

export interface ScheduleDetailIdType {
  scheduleId: string;
  noticeId: string;
}

export interface ScheduleDeleteType {
  isScheduleDelete: boolean;
}

export interface ScheduleDataIdType {
  scheduleId: number;
}
