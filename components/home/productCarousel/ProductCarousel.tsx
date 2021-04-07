import Carousel from 'react-multi-carousel';

import PaddedLayout from '../../layouts/paddedLayout/PaddedLayout';
import { ProductsAPIResponse, Product } from '../../../types/products';
import ProductThumbnail from '../../productThumbnail/ProductThumbnail';
import { StyledProductCarousel } from './ProductCarousel.styles';
import BaseButton from '../../baseButton/BaseButton';
import { useTranslation } from '../../../i18n';
import { useCountryInfoContext } from '../../../common/contexts/CountryInfoContext';

interface Props {
  products: ProductsAPIResponse;
  deviceType: string;
}

const ProductCarousel = ({ products, deviceType }: Props) => {
  const { t } = useTranslation('index');
  const { countryInfo } = useCountryInfoContext();

  const productsData = [...products?.results].slice(0, 12);

  const responsive = {
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: {
        max: 4000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <StyledProductCarousel>
      <PaddedLayout>
        <Carousel
          ssr
          deviceType={deviceType}
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className='product-carousel'
          draggable
          focusOnSelect={false}
          infinite
          itemClass='product-carousel-item'
          renderButtonGroupOutside={true}
          keyBoardControl
          minimumTouchDrag={80}
          slidesToSlide={2}
          customTransition='900ms'
          swipeable>
          {productsData.map((product: Product) => (
            <ProductThumbnail
              key={product.id}
              productName={product.name[countryInfo.locale]}
              product={product.masterVariant}
            >
              <BaseButton
                text={t('addToCart').toUpperCase()}
                variant='outline-secondary'
                className='btn'
              />
            </ProductThumbnail>
          ))}
        </Carousel>
      </PaddedLayout>
    </StyledProductCarousel>
  );
};

export default ProductCarousel;
