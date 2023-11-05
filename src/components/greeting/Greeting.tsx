'use client';

import style from './Greeting.module.scss';
import classNames from 'classnames/bind';
import GreetingForm from '@/components/greeting/GreetingForm';
import GreetingList from '@/components/greeting/GreetingList';

const cx = classNames.bind(style);

export default function Greeting() {
  return (
    <div className={cx('greeting-container')}>
      <GreetingList />
      <GreetingForm type={'add'} />
    </div>
  );
}
