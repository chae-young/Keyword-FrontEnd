import React from 'react';
import FriendsList from '../FriendsList';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';

const MyFriends = () => {
  const { friendsList, friendsListFetchNextPage } =
    useGetMyFriendsQuery('accept');

  return (
    <section>
      {friendsList && (
        <FriendsList
          lists={friendsList}
          FetchNextPage={friendsListFetchNextPage}
        />
      )}
    </section>
  );
};

export default MyFriends;
