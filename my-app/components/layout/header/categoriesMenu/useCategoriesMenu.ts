import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../../../graphql/queries/category';
import { categories } from '../../../../graphql/queries/types/categories';
import { CountryInfoContext } from '../../../../contexts/CountryInfoContext';
import { OpenedMenuContext } from '../../../../contexts/OpenedMenuContext';
import useScreenWidth from '../../../../hooks/useScreenWidth';

interface Category {
  slug: string;
  name: string;
  id: string;
}

export interface Subcategory extends Category {
  children: SecondLevelSubcategory[];
}

interface SecondLevelSubcategory extends Category {}

export interface OpenedCategories extends Category {
  children: Subcategory[];
}

type setIsMobileMenuOpen = React.Dispatch<React.SetStateAction<boolean>>;

const useCategoriesMenu = (setIsMobileMenuOpen: setIsMobileMenuOpen) => {
  const router = useRouter();
  const { isSmallScreen } = useScreenWidth();
  const { setIsMenuOpened } = useContext(OpenedMenuContext);
  const {
    countryInfo: { locale },
  } = useContext(CountryInfoContext);
  const variables = { locale, where: 'parent is not defined' };

  const { data } = useQuery<categories>(GET_CATEGORIES, {
    variables,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [openedCategory, setOpenedCategory] = useState<OpenedCategories>(null);
  const [openedMobileCategory, setOpenedMobileCategory] = useState<{
    [key: string]: boolean;
  }>({});

  const handleOpenedCategory = (category: OpenedCategories | null) => {
    !isSmallScreen && setOpenedCategory(category);
    category && !isSmallScreen ? setIsMenuOpened(true) : setIsMenuOpened(false);
  };

  const handleOpenMobileCatClick = (category: OpenedCategories) => {
    setOpenedMobileCategory({
      ...openedMobileCategory,
      [category.name]: !openedMobileCategory[category.name],
    });

    console.log('?openedCategory', openedMobileCategory[category.name]);

    openedMobileCategory[category.name]
      ? setOpenedCategory(null)
      : setOpenedCategory(category);
    // setOpenedCategory(category);
  };

  const onCategoryItemClick = (categoryId: string, categorySlug: string) => {
    !isSmallScreen && router.push(`/products/${categoryId}/${categorySlug}`);
    !isSmallScreen && setOpenedCategory(null);
    !isSmallScreen && setIsMenuOpened(false);
  };

  return {
    data,
    openedMobileCategory,
    openedCategory,
    handleOpenedCategory,
    handleOpenMobileCatClick,
    onCategoryItemClick,
    searchTerm,
    setSearchTerm,
  };
};

export default useCategoriesMenu;
