import { includeDefaultNamespaces } from '../../i18n';
import AccountPageWrapper from '../../components/account/accountPageWrapper/AccountPageWrapper';
import Dashboard from '../../components/account/dashboard/Dashboard';

const AccountPage = () => (
  <AccountPageWrapper subpath="dashboard">
    <Dashboard />
  </AccountPageWrapper>
);


export const getStaticProps = () => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['my-account']),
  },
});

export default AccountPage;
