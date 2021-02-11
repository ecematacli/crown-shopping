import { useContext } from 'react';
import { Card } from 'react-bootstrap';

import { StyledProductThumbnail } from './ProductThumbnail.styles';
import { Product } from '../../types/products';
import { CountryInfoContext } from '../../contexts/CountryInfoContext';
import useScreenWidth from '../../hooks/useScreenWidth';
import { formatCurrency } from '../../utils/helpers';

interface Props {
  product: Product;
  children?: React.ReactNode;
  width?: number;
}

const ProductThumbnail = ({ product, children, width }: Props) => {
  const {
    countryInfo: { locale, code, currency },
  } = useContext(CountryInfoContext);
  const { isSmallScreen } = useScreenWidth();

  const countryCode = `${locale}-${code}`;

  const { masterVariant } = product;

  const name: string = product.name[locale];
  const imageSrc = masterVariant.images[0].url;
  const price =
    masterVariant.price?.value.centAmount ||
    masterVariant.prices[0].value.centAmount;
  const fractionDigits =
    masterVariant.price?.value.fractionDigits |
    masterVariant.prices[0].value.fractionDigits;

  return (
    <StyledProductThumbnail width={width} isSmallScreen={isSmallScreen}>
      <Card>
        <Card.Img variant='top' src={imageSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {formatCurrency(price, countryCode, currency, fractionDigits)}
          </Card.Text>
          {children && children}
        </Card.Body>
      </Card>
    </StyledProductThumbnail>
  );
};

export default ProductThumbnail;
