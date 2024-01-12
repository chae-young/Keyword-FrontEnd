import { atom } from 'recoil';
import {
  ScheduleCreateDataType,
  ScheduleTime
} from '@/types/schedule/scheduleDataType';

// 일정 추가에 필요한 데이터
export const scheduleCreateAtom = atom<ScheduleCreateDataType>({
  key: 'scheduleCreateAtom',
  default: {
    title: '',
    contents: '',
    scheduleDateTime: '',
    locationExplanation: '',
    latitude: '',
    longitude: '',
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
