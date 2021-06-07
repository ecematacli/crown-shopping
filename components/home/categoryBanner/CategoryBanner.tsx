import { BannerContainer } from './CategoryBanner.styles';

interface Props {
  location: string;
  width?: number;
  height: number;
  content: { title: string, subtitle: string };
  category: string;
}

const ProductBanner = ({ width, height, location, content }: Props) => (
  <BannerContainer width={width} height={height} location={location}>
    <div className='banner-image' />
    <div className='content'>
      <h1 className='title'>{content.title}</h1>
      <span className='subtitle'>{content.subtitle}</span>
    </div>
  </BannerContainer>
);


export default ProductBanner;
