import { GetServerSideProps } from 'next';
import cookie from 'cookie';

import { useTranslation, includeDefaultNamespaces } from '../../../i18n';
import { getProducts } from '../../../api/products';
import useProductList from '../useProductList';
import ProductThumbnail from '../components/productThumbnail/ProductThumbnail';
import Layout from '../../../components/layout';
import { CountryContext } from '../../../contexts/CountryContext';
import { useRouter } from 'next/router';
import { getTokenInfo } from '../../../auth';

const ProductsPage = ({ products }) => {
  const { t } = useTranslation('products');
  const router = useRouter();

  console.log('products in product cmp', products)

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={t('title')}>
      <div>
        PRODUCTS PAGE!!!
      {products.results.map(pr => <ProductThumbnail product={pr} key={pr.id} />)}
      </div>)
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const auth = cookie.parse(req ? req.headers.cookie || '' : document.cookie)?.auth;
  const session = auth ? JSON.parse(auth)?.access_token : await getTokenInfo();

  const { data } = await getProducts(session, {
    filter: `categories.id: subtree("${params.id}")`,
    priceCurrency: 'EUR',
    priceCountry: 'US'
  });

  return {
    props: {
      namespacesRequired: includeDefaultNamespaces(['products']),
      products: data
    },
  }
};

export default ProductsPage;
