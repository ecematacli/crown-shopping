import React, { createContext, useState, useContext } from 'react';

export interface OpenedMenuContextInt {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContextValue = {
  isMenuOpen: false,
  setIsMenuOpen: null,
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: null
};

export const OpenedMenuContext = createContext<OpenedMenuContextInt | null>(initialContextValue);

export const OpenedMenuContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <OpenedMenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, isMobileMenuOpen, setIsMobileMenuOpen }}
    >
      {children}
    </OpenedMenuContext.Provider>
  );
};

export const useOpenedMenuContext = () => useContext(OpenedMenuContext);