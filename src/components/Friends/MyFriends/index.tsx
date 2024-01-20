import { ACCEPT } from '@/constants/friends';
import FriendsList from '../FriendsList';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';

const MyFriends = () => {
  const { friendsList, friendsListFetchNextPage, friendsListHasNextPage } =
    useGetMyFriendsQuery(ACCEPT);

  return (
    <section>
      {friendsList && (
        <FriendsList
          lists={friendsList}
          FetchNextPage={friendsListFetchNextPage}
          hasNextPage={friendsListHasNextPage}
          del
        />
      )}
    </section>
  );
};

export default MyFriends;
