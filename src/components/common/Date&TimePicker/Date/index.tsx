import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SelectDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="mt-6 w-full h-10 box-border p-2 px-5 rounded-md text-sm bg-gray-100"
      dateFormat="yyyy년-MM월-dd일"
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
    />
  );
};

export default SelectDate;
