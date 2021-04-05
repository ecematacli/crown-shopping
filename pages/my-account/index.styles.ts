import styled from 'styled-components';
import { breakPoints } from '../../styles/theme';

export const AccountPageContainer = styled.div`
  @media (${breakPoints('md')}) {
    height: 85rem;
    margin-top: 3rem;
    border: ${({ theme: { palette } }) => `1px solid ${palette.lightGrays[1]}`};
    display: flex;
  }
`;

export const NavigationWrapper = styled.div`
  flex-basis: 20%;
  background-color: ${({ theme: { palette } }) => palette.lightGrays[11]};
`;

export const ContentWrapper = styled.div`
  flex-basis: 80%;
`;
