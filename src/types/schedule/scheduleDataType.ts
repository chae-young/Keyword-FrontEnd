import { FriendsDataType } from '../friend/friendsDataType';

export interface ScheduleDataType {
  scheduleId: number;
  title: string;
  scheduleDateTime: string;
  locationExplanation: string;
  status: string;
}
export interface ScheduleCreateDataType {
  title: string;
  contents: string;
  scheduleDateTime: string;
  locationExplanation: string;
  latitude: string;
  longitude: string;
  remindDateTime: string;
  friendList: FriendsDataType[];
}

export type ScheduleTime = {
  date: string;
  time: string;
};
