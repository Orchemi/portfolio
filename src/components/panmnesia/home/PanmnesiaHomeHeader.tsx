import style from './PanmnesiaHomeHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function PanmnesiaHomeHeader() {
  return (
    <section className={cx('container')}>
      <img className={cx('main-img')} src={'/assets/imgs/panmnesia/panmnesia_cxl_main1.jpg'} alt={'main-image'} />
      <div className={cx('text-section')}>
        <h1>Panmnesia, Inc.</h1>
        <hr />
        <p>
          Bringing All Types of System Devices to Life width Perfect Memory,<strong> Panmnesia</strong>
        </p>
      </div>
    </section>
  );
}
