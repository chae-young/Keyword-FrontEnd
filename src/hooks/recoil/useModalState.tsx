import { useRecoilState } from 'recoil';
import { modalAcceptOrRejectAtom, modalAtom } from '@/recoil/atoms/modal/atom';

/*
 * modalAtom: 기본 모달 state
 * modalAcceptOrRejectAtom: 친구 요청 수락/거절 모달 state
 */

const useModalState = () => {
  const [modalState, setModalstate] = useRecoilState(modalAtom);
  const [reqModalState, setReqModalState] = useRecoilState(
    modalAcceptOrRejectAtom
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

  return {
    openModal,
    closeModal,
    modalState,
    reqModalState,
    changeFriendName
  };
};

export default useModalState;
