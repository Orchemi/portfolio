import { MENU_TIME, MenuTimeType, MENU_TIME_NEXT } from '@/constants/project/midas-menu/common';
import { getToday } from '@/utils/date';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IMenu {
  date: string;
  time: MenuTimeType;
  menu: string;
}

export default function useMidasMenuEditForm() {
  const { register, handleSubmit, watch, setValue } = useForm<IMenu>();

  const dateRegister = register('date');
  const timeRegister = register('time');
  const menuRegister = register('menu');

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    if (data.time === MENU_TIME.DINNER) {
      const nextDay = dayjs(data.date).add(1, 'day').format('YYYY-MM-DD');
      setValue('date', nextDay);
    }
    setValue('time', MENU_TIME_NEXT[data.time]);
    setValue('menu', '');
  });

  useEffect(() => {
    setValue('date', getToday());
    setValue('time', MENU_TIME.BREAKFAST);
  }, []);

  const menuValue = watch('menu');
  useEffect(() => {
    if (!menuValue) return;
    if (menuValue.split('\n\n').length === 1) return;
    setValue('menu', menuValue.split('\n\n')[0]);
    onSubmit();
  }, [menuValue, onSubmit, setValue]);

  return { dateRegister, timeRegister, menuRegister, onSubmit, watch };
}
