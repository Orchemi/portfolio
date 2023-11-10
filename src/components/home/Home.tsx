'use client';

import style from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function Home() {
  return <div className={cx('home-container')}>hello</div>;
}
