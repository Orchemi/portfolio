'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';
import { MENU_TIME } from '@/constants/project/midas-menu/common';
import MidasMenuEditBoardRowBoardRow from '@/components/project/daily/midas-menu/edit/MidasMenuEditBoardRow';
import { getOneWeek } from '@/utils/date';
import { useRecoilValue } from 'recoil';
import { midasMenuStandardDateAtom } from '@/stores/project/midas-menu/midasMenu.atom';

const cx = classNames.bind(style);

export default function MidasMenuEditBoard() {
  const standardDate = useRecoilValue(midasMenuStandardDateAtom);
  const thisWeek = getOneWeek(standardDate).slice(0, 5);

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
