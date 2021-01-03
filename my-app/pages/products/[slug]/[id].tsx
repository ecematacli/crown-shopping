import { GetServerSideProps } from 'next';
import cookie from 'cookie';

import { useTranslation, includeDefaultNamespaces } from '../../../i18n';
import { getProducts, Product, ProductsResponse } from '../../../api/products';
import ProductThumbnail from '../components/productThumbnail/ProductThumbnail';
import Layout from '../../../components/layout';
import { useRouter } from 'next/router';
import { getTokenInfo } from '../../../auth';

interface Props {
  products: ProductsResponse;
}

const ProductsPage = ({ products }: Props) => {
  const { t } = useTranslation('products');
  const router = useRouter();

  return (
    <Layout title={t('title')}>
      <div>
        {products.results.map((pr: Product) => <ProductThumbnail product={pr} key={pr.id} />)}
      </div>)
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const auth = cookie.parse(req ? req.headers.cookie || '' : document.cookie)?.auth;
  const token = auth ? JSON.parse(auth)?.access_token : await getTokenInfo();

  const country = cookie.parse(req ? req.headers.cookie : '')?.country;
  const countryInfo = JSON.parse(country);

  const { data } = await getProducts(token, {
    filter: `categories.id: subtree("${params.id}")`,
    priceCurrency: countryInfo ? countryInfo.currency : 'EUR',
    priceCountry: countryInfo ? countryInfo.code : 'US'
  });

  return {
    props: {
      namespacesRequired: includeDefaultNamespaces(['products']),
      products: data
    },
  }
};

export default ProductsPage;
