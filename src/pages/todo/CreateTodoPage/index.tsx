import React from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';
import TopTitle from '@/components/common/TopTitle';
import WideButton from '@/components/common/Button/WideButton';
import SelectDate from '@/components/common/Date&TimePicker/Date';
import TimePicker from '@/components/common/Date&TimePicker/Time';
import Addr from '@/components/common/Map';
import SelectRemind from '@/components/common/Select/SelectOption';
import Modal from '@/components/common/Modal';
import useModalState from '@/hooks/recoil/useModalState';
import FriendListModal from '@/components/common/Modal/FriendsListModal';

const CreateTodoPage = () => {
  const { openModal, mySelectdFriends } = useModalState();
  const handleFriendSelect = () => {
    console.log('11');
    openModal();
  };
  console.log('선택된 친구', mySelectdFriends);
  return (
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
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="max-w-default m-auto w-full text-body1 h-14 rounded bottom-0 'text-gray4 bg-white border border-dashed border-gray4"
              type="button"
              onClick={handleFriendSelect}
            >
              친구 선택하기
              <IoPersonAddOutline style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
        <div>
          <WideButton type="submit" text="일정 등록" status={false} />
        </div>
      </form>
      <Modal title="내 친구 목록">
        <FriendListModal />
      </Modal>
    </>
  );
};

export default CreateTodoPage;
