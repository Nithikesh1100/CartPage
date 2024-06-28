import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'
//import cartItems from './data'

const CartContainer = () => {

  const {cart,clearCart,total} = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h1 className='empty'>Products In Cart</h1>
          <h3 className='empty-cart'>Your cart is empty</h3>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      {cart.map((curElem) =>(
        <CartItem key={curElem.id} item={curElem}/>
      ))}

      <hr className='line'/>
        <div className='cart-total'>
          <h4>Total</h4>
          <h4>
            ${total}
          </h4>
        </div>
        <button className='btn clear-btn' onClick={()=>clearCart()}>
          Clear Cart
        </button>
     
    </section>
  )
}

export default CartContainer
