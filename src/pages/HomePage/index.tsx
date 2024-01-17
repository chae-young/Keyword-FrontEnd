import { LuPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import MySchedulesList from '@/components/Schedule/MyschedulesList';

const HomePage = () => (
  <>
    <MySchedulesList />
    <div className="fixed max-w-default bottom-16 left-0 right-0 m-auto">
      <Link
        to="/schedule/create"
        className="w-[50px] h-[50px] bg-primary absolute bottom-0 right-5 rounded-full flex justify-center items-center"
      >
        <span className="sr-only ">일정추가</span>
        <LuPlus className="text-white text-3xl" />
      </Link>
    </div>
  </>
);
export default HomePage;
