import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grays[0]};
  padding: 3.5rem 2rem;
  .submit-btn {
    background-color: ${({ theme: { colors } }) => colors.blacks[0]};
    border-color: transparent;
    font-weight: bold;
    margin-top: 2rem;
  }
`;
