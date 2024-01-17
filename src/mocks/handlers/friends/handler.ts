import { rest } from 'msw';
import { friendsList } from '@/mocks/data';

export const getMyFriendsList = rest.get('/friends/state', (req, res, ctx) => {
  // const state = req.url.searchParams.get('friend-state');
  const size = Number(req.url.searchParams.get('size')) || 10;
  const page = Number(req.url.searchParams.get('page')) || 1;

  const startIndex = (page - 1) * size;

  const newFriendsList = friendsList.slice(startIndex, startIndex + size);
  // const result = newFriendsList.filter(friend => friend.name === keyword);

  return res(ctx.status(200), ctx.json(newFriendsList));
});
export const deleteMyFriend = rest.delete(
  '/friends/:memberReqId',
  (req, res, ctx) => {
    const { memberReqId } = req.params;
    if (memberReqId) {
      return res(
        ctx.status(200),
        ctx.json({
          isFriendDelete: true
        })
      );
    }
    return res(
      ctx.json({
        errorMessage: '해당 친구를 찾을 수 없습니다.'
      })
    );
  }
);
export const patchMyFriendReq = rest.patch(
  '/friends/handle/:memberReqId',
  async (req, res, ctx) => {
    // const { memberReqId } = req.params;
    const { friendState } = await req.json();
    if (friendState === 'ACCEPTED') {
      return res(
        ctx.status(200),
        ctx.json({
          friendState: 'ACCEPTED'
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        friendState: 'ACCEPTED'
      })
    );
  }
);
