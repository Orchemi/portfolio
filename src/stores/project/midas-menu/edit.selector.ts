import { DAYS_LIST_KR } from '@/constants/date';
import { editMenuSelectedDateAtom } from '@/stores/project/midas-menu/edit.atom';
import { Nullable } from '@/types/common';
import { selector } from 'recoil';

export const editMenuSelectedDateSelector = selector<Nullable<string>>({
  key: 'editMenuSelectedDateSelector',
  get: ({ get }) => {
    const date = get(editMenuSelectedDateAtom);
    if (!date) return null;
    return date.format('YYYY-MM-DD');
  },
});

export const editMenuSelectedDateKrSelector = selector<Nullable<string>>({
  key: 'editMenuSelectedDateKrSelector',
  get: ({ get }) => {
    const date = get(editMenuSelectedDateAtom);
    if (!date) return null;
    return `${date.format('MM/DD')}\n(${DAYS_LIST_KR[date.get('day')]})`;
  },
});
