'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';
import MidasMenuEditBoardRow from '@/components/project/daily/midas-menu/edit/MidasMenuEditBoardRow';
import { getOneWeek } from '@/utils/date';
import { useRecoilValue } from 'recoil';
import { midasMenuStandardDateAtom } from '@/stores/project/midas-menu/midasMenu.atom';
import MidasMenuEditBoardTitle from '@/components/project/daily/midas-menu/edit/MidasMenuEditBoardTitle';

const cx = classNames.bind(style);

export default function MidasMenuEditBoard() {
  const standardDate = useRecoilValue(midasMenuStandardDateAtom);
  const thisWeek = getOneWeek(standardDate).slice(0, 5);

  return (
    <div className={cx('board-container')}>
      <MidasMenuEditBoardTitle />
      {thisWeek.map((date) => {
        return <MidasMenuEditBoardRow key={date.format()} date={date} />;
      })}
    </div>
  );
}
