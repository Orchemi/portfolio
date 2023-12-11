import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import { Nullable } from '@/types/common';
import dayjs, { Dayjs } from 'dayjs';

export const getToday = (format = 'YYYY-MM-DD') => {
  return dayjs().format(format);
};

export const getOneWeek = (date?: string | Date | Dayjs) => {
  const todayDay = dayjs(date ?? new Date()).get('day');
  return [1, 2, 3, 4, 5, 6, 7].map((v) => dayjs(date).add(v - todayDay, 'day'));
};

export const formDateYYYYMMDD = (date: Nullable<Dayjs | Date>): Nullable<MidasMenuDateType> => {
  if (!date) return null;
  return dayjs(date).format('YYYY-MM-DD') as MidasMenuDateType;
};
