import { useRecoilState } from 'recoil';

import { alarmNoticeAtom } from '@/recoil/atoms/alarm/atom';

const useAlarmState = () => {
  const [alarmNoticeState, setAlarmNoticeState] =
    useRecoilState(alarmNoticeAtom);

  const alarmNoticeIdChange = (id: number) => {
    setAlarmNoticeState({
      noticeId: id
    });
  };

  return {
    alarmNoticeState,
    setAlarmNoticeState,
    alarmNoticeIdChange
  };
};

export default useAlarmState;
