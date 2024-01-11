import React from 'react';
import ScheduleInputBox from '../ScheduleInputBox';
import SelectRemind from '@/components/common/Select/SelectOption';

const ScheduleRemind = () => (
  <ScheduleInputBox title="알림" element={<SelectRemind />} />
);

export default ScheduleRemind;
