import classNames from 'classnames';

import { Subcategory } from '../useCategoriesMenu';
import PaddedLayout from '../../../../paddedLayout/PaddedLayout';
import { SubcategoryContainer } from './Subcategories.styles';
import useScreenWidth from '../../../../../hooks/useScreenWidth';
import Image from 'next/image';

interface Props {
  subcategories: Subcategory[];
  onCategoryItemClick: (categorySlug: string, categoryId: string) => void;
  openedCategory?: string;
}

const Subcategories: React.FC<Props> = ({
  subcategories,
  onCategoryItemClick,
  openedCategory,
}) => {
  const { isSmallScreen } = useScreenWidth();

  const renderSecondLevelSubcategory = (subcategory: Subcategory) => {
    return subcategory.children.map(s => (
      <div key={s.id} className='second-level-subcategory'>
        <span
          onClick={() => onCategoryItemClick(s.id, s.slug)}
          className='level2-subcategory-title'>
          {s.name}
        </span>
      </div>
    ));
  };

  return (
    <SubcategoryContainer isSmallScreen={isSmallScreen}>
      <PaddedLayout padding={{ bottom: '0' }}>
        <div className='subcategories'>
          <div className={classNames({ 'wrapper': !isSmallScreen })}>
            {subcategories.map(subcategory => (
              <div key={subcategory.id} className='subcategory'>
                <span
                  className='subcategory-title'
                  onClick={() =>
                    onCategoryItemClick(subcategory.id, subcategory.slug)
                  }
                >
                  {subcategory.name}
                </span>
                {renderSecondLevelSubcategory(subcategory)}
              </div>
            ))}
          </div>
          {!isSmallScreen &&
            <div className='image-wrapper'>
              <Image
                src={`/images/category-${openedCategory}.jpg`}
                width='289'
                height='181'
              />
            </div>
          }
        </div>
      </PaddedLayout>
    </SubcategoryContainer>
  );
};

export default Subcategories;