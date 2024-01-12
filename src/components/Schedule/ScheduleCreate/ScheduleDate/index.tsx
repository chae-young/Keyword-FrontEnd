import React from 'react';
import ScheduleInputBox from '../ScheduleInputBox';
import Input from '@/components/common/Input';
import useInput from '@/hooks/useInput';
import SelectDate from '@/components/common/DateTimePicker/Date';

const ScheduleDate = () => (
  <ScheduleInputBox title="날짜" element={<SelectDate />} />
);
export default ScheduleDate;
