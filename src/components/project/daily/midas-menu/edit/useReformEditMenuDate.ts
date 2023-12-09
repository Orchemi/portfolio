import { DAYS_LIST_KR } from '@/constants/date';
import { Nullable } from '@/types/common';
import dayjs, { Dayjs } from 'dayjs';

export default function useReformEditMenuDate() {
  const formDateMMDDWithDay = (date: Nullable<Dayjs | Date>) => {
    if (!date) return null;
    return `${dayjs(date).format('MM/DD')}\n(${DAYS_LIST_KR[dayjs(date).get('day')]})`;
  };

  return { formDateMMDDWithDay };
}
