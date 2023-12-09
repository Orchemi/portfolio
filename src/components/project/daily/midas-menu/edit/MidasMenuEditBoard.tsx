'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { MENU_TIME } from '@/constants/project/midas-menu/common';
import MidasMenuEditBoardRowBoardRow from '@/components/project/daily/midas-menu/edit/MidasMenuEditBoardRow';
import { getOneWeek } from '@/utils/date';

const cx = classNames.bind(style);

export default function MidasMenuEditBoard() {
  const thisWeek = getOneWeek().slice(0, 5);

  const menuTitle = { [MENU_TIME.BREAKFAST]: '조식', [MENU_TIME.LUNCH]: '중식', [MENU_TIME.DINNER]: '석식' };

  return (
    <div className={cx('board-container')}>
      <MidasMenuEditBoardRowBoardRow date={'날짜'} menus={menuTitle} />
      {thisWeek.map((date) => (
        <MidasMenuEditBoardRowBoardRow key={date.format()} date={date} menus={menuTitle} />
      ))}
    </div>
  );
}
