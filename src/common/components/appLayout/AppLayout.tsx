import React from 'react'

import { AppContainer, AppWrapper } from './AppLayout.styles'

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: { top?: string; bottom?: string; }
}

const App: React.FC<Props> = ({ children, ...rest }) => (
  <AppContainer {...rest}>
    <AppWrapper>{children}</AppWrapper>
  </AppContainer>
)

export default App
