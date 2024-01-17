import { InfiniteData } from '@tanstack/react-query';
import { FriendsDataType } from '@/types/friend/friendsDataType';
import FiendsItem from '../FriendsItem';
import useInfinite from '@/hooks/useInfinite';
import NoResultText from '@/components/common/NoDataText';

interface FriendsListProps {
  lists: InfiniteData<FriendsDataType[], unknown>;
  FetchNextPage: any;
  del?: boolean;
  reqCheck?: boolean;
}

const FriendsList = ({
  lists,
  FetchNextPage,
  del,
  reqCheck
}: FriendsListProps) => {
  const { lastElement } = useInfinite(FetchNextPage);

  return (
    <ul className="pt-5">
      {lists.pages.map(page =>
        lists.pages[0].length ? (
          page.map(list => (
            <FiendsItem
              key={list.memberId}
              memberId={list.memberId}
              name={list.name}
              email={list.email}
              status={list.status}
              profileImageUrl={list.profileImageUrl}
              del={del}
              reqCheck={reqCheck}
            />
          ))
        ) : (
          <NoResultText text="검색결과가 없습니다." key="noText" />
        )
      )}

      {lastElement()}
    </ul>
  );
};

export default FriendsList;
