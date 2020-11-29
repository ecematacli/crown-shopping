import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../graphql/queries/category';
import { categories } from '../../graphql/queries/types/categories';
import { LocaleContext } from '../../contexts/LocaleContext';
import { OpenedMenuContext } from '../../contexts/OpenedMenuContext';
import history from '../../history';
interface Category {
  slug: string;
  name: string;
  id: string;
}

export interface Subcategory extends Category {
  children: SecondLevelSubcategory[];
}
interface SecondLevelSubcategory extends Category {}

interface OpenedCategories extends Category {
  children: Subcategory[];
}

export default () => {
  const [openedCategory, setOpenedCategory] = useState<OpenedCategories>(null);
  const { locale } = useContext(LocaleContext);
  const { setIsMenuOpened } = useContext(OpenedMenuContext);
  const variables = { locale, where: 'parent is not defined' };

  const { data } = useQuery<categories>(GET_CATEGORIES, {
    variables,
  });

  const handleOpenedCategory = (category: OpenedCategories | null) => {
    setOpenedCategory(category);
    category ? setIsMenuOpened(true) : setIsMenuOpened(false);
  };

  const onCategoryItemClick = (categoryId: string, categorySlug: string) => {
    history.push(`/products/${categoryId}/${categorySlug}`);
    setOpenedCategory(null);
    setIsMenuOpened(false);
  };

  return {
    data,
    openedCategory,
    handleOpenedCategory,
    onCategoryItemClick,
  };
};
