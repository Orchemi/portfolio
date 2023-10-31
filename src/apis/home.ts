import { axios } from '@/apis/requestClient';
import { IPostGreetingResponse } from '@/queries/home';

export const getGreeting = async () => {
  const { data } = await axios.get('/hello');
  return data;
};

export const postGreeting = async ({ title, description, tags }: IPostGreetingResponse) => {
  const { data } = await axios.post('/hello', { title, description, tags });
  return data;
};
