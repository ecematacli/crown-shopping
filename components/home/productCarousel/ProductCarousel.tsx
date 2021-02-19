import Carousel from 'react-multi-carousel';

import PaddedLayout from '../../paddedLayout/PaddedLayout';
import { ProductsAPIResponse, Product } from '../../../types/products';
import ProductThumbnail from '../../productThumbnail/ProductThumbnail';
import { StyledProductCarousel } from './ProductCarousel.styles';
import BaseButton from '../../baseButton/BaseButton';
import { useTranslation } from '../../../i18n';

interface Props {
  products: ProductsAPIResponse;
}

const ProductCarousel = ({ products }: Props) => {
  const { t } = useTranslation('index');
  const productsData = [...products?.results].slice(0, 12);

  const responsive = {
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
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
          responsive={responsive}
          slidesToSlide={2}
          customTransition='900ms'
          swipeable>
          {productsData.map((product: Product) => (
            <ProductThumbnail product={product} key={product.id} height={50}>
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
