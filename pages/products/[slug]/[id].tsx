import { GetServerSideProps } from 'next';

import { useTranslation } from '../../../i18n';
import ProductThumbnail from '../../../components/productThumbnail/ProductThumbnail';
import PaddedLayout from '../../../components/layouts/paddedLayout/PaddedLayout';
import Layout from '../../../components/layouts/pageLayout/Layout';
import { getServerSideProductProps } from '../../../common/getServerSideProductProps';
import { Product, ProductsAPIResponse } from '../../../types/products';
import ProductListContainer from './index.styles';

interface Props {
  products: ProductsAPIResponse;
}

const ProductsPage = ({ products }: Props) => {
  const { t } = useTranslation('products');

  return (
    <Layout title={t('title')}>
      <PaddedLayout>
        <ProductListContainer>
          {products.results.map((product: Product) => (
            <div key={product.id} className='product-thumbnail'>
              <ProductThumbnail product={product} height={44.5} />
            </div>
          ))}
        </ProductListContainer>
      </PaddedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = getServerSideProductProps(
  'products'
);

export default ProductsPage;
