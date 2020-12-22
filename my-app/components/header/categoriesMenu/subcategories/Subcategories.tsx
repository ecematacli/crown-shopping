import React from 'react';

import { Subcategory, OpenedCategories } from '../useCategoriesMenu';
import AppLayout from '../../../../components/appLayout/AppLayout';
import { SubcategoryContainer } from './Subcategories.styles';
import useScreenWidth from '../../../../hooks/useScreenWidth';

interface Props {
  subcategories: Subcategory[];
  onCategoryItemClick: (categorySlug: string, categoryId: string) => void;
  handleOpenedCategory?: (category: OpenedCategories) => void;
}

const Subcategories: React.FC<Props> = ({
  subcategories,
  onCategoryItemClick,
}) => {
  const { isSmallScreen } = useScreenWidth();

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
    <SubcategoryContainer isSmallScreen={isSmallScreen}>
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
