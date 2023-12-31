'use client';

import { signOut, useSession } from 'next-auth/react';
import style from './Home.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(style);

export default function Home() {
  const { data, status } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    // await signIn();
    router.push('/api/auth/signin');
  };
  const handleLogout = async () => await signOut();

  return (
    <div className={cx('home-container')}>
      <div>{JSON.stringify(data)}</div>
      {status === 'unauthenticated' ? (
        <button onClick={handleLogin}>LOGIN</button>
      ) : (
        <button onClick={handleLogout}>LOGOUT</button>
      )}
    </div>
  );
}
