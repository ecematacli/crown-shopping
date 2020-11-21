import React from 'react';

import useCategoriesMenu from './useCategoriesMenu';

const CategoriesMenu = () => {
  const { data } = useCategoriesMenu();
  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}

export default CategoriesMenu;