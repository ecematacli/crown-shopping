import { GetServerSidePropsContext } from 'next';
import { ApolloQueryResult } from '@apollo/client';
import { ParsedUrlQuery } from 'querystring';

import { getProducts } from '../api/products';
import { includeDefaultNamespaces } from '../i18n';
import { initializeApollo } from '../lib/apolloClient';
import { GET_CATEGORY_ID } from '../graphql/queries/category';
import { categoryId } from '../graphql/queries/types/categoryId';
import getDeviceType from './utils/deviceType';
import { getAuthCookie, getCountryCookie } from './utils/cookie';

export const getServerSideProductProps = (
  nameSpace: string,
  shouldFetchCategoryId?: boolean
) => {
  return async ({ req, params }: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const accessToken = getAuthCookie(req?.headers);
    const countryInfo = getCountryCookie(req?.headers);

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

    const { data } = await getProducts(accessToken, {
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
