import { Link } from 'react-router-dom';

interface ChatItemProps {
  chatRoomId: number;
  scheduleTitle: string;
  friendsName: string[];
}

const ChatItem = ({
  chatRoomId,
  scheduleTitle,
  friendsName
}: ChatItemProps) => {
  const MAX_FRIENDS_TO_DISPLAY = 4;

  const displayedFriends = friendsName.slice(0, MAX_FRIENDS_TO_DISPLAY);
  const additionalFriendsCount = friendsName.length - MAX_FRIENDS_TO_DISPLAY;

  const formattedFriendsList = displayedFriends.join(',');
  return (
    <li className="border-b py-4">
      <Link to={`/chat/${chatRoomId}`} className="block">
        <b>{scheduleTitle}</b>
        <div className="mt-4">
          <span className="text-body2 text-gray4">{formattedFriendsList}</span>
          {additionalFriendsCount > 0 && (
            <span className="text-body2 text-gray4">{`외 ${additionalFriendsCount}명`}</span>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ChatItem;
