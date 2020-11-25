import React from 'react';

import { Subcategory } from '../useCategoriesMenu';
import AppLayout from '../../../common/components/appLayout/AppLayout';
import { SubcategoryContainer } from './Subcategories.styles';

interface Props {
  subcategories: Subcategory[];
}

const Subcategories: React.FC<Props> = ({ subcategories }) => {
  return (
    <SubcategoryContainer>
      <AppLayout>
        {subcategories.map(subcategory => (
          <div className='subcategories' key={subcategory.id}>
            <span className='first-level-subcategory'>{subcategory.name}</span>
            {subcategory.children.map(s => (
              <span className='second-level-subcategory' key={s.id}>
                {s.name}
              </span>
            ))}
          </div>
        ))}
      </AppLayout>
    </SubcategoryContainer>
  );
};

export default Subcategories;
