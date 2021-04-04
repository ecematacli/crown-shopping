import { GetServerSideProps } from 'next';

import { useTranslation, Router } from '../../../i18n';
import ProductThumbnail from '../../../components/productThumbnail/ProductThumbnail';
import PaddedLayout from '../../../components/layouts/paddedLayout/PaddedLayout';
import Layout from '../../../components/layouts/pageLayout/Layout';
import { getServerSideProductProps } from '../../../common/getServerSideProductProps';
import { Product, ProductsAPIResponse } from '../../../types/products';
import ProductListContainer from './index.styles';
import { useCountryInfoContext } from '../../../common/contexts/CountryInfoContext';

interface Props {
  products: ProductsAPIResponse;
}

const ProductsPage = ({ products }: Props) => {
  const { t } = useTranslation('products');
  const { countryInfo } = useCountryInfoContext();

  const displayProductList = () =>
    products.results.map((product: Product) => (
      <div
        key={product.id}
        className='product-thumbnail'
        onClick={() => Router.push(`/product/${product.masterVariant.sku}`)}>
        <ProductThumbnail
          productName={product.name[countryInfo.locale]}
          product={product.masterVariant}
          height={44.5}
        />
      </div>
    ));

  return (
    <Layout title={t('title')}>
      <PaddedLayout>
        <ProductListContainer>{displayProductList()}</ProductListContainer>
      </PaddedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = getServerSideProductProps(
  'products'
);

export default ProductsPage;
