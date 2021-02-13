import { Container, Row, Col } from 'react-bootstrap';

import ProductBanner from '../categoryBanner/CategoryBanner';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import { BannerContainer } from './CategoryBanners.styles';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { useTranslation } from '../../../i18n';

const HomeBanners = () => {
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation('index');

  const height = !isSmallScreen ? 45 : 19.8;

  return (
    <PaddedLayout>
      <BannerContainer>
        <Container>
          <Row>
            <Col>
              <ProductBanner
                location='row1'
                height={height}
                content={{ title: t('bannerOne'), subtitle: t('shopNow') }}
                category={t('bannerOne')}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={7}>
              <ProductBanner
                location='row2-left'
                height={height}
                content={{ title: t('bannerTwo'), subtitle: t('shopNow') }}
                category={t('bannerTwo')}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} className='pad-left'>
              <ProductBanner
                location='row2-right'
                height={height}
                content={{ title: t('bannerThree'), subtitle: t('shopNow') }}
                category={t('bannerThree')}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={5}>
              <ProductBanner
                location='row3-left'
                height={height}
                content={{ title: t('bannerFour'), subtitle: t('shopNow') }}
                category={t('bannerThree')}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={7} className='pad-left'>
              <ProductBanner
                location='row3-right'
                height={height}
                content={{ title: t('bannerFive'), subtitle: t('shopNow') }}
                category={t('bannerTwo')}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProductBanner
                location='row4'
                height={height}
                content={{ title: t('bannerSix'), subtitle: t('shopNow') }}
                category={t('bannerSix')}
              />
            </Col>
          </Row>
        </Container>
      </BannerContainer>
    </PaddedLayout>
  );
};

export default HomeBanners;
