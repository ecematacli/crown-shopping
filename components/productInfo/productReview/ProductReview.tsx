import { ProgressBar } from 'react-bootstrap'
import { MdStar, MdStarHalf } from 'react-icons/md'
import { useTheme } from 'styled-components';

import { useTranslation } from '../../../i18n'
import { Align } from '../../align/Align'
import PaddedLayout from '../../layouts/paddedLayout/PaddedLayout'
import { StyledProductReview } from './ProductReview.styles'

const ProductReview = () => {
  const { t } = useTranslation('product')
  const { palette } = useTheme()

  const displayOverview = () => (
    <Align justify='space-between' padding={[1.5, 0]}>
      <Align align="center">
        <span className='review-actual'>4.5</span>
        <span className='review-max'>/5</span>
      </Align>
      <div>
        {[1, 2, 3, 4].map(el => (
          <MdStar key={el} size={25} color={palette.darkGrays[0]} />
        ))}
        <MdStarHalf size={25} color={palette.darkGrays[0]} />
      </div>
    </Align>
  )

  const getReviewProgress = (rating: number) => (
    <ProgressBar className="review-progress" variant="success" now={rating} />
  )

  const displayReviewRatings = () => (
    [5, 4, 3, 2, 1].map(el => {
      if (el === 5) return getReviewProgress(75)
      else if (el === 3) return getReviewProgress(30)
      else if (el === 2) return getReviewProgress(15)
      return getReviewProgress(1)
    })
  )

  return (
    <PaddedLayout>
      <StyledProductReview>
        <h4>{t('reviews')} (10)</h4>
        {displayOverview()}
        {displayReviewRatings()}
      </StyledProductReview>
    </PaddedLayout>
  )
}

export default ProductReview
