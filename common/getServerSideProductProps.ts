import { GetServerSidePropsContext } from 'next';
import { ApolloQueryResult } from '@apollo/client';
import cookie from 'cookie';
import { ParsedUrlQuery } from 'querystring';

import { getProducts } from '../api/products';
import { includeDefaultNamespaces } from '../i18n';
import { initializeApollo } from '../lib/apolloClient';
import { GET_CATEGORY_ID } from '../graphql/queries/category';
import { categoryId } from '../graphql/queries/types/categoryId';
import getDeviceType from './utils/deviceType';

export const getServerSideProductProps = (
  nameSpace: string,
  shouldFetchCategoryId?: boolean
) => {
  return async ({ req, params }: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const auth = cookie.parse(req?.headers.cookie || '')?.auth;
    const token = auth ? JSON.parse(auth)?.access_token : '';

    const country = cookie.parse(req?.headers.cookie || '')?.country;

    const countryInfo = country ? JSON.parse(country) : '';

    const fetchCategoryId = async () => {
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
        !shouldFetchCategoryId ? params.id : await fetchCategoryId()
      }")`,
      priceCurrency: countryInfo ? countryInfo.currency : 'USD',
      priceCountry: countryInfo ? countryInfo.code : 'US',
    });

    return {
      props: {
        namespacesRequired: includeDefaultNamespaces([`${nameSpace}`]),
        deviceType: nameSpace === 'index' ? getDeviceType(req) : null, // for the home page
        products: data,
      },
    };
  };
};
