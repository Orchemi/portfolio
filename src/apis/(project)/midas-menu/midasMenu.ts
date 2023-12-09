import { axios } from '@/apis/requestClient';
import { IMidasMenu } from '@/queries/(project)/midas-menu/midasMenu';
import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';

export const getAllMidasMenu = async () => {
  const { data } = await axios.get('/midas-menu');
  return data;
};

export const getWeeklyMidasMenu = async (day: MidasMenuDateType) => {
  const { data } = await axios.get(`/midas-menu/week/${day}`);
  return data;
};

export const getDailyMidasMenu = async (day: MidasMenuDateType) => {
  const { data } = await axios.get(`/midas-menu/day/${day}`);
  return data;
};

export const postMidasMenu = async ({ key, menu }: IMidasMenu) => {
  const { data } = await axios.post('/midas-menu', { key, menu });
  return data;
};

export const updateMidasMenu = async ({ key, menu }: IMidasMenu) => {
  const { data } = await axios.put(`/midas-menu`, { key, menu });
  return data;
};
