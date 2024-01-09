import React from 'react';
import TopTitle from '@/components/common/TopTitle';
import WideButton from '@/components/common/Button/WideButton';
import SelectDate from '@/components/common/Date&TimePicker/Date';
import TimePicker from '@/components/common/Date&TimePicker/Time';
import Addr from '@/components/common/Map';
import SelectRemind from '@/components/common/Select/SelectOption';
import SelectFriendsButton from '@/components/common/Button/SelectFriendsButton';
import Modal from '@/components/common/Modal';

const CreateTodoPage = () => (
  <>
    <TopTitle title="일정 생성" />
    <form className="pt-0">
      <div className="pb-4 pt-3">
        <p className="pb-3">일정 제목</p>
        <input
          className="bg-gray2 rounded-lg text-body2 placeholder-text-gray4 h-10 pl-3 w-full"
          type="text"
        />
      </div>
      <div className="pb-4 pt-3">
        <p className="pb-3">날짜</p>
        <SelectDate />
      </div>
      <div className="pb-4 pt-3">
        <p className="pb-3">시간</p>
        <TimePicker />
      </div>
      <div className="pb-4 pt-3">
        <p className="pb-3">장소</p>
        <Addr />
      </div>
      <div className="pb-4 pt-3">
        <p className="pb-3">알림 설정</p>
        <SelectRemind />
      </div>
      <div className="pb-4 pt-3">
        <p className="pb-3">친구선택</p>
        <div>
          <SelectFriendsButton text="친구를 선택해보세요" status={false} />
          <Modal />
        </div>
      </div>
      <div>
        <WideButton type="submit" text="일정 등록" status={false} />
      </div>
    </form>
  </>
);

export default CreateTodoPage;
