import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  handleChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, value, handleChangeSelect }: SelectProps) => {
  const allOptions = [...options, { value: '24', label: '24시간' }];

  return (
    <select
      className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3"
      value={value}
      onChange={handleChangeSelect}
    >
      {allOptions.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
