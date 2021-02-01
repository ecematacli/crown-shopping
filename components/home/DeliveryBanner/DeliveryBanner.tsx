import { useTranslation } from '../../../i18n';

import { StyledDeliveryBanner } from './DeliveryBanner.styles';
import { useState } from 'react';
// import classNames from 'classnames';

const DeliveryBanner = () => {
  const { t } = useTranslation('home');

  const [x, useX] = useState(false);
  const [y, useY] = useState(false);


  return (
    <StyledDeliveryBanner>
      <div className="wrapper">
        <span className="text-visible">{t('freeDelivery')}</span>
        <span className="text-invisible">{t('return')}</span>

      </div>
    </StyledDeliveryBanner>
  );
};

export default DeliveryBanner;
