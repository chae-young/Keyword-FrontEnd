import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useScheduleState from '@/hooks/recoil/useScheduleState';
import ScheduleInputTitle from './ScheduleTitle';
import ScheduleDate from './ScheduleDate';
import ScheduleTime from './ScheduleTime';
import ScheduleRemind from './ScheduleRemind';
import ScheduleAddr from './ScheduleAddr';
import WideButton from '@/components/common/Button/WideButton';
import ScheduleFriends from './ScheduleFriends';
import ScheduleText from './ScheduleText';
import usePostSchedulesQuery from '@/hooks/query/schedules/usePostSchedulesQuery';

const ScheduleCreate = () => {
  const navigate = useNavigate();
  const { scheduleIsMutate } = usePostSchedulesQuery();
  const { scheduleCreateState, scheduleTimeState, setScheduleCreateState } =
    useScheduleState();
  const [allInputValid, setAllInputValid] = useState(false);

  useEffect(() => {
    const allInputChecked = Object.values(scheduleCreateState).every(value =>
      Array.isArray(value) ? value.length > 0 : value !== ''
    );
    if (allInputChecked) {
      setAllInputValid(true);
    } else {
      setAllInputValid(false);
    }
  }, [scheduleCreateState]);

  useEffect(() => {
    if (scheduleTimeState.time && scheduleTimeState.date)
      setScheduleCreateState(prevState => ({
        ...prevState,
        scheduleDateTime: `${scheduleTimeState.date}T${scheduleTimeState.time}`
      }));
  }, [scheduleTimeState.time, scheduleTimeState.date]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    scheduleIsMutate(scheduleCreateState);
    navigate('/', { replace: true });
  };

  return (
    <form className="pt-0" onSubmit={handleSubmit}>
      <ScheduleInputTitle />
      <ScheduleText />
      <ScheduleDate />
      <ScheduleTime />
      <ScheduleRemind />
      <ScheduleAddr />
      <ScheduleFriends />
      <WideButton text="등록하기" status={allInputValid} />
    </form>
  );
};

export default ScheduleCreate;
