// from underscore.js
export default function debounce(func: () => void, wait: number, immediate = false) {
  let timeout: NodeJS.Timeout | null;
  let previous: number;
  let args: any;
  let result: any;
  let context: any;
  const foo = 'any';

  const later = function () {
    const passed = Date.now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
      // This check is needed because `func` can recursively invoke `debounced`.
      if (!timeout) args = context = null;
    }
  };

  const debounced = function (this: any, ..._args: any[]) {
    context = this;
    args = _args;
    previous = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result = func.apply(context, args);
    }
    return result;
  };

  debounced.cancel = function () {
    if (timeout === null) return;
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
}
