'use client';

import { useSession } from 'next-auth/react';
import style from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function Home() {
  const { data } = useSession();

  return <div className={cx('home-container')}>{JSON.stringify(data)}</div>;
}
