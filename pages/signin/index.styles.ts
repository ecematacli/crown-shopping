import styled from 'styled-components';

interface StyledProps {
  isSmallScreen: boolean;
}

export const StyledLoginPage = styled.div<StyledProps>`
  margin: ${({ isSmallScreen }) => (!isSmallScreen ? '6rem 0' : '2.5rem 0')};
  display: ${({ isSmallScreen }) => (!isSmallScreen ? 'flex' : 'block')};
  justify-content: space-between;

  .form-container {
    flex-basis: 48%;
    font-size: 14px;
    background-color: ${({ theme: { palette } }) => palette.lightGrays[0]};
  }

  .sign-up {
    margin-top: ${({ isSmallScreen }) => (!isSmallScreen ? 0 : '4rem')};
  }

  .form-title {
    text-transform: uppercase;
    color: ${({ theme: { palette } }) => `${palette.blacks[0]}`};
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.lightGrays[3]}`};
    padding: 1.5rem 2rem;
    text-align: center;
  }

  .form {
    padding: ${({ isSmallScreen }) =>
      !isSmallScreen ? '5.3rem 3rem' : '4rem 1.8rem'};
  }

  .sign-in-form {
    margin-top: ${({ isSmallScreen }) => (!isSmallScreen ? '4.5rem' : 0)};
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > * {
      padding-bottom: 0.5rem;
    }
  }

  .custom-input {
    margin-bottom: 2rem;
  }

  .submit-btn {
    margin-top: 1rem;
  }
`;
