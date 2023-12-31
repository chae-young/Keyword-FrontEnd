import postSignIn from './auth/handler';
import { getChatList } from './chat/handler';

const handlers = [getChatList, postSignIn];
export default handlers;
