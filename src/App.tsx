import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from 'react-helmet-async';
import MyPage from './pages/mypage';
import InnerCon from './components/common/InnerCon';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import JoinPage from './pages/auth/JoinPage';
import SearchPage from './pages/search';
import SearchResultPage from './pages/search/SearchResultPage';
import MainLayout from './components/common/MainLayout';
import LayoutWithHeader from './components/common/LayoutWithHeader';
import ProfileEditPage from './pages/mypage/ProfileEditPage';
import MyFriendsPage from './pages/mypage/MyFriendsPage';
import RequestedFriendsPage from './pages/mypage/RequestdFriendsPage';
import ChatDetail from './pages/ChatPage/ChatDetail';
import ScheduleCreatePage from './pages/schedule/ScheduleCreatePage';
import PasswordEditPage from './pages/mypage/PasswordEditPage';
import ScheduleDetailPage from './pages/schedule/ScheduleDetailPage';
import ScheduleEditPage from './pages/schedule/ScheduleEditPage';
import NotLoginPage from './pages/auth/NotLoginPage';
import ChatPage from './pages/ChatPage';
import GuardedRoute from './GuardedRoute';
import NaverLoginPage from './pages/auth/NaverLoginPage';

const App = () => (
  <>
    <Routes>
      <Route>
        {/* 미로그인 접근 페이지 */}
        <Route path="/auth" element={<NotLoginPage />} />
        <Route path="/auth/redirect" element={<NaverLoginPage />} />
        <Route element={<InnerCon />}>
          <Route path="/auth" element={<Outlet />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="join" element={<JoinPage />} />
          </Route>
        </Route>
        {/* 로그인 접근 페이지 */}
        <Route element={<InnerCon />}>
          <Route element={<GuardedRoute />}>
            {/* 홈 */}
            <Route
              path="/"
              element={
                <LayoutWithHeader>
                  <HomePage />
                </LayoutWithHeader>
              }
            />
            {/* 1.네비로 라우팅 하는 페이지들 */}
            <Route element={<MainLayout />}>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search/result" element={<SearchResultPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/mypage" element={<MyPage />} />
            </Route>

            {/* 3.일정 */}
            <Route path="/schedule" element={<Outlet />}>
              <Route path="create" element={<ScheduleCreatePage />} />
              <Route path=":id" element={<ScheduleDetailPage />} />
              <Route path=":id/edit" element={<ScheduleEditPage />} />
              {/* <Route path="modify" element={<CreateTodoPage />} /> */}
              {/* <Route path="join" element={<JoinPage />} />   */}
            </Route>

            {/* 4.마이페이지 */}
            <Route path="/mypage" element={<Outlet />}>
              <Route path="edit" element={<ProfileEditPage />} />
              <Route path="passwordEdit" element={<PasswordEditPage />} />
              <Route path="myFriends" element={<MyFriendsPage />} />
              <Route path="requested" element={<RequestedFriendsPage />} />
            </Route>
          </Route>
        </Route>
        <Route element={<GuardedRoute />}>
          {/* 5.채팅 */}
          <Route path="chat" element={<Outlet />}>
            <Route path=":roomId" element={<ChatDetail />} />
          </Route>
        </Route>

        {/* 404 처리 */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Route>
    </Routes>
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </>
);
export default App;
