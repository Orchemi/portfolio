import { DAYS_LIST_KR } from '@/constants/date';
import { midasMenuSelectedDateAtom } from '@/stores/project/midas-menu/midasMenu.atom';
import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import { Nullable } from '@/types/common';
import { selector } from 'recoil';

export const midasMenuSelectedDateSelector = selector<Nullable<MidasMenuDateType>>({
  key: 'midasMenuSelectedDateSelector',
  get: ({ get }) => {
    const date = get(midasMenuSelectedDateAtom);
    if (!date) return null;
    return date.format('YYYY-MM-DD') as MidasMenuDateType;
  },
});

export const midasMenuSelectedDateKrSelector = selector<Nullable<string>>({
  key: 'midasMenuSelectedDateKrSelector',
  get: ({ get }) => {
    const date = get(midasMenuSelectedDateAtom);
    if (!date) return null;
    return `${date.format('MM/DD')}\n(${DAYS_LIST_KR[date.get('day')]})`;
  },
});
