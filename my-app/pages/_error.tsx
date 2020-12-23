import { includeDefaultNamespaces, useTranslation } from '../i18n';

const Page = () => {
  const { t } = useTranslation();
  return <div>{t('_error:title')}</div>;
};

Page.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces([]),
  };
};

export default Page;
