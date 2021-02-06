import styled from 'styled-components';
import { Card } from 'react-bootstrap';

interface StyledProps {
  width: number;
}

export const StyledCard = styled(Card)`
  width: ${({ width }: StyledProps) => (width ? `${width}rem` : 'unset')};
  padding: 1.6rem 1rem;
  font-weight: 16px;

  .card-title {
    text-transform: uppercase;
    font-weight: bold;
  }

  .card-body {
    padding-bottom: 0;
  }
`;
