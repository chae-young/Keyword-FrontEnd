import { useNavigate } from 'react-router-dom';
import { IoIosClose } from '@react-icons/all-files/io/IoIosClose';
import { useQueryClient } from '@tanstack/react-query';
import {
  FRIEND_REQUEST,
  SCHEDULE_CALCEL,
  SCHEDULE_REMIND
} from '@/constants/alarm';
import useDeleteAlarmQuery from '@/hooks/query/alarm/useDeleteAlarmQuery';

interface AlramItemProps {
  noticeId: number;
  type: string;
  scheduleId?: number;
}

const AlarmItem = ({ type, noticeId, scheduleId }: AlramItemProps) => {
  const navigate = useNavigate();
  const { alarmDeleteIsMutate } = useDeleteAlarmQuery();
  const queryClient = useQueryClient();

  const handleIsReadAlarm = () => {
    queryClient.invalidateQueries({ queryKey: ['alarmList'] });
    // alarmNoticeIdChange(noticeId);
    if (type === FRIEND_REQUEST)
      navigate(`/mypage/requested?tab=1&noticeId=${noticeId}`);
    if (type === SCHEDULE_CALCEL)
      navigate(`/schedule/${scheduleId}?noticeId=${noticeId}`);
    // if(type === SCHEDULE_REMIND) navigate('/mypage/requested?tab=1');
  };

  const handleAlarmDelete = (id: number) => {
    // console.log('삭제');
    alarmDeleteIsMutate(id);
  };

  return (
    <li className="flex mb-3">
      <button
        type="button"
        onClick={handleIsReadAlarm}
        className="flex items-center text-body2 w-full"
      >
        <span className="shrink-0 bg-ico-logo w-12 h-12 bg-gray1 rounded-full bg-contain bg-no-repeat block bg-center" />
        <p className="ml-2 text-left grow">
          {type === FRIEND_REQUEST && '친구요청이 왔어요. 확인해보세요!'}
          {type === SCHEDULE_CALCEL && '일정이 취소됬어요. 확인해보세요!'}
          {type === SCHEDULE_REMIND && '일정 리마인드 드려요. 확인해보세요!'}
        </p>
      </button>
      <button type="button" onClick={() => handleAlarmDelete(noticeId)}>
        <span className="sr-only">닫기</span>
        <IoIosClose className="text-4xl text-bk" />
      </button>
    </li>
  );
};

export default AlarmItem;
