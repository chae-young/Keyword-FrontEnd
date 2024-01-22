export interface LoginDataType {
  email: string;
  password: string;
}

export interface JoinDataType {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export interface VaildType {
  status: boolean;
  text: string;
}

export type UserToken = {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredDate: number;
};

export type UserInfo = {
  memberId: number;
  name: string;
  email: string;
  phone: string;
  imageUrl: string | null;
  isLogin?: boolean;
};
export interface UserIsLoginDataType {
  tokenResponse: UserToken;
  myInfoResponse: UserInfo;
}
