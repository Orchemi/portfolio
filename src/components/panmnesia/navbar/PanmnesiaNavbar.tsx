import Icon from '@/common/icon/Icon';
import style from './PanmnesiaNavbar.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { COLORS } from '@/constants/colors';

const cx = classNames.bind(style);

export default function PanmnesiaNavbar() {
  return (
    <>
      <nav className={cx('container')}>
        <Image src={'/assets/imgs/panmnesia/panmnesia_logo.png'} alt={'panmnesia-logo'} width={166} height={30} />
        <ul className={cx('menu-section')}>
          <li className={cx('menu-item')}>
            Home
            <Icon name={'arrow_drop_down_filled'} color={COLORS.white} size={30} />
          </li>
          <li className={cx('menu-item')}>
            Newsroom
            <Icon name={'arrow_drop_down_filled'} color={COLORS.white} size={30} />
          </li>
          <li className={cx('menu-item')}>Careers</li>
        </ul>
        <Icon className={cx('not-pc-hamburger')} name={'move_line'} color={COLORS.white} size={32} />
      </nav>
      <div className={cx('hidden-space')}></div>
    </>
  );
}
