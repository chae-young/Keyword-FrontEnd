import React from 'react';
import ScheduleInputBox from '../ScheduleInputBox';
import SearchPlace from '@/components/common/Map';

const ScheduleAddr = () => (
  <ScheduleInputBox title="주소" element={<SearchPlace />} />
);

export default ScheduleAddr;
