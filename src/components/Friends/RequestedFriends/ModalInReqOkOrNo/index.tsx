import usePatchMyFriendReqQuery from '@/hooks/query/friends/usePatchMyFriendReqQuery';
import useModalState from '@/hooks/recoil/useModalState';
import { ACCEPTED, REJECTED } from '@/constants/friends';

interface ModalInReqOkOrNoProps {
  name: string;
}

const ModalInReqOkOrNo = ({ name }: ModalInReqOkOrNoProps) => {
  const { FriendReqAcceptIsMutate } = usePatchMyFriendReqQuery();
  const { reqModalState, closeModal } = useModalState();
  const handelReqReject = () => {
    FriendReqAcceptIsMutate({
      ...reqModalState,
      friendState: ACCEPTED
    });
    closeModal();
  };
  const handleReqAccept = () => {
    FriendReqAcceptIsMutate({
      ...reqModalState,
      friendState: REJECTED
    });
    closeModal();
  };

  return (
    <div className="text-center">
      <p className="pt-4 py-20">
        {name}님이 친구요청을 했어요. <br /> 수락하시겠어요?
      </p>
      <div className="flex absolute left-0 bottom-0 w-full">
        <button
          type="button"
          onClick={handelReqReject}
          className="flex-1 h-14 bg-gray3 text-white text-body1 font-bold"
        >
          거절하기
        </button>
        <button
          type="button"
          onClick={handleReqAccept}
          className="flex-1 h-14 bg-primary text-white text-body1 font-bold"
        >
          수락하기
        </button>
      </div>
    </div>
  );
};

export default ModalInReqOkOrNo;
