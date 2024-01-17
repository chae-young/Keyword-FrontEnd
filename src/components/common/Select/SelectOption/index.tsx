import React from 'react';
import Select from '..';

interface SelectRemindProps {
  scheduleSelectedRemind: string;
  handleRemind: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectRemind = ({
  scheduleSelectedRemind,
  handleRemind
}: SelectRemindProps) => (
  <Select
    options={[
      { value: '', label: '알림 시간을 선택해주세요.' },
      { value: '1', label: '1시간 전' },
      { value: '3', label: '3시간 전' },
      { value: '7', label: '7시간 전' },
      { value: '12', label: '12시간 전' },
      { value: '24', label: '24시간 전' }
    ]}
    value={scheduleSelectedRemind}
    handleChangeSelect={handleRemind}
  />
);

export default SelectRemind;
