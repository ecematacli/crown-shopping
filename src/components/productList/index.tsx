import React from 'react';
import { RouteComponentProps } from 'react-router';

import useProductList from './useProductList';

interface Props extends RouteComponentProps<{ id: string }> { }

const ProductList: React.FC<Props> = ({ match: { params } }) => {
  const { products } = useProductList(params.id)

  console.log('runs!');

  return <div>Product List component</div>
}

export default ProductList