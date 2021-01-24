import { Fragment, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

import { useTranslation } from '../../../i18n';
import { FooterContainer } from './Footer.styles';
import footerContent from './footerContent';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import useScreenWidth from '../../../hooks/useScreenWidth';
import Facebook from '../../../public/images/facebook.svg';
import Instagram from '../../../public/images/instagram.svg';
import Twitter from '../../../public/images/twitter.svg';
import Youtube from '../../../public/images/youtube.svg';
import Pinterest from '../../../public/images/pinterest.svg';
import TikTok from '../../../public/images/tiktok.svg';
import Master from '../../../public/images/master.svg';
import Ideal from '../../../public/images/ideal.svg';
import Paypal from '../../../public/images/paypal.svg';
import Visa from '../../../public/images/visa.svg';
import Ipay from '../../../public/images/ipay.svg';
import Linkedin from '../../../public/images/linkedin.svg';
import LanguageSelector from '../../languageSelector/LanguageSelector';

const Footer = () => {
  const { t } = useTranslation('footer');
  const [openedFooterItem, setOpenedFooterItem] = useState<string>(null);
  const { isSmallScreen } = useScreenWidth();

  const handleOpenedItem = (item: string) =>
    openedFooterItem === item
      ? setOpenedFooterItem(null)
      : setOpenedFooterItem(item);

  const displayFooterList = () => (
    <Fragment>
      {footerContent.map(f => (
        <PaddedLayout
          padding={{ top: '1', bottom: '1' }}
          className='footer-item-wrapper'
          onClick={() => handleOpenedItem(f.title)}
          key={f.title}>
          <div className='title-section'>
            <h5>{t(`${f.title}`)}</h5>
            <BsPlus size={20} />
          </div>
          <ul>
            {f.subtitles.map(listItem => (
              <Collapse
                in={f.title === openedFooterItem}
                key={listItem}
                timeout={200}>
                <li className='footer-list-item'>{t(`${listItem}`)}</li>
              </Collapse>
            ))}
          </ul>
        </PaddedLayout>
      ))}
    </Fragment>
  );

  const displaySocialMediaIcons = () => (
    <div className='social-media-icons'>
      <Facebook />
      <Instagram />
      <Twitter />
      <Pinterest />
      <TikTok />
      <Youtube />
      <Linkedin />
    </div>
  );

  const displayPaymentMethodIcons = () => (
    <div className='payment-method-icons'>
      <Master />
      <Ideal />
      <Ipay />
      <Paypal />
      <Visa />
    </div>
  );

  const displayLegalSection = () => (
    <ul className='legal-terms'>
      <li>{t('requirements')}</li>
      <li>{t('termsOfUse')}</li>
      <li>{t('privacyDeclaration')}</li>
      <li>{t('cookiePolicy')}</li>
    </ul>
  );

  return (
    <FooterContainer isSmallScreen={isSmallScreen}>
      {displayFooterList()}
      <PaddedLayout padding={{ top: '1', bottom: '1', rightLeft: '10' }}>
        {displaySocialMediaIcons()}
      </PaddedLayout>
      <LanguageSelector />
      <PaddedLayout>
        {displayLegalSection()}
        {displayPaymentMethodIcons()}
      </PaddedLayout>
      <div className='footer-bottom-section'>
        <PaddedLayout className='layout'>
          <span className='company-info'>
            © {t('year')} {t('crown')} | {t('rightsReserved')}
          </span>
        </PaddedLayout>
      </div>
    </FooterContainer>
  );
};

export default Footer;
