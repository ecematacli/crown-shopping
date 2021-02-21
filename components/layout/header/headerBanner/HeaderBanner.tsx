
import { StyledHeaderBanner, StyledContent } from './HeaderBanner.styles';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import { useTranslation, Router } from '../../../../i18n';
import useScreenWidth from '../../../../hooks/useScreenWidth';
import LanguageSelector from '../../../languageSelector/LanguageSelector';

interface Props {
  customerName?: string;
}

const HeaderBanner: React.FC<Props> = ({ customerName }) => {
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation('header');

  return (
    <StyledHeaderBanner>
      <PaddedLayout padding={{ rightLeft: isSmallScreen && '0' }}>
        <div className='wrapper'>
          <StyledContent>
            <span className="customer-name" onClick={() => Router.push('/signin')}>
              {customerName ? `${t('welcome')} ${customerName}` : `${t('myAccount')}`}
            </span>
            <span>{t('help')}</span>
            <span>{t('newsletter')}</span>
          </StyledContent>
          <div className='language-selector'>
            <LanguageSelector />
          </div>
        </div>
      </PaddedLayout>
    </StyledHeaderBanner>
  );
};

export default HeaderBanner;
