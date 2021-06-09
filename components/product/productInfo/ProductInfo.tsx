import ProductThumbnail from '../../productThumbnail/ProductThumbnail'
import { Product } from '../../../graphql/queries/types/Product'
import useScreenWidth from '../../../common/hooks/useScreenWidth'
import { StyledProductInfo } from './ProductInfo.styles'
import { useCountryInfoContext } from '../../../common/contexts/CountryInfoContext'
import { GET_PRODUCT } from '../../../graphql/queries/product'
import { useQuery } from '@apollo/client'
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner'
import { Align } from '../../align/Align'
import { useTranslation } from '../../../i18n'

const ProductInfo: React.FC<{ sku: string }> = ({ sku }) => {
  const { isSmallScreen } = useScreenWidth()
  const { countryInfo } = useCountryInfoContext()
  const { t } = useTranslation('product')


  const variables = {
    sku: sku,
    where: `sku="${sku}"`,
    locale: countryInfo?.locale,
    currency: countryInfo?.currency,
    country: countryInfo?.code
  }

  const { data, loading } = useQuery<Product>(GET_PRODUCT, { variables })

  const product = data?.product.masterData.current

  return (
    <StyledProductInfo>
      {loading && <LoadingSpinner />}
      {!loading && !product && (
        <Align justify="center" align="center" fullWidth margin={[10, 0]}>
          {t('noProduct')}
        </Align>
      )}
      {product && <ProductThumbnail
        productName={product.name}
        product={product.masterVariant}
        width={!isSmallScreen ? '35' : null}
        hasNoFrame={isSmallScreen}
      />}
    </StyledProductInfo>
  )
}

export default ProductInfo
