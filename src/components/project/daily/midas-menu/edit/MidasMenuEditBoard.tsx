'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';

const cx = classNames.bind(style);

export default function MidasMenuEditBoard() {
  return (
    <div className={cx('board-container')}>
      <BoardRow date={'날짜'} menus={['조식', '중식', '석식']} />
      <BoardRow date={'11/20\n(월)'} menus={['조식', '중식', '석식']} />
    </div>
  );
}

interface IBoardRowProps {
  date: string;
  menus: string[];
}

function BoardRow({ date, menus }: IBoardRowProps) {
  return (
    <div className={cx('board-row')}>
      <div className={cx('date')}>{date}</div>
      {menus.map((menu, index) => (
        <div className={cx('menu')} key={index}>
          {menu}
        </div>
      ))}
    </div>
  );
}
