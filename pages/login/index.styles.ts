import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  .form-container {
    background-color: ${({ theme: { palette } }) => palette.lightGrays[0]};
    padding: 4rem 2rem;
    font-size: 14px;
    margin-top: 2rem;
  }

  .sign-up {
    margin: 4rem 0 2rem;
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .form {
    & > * {
      padding-bottom: 0.5rem;
    }
  }

  .submit-btn {
    margin-top: 1rem;
  }
`;
