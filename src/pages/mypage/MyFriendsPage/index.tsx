import React from 'react';
import TopTitle from '@/components/common/TopTitle';
import MyFriends from '@/components/Friends/MyFriends';

const MyFriendsPage = () => (
  <>
    <TopTitle back title="내 친구 목록" />
    <MyFriends />
  </>
);

export default MyFriendsPage;
