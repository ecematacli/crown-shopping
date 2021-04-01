import { useTranslation } from '../../../../../i18n';

import { StyledLegalSection } from './LegalSection.styles';

const LegalSection = () => {
  const { t } = useTranslation('footer');

  return (
    <StyledLegalSection>
      <h5 className='title'>{t('legal')}</h5>
      <li>{t('requirements')}</li>
      <li>{t('termsOfUse')}</li>
      <li>{t('privacyDeclaration')}</li>
      <li>{t('cookiePolicy')}</li>
    </StyledLegalSection>
  );
};

export default LegalSection;
