'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuBoardRow.module.scss';
import { Dayjs } from 'dayjs';
import useMidasMenuEditForm from '@/components/project/daily/midas-menu/useMidasMenuEditForm';
import { MENU_TIME_LIST, MenuTimeType } from '@/constants/project/midas-menu/common';
import { useRecoilState } from 'recoil';
import {
  midasMenuDataAtomFamily,
  midasMenuDatesAtom,
  midasMenuSelectedDateAtom,
  midasMenuSelectedTimeAtom,
} from '@/stores/project/midas-menu/midasMenu.atom';
import useMidasMenuReformDate from '@/components/project/daily/midas-menu/useMidasMenuReformDate';
import { formDateYYYYMMDD } from '@/utils/date';
import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import { useEffect } from 'react';
import { MidasMenusType, useQueryGetDailyMidasMenu } from '@/queries/(project)/midas-menu/midasMenu';

const cx = classNames.bind(style);

interface IBoardRowProps {
  date: Dayjs;
  readonly?: boolean;
}

export default function MidasMenuBoardRow({ date, readonly = true }: IBoardRowProps) {
  const dateYYYYMMDD = formDateYYYYMMDD(date) as MidasMenuDateType;
  const [midasMenuDates, setMidasMenuDates] = useRecoilState(midasMenuDatesAtom);
  const [menus, setMenus] = useRecoilState(midasMenuDataAtomFamily(dateYYYYMMDD));

  const [selectedDate, setSelectedDate] = useRecoilState(midasMenuSelectedDateAtom);
  const [selectedTime, setSelectedTime] = useRecoilState(midasMenuSelectedTimeAtom);

  const { data: dailyMidasMenus, refetch: getDailyMidasMenu } = useQueryGetDailyMidasMenu({
    day: dateYYYYMMDD,
    enabled: false,
  });

  useEffect(() => {
    if (!midasMenuDates.includes(dateYYYYMMDD)) {
      getDailyMidasMenu();
      setMidasMenuDates([...midasMenuDates, dateYYYYMMDD]);
      if (!dailyMidasMenus?.data?.menus) return;
      setMenus(dailyMidasMenus.data.menus as MidasMenusType);
    }
  }, [dateYYYYMMDD, setMenus, dailyMidasMenus?.data?.menus]);

  const { menuRegister, onSubmit } = useMidasMenuEditForm();
  const { formDateMMDDWithDay } = useMidasMenuReformDate();

  const reformedDateFormYYYYMMDD = formDateYYYYMMDD(date);
  const reformedDateFormMMDDWithDay = formDateMMDDWithDay(date);

  return (
    <div className={cx('board-row')}>
      <div className={cx('board-cell', 'title')}>
        <span>{reformedDateFormMMDDWithDay}</span>
      </div>
      {MENU_TIME_LIST.map((menuTime) => {
        const selected =
          !readonly && formDateYYYYMMDD(selectedDate) === reformedDateFormYYYYMMDD && selectedTime === menuTime;
        return (
          <div
            key={reformedDateFormYYYYMMDD + menuTime}
            className={cx('board-cell', 'menu', {
              selected: selected,
            })}
            id={`menu-${reformedDateFormYYYYMMDD}-${menuTime}`}
          >
            {selected ? (
              <form className={cx('menu-edit-form')} onSubmit={onSubmit}>
                <textarea className={cx('menu-edit-textarea')} {...menuRegister}></textarea>
              </form>
            ) : (
              <div
                className={cx('menu-text')}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(menuTime);
                }}
              >
                {menus[menuTime as MenuTimeType]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
