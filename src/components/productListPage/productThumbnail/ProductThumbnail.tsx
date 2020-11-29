import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap'

interface Props {
  product: any
}

const ProductThumbnail: React.FC<Props> = ({ product }) => {
  const imageSrc = product.masterVariant.images[0].url;
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={imageSrc} thumbnail />
        </Col>
      </Row>
    </Container>
  )
}

export default ProductThumbnail;