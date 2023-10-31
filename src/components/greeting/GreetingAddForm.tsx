import style from './GreetingAddForm.module.scss';
import classNames from 'classnames/bind';
import useGreetingAddForm from '@/components/greeting/useGreetingAddForm';

const cx = classNames.bind(style);

export default function GreetingAddForm() {
  const { onSubmit, titleRegister, descriptionRegister, tagRegister } = useGreetingAddForm();

  return (
    <form className={cx('greeting-form')} onSubmit={onSubmit}>
      <h3 className={cx('form-title')}>인사 추가</h3>
      <input className={cx('title-input')} placeholder={'제목'} {...titleRegister} />
      <input className={cx('description-input')} placeholder={'설명'} {...descriptionRegister} />
      <input className={cx('tag-input')} placeholder={'태그'} {...tagRegister} />
      <button type={'submit'}>추가</button>
    </form>
  );
}
