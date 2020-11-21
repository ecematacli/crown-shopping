import React from 'react';

import { capitalizeFirstLetter } from '../../utils';
import useCategoriesMenu from './useCategoriesMenu';
import { MenuContainer, MenuNavbar } from './Categories.styles';

const CategoriesMenu = () => {
  const { data } = useCategoriesMenu();

  const renderCategories = () => {
    return data.categories.results.map(category => (
      <li key={category.id} className="menu-item">
        {capitalizeFirstLetter(category.slug)}
      </li>
    ))
  }

  return (
    <MenuContainer>
      <MenuNavbar>
        {data && renderCategories()}
      </MenuNavbar>
    </MenuContainer>
  )
}

export default CategoriesMenu;