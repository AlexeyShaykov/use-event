import { useRef, useLayoutEffect, useCallback } from 'react';

const useEvent = (handler) => {
  const handlerRef = useRef(null);

  // useLayoutEffect
  // если нам нужно выполнить какой-то код, до отрисовки в браузере, 
  // нам предоставили хук useLayoutEffect, 
  // интерфейс которого полностью совпадает с useEffect, 
  // но по очередности выполнения полностью совпадает с componentDidMount

  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
};

export default useEvent;
