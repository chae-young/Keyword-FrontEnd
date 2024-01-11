import React from 'react';
import ScheduleInputBox from '../ScheduleInputBox';
import TimePicker from '@/components/common/DateTimePicker/Time';

const ScheduleTime = () => (
  <ScheduleInputBox title="시간" element={<TimePicker />} />
);

export default ScheduleTime;
