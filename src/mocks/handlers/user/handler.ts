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

export const postFriendAdd = '';
