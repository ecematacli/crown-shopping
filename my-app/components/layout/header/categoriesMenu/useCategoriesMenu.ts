import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../../../graphql/queries/category';
import { categories } from '../../../../graphql/queries/types/categories';
import { CountryContext } from '../../../../contexts/CountryContext';
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

  const {
    country: { locale },
  } = useContext(CountryContext);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  const [openedCategory, setOpenedCategory] = useState<OpenedCategories>(null);
  const { setIsMenuOpened } = useContext(OpenedMenuContext);
  const variables = { locale, where: 'parent is not defined' };
  const [searchTerm, setSearchTerm] = useState('');

  const { data } = useQuery<categories>(GET_CATEGORIES, {
    variables,
  });

  const handleOpenedCategory = (category: OpenedCategories | null) => {
    // console.log('called', category);
    setOpenedCategory(category);
    category && isSmallScreen && setIsMobileMenuOpen(false);
    category && !isSmallScreen ? setIsMenuOpened(true) : setIsMenuOpened(false);
  };

  const onCategoryItemClick = (categoryId: string, categorySlug: string) => {
    console.log('runs2');
    router.push(`/products/${categoryId}/${categorySlug}`);
    setOpenedCategory(null);
    setIsMenuOpened(false);
  };

  return {
    isPhoneMenuOpen,
    setIsPhoneMenuOpen,
    data,
    openedCategory,
    handleOpenedCategory,
    onCategoryItemClick,
    searchTerm,
    setSearchTerm,
  };
};

export default useCategoriesMenu;
