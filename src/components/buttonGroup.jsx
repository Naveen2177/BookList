import React from 'react'
import CartButton from './buttons/cartButton'
import PreviewButton from './buttons/previewButton'

const ButtonGroup = (props) => {
    console.log('props',props)
  return (
    <div className='d-flex gap-5'>
        <CartButton/>
        <PreviewButton/>
    </div>
  )
}

export default ButtonGroup