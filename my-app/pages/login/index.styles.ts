import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${({ theme: { palette } }) => palette.lightGrays[0]};
  padding: 3.5rem 2rem;
  font-size: 14px;

  .form-group {
    margin-bottom: 2rem;
  }
`;

export const SignUpFormContainer = styled(FormContainer)`
  margin: 4rem 0 2rem;
`;
