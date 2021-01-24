import { useRouter } from 'next/router';
import Image from 'next/image';
import { useContext } from 'react';
import { BsList, BsSearch, BsPerson } from 'react-icons/bs';
import { BiBasket } from 'react-icons/bi';

import { useTranslation } from '../../../i18n';
import { OpenedMenuContext } from '../../../contexts/OpenedMenuContext';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import {
  HeaderContainer,
  HeaderBar,
  AlignedDiv,
  StyledHeader,
  IconWrapper,
} from './Header.styles';
import useScreenWidth from '../../../hooks/useScreenWidth';
import CategoriesMenu from './categoriesMenu/CategoriesMenu';
import HeaderBanner from './headerBanner/HeaderBanner';
import useHeader from './useHeader';

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation('header');
  const { isSmallScreen } = useScreenWidth();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(OpenedMenuContext);

  const topBottomPads = !isSmallScreen ? '1.3' : '1.8';
  const { data } = useHeader();

  const renderSmallScreenHeader = () => (
    <AlignedDiv>
      <IconWrapper className='icon'>
        {!isMobileMenuOpen && (
          <BsList
            size={20}
            className='icon'
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
      </IconWrapper>
      <IconWrapper>
        <BsSearch />
      </IconWrapper>
    </AlignedDiv>
  );

  return (
    <HeaderContainer isSmallScreen={isSmallScreen}>
      <HeaderBar isSmallScreen={isSmallScreen}>
        {!isSmallScreen && <HeaderBanner />}
        <PaddedLayout padding={{ bottom: topBottomPads, top: topBottomPads }}>
          <StyledHeader>
            {isSmallScreen && renderSmallScreenHeader()}
            <div onClick={() => router.push('/')}>
              <Image
                src='/logo.svg'
                alt='logo'
                width='50'
                height='50'
                className='logo-image'
              />
            </div>
            <AlignedDiv>
              <IconWrapper onClick={() => router.push('/login')}>
                <BsPerson size={20} />
                {!isSmallScreen && (
                  <span className='sign-in icon-text'>
                    {data ? data.me.customer.firstName : t('signIn')}
                  </span>
                )}
              </IconWrapper>
              <IconWrapper>
                <BiBasket className='cart-icon' size={20} />
                {!isSmallScreen && (
                  <span className='icon-text'>{t('cart')}</span>
                )}
              </IconWrapper>
            </AlignedDiv>
          </StyledHeader>
        </PaddedLayout>
      </HeaderBar>
      {(!isSmallScreen || (isSmallScreen && isMobileMenuOpen)) && (
        <CategoriesMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;