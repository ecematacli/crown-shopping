import React from 'react';

import { Subcategory } from '../useCategoriesMenu';
import AppLayout from '../../../common/components/appLayout/AppLayout';
import { SubcategoryContainer } from './Subcategories.styles';
import history from '../../../history';

interface Props {
  subcategories: Subcategory[];
  handleOpenedCategory: any;
  onCategoryItemClick: (categorySlug: string, categoryId: string) => void;
}

const Subcategories: React.FC<Props> = ({
  subcategories,
  onCategoryItemClick,
}) => {
  const renderSecondLevelSubcategory = (subcategory: Subcategory) => {
    return subcategory.children.map(s => (
      <div key={s.id} className='second-level-subcategory'>
        <span
          onClick={() => onCategoryItemClick(s.id, s.slug)}
          className='level2-subcategory-title'
        >
          {s.name}
        </span>
      </div>
    ));
  };
  return (
    <SubcategoryContainer>
      <AppLayout>
        <div className='subcategories'>
          {subcategories.map(subcategory => (
            <div key={subcategory.id}>
              <span
                onClick={() => onCategoryItemClick(subcategory.id, subcategory.slug)}
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
