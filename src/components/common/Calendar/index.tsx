import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function ScheduleDate() {
  const [value, onChange] = useState(new Date());

  const handleDateChange: CalendarProps['onChange'] = (date) => {
    onChange(date as Date); // React calendar는 date를 Date | Date[]로 지정
  };

  return (
    <div>
    </div>
  );
}

export default ScheduleDate;

