import { ProductBannerContainer, Image } from './ProductBanner.styles';

interface Props {
  location: string;
  width?: number;
  height?: number;
}

const ProductBanner = ({ width, height, location }: Props) => (
  <ProductBannerContainer>
    <Image
      src={`/images/banner-${location}.jpg`}
      alt={`banner-${location}`}
      width={width}
      height={height}
    />
  </ProductBannerContainer>
);

export default ProductBanner;
