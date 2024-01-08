import { postSignIn, postSignUp } from './auth/handler';
import { getChatList } from './chat/handler';
import {
  deleteMyFriend,
  getMyFriendsList,
  patchMyFriendReq
} from './friends/handler';
import { getFriendsSearchList, postFriendAdd } from './search/handler';
import { patchProfileImage } from './user/handler';

const handlers = [
  getChatList,
  postSignIn,
  postSignUp,
  getFriendsSearchList,
  getMyFriendsList,
  postFriendAdd,
  patchMyFriendReq,
  deleteMyFriend,
  patchProfileImage
];
export default handlers;
