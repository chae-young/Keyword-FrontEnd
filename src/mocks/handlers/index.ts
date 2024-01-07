import { postSignIn, postSignUp } from './auth/handler';
import { getChatList } from './chat/handler';
import { getFriendsSearchList, postFriendAdd } from './search/handler';
import { patchProfileImage } from './user/handler';

const handlers = [
  getChatList,
  postSignIn,
  postSignUp,
  getFriendsSearchList,
  postFriendAdd,
  patchProfileImage
];
export default handlers;
