import { FaCrown } from '@react-icons/all-files/fa/FaCrown';
import Avatar from '@/components/common/Avatar';
import Modal from '@/components/common/Modal';
import { FriendsDataType } from '@/types/friend/friendsDataType';

interface ModalAttendingFriendsProps {
  organizerId?: number;
  friendsList?: FriendsDataType[];
}

const ModalAttendingFriends = ({
  friendsList,
  organizerId
}: ModalAttendingFriendsProps) => {
  const sortedFriendsList = friendsList?.slice().sort((a, b) => {
    if (a.memberId === organizerId) {
      return -1;
    }
    if (b.memberId === organizerId) {
      return 1;
    }
    return 0;
  });

  return (
    <Modal title="참석자">
      <ul className="pb-16 max-h-56 overflow-y-auto">
        {sortedFriendsList?.map(friend =>
          friend.memberId === organizerId ? (
            <li key={friend.memberId} className="flex mb-2 items-start">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  {friend.imageUrl ? (
                    <img
                      src={`${import.meta.env.VITE_IMAGE_SERVER}${
                        friend.imageUrl
                      }`}
                      alt={friend.name}
                    />
                  ) : (
                    <Avatar h="h-12" iconWidth="text-4xl" />
                  )}
                </div>
                <i className="absolute right-0 bottom-0 w-5 h-5 border border-white rounded-full bg-primary flex justify-center items-center">
                  <FaCrown className="text-white text-xs font-bold" />
                </i>
              </div>
              <div className="ml-2 grow">
                <p className="label-text text-inherit text-body2">
                  {friend.name}
                </p>
                <p className="text-inherit text-body3 break-all">
                  {friend.email}
                </p>
              </div>
              <em className="basis-12 text-body3 not-italic px-2 h-6 bg-primary text-white rounded-xl flex justify-center items-center shrink-0">
                주최자
              </em>
            </li>
          ) : (
            <li key={friend.memberId} className="flex mb-2">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  {friend.imageUrl ? (
                    <img
                      src={`${import.meta.env.VITE_IMAGE_SERVER}${
                        friend.imageUrl
                      }`}
                      alt={friend.name}
                    />
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
            </li>
          )
        )}
      </ul>
    </Modal>
  );
};

export default ModalAttendingFriends;
