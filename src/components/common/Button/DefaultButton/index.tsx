import React from 'react';

interface DefaultButtonProps {
  type?: string;
  text: string;
  onClick: () => void;
}

const DefaultButton = ({ type, text, onClick }: DefaultButtonProps) => (
  <button
    type={type ? 'button' : 'submit'}
    className="max-w-default m-auto w-full text-body1 h-14 fixed bottom-0 left-0 right-0 text-gray4 bg-white"
    onClick={onClick}
  >
    {text}
  </button>
);

export default DefaultButton;
