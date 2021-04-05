import styled from 'styled-components';
import { breakPoints } from '../../../../../styles/theme';

export const StyledSubcategories = styled.div`
  .open-lg-menu {
    height: 42rem;
  }

  .close-lg-menu {
    height: 0;
    transition: height 0.2s;
  }

  ul {
    list-style-type: none;
  }
`;

export const SubcategoryContainer = styled.div`
  width: 100%;
  font-size: 15px;

  @media (${breakPoints('lg')}) {
    margin-top: 1rem;
  }

  .subcategories {
    margin-top: 2rem;
    display: inline-block;

    @media (${breakPoints('lg')}) {
      height: 42rem;
      margin-top: 0.75rem;
      display: flex;
      justify-content: space-between;
    }

    .wrapper {
      display: flex;
    }
  }

  .image-wrapper {
    display: none;

    @media (${breakPoints('lg')}) {
      display: flex;
      align-items: center;
    }
  }

  .subcategory {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .subcategory-title {
    margin-right: unset;
    font-weight: bold;
    cursor: pointer;

    @media (${breakPoints('lg')}) {
      margin-right: 20rem;
    }
  }

  .second-level-subcategory {
    display: flex;
    flex-direction: column;
  }

  .level2-subcategory-title {
    padding: 1rem 0;
    cursor: pointer;
  }
`;
