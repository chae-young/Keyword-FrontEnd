import { atom } from 'recoil';
import {
  ScheduleDetailType,
  ScheduleTime
} from '@/types/schedule/scheduleDataType';

// 일정 추가에 필요한 데이터
export const scheduleCreateAtom = atom<ScheduleDetailType>({
  key: 'scheduleCreateAtom',
  default: {
    title: '',
    contents: '',
    scheduleDateTime: '',
    locationExplanation: '',
    latitude: 0,
    longitude: 0,
    remindDateTime: '',
    friendList: []
  }
});

export const scheduleTime = atom<ScheduleTime>({
  key: 'scheduleTime',
  default: {
    date: '',
    time: ''
  }
});
