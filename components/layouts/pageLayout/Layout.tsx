import Head from 'next/head'

import {
  HeaderContainer,
  StyledContent,
  LayoutContentContainer,
  BodyLayout,
} from './Layout.styles'
import Footer from './footer/Footer'
import Header from './header/Header'
import { useOpenedMenuContext } from '../../../common/contexts/OpenedMenuContext'
import Notifications from './notifications/Notifications'

interface Props {
  title: string
  children: React.ReactNode
}

const Layout = ({ children, title = 'Crown' }: Props) => {
  const { isMenuOpen } = useOpenedMenuContext()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div style={{ position: 'relative' }}>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <LayoutContentContainer>
          <StyledContent>
            {children}
            <Notifications />
            <Footer />
          </StyledContent>
          {isMenuOpen && <BodyLayout isMenuOpen={isMenuOpen} />}
        </LayoutContentContainer>
      </div>
    </div>
  )
}

export default Layout
