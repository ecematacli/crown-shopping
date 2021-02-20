import { RiDashboardLine } from 'react-icons/ri';
import { CgLogOff } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegAddressBook } from 'react-icons/fa';
import { MdFavoriteBorder, MdPayment } from 'react-icons/md';

const navigationItems = [
  {
    name: 'dashboard',
    Icon: RiDashboardLine,
  },
  { name: 'myOrders', Icon: FiShoppingCart },
  {
    name: 'myAddressBook',
    Icon: FaRegAddressBook,
  },
  {
    name: 'paymentMethods',
    Icon: MdPayment,
  },
  {
    name: 'wishlist',
    Icon: MdFavoriteBorder,
  },
  { name: 'signOut', Icon: CgLogOff },
];

export default navigationItems;
