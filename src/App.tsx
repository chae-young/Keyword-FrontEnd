import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ChatPage from './pages/ChatPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/mypage" element={<MyPage />} />
          {/* 404 처리 */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
