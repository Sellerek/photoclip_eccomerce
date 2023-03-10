import React from 'react';
import Link from 'next/link';

import Cart from './Cart';

import { useStateContext } from '../context/StateContext';

import { AiFillGithub, AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Photoclip store</Link>
      </p>
      <button
        type='button'
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantity}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
