import { IGreeting, useQueryGetGreeting } from '@/queries/home';

import style from './GreetingList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function GreetingList() {
  const { data: queryGetGreeting } = useQueryGetGreeting();

  return (
    <div className={cx('greeting-list')}>
      {(queryGetGreeting?.data ?? []).map((greeting) => (
        <GreetingItem key={greeting.title} greeting={greeting} />
      ))}
    </div>
  );
}

interface IGreetingItemProps {
  greeting: IGreeting;
}
function GreetingItem({ greeting }: IGreetingItemProps) {
  const { title, description, tags } = greeting;
  return (
    <div className={cx('greeting-item')} key={title}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </div>
    </div>
  );
}
