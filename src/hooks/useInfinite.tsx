import { useEffect, useRef } from 'react';

type UseInfiniteHook = {
  lastElement: () => JSX.Element;
};

const useInfinite = (callback: () => void): UseInfiniteHook => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement>(null);

  const handleFetchData = (entris: IntersectionObserverEntry[]) => {
    const entry = entris[0];
    if (entry.isIntersecting) {
      callback();
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleFetchData, {
      threshold: 1.0
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (lastElementRef.current) {
        observer.current?.disconnect();
      }
    };
  }, [lastElementRef.current]);

  const lastElement = () => (
    <div ref={lastElementRef} className="w-10 h-10 bg-red-300" />
  );

  return {
    lastElement
  };
};

export default useInfinite;
