import { useTranslation } from '../../../i18n';

import { StyledDeliveryBanner } from './DeliveryBanner.styles';
import PaddedLayout from '../../paddedLayout/PaddedLayout';

const DeliveryBanner = () => {
  const { t } = useTranslation('home');

  return (
    <StyledDeliveryBanner>
      <PaddedLayout>
        <div className="wrapper">
          <span className="text-visible">{t('freeDelivery')}</span>
          <span className="text-invisible">{t('return')}</span>
        </div>
      </PaddedLayout>
    </StyledDeliveryBanner>
  );
};

export default DeliveryBanner;
