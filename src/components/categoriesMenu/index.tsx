import React from 'react';

import { capitalizeFirstLetter } from '../../utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../common/components/appLayout/AppLayout';
import { MenuContainer, MenuNavbar } from './index.styles';
import Subcategories from './subcategories/Subcategories';
import history from '../../history';

const CategoriesMenu: React.FC = () => {
  const { data, openedCategory, setOpenedCategory } = useCategoriesMenu();

  const renderMainCategories = () =>
    data.categories.results.map(category => {
      return (
        <li
          key={category.id}
          onMouseEnter={() => setOpenedCategory(category)}
          // onMouseLeave={() => setOpenedCategory(null)}
          onClick={() => history.push(`${category.slug}`)}
          className="menu-item">
          <span>{capitalizeFirstLetter(category.name.toUpperCase())}</span>
        </li>
      )
    })

  return (
    <MenuContainer>
      <AppLayout className="layout">
        <MenuNavbar>{data && renderMainCategories()}</MenuNavbar>
      </AppLayout>
      {openedCategory && <Subcategories subcategories={openedCategory.children} />}
    </MenuContainer>
  );
};

export default CategoriesMenu;
