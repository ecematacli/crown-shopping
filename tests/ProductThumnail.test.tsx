import { render, screen } from '@testing-library/react';

import ProductThumnail from '../components/productThumbnail/ProductThumbnail';

let productName = 'Long sleeve T-Shirt Michael Kors';
let product = {
  id: 1,
  sku: 'EA2021',
  images: [
    {
      url:
        'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082351_1_medium.jpg',
    },
  ],
  price: {
    id: 'e1d0323a-adbf-40b5-9d9b-7d406e529925',
    country: 'US',
    value: {
      centAmount: 15000,
      currencyCode: 'USD',
      fractionDigits: 2,
    },
    discounted: null,
  },
  prices: [
    {
      id: 'd6a639fa-a56f-41a4-956e-259a1aeb86d0',
      country: 'US',
      discounted: null,
      value: {
        id: 'e1d0323a-adbf-40b5-9d9b-7d406e529925',
        currencyCode: 'EUR',
        centAmount: 15000,
        fractionDigits: 2,
      },
    },
  ],
};

describe('App', () => {
  it('renders component without crashing', () => {
    render(<ProductThumnail productName={productName} product={product} />);
    expect(screen.getByRole('p', { name: '$15,000.00' })).toBeInTheDocument();
  });
});
