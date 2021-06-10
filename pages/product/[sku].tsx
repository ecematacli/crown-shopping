import { useRouter } from 'next/router'

import { useTranslation } from '../../i18n'
import Layout from '../../components/layouts/pageLayout/Layout'
import PaddedLayout from '../../components/layouts/paddedLayout/PaddedLayout'
import ProductInfo from '../../components/productInfo'
import useScreenWidth from '../../common/hooks/useScreenWidth'

const ProductPage = () => {
  const { t } = useTranslation('product')
  const { isSmallScreen } = useScreenWidth()

  const { query } = useRouter()

  return (
    <Layout title={t('title')}>
      <PaddedLayout padding={{ rightLeft: isSmallScreen ? '0' : '2.4' }}>
        <ProductInfo sku={query.sku as string} />
      </PaddedLayout>
    </Layout>
  )
}

export default ProductPage
