import { Card } from 'react-bootstrap';
import BaseButton from '../baseButton/BaseButton';

interface Props {
  product: any;
}

const ProductThumbnail: React.FC<Props> = ({ product }) => {
  const imageSrc = product.masterVariant.images[0].url;
  return (
    // <Container>
    //   <Row>
    //     <Col xs={6} md={4}>
    //       <Image src={imageSrc} thumbnail />
    //     </Col>
    //   </Row>
    // </Container>

    <Card style={{ width: '309px' }}>
      <Card.Img variant='top' src={imageSrc} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <BaseButton text='OK' />
      </Card.Body>
    </Card>
  );
};

export default ProductThumbnail;
