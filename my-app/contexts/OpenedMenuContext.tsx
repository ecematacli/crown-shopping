import React, { createContext, useState } from 'react';

export interface OpenedMenuContextInt {
  isMenuOpened: boolean,
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenedMenuContext = createContext<OpenedMenuContextInt>({ isMenuOpened: false, setIsMenuOpened: null });

export const OpenedMenuContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <OpenedMenuContext.Provider
      value={{ isMenuOpened, setIsMenuOpened }}
    >
      {children}
    </OpenedMenuContext.Provider>
  );
};
