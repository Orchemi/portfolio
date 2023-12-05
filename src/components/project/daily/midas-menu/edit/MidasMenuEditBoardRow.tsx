'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoardRow.module.scss';
import { Dayjs } from 'dayjs';
import useMidasMenuEditForm, { MenuListType } from '@/components/project/daily/midas-menu/edit/useMidasMenuEditForm';
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

  const { menuRegister, onSubmit } = useMidasMenuEditForm();
  const { reformDayjsToMMDDWithDay, reformDayjsToYYYYMMDD } = useReformEditMenuDate();

  const reformedDateFormYYYYMMDD = typeof date === 'string' ? '날짜' : reformDayjsToYYYYMMDD(date);
  const reformedDateFormMMDD = typeof date === 'string' ? '날짜' : reformDayjsToMMDDWithDay(date);

  return (
    <div className={cx('board-row')}>
      <div className={cx('board-cell', 'title')}>
        <span>{reformedDateFormMMDD}</span>
      </div>
      {MENU_TIME_LIST.map((menuTime) => {
        const selected = selectedDate === date && selectedTime === menuTime;
        return (
          <div
            key={reformedDateFormYYYYMMDD + menuTime}
            className={cx(
              'board-cell',
              { title: typeof date === 'string' },
              { menu: typeof date !== 'string' },
              {
                selected: selected,
              },
            )}
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
                  if (typeof date === 'string') return;
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
