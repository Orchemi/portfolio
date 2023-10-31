import { axios } from '@/apis/requestClient';
import { IGreeting, IUpdateGreetingRequest } from '@/queries/home';

export const getGreeting = async () => {
  const { data } = await axios.get('/hello');
  return data;
};

export const postGreeting = async ({ title, description, tags }: IGreeting) => {
  const { data } = await axios.post('/hello', { title, description, tags });
  return data;
};

export const updateGreeting = async ({ greeting, id }: IUpdateGreetingRequest) => {
  const { title, description, tags } = greeting;
  const { data } = await axios.put(`/hello/${id}`, { title, description, tags });
  return data;
};
