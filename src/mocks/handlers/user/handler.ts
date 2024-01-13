import { rest } from 'msw';

// 프로필 업데이트 formdata 전송
export const patchProfileImage = rest.patch(
  '/members/profile-image',
  async (req, res, ctx) => {
    const contentType = req.headers.get('Content-Type');
    if (!contentType?.includes('multipart/form-data'))
      return res(
        ctx.json({
          success: false,
          message: 'error message',
          data: null
        })
      );
    return res(
      ctx.status(200),
      ctx.json({
        success: true
      })
    );
  }
);

export const getProfile = rest.get('/members', async (req, res, ctx) =>
  res(
    ctx.json({
      name: '김친구',
      email: 'DevHeaven@naver.com',
      phone: '010-1234-1234',
      imageUrl:
        'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
    })
  )
);

export const patchMyPassword = rest.patch(
  '/members/password',
  async (req, res, ctx) => {
    const { password } = await req.json();
    if (password) return res(ctx.status(200));
  }
);
