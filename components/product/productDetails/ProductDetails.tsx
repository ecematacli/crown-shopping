import { Product_product_masterData_current_variant_attributesRaw } from '../../../graphql/queries/types/Product'
import { StyledProductDetails } from './ProductDetails.styles'
import { Align } from '../../align/Align'
import PaddedLayout from '../../layouts/paddedLayout/PaddedLayout'
import { useTranslation } from '../../../i18n'
import ProductDetailsItem from '../productDetailsItem/ProductDetailsItem'
import { useCountryInfoContext } from '../../../common/contexts/CountryInfoContext'

interface Props {
  productAttributes: Product_product_masterData_current_variant_attributesRaw[]
}

const ProductDetails: React.FC<Props> = ({ productAttributes }) => {
  const { t } = useTranslation('product')
  const { countryInfo: { locale } } = useCountryInfoContext()
  console.log('dets!', productAttributes)

  const getProductAttribute = (attrName) => {
    return productAttributes?.find(attr => attr.attributeDefinition.name === attrName)
  }

  const displayOverview = () => (
    <Align vertical fullWidth className="attr-container">
      <Align align="center" className="wrapper" fullWidth>
        <h4>{t('brand')}: </h4>
        <span className="attr-value">{getProductAttribute('designer').value?.label || '-'}</span>
      </Align>
      <Align align="center" className="wrapper">
        <h4>{t('size')}: </h4>
        <span className="attr-value">{getProductAttribute('size').value || '-'}</span>
      </Align>
      <Align align="center" className="wrapper">
        <h4>{t('color')}: </h4>
        <span className="attr-value">{getProductAttribute('color').value.label[locale] || '-'}</span>
      </Align>
      <Align align="center" className="wrapper">
        <h4>{t('season')}: </h4>
        <span className="attr-value">{getProductAttribute('season').value || '-'}</span>
      </Align>
      <Align align="center" className="wrapper">
        <h4>{t('style')}: </h4>
        <span className="attr-value">{getProductAttribute('style').value.label || '-'}</span>
      </Align>
      <Align align="center" className="wrapper">
        <h4>{t('itemNumber')}: </h4>
        <span className="attr-value">{getProductAttribute('matrixId').value || '-'}</span>
      </Align>
    </Align>
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
