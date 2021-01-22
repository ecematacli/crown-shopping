import { Collapse } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

import { useTranslation } from '../../../i18n';
import { FooterContainer } from './Footer.styles';
import footerContent from './footerContent';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import { useState } from 'react';
import useScreenWidth from '../../../hooks/useScreenWidth';

const Footer = () => {
  const { t } = useTranslation('footer');
  const [isFooterItemOpen, setIsFooterItemOpen] = useState(false);
  const [openedFooterItem, setOpenedFooterItem] = useState(null);
  const { isSmallScreen } = useScreenWidth();

  const displayFooterContentList = (contentList: string[]) => (
    <ul>
      {contentList.map(listItem => (
        <Collapse in={isFooterItemOpen}>
          <li className='hidden-xs' key={listItem}>
            {t(`${listItem}`)}
          </li>
        </Collapse>
      ))}
    </ul>
  );

  return (
    <FooterContainer isSmallScreen={isSmallScreen}>
      {footerContent.map(f => (
        <PaddedLayout
          padding={{ top: '1', bottom: '1' }}
          key={f.title}
          className='footer-item-wrapper'>
          <div
            className='title-section'
            onClick={() => setIsFooterItemOpen(!isFooterItemOpen)}>
            <h5>{t(`${f.title}`)}</h5>
            <BsPlus size={20} />
          </div>
          {isFooterItemOpen && displayFooterContentList(f.subtitles)}
        </PaddedLayout>
      ))}
    </FooterContainer>
  );
};

export default Footer;
