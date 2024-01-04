import { rest } from 'msw';

const chatList = [
  {
    chatRoomId: 1,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구', '김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 2,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 3,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구', '김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 4,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 5,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 6,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구', '김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 7,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 8,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 9,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구', '김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 10,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구']
  },
  {
    chatRoomId: 11,
    scheduleTitle: '크리스마스 모임',
    friendsName: ['김친구', '이친구', '삼친구']
  }
];

// 채팅방 리스트
export const getChatList = rest.get('/chats', (req, res, ctx) => {
  const size = Number(req.url.searchParams.get('size')) || 10;
  const page = Number(req.url.searchParams.get('page')) || 1;

  const startIndex = (page - 1) * size;

  const newChatList = chatList.slice(startIndex, startIndex + size);

  return res(ctx.status(200), ctx.json(newChatList));
});

export const getChatList2 = rest.get('/chats', (req, res, ctx) => {
  const size = Number(req.url.searchParams.get('size')) || 10;
  const page = Number(req.url.searchParams.get('page')) || 1;

  const startIndex = (page - 1) * size;

  const newChatList = chatList.slice(startIndex, startIndex + size);

  return res(ctx.status(200), ctx.json(newChatList));
});
