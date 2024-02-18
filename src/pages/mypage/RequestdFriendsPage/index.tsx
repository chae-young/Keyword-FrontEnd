import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TopTitle from '@/components/common/TopTitle';
import RequestedFriends from '@/components/Friends/RequestedFriends';
import RequestFriends from '@/components/Friends/RequestFriends';

const RequestedFriendsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryIsTab = Number(searchParams.get('tab'));
  const queryIsNoticeId = Number(searchParams.get('noticeId'));
  const [_, clickTab] = useState(0);

  const category = [
    { id: 1, name: '내가 요청 한 친구' },
    { id: 2, name: '내가 요청 받은 친구' }
  ];

  const handleTab = (idx: number) => {
    clickTab(idx);
    navigate(`?tab=${idx}`);
  };
  return (
    <>
      <TopTitle title="내 친구 요청" back />
      <ul
        className={`flex -my-5 -mx-5 relative
      before:content-[''] before:absolute before:w-1/2 before:bg-black before:h-[2px] before:bottom-0 before:transition-transform 
      ${queryIsTab ? 'before:translate-x-full' : 'before:translate-x-0'}
`}
      >
        {category.map((el, idx) => (
          <li
            key={el.id}
            className="flex-1 text-center  border-b-[1px] border-gray2"
          >
            <button
              onClick={() => handleTab(idx)}
              type="button"
              className={`text-body2  py-5 ${
                idx === queryIsTab ? 'text-bk font-bold' : 'text-gray4'
              }`}
            >
              {el.name}
            </button>
          </li>
        ))}
      </ul>
      {String(queryIsTab) === '1' ? (
        <RequestedFriends noticeId={queryIsNoticeId} />
      ) : (
        <RequestFriends />
      )}
    </>
  );
};

export default RequestedFriendsPage;
