import { MdAccessTime } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import { LuText } from 'react-icons/lu';
import { FaLocationDot } from 'react-icons/fa6';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { useParams } from 'react-router-dom';
import useGetScheduleDetailQuery from '@/hooks/query/schedules/useGetScheduleDetailQuery';
import KakaoMap from '@/components/KakaoMap';
import TopTitle from '@/components/common/TopTitle';
import ScheduleTextBox from '@/components/Schedule/ScheduleDetail/ScheduleTextBox';
import WideButton from '@/components/common/Button/WideButton';
import ModalInSelectedFriends from '@/components/Schedule/ModalInSelectedFriedns';
import useModalState from '@/hooks/recoil/useModalState';
import useUserState from '@/hooks/recoil/useUserState';
import ModalAttendingFriends from '@/components/Schedule/ModalAttendingFriends';

const ScheduleDetailPage = () => {
  const { id } = useParams();
  const { scheduleDetail } = useGetScheduleDetailQuery({
    scheduleId: Number(id),
    noticeId: Number(id)
  });
  const { userState } = useUserState();
  const [date, time] = (scheduleDetail?.scheduleAt ?? '').split('T');
  const { openModal } = useModalState();
  // 좌표
  const coordi = {
    lat: scheduleDetail?.latitude,
    long: scheduleDetail?.longitude
  };
  // 취소하기
  // const handleScheduleDel = (scheduleId: number) => {
  //   const scheduleConfirmed = window.confirm('해당 일정을 삭제하시겠습니까?');
  //   if (scheduleConfirmed) {
  //     scheduleDeleteIsMutate(scheduleId);
  //   }
  // };

  const handleFriendView = () => {
    console.log('친구보기');
    openModal();
  };

  return (
    <>
      <div className="-mx-default text-body2">
        {scheduleDetail && (
          <>
            <TopTitle
              title=""
              back
              edit={scheduleDetail.organizerId === userState.memberId}
            />

            <ul>
              <li className="px-5 py-6 border-b-4 border-gray1">
                <ScheduleTextBox
                  icon={
                    <span className="w-3 h-3 bg-primary block rounded-full mt-[1px]" />
                  }
                  element={
                    <h2 className="text-body1 mb-5 font-bold">
                      {scheduleDetail.title}
                    </h2>
                  }
                />
                <ScheduleTextBox
                  icon={<MdAccessTime />}
                  element={
                    <p>
                      {date}&nbsp;&nbsp;{time.slice(0, -3)}시
                    </p>
                  }
                />
                <ScheduleTextBox
                  icon={<BiBell />}
                  element={<p>{scheduleDetail.remindAt}</p>}
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
                      <p>
                        {scheduleDetail.scheduleFriendList.length}명의 친구가
                        참석해요
                      </p>{' '}
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
        {scheduleDetail?.organizerId === userState.memberId && (
          <WideButton type="button" status text="취소하기" />
        )}
      </div>
      <ModalAttendingFriends
        friendsList={scheduleDetail?.scheduleFriendList}
        organizerId={scheduleDetail?.organizerId}
      />
    </>
  );
};

export default ScheduleDetailPage;
