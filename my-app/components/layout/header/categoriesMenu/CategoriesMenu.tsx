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

  const isDisplayingMobileMenu = isSmallScreen && isMobileMenuOpen;

  const {
    data,
    openedCategory,
    toggleOpenCategory,
    handleOpenMobileCatClick,
    onCategoryItemClick,
  } = useCategoriesMenu(setIsMobileMenuOpen);

  const listItemBlockClickOnMobile = (category: OpenedCategory) => {
    isSmallScreen && handleOpenMobileCatClick(category);
  }

  const listItemNameClick = (id: string, slug: string) => {
    !isSmallScreen && onCategoryItemClick(id, slug);
  }

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
      {isDisplayingMobileMenu && displayMobileMenuHead()}
      {data.categories.results.map(category => {
        const isMyCatOpened = openedCategory?.name === category.name;

        return (
          <li
            key={category.id}
            className={!isSmallScreen ? 'menu-item' : 'sm-menu-item'}
            onClick={() => listItemBlockClickOnMobile(category)}>
            <div className={classNames({ 'sm-menu-wrapper': isSmallScreen })}>
              <span
                onMouseOver={() => !isSmallScreen && toggleOpenCategory(category)}
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
        )
      })}
    </Fragment>
  );

  const some = {
    id: "d3f8c9f8-1800-48f8-9650-1cd03abd2998",
    name: "Women",
    slug: "women",
    children: [{
      id: "4fd3f902-9f2e-4071-9a42-04ab2a9b5f4d",
      name: "Bags",
      slug: "women-bags",
      children: [
        {
          id: "1d0c66ff-9943-4f56-a985-649a183ff53e",
          name: "Handbag",
          slug: "women-bags-handbag"
        },
        {
          id: "b1c6a310-ae00-4dfc-8660-8deb7c42d0af",
          name: "Men",
          slug: "accessories-men",
        }
      ]
    }, {
      id: "b22448bf-bd17-45c7-bb84-2d7b355df63b",
      name: "Women",
      slug: "accessories-women",
      children: [{
        id: "d3e04368-85cf-4427-b288-3a4ea67ed632",
        name: "Sunglasses",
        slug: "accessories-women-sunglasses"
      }]
    }]
  }

  return (
    <StyledCategoryMenu open={isMobileMenuOpen}>
      <div className={classNames({ 'mobile-sidebar': isDisplayingMobileMenu })}>
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
