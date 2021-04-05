import { GetServerSideProps } from 'next';

import { useTranslation } from '../../i18n';
import Layout from '../../components/layouts/pageLayout/Layout';
import PaddedLayout from '../../components/layouts/paddedLayout/PaddedLayout';
import { createApolloClient } from '../../lib/apolloClient';
import { GET_PRODUCT } from '../../graphql/queries/product';
import { getCountryCookie } from '../../common/utils/cookie';
import { Product, Product_product_masterData, Product_inventoryEntries } from '../../graphql/queries/types/Product';
import ProductInfo from '../../components/product/productInfo/ProductInfo';

interface Props {
  product: Product_product_masterData;
  productInventories: Product_inventoryEntries;
}

const ProductPage = ({ product }: Props) => {
  const { t } = useTranslation('product');

  return (
    <Layout title={t('title')}>
      <PaddedLayout>
        <ProductInfo product={product.current} />
      </PaddedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const client = createApolloClient();
  const countryInfo = getCountryCookie(req?.headers);

  const variables = {
    sku: query.sku,
    where: `sku="${query.sku}"`,
    locale: countryInfo?.locale,
    currency: countryInfo?.currency,
    country: countryInfo?.code
  }

  const { data } = await client.query<Product>({ query: GET_PRODUCT, variables });

  return {
    props: {
      product: data.product?.masterData,
      productInventories: data.inventoryEntries?.results
    }
  }
}

export default ProductPage;
