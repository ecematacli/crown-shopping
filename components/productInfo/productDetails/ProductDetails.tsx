import { Product_product_masterData_current_variant_attributesRaw } from '../../../graphql/queries/types/Product'
import { StyledProductDetails } from './ProductDetails.styles'
import { Align } from '../../align/Align'
import PaddedLayout from '../../layouts/paddedLayout/PaddedLayout'
import { useTranslation } from '../../../i18n'
import ProductDetailsAccordion from '../productDetailsAccordion/ProductDetailsAccordion'
import { useCountryInfoContext } from '../../../common/contexts/CountryInfoContext'

interface Props {
  productAttributes: Product_product_masterData_current_variant_attributesRaw[]
}

const ProductDetails: React.FC<Props> = ({ productAttributes }) => {
  const { t } = useTranslation('product')
  const {
    countryInfo: { locale },
  } = useCountryInfoContext()

  const getProductAttribute = (attrName: string) => {
    return productAttributes?.find(
      attr => attr.attributeDefinition.name === attrName
    )?.value
  }

  const productOverview = () => (
    <Align vertical fullWidth className='overview-container'>
      <Align align='center' className='space' fullWidth>
        <h4>{t('brand')}: </h4>
        <span className='attr-value'>
          {getProductAttribute('designer')?.label || '-'}
        </span>
      </Align>
      <Align align='center' className='space'>
        <h4>{t('size')}: </h4>
        <span className='attr-value'>{getProductAttribute('size') || '-'}</span>
      </Align>
      <Align align='center' className='space'>
        <h4>{t('color')}: </h4>
        <span className='attr-value'>
          {getProductAttribute('color')?.label[locale] || '-'}
        </span>
      </Align>
      <Align align='center' className='space'>
        <h4>{t('season')}: </h4>
        <span className='attr-value'>
          {getProductAttribute('season') || '-'}
        </span>
      </Align>
      <Align align='center' className='space'>
        <h4>{t('style')}: </h4>
        <span className='attr-value'>
          {getProductAttribute('style')?.label || '-'}
        </span>
      </Align>
      <Align align='center' className='space'>
        <h4>{t('itemNumber')}: </h4>
        <span className='attr-value'>
          {getProductAttribute('matrixId') || '-'}
        </span>
      </Align>
    </Align>
  )

  const deliveryAndReturnsInfo = () => (
    <ul className="delivery-return-info">
      {t('deliveryAndReturnsInfo').split('. ').map(item => (
        <li className="space" key={item}>{item}</li>
      ))}
    </ul>
  )

  return (
    <StyledProductDetails>
      <PaddedLayout>
        <ProductDetailsAccordion title={t('overview')}>
          {productOverview()}
        </ProductDetailsAccordion>
        <ProductDetailsAccordion title={t('deliveryAndReturns')}>
          {deliveryAndReturnsInfo()}
        </ProductDetailsAccordion>
      </PaddedLayout>
    </StyledProductDetails>
  )
}

export default ProductDetails
