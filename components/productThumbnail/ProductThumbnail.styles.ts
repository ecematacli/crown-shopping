import styled from 'styled-components';
import { Card } from 'react-bootstrap';

interface StyledProps {
  width: number;
  isSmallScreen: boolean;
}

export const StyledCard = styled(Card)`
  width: ${({ width }: StyledProps) => (width ? `${width}rem` : 'unset')};
  padding: ${({ isSmallScreen }) => `1.6rem ${!isSmallScreen ? '1rem' : '0'}`};
  font-weight: 16px;

  .card-title {
    text-transform: uppercase;
    font-weight: bold;
  }

  .card-body {
    padding-bottom: 0;
  }
`;
