import { MENU_TIME, MenuTimeType } from '@/constants/project/midas-menu/common';
import { MidasMenusType } from '@/queries/(project)/midas-menu/midasMenu';
import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import { Nullable } from '@/types/common';
import { Dayjs } from 'dayjs';
import { atom, atomFamily } from 'recoil';

export const midasMenuSelectedDateAtom = atom<Nullable<Dayjs>>({ key: 'midasMenuSelectedDateAtom', default: null });
export const midasMenuSelectedTimeAtom = atom<MenuTimeType>({
  key: 'midasMenuSelectedTimeAtom',
  default: MENU_TIME.BREAKFAST,
});

export const midasMenuStandardDateAtom = atom<Dayjs | Date>({
  key: 'midasMenuStandardDateAtom',
  default: new Date(),
});
export const midasMenuStandardTimeAtom = atom<MenuTimeType>({
  key: 'midasMenuStandardTimeAtom',
  default: MENU_TIME.BREAKFAST,
});

export const midasMenuHandleUnitAtom = atom<'week' | 'day'>({ key: 'midasMenuHandleUnitAtom', default: 'week' });

export const midasMenuDatesAtom = atom<MidasMenuDateType[]>({ key: 'midasMenuDatesAtom', default: [] });
export const midasMenuDataAtomFamily = atomFamily<MidasMenusType, MidasMenuDateType>({
  key: 'midasMenuDataAtomFamily',
  default: {
    [MENU_TIME.BREAKFAST]: '',
    [MENU_TIME.LUNCH]: '',
    [MENU_TIME.DINNER]: '',
  } as MidasMenusType,
});
