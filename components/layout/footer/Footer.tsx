import { Fragment, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

import { useTranslation } from '../../../i18n';
import { SmFooterContainer, BgFooterContainer } from './Footer.styles';
import footerContent from './footerContent';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import useScreenWidth from '../../../hooks/useScreenWidth';
import LanguageSelector from '../../languageSelector/LanguageSelector';
import LegalSection from './legalSection/LegalSection';
import PaymentMethodIcons from './paymentMethodIcons/PaymentMethodIcons';
import SocialMediaIcons from './socialMediaIcons/SocialMediaIcons';
import BaseInput from '../../baseInput/BaseInput';
import BaseButton from '../../baseButton/BaseButton';

const Footer = () => {
  const { t } = useTranslation('footer');
  const [openedItem, setOpenedItem] = useState<string>(null);
  const [inputValue, setInputValue] = useState('');
  const { isSmallScreen } = useScreenWidth();

  const handleOpenedItem = (item: string) =>
    openedItem === item ? setOpenedItem(null) : setOpenedItem(item);

  const displaySmFooterList = () => (
    <Fragment>
      {footerContent.map(f => (
        <PaddedLayout
          padding={{ top: '1', bottom: '1' }}
          className='sm-layout'
          onClick={() => handleOpenedItem(f.title)}
          key={f.title}>
          <div className='footer-item-wrapper'>
            <div className='title-section'>
              <h5>{t(`${f.title}`)}</h5>
              <BsPlus size={20} />
            </div>
            <ul>
              {f.subtitles.map(listItem => (
                <Collapse
                  in={f.title === openedItem}
                  key={listItem}
                  timeout={200}>
                  <li className='footer-list-item'>{t(`${listItem}`)}</li>
                </Collapse>
              ))}
            </ul>
          </div>
        </PaddedLayout>
      ))}
    </Fragment>
  );

  const displayBgFooterLastColumn = () => (
    <div className='last-column'>
      <h5 className='title'>{t('newsletter')}</h5>
      <div className='newsletter-section'>
        <BaseInput
          className='newsletter-input'
          placeholder='Email'
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
          width={6}
        />
        <div>
          <BaseButton text='Submit' width={6.8} />
        </div>
      </div>
      <SocialMediaIcons />
    </div>
  );

  const displaySmScreenFooter = () => (
    <SmFooterContainer>
      {displaySmFooterList()}
      <SocialMediaIcons />
      <LanguageSelector />
      <PaddedLayout>
        <LegalSection />
        <PaymentMethodIcons />
      </PaddedLayout>
      <div className='footer-bottom-section'>
        <PaddedLayout className='bottom-layout'>
          <span className='company-info'>
            © {t('year')} {t('crown')} | {t('rightsReserved')}
          </span>
        </PaddedLayout>
      </div>
    </SmFooterContainer>
  );

  const displayBgScreenFooter = () => (
    <BgFooterContainer>
      <PaddedLayout padding={{ top: '2.4', bottom: '2.4' }}>
        <div className='footer-item-wrapper'>
          {footerContent.map(f => (
            <div key={f.title}>
              <h5 className='title'>{t(`${f.title}`)}</h5>
              <ul className='big-screen-footer-list'>
                {f.subtitles.map(listItem => (
                  <li className='footer-list-item' key={listItem}>
                    {t(`${listItem}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <LegalSection />
          {displayBgFooterLastColumn()}
        </div>
        <PaymentMethodIcons />
      </PaddedLayout>
    </BgFooterContainer>
  );

  return isSmallScreen ? displaySmScreenFooter() : displayBgScreenFooter();
};

export default Footer;
