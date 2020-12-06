import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import history from '../../history'
import logo from '../../assets/img/logo.svg'
import AppLayout from '../../common/components/appLayout/AppLayout'
import { AlignedDiv, HeaderContainer, StyledHeader, IconWrapper } from './Header.styles'
import useScreenWidth from '../../common/hooks/useScreenWidth'

const Header = () => {
  const { t } = useTranslation('header');
  const { isSmallScreen } = useScreenWidth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSmallScreenHeader = () => (
    <AlignedDiv>
      <IconWrapper className="menu-icon">
        {!isMobileMenuOpen ? (
          <i
            onClick={() => setIsMobileMenuOpen(true)}
            className='fas fa-bars menu-icon'></i>
        ) : (
            <i
              onClick={() => setIsMobileMenuOpen(false)}
              className='fas fa-times menu-icon'></i>
          )}
      </IconWrapper>
      <IconWrapper>
        <i className="fas fa-search"></i>
      </IconWrapper>
    </AlignedDiv>
  );

  return (
    <HeaderContainer isSmallScreen={isSmallScreen}>
      <AppLayout padding={{ bottom: '1.8' }}>
        <StyledHeader>
          {isSmallScreen && renderSmallScreenHeader()}
          <div onClick={() => history.push('/')}>
            <img src={logo} alt='logo' className='logo-image' />
          </div>
          <AlignedDiv>
            <IconWrapper onClick={() => history.push('/login')}>
              <i className='far fa-user'></i>
              {!isSmallScreen && <span className='sign-in icon-text'>{t('header:signIn')}</span>}
            </IconWrapper>
            <IconWrapper>
              <i className='fas fa-shopping-basket cart-icon'></i>
              {!isSmallScreen && <span className='icon-text'>{t('header:cart')}</span>}
            </IconWrapper>
          </AlignedDiv>
        </StyledHeader>
      </AppLayout>
    </HeaderContainer>
  )
}

export default Header
