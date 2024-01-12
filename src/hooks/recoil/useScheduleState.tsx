import { useRecoilState } from 'recoil';
import { scheduleCreateAtom, scheduleTime } from '@/recoil/atoms/schedule/atom';

const useScheduleState = () => {
  const [scheduleCreateState, setScheduleCreateState] =
    useRecoilState(scheduleCreateAtom);
  const [scheduleTimeState, setScheduleTimeState] =
    useRecoilState(scheduleTime);
  return {
    scheduleCreateState,
    setScheduleCreateState,
    scheduleTimeState,
    setScheduleTimeState
  };
};

export default useScheduleState;
