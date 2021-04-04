import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../../../../graphql/queries/category';
import { categories } from '../../../../../graphql/queries/types/categories';
import { useCountryInfoContext } from '../../../../../common/contexts/CountryInfoContext';
import { useOpenedMenuContext } from '../../../../../common/contexts/OpenedMenuContext';
import useScreenWidth from '../../../../../common/hooks/useScreenWidth';
import { Router } from '../../../../../i18n';

interface Category {
  slug: string;
  name: string;
  id: string;
}

export interface Subcategory extends Category {
  children: SecondLevelSubcategory[];
}

interface SecondLevelSubcategory extends Category {}

export interface OpenedCategory extends Category {
  children: Subcategory[];
}

type setIsMobileMenuOpen = React.Dispatch<React.SetStateAction<boolean>>;

const useCategoriesMenu = (setIsMobileMenuOpen: setIsMobileMenuOpen) => {
  const { isSmallScreen } = useScreenWidth();
  const { setIsMenuOpen } = useOpenedMenuContext();
  const {
    countryInfo: { locale },
  } = useCountryInfoContext();
  const variables = { locale, where: 'parent is not defined' };

  const { data } = useQuery<categories>(GET_CATEGORIES, {
    variables,
  });
  const [openedCategory, setOpenedCategory] = useState<OpenedCategory>(null);

  const toggleOpenCategory = (category: OpenedCategory | null) => {
    setOpenedCategory(category);
    category ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  const handleOpenMobileCatClick = (category: OpenedCategory) => {
    category?.name === openedCategory?.name
      ? setOpenedCategory(null)
      : setOpenedCategory(category);
  };

  const onCategoryItemClick = (categoryId: string, categorySlug: string) => {
    Router.push(`/products/${categorySlug}/${categoryId}`);
    setOpenedCategory(null);
    !isSmallScreen ? setIsMenuOpen(false) : setIsMobileMenuOpen(false);
  };

  return {
    data,
    openedCategory,
    toggleOpenCategory,
    handleOpenMobileCatClick,
    onCategoryItemClick,
  };
};

export default useCategoriesMenu;
