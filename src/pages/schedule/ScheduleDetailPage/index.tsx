import { MdAccessTime } from '@react-icons/all-files/md/MdAccessTime';
import { BiBell } from '@react-icons/all-files/bi/BiBell';
import { FaAlignLeft } from '@react-icons/all-files/fa/FaAlignLeft';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends';
import { useParams } from 'react-router-dom';
import useGetScheduleDetailQuery from '@/hooks/query/schedules/useGetScheduleDetailQuery';
import KakaoMap from '@/components/KakaoMap';
import TopTitle from '@/components/common/TopTitle';
import ScheduleTextBox from '@/components/Schedule/ScheduleDetail/ScheduleTextBox';
import WideButton from '@/components/common/Button/WideButton';
import useModalState from '@/hooks/recoil/useModalState';
import useUserState from '@/hooks/recoil/useUserState';
import useDeleteScheduleQuery from '@/hooks/query/schedules/useDeleteScheduleQuery';
import { SCHEDULE_ONGOING } from '@/constants/schedule';
import ModalAttendingFriends from '@/components/Schedule/ModalAttendingFriends';
import SEO from '@/components/SEO';

const ScheduleDetailPage = () => {
  const { id, noticeId } = useParams();
  const scheduleId = Number(id);
  const { scheduleDetail } = useGetScheduleDetailQuery({
    scheduleId,
    noticeId: Number(noticeId)
  });
  const { scheduleDeleteIsMutate } = useDeleteScheduleQuery();
  const { userState } = useUserState();
  const [date, time] = (scheduleDetail?.scheduleAt ?? '').split('T');
  const { openModal } = useModalState();
  // 좌표
  const coordi = {
    lat: scheduleDetail?.latitude,
    long: scheduleDetail?.longitude
  };

  // 삭제하기
  const handleScheduleDel = () => {
    const scheduleConfirmed = window.confirm('해당 일정을 삭제하시겠습니까?');
    if (scheduleConfirmed) {
      scheduleDeleteIsMutate(scheduleId);
    }
  };

  const handleFriendView = () => {
    openModal();
  };
  return (
    <>
      {scheduleDetail && (
        <SEO
          title={scheduleDetail.title}
          description={scheduleDetail?.contents}
        />
      )}
      <div className="-mx-default text-body2">
        {scheduleDetail && (
          <>
            <TopTitle
              title=""
              back
              edit={
                scheduleDetail.organizerId === userState.memberId &&
                !(scheduleDetail.status !== SCHEDULE_ONGOING)
              }
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
                  element={<p>{scheduleDetail.remindAt}시간전</p>}
                />
                <ScheduleTextBox
                  icon={<FaAlignLeft />}
                  element={<p>{scheduleDetail.contents}</p>}
                />
              </li>
              <li className="px-5 py-6 border-b-4 border-gray1">
                <ScheduleTextBox
                  icon={<FaMapMarkerAlt />}
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
                  icon={<FaUserFriends />}
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
          <WideButton
            type="button"
            status={!(scheduleDetail.status !== SCHEDULE_ONGOING)}
            text="취소하기"
            onClick={handleScheduleDel}
          />
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
