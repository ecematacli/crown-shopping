import React from 'react';

import { Subcategory, OpenedCategories } from '../useCategoriesMenu';
import PaddedLayout from '../../../../paddedLayout/PaddedLayout';
import { SubcategoryContainer } from './Subcategories.styles';
import useScreenWidth from '../../../../../hooks/useScreenWidth';

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
      <PaddedLayout padding={{ bottom: '0' }}>
        <div className='subcategories'>
          {subcategories.map(subcategory => (
            <div key={subcategory.id} className="subcategory">
              <span
                onClick={() => onCategoryItemClick(subcategory.id, subcategory.slug)}
                className='subcategory-title'>
                {subcategory.name}
              </span>
              {renderSecondLevelSubcategory(subcategory)}
            </div>
          ))}
        </div>
      </PaddedLayout>
    </SubcategoryContainer>
  );
};

export default Subcategories;
