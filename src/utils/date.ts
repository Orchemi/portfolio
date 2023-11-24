import dayjs from 'dayjs';

export const getToday = (format = 'YYYY-MM-DD') => {
  return dayjs().format(format);
};
