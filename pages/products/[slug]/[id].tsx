import { GetServerSideProps } from 'next';

import { useTranslation } from '../../../i18n';
import ProductThumbnail from '../../../components/productThumbnail/ProductThumbnail';
import PaddedLayout from '../../../components/paddedLayout/PaddedLayout';
import Layout from '../../../components/layout/Layout';
import { withServerSideProps } from '../../../lib/withServerSideProps';
import { Product, ProductsAPIResponse } from '../../../types/products';

interface Props {
  products: ProductsAPIResponse;
}

const ProductsPage = ({ products }: Props) => {
  const { t } = useTranslation('products');

  return (
    <Layout title={t('title')}>
      <PaddedLayout>
        <div>
          {products.results.map((product: Product) => (
            <ProductThumbnail product={product} key={product.id} width={30.9} />
          ))}
        </div>
      </PaddedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withServerSideProps(
  'products'
);

export default ProductsPage;
