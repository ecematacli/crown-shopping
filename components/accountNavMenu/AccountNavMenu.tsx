import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { RiDashboardLine } from 'react-icons/ri';
import { CgLogOff } from 'react-icons/cg';

import { useTranslation } from '../../i18n';
import { StyledAccountNavMenu } from './AccountNavMenu.styles';
import { useState } from 'react';

const AccountNavMenu = () => {
  const { t } = useTranslation('account');

  const menuItems = [
    { item: 'dashboard', Icon: <RiDashboardLine /> },
    { item: 'myOrders', Icon: RiArrowUpSLine },
    { item: 'myAddresses', Icon: RiArrowDownSLine },
    { item: 'signOut', Icon: CgLogOff },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const displaySelectedItem = () => (
    <div className='selected-item'>
      {selectedMenuItem.Icon}
      <span className='selected-item-title'>{t(`${selectedMenuItem.item}`)}</span>
      {!isNavMenuOpen ? (
        <RiArrowDownSLine size={22} onClick={() => setIsNavMenuOpen(true)} />
      ) : (
          <RiArrowUpSLine size={22} onClick={() => setIsNavMenuOpen(false)} />
        )}
    </div>
  );

  return <StyledAccountNavMenu>{displaySelectedItem()}</StyledAccountNavMenu>;
};

export default AccountNavMenu;
