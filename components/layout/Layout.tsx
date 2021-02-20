import Head from 'next/head';
import { useContext } from 'react';

import {
  HeaderContainer,
  StyledContent,
  LayoutContentContainer,
  BodyLayout,
} from './Layout.styles';
import Footer from './footer/Footer';
import Header from './header/Header';
import { OpenedMenuContext } from '../../contexts/OpenedMenuContext';

const Layout: React.FC<{ title: string }> = ({ children, title = 'EA' }) => {
  const { isMenuOpen } = useContext(OpenedMenuContext);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <LayoutContentContainer>
          <StyledContent>
            {children}
            <Footer />
          </StyledContent>
          {isMenuOpen && <BodyLayout isMenuOpen={isMenuOpen} />}
        </LayoutContentContainer>
      </div>
    </div>
  );
};

export default Layout;
