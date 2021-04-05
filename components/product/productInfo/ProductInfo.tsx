import ProductThumbnail from '../../productThumbnail/ProductThumbnail';
import { Product_product_masterData_current } from '../../../graphql/queries/types/Product';

interface Props {
  product: Product_product_masterData_current;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <ProductThumbnail productName={product.name} product={product.masterVariant} width={35} />
    </div>
  );
};


export default ProductInfo;
