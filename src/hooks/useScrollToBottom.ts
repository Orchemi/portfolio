import useDebounce from './useDebounce';
import { useEffect } from 'react';

/** 스크롤이 바닥에 닿았을 때 실행되는 hook 입니다.  */
interface IUseScrollToBottomProps {
  onBottom?: () => void;
  wait?: number;
}

const useScrollToBottom = ({ onBottom, wait = 100 }: IUseScrollToBottomProps) => {
  const handleScroll = useDebounce(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      onBottom?.();
    }
  }, wait);

  // 최초 실행 시 스크롤이 없는 경우
  const init = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (clientHeight >= scrollHeight) onBottom?.();
  };

  useEffect(() => {
    init();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};

export default useScrollToBottom;
