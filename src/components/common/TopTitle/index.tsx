import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import { GrEdit } from '@react-icons/all-files/gr/GrEdit';
import Alarm from '../Alarm';

interface TopTitleProps {
  title: string;
  back?: boolean;
  alarm?: boolean;
  edit?: boolean;
}

const TopTitle = ({ title, back, alarm, edit }: TopTitleProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-default h-[60px] flex justify-center z-50 items-center fixed left-0 top-0 right-0 m-auto w-full bg-white shadow-bottom">
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
      {alarm && <Alarm />}

      {edit && (
        <Link
          to="edit"
          className="w-14 h-full flex justify-center items-center absolute right-0 top-0"
        >
          <GrEdit className="text-xl" />
        </Link>
      )}
    </div>
  );
};

export default TopTitle;
