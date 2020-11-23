import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../graphql/queries/category';
import { categories } from '../../graphql/queries/types/categories';
import { LocaleContext } from '../../contexts/LocaleContext';

export default () => {
  const [isSubcategoryOpen, setIsSubcategoryOpen] = useState(false)
  const { locale } = useContext(LocaleContext);
  const variables = { locale, where: 'parent is not defined' };

  const { data } = useQuery<categories>(GET_CATEGORIES, {
    variables,
  });

  return {
    data,
    isSubcategoryOpen,
    setIsSubcategoryOpen,
  };
};
