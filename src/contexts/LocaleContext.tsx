import React, { createContext, useState } from 'react';

type Locale = 'en' | 'nl'
interface Country {
  name: 'US' | 'NL',
  currency: 'USD' | 'EUR'
}

export interface LocaleContextInt {
  locale: Locale,
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
  country: Country,
  setCountry: React.Dispatch<React.SetStateAction<Country>>

}

export const LocaleContext = createContext<LocaleContextInt>(null);

export const LocaleContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [country, setCountry] = useState<Country>({ name: 'US', currency: 'USD' });

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, country, setCountry }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
