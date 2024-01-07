import { postSignIn, postSignUp } from './auth/handler';
import { getChatList } from './chat/handler';
import { deleteMyFriend, getMyFriendsList } from './friends/handler';
import { getFriendsSearchList, postFriendAdd } from './search/handler';
import { patchProfileImage } from './user/handler';

const handlers = [
  getChatList,
  postSignIn,
  postSignUp,
  getFriendsSearchList,
  getMyFriendsList,
  postFriendAdd,
  deleteMyFriend,
  patchProfileImage
];
export default handlers;
