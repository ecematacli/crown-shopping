import ProductThumbnail from '../../productThumbnail/ProductThumbnail';
import { Product_product_masterData_current } from '../../../graphql/queries/types/Product';

interface Props {
  product: Product_product_masterData_current;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <ProductThumbnail productName={product.name} product={product.masterVariant} />
  );
};


export default ProductInfo;
