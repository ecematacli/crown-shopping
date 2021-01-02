import { createContext, useState } from 'react';
import cookie from 'js-cookie';

import languageOptions from '../consts/languages';

interface Country {
  name: string;
  code: string;
  currency: string;
  locale: string;
  language: string;
}

export interface CountryInfoContextInt {
  countryInfo: Country;
  handleCountryChange: (country: Country) => void;
}

export const CountryInfoContext = createContext<CountryInfoContextInt>(null);

const getInitialValue = (): Country => cookie.getJSON('country') || languageOptions.en;

export const CountryInfoContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [countryInfo, setCountryInfo] = useState<Country>(() =>
    getInitialValue()
  );

  const handleCountryChange = (country: Country) => {
    cookie.set('country', country);
    setCountryInfo(country);
  };

  return (
    <CountryInfoContext.Provider value={{ countryInfo, handleCountryChange }}>
      {children}
    </CountryInfoContext.Provider>
  );
};
