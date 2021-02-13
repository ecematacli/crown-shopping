import { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';

import { StyledProductThumbnail } from './ProductThumbnail.styles';
import { Product } from '../../types/products';
import { CountryInfoContext } from '../../contexts/CountryInfoContext';
import { formatCurrency } from '../../utils/helpers';

interface Props {
  product: Product;
  children?: React.ReactNode;
  width?: number;
  className?: string;
}

const ProductThumbnail = ({ product, width, children }: Props) => {
  const {
    countryInfo: { locale, code, currency },
  } = useContext(CountryInfoContext);

  const [isDisplayingDefaultImg, setIsDisplayingDefaultImg] = useState(false);
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

  const handleErrorImg = (e) => {
    e.target.onerror = null;
    e.target.src = '/images/no-image.png';

    // setIsDisplayingDefaultImg(true)
  };

  return (
    <StyledProductThumbnail width={width}>
      <Card>

        <Card.Img
          // variant='top'
          className="card-img-top"
          src={imageSrc}
          onError={handleErrorImg}
        />

        <Card.Body>
          <div className='card-body-wrapper'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {formatCurrency(price, countryCode, currency, fractionDigits)}
            </Card.Text>
          </div>
          {children && children}
        </Card.Body>
      </Card>
    </StyledProductThumbnail>
  );
};

export default ProductThumbnail;
