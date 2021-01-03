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

export interface OpenedCategory extends Category {
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
  const [openedCategory, setOpenedCategory] = useState<OpenedCategory>(null);

  const toggleOpenCategory = (category: OpenedCategory | null) => {
    setOpenedCategory(category);
    category ? setIsMenuOpened(true) : setIsMenuOpened(false);
  };

  const handleOpenMobileCatClick = (category: OpenedCategory) => {
    category?.name === openedCategory?.name
      ? setOpenedCategory(null)
      : setOpenedCategory(category);
  };

  const onCategoryItemClick = (categoryId: string, categorySlug: string) => {
    router.push(`/products/${categorySlug}/${categoryId}`);
    setOpenedCategory(null);
    !isSmallScreen ? setIsMenuOpened(false) : setIsMobileMenuOpen(false);
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
