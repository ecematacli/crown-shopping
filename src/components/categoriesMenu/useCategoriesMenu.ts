import { useContext } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from '../../graphql/queries/category';
import { LocaleContext } from '../../contexts/LocaleContext';

export default () => {
  const { locale } = useContext(LocaleContext);
  const { data } = useQuery(GET_CATEGORIES, {
    variables: { locale, where: 'parent is not defined' },
  });

  return {
    data,
  };
};

// const { data } = useQuery(GET_DOGS, ;
