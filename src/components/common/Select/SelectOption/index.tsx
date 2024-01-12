import React, { useEffect, useState } from 'react';
import Select from '..';
import useScheduleState from '@/hooks/recoil/useScheduleState';

const SelectRemind = () => {
  const [selectRemind, setSelectedRemind] = useState('');
  const { setScheduleCreateState } = useScheduleState();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRemind(e.target.value);
    setScheduleCreateState(prevState => ({
      ...prevState,
      remindDateTime: e.target.value
    }));
  };

  return (
    <Select
      options={[
        { value: '', label: '알림 시간을 선택해주세요.' },
        { value: '1', label: '1시간 전' },
        { value: '3', label: '3시간 전' },
        { value: '7', label: '7시간 전' },
        { value: '12', label: '12시간 전' },
        { value: '24', label: '24시간 전' }
      ]}
      value={selectRemind}
      handleChangeSelect={handleSelectChange}
    />
  );
};

export default SelectRemind;
