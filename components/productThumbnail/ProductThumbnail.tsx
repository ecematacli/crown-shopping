import { useContext } from 'react';
import { Card } from 'react-bootstrap';

import { StyledProductThumbnail } from './ProductThumbnail.styles';
import { Product } from '../../types/products';
import { CountryInfoContext } from '../../common/contexts/CountryInfoContext';
import { formatCurrency } from '../../common/utils/helpers';
import BaseImage from '../../components/baseImage/BaseImage';

interface Props {
  product: Product;
  children?: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
}

const ProductThumbnail = ({ product, width, height, children }: Props) => {
  const {
    countryInfo: { locale, code, currency },
  } = useContext(CountryInfoContext);
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

  const fallbackSrc = '/images/no-image.png';

  return (
    <StyledProductThumbnail width={width} height={height}>
      <Card>
        <BaseImage
          src={imageSrc}
          fallbackSrc={fallbackSrc}
          alt='product thumbnail'
          className='card-img-top'
        />
        <Card.Body>
          <div className='card-body-wrapper'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {formatCurrency(price, countryCode, currency, fractionDigits)}
            </Card.Text>
          </div>
          <div>
            {children && children}
          </div>
        </Card.Body>
      </Card>
    </StyledProductThumbnail>
  );
};

export default ProductThumbnail;
