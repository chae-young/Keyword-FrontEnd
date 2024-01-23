import React, { FormEvent, useState } from 'react';
import Modal from '@/components/common/Modal';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';
import useInfinite from '@/hooks/useInfinite';
import useModalState from '@/hooks/recoil/useModalState';
import { FriendsDataType } from '@/types/friend/friendsDataType';
import { ACCEPT } from '@/constants/friends';
import NoResultText from '@/components/common/NoDataText';
import Avatar from '@/components/common/Avatar';

interface ModalInSelectedFriendsProps {
  view?: boolean;
}

const ModalInSelectedFriends = ({ view }: ModalInSelectedFriendsProps) => {
  const { closeModal, saveMySelectedFriends } = useModalState();
  const { friendsList, friendsListFetchNextPage, friendsListHasNextPage } =
    useGetMyFriendsQuery(ACCEPT);
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
    // '나'를 포함한 친구들
    // const meAddFriendCheckedList = [...friendCheckedList, userState];
    saveMySelectedFriends(friendCheckedList);
  };

  const handelChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    friend: FriendsDataType
  ) => {
    setIsChecked(!isChecked);
    handelCheckedItem(e.target.checked, friend);
  };
  const { lastElement } = useInfinite(
    friendsListFetchNextPage,
    friendsListHasNextPage
  );
  return (
    <Modal title="내 친구 목록">
      {!view && (
        <p className="text-body3 text-gray4 mb-3">
          * 일정에 추가할 친구를 선택하세요
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <ul className="pb-16 max-h-56 overflow-y-auto -mx-6">
          {friendsList?.pages.map(page =>
            friendsList.pages[0].length ? (
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
                        {friend.imageUrl ? (
                          <img src={friend.imageUrl} alt={friend.name} />
                        ) : (
                          <Avatar h="h-12" iconWidth="text-4xl" />
                        )}
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
            ) : (
              <NoResultText text="친구가 없습니다." key="noText" />
            )
          )}
          {friendsList &&
          friendsList.pages[0].length >= 10 &&
          friendsListHasNextPage
            ? lastElement()
            : ''}
        </ul>
        {!view && (
          <button
            type="submit"
            className={`fixed bottom-0 right-0 h-14 ${
              friendCheckedList.length ? 'bg-primary' : 'bg-gray3'
            } w-full text-white text-body1`}
            disabled={!friendCheckedList.length}
            onClick={closeModal}
          >
            {`${friendCheckedList.length}명 선택하기`}
          </button>
        )}
      </form>
    </Modal>
  );
};
export default ModalInSelectedFriends;
