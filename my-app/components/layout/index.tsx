import Head from 'next/head';
import { Fragment, useContext } from 'react';

import { StyledContent } from './index.styles';
import Footer from './footer/Footer';
import Header from './header/Header';
import { OpenedMenuContext } from '../../contexts/OpenedMenuContext';
import useScreenWidth from '../../hooks/useScreenWidth';

const Layout: React.FC<{ title: string }> = ({ children, title = 'EA' }) => {
  const { isMenuOpen, isMobileMenuOpen } = useContext(OpenedMenuContext);
  const { isSmallScreen } = useScreenWidth();
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>
        <Header />
        <StyledContent
          isMenuOpen={isMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          isSmallScreen={isSmallScreen}>
          <div className='app'>{children}</div>
        </StyledContent>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
