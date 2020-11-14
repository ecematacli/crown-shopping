import React from 'react';
import { useTranslation } from 'react-i18next';

import history from '../../history';
import logo from '../../assets/img/logo.svg';
import { AlignedDiv, IconWrapper } from './Header.styles';

const Header = () => {
  const { t } = useTranslation('header');

  return (
    <AlignedDiv>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <AlignedDiv>
        <IconWrapper onClick={() => history.push('/login')}>
          <i className="far fa-user fa-lg icon"></i>
          <span>{t('header:signIn')}</span>
        </IconWrapper>
        <IconWrapper>
          <i className="fas fa-shopping-basket fa-lg icon"></i>
          <span>{t('header:cart')}</span>
        </IconWrapper>
      </AlignedDiv>
    </AlignedDiv>
  );
};

export default Header;
