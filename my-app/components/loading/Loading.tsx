import Spinner from 'react-bootstrap/Spinner';

import { LoadingContainer } from './Loading.styles';

const Loading = () => (
  <LoadingContainer>
    <Spinner animation="border" variant="secondary" />
  </LoadingContainer>
)

export default Loading;