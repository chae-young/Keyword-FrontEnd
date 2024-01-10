import React, { useCallback, useState } from 'react';

import { IoPersonAddOutline } from 'react-icons/io5';
import useModalState from '@/hooks/recoil/useModalState';
import TopTitle from '@/components/common/TopTitle';
import WideButton from '@/components/common/Button/WideButton';
import SelectDate from '@/components/common/Date&TimePicker/Date';
import TimePicker from '@/components/common/Date&TimePicker/Time';
import Addr from '@/components/common/Map';
import SelectRemind from '@/components/common/Select/SelectOption';
import Modal from '@/components/common/Modal';
import { friendsList } from '@/mocks/data';

interface CheckedState {
  [key: number]: boolean;
}
const CreateTodoPage: React.FC = () => {
  const {
    openModal,
    closeModal,
    isModalOpen,
    saveMySelectedFriends,
    mySelectdFriends
  } = useModalState();
  // const [showOtherButton, setShowOtherButton] = useState(false);
  const [checkedState, setCheckedState] = useState<CheckedState>(
    friendsList.reduce((state, friend) => {
      state[friend.memberId] = false;
      return state;
    }, {})
  );

  const toggleCheckbox = (memberId: number) => {
    setCheckedState(prevState => ({
      ...prevState,
      [memberId]: !prevState[memberId]
    }));
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const checkedList = friendsList.filter(
        friend => checkedState[friend.memberId]
      );
      console.log('checkedList:', checkedList);
      saveMySelectedFriends(checkedList);
    },
    [checkedState, saveMySelectedFriends]
  );

  const handleFriendSelect = () => {
    openModal();
  };

  // const handleOtherButtonClick = () => {
  //   openModal(); // 다른 버튼 클릭 시 모달 열기
  // };

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
            {mySelectdFriends.length > 0 ? (
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  visibility: mySelectdFriends.length > 0 ? 'visible' : 'hidden'
                }}
                className="max-w-default m-auto w-full text-body1 h-14 rounded bottom-0 text-white bg-primary"
                type="button"
                onClick={handleFriendSelect}
              >
                {`${mySelectdFriends.length}명의 친구가 선택되었습니다`}
              </button>
            ) : (
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  visibility: mySelectdFriends.length > 0 ? 'hidden' : 'visible'
                }}
                className="max-w-default m-auto w-full text-body1 h-14 rounded bottom-0 text-gray4 bg-white border border-dashed border-gray4"
                type="button"
                onClick={handleFriendSelect}
              >
                친구 선택하기
                <IoPersonAddOutline style={{ marginLeft: '8px' }} />
              </button>
            )}
          </div>
        </div>
        <div>
          <WideButton type="submit" text="일정 등록" status={false} />
        </div>
      </form>
      <Modal title="내 친구 목록">
        <form onSubmit={onSubmit} className="w-full h-80">
          <ul>
            {friendsList.map(friend => (
              <li key={friend.memberId}>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={friend.profileImageUrl} alt={friend.name} />
                      </div>
                    </div>
                    <span className="label-text">{friend.name}</span>
                    <input
                      type="checkbox"
                      checked={checkedState[friend.memberId]}
                      className="checkbox checkbox-warning"
                      onChange={() => toggleCheckbox(friend.memberId)}
                    />
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <button
              type="submit"
              className="btn fixed flex-end mr-3 mb-3 bottom-0 right-0"
              onClick={closeModal}
            >
              {`${Object.values(checkedState).filter(Boolean).length}명 선택`}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateTodoPage;
