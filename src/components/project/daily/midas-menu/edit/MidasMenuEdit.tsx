'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEdit.module.scss';
import MidasMenuEditBoard from '@/components/project/daily/midas-menu/edit/MidasMenuEditBoard';

const cx = classNames.bind(style);

export default function MidasMenuEdit() {
  return (
    <div className={cx('container')}>
      <MidasMenuEditBoard />
    </div>
  );
}
