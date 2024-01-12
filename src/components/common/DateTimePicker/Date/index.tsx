import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { ScheduleTime } from '@/types/schedule/scheduleDataType';

import 'react-datepicker/dist/react-datepicker.css';
import useScheduleState from '@/hooks/recoil/useScheduleState';

interface SelectDateProps {}

const SelectDate = ({}: SelectDateProps) => {
  const { setScheduleTimeState } = useScheduleState();
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleDate = (date: Date) => {
    setStartDate(date);
    const newDate = moment(date).format('YYYY-MM-DD');
    setScheduleTimeState((prevState: ScheduleTime) => ({
      ...prevState,
      date: newDate
    }));
  };

  return (
    <div className="relative">
      <DatePicker
        className="w-full h-10 box-border pl-9 px-5 rounded-lg text-sm bg-gray2"
        dateFormat="yyyy년-MM월-dd일"
        selected={startDate}
        onChange={handleDate}
        minDate={new Date()}
        placeholderText="날짜를 선택해주세요."
      />
      <FaRegCalendarAlt className="text-bk absolute left-3 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SelectDate;
