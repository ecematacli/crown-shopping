import React from 'react';

import { capitalizeFirstLetter } from '../../common/utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../common/components/appLayout/AppLayout';
import { MenuContainer, MenuNavbar } from './index.styles';
import Subcategories from './subcategories/Subcategories';

const CategoriesMenu: React.FC = () => {
  const { data, openedCategory, handleOpenedCategory, onCategoryItemClick } = useCategoriesMenu();

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

  return (
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
  );
};

export default CategoriesMenu;
