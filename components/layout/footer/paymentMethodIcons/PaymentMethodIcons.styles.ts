import styled from 'styled-components';
import { breakPoints } from '../../../../styles/theme';

export const StyledPaymentMethodIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1.8rem 2.3rem 1.8rem;

  @media (${breakPoints('md')}) {
    display: block;
    margin: 1.5rem 0 0;
  }

  & > * {
    height: 2.4rem;
    width: 4.14rem;
    margin: 0;

    @media (${breakPoints('md')}) {
      margin: 0 0.7rem;
    }

    &:first-child {
      margin-left: 0;
    }
  }
`;
