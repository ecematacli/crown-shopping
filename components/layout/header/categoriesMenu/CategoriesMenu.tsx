import { useRouter } from 'next/router';
import Image from 'next/image';
import { Fragment } from 'react';
import { MdClose } from 'react-icons/md';
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';
import classNames from 'classnames';

import { capitalizeFirstLetter } from '../../../../utils';
import useCategoriesMenu, { OpenedCategory } from './useCategoriesMenu';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import useScreenWidth from '../../../../hooks/useScreenWidth';
import {
  StyledCategoryMenu,
  MenuContainer,
  MenuNavbar,
  MobileHead,
} from './CategoriesMenu.styles';
import Subcategories from './subcategories/Subcategories';
import HeaderBanner from '../headerBanner/HeaderBanner';

interface Props {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoriesMenu: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const router = useRouter();
  const { isSmallScreen } = useScreenWidth();

  const {
    data,
    openedCategory,
    toggleOpenCategory,
    handleOpenMobileCatClick,
    onCategoryItemClick,
  } = useCategoriesMenu(setIsMobileMenuOpen);

  const listItemBlockClickOnMobile = (category: OpenedCategory) => {
    isSmallScreen && handleOpenMobileCatClick(category);
  };

  const listItemNameClick = (id: string, slug: string) => {
    !isSmallScreen && onCategoryItemClick(id, slug);
  };

  const displayMobileMenuHead = () => (
    <li>
      <PaddedLayout
        padding={{ top: '0', bottom: '0' }}
        className='mobile-header'>
        <MobileHead>
          <Image
            src='/logo.svg'
            alt='logo'
            width='50'
            height='50'
            className='logo-image'
            onClick={() => router.push('/')}
          />
          <div onClick={() => setIsMobileMenuOpen(false)}>
            <MdClose size={32} />
          </div>
        </MobileHead>
      </PaddedLayout>
    </li>
  );

  const displayCategories = () => (
    <Fragment>
      {isSmallScreen && displayMobileMenuHead()}
      {data.categories.results.map(category => {
        const isMyCatOpened = openedCategory?.name === category.name;
        return (
          <li
            key={category.id}
            className={!isSmallScreen ? 'menu-item' : 'sm-menu-item'}
            onClick={() => listItemBlockClickOnMobile(category)}>
            <div className={classNames({ 'sm-menu-wrapper': isSmallScreen })}>
              <span
                onMouseOver={() =>
                  !isSmallScreen && toggleOpenCategory(category)
                }
                onClick={() => listItemNameClick(category.id, category.slug)}>
                {capitalizeFirstLetter(category.name.toUpperCase())}
              </span>
              {isSmallScreen &&
                (isMyCatOpened ? (
                  <RiArrowDownSLine
                    onClick={() => handleOpenMobileCatClick(null)}
                  />
                ) : (
                    <RiArrowRightSLine
                      onClick={() => handleOpenMobileCatClick(category)}
                      className='arrow-icon'
                    />
                  ))}
            </div>
            {isSmallScreen && isMyCatOpened && (
              <Subcategories
                subcategories={category.children}
                onCategoryItemClick={onCategoryItemClick}
              />
            )}
          </li>
        );
      })}
    </Fragment>
  );

  return (
    <StyledCategoryMenu>
      <div
        className={classNames({
          'mobile-sidebar': isSmallScreen,
          'closed-sidebar': isSmallScreen && !isMobileMenuOpen,
        })}>
        <MenuContainer
          onMouseLeave={() => toggleOpenCategory(null)}
          isSmallScreen={isSmallScreen}>
          <PaddedLayout
            padding={{
              top: '0.8',
              bottom: '0.8',
              rightLeft: isSmallScreen && '0',
            }}>
            <MenuNavbar
              isSmallScreen={isSmallScreen}
              isThereOpenedCat={!!openedCategory}>
              {data && displayCategories()}
            </MenuNavbar>
          </PaddedLayout>
          {isSmallScreen && <HeaderBanner />}
          {!isSmallScreen && openedCategory && (
            <Subcategories
              subcategories={openedCategory.children}
              onCategoryItemClick={onCategoryItemClick}
              openedCategory={openedCategory.slug}
            />
          )}
        </MenuContainer>
      </div>
    </StyledCategoryMenu>
  );
};

export default CategoriesMenu;
