import { NavLink } from 'react-router-dom';
import { AiFillHome } from '@react-icons/all-files/ai/AiFillHome';
import { RiSearchLine } from '@react-icons/all-files/ri/RiSearchLine';
import { IoChatboxEllipses } from '@react-icons/all-files/io5/IoChatboxEllipses';
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt';

const navList = [
  {
    id: 1,
    title: '홈',
    path: '/',
    icon: <AiFillHome className="text-xl mb-1" />
  },
  {
    id: 2,
    title: '검색',
    path: '/search',
    icon: <RiSearchLine className="text-xl mb-1" />
  },
  {
    id: 3,
    title: '채팅',
    path: '/chat',
    icon: <IoChatboxEllipses className="text-xl mb-1" />
  },
  {
    id: 4,
    title: '마이페이지',
    path: '/myPage',
    icon: <FaUserAlt className="text-xl mb-1" />
  }
];

const Nav = () => {
  const commonStyle = 'w-14 flex flex-col items-center text-body3';

  return (
    <nav className="fixed left-0 bottom-0 right-0 m-auto max-w-default bg-white h-14">
      <div className="flex items-center justify-around h-full">
        {navList.map(nav => (
          <NavLink
            key={nav.id}
            to={nav.path}
            className={({ isActive }) =>
              isActive ? `${commonStyle} text-bk` : `${commonStyle} text-gray3`
            }
          >
            {nav.icon}
            {nav.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
