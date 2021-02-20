import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { RiDashboardLine } from 'react-icons/ri';
import { CgLogOff } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegAddressBook } from 'react-icons/fa';

import { useTranslation } from '../../i18n';
import { StyledAccountNavMenu } from './AccountNavMenu.styles';
import { useState } from 'react';

const AccountNavMenu = () => {
  const { t } = useTranslation('account');

  const menuItems = [
    { item: 'dashboard', iconType: RiDashboardLine, Icon: <RiDashboardLine /> },
    { item: 'myOrders', iconType: FiShoppingCart, Icon: <FiShoppingCart /> },
    { item: 'myAddresses', iconType: FaRegAddressBook, Icon: <FaRegAddressBook /> },
    { item: 'signOut', iconType: CgLogOff, Icon: <CgLogOff /> },
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0]);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const displayActiveItem = () => (
    <div className='selected-item'>
      <span>{activeItem.Icon}</span>
      <span className='selected-item-title'>{t(`${activeItem.item}`)}</span>
      {!isNavMenuOpen ? (
        <RiArrowDownSLine size={22} onClick={() => setIsNavMenuOpen(true)} />
      ) : (
          <RiArrowUpSLine size={22} onClick={() => setIsNavMenuOpen(false)} />
        )}
    </div>
  );

  return <StyledAccountNavMenu>{displayActiveItem()}</StyledAccountNavMenu>;
};

export default AccountNavMenu;
