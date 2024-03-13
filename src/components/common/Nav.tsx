'use client';

import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const cx = classNames.bind(styles);

export default function Nav() {
  const { data, status } = useSession();

  return (
    <header className={cx('header')}>
      <nav className={cx('nav')}>
        <div>My Site</div>
        <div className={cx('menu-area')}>
          {/* <Link href={'/'}>Home</Link>
          <Link href={'/createUser'}>Create User</Link>
          <Link href={'/clientMember'}>Client Member</Link>
          <Link href={'/member'}>Member</Link>
          <Link href={'/public'}>Public</Link> */}
          {status === 'unauthenticated' ? (
            <div className={cx('auth-wrapper')}>
              <Link href={'/api/auth/signin'}>Login</Link>
            </div>
          ) : (
            <div className={cx('auth-wrapper')}>
              <span>{data?.user?.name}</span>
              <button onClick={async () => await signOut()}>LOGOUT</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
