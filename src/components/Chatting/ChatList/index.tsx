import React from 'react';
import ChatItem from './Chatitem/indext';
import useGetChatListQuery from '@/hooks/query/chat/useGetChatListQuery';
import useInfinite from '@/hooks/useInfinite';

const ChatList = () => {
  const { chatList, chatListFetchNextPage } = useGetChatListQuery();
  const { lastElement } = useInfinite(chatListFetchNextPage);

  return (
    <ul className="[&>*:last-child]:border-0">
      {chatList?.pages.map(page =>
        page.map(list => (
          <ChatItem
            key={list.chatRoomId}
            chatRoomId={list.chatRoomId}
            friendsName={list.friendsName}
            scheduleTitle={list.scheduleTitle}
          />
        ))
      )}
      {lastElement()}
    </ul>
  );
};

export default ChatList;
