import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function Nav() {
  return (
    <header className={cx('header')}>
      <nav className={cx('nav')}>
        <div>My Site</div>
        <div className={cx('menu-area')}>
          <Link href={'/'}>Home</Link>
          <Link href={'/createUser'}>Create User</Link>
          <Link href={'/clientMember'}>Client Member</Link>
          <Link href={'/member'}>Member</Link>
          <Link href={'/public'}>Public</Link>
        </div>
      </nav>
    </header>
  );
}
