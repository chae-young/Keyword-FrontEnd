import DatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';

import 'react-datepicker/dist/react-datepicker.css';

interface SelectDateProps {
  scheduleDate: Date | null;
  handleDate: (date: Date) => void;
}

const SelectDate = ({ scheduleDate, handleDate }: SelectDateProps) => (
  <div className="relative">
    <DatePicker
      className="w-full h-10 box-border pl-9 px-5 rounded-lg text-sm bg-gray2"
      dateFormat="yyyy년-MM월-dd일"
      selected={scheduleDate}
      onChange={handleDate}
      minDate={new Date()}
      placeholderText="날짜를 선택해주세요."
    />
    <FaRegCalendarAlt className="text-bk absolute left-3 top-1/2 -translate-y-1/2" />
  </div>
);
export default SelectDate;
