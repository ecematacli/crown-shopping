import { ApolloQueryResult } from '@apollo/client';
import cookie from 'cookie';

import { getTokenInfo } from '../auth';
import { getProducts } from '../api/products';
import { includeDefaultNamespaces } from '../i18n';
import { initializeApollo } from './apolloClient';
import { GET_CATEGORY_ID } from '../graphql/queries/category';
import { categoryId } from '../graphql/queries/types/categoryId';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const withServerSideProps = (
  nameSpace: string,
  shouldFetchCategoryId?: boolean
) => {
  return async ({ req, params }: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const auth = cookie.parse(req ? req.headers.cookie : '')?.auth;
    const token = auth ? JSON.parse(auth)?.access_token : await getTokenInfo();

    const country = cookie.parse(req ? req.headers.cookie : '')?.country;

    const countryInfo = country ? JSON.parse(country) : '';

    const getCategoryId = async () => {
      const locale = countryInfo ? countryInfo.locale : 'en';
      // Get new collection id
      const category: ApolloQueryResult<categoryId> = await initializeApollo().query(
        {
          query: GET_CATEGORY_ID,
          variables: { where: `slug(${locale} ="new")` },
        }
      );

      return category.data.categories.results[0]?.id;
    };

    const { data } = await getProducts(token, {
      filter: `categories.id: subtree("${
        !shouldFetchCategoryId ? params.id : await getCategoryId()
      }")`,
      priceCurrency: countryInfo ? countryInfo.currency : 'USD',
      priceCountry: countryInfo ? countryInfo.code : 'US',
    });

    console.log('CALLEDDDDDDDD', data);
    return {
      props: {
        namespacesRequired: includeDefaultNamespaces([`${nameSpace}`]),
        products: data,
      },
    };
  };
};
