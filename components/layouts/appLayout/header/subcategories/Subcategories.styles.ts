import styled from 'styled-components';
import { breakPoints } from '../../../../../styles/theme';

export const SubcategoryContainer = styled.div`
  width: 100%;
  margin-top: 0.75rem;
  height: unset;
  font-size: 15px;

  @media (${breakPoints('md')}) {
    height: 42rem;
  }

  .subcategories {
    height: unset;
    margin-top: 2rem;
    display: inline-block;

    @media (${breakPoints('md')}) {
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

    @media (${breakPoints('md')}) {
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

    @media (${breakPoints('md')}) {
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
