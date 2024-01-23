import { Link } from 'react-router-dom';
import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn';
import { SCHEDULE_ONGOING } from '@/constants/schedule';

interface MySchedulesItemProps {
  scheduleId: number;
  title: string;
  scheduleDateTime: string;
  locationExplanation?: string;
  status: string;
}

const MySchedulesItem = ({
  scheduleId,
  title,
  scheduleDateTime,
  locationExplanation,
  status
}: MySchedulesItemProps) => {
  const [date, time] = scheduleDateTime.split('T');

  return (
    <li className="border-b py-4">
      <Link to={`/schedule/${scheduleId}`}>
        <div className="flex">
          <p className="grow text-overflow font-bold">{title}</p>
          <div className="basis-24 text-right shrink-0">
            {status === SCHEDULE_ONGOING ? (
              <span className="px-2 bg-primary2 text-body3 font-bold rounded-xl py-1">
                진행중
              </span>
            ) : (
              <span className="px-2 bg-gray3 text-body3 text-gray1 rounded-xl py-1">
                진행완료
              </span>
            )}
          </div>
        </div>
        <p className="text-body3 text-gray4 flex mt-2">
          <MdLocationOn className="text-sm" />
          {locationExplanation}
        </p>
        <p className="text-body3 text-gray4">
          {date}&nbsp;&nbsp;{time.slice(0, -3)}시
        </p>
      </Link>
    </li>
  );
};

export default MySchedulesItem;
