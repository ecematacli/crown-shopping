import React, { createContext, useState } from 'react';

interface Country {
  name: 'United States' | 'Netherlands'
  code: 'US' | 'NL',
  currency: 'USD' | 'EUR',
  locale: 'en' | 'nl'
}

export interface CountryContextInt {
  country: Country,
  setCountry: React.Dispatch<React.SetStateAction<Country>>
}

export const CountryContext = createContext<CountryContextInt>(null);

const initialValue: Country = { code: 'US', currency: 'USD', name: 'United States', locale: 'en' };

export const CountryContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [country, setCountry] = useState<Country>(initialValue);

  return (
    <CountryContext.Provider
      value={{ country, setCountry }}
    >
      {children}
    </CountryContext.Provider>
  );
};
