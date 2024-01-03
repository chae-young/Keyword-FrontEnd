
import React, { ChangeEvent, useState } from 'react';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import ScheduleDate from '@/components/common/Calendar';


interface ScheduleFormProps {
  onScheduleAdd: (schedule: Schedule) => void;
}

interface Schedule {
  title: string;
  date: string;
  time: string;
  alarm: string;
  address: string;
  friends: string[];
}



const ScheduleForm: React.FC<ScheduleFormProps> = ({ onScheduleAdd }) => {
  const [schedule, setSchedule] = useState<Schedule>({
    title: '',
    date: '',
    time: '',
    alarm: '',
    address: '',
    friends: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  

  const handleFriendsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFriends = Array.from(e.target.selectedOptions, (option) => option.value);
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      friends: selectedFriends,
    }));
  };


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onScheduleAdd(schedule);
    // 폼 제출 후 상태 초기화 또는 다른 작업 수행
    setSchedule({
      title: '',
      date: '',
      time: '',
      alarm: '',
      address: '',
      friends: [],
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      alarm: e.target.value,
    }));
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>일정 제목</label>
        <Input type="text" value={schedule.title} handleChangeInput={handleInputChange} />
      </div>
      <div>
        <label>날짜</label>
        <ScheduleDate/>
      </div>
      <div>
        <label>시간</label>
        <Input type="time" value={schedule.time} handleChangeInput={handleInputChange}/>
      </div>
      <div>
        <label>알람</label>
        <Select options={[]} value={schedule.alarm} handleChangeSelect={handleSelectChange}/>

      </div>
      <div>
        <label>주소</label>
        <Input type="text" value={schedule.address} handleChangeInput={handleInputChange}/>
      </div>
      <div>
        <label>친구 선택하기</label>
        <Select multiple name="friends" value={schedule.friends} onChange={handleFriendsChange}>
          <option value="친구1">친구1</option>
          <option value="친구2">친구2</option>
          <option value="친구3">친구3</option>
        </Select>
      </div>
      <div>
        <button type="submit">등록하기</button>
      </div>
    </form>
  );
};

export default ScheduleForm;
