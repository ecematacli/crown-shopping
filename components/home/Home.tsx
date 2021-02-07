import { Fragment } from 'react';

import { ProductsAPIResponse } from '../../types/products';
import Carousel from './carousel/Carousel';
import ProductCarousel from './productCarousel/ProductCarousel';
import ProductBanners from './homeBanners/HomeBanners';

interface Props {
  products: ProductsAPIResponse;
}

const Home = ({ products }: Props) => {
  return (
    <Fragment>
      <Carousel />
      <ProductCarousel products={products} />
      <ProductBanners />
    </Fragment>
  );
};

export default Home;
