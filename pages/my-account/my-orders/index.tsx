import { includeDefaultNamespaces } from '../../../i18n';
import AccountPageWrapper from '../../../components/account/accountPageWrapper/AccountPageWrapper';

const AccountPage = () => {
  return (
    <AccountPageWrapper subpath="my-orders">
      MY ORDERS
    </AccountPageWrapper>
  );
};

export const getStaticProps = () => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['my-account']),
  },
});

export default AccountPage;
