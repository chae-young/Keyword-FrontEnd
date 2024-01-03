import { postSignIn, postSignUp } from './auth/handler';
import { getChatList } from './chat/handler';
import getFriendsSearchList from './search/handler';

const handlers = [getChatList, postSignIn, postSignUp, getFriendsSearchList];
export default handlers;
