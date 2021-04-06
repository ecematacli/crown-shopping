import { Card } from 'react-bootstrap';

import { StyledProductThumbnail } from './ProductThumbnail.styles';
import { ProductVariant } from '../../types/products';
import { useCountryInfoContext } from '../../common/contexts/CountryInfoContext';
import { formatCurrency } from '../../common/utils/helpers';
import BaseImage from '../../components/baseImage/BaseImage';
import { Align } from '../align/Align';

interface Props {
  productName: string;
  product: ProductVariant;
  children?: React.ReactNode;
  width?: string;
  className?: string;
}

const ProductThumbnail = ({ productName, product, width, children }: Props) => {
  const {
    countryInfo: { locale, code, currency },
  } = useCountryInfoContext();

  const countryCode = `${locale}-${code}`;
  const imageSrc = product.images[0].url;
  const price =
    product.price?.value.centAmount ||
    product.prices[0].value.centAmount;
  const fractionDigits =
    product.price?.value.fractionDigits |
    product.prices[0].value.fractionDigits;

  return (
    <StyledProductThumbnail width={width}>
      <Card>
        <BaseImage
          src={imageSrc}
          fallbackSrc='/images/no-image.png'
          alt='product thumbnail'
          className='card-img-top'
        />
        <Card.Body>
          <Align justify="space-between" align="center">
            <Card.Title>{productName}</Card.Title>
            <Card.Text>
              {formatCurrency(price, countryCode, currency, fractionDigits)}
            </Card.Text>
          </Align>
          {children && children}
        </Card.Body>
      </Card>
    </StyledProductThumbnail>
  );
};

export default ProductThumbnail;
