import { useQueryGetGreeting } from '@/queries/home';

import style from './Greeting.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function Greeting() {
  const { data: queryGetGreeting } = useQueryGetGreeting();

  return (
    <div className={cx('greeting-container')}>
      {(queryGetGreeting?.data ?? []).map(({ title, description, tags }) => {
        return (
          <div key={title}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
              {tags.map((tag) => {
                return <span key={tag}>{tag}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
