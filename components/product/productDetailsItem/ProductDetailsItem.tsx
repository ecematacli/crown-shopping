import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'

import { Align } from '../../align/Align'

const ProductDetailsItem: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  const [openedItems, setOpenedItems] = useState<{ [key: string]: boolean }>({})

  const toggleItems = (item: string) =>
    setOpenedItems({ ...openedItems, [item]: !openedItems[item] })

  return (
    <Accordion onClick={() => toggleItems(title)}>
      <Accordion.Toggle as='div' eventKey='0' className='title'>
        <Align justify='space-between' align='center'>
          <span>{title}</span>
          {openedItems[title] ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </Align>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey='0'>
        <Align>{children}</Align>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default ProductDetailsItem
