import { Link } from 'react-router-dom';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import TopTitle from '@/components/common/TopTitle';
import Profile from '@/components/Profile';
import AccountClose from '@/components/Mypage/AccountClose';
import SEO from '@/components/SEO';

const MyPage = () => (
  <>
    <SEO title="마이페이지" />
    <TopTitle title="마이페이지" alarm />
    <Profile />
    <ul className="mt-8 -mx-5">
      <li className="border-b border-gray2 px-5">
        <Link to="myFriends" className="flex w-full justify-between py-6 ">
          내 친구 목록 <IoIosArrowForward className="text-bk" />
        </Link>
      </li>
      <li className="border-b border-gray2 px-5">
        <Link to="requested" className="flex w-full justify-between py-6 ">
          내 친구 요청 목록 <IoIosArrowForward className="text-bk" />
        </Link>
      </li>
      <li className="border-b border-gray2 px-5">
        <Link to="passwordEdit" className="flex w-full justify-between py-6 ">
          비밀번호 변경 <IoIosArrowForward className="text-bk" />
        </Link>
      </li>
    </ul>
    <AccountClose />
  </>
);

export default MyPage;
