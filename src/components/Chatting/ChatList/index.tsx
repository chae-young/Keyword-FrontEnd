import NoDataText from '@/components/common/NoDataText';
import ChatItem from './Chatitem/indext';
import useGetChatListQuery from '@/hooks/query/chat/useGetChatListQuery';
import useInfinite from '@/hooks/useInfinite';

const ChatList = () => {
  const { chatList, chatListFetchNextPage, chatListhasNextPage } =
    useGetChatListQuery();
  const { lastElement } = useInfinite(
    chatListFetchNextPage,
    chatListhasNextPage
  );

  return (
    <>
      {chatList?.pages[0].length === 0 && (
        <NoDataText text="모임 채팅이 없습니다." />
      )}
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
    </>
  );
};

export default ChatList;
