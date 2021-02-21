import { useState } from 'react';
import classNames from 'classnames';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

import { useTranslation } from '../../i18n';
import { StyledAccountNavMenu } from './AccountNavigation.styles';
import PaddedLayout from '../paddedLayout/PaddedLayout';
import navigationItems from './navigationItems';

const AccountNavigation = () => {
  const { t } = useTranslation('account');

  const activeItem = navigationItems[0];
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const displayActiveItem = () => (
    <div
      className='active-item'
      onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
      <activeItem.Icon size={19} />
      <span className='active-item-title'>{t(`${activeItem.name}`)}</span>
      {!isNavMenuOpen ? (
        <RiArrowDownSLine size={22} />
      ) : (
          <RiArrowUpSLine size={22} />
        )}
    </div>
  );

  const displayNavigationMenu = () => (
    <div className='navigation-menu'>
      <PaddedLayout>
        {navigationItems.map(({ name, Icon }) => (
          <div
            key={name}
            className={classNames({
              'nav-item-block': true,
              'active': name === activeItem.name,
            })}
          >
            <Icon size={20} className='item-icon' />
            <span className='item-name'>{t(`${name}`)}</span>
          </div>
        ))}
      </PaddedLayout>
    </div>
  );

  return (
    <StyledAccountNavMenu>
      {displayActiveItem()}
      <div>
        {isNavMenuOpen && displayNavigationMenu()}
      </div>
    </StyledAccountNavMenu>
  );
};

export default AccountNavigation;
