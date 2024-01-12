import React, { startTransition, useEffect } from 'react';
import ScheduleInputBox from '../ScheduleInputBox';
import Input from '@/components/common/Input';
import useInput from '@/hooks/useInput';
import useScheduleState from '@/hooks/recoil/useScheduleState';

const ScheduleTitle = () => {
  const { setScheduleCreateState } = useScheduleState();
  const [scheduleTitle, setScheduleTitle, handleChangeScheduleTitle] =
    useInput('');

  useEffect(() => {
    startTransition(() => {
      setScheduleCreateState(prevState => ({
        ...prevState,
        title: scheduleTitle
      }));
    });
  }, [scheduleTitle]);

  return (
    <ScheduleInputBox
      title="제목"
      element={
        <Input
          type="text"
          placeholder="일정 제목을 입력해주세요."
          value={scheduleTitle}
          handleChangeInput={handleChangeScheduleTitle}
        />
      }
    />
  );
};
export default ScheduleTitle;
