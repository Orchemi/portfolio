import { MENU_TIME, MenuTimeType } from '@/constants/project/midas-menu/common';
import { Nullable } from '@/types/common';
import { Dayjs } from 'dayjs';
import { atom } from 'recoil';

export const midasMenuSelectedDateAtom = atom<Nullable<Dayjs>>({ key: 'midasMenuSelectedDateAtom', default: null });
export const midasMenuSelectedTimeAtom = atom<MenuTimeType>({
  key: 'midasMenuSelectedTimeAtom',
  default: MENU_TIME.BREAKFAST,
});

export const midasMenuStandardDateAtom = atom<Dayjs | Date>({
  key: 'midaMenuStandardDateAtom',
  default: new Date(),
});
export const midasMenuStandardTimeAtom = atom<MenuTimeType>({
  key: 'midasMenuStandardTimeAtom',
  default: MENU_TIME.BREAKFAST,
});

export const midasMenuHandleUnitAtom = atom<'week' | 'day'>({ key: 'midasMenuHandleUnitAtom', default: 'week' });
