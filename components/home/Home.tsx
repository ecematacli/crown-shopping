import { ProductsAPIResponse } from '../../common/types/products';
import Carousel from './carousel/Carousel';
import ProductCarousel from './productCarousel/ProductCarousel';
import CategoryBanners from './categoryBanners/CategoryBanners';
import { HomeContainer } from './Home.styles';

interface Props {
  products: ProductsAPIResponse;
  deviceType: string;
}

const Home = ({ products, deviceType }: Props) => (
  <HomeContainer>
    <div className='carousel-wrapper'>
      <Carousel />
    </div>
    <div className='category-banners-wrapper'>
      <CategoryBanners />
    </div>
    <div className='product-carousel-wrapper'>
      <ProductCarousel products={products} deviceType={deviceType} />
    </div>
  </HomeContainer>
);

export default Home;
