'use client';

import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import useLoginForm from '@/components/auth/login/useLoginForm';

const cx = classNames.bind(styles);

export default function LoginForm() {
  const { emailRegister, passwordRegister, onSubmit, isLoading } = useLoginForm();

  return (
    <div className={cx('form-container')}>
      <form className={cx('login-form')} onSubmit={onSubmit}>
        <input {...emailRegister} placeholder={'Email'} type={'email'} />
        <input {...passwordRegister} placeholder={'Password'} type={'password'} />
        <button className={cx('submit-btn')}>제출</button>
        {isLoading && <div>로딩중...</div>}
      </form>
    </div>
  );
}
