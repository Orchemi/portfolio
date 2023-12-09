import { MENU_TIME, MenuTimeType, MENU_TIME_NEXT } from '@/constants/project/midas-menu/common';
import {
  IMidasMenu,
  MidasMenusType,
  useMutationUpdateMidasMenu,
  useQueryGetDailyMidasMenu,
} from '@/queries/(project)/midas-menu/midasMenu';
import { editMenuSelectedDateAtom, editMenuSelectedTimeAtom } from '@/stores/project/midas-menu/edit.atom';
import { editMenuSelectedDateSelector } from '@/stores/project/midas-menu/edit.selector';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';

export type MenuListType = Record<MenuTimeType, string>;

export default function useMidasMenuEditForm() {
  const { register, handleSubmit, watch, setValue } = useForm<{ menu: string }>();
  const [selectedDate, setSelectedDate] = useRecoilState(editMenuSelectedDateAtom);
  const [selectedTime, setSelectedTime] = useRecoilState(editMenuSelectedTimeAtom);
  const selectedDateYYYYMMDD = useRecoilValue(editMenuSelectedDateSelector);

  const { mutate: updateMidasMenu } = useMutationUpdateMidasMenu();
  const { refetch: getDailyMidasMenu } = useQueryGetDailyMidasMenu({
    day: selectedDateYYYYMMDD ?? '0000-00-00',
    enabled: !!selectedDateYYYYMMDD,
  });

  useEffect(() => {
    (async () => {
      // const { data } = await refetch();
      // setValue('menu', data?.data[0].menu ?? '');
    })();
  }, [selectedDate, selectedTime, setValue, getDailyMidasMenu]);

  const menuRegister = register('menu');

  const updateMenu = async () => {
    try {
      if (!selectedDateYYYYMMDD) return;
      const menuValue = watch('menu');
      const prevMenus = (await getDailyMidasMenu()).data?.data[0].menus ?? {};
      const newMenus = { ...prevMenus, [selectedTime]: menuValue } as MidasMenusType;
      updateMidasMenu({ date: selectedDateYYYYMMDD, menus: newMenus });
    } catch (error) {
      console.error(error);
    }
  };

  const selectNextCell = () => {
    if (selectedTime === MENU_TIME.DINNER) {
      const nextDay = dayjs(selectedDate).add(1, 'day');
      setSelectedDate(nextDay);
    }
    setSelectedTime(MENU_TIME_NEXT[selectedTime]);
  };

  const onSubmit = handleSubmit(async () => {
    await updateMenu();
    selectNextCell();
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
