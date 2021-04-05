import Image from 'next/image';
import classNames from 'classnames';

import {
  Subcategory,
  OpenedCategory,
} from '../categoriesMenu/useCategoriesMenu';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import {
  StyledSubcategories,
  SubcategoryContainer
} from './Subcategories.styles';
import useScreenWidth from '../../../../../common/hooks/useScreenWidth';

interface Props {
  isDisplayingSubCat: boolean;
  subcategories: Subcategory[];
  onCategoryItemClick: (categorySlug: string, categoryId: string) => void;
  openedCategory?: OpenedCategory;
}

const Subcategories: React.FC<Props> = ({
  isDisplayingSubCat,
  onCategoryItemClick,
  openedCategory,
  subcategories,
}) => {
  const { isSmallScreen } = useScreenWidth();

  const containerClass = classNames({
    'open-lg-menu': !isSmallScreen && openedCategory,
    'close-lg-menu': !isSmallScreen && !openedCategory,
  });

  const handleCategoryItemClick = (subcategory: Subcategory) =>
    onCategoryItemClick(subcategory.id, subcategory.slug);

  const displaySecondLevelSubcategory = (subcategory: Subcategory) => (
    <ul>
      {subcategory.children.map(s => (
        <li key={s.id} className='second-level-subcategory'>
          <span
            onClick={() => onCategoryItemClick(s.id, s.slug)}
            className='level2-subcategory-title'>
            {s.name}
          </span>
        </li>
      ))}
    </ul>
  );

  const displayFirstLevelSubcategory = () => (
    <ul className={classNames({ wrapper: !isSmallScreen })}>
      {subcategories.map((subcategory: Subcategory) => (
        <li key={subcategory.id} className='subcategory'>
          <span
            className='subcategory-title'
            onClick={() => handleCategoryItemClick(subcategory)}>
            {subcategory.name}
          </span>
          {displaySecondLevelSubcategory(subcategory)}
        </li>
      ))}
    </ul>
  );

  return (
    <StyledSubcategories>
      <div className={containerClass}>
        {isDisplayingSubCat && (
          <SubcategoryContainer>
            <PaddedLayout padding={{ bottom: '0' }}>
              <div className='subcategories'>
                {displayFirstLevelSubcategory()}
                <div className='image-wrapper'>
                  <Image
                    src={`/images/category-${openedCategory?.slug}.jpg`}
                    width='390'
                    height='260'
                  />
                </div>
              </div>
            </PaddedLayout>
          </SubcategoryContainer>
        )}
      </div>
    </StyledSubcategories>
  );
};

export default Subcategories;
