import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface TimePickerProps {
  scheduleSelectedTime: Date | null;
  handleSelectedTime: (date: Date) => void;
}

const TimePicker = ({
  scheduleSelectedTime,
  handleSelectedTime
}: TimePickerProps) => (
  <div>
    <DatePicker
      className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
      selected={scheduleSelectedTime}
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

export default TimePicker;
