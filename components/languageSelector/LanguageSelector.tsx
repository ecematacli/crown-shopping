import { useContext, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { MdKeyboardArrowDown } from 'react-icons/md';

import BaseModal from '../baseModal/BaseModal';
import { LanguageSelectorContainer } from './LanguageSelector.styles';
import { CountryInfoContext } from '../../common/contexts/CountryInfoContext';
import languageOptions from '../../common/consts/languages';
import { useTranslation } from '../../i18n';

const LanguageSelector = () => {
  const {
    countryInfo: { locale, code, language },
    handleCountryChange,
  } = useContext(CountryInfoContext);

  const [openModal, setOpenModal] = useState(false);
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
    <div>
      <LanguageSelectorContainer>
        <div className='flag-wrapper-div' onClick={changeLanguage}>
          <ReactCountryFlag className='country-flag' countryCode={code} />
          <span className='country-name'>{language}</span>
          <MdKeyboardArrowDown size={18} />
        </div>
      </LanguageSelectorContainer>
      <BaseModal show={openModal} onHide={() => setOpenModal(false)} />
    </div>
  );
};

export default LanguageSelector;
