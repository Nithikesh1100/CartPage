import React from 'react';
import { useGlobalContext } from './context';

const CartItem = ({ item }) => {
  const {id,title, price, img, amount } = item;
  const{setIncrease, setDecrease,removeItem} =useGlobalContext();
  return (
    <article className='cart-item'>
      <div className='img-container'>
        <img src={img} alt={title} style={{ width: '200px', height: '200px', marginRight: '10px' }} />
      </div>
      <div className='nameNprice'>
        <h4>{title}</h4>
        <p className='item-price'>${price}</p>
        {/* remove button */}
        <button className='remove-btn' onClick={()=>removeItem(id)}>REMOVE</button>
      </div>
      <div className='amountToggle'>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => setIncrease(id)}>
          <svg className="up" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => setDecrease(id)}>
          <svg className="down" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
