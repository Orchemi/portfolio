import usePersistFn, { noop } from './usePersistFn';
import debounce from '../utils/debounce';

const useDebounce = (fn: noop, wait: number, immediate?: boolean) => {
  const debounced = debounce(fn, wait, immediate);
  const persistFn = usePersistFn(debounced);

  return persistFn;
};

export default useDebounce;
