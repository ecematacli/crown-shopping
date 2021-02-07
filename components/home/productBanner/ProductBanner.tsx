import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { BannerContainer } from './ProductBanner.styles';
import { GET_CATEGORY_ID } from '../../../graphql/queries/category';
import { CountryInfoContext } from '../../../contexts/CountryInfoContext';
import { useContext } from 'react';

interface Props {
  location: string;
  width?: number;
  height: number;
  content: { title: string, subtitle: string };
  category: string;
}

const ProductBanner = ({ width, height, location, content, category }: Props) => {
  const { countryInfo: { locale } } = useContext(CountryInfoContext);
  const variables = { where: `slug(${locale}="${category.toLowerCase()}")` };

  const { data } = useQuery(GET_CATEGORY_ID, { variables });

  console.log('is data coming in here?????', data)
  // const { } = useRouter();
  return (
    <BannerContainer width={width} height={height} location={location}>
      <div className='banner-image' />
      <div className='content'>
        <h1 className='title'>{content.title}</h1>
        <span className='subtitle'>{content.subtitle}</span>
      </div>
    </BannerContainer>
  );
};

export default ProductBanner;
