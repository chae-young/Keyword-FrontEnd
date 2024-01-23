import { useEffect, useRef, useState } from 'react';
import * as StompJs from '@stomp/stompjs';
// import SockJS from 'sockjs-client/dist/sockjs';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { IoMdArrowRoundUp } from '@react-icons/all-files/io/IoMdArrowRoundUp';
import { ChatDataType } from '@/types/chatting/chatDataType';
import TopTitle from '@/components/common/TopTitle';

const ChatRoom = () => {
  const { roomId } = useParams();
  const client = useRef<StompJs.Client | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatDataType[]>([]);
  const [message, setMessage] = useState('');

  const subscribe = () => {
    client.current?.subscribe(`/sub/chats/room/${roomId}`, ({ body }) => {
      setChatMessages(_chatMessages => [..._chatMessages, JSON.parse(body)]);
    });
  };

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: 'ws://localhost:8080/socket.io', // 웹소켓 서버로 직접 접속
      connectHeaders: {
        Authorization: 'spring-chat-auth-token'
      },
      debug(str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      // 연결시 구독 시작
      onConnect: () => {
        subscribe();
      },
      onStompError: frame => {
        console.error(frame);
      }
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current?.deactivate();
  };

  const publish = (msg: string) => {
    console.log(client.current?.connected);
    // if (!client.current?.connected) {
    //   return;
    // }
    // 현재 시간을 가져오기
    const currentDate = moment();
    const formattedDate = currentDate.format('YYYY-MM-DD[T]HH:mm');
    client.current?.publish({
      destination: '/pub/chat/message`',
      body: JSON.stringify({
        roomId,
        senderId: 2,
        content: msg,
        sendAt: formattedDate
      })
    });

    setMessage('');
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  return (
    <>
      <TopTitle title="??" back />
      <section className="">
        {chatMessages && chatMessages.length > 0 && (
          <ul>
            {chatMessages.map((chatMessage, index) => (
              <li key={index}>{chatMessage.message}</li>
            ))}
          </ul>
        )}
        <div className="fixed max-w-default bottom-0 left-0 right-0 w-full m-auto">
          <input
            type="text"
            placeholder="메시지를 입력하세요."
            className="w-full h-14 pl-5"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.code === 'Enter' && publish(message)}
          />
          <button
            type="button"
            onClick={() => publish(message)}
            className="absolute right-0 bottom-0 h-14 w-14 flex justify-center items-center"
          >
            <span className="sr-only">보내기</span>
            <IoMdArrowRoundUp className="text-xl" />
          </button>
        </div>
      </section>
    </>
  );
};

export default ChatRoom;
