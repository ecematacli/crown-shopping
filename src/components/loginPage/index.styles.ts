import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grays[0]};
  padding: 3.5rem 2rem;
  font-size: 14px;
  .form-group {
    margin-bottom: 2rem;
    > input {
      outline: none;
      font-size: 14px;
    }
  }
  .submit-btn {
    background-color: ${({ theme: { colors } }) => colors.blacks[0]};
    border-color: transparent;
    font-weight: bold;
    margin-top: 2rem;
  }

  .btn-primary:focus,
  .btn-primary:not(:disabled):not(.disabled):active {
    background-color: ${({ theme: { colors } }) => colors.blacks[0]};
    border-color: ${({ theme: { colors } }) => colors.blacks[0]};
    box-shadow: none;
  }
`;

export const SignUpFormContainer = styled(FormContainer)`
  margin: 4rem 0 2rem;
`;