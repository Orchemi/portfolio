import { MENU_TIME, MenuTimeType, MENU_TIME_NEXT } from '@/constants/project/midas-menu/common';
import {
  IMidasMenu,
  MidasMenusType,
  useMutationUpdateMidasMenu,
  useQueryGetDailyMidasMenu,
} from '@/queries/(project)/midas-menu/midasMenu';
import {
  midasMenuDataAtomFamily,
  midasMenuSelectedDateAtom,
  midasMenuSelectedTimeAtom,
} from '@/stores/project/midas-menu/midasMenu.atom';
import { midasMenuSelectedDateSelector } from '@/stores/project/midas-menu/midasMenu.selector';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';

export type MenuListType = Record<MenuTimeType, string>;

export default function useMidasMenuEditForm() {
  const { register, handleSubmit, watch, setValue } = useForm<{ menu: string }>();
  const [selectedDate, setSelectedDate] = useRecoilState(midasMenuSelectedDateAtom);
  const [selectedTime, setSelectedTime] = useRecoilState(midasMenuSelectedTimeAtom);
  const selectedDateYYYYMMDD = useRecoilValue(midasMenuSelectedDateSelector);
  const [menus, setMenus] = useRecoilState(midasMenuDataAtomFamily(selectedDateYYYYMMDD ?? '0000-00-00'));

  const { mutate: updateMidasMenu } = useMutationUpdateMidasMenu();

  const menuRegister = register('menu');

  const updateMenu = async () => {
    try {
      if (!selectedDateYYYYMMDD) return;
      const menuValue = watch('menu');
      const newMenus = { ...menus, [selectedTime]: menuValue };
      await updateMidasMenu(
        { date: selectedDateYYYYMMDD, menus: newMenus },
        {
          onSuccess: (data) => setMenus(data.data.menus),
        },
      );
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

  useEffect(() => {
    setValue('menu', menus[MENU_TIME[selectedTime]]);
  }, [selectedDate, selectedTime]);

  return { menuRegister, onSubmit, watch };
}
