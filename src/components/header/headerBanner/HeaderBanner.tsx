import React, { useContext } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { StyledHeaderBanner } from './HeaderBanner.styles';
import { CountryContext } from '../../../contexts/CountryContext';
import AppLayout from '../../../common/components/appLayout/AppLayout';
import { useTranslation } from 'react-i18next';
import languageOptions from '../../../common/const/languages'

const HeaderBanner = () => {
  const { country: { locale, code, language }, setCountry } = useContext(CountryContext);
  const { t, i18n } = useTranslation('header');

  const changeLanguage = () => {
    if (locale === 'en') {
      i18n.changeLanguage('de')
      setCountry(languageOptions.de)
    } else {
      i18n.changeLanguage('en')
      setCountry(languageOptions.en)
    }
  };

  return (
    <StyledHeaderBanner>
      <AppLayout padding={{ top: '0', bottom: '0' }} className='layout'>
        <div className='banner-content'>
          <span>{t('header:help')}</span>
          <span>{t('header:newsletter')}</span>
        </div>
      </AppLayout>
      <div className="flag-container">
        <AppLayout>
          <div className='flag-wrapper-div'>
            <ReactCountryFlag
              className='country-flag'
              countryCode={code}
            />
            <span className='country-name'>{language}</span>
            <span onClick={changeLanguage} className="flag-icon">
              <MdKeyboardArrowDown size={18} />
            </span>
          </div>
        </AppLayout>
      </div>


    </StyledHeaderBanner>
  );
};

export default HeaderBanner;