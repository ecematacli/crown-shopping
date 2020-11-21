import React, { createContext, useState } from 'react';

type Locale = 'en' | 'nl'

export interface LocaleContext {
  locale: Locale,
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
}

export const LocaleContext = createContext<LocaleContext>(null);

export const LocaleContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>('en');

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
