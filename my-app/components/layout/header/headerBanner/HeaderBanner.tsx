import { useContext } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { StyledHeaderBanner, StyledContent } from './HeaderBanner.styles';
import { CountryInfoContext } from '../../../../contexts/CountryInfoContext';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import languageOptions from '../../../../consts/languages';
import { useTranslation } from '../../../../i18n';
import useScreenWidth from '../../../../hooks/useScreenWidth';

const HeaderBanner = () => {
  const {
    countryInfo: { locale, code, language },
    handleCountryChange,
  } = useContext(CountryInfoContext);

  const { isSmallScreen } = useScreenWidth();
  const { t, i18n } = useTranslation('header');

  const leftRightPads = isSmallScreen && '0';

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
    <StyledHeaderBanner isSmallScreen={isSmallScreen}>
      <PaddedLayout padding={{ rightLeft: leftRightPads }}>
        <div className="wrapper">
          <StyledContent isSmallScreen={isSmallScreen}>
            {!isSmallScreen && <span>Welcome [name]</span>}
            <span>{t('help')}</span>
            <span>{t('newsletter')}</span>
          </StyledContent>
          <div className='flag-container'>
            <div className='flag-wrapper-div'>
              <ReactCountryFlag className='country-flag' countryCode={code} />
              <span className='country-name'>{language}</span>
              <span onClick={changeLanguage} className='flag-icon'>
                <MdKeyboardArrowDown size={18} />
              </span>
            </div>
          </div>
        </div>
      </PaddedLayout>
    </StyledHeaderBanner>

  );
};

export default HeaderBanner;
