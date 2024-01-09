import React from 'react';

interface RightButtonProps {
  handleClick: () => void;
  addStyle?: string;
  disable?: boolean;
  text: string;
}

const RightButton = ({
  handleClick,
  addStyle,
  disable,
  text
}: RightButtonProps) => (
  <button
    type="button"
    onClick={handleClick}
    disabled={disable}
    className={`${
      addStyle || 'bg-primary text-white rounded-xl  pt-2 py-1 px-3'
    } block`}
  >
    {text}
  </button>
);

export default RightButton;
