import React, { startTransition, useEffect, useState } from 'react';
import ScheduleInputBox from '../ScheduleInputBox';
import useScheduleState from '@/hooks/recoil/useScheduleState';

const ScheduleText = () => {
  const { setScheduleCreateState } = useScheduleState();
  const [content, setContent] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    startTransition(() => {
      setScheduleCreateState(prevState => ({
        ...prevState,
        contents: content
      }));
    });
  }, [content]);
  return (
    <ScheduleInputBox
      title="내용"
      element={
        <textarea
          className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 p-3 w-full resize-none h-20"
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={handleChange}
        />
      }
    />
  );
};

export default ScheduleText;
