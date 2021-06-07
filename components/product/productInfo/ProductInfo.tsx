import ProductThumbnail from '../../productThumbnail/ProductThumbnail'
import { Product_product_masterData_current } from '../../../graphql/queries/types/Product'
import useScreenWidth from '../../../common/hooks/useScreenWidth'
import { StyledProductInfo } from './ProductInfo.styles'

interface Props {
  product: Product_product_masterData_current
}

const ProductInfo = ({ product }: Props) => {
  const { isSmallScreen } = useScreenWidth()

  return (
    <StyledProductInfo>
      <ProductThumbnail
        productName={product.name}
        product={product.masterVariant}
        width={!isSmallScreen ? '35' : null}
        hasNoFrame={isSmallScreen}
      />
    </StyledProductInfo>
  )
}

export default ProductInfo
