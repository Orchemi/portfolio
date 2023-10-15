import style from './page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function Home() {
  return <div className={cx('main')}>home</div>;
}
