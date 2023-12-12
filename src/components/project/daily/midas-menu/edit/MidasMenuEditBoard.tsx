'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';
import { MENU_TIME } from '@/constants/project/midas-menu/common';
import MidasMenuEditBoardRow from '@/components/project/daily/midas-menu/edit/MidasMenuEditBoardRow';
import { getOneWeek } from '@/utils/date';

const cx = classNames.bind(style);

interface IProps {
  readonly?: boolean;
}

export default function MidasMenuEditBoard({ readonly }: IProps) {
  const thisWeek = getOneWeek().slice(0, 5);

  const menuTitle = { [MENU_TIME.BREAKFAST]: '조식', [MENU_TIME.LUNCH]: '중식', [MENU_TIME.DINNER]: '석식' };

  return (
    <div className={cx('container')}>
      <div className={cx('board-container')}>
        <MidasMenuEditBoardRow date={'날짜'} menus={menuTitle} />
        {thisWeek.map((date) => (
          <MidasMenuEditBoardRow key={date.format()} date={date} menus={menuTitle} readonly={readonly} />
        ))}
      </div>
    </div>
  );
}
