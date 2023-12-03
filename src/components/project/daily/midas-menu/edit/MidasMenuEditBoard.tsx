'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';
import dayjs, { Dayjs } from 'dayjs';
import { useMemo } from 'react';
import { MenuListType } from '@/components/project/daily/midas-menu/edit/useMidasMenuEditForm';
import { MENU_TIME, MENU_TIME_LIST, MenuTimeType } from '@/constants/project/midas-menu/common';
import { useRecoilState } from 'recoil';
import { editMenuSelectedDateAtom, editMenuSelectedTimeAtom } from '@/stores/project/midas-menu/edit.atom';
import useReformEditMenuDate from '@/components/project/daily/midas-menu/edit/useReformEditMenuDate';

const cx = classNames.bind(style);
``;

export default function MidasMenuEditBoard() {
  const thisWeek = useMemo(() => {
    const todayDay = dayjs().get('day');
    return [1, 2, 3, 4, 5].map((v) => {
      const day = dayjs().add(v - todayDay, 'day');
      return day;
    });
  }, []);

  const menuTitle = { [MENU_TIME.BREAKFAST]: '조식', [MENU_TIME.LUNCH]: '중식', [MENU_TIME.DINNER]: '석식' };

  return (
    <div className={cx('board-container')}>
      <BoardRow date={'날짜'} menus={menuTitle} />
      {thisWeek.map((date) => (
        <BoardRow key={date.format()} date={date} menus={menuTitle} />
      ))}
    </div>
  );
}

interface IBoardRowProps {
  date: Dayjs | string;
  menus: MenuListType;
}

function BoardRow({ date, menus }: IBoardRowProps) {
  const [selectedDate, setSelectedDate] = useRecoilState(editMenuSelectedDateAtom);
  const [selectedTime, setSelectedTime] = useRecoilState(editMenuSelectedTimeAtom);

  const { reformDayjsToMMDDWithDay, reformDayjsToYYYYMMDD } = useReformEditMenuDate();

  const reformedDateFormYYYYMMDD = typeof date === 'string' ? '날짜' : reformDayjsToYYYYMMDD(date);
  const reformedDateFormMMDD = typeof date === 'string' ? '날짜' : reformDayjsToMMDDWithDay(date);

  return (
    <div className={cx('board-row')}>
      <div className={cx('board-cell')}>{reformedDateFormMMDD}</div>
      {MENU_TIME_LIST.map((menuTime) => {
        return (
          <div
            key={reformedDateFormYYYYMMDD + menuTime}
            className={cx('board-cell', {
              selected: date === selectedDate && menuTime === selectedTime,
            })}
            onClick={() => {
              if (typeof date === 'string') return;
              setSelectedDate(date);
              setSelectedTime(menuTime);
            }}
            id={`menu-${reformedDateFormYYYYMMDD}-${menuTime}`}
          >
            {menus[menuTime as MenuTimeType]}
          </div>
        );
      })}
    </div>
  );
}
