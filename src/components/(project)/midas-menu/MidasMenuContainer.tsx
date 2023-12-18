'use client';

import classNames from 'classnames/bind';
import style from './MidasMenuContainer.module.scss';
import MidasMenuBoard from '@/components/(project)/midas-menu/MidasMenuBoard';
import { midasMenuHandleUnitAtom, midasMenuStandardDateAtom } from '@/stores/project/midas-menu/midasMenu.atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import dayjs from 'dayjs';

const cx = classNames.bind(style);

export default function MidasMenuContainer() {
  const setStandardDate = useSetRecoilState(midasMenuStandardDateAtom);
  const settingDateUnit = useRecoilValue(midasMenuHandleUnitAtom);
  const setPrevStandardDate = () => {
    setStandardDate((prev) => dayjs(prev).add(-1, settingDateUnit));
  };

  const setNextStandardDate = () => {
    setStandardDate((prev) => dayjs(prev).add(1, settingDateUnit));
  };

  return (
    <div className={cx('container')}>
      <button onClick={setPrevStandardDate}>이전</button>
      <MidasMenuBoard />
      <button onClick={setNextStandardDate}>다음</button>
    </div>
  );
}
