import React from 'react';

import useCategoriesMenu from './useCategoriesMenu';

const CategoriesMenu = () => {
  const { categories } = useCategoriesMenu();

  console.log(categories)

  // const renderCategories = () => {
  //   return categories.results.map(category => (
  //     <span>
  //       {category.slug}
  //     </span>
  //   ))
  // }

  return (
    <div>
      {/* {categories && renderCategories()} */}
      <h1>h</h1>
    </div>
  )
}

export default CategoriesMenu;