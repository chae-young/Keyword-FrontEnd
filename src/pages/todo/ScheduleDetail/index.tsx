import React from 'react';
import useGetScheduleDetailQuery from '@/hooks/query/schedules/useGetScheduleDetailQuery';
import KakaoMap from '@/components/KakaoMap';

const ScheduleDetail = () => {
  const { scheduleDetail } = useGetScheduleDetailQuery({
    scheduleId: '1',
    noticeId: '1'
  });
  console.log(scheduleDetail);
  const coordi = {
    lat: scheduleDetail?.latitude,
    long: scheduleDetail?.longitude
  };

  return (
    <div>
      <KakaoMap coordi={coordi} />
    </div>
  );
};

export default ScheduleDetail;
