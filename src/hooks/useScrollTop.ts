import useDebounce from './useDebounce';
import { useEffect, useState } from 'react';

/** 스크롤의 top 위치를 반환하는 hook 입니다.  */
interface IUseScrollTopProps {
  wait?: number;
}

const useScrollTop = ({ wait = 100 }: IUseScrollTopProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useDebounce(() => {
    const elScrollTop = document.documentElement.scrollTop;
    setScrollTop(elScrollTop);
  }, wait);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    scrollTop,
  };
};

export default useScrollTop;
