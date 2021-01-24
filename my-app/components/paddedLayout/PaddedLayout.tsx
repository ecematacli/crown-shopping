import { Container, Wrapper } from './PaddedLayout.styles';

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: { top?: string; bottom?: string; rightLeft?: string }
  onClick?: () => void;
}

const PaddedLayout: React.FC<Props> = ({ children, ...rest }) => (
  <Container {...rest}>
    <Wrapper>{children}</Wrapper>
  </Container>
)

export default PaddedLayout;
