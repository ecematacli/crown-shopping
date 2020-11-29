import React from 'react';

import { Subcategory } from '../useCategoriesMenu';
import AppLayout from '../../../common/components/appLayout/AppLayout';
import { SubcategoryContainer } from './Subcategories.styles';
import history from '../../../history';

interface Props {
  subcategories: Subcategory[];
  handleOpenedCategory: any;
}

const Subcategories: React.FC<Props> = ({
  subcategories,
  handleOpenedCategory,
}) => {
  const renderSecondLevelSubcategory = (subcategory: Subcategory) => {
    return subcategory.children.map(s => (
      <div key={s.id} className='second-level-subcategory'>
        <span
          onClick={() => history.push(`/products/${s.slug}-${s.id}`)}
          className='level2-subcategory-title'
        >
          {s.name}
        </span>
      </div>
    ));
  };
  return (
    <SubcategoryContainer onMouseLeave={() => handleOpenedCategory(null)}>
      <AppLayout>
        <div className='subcategories'>
          {subcategories.map(subcategory => (
            <div key={subcategory.id}>
              <span
                onClick={() => history.push(`/products/${subcategory.slug}-${subcategory.id}`)}
                className='subcategory-title'>
                {subcategory.name}
              </span>
              {renderSecondLevelSubcategory(subcategory)}
            </div>
          ))}
        </div>
      </AppLayout>
    </SubcategoryContainer>
  );
};

export default Subcategories;
