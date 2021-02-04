import Carousel from './carousel/Carousel';
import HomeContent from './homeContent/HomeContent';
import { ProductsAPIResponse } from '../../types/products';

interface Props {
  products: ProductsAPIResponse;
}

const Home = ({ products }: Props) => {
  return (
    <div>
      <Carousel />
      <HomeContent products={products} />
    </div>
  );
};

export default Home;

