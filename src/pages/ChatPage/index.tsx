import React from 'react';
import { Link } from 'react-router-dom';
import TopTitle from '@/components/common/TopTitle';

const ChatPage = () => (
  <ul>
    <li>
      <Link to="/chat/1">크리스마스 모임</Link>
    </li>
  </ul>
);

export default ChatPage;
