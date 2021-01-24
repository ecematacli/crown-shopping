import { StyledHeaderBanner, StyledContent } from './HeaderBanner.styles';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import { useTranslation } from '../../../../i18n';
import useScreenWidth from '../../../../hooks/useScreenWidth';
import LanguageSelector from '../../../languageSelector/LanguageSelector';

const HeaderBanner = () => {
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation('header');

  const leftRightPads = isSmallScreen && '0';

  return (
    <StyledHeaderBanner isSmallScreen={isSmallScreen}>
      <PaddedLayout padding={{ rightLeft: leftRightPads }}>
        <div className="wrapper">
          <StyledContent isSmallScreen={isSmallScreen}>
            {!isSmallScreen && <span>Welcome [name]</span>}
            <span>{t('help')}</span>
            <span>{t('newsletter')}</span>
          </StyledContent>
          <div className="language-selector">
            <LanguageSelector />
          </div>
        </div>
      </PaddedLayout>
    </StyledHeaderBanner>
  );
};

export default HeaderBanner;
