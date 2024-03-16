import { axios } from '@/apis/requestClient';
import { IPostLoginRequest, IPostLoginResponse } from '@/interfaces/auth/IPostLogin';
import { IPostSignUpRequest, IPostSignUpResponse } from '@/interfaces/auth/IPostSignUp';

// 회원가입
export const postSignUp = async ({ name, email, password }: IPostSignUpRequest): Promise<IPostSignUpResponse> => {
  const { data } = await axios.post('/auth/register', { name, email, password });
  return data;
};

// 로그인
export const postLogin = async ({ email, password }: IPostLoginRequest): Promise<IPostLoginResponse> => {
  const { data } = await axios.post('/auth/login', { email, password });
  return data;
};
