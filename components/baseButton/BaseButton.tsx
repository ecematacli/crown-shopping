import { StyledButton } from './BaseButton.styles';

interface Props {
  text: string;
  type?: string;
  size?: string;
  width?: number;
  height?: string;
  variant?: string;
  className?: string;
  onClick?: () => void;
}

const BaseButton: React.FC<Props> = ({
  text,
  type = 'button',
  size,
  variant = 'dark',
  ...rest
}) => (
    <StyledButton size={size} type={type} variant={variant} {...rest}>
      {text}
    </StyledButton>
  );

export default BaseButton;
