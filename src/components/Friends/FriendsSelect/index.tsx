import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [friendList, setFriendList] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);

  useEffect(() => {
    // 여기서 실제로는 서버에서 친구 목록을 받아오는 API를 호출해야 합니다.
    // 아래는 간단한 하드코딩된 예시입니다.
    const fetchFriendList = async () => {
      // API 호출
      // const response = await fetch('/api/friend-list');
      // const data = await response.json();

      // 하드코딩된 데이터
      const data = [
        { id: 1, name: 'Friend 1' },
        { id: 2, name: 'Friend 2' },
        { id: 3, name: 'Friend 3' }
      ];

      setFriendList(data);
    };

    if (isOpen) {
      fetchFriendList();
    }
  }, [isOpen]);

  const handleCheckboxChange = friendId => {
    // 선택된 친구를 추적하기 위해 상태값 업데이트
    setSelectedFriends(prevSelected => {
      if (prevSelected.includes(friendId)) {
        // 이미 선택된 경우 해제
        return prevSelected.filter(id => id !== friendId);
      }
      // 선택되지 않은 경우 추가
      return [...prevSelected, friendId];
    });
  };

  const handleConfirmButtonClick = () => {
    // 선택된 친구들의 수 반환 또는 다른 작업 수행
    alert(`선택된 친구 수: ${selectedFriends.length}`);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>친구 목록</h2>
        <ul>
          {friendList.map(friend => (
            <li key={friend.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(friend.id)}
                  checked={selectedFriends.includes(friend.id)}
                />
                {friend.name}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleConfirmButtonClick}>확인</button>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>친구 목록 보기</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
