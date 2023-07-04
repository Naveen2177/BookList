import React from 'react'

const CartButton = (props) => {

  // function add(){
  //   let currentValue = parseInt(document.getElementById('value').innerHTML);
  //   document.getElementById('value').innerHTML = currentValue + 1;
  // }
  return (
    <div>
        <button className='bg-warning'>Add{props.title}to cart</button>
    </div>
  )
}

export default CartButton