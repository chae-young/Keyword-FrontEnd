import TopTitle from '@/components/common/TopTitle';
import ModalInSelectedFriends from '@/components/Schedule/ModalInSelectedFriedns';
import ScheduleCreate from '@/components/Schedule/ScheduleCreate';

const ScheduleCreatePage = () => (
  <>
    <TopTitle title="일정 추가" back />
    <ScheduleCreate />
    <ModalInSelectedFriends />
  </>
);

export default ScheduleCreatePage;
