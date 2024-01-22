import { Link } from 'react-router-dom';
import { SCHEDULE_ONGOING } from '@/constants/schedule';

interface MySchedulesItemProps {
  scheduleId: number;
  title: string;
  scheduleDateTime: string;
  // locationExplanation?: string;
  status: string;
}

const MySchedulesItem = ({
  scheduleId,
  title,
  scheduleDateTime,
  // locationExplanation,
  status
}: MySchedulesItemProps) => {
  const [date, time] = scheduleDateTime.split('T');

  return (
    <li className="border-b py-4">
      <Link to={`/schedule/${scheduleId}`}>
        <div className="flex">
          <b className="grow text-overflow">{title}</b>
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
        <p className="text-body2 text-gray4 mt-4">
          {date}&nbsp;&nbsp;{time.slice(0, -3)}시
        </p>
      </Link>
    </li>
  );
};

export default MySchedulesItem;
