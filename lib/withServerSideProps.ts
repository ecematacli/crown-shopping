import cookie from 'cookie';
import { getTokenInfo } from '../auth';
import { getProducts } from '../api/products';
import { includeDefaultNamespaces } from '../i18n';
import { initializeApollo } from './apolloClient';

import { GET_CATEGORY_ID } from '../graphql/queries/categoryId';
import { ApolloQueryResult } from '@apollo/client';

export const withAuthServerSideProps = (
  categoryId: string | null,
  nameSpace: string
) => {
  return async ({ req }) => {
    const auth = cookie.parse(req ? req.headers.cookie || '' : document.cookie)
      ?.auth;
    const token = auth ? JSON.parse(auth)?.access_token : await getTokenInfo();

    const country = cookie.parse(req ? req.headers.cookie : '')?.country;
    const countryInfo = country ? JSON.parse(country) : null;

    const getCategoryId = async () => {
      const category: ApolloQueryResult<any> = await initializeApollo().query({
        query: GET_CATEGORY_ID,
        variables: { where: 'slug(en ="new")' },
      });

      return category.data.categories.results[0]?.id;
    };

    const { data } = await getProducts(token, {
      filter: `categories.id: subtree("${
        categoryId ? categoryId : await getCategoryId()
      }")`,
      priceCurrency: countryInfo ? countryInfo.currency : 'EUR',
      priceCountry: countryInfo ? countryInfo.code : 'US',
    });

    return {
      props: {
        namespacesRequired: includeDefaultNamespaces([`${nameSpace}`]),
        products: data,
      },
    };
  };
};
