import useGetFriendsListQuery from '@/hooks/query/search/useGetFriendsListQuery';
import FriendsList from '@/components/Friends/FriendsList';

interface SearchResultListProps {
  keyword: string;
}

const SearchResultList = ({ keyword }: SearchResultListProps) => {
  const { friendsList, friendsListFetchNextPage, friendsListHasNextPage } =
    useGetFriendsListQuery(keyword || '');

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
