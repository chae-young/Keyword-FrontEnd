import { MdAccessTime } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import { LuText } from 'react-icons/lu';
import { FaLocationDot } from 'react-icons/fa6';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import useGetScheduleDetailQuery from '@/hooks/query/schedules/useGetScheduleDetailQuery';
import KakaoMap from '@/components/KakaoMap';
import TopTitle from '@/components/common/TopTitle';
import ScheduleTextBox from '@/components/Schedule/ScheduleDetail/ScheduleTextBox';
import WideButton from '@/components/common/Button/WideButton';
import ModalInSelectedFriends from '@/components/Schedule/ModalInSelectedFriedns';
import useModalState from '@/hooks/recoil/useModalState';

const ScheduleDetailPage = () => {
  const { scheduleDetail } = useGetScheduleDetailQuery({
    scheduleId: '1',
    noticeId: '1'
  });
  const [date, time] = (scheduleDetail?.scheduleDateTime ?? '').split('T');
  // const { scheduleDeleteIsMutate } = useDeleteScheduleQuery();
  const { openModal } = useModalState();

  // 취소하기
  // const handleScheduleDel = (scheduleId: number) => {
  //   const scheduleConfirmed = window.confirm('해당 일정을 삭제하시겠습니까?');
  //   if (scheduleConfirmed) {
  //     scheduleDeleteIsMutate(scheduleId);
  //   }
  // };

  const coordi = {
    lat: scheduleDetail?.latitude,
    long: scheduleDetail?.longitude
  };

  const handleFriendView = () => {
    console.log('친구보기');
    openModal();
  };

  return (
    <>
      <div className="-m-default text-body2">
        {scheduleDetail && (
          <>
            <TopTitle
              title={scheduleDetail?.title}
              back
              edit={scheduleDetail.organizerId}
            />
            <ul>
              <li className="px-5 py-6 border-b-4 border-gray1">
                <ScheduleTextBox
                  icon={<MdAccessTime />}
                  element={
                    <p>
                      {date}&nbsp;&nbsp;{time}
                    </p>
                  }
                />
                <ScheduleTextBox
                  icon={<BiBell />}
                  element={<p>{scheduleDetail.remindDateTime}</p>}
                />
                <ScheduleTextBox
                  icon={<LuText />}
                  element={<p>{scheduleDetail.contents}</p>}
                />
              </li>
              <li className="px-5 py-6 border-b-4 border-gray1">
                <ScheduleTextBox
                  icon={<FaLocationDot />}
                  element={
                    <address className="not-italic">
                      {scheduleDetail?.locationExplanation}
                    </address>
                  }
                />
                <div className="mb-4 flex" />
                <KakaoMap coordi={coordi} />
              </li>
              <li className="px-5 py-6">
                <ScheduleTextBox
                  icon={<LiaUserFriendsSolid />}
                  element={
                    <div className="flex justify-between">
                      <p>10명의 친구가 참석해요</p>{' '}
                      <button
                        type="button"
                        onClick={handleFriendView}
                        className="bg-primary text-white rounded-xl py-1 px-2 -mt-1"
                      >
                        친구보기
                      </button>
                    </div>
                  }
                />
              </li>
            </ul>
          </>
        )}
        {scheduleDetail?.organizerId && (
          <WideButton type="button" status text="취소하기" />
        )}
      </div>
      <ModalInSelectedFriends view />
    </>
  );
};

export default ScheduleDetailPage;
