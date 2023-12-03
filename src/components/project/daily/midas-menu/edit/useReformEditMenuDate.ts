import { DAYS_LIST_KR } from '@/constants/date';
import { Nullable } from '@/types/common';
import { Dayjs } from 'dayjs';

export default function useReformEditMenuDate() {
  const reformDayjsToYYYYMMDD = (date: Nullable<Dayjs>) => {
    if (!date) return null;
    return date.format('YYYY-MM-DD');
  };

  const reformDayjsToMMDDWithDay = (date: Nullable<Dayjs>) => {
    if (!date) return null;
    return `${date.format('MM/DD')}\n(${DAYS_LIST_KR[date.get('day')]})`;
  };

  return { reformDayjsToMMDDWithDay, reformDayjsToYYYYMMDD };
}
