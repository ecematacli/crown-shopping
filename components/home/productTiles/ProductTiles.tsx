import Carousel from "react-multi-carousel";

import PaddedLayout from '../../paddedLayout/PaddedLayout';
import { ProductsAPIResponse } from '../../../types/productsApi';

interface Props {
  products: ProductsAPIResponse;
}


const ProductTiles = ({ products }: Props) => {

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
    <PaddedLayout>
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {products.results.map(p => (

          <img key={p.id} src={p.masterVariant.images[0].url} width={309} height={500} />
        ))}


      </Carousel>
    </PaddedLayout>
  );
};

export default ProductTiles;
