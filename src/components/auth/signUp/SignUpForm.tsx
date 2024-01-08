'use client';

import classNames from 'classnames/bind';
import styles from './SignUpForm.module.scss';
import useSignUpForm from '@/components/auth/signUp/useSignUpForm';

const cx = classNames.bind(styles);

export default function SignUpForm() {
  const { nameRegister, emailRegister, passwordRegister, checkPasswordRegister, onSubmit, isLoading } = useSignUpForm();

  return (
    <div className={cx('form-container')}>
      <form className={cx('form')} onSubmit={onSubmit}>
        <input {...nameRegister} placeholder={'이름'} type={'text'} />
        <input {...emailRegister} placeholder={'이메일'} type={'email'} />
        <input {...passwordRegister} placeholder={'비밀번호'} type={'password'} />
        <input {...checkPasswordRegister} placeholder={'비밀번호 확인'} type={'password'} />
        <button className={cx('submit-btn')}>{isLoading ? '로딩중...' : '가입'}</button>
      </form>
    </div>
  );
}
