import { FriendsDataType } from '../friend/friendsDataType';

export interface ScheduleDataType {
  scheduleId: number;
  title: string;
  scheduleDateTime: string;
  locationExplanation: string;
  status: string;
}

export interface ScheduleDetailType {
  title: string;
  contents: string;
  scheduleDateTime: string;
  locationExplanation: string;
  latitude: number;
  longitude: number;
  status: string;
  remindDateTime: string;
  friendList: FriendsDataType[];
}

export interface ScheduleDetailIdType {
  scheduleId: string;
  noticeId: string;
}

export interface ScheduleDeleteType {
  isScheduleDelete: boolean;
}
