import style from './GreetingForm.module.scss';
import classNames from 'classnames/bind';
import useGreetingForm from '@/components/greeting/useGreetingForm';
import { IGreetingResponse } from '@/queries/greeting';

const cx = classNames.bind(style);

export type GreetingFormType = 'add' | 'edit';
interface IProps {
  type: GreetingFormType;
  editTarget?: IGreetingResponse;
}

export default function GreetingForm({ type, editTarget }: IProps) {
  const { onSubmit, titleRegister, descriptionRegister, tagRegister } = useGreetingForm({ type, editTarget });

  return (
    <form className={cx('greeting-form')} onSubmit={onSubmit}>
      <h3 className={cx('form-title')}>{type === 'add' ? '인사 추가' : '인사 수정'}</h3>
      <input className={cx('title-input')} placeholder={'제목'} {...titleRegister} />
      <input className={cx('description-input')} placeholder={'설명'} {...descriptionRegister} />
      <input className={cx('tag-input')} placeholder={'태그'} {...tagRegister} />
      <button type={'submit'}>완료</button>
    </form>
  );
}
