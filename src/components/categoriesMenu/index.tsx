import React from 'react';

import { capitalizeFirstLetter } from '../../utils';
import useCategoriesMenu from './useCategoriesMenu';
import AppLayout from '../../common/components/appLayout/AppLayout';
import { MenuContainer, MenuNavbar } from './index.styles';
import Subcategories from './subcategories/Subcategories';

const CategoriesMenu = () => {
  const { data, isSubcategoryOpen, setIsSubcategoryOpen } = useCategoriesMenu();

  console.log('??', isSubcategoryOpen);

  const renderCategories = () => {
    return data.categories.results.map((category) => (
      <li
        onMouseEnter={() => setIsSubcategoryOpen(true)}
        onMouseLeave={() => setIsSubcategoryOpen(false)}
        key={category.id}
        className="menu-item">
        {capitalizeFirstLetter(category.slug)}
      </li>
    ));
  };

  return (
    <MenuContainer>
      <AppLayout className="some">
        <MenuNavbar>{data && renderCategories()}</MenuNavbar>
      </AppLayout>
      {isSubcategoryOpen && <Subcategories />}
    </MenuContainer>
  );
};

export default CategoriesMenu;
