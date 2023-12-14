'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuBoard.module.scss';
import MidasMenuBoardRow from '@/components/(project)/midas-menu/MidasMenuBoardRow';
import { getOneWeek } from '@/utils/date';
import { useRecoilValue } from 'recoil';
import { midasMenuStandardDateAtom } from '@/stores/project/midas-menu/midasMenu.atom';
import MidasMenuBoardTitle from '@/components/(project)/midas-menu/MidasMenuBoardTitle';

const cx = classNames.bind(style);

interface IProps {
  readonly?: boolean;
}

export default function MidasMenuBoard({ readonly }: IProps) {
  const standardDate = useRecoilValue(midasMenuStandardDateAtom);
  const thisWeek = getOneWeek(standardDate).slice(0, 5);

  return (
    <div className={cx('container')}>
      <div className={cx('board-container')}>
        <MidasMenuBoardTitle />
        {thisWeek.map((date) => (
          <MidasMenuBoardRow key={date.format()} date={date} readonly={readonly} />
        ))}
      </div>
    </div>
  );
}
