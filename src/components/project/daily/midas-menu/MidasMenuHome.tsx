'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuHome.module.scss';

const cx = classNames.bind(style);

export default function MidasMenuHome() {
  return <div className={cx('home')}>Midas Menu Home</div>;
}
