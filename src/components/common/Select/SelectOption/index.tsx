import React, { useState } from 'react';
import Select from '..';

const SelectRemind = () => {
  const [selectRemind, setSelectedRemind] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRemind(e.target.value);
  };

  return (
    <div>
      <Select
        options={[
          { value: '3hours', label: '3시간 전' },
          { value: '12hours', label: '12시간 전' },
          { value: '24hours', label: '24시간 전' }
        ]}
        value={selectRemind}
        handleChangeSelect={handleSelectChange}
      />
    </div>
  );
};

export default SelectRemind;
