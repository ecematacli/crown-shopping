import { useTranslation } from '../../i18n';

import { StyledAccountNavMenu } from './AccountNavMenu.styles';

const AccountNavMenu = () => {
  const { t } = useTranslation('account');

  const menuItems = ['itemOne', 'itemTwo', 'itemThree', 'itemFour'];
  const userDashboard = menuItems[0];

  {/* {menuItems.map(item => (<div key={item}>
    {t(`${item}`)}
  </div>))} */}
  return (
    <StyledAccountNavMenu>
      <div className='selected-item'>{t(`${userDashboard}`)}</div>
    </StyledAccountNavMenu>
  );
};


export default AccountNavMenu;
