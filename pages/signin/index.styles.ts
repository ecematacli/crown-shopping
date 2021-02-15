import styled from 'styled-components';
import { breakPoints } from '../../styles/theme';

const StyledLoginPage = styled.div`
  margin: 2.5rem 0;

  @media (${breakPoints('md')}) {
    margin: 6rem 0;
    display: flex;
    justify-content: space-between;
  }

  .form-container {
    flex-basis: 48%;
    font-size: 14px;
    background-color: ${({ theme: { palette } }) => palette.lightGrays[0]};
  }

  .sign-up {
    margin-top: 4rem;

    @media (${breakPoints('md')}) {
      margin-top: 0;
    }
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
    padding: 4rem 1.8rem;

    @media (${breakPoints('md')}) {
      padding: 5.3rem 3rem;
    }
  }

  .sign-in-form {
    margin-top: 0;

    @media (${breakPoints('md')}) {
      margin-top: 4.5rem;
    }
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

export default StyledLoginPage;
