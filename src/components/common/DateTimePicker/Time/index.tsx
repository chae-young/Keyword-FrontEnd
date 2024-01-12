import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ScheduleTime } from '@/types/schedule/scheduleDataType';

import 'react-datepicker/dist/react-datepicker.css';
import useScheduleState from '@/hooks/recoil/useScheduleState';

interface TimePickerProps {}

const TimePicker = ({}: TimePickerProps) => {
  const { setScheduleTimeState } = useScheduleState();
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });

  const handleSelectedTime = (date: Date) => {
    setSelectedTime(date);

    setScheduleTimeState((prevState: ScheduleTime) => ({
      ...prevState,
      time: formatTime(date)
    }));
  };

  return (
    <div>
      <DatePicker
        className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
        selected={selectedTime}
        onChange={handleSelectedTime}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        // timeCaption="Time"
        placeholderText="시간을 선택해주세요."
        timeFormat="HH:mm"
        dateFormat="h:mm aa"
      />
    </div>
  );
};

export default TimePicker;
