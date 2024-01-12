import { useRecoilState } from 'recoil';
import {
  modalAcceptOrRejectAtom,
  modalAtom,
  modalMySelectedFriendsAtom
} from '@/recoil/atoms/modal/atom';
import { UserDataType } from '@/types/user/userDataType';
import { FriendsDataType } from '@/types/friend/friendsDataType';

/*
 * modalAtom: 기본 모달 state
 * modalAcceptOrRejectAtom: 친구 요청 수락/거절 모달 state
 */

const useModalState = () => {
  const [modalState, setModalstate] = useRecoilState(modalAtom);
  const [reqModalState, setReqModalState] = useRecoilState(
    modalAcceptOrRejectAtom
  );
  const [mySelectdFriends, setMySelectedFriends] = useRecoilState(
    modalMySelectedFriendsAtom
  );

  // 모달 오픈
  const openModal = () => {
    (document.getElementById('Modal') as HTMLDialogElement).showModal();
  };

  // 모달 닫기
  const closeModal = () => {
    (document.getElementById('Modal') as HTMLDialogElement).close();
  };

  // 모달(친구요청 수락/거절): 친구요청 수락/거절 친구 이름 변경
  const changeFriendName = (name: string, id: number) => {
    setReqModalState(prevState => ({
      ...prevState,
      memeberReqId: id,
      friendName: name
    }));
  };

  // 모달(내 친구 목록 불러오기) : 선택된 친구들 저장
  const saveMySelectedFriends = (friends: FriendsDataType[]) => {
    console.log(friends);
    setMySelectedFriends(friends);
  };

  return {
    openModal,
    closeModal,
    modalState,
    reqModalState,
    changeFriendName,
    mySelectdFriends,
    saveMySelectedFriends
  };
};

export default useModalState;
