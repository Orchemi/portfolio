'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoardRow.module.scss';
import { Dayjs } from 'dayjs';
import { MenuListType } from '@/components/project/daily/midas-menu/edit/useMidasMenuEditForm';
import { MENU_TIME_LIST, MenuTimeType } from '@/constants/project/midas-menu/common';
import { useRecoilState } from 'recoil';
import { editMenuSelectedDateAtom, editMenuSelectedTimeAtom } from '@/stores/project/midas-menu/edit.atom';
import useReformEditMenuDate from '@/components/project/daily/midas-menu/edit/useReformEditMenuDate';

const cx = classNames.bind(style);

interface IBoardRowProps {
  date: Dayjs | string;
  menus: MenuListType;
}

export default function MidasMenuEditBoardRow({ date, menus }: IBoardRowProps) {
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
