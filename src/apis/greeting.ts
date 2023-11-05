import { axios } from '@/apis/requestClient';
import { IDeleteGreetingRequest, IGreeting, IUpdateGreetingRequest } from '@/queries/greeting';

export const getGreeting = async () => {
  const { data } = await axios.get('/greeting');
  return data;
};

export const postGreeting = async ({ title, description, tags }: IGreeting) => {
  const { data } = await axios.post('/greeting', { title, description, tags });
  return data;
};

export const updateGreeting = async ({ greeting, id }: IUpdateGreetingRequest) => {
  const { title, description, tags } = greeting;
  const { data } = await axios.put(`/greeting/${id}`, { title, description, tags });
  return data;
};

export const deleteGreeting = async ({ id }: IDeleteGreetingRequest) => {
  const { data } = await axios.delete(`/greeting/${id}`);
  return data;
};
