import { useEffect, useRef, useState } from 'react';

/** 스크롤 시 설정한 범위의 뷰포트 내에 observe 로 등록한 dom이 들어왔을 때 실행되는 hook 입니다.  */
interface IRefType {
  [id: string]: IntersectionObserverEntry;
}

interface IUseIntersectionObserverProps {
  onIntersect?: (id: string) => void; // 뷰포트 내로 들어왔을 때 실행할 함수
  idList: string[]; // 관찰할 요소의 id
}

const useIntersectionObserver = ({ onIntersect, idList }: IUseIntersectionObserverProps) => {
  const [isIntersection, setIsIntersection] = useState(false);
  const ref = useRef<IRefType>({});

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      ref.current[id] = entry;
    });

    const visibleContent = Object.values(ref.current).filter((entry) => entry.isIntersecting);
    const id = visibleContent?.[0]?.target?.id;
    if (visibleContent.length) {
      onIntersect?.(id);
      setIsIntersection(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '-90px 0px -15% 0px', // 뷰포트 위에서 부터 marginTop 90px 만큼, 아래에서 부터 40% 만큼 줄인 영역
      threshold: [0, 0.5, 1], // 관찰할 요소가 0%, 50%, 100% 보일 때 callback 함수를 실행
    });

    idList.map((id) => {
      const el = document.getElementById(id);
      el && observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onIntersect]);

  return {
    isIntersection,
    setIsIntersection,
  };
};

export default useIntersectionObserver;
