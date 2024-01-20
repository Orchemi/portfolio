'use client';

import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import useLoginForm from '@/components/auth/login/useLoginForm';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function LoginForm() {
  const { emailRegister, passwordRegister, onSubmit, isLoading } = useLoginForm();

  return (
    <div className={cx('form-container')}>
      <form className={cx('form')} onSubmit={onSubmit}>
        <input {...emailRegister} placeholder={'Email'} type={'text'} />
        <input {...passwordRegister} placeholder={'Password'} type={'password'} />
        <button className={cx('submit-btn')}>{isLoading ? '로딩중...' : '로그인'}</button>
        <div className={cx('sign-up-wrapper')}>
          회원이 아니신가요?
          <Link className={cx('link-sign-up')} href={'/auth/sign-up'}>
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}
