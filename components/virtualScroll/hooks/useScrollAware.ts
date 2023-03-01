import { useEffect, useRef, useState } from 'react';

const useScrollAware = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const animationFrame = useRef(0);

  const onScroll = () => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      setScrollTop(window.scrollY);
    });
  };

  useEffect(() => {
    setScrollTop(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollTop };
};

export default useScrollAware;
