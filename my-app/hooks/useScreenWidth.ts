import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const initialValue = typeof window !== 'undefined' ? window.innerWidth : null;
  const [screenWidth, setScreenWidth] = useState(initialValue);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  return {
    isSmallScreen: screenWidth < 768,
  };
};

export default useScreenWidth;
