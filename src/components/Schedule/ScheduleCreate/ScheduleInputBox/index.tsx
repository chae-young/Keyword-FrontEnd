import React from 'react';

interface ScheduleInputBoxProps {
  title: string;
  element: React.ReactNode;
}

const ScheduleInputBox = ({ title, element }: ScheduleInputBoxProps) => (
  <div className="pb-4 pt-3">
    <label htmlFor="title" className="block mb-2 text-body2">
      {title}
    </label>
    {element}
    {/* <Input
      type="text"
      placeholder="일정 제목을 입력해주세요."
      value={scheduleTitle}
      handleChangeInput={handleChangeScheduleTitle}
    /> */}
  </div>
);

export default ScheduleInputBox;
