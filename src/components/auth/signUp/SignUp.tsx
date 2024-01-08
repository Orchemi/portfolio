import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import SignUpForm from '@/components/auth/signUp/SignUpForm';

const cx = classNames.bind(styles);

export default function SignUp() {
  return (
    <div className={cx('container')}>
      <h1>회원가입</h1>
      <SignUpForm />
    </div>
  );
}
