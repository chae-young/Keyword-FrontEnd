import { rest } from 'msw';

let friendsList = [
  {
    memberId: 1,
    name: '김친구',
    email: 'DevHeaven@naver.com',
    profileImageUrl:
      'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    status: 'FRIEND'
  },
  {
    memberId: 2,
    name: '이친구',
    email: 'DevHeaven@naver.com',
    profileImageUrl:
      'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    status: 'REQUEST'
  },
  {
    memberId: 3,
    name: '김친구',
    email: 'DevHeaven@naver.com',
    profileImageUrl:
      'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    status: 'REQUEST'
  }
  //   {
  //     memberId: 4,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 5,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 6,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 7,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 8,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 9,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 10,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 11,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 12,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 13,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 14,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 15,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 16,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 17,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 18,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 19,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   },
  //   {
  //     memberId: 20,
  //     name: '김친구',
  //     email: 'DevHeaven@naver.com',
  //     profileImageUrl:
  //       'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  //   }
];

// 검색한 친구 리스트
export const getFriendsSearchList = rest.get('/friends', (req, res, ctx) => {
  const keyword = req.url.searchParams.get('keyword');
  const size = Number(req.url.searchParams.get('size')) || 10;
  const page = Number(req.url.searchParams.get('page')) || 1;

  const startIndex = (page - 1) * size;

  const newFriendsList = friendsList.slice(startIndex, startIndex + size);
  const result = newFriendsList.filter(friend => friend.name === keyword);

  return res(ctx.status(200), ctx.json(result));
});

export const postFriendAdd = rest.post(
  '/friends/:memberId',
  async (req, res, ctx) => {
    const { memberId } = req.params;
    const newFriendsList = friendsList.map(friend => {
      if (friend.memberId === Number(memberId)) {
        return { ...friend, status: 'REQUSTING' };
      }
      return friend;
    });

    if (!memberId) {
      return res(
        ctx.json({
          success: false,
          message: 'error message',
          data: null
        })
      );
    }
    friendsList = newFriendsList;
    return res(
      ctx.status(200),
      ctx.json({
        isFriendRequest: true
      })
    );
  }
);
