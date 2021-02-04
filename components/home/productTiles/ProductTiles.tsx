import Carousel from "react-multi-carousel";

import PaddedLayout from '../../paddedLayout/PaddedLayout';
import { ProductsAPIResponse } from '../../../types/products';
import ProductThumbnail from '../../productThumbnail/ProductThumbnail';
import { StyledProductTiles } from './ProductTiles.styles';

interface Props {
  products: ProductsAPIResponse;
}


const ProductTiles = ({ products }: Props) => {
  const productsData = [...products?.results].reverse().slice(0, 12);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  return (
    <StyledProductTiles>
      <PaddedLayout>
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className="product-carousel"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="product-carousel-item"
          renderButtonGroupOutside={true}
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {productsData.map(product => (
            <ProductThumbnail product={product} key={product.id} />
          ))}

        </Carousel>
      </PaddedLayout>
    </StyledProductTiles>
  );
};

export default ProductTiles;
