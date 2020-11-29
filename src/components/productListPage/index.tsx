import React from 'react';
import { RouteComponentProps } from 'react-router';

import useProductList from './useProductList';
import ProductThumbnail from './productThumbnail/ProductThumbnail';

interface Props extends RouteComponentProps<{ id: string }> { }

const ProductListPage: React.FC<Props> = ({ match: { params } }) => {
  const { products } = useProductList(params.id)

  console.log('params', params)

  return (
    <div>
      {products.map(pr => <ProductThumbnail product={pr} key={pr.id} />)}

    </div>)
}

export default ProductListPage;