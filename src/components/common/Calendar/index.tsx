import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarComponentProps {
  onDateChange?: (date: Date) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  onDateChange
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleInputChange = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCalendarChange: CalendarProps['onChange'] = date => {
    if (date instanceof Date) {
      setSelectedDate(date);
      setShowCalendar(false);

      // 원하는 경우 부모 컴포넌트에도 날짜 변경을 알릴 수 있습니다.
      if (onDateChange) {
        onDateChange(date);
      }
    }
  };

  return (
    <div>
      <input
        className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
        type="text"
        value={selectedDate.toLocaleDateString()} // 선택한 날짜를 표시
        onClick={handleInputChange} // input 클릭 시 캘린더 표시/숨김 토글
      />
      {showCalendar && (
        <Calendar onChange={handleCalendarChange} value={selectedDate} />
      )}
    </div>
  );
};

export default CalendarComponent;
