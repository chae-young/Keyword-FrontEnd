import useGetFriendsListQuery from '@/hooks/query/search/useGetFriendsListQuery';
import FriendsList from '@/components/Friends/FriendsList';
import UserItem from '@/components/common/Skeleton/UserItem';

interface SearchResultListProps {
  keyword: string;
}

const SearchResultList = ({ keyword }: SearchResultListProps) => {
  const {
    friendsList,
    friendsListFetchNextPage,
    friendsListHasNextPage,
    friendsListIsLoading
  } = useGetFriendsListQuery(keyword || '');
  if (friendsListIsLoading)
    return (
      <div className="pt-7">
        <UserItem />
      </div>
    );
  return (
    <section>
      {friendsList && (
        <FriendsList
          lists={friendsList}
          FetchNextPage={friendsListFetchNextPage}
          hasNextPage={friendsListHasNextPage}
        />
      )}
    </section>
  );
};

export default SearchResultList;
