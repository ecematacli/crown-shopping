import { useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../graphql/queries/category';
import { categories } from '../../graphql/queries/types/categories';
import { LocaleContext } from '../../contexts/LocaleContext';

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
  const variables = { locale, where: 'parent is not defined' };

  const { data } = useQuery<categories>(GET_CATEGORIES, {
    variables,
  });

  return {
    data,
    openedCategory,
    setOpenedCategory,
  };
};
