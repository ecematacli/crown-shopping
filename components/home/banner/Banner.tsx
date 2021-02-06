import { BannerContainer } from './Banner.styles';

interface Props {
  location: string;
  width?: number;
  height?: number;
  collection?: { title: string, subtitle: string };
}

const Banner = ({ width, height, location, collection }: Props) => (
  <BannerContainer width={width} height={height} location={location}>
    <div className='banner-image' />
    {collection && (
      <div className='content'>
        <h1 className='title'>{collection.title}</h1>
        <span className='subtitle'>{collection.subtitle}</span>
      </div>
    )}
  </BannerContainer>
)


export default Banner;
