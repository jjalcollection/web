/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  const [target, setTarget] = useState<T | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const subscribe = useCallback(
    (node: T | null) => {
      if (node) {
        observer.current?.observe(node);
        setTarget(node);
      }
    },
    [observer.current],
  );

  const unsubscribe = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
      setTarget(null);
    }
  }, []);

  const toggleObserve = () => {
    if (target) {
      observer.current?.unobserve(target);
    } else {
      observer.current?.observe(target as unknown as HTMLElement);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, options);
    subscribe(target);

    return () => {
      observer.current?.disconnect();
      observer.current = null;
    };
  }, [callback, options]);

  return [subscribe, unsubscribe, toggleObserve] as const;
}
