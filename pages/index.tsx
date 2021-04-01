import { GetServerSideProps } from 'next';

import Home from '../components/home/Home';
import Layout from '../components/layouts/appLayout/Layout';
import { useTranslation } from '../i18n';
import { withServerSideProps } from '../lib/withServerSideProps';
import { ProductsAPIResponse } from '../types/products';

interface Props {
  products: ProductsAPIResponse;
  deviceType: string;
}

const IndexPage = ({ products, deviceType }: Props) => {
  const { t } = useTranslation('index');

  return (
    <Layout title={t('homePage')}>
      <Home products={products} deviceType={deviceType} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withServerSideProps(
  'index',
  true
);

export default IndexPage;
