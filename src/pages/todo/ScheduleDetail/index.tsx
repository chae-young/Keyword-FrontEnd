import React from 'react';
import { split } from 'postcss/lib/list';
import useGetScheduleDetailQuery from '@/hooks/query/schedules/useGetScheduleDetailQuery';
import KakaoMap from '@/components/KakaoMap';
import TopTitle from '@/components/common/TopTitle';
import WideButton from '@/components/common/Button/WideButton';
import useDeleteScheduleQuery from '@/hooks/query/schedules/useDeleteScheduleQuery';

const ScheduleDetail = () => {
  const { scheduleDetail } = useGetScheduleDetailQuery({
    scheduleId: '1',
    noticeId: '1'
  });
  const { scheduleDeleteIsMutate } = useDeleteScheduleQuery();
  const handleScheduleDel = (scheduleId: number) => {
    const scheduleConfirmed = window.confirm('해당 일정을 삭제하시겠습니까?');
    if (scheduleConfirmed) {
      scheduleDeleteIsMutate(scheduleId);
    }
  };

  const coordi = {
    lat: scheduleDetail?.latitude,
    long: scheduleDetail?.longitude
  };
  const myScheduleDate = scheduleDetail?.scheduleDateTime;
  const newMyScheduleDate = myScheduleDate?.split('T');
  const myScheduleRemind = scheduleDetail?.remindDateTime;
  const newMyScheduleRemind = myScheduleRemind?.split('T');
  return (
    <>
      {scheduleDetail && <TopTitle title={scheduleDetail?.title} />}

      <div>
        <p>{newMyScheduleDate}일정시간</p>
        <p>{newMyScheduleRemind}일정 리마인드</p>
        <p>{scheduleDetail?.contents}일정 내용</p>
      </div>
      <div>
        <p>{scheduleDetail?.locationExplanation}</p>
        <KakaoMap coordi={coordi} />
      </div>
      <div>
        <p>{scheduleDetail?.friendList.length}명의 친구가 선택되었습니다</p>
      </div>
      <button type="submit" onClick={() => handleScheduleDel}>
        취소하기
      </button>
    </>
  );
};

export default ScheduleDetail;
