import React, { Fragment } from 'react';

import { capitalizeFirstLetter } from '../../common/utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../common/components/appLayout/AppLayout';
import { MenuContainer, MenuNavbar, HamburgerMenu } from './index.styles';
import Subcategories from './subcategories/Subcategories';

const CategoriesMenu: React.FC = () => {
  const {
    isPhoneMenuOpen,
    setIsPhoneMenuOpen,
    screenWidth,
    data,
    openedCategory,
    handleOpenedCategory,
    onCategoryItemClick,
  } = useCategoriesMenu();

  const renderMainCategories = () =>
    data.categories.results.map(category => {
      return (
        <li
          key={category.id}
          onMouseOver={() => handleOpenedCategory(category)}
          onClick={() => onCategoryItemClick(category.id, category.slug)}
          className='menu-item'>
          <span>{capitalizeFirstLetter(category.name.toUpperCase())}</span>
        </li>
      );
    });

  const renderMobileMenu = () => {
    return (
      <AppLayout>
        <HamburgerMenu>
          {!isPhoneMenuOpen ? (
            <i
              onClick={() => setIsPhoneMenuOpen(true)}
              className='fas fa-bars fa-3x'></i>
          ) : (
              <i
                onClick={() => setIsPhoneMenuOpen(false)}
                className='fas fa-times fa-3x'></i>
            )}
        </HamburgerMenu>
      </AppLayout>
    );
  };

  const renderBiggerScreensMenu = () => (
    <MenuContainer onMouseLeave={() => handleOpenedCategory(null)}>
      <AppLayout className='layout'>
        <MenuNavbar>{data && renderMainCategories()}</MenuNavbar>
      </AppLayout>
      {openedCategory && (
        <Subcategories
          subcategories={openedCategory.children}
          handleOpenedCategory={handleOpenedCategory}
          onCategoryItemClick={onCategoryItemClick}
        />
      )}
    </MenuContainer>
  )

  return (
    <Fragment>
      {screenWidth < 768 ? renderMobileMenu() : renderBiggerScreensMenu()}
    </Fragment>

  );
};

export default CategoriesMenu;
