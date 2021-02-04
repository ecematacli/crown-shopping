import { Card } from 'react-bootstrap';
import { StyledCard } from './ProductThumbnail.styles';

interface Props {
  product: any;
  children?: React.ReactNode
  width?: number;
}

const ProductThumbnail: React.FC<Props> = ({ product, children, width }) => {
  const imageSrc = product.masterVariant.images[0].url;

  return (
    <StyledCard width={width}>
      <Card.Img variant='top' src={imageSrc} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {children && children}
      </Card.Body>
    </StyledCard>
  );
};

export default ProductThumbnail;
