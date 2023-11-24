'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEdit.module.scss';
import useMidasMenuEditForm from '@/components/project/daily/midas-menu/edit/useMidasMenuEditForm';
import { MENU_TIME_DEFINITION } from '@/constants/project/midas-menu/common';

const cx = classNames.bind(style);

export default function MidasMenuEdit() {
  const { dateRegister, timeRegister, menuRegister, onSubmit, watch } = useMidasMenuEditForm();
  return (
    <div className={cx('container')}>
      <form className={cx('menu-edit-form')} onSubmit={onSubmit}>
        <input type={'date'} {...dateRegister} />
        <input type={'text'} value={MENU_TIME_DEFINITION[watch('time')]} {...timeRegister} />
        <textarea className={cx('input-area')} {...menuRegister}></textarea>
        <button className={cx('submit-btn')} type={'submit'}>
          제출
        </button>
      </form>
    </div>
  );
}
