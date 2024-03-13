import classNames from 'classnames/bind';
import styles from './layout.module.scss';
import { Metadata } from 'next';

const cx = classNames.bind(styles);

export const metadata: Metadata = {
  title: 'hoons diner',
  description: 'Welcome, hoons diner!',
};

export default function HoonsDinerLayout({ children }: { children: React.ReactNode }) {
  return <section className={cx('layout')}>{children}</section>;
}
