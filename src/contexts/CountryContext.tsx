import React, { createContext, useState } from 'react';

interface Country {
  name: string;
  code: string;
  currency: string;
  locale: string;
}


export interface CountryContextInt {
  country: Country,
  setCountry: React.Dispatch<React.SetStateAction<Country>>
}

export const CountryContext = createContext<CountryContextInt>(null);

const initialValue = { code: 'US', currency: 'USD', name: 'United States', locale: 'en' };

export const CountryContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [country, setCountry] = useState<Country>(initialValue);
  console.log('country', country)

  return (
    <CountryContext.Provider
      value={{ country, setCountry }}
    >
      {children}
    </CountryContext.Provider>
  );
};
