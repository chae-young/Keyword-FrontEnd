import NoDataText from '@/components/common/NoDataText';
import ChatItem from './Chatitem/indext';
import useGetChatListQuery from '@/hooks/query/chat/useGetChatListQuery';
import useInfinite from '@/hooks/useInfinite';

const ChatList = () => {
  const { chatList, chatListFetchNextPage } = useGetChatListQuery();
  const { lastElement } = useInfinite(chatListFetchNextPage);

  return (
    <ul className="[&>*:last-child]:border-0">
      {chatList?.pages.map(page =>
        page.length ? (
          page.map(list => (
            <ChatItem
              key={list.chatRoomId}
              chatRoomId={list.chatRoomId}
              friendsName={list.friendsName}
              scheduleTitle={list.scheduleTitle}
            />
          ))
        ) : (
          <NoDataText text="모임 채팅이 없습니다" key={0} />
        )
      )}
      {chatList && chatList?.pages[0].length >= 10 && lastElement()}
    </ul>
  );
};

export default ChatList;
