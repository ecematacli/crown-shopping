import { Product_product_masterData_current_variant_attributesRaw } from '../../../graphql/queries/types/Product'
import { StyledProductDetails } from './ProductDetails.styles'
import { Align } from '../../align/Align'
import PaddedLayout from '../../layouts/paddedLayout/PaddedLayout'
import { useTranslation } from '../../../i18n'
import ProductDetailsItem from '../productDetailsItem/ProductDetailsItem'

interface Props {
  productAttributes: Product_product_masterData_current_variant_attributesRaw[]
}

const ProductDetails: React.FC<Props> = ({ productAttributes }) => {
  const { t } = useTranslation('product')
  console.log('dets!', productAttributes)

  const getProductAttribute = (attrName) => {
    const matched = productAttributes?.find(attr => attr.attributeDefinition.name === attrName)
    return typeof matched === 'string' ? matched : matched.value
  }

  const displayOverview = () => (
    <div>
      <Align align="center">
        <h4>{t('brand')}: </h4>
        <span>{getProductAttribute('designer').label}</span>
      </Align>
    </div>
  )
  return (
    <StyledProductDetails>
      <PaddedLayout>
        <ProductDetailsItem title={t('overview')}>
          {displayOverview()}
        </ProductDetailsItem>
        <ProductDetailsItem title={t('deliveryAndReturns')}>
          <p>Hoi </p>
        </ProductDetailsItem>
      </PaddedLayout>
    </StyledProductDetails>
  )
}

export default ProductDetails
