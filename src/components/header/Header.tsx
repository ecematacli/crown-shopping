import React, { useState, Fragment } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { BsList, BsSearch, BsPerson } from 'react-icons/bs'
import { BiBasket } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

import history from '../../history'
import logo from '../../assets/img/logo.svg'
import AppLayout from '../../common/components/appLayout/AppLayout'
import { AlignedDiv, HeaderContainer, StyledHeader, IconWrapper, MenuContainer } from './Header.styles'
import useScreenWidth from '../../common/hooks/useScreenWidth'
import CategoriesMenu from '../categoriesMenu'

const Header = () => {
  const { t } = useTranslation('header');
  const { isSmallScreen } = useScreenWidth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDisplayingMobileMenu = !isSmallScreen || (isMobileMenuOpen && isSmallScreen);

  const renderSmallScreenHeader = () => (
    <AlignedDiv>
      <IconWrapper className="menu-icon">
        {!isMobileMenuOpen && (
          <BsList size={20} className="icon" onClick={() => setIsMobileMenuOpen(true)} />
        )}
      </IconWrapper>
      <IconWrapper>
        <BsSearch />
      </IconWrapper>
    </AlignedDiv>
  );

  return (
    <Fragment>
      <HeaderContainer isSmallScreen={isSmallScreen}>
        <AppLayout padding={{ bottom: '1.8' }}>
          <StyledHeader>
            {isSmallScreen && renderSmallScreenHeader()}
            <div onClick={() => history.push('/')}>
              <img src={logo} alt='logo' className='logo-image' />
            </div>
            <AlignedDiv>
              <IconWrapper>
                {isSmallScreen && isMobileMenuOpen && (
                  <div onClick={() => setIsMobileMenuOpen(false)}>
                    <MdClose size={23} className={classNames('icon', 'close')} />
                  </div>)}
              </IconWrapper>
              <IconWrapper onClick={() => history.push('/login')}>
                <BsPerson size={20} />
                {!isSmallScreen && <span className='sign-in icon-text'>{t('header:signIn')}</span>}
              </IconWrapper>
              <IconWrapper>
                <BiBasket className='cart-icon' size={20} />
                {!isSmallScreen && <span className='icon-text'>{t('header:cart')}</span>}
              </IconWrapper>
            </AlignedDiv>
          </StyledHeader>
        </AppLayout>
      </HeaderContainer>
      {isDisplayingMobileMenu && (
        <MenuContainer open={isMobileMenuOpen}>
          <div className={classNames({ 'mobile-menu': isSmallScreen })}>
            <CategoriesMenu />
          </div>
        </MenuContainer>
      )}
    </Fragment>
  )
}

export default Header
