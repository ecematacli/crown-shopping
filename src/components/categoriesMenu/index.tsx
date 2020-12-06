import React, { Fragment } from 'react';

import { capitalizeFirstLetter } from '../../common/utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../common/components/appLayout/AppLayout';
import useScreenWidth from '../../common/hooks/useScreenWidth';
import { MenuContainer, MenuNavbar, MobileWrapper } from './index.styles';
import Subcategories from './subcategories/Subcategories';
import Input from '../../common/components/input/Input';

const CategoriesMenu: React.FC = () => {
  const { isSmallScreen } = useScreenWidth();

  const {
    isPhoneMenuOpen,
    data,
    openedCategory,
    handleOpenedCategory,
    onCategoryItemClick,
    searchTerm,
    setSearchTerm
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
      <div>
        <AppLayout>
          <MobileWrapper>
            {/* <HamburgerMenu>
              <span className="menu-icon">
                {!isPhoneMenuOpen ? (
                  <i
                    onClick={() => setIsPhoneMenuOpen(true)}
                    className='fas fa-bars fa-3x'></i>
                ) : (
                    <i
                      onClick={() => setIsPhoneMenuOpen(false)}
                      className='fas fa-times fa-3x'></i>
                  )}
              </span>
            </HamburgerMenu> */}
            <Input
              isSearchBar
              value={searchTerm}
              onInputChange={(e) => setSearchTerm(e.target.value)}
              width={250}
            />
          </MobileWrapper>
        </AppLayout>
        {isPhoneMenuOpen && (
          <div style={{ background: 'white', height: '100px', marginTop: -24 }}>
            This is menu!!
          </div>
        )}
      </div>
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
      {isSmallScreen ? renderMobileMenu() : renderBiggerScreensMenu()}
    </Fragment>

  );
};

export default CategoriesMenu;
