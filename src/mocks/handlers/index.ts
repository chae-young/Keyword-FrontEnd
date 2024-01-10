import { postSignIn, postSignUp } from './auth/handler';
import { getChatList } from './chat/handler';
import {
  deleteMyFriend,
  getMyFriendsList,
  patchMyFriendReq
} from './friends/handler';
import { getMyScheduleList } from './schedule/handler';
import { getFriendsSearchList, postFriendAdd } from './search/handler';
import { getProfile, patchProfileImage } from './user/handler';

const handlers = [
  getChatList,
  postSignIn,
  postSignUp,
  getFriendsSearchList,
  getMyFriendsList,
  postFriendAdd,
  patchMyFriendReq,
  deleteMyFriend,
  getMyScheduleList,
  patchProfileImage,
  getProfile
];
export default handlers;
