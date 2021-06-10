import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'

import { Align } from '../../align/Align'
import { StyledAccordion } from './ProductDetailsAccordion.styles'

const ProductDetailsAccordion: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  const [openedItems, setOpenedItems] = useState<{ [key: string]: boolean }>({})

  const toggleItems = (item: string) =>
    setOpenedItems({ ...openedItems, [item]: !openedItems[item] })

  return (
    <StyledAccordion>
      <Accordion onClick={() => toggleItems(title)}>
        <Accordion.Toggle as='div' eventKey='0' className='expandable'>
          <Align justify='space-between' align='center'>
            <span style={{ fontSize: 15 }}>{title}</span>
            {openedItems[title] ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </Align>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Align>{children}</Align>
        </Accordion.Collapse>
      </Accordion>
    </StyledAccordion>
  )
}

export default ProductDetailsAccordion
