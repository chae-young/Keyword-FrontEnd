import React from 'react';

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number';
  width?: string;
  value: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  width,
  handleChangeInput,
  value,
  placeholder,
  maxLength,
  minLength
}: InputProps) => (
  <input
    className={`bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 ${
      width || 'w-full'
    }`}
    placeholder={placeholder}
    type={type}
    value={value}
    minLength={minLength}
    maxLength={maxLength}
    onChange={handleChangeInput}
  />
);

export default Input;
