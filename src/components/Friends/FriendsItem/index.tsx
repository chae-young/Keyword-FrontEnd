import React, { useCallback } from 'react';
import { FriendsDataType } from '@/types/friend/friendsDataType';
import { IS_FRIEND } from '@/constants/friends';
import usePostFriendAddQuery from '@/hooks/query/friends/usePostFriendAddQuery';

interface FriendsItemProps extends FriendsDataType {
  // buttonName: string[];
}

const FriendsItem = ({
  memberId,
  name,
  email,
  profileImageUrl,
  status
}: FriendsItemProps) => {
  const friendStatus = status === IS_FRIEND;
  const { IsFriendAdd, friendAddIsMutate } = usePostFriendAddQuery(memberId);

  const handleFriendAdd = useCallback(() => {
    friendAddIsMutate();
  }, []);

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
    </li>
  );
};

export default FriendsItem;
