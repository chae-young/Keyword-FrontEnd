import ChatList from '@/components/Chatting/ChatList';
import SEO from '@/components/SEO';
import TopTitle from '@/components/common/TopTitle';

const ChatPage = () => (
  <>
    <SEO title="채팅" description="일정에 포함된 친구들끼리 채팅해요" />
    <TopTitle title="채팅" alarm />
    <ChatList />
  </>
);

export default ChatPage;
