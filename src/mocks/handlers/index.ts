import { postSignIn, postSignUp } from './auth/handler';
import { getChatList } from './chat/handler';

const handlers = [getChatList, postSignIn, postSignUp];
export default handlers;
