import { MENU_TIME, MenuTimeType, MENU_TIME_NEXT } from '@/constants/project/midas-menu/common';
import { editMenuSelectedDateAtom, editMenuSelectedTimeAtom } from '@/stores/project/midas-menu/edit.atom';
import { getToday } from '@/utils/date';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

export interface IMenu {
  date: string;
  time: MenuTimeType;
  menu: string;
}

export type MenuListType = Record<MenuTimeType, string>;

export default function useMidasMenuEditForm() {
  const { register, handleSubmit, watch, setValue } = useForm<IMenu>();
  const [selectedDate, setSelectedDate] = useRecoilState(editMenuSelectedDateAtom);
  const [selectedTime, setSelectedTime] = useRecoilState(editMenuSelectedTimeAtom);

  const dateRegister = register('date');
  const timeRegister = register('time');
  const menuRegister = register('menu');

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    if (data.time === MENU_TIME.DINNER) {
      const nextDay = dayjs(data.date).add(1, 'day');
      setSelectedDate(nextDay);
    }
    setSelectedTime(data.time);
  });

  const menuValue = watch('menu');
  useEffect(() => {
    if (!menuValue) return;
    if (menuValue.split('\n\n').length === 1) return;
    setValue('menu', menuValue.split('\n\n')[0]);
    onSubmit();
  }, [menuValue, onSubmit, setValue]);

  return { dateRegister, timeRegister, menuRegister, onSubmit, watch };
}
