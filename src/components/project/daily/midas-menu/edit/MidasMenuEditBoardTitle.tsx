'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoardRow.module.scss';
import { MENU_TIME, MENU_TIME_LIST, MenuTimeType } from '@/constants/project/midas-menu/common';

const cx = classNames.bind(style);

export default function MidasMenuEditBoardTitle() {
  const menus = {
    [MENU_TIME.BREAKFAST]: '조식',
    [MENU_TIME.LUNCH]: '중식',
    [MENU_TIME.DINNER]: '석식',
  };

  return (
    <div className={cx('board-row')}>
      <div className={cx('board-cell', 'title')}>
        <span>날짜</span>
      </div>
      {MENU_TIME_LIST.map((menuTime) => {
        return (
          <div key={menuTime} className={cx('board-cell', 'title')}>
            <div className={cx('menu-text')}>{menus[menuTime as MenuTimeType]}</div>
          </div>
        );
      })}
    </div>
  );
}
