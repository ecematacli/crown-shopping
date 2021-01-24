import styled from 'styled-components';

interface StyleProps {
  isSmallScreen: boolean;
}

export const SubcategoryContainer = styled.div<StyleProps>`
  width: 100%;
  margin-top: 0.75rem;
  height: ${({ isSmallScreen }) => (!isSmallScreen ? '42rem' : 'unset')};
  font-size: 15px;

  .subcategories {
    height: ${({ isSmallScreen }) => (!isSmallScreen ? '42rem' : 'unset')};
    margin-top: ${({ isSmallScreen }) => (!isSmallScreen ? '0.75rem' : '2rem')};
    display: ${({ isSmallScreen }) =>
      !isSmallScreen ? 'flex' : 'inline-block'};
    justify-content: space-between;

    .wrapper {
      display: flex;
    }
  }

  .image-wrapper {
    display: flex;
    align-items: center;
  }

  .subcategory {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .subcategory-title {
    margin-right: ${({ isSmallScreen }) =>
      !isSmallScreen ? '20rem' : 'unset'};
    font-weight: bold;
    cursor: pointer;
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
