import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import SearchPage from './pages/SearchPage';
import ChatPage from './pages/ChatPage';
import MyPage from './pages/MyPage';
import InnerCon from './components/common/InnerCon';
import HomePage from './pages/HomePage';
import ChatDetail from './pages/ChatPage/ChatDetail';

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => (
  <RecoilRoot>
    <InnerCon>
      {' '}
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:id" element={<ChatDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          {/* 404 처리 */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Route>
      </Routes>
      {children}
    </InnerCon>
  </RecoilRoot>
);

export default App;
