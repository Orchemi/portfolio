'use client';

import { useQueryGetGreeting } from '@/queries/home';

// import style from './Home.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(style);

export default function Home() {
  const { data: queryGetGreeting } = useQueryGetGreeting();

  return <div>{JSON.stringify(queryGetGreeting)}</div>;
  // return <div>Hommeee</div>;
}
