import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/img/logo.svg';
import './Header.css';
import Loading from '../loading/Loading';

const Header = () => {
  const { t } = useTranslation('header');

  return (
    <div className="header">
      <Loading />
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="icon-container">
        <div>
          <i className="far fa-user fa-lg"></i>
          <span>{t('header:signIn')}</span>
        </div>
        <i className="fas fa-shopping-basket fa-lg"></i>
      </div>
    </div>
  )
}

export default Header