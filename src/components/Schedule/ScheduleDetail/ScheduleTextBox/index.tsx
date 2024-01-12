import React from 'react';

interface ScheduleTextBoxProps {
  icon: React.ReactNode;
  element: React.ReactNode;
}

const ScheduleTextBox = ({ icon, element }: ScheduleTextBoxProps) => (
  <div className="flex leading-6">
    <div className="mt-[2px] basis-5 [&>*]:text-base">{icon}</div>
    <div className="flex-1 leading-6 ml-3">{element}</div>
  </div>
);

export default ScheduleTextBox;
