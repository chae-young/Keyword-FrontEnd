import React, { useCallback, useState } from 'react';
import { friendsList } from '@/mocks/data';
import useModalState from '@/hooks/recoil/useModalState';

interface CheckedState {
  [key: number]: boolean;
}

const FriendListModal: React.FC = () => {
  const { saveMySelectedFriends } = useModalState();
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
    [checkedState]
  );

  return (
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
        >
          {`${Object.values(checkedState).filter(Boolean).length}명 선택`}
        </button>
      </div>
    </form>
  );
};

export default FriendListModal;
