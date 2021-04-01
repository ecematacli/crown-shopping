import styled from 'styled-components';
import { breakPoints } from '../../../../../styles/theme';

export const StyledHeaderBanner = styled.div`
  background-color: ${({ theme: { palette } }) => `${palette.lightGrays[5]}`};
  font-size: 14px;

  .language-selector {
    border-top: ${({ theme: { palette } }) =>
      `1px solid ${palette.darkGrays[1]}`};

    @media (${breakPoints('md')}) {
      border-top: none;
    }
  }

  .wrapper {
    height: unset;

    @media (${breakPoints('md')}) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 3.5rem;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;

  @media (${breakPoints('md')}) {
    flex-direction: row;
    justify-content: flex-end;
    padding: unset;
  }

  > span {
    cursor: pointer;
    padding: 1.4rem 0;
    color: ${({ theme: { palette } }) => `${palette.darkGrays[0]}`};

    @media (${breakPoints('md')}) {
      padding: 0.7rem 1rem;
      border-right: ${({ theme: { palette } }) =>
        `0.1rem solid ${palette.lightGrays[6]}`};
    }
  }

  .customer-name {
    display: none;

    @media (${breakPoints('md')}) {
      display: inline-block;
    }
  }
`;
