import React, { useCallback } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { FriendsDataType } from '@/types/friend/friendsDataType';
import { IS_FRIEND } from '@/constants/friends';
import usePostFriendAddQuery from '@/hooks/query/friends/usePostFriendAddQuery';
import useDeleteMyFriendQuery from '@/hooks/query/friends/useDeleteMyFriendQuery';

interface FriendsItemProps extends FriendsDataType {
  // buttonName: string[];
  del?: boolean;
}

const FriendsItem = ({
  memberId,
  name,
  email,
  profileImageUrl,
  status,
  del
}: FriendsItemProps) => {
  const friendStatus = status === IS_FRIEND;
  const { IsFriendAdd, friendAddIsMutate } = usePostFriendAddQuery(memberId);
  const { IsFriendDelete, friendDeleteIsMutate } = useDeleteMyFriendQuery();
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
        <button
          type="button"
          onClick={() => handleFriendDel(memberId)}
          className="bg-primary text-white rounded-xl  pt-2 py-1 px-3"
        >
          삭제
        </button>
      )}
    </li>
  );
};

export default FriendsItem;
