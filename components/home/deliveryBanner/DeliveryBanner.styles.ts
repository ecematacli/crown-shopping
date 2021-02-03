import styled from 'styled-components';

export const StyledDeliveryBanner = styled.div`
  width: 100%;
  border-bottom: ${({ theme: { palette } }) =>
    `1px solid ${palette.lightGrays[3]}`};

  .wrapper {
    font-size: 1.5rem;
    text-transform: uppercase;
    border: none;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-align: center;

    & > * {
      display: inline-block;
      height: 100%;
      width: 100%;
      transition: all 0.2s;
    }

    &:hover,
    .text-visible {
      background-color: red;
      transform: translateY(100%);
    }

    &:hover,
    .text-invisible {
      top: 0;
    }
  }

  .text-visible {
    padding: 1.5rem 0;
  }

  .text-invisible {
    position: absolute;
    padding: 2rem 0 1rem;
    left: 0;
    top: -100%;
  }

  &:hover {
    background-color: red;
    transform: translateY(100%);
  }
`;
