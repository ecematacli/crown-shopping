import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/img/logo.svg';
import { HeaderContainer, IconContainer } from './Header.styles';

const Header = () => {
  const { t } = useTranslation('header');

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <IconContainer>
        <div>
          <i className="far fa-user fa-lg"></i>
          <span>{t('header:signIn')}</span>
        </div>
        <div>
          <i className="fas fa-shopping-basket fa-lg"></i>
          <span>{t('header:cart')}</span>
        </div>
      </IconContainer>
    </HeaderContainer>
  )
}

export default Header
