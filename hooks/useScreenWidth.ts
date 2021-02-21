import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  const throttled = throttle(f => f(), 2000, { leading: true });

  useEffect(() => {
    let isMounted = true;

    const handleResize = () => {
      if (isMounted) {
        throttled(() => setScreenWidth(window.innerWidth));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return {
    isSmallScreen: screenWidth < 768,
  };
};

export default useScreenWidth;
