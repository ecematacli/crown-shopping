import { useTranslation, includeDefaultNamespaces } from '../i18n';
import Home from '../components/home/Home';
import Layout from '../components/layout';

const IndexPage = () => {
  const { t } = useTranslation('index');
  return (
    <Layout title={t('homePage')}>
      <Home />
    </Layout>
  )
}

export const getStaticProps = async () => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['index'])
  }
});

export default IndexPage;