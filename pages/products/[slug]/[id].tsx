import { useTranslation } from '../../../i18n';
import { Product, ProductsResponse } from '../../../api/products';
import ProductThumbnail from '../components/productThumbnail/ProductThumbnail';
import PaddedLayout from '../../../components/paddedLayout/PaddedLayout';
import Layout from '../../../components/layout/Layout';
import { withAuthServerSideProps } from '../../../lib/withServerSideProps';

interface Props {
  products: ProductsResponse;
}

const ProductsPage = ({ products }: Props) => {
  const { t } = useTranslation('products');

  return (
    <Layout title={t('title')}>
      <PaddedLayout>
        <div>
          {products.results.map((pr: Product) => <ProductThumbnail product={pr} key={pr.id} />)}
        </div>
      </PaddedLayout>
    </Layout>
  )
}

export const getServerSideProps = withAuthServerSideProps(
  'products'
);

export default ProductsPage;
