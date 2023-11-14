import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  capturing = false
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener, capturing);
    document.addEventListener('touchstart', listener, capturing);

    return () => {
      document.removeEventListener('mousedown', listener, capturing);
      document.removeEventListener('touchstart', listener, capturing);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
