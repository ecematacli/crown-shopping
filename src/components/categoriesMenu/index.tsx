import React from 'react'

import { capitalizeFirstLetter } from '../../utils'
import useCategoriesMenu from './useCategoriesMenu'
import AppLayout from '../../common/components/appLayout/AppLayout'
import { MenuContainer, MenuNavbar } from './index.styles'

const CategoriesMenu = () => {
  const { data } = useCategoriesMenu()

  const renderCategories = () => {
    return data.categories.results.map(category => (
      <li onMouseEnter={() => console.log('called!!')} key={category.id} className='menu-item'>
        {capitalizeFirstLetter(category.slug)}
      </li>
    ))
  }

  return (
    <MenuContainer>
      <AppLayout className='some'>
        <MenuNavbar>{data && renderCategories()}</MenuNavbar>
      </AppLayout>
    </MenuContainer>
  )
}

export default CategoriesMenu
