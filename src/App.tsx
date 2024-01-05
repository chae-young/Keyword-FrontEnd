import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ChatPage from './pages/ChatPage';
import MyPage from './pages/MyPage';
import InnerCon from './components/common/InnerCon';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import JoinPage from './pages/auth/JoinPage';
import SearchPage from './pages/search';
import SearchResultPage from './pages/search/SearchResultPage';
import MainLayout from './components/common/MainLayout';
import LayoutWithHeader from './components/common/LayoutWithHeader';

interface AppProps {
  children?: React.ReactNode;
}

const App = ({ children }: AppProps) => (
  <RecoilRoot>
    <Routes>
      <Route>
        <Route element={<InnerCon />}>
          {/* 홈 */}
          <Route element={<LayoutWithHeader />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          {/* 1.네비로 라우팅 하는 페이지들 */}
          <Route element={<MainLayout />}>
            {/* 검색 */}
            <Route path="/search" element={<SearchPage />}>
              <Route path="result" element={<SearchResultPage />} />
            </Route>
            {/* 채팅 */}
            <Route path="/chat" element={<ChatPage />} />
            {/* 마이페이지 */}
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          {/* 2.회원 */}
          <Route path="/auth" element={<Outlet />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="join" element={<JoinPage />} />
          </Route>
          {/* 3.일정 */}
        </Route>
        {/* 404 처리 */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Route>
    </Routes>
  </RecoilRoot>
);

export default App;
