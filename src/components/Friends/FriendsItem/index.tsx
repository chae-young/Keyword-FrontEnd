import { FriendsDataType } from '@/types/friend/friendsDataType';
import { IS_FRIEND } from '@/constants/friends';
import usePostFriendAddQuery from '@/hooks/query/friends/usePostFriendAddQuery';
import useDeleteMyFriendQuery from '@/hooks/query/friends/useDeleteMyFriendQuery';
import RightButton from '@/components/common/Button/RightButton';
import useModalState from '@/hooks/recoil/useModalState';

interface FriendsItemProps extends FriendsDataType {
  // buttonName: string[];
  del?: boolean;
  reqCheck?: boolean;
}

const FriendsItem = ({
  memberId,
  name,
  email,
  profileImageUrl,
  status,
  del,
  reqCheck
}: FriendsItemProps) => {
  const friendStatus = status === IS_FRIEND;
  const { IsFriendAdd, friendAddIsMutate } = usePostFriendAddQuery(memberId);
  const { friendDeleteIsMutate } = useDeleteMyFriendQuery();
  const { changeFriendName, openModal } = useModalState();
  // 친구추가
  const handleFriendAdd = () => {
    friendAddIsMutate();
  };
  // 친구삭제
  const handleFriendDel = (memberReqId: number) => {
    const userConfirmed = window.confirm('해당 친구를 삭제하시겠습니까?');
    if (userConfirmed) {
      friendDeleteIsMutate(memberReqId);
    }
  };
  // 확인하기
  const handleRequestCheck = (friendName: string) => {
    changeFriendName(friendName, memberId);
    openModal();
  };

  return (
    <li className="flex items-start mb-4">
      <div className="avatar mr-2">
        <div className="w-12 rounded-full">
          <img src={profileImageUrl} alt={name} />
        </div>
      </div>
      <div className="flex-grow">
        <b className="text-body1 font-bold">{name}</b>
        <p className="text-body2 text-gray4">{email}</p>
      </div>
      {status && (
        <button
          type="button"
          disabled={friendStatus || IsFriendAdd?.isFriendRequest}
          onClick={handleFriendAdd}
          className={`${
            friendStatus || IsFriendAdd?.isFriendRequest
              ? 'bg-gray3 text-gray1'
              : 'bg-primary text-white'
          }  rounded-xl  pt-2 py-1 px-3`}
        >
          친구추가
        </button>
      )}
      {del && (
        <RightButton
          handleClick={() => handleFriendDel(memberId)}
          text="삭제"
        />
      )}
      {reqCheck && (
        <RightButton
          handleClick={() => handleRequestCheck(name)}
          text="확인하기"
        />
      )}
    </li>
  );
};

export default FriendsItem;
