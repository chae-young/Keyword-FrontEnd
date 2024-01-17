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
}: ChatItemProps) => (
  <li className="border-b py-4">
    <Link to={`/chat/${chatRoomId}`}>
      <b>{scheduleTitle}</b>
      <p className="text-body2 text-gray4 mt-4">{friendsName}</p>
    </Link>
  </li>
);

export default ChatItem;
