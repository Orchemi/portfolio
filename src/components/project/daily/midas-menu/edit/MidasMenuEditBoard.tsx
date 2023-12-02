'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';
import dayjs, { Dayjs } from 'dayjs';
import { useMemo, useState } from 'react';
import { MenuListType } from '@/components/project/daily/midas-menu/edit/useMidasMenuEditForm';
import { MENU_TIME, MENU_TIME_LIST, MenuTimeType } from '@/constants/project/midas-menu/common';

const cx = classNames.bind(style);
``;

const days = ['일', '월', '화', '수', '목', '금', '토'];
export default function MidasMenuEditBoard() {
  const [selectedMenu, setSelectedMenu] = useState<{ date: string; time: MenuTimeType }>({
    date: '',
    time: MENU_TIME.BREAKFAST,
  });

  const handleClickBoardCell = (date: string, time: MenuTimeType) => {
    setSelectedMenu({ date, time });
  };
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
        <BoardRow
          key={date.format()}
          date={date}
          menus={menuTitle}
          onClick={handleClickBoardCell}
          selectedMenu={selectedMenu}
        />
      ))}
    </div>
  );
}

interface IBoardRowProps {
  date: Dayjs | string;
  menus: MenuListType;
  selectedMenu?: { date: string; time: MenuTimeType };
  onClick?: (date: string, time: MenuTimeType) => void;
}

function BoardRow({ date, menus, selectedMenu, onClick }: IBoardRowProps) {
  const reformedDate = typeof date === 'string' ? date : date.format('YYYY-MM-DD'); // YYYY-MM-DD
  const reformedDateKr = typeof date === 'string' ? date : `${date.format('MM/DD')}\n(${days[date.get('day')]})`; // MM/DD(요일)

  return (
    <div className={cx('board-row')}>
      <div className={cx('board-cell')}>{reformedDateKr}</div>
      {MENU_TIME_LIST.map((menuTime) => {
        return (
          <div
            key={reformedDateKr + menuTime}
            className={cx('board-cell', {
              selected: reformedDate === selectedMenu?.date && menuTime === selectedMenu?.time,
            })}
            onClick={() => onClick && onClick(reformedDate, menuTime)}
            id={`menu-${reformedDate}-${menuTime}`}
          >
            {menus[menuTime as MenuTimeType]}
          </div>
        );
      })}
    </div>
  );
}
