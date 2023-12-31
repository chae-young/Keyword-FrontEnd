import { rest } from 'msw';

// 채팅방 리스트
const postSignIn = rest.post('/members/signin', async (req, res, ctx) => {
  const { email, password } = await req.json();
  if (email && password) {
    return res(
      ctx.status(200),
      ctx.json({
        grantType: 'Bearer',
        accessToken: 'encoded_accessToken',
        refreshToken: 'encoded_refreshToken',
        accessTokenExpireDate: 1000000000000
      })
    );
  }
  return res(ctx.status(401), ctx.json({}));
});

export default postSignIn;
