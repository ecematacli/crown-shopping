import { Product_product_masterData_current } from '../../../graphql/queries/types/Product';
import ProductThumbnail from '../../productThumbnail/ProductThumbnail';

interface Props {
  product: Product_product_masterData_current;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <ProductThumbnail productName={product.name} product={product.masterVariant} />
  );
};


export default ProductInfo;
