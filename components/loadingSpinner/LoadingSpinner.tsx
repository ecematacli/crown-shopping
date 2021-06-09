import Spinner from 'react-bootstrap/Spinner';

import { LoadingContainer } from './LoadingSpinner.styles';

const LoadingSpinner = () => (
  <LoadingContainer>
    <Spinner animation="border" variant="secondary" />
  </LoadingContainer>
)

export default LoadingSpinner;