import Carousel from './carousel/Carousel';
import { ProductsAPIResponse } from '../../types/products';
import ProductCarousel from './productCarousel/ProductCarousel';
import ProductBanner from './productBanner/ProductBanner';
import PaddedLayout from '../paddedLayout/PaddedLayout';
import { BannerContainer } from './Home.styles';
import useScreenWidth from '../../hooks/useScreenWidth';

interface Props {
  products: ProductsAPIResponse;
}

const Home = ({ products }: Props) => {
  const { isSmallScreen } = useScreenWidth();

  return (
    <div>
      <Carousel />
      <ProductCarousel products={products} />
      <PaddedLayout>
        <BannerContainer>
          <ProductBanner location='row1' height={!isSmallScreen ? 42 : 19.8} />
        </BannerContainer>
      </PaddedLayout>
    </div>
  );
};

export default Home;
