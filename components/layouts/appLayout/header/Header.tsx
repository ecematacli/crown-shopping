import { Router } from '../../../../i18n';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { BsList, BsSearch, BsPerson } from 'react-icons/bs';
import { BiBasket } from 'react-icons/bi';

import { ME } from '../../../../graphql/queries/customer';
import { me } from '../../../../graphql/queries/types/me';
import { useTranslation } from '../../../../i18n';
import { OpenedMenuContext } from '../../../../common/contexts/OpenedMenuContext';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import {
  HeaderContainer,
  HeaderBar,
  AlignedDiv,
  StyledHeader,
  IconWrapper,
} from './Header.styles';
import useScreenWidth from '../../../../common/hooks/useScreenWidth';
import CategoriesMenu from './categoriesMenu/CategoriesMenu';
import HeaderBanner from './headerBanner/HeaderBanner';
import { getCookie } from '../../../../common/utils/cookie';

const Header = () => {
  const { t } = useTranslation('header');
  const { data } = useQuery<me>(ME);
  const { isSmallScreen } = useScreenWidth();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(
    OpenedMenuContext
  );

  const isAuthenticated = getCookie('isAuthenticated');
  const topBottomPads = !isSmallScreen ? '1.3' : '1.8';
  const customer = data?.me.customer;
  const navigateUser = (path: string) => Router.push(path);

  const renderSmallScreenHeader = () => (
    <AlignedDiv>
      <IconWrapper className='icon'>
        <BsList
          size={20}
          className='icon'
          onClick={() => setIsMobileMenuOpen(true)}
        />
      </IconWrapper>
      <IconWrapper>
        <BsSearch />
      </IconWrapper>
    </AlignedDiv>
  );

  return (
    <HeaderContainer>
      <HeaderBar>
        {!isSmallScreen && <HeaderBanner customerName={customer?.firstName} />}
        <PaddedLayout padding={{ bottom: topBottomPads, top: topBottomPads }}>
          <StyledHeader>
            {isSmallScreen && renderSmallScreenHeader()}
            <div onClick={() => navigateUser('/')}>
              <Image
                src='/logo.svg'
                alt='logo'
                width='50'
                height='50'
                className='logo-image'
              />
            </div>
            <AlignedDiv>
              <IconWrapper
                onClick={() =>
                  navigateUser(`/${!isAuthenticated ? 'signin' : 'my-account'}`)
                }>
                <BsPerson size={20} />
                {!isSmallScreen && (
                  <span className='sign-in icon-text'>
                    {customer ? customer.firstName : t('signIn')}
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
      <CategoriesMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </HeaderContainer>
  );
};

export default Header;
