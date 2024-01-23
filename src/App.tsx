import { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingPopup from './components/common/Loading/LoadingPopup';

const HomePage = lazy(async () => import('./pages/HomePage'));
const MyPage = lazy(async () => import('./pages/mypage'));
const InnerCon = lazy(async () => import('./components/common/InnerCon'));
const LoginPage = lazy(async () => import('./pages/auth/LoginPage'));
const JoinPage = lazy(async () => import('./pages/auth/JoinPage'));
const SearchPage = lazy(async () => import('./pages/search'));
const SearchResultPage = lazy(
  async () => import('./pages/search/SearchResultPage')
);
const MainLayout = lazy(async () => import('./components/common/MainLayout'));
const LayoutWithHeader = lazy(
  async () => import('./components/common/LayoutWithHeader')
);
const ProfileEditPage = lazy(
  async () => import('./pages/mypage/ProfileEditPage')
);
const MyFriendsPage = lazy(async () => import('./pages/mypage/MyFriendsPage'));
const RequestedFriendsPage = lazy(
  async () => import('./pages/mypage/RequestdFriendsPage')
);
const ChatDetail = lazy(async () => import('./pages/ChatPage/ChatDetail'));
const ScheduleCreatePage = lazy(
  async () => import('./pages/schedule/ScheduleCreatePage')
);
const PasswordEditPage = lazy(
  async () => import('./pages/mypage/PasswordEditPage')
);
const ScheduleDetailPage = lazy(
  async () => import('./pages/schedule/ScheduleDetailPage')
);
const ScheduleEditPage = lazy(
  async () => import('./pages/schedule/ScheduleEditPage')
);
const NotLoginPage = lazy(async () => import('./pages/auth/NotLoginPage'));
const ChatPage = lazy(async () => import('./pages/ChatPage'));
const GuardedRoute = lazy(async () => import('./GuardedRoute'));
const NaverLoginPage = lazy(async () => import('./pages/auth/NaverLoginPage'));

const App = () => (
  <Suspense fallback="">
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
  </Suspense>
);
export default App;
