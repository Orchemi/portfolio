import style from './PanmnesiaNavbar.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind(style);

export default function PanmnesiaNavbar() {
  return (
    <nav className={cx('container')}>
      <Image src={'/assets/imgs/panmnesia/panmnesia_logo.png'} alt={'panmnesia-logo'} width={166} height={30} />
    </nav>
  );
}
