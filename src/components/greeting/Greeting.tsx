import style from './Greeting.module.scss';
import classNames from 'classnames/bind';
import GreetingAddForm from '@/components/greeting/GreetingAddForm';
import GreetingList from '@/components/greeting/GreetingList';

const cx = classNames.bind(style);

export default function Greeting() {
  return (
    <div className={cx('greeting-container')}>
      <GreetingList />
      <GreetingAddForm />
    </div>
  );
}
