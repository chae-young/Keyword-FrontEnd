import React from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';

interface SelectFriendsButtonProps {
  type?: string;
  text: string;
  status: boolean;
  hadleClick: () => void;
}

const SelectFriendsButton = ({
  type,
  text,
  status,
  hadleClick
}: SelectFriendsButtonProps) => (
  <button
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    type={type ? 'button' : 'submit'}
    // disabled={!status}
    onClick={hadleClick}
    className={`max-w-default m-auto w-full text-body1 h-14 rounded bottom-0 ${
      status ? 'text-white' : 'text-gray4'
    } ${status ? 'bg-primary' : 'bg-white border border-dashed border-gray4'}`}
  >
    {text}
    <IoPersonAddOutline style={{ marginLeft: '8px' }} />
  </button>
);

export default SelectFriendsButton;
