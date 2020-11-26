import styled from 'styled-components';

export const SubcategoryContainer = styled.div`
  width: 100%;
  height: 37rem;
  font-size: 15px;

  .subcategories {
    display: flex;
  }

  .subcategory-title {
    padding-right: 20rem;
    font-weight: bold;
    display: flex;
  }

  .second-level-subcategory {
    display: flex;
    flex-direction: column;
  }

  .level2-subcategory-title {
    padding: 0.5rem 0;
  }
`;
