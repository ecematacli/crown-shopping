import { useContext } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { StyledHeaderBanner } from './HeaderBanner.styles';
import { CountryInfoContext } from '../../../../contexts/CountryInfoContext';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import languageOptions from '../../../../consts/languages';
import { useTranslation } from '../../../../i18n';

const HeaderBanner = () => {
  const {
    countryInfo: { locale, code, language },
    handleCountryChange,
  } = useContext(CountryInfoContext);

  const { t, i18n } = useTranslation('header');

  const changeLanguage = () => {
    if (locale === 'en') {
      i18n.changeLanguage('de');
      handleCountryChange(languageOptions.de);
    } else {
      i18n.changeLanguage('en');
      handleCountryChange(languageOptions.en);
    }
  };

  return (
    <StyledHeaderBanner>
      <PaddedLayout padding={{ top: '0', bottom: '0' }} className='layout'>
        <div className='banner-content'>
          <span>{t('help')}</span>
          <span>{t('newsletter')}</span>
        </div>
      </PaddedLayout>
      <div className='flag-container'>
        <PaddedLayout>
          <div className='flag-wrapper-div'>
            <ReactCountryFlag className='country-flag' countryCode={code} />
            <span className='country-name'>{language}</span>
            <span onClick={changeLanguage} className='flag-icon'>
              <MdKeyboardArrowDown size={18} />
            </span>
          </div>
        </PaddedLayout>
      </div>
    </StyledHeaderBanner>
  );
};

export default HeaderBanner;
