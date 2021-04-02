import { useState, Fragment } from 'react';
import classNames from 'classnames';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

import { useTranslation, Link } from '../../../i18n';
import { StyledAccountNavMenu } from './AccountNavigation.styles';
import { navigationItems, NavigationItem } from './navigationItems';
import useScreenWidth from '../../../common/hooks/useScreenWidth';
import { createApolloClient } from '../../../lib/apolloClient';
import { clientLogout } from '../../../auth';
import { Router } from '../../../i18n';

const AccountNavigation = () => {
  const { t } = useTranslation('my-account');
  const { isSmallScreen } = useScreenWidth();

  const [isSmNavMenuOpen, setIsSmNavMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<NavigationItem>(
    navigationItems[0]
  );

  const handleSignOut = () => {
    clientLogout(createApolloClient(), () => Router.push('/'));
  }

  const onListItemClick = (item: NavigationItem) => {
    setActiveNavItem(item);
    item.name === 'signOut' && handleSignOut();
  };

  const displayCurrentNavItem = () => (
    <div
      className='active-item-sm'
      onClick={() => setIsSmNavMenuOpen(!isSmNavMenuOpen)}>
      <activeNavItem.Icon size={19} />
      <span className='active-item-title-sm'>{t(`${activeNavItem.name}`)}</span>
      {!isSmNavMenuOpen ? (
        <RiArrowDownSLine size={22} />
      ) : (
          <RiArrowUpSLine size={22} />
        )}
    </div>
  );

  const displayNavigationMenu = () => (
    <ul className={classNames('nav-list', { 'sm-screen-nav': isSmallScreen })}>
      {navigationItems.map((item: NavigationItem) => {
        const { name, subpath, Icon } = item;
        const navItemClasses = classNames('nav-item-block', {
          active: name === activeNavItem.name,
        });

        return (
          <li key={name} onClick={() => onListItemClick(item)}>
            <Link href={{ pathname: t('pathname'), query: { subpath } }}>
              <a className={navItemClasses}>
                <Icon size={20} className='item-icon' />
                <span>{t(`${name}`)}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
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
