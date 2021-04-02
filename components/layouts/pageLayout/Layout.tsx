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
import { OpenedMenuContext } from '../../../common/contexts/OpenedMenuContext';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ children, title = 'Crown' }: Props) => {
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
