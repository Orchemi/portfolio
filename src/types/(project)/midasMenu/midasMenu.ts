import { MenuTimeType } from '@/constants/project/midas-menu/common';

type YearType = string;
type MonthType = string;
type DayType = string;
export type MidasMenuDateType = `${YearType}-${MonthType}-${DayType}`;
export type MidasMenuKeyType = `${MidasMenuDateType}-${MenuTimeType}`;
