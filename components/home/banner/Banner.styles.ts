import styled from 'styled-components';

interface StyledProps {
  width: number;
  height: number;
  location: string;
}

export const BannerContainer = styled.div<StyledProps>`
  margin-top: 1rem;
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
  height: ${({ height }) => (height ? `${height}rem` : 'auto')};
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .banner-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ location }) =>
      `url('/images/banner-${location}.jpg')`};
  }

  &:hover {
    cursor: pointer;

    & .banner-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  .content {
    height: 9rem;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    bottom: 2rem;
    text-transform: uppercase;

    .title {
      font-weight: bold;
      margin: 0 0.6rem 0;
      font-size: 2.2rem;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;
