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
  console.log(friendsName);

  return (
    <li className="border-b py-4">
      <Link to={`/chat/${chatRoomId}`}>
        <b>{scheduleTitle}</b>
        <div className="mt-4">
          {friendsName.map(name => (
            <span className="text-body2 text-gray4">{name}</span>
          ))}
        </div>
      </Link>
    </li>
  );
};

export default ChatItem;
