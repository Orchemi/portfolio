'use client';

import PanmnesiaHomeHeader from '@/components/panmnesia/home/PanmnesiaHomeHeader';

import classNames from 'classnames/bind';
import style from './PanmnesiaHome.module.scss';

const cx = classNames.bind(style);

export default function PanmnesiaHome() {
  return (
    <div className={cx('home')}>
      <PanmnesiaHomeHeader />
    </div>
  );
}
