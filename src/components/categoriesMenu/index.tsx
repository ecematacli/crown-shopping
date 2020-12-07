import React, { Fragment } from 'react';

import { capitalizeFirstLetter } from '../../common/utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../common/components/appLayout/AppLayout';
import useScreenWidth from '../../common/hooks/useScreenWidth';
import { MenuContainer, MenuNavbar } from './index.styles';
import Subcategories from './subcategories/Subcategories';

const CategoriesMenu: React.FC = () => {
  const { isSmallScreen } = useScreenWidth();

  const {
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
          className={!isSmallScreen ? 'menu-item' : ''}>
          <span>{capitalizeFirstLetter(category.name.toUpperCase())}</span>
          {isSmallScreen && openedCategory && (
            <Subcategories
              subcategories={category.children}
              handleOpenedCategory={handleOpenedCategory}
              onCategoryItemClick={onCategoryItemClick}
            />
          )}
        </li>
      );
    });

  return (
    <Fragment>
      <MenuContainer onMouseLeave={() => handleOpenedCategory(null)}>
        <AppLayout className='layout'>
          <MenuNavbar isSmallScreen={isSmallScreen}>{data && renderMainCategories()}</MenuNavbar>
        </AppLayout>
        {!isSmallScreen && openedCategory && (
          <Subcategories
            subcategories={openedCategory.children}
            handleOpenedCategory={handleOpenedCategory}
            onCategoryItemClick={onCategoryItemClick}
          />
        )}
      </MenuContainer>
    </Fragment>
  );
};

export default CategoriesMenu;
