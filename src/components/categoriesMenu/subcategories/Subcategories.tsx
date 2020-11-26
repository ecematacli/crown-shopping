import React from 'react';

import { Subcategory } from '../useCategoriesMenu';
import AppLayout from '../../../common/components/appLayout/AppLayout';
import { SubcategoryContainer } from './Subcategories.styles';

interface Props {
  subcategories: Subcategory[];
}

const Subcategories: React.FC<Props> = ({ subcategories }) => {

  const renderSecondLevelSubcategory = (subcategory: Subcategory) => {
    return subcategory.children.map(s => (
      <div className='second-level-subcategory'>
        <span className='level2-subcategory-title' key={s.id}>
          {s.name}
        </span>
      </div>
    ))
  }
  return (
    <SubcategoryContainer>
      <AppLayout>
        <div className='subcategories'>
          {subcategories.map(subcategory => (
            <div key={subcategory.id}>
              <span className='subcategory-title'>{subcategory.name}</span>
              {renderSecondLevelSubcategory(subcategory)}
            </div>
          ))}
        </div>
      </AppLayout>
    </SubcategoryContainer>
  );
};

export default Subcategories;
