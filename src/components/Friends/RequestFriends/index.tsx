import { REQUEST } from '@/constants/friends';
import FriendsList from '../FriendsList';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';

const RequestFriends = () => {
  const { friendsList, friendsListFetchNextPage, friendsListHasNextPage } =
    useGetMyFriendsQuery(REQUEST);

  return (
    <section className="pt-5">
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

export default RequestFriends;
