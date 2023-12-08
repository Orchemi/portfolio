import { MENU_TIME, MenuTimeType, MENU_TIME_NEXT } from '@/constants/project/midas-menu/common';
import { editMenuSelectedDateAtom, editMenuSelectedTimeAtom } from '@/stores/project/midas-menu/edit.atom';
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

  useEffect(() => {
    // TODO:: 선택 일자/타임에 해당하는 메뉴 API 호출
    setValue('menu', '');
  }, [selectedDate, selectedTime]);

  const menuRegister = register('menu');

  const onSubmit = handleSubmit((data: IMenu) => {
    if (selectedTime === MENU_TIME.DINNER) {
      const nextDay = dayjs(selectedDate).add(1, 'day');
      setSelectedDate(nextDay);
    }
    setSelectedTime(MENU_TIME_NEXT[selectedTime]);
  });

  const menuValue = watch('menu');
  useEffect(() => {
    if (!menuValue) return;
    if (menuValue.split('\n\n').length === 1) return;
    setValue('menu', menuValue.split('\n\n')[0]);
    onSubmit();
  }, [menuValue, onSubmit, setValue]);

  return { menuRegister, onSubmit, watch };
}
