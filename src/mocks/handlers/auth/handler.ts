import { rest } from 'msw';

// 로그인
export const postSignIn = rest.post(
  '/members/signin',
  async (req, res, ctx) => {
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
  }
);

// 회원가입
export const postSignUp = rest.post('/members/signup', async (req, res, ctx) =>
  res(ctx.status(200))
);
