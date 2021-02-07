import { useContext } from 'react';
import { Card } from 'react-bootstrap';

import { StyledProductThumbnail } from './ProductThumbnail.styles';
import { Product } from '../../types/products';
import { CountryInfoContext } from '../../contexts/CountryInfoContext';
import useScreenWidth from '../../hooks/useScreenWidth';

interface Props {
  product: Product;
  children?: React.ReactNode;
  width?: number;
}

const ProductThumbnail = ({ product, children, width }: Props) => {
  const {
    countryInfo: { locale },
  } = useContext(CountryInfoContext);
  const { isSmallScreen } = useScreenWidth();

  const name: string = product.name[locale];
  const imageSrc = product.masterVariant.images[0].url;
  const price = product.masterVariant.price.value.centAmount;

  return (
    <StyledProductThumbnail width={width} isSmallScreen={isSmallScreen}>
      <Card className='card'>
        <Card.Img variant='top' src={imageSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {children && children}
        </Card.Body>
      </Card>
    </StyledProductThumbnail>
  );
};

export default ProductThumbnail;
