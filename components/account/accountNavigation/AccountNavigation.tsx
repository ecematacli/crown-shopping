import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, Fragment } from 'react';
import classNames from 'classnames';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

import { useTranslation } from '../../../i18n';
import { StyledAccountNavMenu } from './AccountNavigation.styles';
import navigationItems from './navigationItems';
import useScreenWidth from '../../../hooks/useScreenWidth';

const AccountNavigation = () => {
  const { t } = useTranslation('my-account');
  const router = useRouter();
  const { isSmallScreen } = useScreenWidth();

  const [isSmNavMenuOpen, setIsSmNavMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(navigationItems[0]);

  const pathname = t('pathname');

  // console.log(router, router.pathname)
  // const handleCurrentNavItemChange = (item: NavigationItem) => {
  //   setActiveNavItem(item);
  //   setIsSmNavMenuOpen(false);
  // };

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
    <ul className={classNames({ 'sm-screen-nav': isSmallScreen })}>
      {navigationItems.map(item => {
        const { name, subpath, Icon } = item;
        const navItemClasses = classNames('nav-item-block', {
          active: name === activeNavItem.name,
        });

        return (
          <li key={name}>
            <Link href={{ pathname: `${pathname}/${subpath}` }}>
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
