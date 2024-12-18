import { useQuery } from '@apollo/client'

import { StyledProductInfo } from './index.styles'
import { Product } from '../../graphql/queries/types/Product'
import ProductThumbnail from '../productThumbnail/ProductThumbnail'
import ProductDetails from './productDetails/ProductDetails'
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'
import useScreenWidth from '../../common/hooks/useScreenWidth'
import { useCountryInfoContext } from '../../common/contexts/CountryInfoContext'
import { GET_PRODUCT } from '../../graphql/queries/product'
import { Align } from '../align/Align'
import { useTranslation } from '../../i18n'
import ProductReview from './productReview/ProductReview'

const ProductInfo: React.FC<{ sku: string }> = ({ sku }) => {
  const { isSmallScreen } = useScreenWidth()
  const { countryInfo } = useCountryInfoContext()
  const { t } = useTranslation('product')

  const variables = {
    sku: sku,
    where: `sku="${sku}"`,
    locale: countryInfo?.locale,
    currency: countryInfo?.currency,
    country: countryInfo?.code,
  }

  const { data, loading } = useQuery<Product>(GET_PRODUCT, { variables })

  const product = data?.product.masterData.current
  const productAttributes = product?.variant.attributesRaw
  const isInStock = productAttributes?.find(
    attr => attr.name === 'isOnStock'
  )?.value

  const displayNoProductMsg = () => (
    <Align justify='center' align='center' fullWidth margin={[10, 0]}>
      {t('noProduct')}
    </Align>
  )

  const displayProductInfo = () => (
    <div>
      <ProductThumbnail
        productName={product.name}
        product={product.masterVariant}
        width={!isSmallScreen ? '35' : null}
        hasNoFrame={isSmallScreen}
      />
      <Align padding={[0, 2, 0]} className='stock-info' justify='center'>
        {isInStock ? t('inStock') : t('notInStock')}
      </Align>
      <ProductDetails productAttributes={productAttributes} />
      <ProductReview />
    </div>
  )

  return (
    <StyledProductInfo>
      {loading && <LoadingSpinner />}
      {!loading && !product && displayNoProductMsg()}
      {product && displayProductInfo()}
    </StyledProductInfo>
  )
}

export default ProductInfo
