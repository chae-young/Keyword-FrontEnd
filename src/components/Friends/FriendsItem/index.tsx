import React from 'react';
import { FriendsDataType } from '@/types/friend/friendsDataType';
import { IS_FRIEND } from '@/constants/friends';

interface FriendsItemProps extends FriendsDataType {
  // buttonName: string[];
}

const FriendsItem = ({
  name,
  email,
  profileImageUrl,
  status
}: FriendsItemProps) => {
  const friendStatus = status === IS_FRIEND;
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
          disabled={!friendStatus}
          className={`${
            friendStatus ? 'bg-primary text-white' : 'bg-gray3 text-gray1'
          }  rounded-xl  pt-2 py-1 px-3`}
        >
          친구추가
        </button>
      )}
    </li>
  );
};

export default FriendsItem;
