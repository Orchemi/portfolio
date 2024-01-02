import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import LoginForm from '@/components/auth/login/LoginForm';

const cx = classNames.bind(styles);

export default function Login() {
  return (
    <div className={cx('container')}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
