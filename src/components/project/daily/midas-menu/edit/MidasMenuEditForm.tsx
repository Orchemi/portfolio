'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuEditForm.module.scss';
import useMidasMenuEditForm from '@/components/project/daily/midas-menu/edit/useMidasMenuEditForm';

const cx = classNames.bind(style);

export default function MidasMenuEditForm() {
  const { menuRegister, onSubmit, watch } = useMidasMenuEditForm();
  return (
    <form className={cx('menu-edit-form')} onSubmit={onSubmit}>
      {/* <input className={cx('input', 'date')} type={'date'} {...dateRegister} /> */}
      <input
        className={cx('input', 'time')}
        type={'text'}
        // value={MENU_TIME_DEFINITION[watch('time')]}
        // {...timeRegister}
      />
      <textarea className={cx('input', 'menu')} {...menuRegister}></textarea>
      <button className={cx('submit-btn')} type={'submit'}>
        제출
      </button>
    </form>
  );
}
