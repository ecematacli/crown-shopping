import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';
import { useTranslation } from '../i18n';
import { withAuthServerSideProps } from '../lib/withServerSideProps';


const IndexPage = () => {
  const { t } = useTranslation('index');

  return (
    <Layout title={t('homePage')}>
      <Home />
    </Layout>
  );
};

export const getServerSideProps = withAuthServerSideProps(
  'index',
  true
);

export default IndexPage;
