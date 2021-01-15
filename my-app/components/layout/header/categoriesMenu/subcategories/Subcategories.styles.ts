import styled from 'styled-components';

interface StyleProps {
  isSmallScreen: boolean;
}

export const SubcategoryContainer = styled.div<StyleProps>`
  width: 100%;
  margin-top: 0.75rem;
  height: ${({ isSmallScreen }) => (!isSmallScreen ? '35.3rem' : 'unset')};
  font-size: 15px;

  .subcategories {
    display: ${({ isSmallScreen }) => (!isSmallScreen ? 'flex' : 'block')};
  }

  .subcategory {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .subcategory-title {
    padding-right: 20rem;
    font-weight: bold;
    display: flex;
    cursor: pointer;
  }

  .second-level-subcategory {
    display: flex;
    flex-direction: column;
  }

  .level2-subcategory-title {
    padding: 0.5rem 0;
    cursor: pointer;
  }
`;
