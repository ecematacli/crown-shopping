import { Router } from '../../../../i18n';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { BsList, BsSearch, BsPerson } from 'react-icons/bs';
import { BiBasket } from 'react-icons/bi';

import { ME } from '../../../../graphql/queries/customer';
import { me } from '../../../../graphql/queries/types/me';
import { useTranslation } from '../../../../i18n';
import { useOpenedMenuContext } from '../../../../common/contexts/OpenedMenuContext';
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
  const { isLargeScreen } = useScreenWidth();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useOpenedMenuContext()

  const isAuth = getCookie('isAuth');
  const topBottomPads = isLargeScreen ? '1.3' : '1.8';
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
        {isLargeScreen && <HeaderBanner customerName={customer?.firstName} />}
        <PaddedLayout padding={{ bottom: topBottomPads, top: topBottomPads }}>
          <StyledHeader>
            {!isLargeScreen && renderSmallScreenHeader()}
            <div onClick={() => navigateUser('/')}>
              <Image
                src='/logo.svg'
                alt={t('logo')}
                width='50'
                height='50'
                className='logo-image'
              />
            </div>
            <AlignedDiv>
              <IconWrapper
                onClick={() => navigateUser(`/${!isAuth ? 'signin' : 'my-account'}`)}>
                <BsPerson size={20} />
                {isLargeScreen && (
                  <span className='sign-in icon-text'>
                    {customer ? customer.firstName : t('signIn')}
                  </span>
                )}
              </IconWrapper>
              <IconWrapper>
                <BiBasket className='cart-icon' size={20} />
                {isLargeScreen && (
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
