import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <div>
      <DatePicker
        className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
        selected={selectedTime}
        onChange={time => setSelectedTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="aa hh:mm "
      />
    </div>
  );
};

export default TimePicker;
