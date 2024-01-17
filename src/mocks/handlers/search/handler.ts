import { rest } from 'msw';
import { searchFriendsList } from '@/mocks/data';

// 검색한 친구 리스트
export const getFriendsSearchList = rest.get('/friends', (req, res, ctx) => {
  const keyword = req.url.searchParams.get('keyword');
  const size = Number(req.url.searchParams.get('size')) || 10;
  const page = Number(req.url.searchParams.get('page')) || 1;

  const startIndex = (page - 1) * size;

  const newFriendsList = searchFriendsList.slice(startIndex, startIndex + size);
  const result = newFriendsList.filter(friend => friend.name === keyword);

  return res(ctx.status(200), ctx.json(result));
});

export const postFriendAdd = rest.post(
  '/friends/:memberId',
  async (req, res, ctx) => {
    const { memberId } = req.params;
    // const newFriendsList = searchFriendsList.map(friend => {
    //   if (friend.memberId === Number(memberId)) {
    //     return { ...friend, status: 'REQUSTING' };
    //   }
    //   return friend;
    // });

    if (!memberId) {
      return res(
        ctx.json({
          success: false,
          message: 'error message',
          data: null
        })
      );
    }
    // friendsList = newFriendsList;
    return res(
      ctx.status(200),
      ctx.json({
        isFriendRequest: true
      })
    );
  }
);
