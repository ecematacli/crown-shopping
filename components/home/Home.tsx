import { ProductsAPIResponse } from '../../types/products';
import Carousel from './carousel/Carousel';
import ProductCarousel from './productCarousel/ProductCarousel';
import CategoryBanners from './categoryBanners/CategoryBanners';
import { HomeContainer } from './Home.styles';

interface Props {
  products: ProductsAPIResponse;
}

const Home = ({ products }: Props) => (
  <HomeContainer>
    <div className='carousel-wrapper'>
      <Carousel />
    </div>
    <div className='category-banners-wrapper'>
      <CategoryBanners />
    </div>
    <div className='product-carousel-wrapper'>
      <ProductCarousel products={products} />
    </div>
  </HomeContainer>
);

export default Home;
