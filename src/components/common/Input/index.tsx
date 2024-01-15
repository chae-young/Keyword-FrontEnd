import React, { useEffect, useRef } from 'react';
import { DefaultValue } from 'recoil';

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'date' | 'time';
  width?: string;
  value: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  focus?: boolean;
  addStyle?: string;
  defaultValue?: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  width,
  handleChangeInput,
  value,
  placeholder,
  maxLength,
  minLength,
  focus,
  addStyle,
  defaultValue
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (focus && inputRef.current) inputRef.current.focus();
  }, [focus]);

  return (
    <input
      ref={inputRef}
      className={`bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 ${
        addStyle || ''
      }  ${width || 'w-full'}`}
      placeholder={placeholder}
      type={type}
      value={value}
      minLength={minLength}
      maxLength={maxLength}
      defaultValue={defaultValue}
      onChange={handleChangeInput}
    />
  );
};

export default Input;
