import React, { FormEvent, useState } from 'react';
import Modal from '@/components/common/Modal';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';
import useInfinite from '@/hooks/useInfinite';
import useModalState from '@/hooks/recoil/useModalState';
import { FriendsDataType } from '@/types/friend/friendsDataType';

const ModalInSelectedFriends = () => {
  const { closeModal, saveMySelectedFriends } = useModalState();
  const { friendsList, friendsListFetchNextPage } =
    useGetMyFriendsQuery('accept');
  const [friendCheckedList, setFriendCheckedList] = useState<FriendsDataType[]>(
    []
  );
  const [isChecked, setIsChecked] = useState(false);

  // 체크리스트에 포함되어 있으면 제거 없으면 추가
  const handelCheckedItem = (
    checked: boolean,
    checkedFriend: FriendsDataType
  ) => {
    if (checked) {
      setFriendCheckedList(prevState => [...prevState, checkedFriend]);
      return;
    }

    if (!checked) {
      setFriendCheckedList(
        friendCheckedList.filter(
          friend => friend.memberId !== checkedFriend.memberId
        )
      );
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveMySelectedFriends(friendCheckedList);
  };

  const handelChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    friend: FriendsDataType
  ) => {
    setIsChecked(!isChecked);
    handelCheckedItem(e.target.checked, friend);
  };
  // const [checkedState, setCheckedState] = useState<CheckedState>(() =>
  //   friendsList.reduce((state, friend) => {
  //     state[friend.memberId] = false;
  //     return state;
  //   }, {})
  // );
  // const toggleCheckbox = (memberId: number) => {
  //   setCheckedState(prevState => ({
  //     ...prevState,
  //     [memberId]: !prevState[memberId]
  //   }));
  // };
  // 팝업 모달
  // const onSubmit = useCallback(
  //   (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const checkedList = friendsList.filter(
  //       friend => checkedState[friend.memberId]
  //     );
  //     console.log('checkedList:', checkedList);
  //     saveMySelectedFriends(checkedList);
  //   },
  //   [checkedState, saveMySelectedFriends]
  // );
  const { lastElement } = useInfinite(friendsListFetchNextPage);
  return (
    <Modal title="내 친구 목록">
      <p className="text-body3 text-gray4 mb-3">
        * 일정에 추가할 친구를 선택하세요
      </p>
      <form onSubmit={handleSubmit}>
        <ul className="pb-16 max-h-56 overflow-y-auto -mx-6">
          {friendsList?.pages.map(page =>
            page.map(friend => (
              <li key={friend.memberId} className="">
                <label
                  htmlFor={`friend${friend.memberId}`}
                  className={`cursor-pointer flex items-center text-bk ${
                    friendCheckedList.includes(friend) &&
                    ' bg-primary text-white'
                  } px-6 py-2`}
                >
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={friend.profileImageUrl} alt={friend.name} />
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="label-text text-inherit text-body2">
                      {friend.name}
                    </p>
                    <p className="text-inherit text-body3">{friend.email}</p>
                  </div>
                  <input
                    id={`friend${friend.memberId}`}
                    type="checkbox"
                    checked={friendCheckedList.includes(friend)}
                    className="hidden"
                    onChange={e => handelChecked(e, friend)}
                  />
                </label>
              </li>
            ))
          )}
          {lastElement()}
        </ul>
        <button
          type="submit"
          className="fixed bottom-0 right-0 h-14 bg-primary w-full text-white text-body1"
          onClick={closeModal}
        >
          {`${friendCheckedList.length}명 선택하기`}
          {/* {`${Object.values(checkedState).filter(Boolean).length}명 선택`} */}
        </button>
      </form>
      {/* <ul>
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

        </div> */}
    </Modal>
  );
};
export default ModalInSelectedFriends;
