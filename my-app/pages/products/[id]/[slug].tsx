import { GetStaticProps, GetStaticPaths } from 'next';

import { useTranslation, includeDefaultNamespaces } from '../../../i18n';
import { getProducts } from '../../../api/products';
import useProductList from '../useProductList';
import ProductThumbnail from '../components/productThumbnail/ProductThumbnail';
import Layout from '../../../components/layout';
import { CountryContext } from '../../../contexts/CountryContext';
import { initializeApollo } from '../../../lib/apolloClient';
import { GET_CATEGORIES } from '../../../graphql/queries/category';
import { useRouter } from 'next/router';

const ProductsPage = () => {
  const { t } = useTranslation('products');
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={t('products')}>
      <div>
        PRODUCTS PAGE!!!
      {/* {products.map(pr => <ProductThumbnail product={pr} key={pr.id} />)} */}
      </div>)
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const variables = { locale: 'en', where: 'parent is not defined' };

  const { data } = await apolloClient.query({
    query: GET_CATEGORIES,
    variables
  })

  const paths = data.categories.results.map(category => ({
    params: { id: category.id, slug: category.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps = async ({ params, ...rest }) => {
  // console.log('country', country)
  console.log(rest)
  // const { data } = await getProducts({
  //   filter: `categories.id: subtree("${params.id}")`,
  //   // priceCurrency: country.currency,
  //   // priceCountry: country.name,
  // });

  return {
    props: {
      namespacesRequired: includeDefaultNamespaces(['products']),
      // data
    },
    revalidate: 1,
  }
};

export default ProductsPage;
