import React, { useState } from 'react';
import Select from '..';

const SelectTime = () => {
  const [selectedHour, setSelectedHour] = useState('');

  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(e.target.value);
  };

  const hours = Array.from({ length: 24 }, (_, index) => ({
    value: String(index),
    label: String(index)
  }));

  return (
    <div>
      <Select
        options={hours}
        value={selectedHour}
        handleChangeSelect={handleHourChange}
      />
    </div>
  );
};

export default SelectTime;
