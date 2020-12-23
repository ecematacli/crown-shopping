import { AppContainer, AppWrapper } from './AppLayout.styles'

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: { top?: string; bottom?: string; rightLeft?: string }
}

const AppLayout: React.FC<Props> = ({ children, ...rest }) => (
  <AppContainer {...rest}>
    <AppWrapper>{children}</AppWrapper>
  </AppContainer>
)

export default AppLayout
