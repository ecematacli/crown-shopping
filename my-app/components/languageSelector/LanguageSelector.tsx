import { useContext } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { LanguageSelectorContainer } from './LanguageSelector.styles';
import { CountryInfoContext } from '../../contexts/CountryInfoContext';
import languageOptions from '../../consts/languages';
import { useTranslation } from '../../i18n';
import useScreenWidth from '../../hooks/useScreenWidth';

const LanguageSelector = () => {
  const {
    countryInfo: { locale, code, language },
    handleCountryChange,
  } = useContext(CountryInfoContext);

  const { isSmallScreen } = useScreenWidth();
  const { i18n } = useTranslation();

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
    <LanguageSelectorContainer isSmallScreen={isSmallScreen}>
      <div className='flag-wrapper-div'>
        <ReactCountryFlag className='country-flag' countryCode={code} />
        <span className='country-name'>{language}</span>
        <span onClick={changeLanguage} className='flag-icon'>
          <MdKeyboardArrowDown size={18} />
        </span>
      </div>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
