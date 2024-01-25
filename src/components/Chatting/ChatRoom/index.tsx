import { useEffect, useRef, useState } from 'react';
import * as StompJs from '@stomp/stompjs';
// import SockJS from 'sockjs-client/dist/sockjs';
import { useParams } from 'react-router-dom';
import { IoMdArrowRoundUp } from '@react-icons/all-files/io/IoMdArrowRoundUp';
import { ChatNewDataType } from '@/types/chatting/chatDataType';
import TopTitle from '@/components/common/TopTitle';
import { ACCESS_TOKEN } from '@/constants/auth';
import useGetChatRoomQuery from '@/hooks/query/chat/useGetChatRoomQuery';
import useUserState from '@/hooks/recoil/useUserState';
import { formatServerSendDate } from '@/util/\bdate';
import Avatar from '@/components/common/Avatar';

const ChatRoom = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const { roomId } = useParams();
  const { userState } = useUserState();
  const { chatPrevMessage } = useGetChatRoomQuery(Number(roomId));
  const client = useRef<StompJs.Client | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatNewDataType[]>([]);
  const [message, setMessage] = useState('');

  // 채팅방 구독
  const subscribe = () => {
    client.current?.subscribe(`/sub/chats/room/${roomId}`, ({ body }) => {
      setChatMessages(_chatMessages => [..._chatMessages, JSON.parse(body)]);
    });
  };
  // ws://3.34.183.67:8080/stomp/chat
  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: 'wss://keyword2.store/stomp/chat', // 웹소켓 서버로 직접 접속
      connectHeaders: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
      },
      debug(str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      // 연결시 구독 시작
      onConnect: () => {
        console.log('연결');
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
    if (!client.current?.connected) {
      return;
    }

    client.current?.publish({
      destination: '/pub/chats/message',
      body: JSON.stringify({
        roomId: Number(roomId),
        sender: userState.name,
        senderId: userState.memberId,
        content: msg,
        ImageUrl: userState.imageUrl,
        sendAt: formatServerSendDate(new Date())
      })
    });
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      publish(message);
      setMessage('');
    }
  };

  const handleChangeChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [chatMessages, scrollRef.current]);
  return (
    <>
      <TopTitle title="그룹채팅" back />
      <section className="pt-20">
        <ul
          className="px-2
        "
        >
          {/* 이전 메시지 */}
          {chatPrevMessage && chatPrevMessage?.length > 0
            ? chatPrevMessage.map((prevMsg, index) =>
                prevMsg.sender === userState.name ? (
                  <li key={index}>
                    <div className="chat chat-end">
                      <div className="chat-bubble">{prevMsg.message}</div>
                    </div>
                  </li>
                ) : (
                  <li key={index}>
                    <div className="chat chat-start">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full bg-stone-500">
                          {prevMsg.imageUrl ? (
                            <img
                              alt={prevMsg.imageUrl}
                              src={`${import.meta.env.VITE_IMAGE_SERVER}${
                                prevMsg.imageUrl
                              }`}
                            />
                          ) : (
                            <Avatar h="h-10" />
                          )}
                        </div>
                      </div>
                      <div className="chat-header">{prevMsg.sender}</div>
                      <div className="chat-bubble">{prevMsg.message}</div>
                    </div>
                  </li>
                )
              )
            : ''}
          {/* 새 메시지 */}
          {chatMessages.map((newMsg, index) =>
            newMsg.senderId === userState.memberId ? (
              <li key={index}>
                <div className="chat chat-end">
                  <div className="chat-bubble">{newMsg.content}</div>
                </div>
              </li>
            ) : (
              <li key={index}>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-stone-500">
                      {newMsg.imageUrl ? (
                        <img
                          alt={`${import.meta.env.VITE_IMAGE_SERVER}${
                            newMsg.imageUrl
                          }`}
                          src={newMsg.imageUrl}
                        />
                      ) : (
                        <Avatar h="h-10" />
                      )}
                    </div>
                  </div>
                  <div className="chat-header">{newMsg.sender}</div>
                  <div className="chat-bubble">{newMsg.content}</div>
                </div>
              </li>
            )
          )}
        </ul>

        <div className="fixed max-w-default bottom-0 left-0 right-0 w-full m-auto">
          <input
            type="text"
            placeholder="메시지를 입력하세요."
            className="w-full h-14 pl-5"
            value={message}
            onChange={handleChangeChat}
            onKeyDown={handleKeyDown}
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
        <div ref={scrollRef} />
      </section>
    </>
  );
};

export default ChatRoom;
