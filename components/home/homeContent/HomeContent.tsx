import ProductTiles from '../productTiles/ProductTiles';
import { ProductsAPIResponse } from '../../../types/productsApi';

interface Props {
  products: ProductsAPIResponse;
}

const HomeContent = ({ products }: Props) => (
  <ProductTiles products={products} />
);

export default HomeContent;