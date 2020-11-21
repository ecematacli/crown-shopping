import { useContext } from 'react'
import { useQuery } from '@apollo/client'

import { GET_CATEGORIES } from '../../graphql/queries/category'
import { Categories } from '../../graphql/queries/types/categories'
import { LocaleContext } from '../../contexts/LocaleContext'

export default () => {
  const { locale } = useContext(LocaleContext)
  const variables = { locale, where: 'parent is not defined' }

  const { data } = useQuery<Categories>(GET_CATEGORIES, {
    variables,
  })

  return {
    data,
  }
}
