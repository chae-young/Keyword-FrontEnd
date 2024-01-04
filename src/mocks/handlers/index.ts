import { postSignIn, postSignUp } from './auth/handler';
import { getChatList } from './chat/handler';
import { getFriendsSearchList, postFriendAdd } from './search/handler';

const handlers = [
  getChatList,
  postSignIn,
  postSignUp,
  getFriendsSearchList,
  postFriendAdd
];
export default handlers;
