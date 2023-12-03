import { MENU_TIME, MenuTimeType } from '@/constants/project/midas-menu/common';
import { Nullable } from '@/types/common';
import { Dayjs } from 'dayjs';
import { atom } from 'recoil';

export const editMenuSelectedDateAtom = atom<Nullable<Dayjs>>({ key: 'editMenuSelectedDateAtom', default: null });

export const editMenuSelectedTimeAtom = atom<MenuTimeType>({
  key: 'editMenuSelectedTimeAtom',
  default: MENU_TIME.BREAKFAST,
});
