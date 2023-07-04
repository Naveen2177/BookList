import React from 'react'
import Linkedlist from '../components/linkedlist'

const Linklist = (props) => {
    console.log('props', props)
  return (
    <div>
        {
          props.products.map((product) =>{
            return(
              <div key={product.id}>
                <Linkedlist name={product.name}/>
              </div>
            )
          })
            
        }
    </div>
  )
}

export default Linklist