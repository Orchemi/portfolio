import { axios } from '@/apis/requestClient';
import { IPostSignUpRequest, IPostSignUpResponse } from '@/interfaces/auth/IPostSignUp';

// 회원가입
export const postSignUp = async ({ name, email, password }: IPostSignUpRequest): Promise<IPostSignUpResponse> => {
  const { data } = await axios.post('/auth/register', { name, email, password });
  return data;
};
