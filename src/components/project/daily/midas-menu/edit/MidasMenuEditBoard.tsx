'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditBoard.module.scss';
import dayjs from 'dayjs';
import { useMemo } from 'react';

const cx = classNames.bind(style);

export default function MidasMenuEditBoard() {
  const thisWeek = useMemo(() => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const todayDay = dayjs().get('day');
    return [1, 2, 3, 4, 5].map((v) => {
      const day = dayjs().add(v - todayDay, 'day');
      return `${day.format('MM/DD')}\n(${days[day.get('day')]})`;
    });
  }, []);

  return (
    <div className={cx('board-container')}>
      <BoardRow date={'날짜'} menus={['조식', '중식', '석식']} />
      {thisWeek.map((date) => {
        return <BoardRow key={date} date={date} menus={['조식', '중식', '석식']} />;
      })}
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
