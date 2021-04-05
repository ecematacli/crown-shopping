import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  const throttleResize = throttle(
    () => setScreenWidth(window.innerWidth),
    200,
    { leading: true }
  );

  useEffect(() => {
    throttleResize();
    window.addEventListener('resize', throttleResize);

    return () => {
      window.removeEventListener('resize', throttleResize);
    };
  }, [screenWidth]);

  return {
    isSmallScreen: screenWidth < 768,
    isMediumScreen: screenWidth >= 768 && screenWidth < 992,
    isLargeScreen: screenWidth >= 992,
  };
};

export default useScreenWidth;
