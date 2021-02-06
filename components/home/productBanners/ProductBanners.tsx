import { Container, Row, Col } from 'react-bootstrap';

import ProductBanner from '../banner/Banner';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import { BannerContainer } from './ProductBanners.styles';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { useTranslation } from '../../../i18n';

const ProductBanners = () => {
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation('index');

  const height = !isSmallScreen ? 45 : 19.8;

  return (
    <PaddedLayout>
      <BannerContainer isSmallScreen={isSmallScreen}>
        <Container>
          <Row>
            <Col>
              <ProductBanner location='row1' height={height} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={7} lg={7}>
              <ProductBanner
                location='row2-left'
                height={height}
                collection={{ title: t('bannerOne'), subtitle: t('shopNow') }}
              />
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} className='pad-left'>
              <ProductBanner
                location='row2-right'
                height={height}
                collection={{ title: t('bannerTwo'), subtitle: t('shopNow') }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={5} lg={5}>
              <ProductBanner
                location='row3-left'
                height={height}
                collection={{ title: t('bannerThree'), subtitle: t('shopNow') }}
              />
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} className='pad-left'>
              <ProductBanner
                location='row3-right'
                height={height}
                collection={{ title: t('bannerFour'), subtitle: t('shopNow') }}
              />
            </Col>
          </Row>
        </Container>
      </BannerContainer>
    </PaddedLayout>
  );
};

export default ProductBanners;
