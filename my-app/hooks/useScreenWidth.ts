import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  return {
    isSmallScreen: screenWidth < 768,
  };
};

export default useScreenWidth;
