import React from 'react';

import TopTitle from '@/components/common/TopTitle';
import WideButton from '@/components/common/Button/WideButton';
import CalendarComponent from '@/components/common/Calendar';
import SelectTime from '@/components/common/Select/SelectOption';

const HomePage = () => (
  <>
    <TopTitle title="일정 생성" />
    <form className="pt-0">
      <div className="pb-4">
        <p className="pb-3">일정 제목</p>
        <input
          className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
          type="text"
        />
      </div>
      <div className="pt-4">
        <p className="pb-3">날짜</p>
        <CalendarComponent />
      </div>
      <div className="pt-4">
        <p className="pb-3">시간</p>
        <SelectTime />
      </div>
      <div className="pt-4">
        <p className="pb-3">알림 설정</p>
        <input
          className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
          type="text"
        />
      </div>
      <div className="pt-4">
        <p className="pb-3">친구선택</p>
        <input
          className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
          type="text"
        />
      </div>
      <div>
        <WideButton type="submit" text="일정 등록" status={false} />
      </div>
    </form>
  </>
);
export default HomePage;
