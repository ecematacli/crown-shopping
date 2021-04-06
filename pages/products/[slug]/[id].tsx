import { GetServerSideProps } from 'next';
import { Row, Col, Container } from 'react-bootstrap';

import { useTranslation, Router } from '../../../i18n';
import ProductThumbnail from '../../../components/productThumbnail/ProductThumbnail';
import PaddedLayout from '../../../components/layouts/paddedLayout/PaddedLayout';
import Layout from '../../../components/layouts/pageLayout/Layout';
import { getServerSideProductProps } from '../../../common/getServerSideProductProps';
import { Product, ProductsAPIResponse } from '../../../types/products';
import ProductListContainer, { ProductThumbnailContainer } from './index.styles';
import { useCountryInfoContext } from '../../../common/contexts/CountryInfoContext';
import useScreenWidth from '../../../common/hooks/useScreenWidth';
interface Props {
  products: ProductsAPIResponse;
}

const ProductsPage = ({ products }: Props) => {
  const { t } = useTranslation('products');
  const { countryInfo } = useCountryInfoContext();
  const { isSmallScreen } = useScreenWidth();

  const displayProductList = () => (
    <Container>
      <Row>
        {products.results.map((product: Product) => (
          <Col xs={6} sm={6} md={4} lg={4} key={product.id}>
            <ProductThumbnailContainer
              key={product.id}
              onClick={() => Router.push(`/product/${product.masterVariant.sku}`)}>
              <ProductThumbnail
                productName={product.name[countryInfo.locale]}
                product={product.masterVariant}
              />
            </ProductThumbnailContainer>
          </Col>
        ))}
      </Row>
    </Container >
  )

  return (
    <Layout title={t('title')}>
      <PaddedLayout padding={{ rightLeft: isSmallScreen && '1' }}>
        <ProductListContainer>{displayProductList()}</ProductListContainer>
      </PaddedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = getServerSideProductProps(
  'products'
);

export default ProductsPage;
