import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

export default function LoginForm() {
  return (
    <div className={cx('form-container')}>
      <form className={cx('login-form')}>
        <input placeholder={'Email'} type={'email'} />
        <input placeholder={'Password'} type={'password'} />
        <button className={cx('submit-btn')}>제출</button>
      </form>
    </div>
  );
}
