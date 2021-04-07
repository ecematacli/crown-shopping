import { createContext, useState, useContext, useEffect } from 'react';

import languageOptions from '../consts/languages';
import { getCookie, setCookie } from '../utils/cookie';

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
};

const initialContextValue = {
  handleCountryChange: null,
  countryInfo: {
    name: '',
    code: '',
    currency: '',
    locale: '',
    language: ''
  },
};

export const CountryInfoContext = createContext<CountryInfoContextInt>(initialContextValue);

const getInitialValue = (): Country =>
  languageOptions[getCookie('next-i18next')] || languageOptions.en;

export const CountryInfoContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [countryInfo, setCountryInfo] = useState<Country>(getInitialValue);

  const handleCountryChange = (country: Country) => {
    setCookie('country', country);
    setCountryInfo(country);
  };

  useEffect(() => {
    handleCountryChange(getInitialValue());
  }, []);

  return (
    <CountryInfoContext.Provider value={{ countryInfo, handleCountryChange }}>
      {children}
    </CountryInfoContext.Provider>
  );
};

export const useCountryInfoContext = () => useContext(CountryInfoContext);
