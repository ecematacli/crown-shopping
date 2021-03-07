import { RiDashboardLine } from 'react-icons/ri';
import { CgLogOff } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegAddressBook } from 'react-icons/fa';
import { MdFavoriteBorder, MdPayment } from 'react-icons/md';
import { IconType } from 'react-icons/lib/cjs';

export const navigationItems = [
  {
    name: 'dashboard',
    subpath: '',
    Icon: RiDashboardLine,
  },
  {
    name: 'myOrders',
    subpath: 'my-orders',
    Icon: FiShoppingCart,
  },
  {
    name: 'myAddressBook',
    subpath: 'my-address-book',
    Icon: FaRegAddressBook,
  },
  {
    name: 'paymentMethods',
    subpath: 'payment-methods',
    Icon: MdPayment,
  },
  {
    name: 'wishlist',
    subpath: 'wishlist',
    Icon: MdFavoriteBorder,
  },
  { name: 'signOut', subpath: '', Icon: CgLogOff },
];

export default navigationItems;
