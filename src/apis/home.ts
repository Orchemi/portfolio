import { axios } from '@/apis/requestClient';

export const getGreeting = async () => {
  const { data } = await axios.get('/hello');
  console.log(data);
  return data;
};
