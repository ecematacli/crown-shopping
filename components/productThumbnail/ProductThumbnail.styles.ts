import styled from 'styled-components';
import { Card } from 'react-bootstrap';

interface StyledProps {
  width: number;
}

export const StyledCard = styled(Card)`
  width: ${({ width }: StyledProps) => (width ? `${width}rem` : 'unset')};
`;
