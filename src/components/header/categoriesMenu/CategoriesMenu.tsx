import React from 'react';
import { MdClose } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';
import classNames from 'classnames';

import { capitalizeFirstLetter } from '../../../common/utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../../common/components/appLayout/AppLayout';
import useScreenWidth from '../../../common/hooks/useScreenWidth';
import {
  StyledCategoryMenu,
  MenuContainer,
  MenuNavbar,
  MobileLogo,
} from './CategoriesMenustyles';
import Subcategories from './subcategories/Subcategories';
import logo from '../../../assets/img/logo.svg';
import history from '../../../history';
import HeaderBanner from '../../../common/components/headerBanner/HeaderBanner';

interface Props {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoriesMenu: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { isSmallScreen } = useScreenWidth();

  const isDisplayingMobileMenu = isSmallScreen && isMobileMenuOpen;

  const {
    data,
    openedCategory,
    handleOpenedCategory,
    onCategoryItemClick,
  } = useCategoriesMenu(setIsMobileMenuOpen);

  // console.log('category', openedCategory);

  const renderMainCategories = () =>
    data.categories.results.map(category => {
      return (
        <li
          key={category.id}
          onMouseOver={() => handleOpenedCategory(category)}
          onClick={() => onCategoryItemClick(category.id, category.slug)}
          className={!isSmallScreen ? 'menu-item' : 'sm-menu-item'}>
          <div className={classNames({ 'sm-menu-wrapper': isSmallScreen })}>
            <span>{capitalizeFirstLetter(category.name.toUpperCase())}</span>
            {isSmallScreen && (
              <RiArrowRightSLine
                onClick={() => handleOpenedCategory(category)}
                className='arrow-icon'
              />
            )}
          </div>
          {/* {isSmallScreen && openedCategory && (
            <Subcategories
              subcategories={category.children}
              handleOpenedCategory={handleOpenedCategory}
              onCategoryItemClick={onCategoryItemClick}
            />
          )} */}
        </li>
      );
    });

  return (
    <StyledCategoryMenu open={isMobileMenuOpen}>
      <div className={classNames({ 'mobile-sidebar': isDisplayingMobileMenu })}>
        {isDisplayingMobileMenu && (
          <AppLayout padding={{ top: '0', bottom: '0' }}>
            <MobileLogo onClick={() => history.push('/')}>
              <img src={logo} alt='logo' />
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <MdClose size={32} />
              </div>
            </MobileLogo>
          </AppLayout>
        )}
        <MenuContainer
          onMouseLeave={() => handleOpenedCategory(null)}
          isSmallScreen={isSmallScreen}>
          <AppLayout
            padding={{
              top: '0.8',
              bottom: '0.8',
              rightLeft: isSmallScreen && '0',
            }}>
            <MenuNavbar isSmallScreen={isSmallScreen}>
              {data && renderMainCategories()}
            </MenuNavbar>
          </AppLayout>
          {isSmallScreen && (
            <div>
              <HeaderBanner />
            </div>
          )}
          {!isSmallScreen && openedCategory && (
            <Subcategories
              subcategories={openedCategory.children}
              handleOpenedCategory={handleOpenedCategory}
              onCategoryItemClick={onCategoryItemClick}
            />
          )}
        </MenuContainer>
      </div>
    </StyledCategoryMenu>
  );
};

export default CategoriesMenu;
