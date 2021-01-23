import { StyledButton } from './BaseButton.styles';

interface Props {
  text: string;
  type?: string;
  size?: string;
  variant?: string;
  className?: string;
  onClick?: () => void;
}

const BaseButton: React.FC<Props> = ({
  text,
  type = 'button',
  size,
  variant = 'dark',
}) => (
    <StyledButton size={size} type={type} block variant={variant}>
      {text}
    </StyledButton>
  );

export default BaseButton;
