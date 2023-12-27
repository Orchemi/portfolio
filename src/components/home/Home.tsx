import { getServerSession } from 'next-auth';
import style from './Home.module.scss';
import classNames from 'classnames/bind';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

const cx = classNames.bind(style);

export default async function Home() {
  const data = await getServerSession(authOptions);
  return <div className={cx('home-container')}>{JSON.stringify(data)}</div>;
}
