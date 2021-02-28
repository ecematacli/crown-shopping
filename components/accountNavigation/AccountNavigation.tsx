import { useState, Fragment } from 'react';
import classNames from 'classnames';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { IconType } from 'react-icons/lib/cjs';

import { useTranslation } from '../../i18n';
import { StyledAccountNavMenu } from './AccountNavigation.styles';
import navigationItems from './navigationItems';
import useScreenWidth from '../../hooks/useScreenWidth';

const AccountNavigation = () => {
  const { t } = useTranslation('account');
  const { isSmallScreen } = useScreenWidth();

  const [isSmNavMenuOpen, setIsSmNavMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(navigationItems[0]);

  const handleCurrentNavItemChange = (item: {
    name: string;
    Icon: IconType;
  }) => {
    setActiveNavItem(item);
    setIsSmNavMenuOpen(false);
  };

  const displayCurrentNavItem = () => (
    <div
      className='active-item'
      onClick={() => setIsSmNavMenuOpen(!isSmNavMenuOpen)}>
      <activeNavItem.Icon size={19} />
      <span className='active-item-title'>{t(`${activeNavItem.name}`)}</span>
      {!isSmNavMenuOpen ? (
        <RiArrowDownSLine size={22} />
      ) : (
          <RiArrowUpSLine size={22} />
        )}
    </div>
  );

  const displayNavigationMenu = () => (
    <div className={classNames({ 'sm-screen-nav': isSmallScreen })}>
      {navigationItems.map(item => {
        const { name, Icon } = item;
        const navItemClasses = classNames('nav-item-block', {
          active: name === activeNavItem.name,
        });

        return (
          <div
            key={name}
            className={navItemClasses}
            onClick={() => handleCurrentNavItemChange(item)}>
            <Icon size={20} className='item-icon' />
            <span>{t(`${name}`)}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <StyledAccountNavMenu>
      {isSmallScreen ? (
        <Fragment>
          {displayCurrentNavItem()}
          {isSmNavMenuOpen && displayNavigationMenu()}
        </Fragment>
      ) : (
          displayNavigationMenu()
        )}
    </StyledAccountNavMenu>
  );
};

export default AccountNavigation;
