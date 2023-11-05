import { IGreetingResponse, useMutationDeleteGreeting, useQueryGetGreeting } from '@/queries/greeting';

import style from './GreetingList.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Nullish } from '@/types/common';
import GreetingForm from '@/components/greeting/GreetingForm';

const cx = classNames.bind(style);

export default function GreetingList() {
  const { data: queryGetGreeting } = useQueryGetGreeting();

  return (
    <div className={cx('greeting-list')}>
      {(queryGetGreeting?.data ?? []).map((greeting) => (
        <GreetingItem key={greeting._id} greeting={greeting} />
      ))}
    </div>
  );
}

interface IGreetingItemProps {
  greeting: IGreetingResponse;
}
function GreetingItem({ greeting }: IGreetingItemProps) {
  const { mutate: deleteGreeting } = useMutationDeleteGreeting();
  const [editingGreetingId, setEditingGreetingId] = useState<Nullish<string>>(null);
  const { _id: id, title, description, tags } = greeting;

  return (
    <div className={cx('greeting-item')} key={id}>
      <div className={cx('read-contents', { show: editingGreetingId !== id })}>
        <h1>{title}</h1>
        <p>{description}</p>
        {tags && (
          <div>
            {tags.map((tag) => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
        )}
        <div className={cx('hover-buttons')}>
          <button onClick={() => setEditingGreetingId(id)}>수정</button>
          <button onClick={() => deleteGreeting({ id })}>삭제</button>
        </div>
      </div>
      <div className={cx('edit-contents', { show: editingGreetingId === id })}>
        <GreetingForm type={'edit'} editTarget={greeting} />
        <button onClick={() => setEditingGreetingId(null)}>취소</button>
      </div>
    </div>
  );
}
