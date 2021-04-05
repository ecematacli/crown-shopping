import Dashboard from '../dashboard/Dashboard';
import MyOrders from '../myOrders/MyOrders';
import MyAddressBook from '../myAddressBook/MyAddressBook';
import PaymentMethods from '../paymentMethods/PaymentMethods';
import Wishlist from '../wishlist/Wishlist';

interface Props {
  subpath: { name: string }
}

const AccountContent = ({ subpath: { name } }: Props) => {
  switch (name) {
    case 'my-orders':
      return <MyOrders />
    case 'my-address-book':
      return <MyAddressBook />
    case 'payment-methods':
      return <PaymentMethods />
    case 'wishlist':
      return <Wishlist />
    default:
      return <Dashboard />
  }
};

export default AccountContent;
