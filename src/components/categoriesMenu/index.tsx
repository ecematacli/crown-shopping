import React from 'react';

import { capitalizeFirstLetter } from '../../common/utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../common/components/appLayout/AppLayout';
import { MenuContainer, MenuNavbar } from './index.styles';
import Subcategories from './subcategories/Subcategories';
import history from '../../history';

const CategoriesMenu: React.FC = () => {
  const { data, openedCategory, handleOpenedCategory } = useCategoriesMenu();

  const renderMainCategories = () =>
    data.categories.results.map(category => {
      return (
        <li
          key={category.id}
          onMouseOver={() => handleOpenedCategory(category)}
          onClick={() => history.push(`/products/${category.slug}-${category.id}`)}
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
        />
      )}
    </MenuContainer>
  );
};

export default CategoriesMenu;
