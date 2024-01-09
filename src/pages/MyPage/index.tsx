import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import TopTitle from '@/components/common/TopTitle';

const MyPage = () => (
  <>
    <TopTitle title="마이페이지" alarm />
    <div className="mt-4 flex justify-between">
      <div className="avatar items-center">
        <div className="w-20 rounded-full mr-4">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="김친구"
          />
        </div>
        <p>김친구</p>
      </div>
      <Link to="edit" className="text-body2 text-gray4 flex items-center">
        내 정보 수정 <IoIosArrowForward className="text-body2" />
      </Link>
    </div>
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
    </ul>
    <button type="button" className="text-body3 mt-8">
      로그아웃
    </button>
  </>
);

export default MyPage;
