import { GetServerSideProps } from 'next';

import { useTranslation } from '../../../i18n';
import ProductThumbnail from '../../../components/productThumbnail/ProductThumbnail';
import PaddedLayout from '../../../components/paddedLayout/PaddedLayout';
import Layout from '../../../components/layout/Layout';
import { withServerSideProps } from '../../../lib/withServerSideProps';
import { Product, ProductsAPIResponse } from '../../../types/products';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { ProductListContainer } from './Products.styles';

interface Props {
  products: ProductsAPIResponse;
}

const ProductsPage = ({ products }: Props) => {
  const { t } = useTranslation('products');
  const { isSmallScreen } = useScreenWidth();

  return (
    <Layout title={t('title')}>
      <PaddedLayout>
        <ProductListContainer isSmallScreen={isSmallScreen}>
          {products.results.map((product: Product) => (
            <div className='product-thumbnail'>
              <ProductThumbnail product={product} key={product.id} />
            </div>
          ))}
        </ProductListContainer>
      </PaddedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withServerSideProps(
  'products'
);

export default ProductsPage;
