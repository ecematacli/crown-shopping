import { useState, useEffect } from 'react';

export default () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, [screenWidth]);

  const isSmallScreen = screenWidth < 768;

  return {
    isSmallScreen,
  };
};
