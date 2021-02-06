import { GetServerSideProps } from 'next';

import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';
import { useTranslation } from '../i18n';
import { withServerSideProps } from '../lib/withServerSideProps';
import { ProductsAPIResponse } from '../types/products';

interface Props {
  products: ProductsAPIResponse;
}

const IndexPage = ({ products }: Props) => {
  const { t } = useTranslation('index');

  return (
    <Layout title={t('homePage')}>
      <Home products={products} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withServerSideProps(
  'index',
  true
);

export default IndexPage;
