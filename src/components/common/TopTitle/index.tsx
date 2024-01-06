import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa6';

interface TopTitleProps {
  title: string;
  back?: boolean;
  alarm?: boolean;
}

const TopTitle = ({ title, back, alarm }: TopTitleProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-default h-[60px] flex justify-center items-center fixed left-0 top-0 right-0 m-auto w-full bg-white shadow-bottom">
      {back && (
        <button
          type="button"
          className="px-4 h-full absolute left-0 top-0 flex justify-center items-center"
          onClick={handleBack}
        >
          <span className="sr-only">이전</span>
          <IoIosArrowBack className=" text-2xl" />
        </button>
      )}
      <h1 className="text-h2">{title}</h1>
      {alarm && (
        <Link
          to="/alarm"
          className="w-14 h-full flex justify-center items-center absolute right-0 top-0"
        >
          <FaRegBell className="text-xl text-bk" />
        </Link>
      )}
    </div>
  );
};

export default TopTitle;
