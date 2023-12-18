export const MENU_TIME = {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
} as const;

export const MENU_TIME_DEFINITION: Record<MenuTimeType, string> = {
  [MENU_TIME.BREAKFAST]: '아침',
  [MENU_TIME.LUNCH]: '점심',
  [MENU_TIME.DINNER]: '저녁',
} as const;

export const MENU_TIME_NEXT: Record<MenuTimeType, MenuTimeType> = {
  [MENU_TIME.BREAKFAST]: MENU_TIME.LUNCH,
  [MENU_TIME.LUNCH]: MENU_TIME.DINNER,
  [MENU_TIME.DINNER]: MENU_TIME.BREAKFAST,
} as const;

export type MenuTimeType = keyof typeof MENU_TIME;
export const MENU_TIME_LIST = Object.keys(MENU_TIME) as MenuTimeType[];
