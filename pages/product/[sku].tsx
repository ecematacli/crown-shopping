import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import { useTranslation } from '../../i18n'
import Layout from '../../components/layouts/pageLayout/Layout'
import PaddedLayout from '../../components/layouts/paddedLayout/PaddedLayout'
import { GET_PRODUCT } from '../../graphql/queries/product'
import { Product } from '../../graphql/queries/types/Product'
import ProductInfo from '../../components/product/productInfo/ProductInfo'
import useScreenWidth from '../../common/hooks/useScreenWidth'
import { useCountryInfoContext } from '../../common/contexts/CountryInfoContext'

const ProductPage = () => {
  const { t } = useTranslation('product')
  const { isSmallScreen } = useScreenWidth()
  const { countryInfo } = useCountryInfoContext()

  const { query } = useRouter()

  const variables = {
    sku: query.sku,
    where: `sku="${query.sku}"`,
    locale: countryInfo?.locale,
    currency: countryInfo?.currency,
    country: countryInfo?.code
  }

  const { data } = useQuery<Product>(GET_PRODUCT, { variables })

  return (
    <Layout title={t('title')}>
      <PaddedLayout padding={{ rightLeft: isSmallScreen ? '0' : '2.4' }}>
        {data && <ProductInfo product={data.product?.masterData.current} />}
      </PaddedLayout>
    </Layout>
  )
}

export default ProductPage
