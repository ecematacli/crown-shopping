import Image from 'next/image';
import classNames from 'classnames';
import { MdClose } from 'react-icons/md';
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';

import useCategoriesMenu, { OpenedCategory } from './useCategoriesMenu';
import PaddedLayout from '../../../paddedLayout/PaddedLayout';
import useScreenWidth from '../../../../../common/hooks/useScreenWidth';
import {
  StyledCategoryMenu,
  MenuContainer,
  MenuNavbar,
  MobileHead,
} from './CategoriesMenu.styles';
import Subcategories from '../subcategories/Subcategories';
import HeaderBanner from '../headerBanner/HeaderBanner';
import { Router } from '../../../../../i18n';

interface Props {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoriesMenu: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { isLargeScreen } = useScreenWidth();

  const {
    data,
    openedCategory,
    toggleOpenCategory,
    handleOpenMobileCatClick,
    onCategoryItemClick,
  } = useCategoriesMenu(setIsMobileMenuOpen);

  const menuContainerPad = {
    top: '0.8',
    bottom: '0.8',
    rightLeft: !isLargeScreen && '0',
  };

  const listItemBlockClick = (category: OpenedCategory) => {
    !isLargeScreen && handleOpenMobileCatClick(category);
  };

  const listItemNameClick = (id: string, slug: string) => {
    isLargeScreen && onCategoryItemClick(id, slug);
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
            onClick={() => Router.push('/')}
          />
          <div onClick={() => setIsMobileMenuOpen(false)}>
            <MdClose size={32} />
          </div>
        </MobileHead>
      </PaddedLayout>
    </li>
  );

  const displayCategories = () => (
    data.categories.results.map(category => {
      const isMyCatOpened = openedCategory?.name === category.name;
      return (
        <li
          key={category.id}
          className={isLargeScreen ? 'menu-item' : 'sm-menu-item'}
          onClick={() => listItemBlockClick(category)}>
          <div className={classNames({ 'sm-menu-wrapper': !isLargeScreen })}>
            <span
              onMouseOver={() => isLargeScreen && toggleOpenCategory(category)}
              onClick={() => listItemNameClick(category.id, category.slug)}
            >
              {category.name.toUpperCase()}
            </span>
            {!isLargeScreen &&
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
          <Subcategories
            isDisplayingSubCat={!isLargeScreen && isMyCatOpened}
            subcategories={category.children}
            onCategoryItemClick={onCategoryItemClick}
          />
        </li>
      );
    })
  );

  return (
    <StyledCategoryMenu>
      <div className={classNames({
        'mobile-sidebar': !isLargeScreen,
        'closed-sidebar': !isLargeScreen && !isMobileMenuOpen,
      })}>
        <MenuContainer onMouseLeave={() => toggleOpenCategory(null)}>
          <PaddedLayout padding={menuContainerPad}>
            <MenuNavbar isThereOpenedCat={!!openedCategory}>
              {!isLargeScreen && displayMobileMenuHead()}
              {data && displayCategories()}
            </MenuNavbar>
          </PaddedLayout>
          {!isLargeScreen ? (
            <HeaderBanner />
          ) : (
              <Subcategories
                isDisplayingSubCat={isLargeScreen && Boolean(openedCategory)}
                subcategories={openedCategory?.children}
                onCategoryItemClick={onCategoryItemClick}
                openedCategory={openedCategory}
              />
            )}
        </MenuContainer>
      </div>
    </StyledCategoryMenu>
  );
};

export default CategoriesMenu;
