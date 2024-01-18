import { axios } from '@/apis/requestClient';
import { IPostSignUpRequest, IPostSignUpResponse } from '@/queries/auth';

export const postSignUp = async ({ name, email, password }: IPostSignUpRequest): Promise<IPostSignUpResponse> => {
  const { data } = await axios.post('/auth/register', { name, email, password });
  return data;
};
