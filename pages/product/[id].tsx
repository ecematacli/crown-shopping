import { GetServerSideProps } from 'next';

import { useTranslation } from '../../i18n';
import Layout from '../../components/layouts/pageLayout/Layout';
import PaddedLayout from '../../components/layouts/paddedLayout/PaddedLayout';

const ProductPage = () => {
  const { t } = useTranslation('product');

  return (
    <Layout title={t('title')}>
      <PaddedLayout>
        <div>Product page</div>
      </PaddedLayout>
    </Layout>
  );
};

export default ProductPage;
