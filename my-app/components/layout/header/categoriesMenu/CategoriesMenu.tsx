import { useRouter } from 'next/router';
import Image from 'next/image';
import { Fragment } from 'react';
import { MdClose } from 'react-icons/md';
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';
import classNames from 'classnames';

import { capitalizeFirstLetter } from '../../../../utils';
import useCategoriesMenu from './useCategoriesMenu';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import useScreenWidth from '../../../../hooks/useScreenWidth';
import {
  StyledCategoryMenu,
  MenuContainer,
  MenuNavbar,
  MobileLogo,
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

  const isDisplayingMobileMenu = isSmallScreen && isMobileMenuOpen;

  const {
    data,
    openedMobileCategory,
    openedCategory,
    handleOpenedCategory,
    handleOpenMobileCatClick,
    onCategoryItemClick,
  } = useCategoriesMenu(setIsMobileMenuOpen);

  console.log(openedCategory);

  const renderMobileMenuHeader = () => (
    <PaddedLayout padding={{ top: '0', bottom: '0' }} className="mobile-header">
      <MobileLogo onClick={() => router.push('/')}>
        <Image
          src='/logo.svg'
          alt='logo'
          width='50'
          height='50'
          className='logo-image'
        />
        <div onClick={() => setIsMobileMenuOpen(false)}>
          <MdClose size={32} />
        </div>
      </MobileLogo>
    </PaddedLayout>
  );

  const renderMainCategories = () => (
    <Fragment>
      {isDisplayingMobileMenu && renderMobileMenuHeader()}
      {data.categories.results.map(category => {
        return (
          <li
            key={category.id}
            onMouseOver={() => handleOpenedCategory(category)}
            onClick={() => onCategoryItemClick(category.id, category.slug)}
            className={!isSmallScreen ? 'menu-item' : 'sm-menu-item'}>
            <div className={classNames({ 'sm-menu-wrapper': isSmallScreen })}>
              <span>{capitalizeFirstLetter(category.name.toUpperCase())}</span>
              {isSmallScreen &&
                openedCategory &&
                openedMobileCategory[category.name] && (
                  <RiArrowDownSLine
                    onClick={() => handleOpenMobileCatClick(category)}
                  />
                )}
              {isSmallScreen && !openedCategory && (
                <RiArrowRightSLine
                  onClick={() => handleOpenMobileCatClick(category)}
                  className='arrow-icon'
                />
              )}
            </div>
            {isSmallScreen && openedCategory?.name === category.name && (
              <Subcategories
                subcategories={category.children}
                handleOpenedCategory={handleOpenedCategory}
                onCategoryItemClick={onCategoryItemClick}
              />
            )}
          </li>
        );
      })}
    </Fragment>
  );

  return (
    <StyledCategoryMenu open={isMobileMenuOpen}>
      <div className={classNames({ 'mobile-sidebar': isDisplayingMobileMenu })}>
        <MenuContainer
          onMouseLeave={() => handleOpenedCategory(null)}
          isSmallScreen={isSmallScreen}>
          <PaddedLayout
            padding={{
              top: '0.8',
              bottom: '0.8',
              rightLeft: isSmallScreen && '0',
            }}>
            <MenuNavbar isSmallScreen={isSmallScreen}>
              {data && renderMainCategories()}
            </MenuNavbar>
          </PaddedLayout>
          {isSmallScreen && (
            <div>
              <HeaderBanner />
            </div>
          )}
          {!isSmallScreen && openedCategory && (
            <Subcategories
              subcategories={openedCategory.children}
              handleOpenedCategory={handleOpenedCategory}
              onCategoryItemClick={onCategoryItemClick}
            />
          )}
        </MenuContainer>
      </div>
    </StyledCategoryMenu>
  );
};

export default CategoriesMenu;
