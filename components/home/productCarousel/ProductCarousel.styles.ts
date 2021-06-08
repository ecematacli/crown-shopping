import styled from 'styled-components'
import { breakPoints } from '../../../styles/theme'

export const StyledProductCarousel = styled.div`
  background-color: ${({ theme: { palette } }) => palette.lightGrays[9]};
  padding: 2.5rem 0 3rem;

  @media (${breakPoints('md')}) {
    padding: 5rem 0;
  }

  .product-carousel {
    margin-top: 1rem;

    @media (${breakPoints('md')}) {
      margin-top: 0;
    }

    .react-multiple-carousel__arrow {
      z-index: 1 !important;
    }

    .react-multiple-carousel__arrow--left {
      left: 0px;
    }

    .react-multiple-carousel__arrow--right {
      right: 0;
    }

    &:first-child {
      padding-left: 8px;
    }
  }

  .product-carousel-item {
    padding-right: 8px;

    .card {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
    }

    @media (${breakPoints('md')}) {
      margin-top: 0;
    }
  }

  .btn {
    border-color: ${({ theme: { palette } }) => palette.blacks[2]};
    color: ${({ theme: { palette } }) => palette.blacks[2]};
    padding: 1rem;
    margin: 0.6rem 0 0.6rem;

    @media (${breakPoints('md')}) {
      margin-top: 1.3rem;
      margin-bottom: 0.3rem;
    }

    &:hover {
      background-color: ${({ theme: { palette } }) => palette.blacks[2]};
      color: ${({ theme: { palette } }) => palette.whites[0]};
    }
  }
`
